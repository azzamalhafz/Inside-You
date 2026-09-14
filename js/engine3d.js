/**
 * INSIDE YOU 3D Engine — Persistent Three.js WebGL Engine
 * Manages WebGLRenderer, Scene, OrbitControls, GLTFLoader, Raycasting, Auto-Centering & Smooth Framing.
 */

window.activeAnatomyContext = "";
window.selectedAnatomyNode = null;

window.INSIDE_YOU_ENGINE = (function() {
  let containerEl = null;
  let renderer = null;
  let scene = null;
  let camera = null;
  let controls = null;
  let raycaster = null;
  let mouse = new THREE.Vector2();

  let modelGroup = null;
  let activeModelSpecs = [];
  let modelLoadRequestId = 0;
  let allMeshes = [];
  let systemMeshMap = {}; // systemId -> array of meshes
  let organMeshMap = {};  // organId -> array of meshes
  let selectedMesh = null;
  let originalMaterials = new Map(); // mesh -> original material

  let isLoaded = false;
  let isAutoRotate = true;
  let isCameraAnimating = false;
  let onSelectCallback = null;
  let animationFrameId = null;

  // Smooth camera animation targets (neutral full-body framing)
  let targetCamPos = new THREE.Vector3(0, 1.2, 3.5);
  let targetLookAt = new THREE.Vector3(0, 1.0, 0);

  /**
   * Initializes the persistent 3D WebGL Engine into container.
   */
  function init(container, selectCb) {
    containerEl = container;
    onSelectCallback = selectCb;

    // 1. Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // Slate dark default

    // 2. Camera setup - default neutral full-body overview framing
    const aspect = (containerEl.clientWidth || window.innerWidth) / (containerEl.clientHeight || window.innerHeight);
    camera = new THREE.PerspectiveCamera(45, aspect, 0.01, 1000);
    camera.position.set(0, 1.2, 3.5);

    // 3. Renderer setup
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: true
    });
    renderer.setSize(containerEl.clientWidth || window.innerWidth, containerEl.clientHeight || window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Clear previous canvas if re-initializing
    containerEl.innerHTML = "";
    containerEl.appendChild(renderer.domElement);

    // 4. Orbit Controls with Damping & Limits
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 50; // Prevent camera from panning out too far
    controls.minDistance = 0.02; // Prevent camera clipping inside meshes
    controls.target.set(0, 1.0, 0);

    // Stop auto-rotate when user interacts
    controls.addEventListener("start", () => {
      isAutoRotate = false;
      isCameraAnimating = false;
    });

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00f2fe, 0.8); // Cyan fill
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    const headLight = new THREE.PointLight(0xffffff, 0.5);
    camera.add(headLight);
    scene.add(camera);

    // 6. Raycaster & Event Listeners
    raycaster = new THREE.Raycaster();

    window.addEventListener("resize", handleResize);
    renderer.domElement.addEventListener("click", handlePointerClick);

    // Start Render Loop
    if (!animationFrameId) {
      animate();
    }
  }

  /**
   * Main Render Loop
   */
  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    if (controls) {
      if (isAutoRotate && modelGroup) {
        modelGroup.rotation.y += 0.0025;
      }
      controls.update();
    }

    // Smooth camera lerp interpolation
    if (isCameraAnimating && camera && controls) {
      camera.position.lerp(targetCamPos, 0.09);
      controls.target.lerp(targetLookAt, 0.09);

      if (camera.position.distanceTo(targetCamPos) < 0.003 && controls.target.distanceTo(targetLookAt) < 0.003) {
        isCameraAnimating = false;
      }
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  /**
   * Handles window / container resize smoothly.
   */
  function handleResize() {
    if (!containerEl || !renderer || !camera) return;
    const w = containerEl.clientWidth;
    const h = containerEl.clientHeight;
    if (w === 0 || h === 0) return;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  /**
   * Computes camera framing to fit dynamic bounding boxes without clipping
   */
  function computeBoundingBoxFraming(box, fitOffset = 1.4) {
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z, 0.1);

    const fovRad = (camera.fov * Math.PI) / 180;
    const aspect = camera.aspect || 1;
    const hFOV = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);

    const distV = (size.y / 2) / Math.tan(fovRad / 2);
    const distH = (size.x / 2) / Math.tan(hFOV / 2);
    const fitDistance = Math.max(distV, distH, maxDim) * fitOffset;

    // Recalibrate near & far clipping planes dynamically
    camera.near = Math.max(fitDistance / 100, 0.01);
    camera.far = Math.max(fitDistance * 100, 1000);
    camera.updateProjectionMatrix();

    return {
      center,
      targetPos: new THREE.Vector3(
        center.x,
        center.y + (size.y * 0.08),
        center.z + Math.max(fitDistance, 0.35)
      )
    };
  }

  function disposeMaterial(material, disposedMaterials, disposedTextures) {
    if (!material || disposedMaterials.has(material)) return;
    disposedMaterials.add(material);
    Object.keys(material).forEach(key => {
      const value = material[key];
      if (value && value.isTexture && !disposedTextures.has(value)) {
        disposedTextures.add(value);
        value.dispose();
      }
    });
    material.dispose();
  }

  /** Safely releases the active course model before another course is loaded. */
  function disposeModel() {
    if (!modelGroup) return;

    const geometries = new Set();
    const materials = new Set();
    const textures = new Set();
    modelGroup.traverse(child => {
      if (!child.isMesh) return;
      if (child.geometry && !geometries.has(child.geometry)) {
        geometries.add(child.geometry);
        child.geometry.dispose();
      }
      const meshMaterials = Array.isArray(child.material) ? child.material : [child.material];
      meshMaterials.forEach(material => disposeMaterial(material, materials, textures));
    });

    scene.remove(modelGroup);
    modelGroup = null;
    allMeshes = [];
    systemMeshMap = {};
    organMeshMap = {};
    originalMaterials.clear();
    selectedMesh = null;
    isLoaded = false;
    activeModelSpecs = [];
  }

  function normalizeAndCenterModel(group, targetHeight) {
    group.updateMatrixWorld(true);
    const sourceBox = new THREE.Box3().setFromObject(group);
    const sourceSize = sourceBox.getSize(new THREE.Vector3());
    const sourceHeight = Math.max(sourceSize.y, sourceSize.x * 0.55, sourceSize.z * 0.55, 0.01);
    group.scale.setScalar((targetHeight || 4.4) / sourceHeight);
    group.updateMatrixWorld(true);
    const scaledBox = new THREE.Box3().setFromObject(group);
    group.position.sub(scaledBox.getCenter(new THREE.Vector3()));
  }

  function indexMeshes() {
    allMeshes = [];
    systemMeshMap = {};
    organMeshMap = {};
    originalMaterials.clear();

    modelGroup.traverse(child => {
      if (!child.isMesh) return;
      allMeshes.push(child);
      originalMaterials.set(child, child.material);

      const nodeInfo = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(child.name, child.parent?.name);
      child.userData.nodeInfo = nodeInfo;
      (systemMeshMap[nodeInfo.systemId] ||= []).push(child);
      if (nodeInfo.organId) (organMeshMap[nodeInfo.organId] ||= []).push(child);
    });
  }

  /** Frames every loaded group, including the coordinated two-model muscle course. */
  function frameModel(fitOffset = 1.4, immediate = false) {
    if (!modelGroup) return;
    modelGroup.updateMatrixWorld(true);
    const framing = computeBoundingBoxFraming(new THREE.Box3().setFromObject(modelGroup), fitOffset);
    targetLookAt.copy(framing.center);
    targetCamPos.copy(framing.targetPos);
    if (immediate) {
      controls.target.copy(framing.center);
      camera.position.copy(framing.targetPos);
    }
    isCameraAnimating = !immediate;
  }

  let dracoLoaderInstance = null;
  function getDracoLoader() {
    if (!dracoLoaderInstance && typeof THREE.DRACOLoader !== "undefined") {
      dracoLoaderInstance = new THREE.DRACOLoader();
      dracoLoaderInstance.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.4.3/");
      dracoLoaderInstance.preload();
    }
    return dracoLoaderInstance;
  }

  /**
   * Switches the persistent renderer to one or more course models. Models are
   * disposed before loading, so large course assets do not remain on the GPU.
   */
  function switchModel(specs, onProgress, onLoad, onError) {
    const requestedSpecs = Array.isArray(specs) ? specs : [specs];
    const requestId = ++modelLoadRequestId;
    disposeModel();
    const loader = new THREE.GLTFLoader();
    const draco = getDracoLoader();
    if (draco) {
      loader.setDRACOLoader(draco);
    }
    const courseGroup = new THREE.Group();
    const loadedGroups = [];
    let completed = 0;
    let failed = false;

    requestedSpecs.forEach((spec, index) => {
      loader.load(
        spec.url,
        gltf => {
          if (requestId !== modelLoadRequestId) return;
          const group = gltf.scene;
          normalizeAndCenterModel(group, spec.targetHeight);
          const offset = spec.offset || [0, 0, 0];
          group.position.add(new THREE.Vector3(offset[0] || 0, offset[1] || 0, offset[2] || 0));
          courseGroup.add(group);
          loadedGroups[index] = group;
          completed++;

          if (completed === requestedSpecs.length && !failed) {
            modelGroup = courseGroup;
            activeModelSpecs = requestedSpecs;
            scene.add(modelGroup);
            indexMeshes();
            frameModel(1.4, true);
            isLoaded = true;
            if (onLoad) onLoad({ nodeCount: allMeshes.length, meshes: allMeshes, models: loadedGroups });
          }
        },
        xhr => {
          if (!onProgress || requestId !== modelLoadRequestId) return;
          const fallbackTotal = spec.bytes || 1;
          const total = xhr.total || fallbackTotal;
          const localPercent = Math.min(xhr.loaded / total, 1);
          const percent = Math.round(((completed + localPercent) / requestedSpecs.length) * 100);
          onProgress(percent, xhr.loaded, total);
        },
        err => {
          if (requestId !== modelLoadRequestId || failed) return;
          failed = true;
          console.error("Course GLTFLoader Error:", spec.url, err);
          if (onError) onError(err, spec);
        }
      );
    });
  }

  /** Backward-compatible single-model loader. Uses z anatomy I byte size hint for progress. */
  function loadModel(url, onProgress, onLoad, onError) {
    switchModel([{ url, bytes: 309166894, targetHeight: 4.4 }], onProgress, onLoad, onError);
  }

  /**
   * Raycasting Click Handler with Recursive Child Traversal
   */
  function handlePointerClick(e) {
    if (!isLoaded || !allMeshes.length) return;

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const visibleMeshes = allMeshes.filter(m => m.visible);
    const intersects = raycaster.intersectObjects(visibleMeshes, true);

    if (intersects.length > 0) {
      let hitMesh = intersects[0].object;
      while (hitMesh && !hitMesh.isMesh && hitMesh.parent) {
        hitMesh = hitMesh.parent;
      }
      if (hitMesh && hitMesh.isMesh) {
        selectMesh(hitMesh);
      }
    } else {
      // Empty space clicked: Clear active selections, highlights, and reset context
      clearSelection();
    }
  }

  /**
   * Highlights & selects a mesh
   */
  function selectMesh(mesh) {
    if (selectedMesh && originalMaterials.has(selectedMesh)) {
      selectedMesh.material = originalMaterials.get(selectedMesh);
    }

    selectedMesh = mesh;

    if (selectedMesh) {
      const origMat = originalMaterials.get(selectedMesh);
      const highlight = (material) => {
        const next = material ? material.clone() : new THREE.MeshStandardMaterial();
        if (next.emissive) next.emissive.setHex(0x00f2fe);
        next.emissiveIntensity = 0.7;
        if ("roughness" in next) next.roughness = 0.2;
        return next;
      };
      selectedMesh.material = Array.isArray(origMat) ? origMat.map(highlight) : highlight(origMat);

      const info = selectedMesh.userData.nodeInfo || window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(selectedMesh.name, selectedMesh.parent?.name);
      info.has3DMesh = true;

      // Update context ONLY on deliberate click / interaction
      const organName = info.displayName || selectedMesh.userData?.name || selectedMesh.name || "";
      window.activeAnatomyContext = organName;
      window.selectedAnatomyNode = selectedMesh;

      // Debug / Inspection Log (Rule 17)
      console.debug(`[InsideYou 3D Canonical Mapping] Raw: "${info.rawName}" | Canonical ID: "${info.canonicalId}" | Display: "${info.displayName}" | Side: ${info.side || 'null'} | Organ: "${info.organName?.EN || 'Unclassified'}" | System: "${info.systemName?.EN || 'Unclassified'}"`);

      if (onSelectCallback) {
        onSelectCallback(info, selectedMesh);
      }
    }
  }

  /**
   * Focuses camera smoothly onto a mesh
   */
  function focusMesh(mesh) {
    if (!mesh) return;
    const box = new THREE.Box3().setFromObject(mesh);
    const framing = computeBoundingBoxFraming(box, 1.8);

    targetLookAt.copy(framing.center);
    targetCamPos.copy(framing.targetPos);
    isCameraAnimating = true;
  }

  /**
   * Finds matching mesh(es) using canonical IDs, alias dictionary, display names, or raw mesh node names
   */
  function findMeshForStructure(structureName) {
    if (!allMeshes.length || !structureName) return null;
    const sLower = structureName.toLowerCase().trim();

    // 1. Resolve canonical anatomy identity first (supports bilingual terms and explicit laterality)
    const canonResolved = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(structureName);
    const targetSide = canonResolved?.side || (window.INSIDE_YOU_DATA.parseLaterality ? window.INSIDE_YOU_DATA.parseLaterality(structureName) : null);

    if (canonResolved && canonResolved.canonicalId && canonResolved.canonicalId !== "unmapped") {
      // Prioritize exact canonicalId + side match
      const canonMatch = allMeshes.find(m => {
        if (!m.userData.nodeInfo) return false;
        if (m.userData.nodeInfo.canonicalId !== canonResolved.canonicalId) return false;
        if (targetSide) {
          const mSide = m.userData.nodeInfo.side || (window.INSIDE_YOU_DATA.parseLaterality ? window.INSIDE_YOU_DATA.parseLaterality(m.name) : null);
          if (mSide && mSide !== targetSide) return false;
        }
        return true;
      });
      if (canonMatch) return canonMatch;

      // Secondary check without strict side only if targetSide wasn't explicitly requested
      if (!targetSide) {
        const anyCanonMatch = allMeshes.find(m => m.userData.nodeInfo && m.userData.nodeInfo.canonicalId === canonResolved.canonicalId);
        if (anyCanonMatch) return anyCanonMatch;
      }
    }

    // Helper to verify laterality consistency on candidate meshes
    const sideCompatible = (m) => {
      if (!targetSide) return true;
      const mSide = m.userData.nodeInfo?.side || (window.INSIDE_YOU_DATA.parseLaterality ? window.INSIDE_YOU_DATA.parseLaterality(m.name) : null);
      return !mSide || mSide === targetSide;
    };

    // 2. Canonical ID direct match
    const directCanonMatch = allMeshes.find(m => m.userData.nodeInfo && m.userData.nodeInfo.canonicalId === sLower && sideCompatible(m));
    if (directCanonMatch) return directCanonMatch;

    // 3. Check ALIAS_MAPPING
    const aliases = window.INSIDE_YOU_DATA.ALIAS_MAPPING ? window.INSIDE_YOU_DATA.ALIAS_MAPPING[sLower] : null;
    if (aliases && Array.isArray(aliases)) {
      for (const alias of aliases) {
        const found = allMeshes.find(m => sideCompatible(m) && ((m.name && m.name.toLowerCase().includes(alias.toLowerCase())) || (m.parent && m.parent.name && m.parent.name.toLowerCase().includes(alias.toLowerCase()))));
        if (found) return found;
      }
    }

    // 4. Direct name match
    let direct = allMeshes.find(m => sideCompatible(m) && ((m.name && m.name.toLowerCase() === sLower) || (m.parent && m.parent.name && m.parent.name.toLowerCase() === sLower)));
    if (direct) return direct;

    // 5. Display name (EN or ID) or nodeInfo match
    let infoMatch = allMeshes.find(m => {
      if (!sideCompatible(m)) return false;
      const info = m.userData.nodeInfo;
      if (!info) return false;
      const en = (info.displayNameObj?.EN || info.displayName || "").toLowerCase();
      const id = (info.displayNameObj?.ID || "").toLowerCase();
      return en === sLower || id === sLower || (m.name && m.name.toLowerCase().startsWith(sLower));
    });
    if (infoMatch) return infoMatch;

    // 6. Substring contains
    let partial = allMeshes.find(m => sideCompatible(m) && m.name && m.name.toLowerCase().includes(sLower));
    return partial || null;
  }

  /**
   * Selects structure by Name / Search / Button Click with robust fallback
   */
  function selectByName(name) {
    const matchedMesh = findMeshForStructure(name);

    if (matchedMesh) {
      matchedMesh.visible = true;
      selectMesh(matchedMesh);
      focusMesh(matchedMesh);
      return true;
    } else {
      // 3D mesh is not in GLB; do NOT select a random incorrect mesh.
      // Gracefully trigger fallback metadata callback using canonical resolver
      const fallbackInfo = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(name, null);
      fallbackInfo.has3DMesh = false;
      // Preserve clean display name — do NOT overwrite with raw name if already resolved
      if (fallbackInfo.canonicalId === "unmapped" || fallbackInfo.displayName === name) {
        fallbackInfo.displayName = name;
      }

      if (onSelectCallback) {
        onSelectCallback(fallbackInfo, null);
      }
      return false;
    }
  }

  /**
   * Filters visibility by anatomical system
   */
  function filterBySystem(systemId) {
    if (!modelGroup) return;

    if (!systemId || systemId === "all") {
      allMeshes.forEach(m => m.visible = true);
      resetView();
      return;
    }

    const sysMeshes = systemMeshMap[systemId] || [];

    allMeshes.forEach(m => {
      m.visible = sysMeshes.includes(m);
    });

    if (sysMeshes.length > 0) {
      modelGroup.updateMatrixWorld(true);
      const box = new THREE.Box3();
      sysMeshes.forEach(m => box.expandByObject(m));
      const framing = computeBoundingBoxFraming(box, 1.5);

      targetLookAt.copy(framing.center);
      targetCamPos.copy(framing.targetPos);
      isCameraAnimating = true;
    }
  }

  /**
   * Filters visibility by anatomical organ group
   */
  function filterByOrgan(organId) {
    if (!modelGroup || !organId) return;

    const organMeshes = organMeshMap[organId] || [];
    if (!organMeshes.length) return;

    allMeshes.forEach(m => {
      m.visible = organMeshes.includes(m);
    });

    const box = new THREE.Box3();
    organMeshes.forEach(m => box.expandByObject(m));
    const framing = computeBoundingBoxFraming(box, 1.6);

    targetLookAt.copy(framing.center);
    targetCamPos.copy(framing.targetPos);
    isCameraAnimating = true;

    if (organMeshes[0]) {
      selectMesh(organMeshes[0]);
    }
  }

  /**
   * Isolates selected mesh
   */
  function isolateSelection() {
    if (!selectedMesh) return;

    allMeshes.forEach(m => {
      m.visible = (m === selectedMesh);
    });

    focusMesh(selectedMesh);
  }

  /**
   * Clears active selection, highlights, and resets global context
   */
  function clearSelection() {
    if (selectedMesh && originalMaterials.has(selectedMesh)) {
      selectedMesh.material = originalMaterials.get(selectedMesh);
    }
    selectedMesh = null;
    window.activeAnatomyContext = "";
    window.selectedAnatomyNode = null;
    if (onSelectCallback) {
      onSelectCallback(null, null);
    }
  }

  /**
   * Adjusts camera position & target to frame the entire body neutral overview
   */
  function resetCameraToOverview() {
    if (modelGroup) {
      modelGroup.rotation.y = 0;
      frameModel(1.4, false);
    } else if (camera && controls) {
      targetCamPos.set(0, 1.2, 3.5);
      targetLookAt.set(0, 1.0, 0);
      camera.position.set(0, 1.2, 3.5);
      controls.target.set(0, 1.0, 0);
      controls.update();
    }
  }

  /**
   * Resets view to full body model
   */
  function resetView() {
    allMeshes.forEach(m => m.visible = true);
    clearSelection();
    resetCameraToOverview();
  }

  /**
   * Calculates 2D Screen pixel coordinates of the currently selected mesh
   */
  function getSelectedMeshScreenPos() {
    if (!selectedMesh || !camera || !containerEl) return null;

    const box = new THREE.Box3().setFromObject(selectedMesh);
    const center = box.getCenter(new THREE.Vector3());

    const proj = center.clone().project(camera);
    const w = containerEl.clientWidth;
    const h = containerEl.clientHeight;

    const x = (proj.x * 0.5 + 0.5) * w;
    const y = (-proj.y * 0.5 + 0.5) * h;

    return {
      x: Math.round(x),
      y: Math.round(y),
      visible: proj.z < 1.0 && proj.z > -1.0 && x >= 0 && x <= w && y >= 0 && y <= h
    };
  }

  function setAutoRotate(enable) {
    isAutoRotate = enable;
  }

  function setTheme(isDark) {
    if (scene) {
      scene.background = new THREE.Color(isDark ? 0x0f172a : 0xf8fdfa);
    }
  }

  return {
    init,
    loadModel,
    switchModel,
    disposeModel,
    frameModel,
    filterBySystem,
    filterByOrgan,
    isolateSelection,
    resetView,
    clearSelection,
    clearHighlights: clearSelection,
    resetCameraToOverview,
    selectByName,
    findMeshForStructure,
    setAutoRotate,
    setTheme,
    handleResize,
    getSelectedMeshScreenPos,
    isLoaded: () => isLoaded
  };
})();

// Alias for backwards compatibility
window.VITRA_ENGINE = window.INSIDE_YOU_ENGINE;
