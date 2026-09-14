/**
 * INSIDE YOU — Scalable Course Content Loader
 * Loads, validates, and registers course content from modular JSON files (e.g., content/vision/eye.json).
 * Maps canonical anatomy IDs to structured dual-mode lessons, quizzes, and related structures.
 */

(function () {
  window.INSIDE_YOU_CONTENT = window.INSIDE_YOU_CONTENT || {
    courses: {},
    structures: {}
  };

  /**
   * Manifest of course content files.
   * Future organs (cardio/heart.json, nervous/brain.json, etc.) can simply be added here.
   */
  const COURSE_MANIFEST = [
    {
      id: "vision",
      organId: "eye",
      path: "./content/vision/eye.json"
    },
    {
      id: "cardio",
      organId: "heart",
      path: "./content/cardiovascular/heart.json"
    },
    {
      id: "nervous",
      organId: "brain",
      path: "./content/nervous/brain.json"
    },
    {
      id: "resp",
      organId: "lungs",
      path: "./content/respiratory/lungs.json"
    },
    {
      id: "digestive",
      organId: "digestive_organs",
      path: "./content/digestive/digestive.json"
    },
    {
      id: "urinary",
      organId: "kidneys_bladder",
      path: "./content/urinary/urinary.json"
    },
    {
      id: "skeletal",
      organId: "limbs_pelvis",
      path: "./content/skeletal/skeletal.json"
    },
    {
      id: "muscular",
      organId: "muscles_group",
      path: "./content/muscular/muscular.json"
    },
    {
      id: "skin",
      organId: "skin_layers",
      path: "./content/skin/skin.json"
    }
  ];

  /**
   * Validates a single structure payload from a course content JSON.
   */
  function validateStructureData(canonId, struct) {
    if (!struct || typeof struct !== "object") {
      console.warn(`[ContentLoader] Invalid structure object for canonical ID: ${canonId}`);
      return false;
    }
    if (!struct.name || !struct.name.EN || !struct.name.ID) {
      console.warn(`[ContentLoader] Missing localized name for structure: ${canonId}`);
      return false;
    }
    if (!struct.simple || !struct.simple.EN || !struct.simple.ID) {
      console.warn(`[ContentLoader] Missing Simple mode content for structure: ${canonId}`);
      return false;
    }
    if (!struct.academic || !struct.academic.EN || !struct.academic.ID) {
      console.warn(`[ContentLoader] Missing Academic mode content for structure: ${canonId}`);
      return false;
    }
    return true;
  }

  /**
   * Fetches and registers a course JSON file.
   */
  async function loadCourseContent(courseSpec) {
    try {
      const response = await fetch(courseSpec.path);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status} when loading ${courseSpec.path}`);
      }
      const data = await response.json();

      if (!data || !data.structures) {
        throw new Error(`Malformed content JSON in ${courseSpec.path}`);
      }

      // Store course in global content registry
      window.INSIDE_YOU_CONTENT.courses[data.id || courseSpec.organId] = data;

      const extensionEntries = {};

      for (const [canonId, struct] of Object.entries(data.structures)) {
        if (!validateStructureData(canonId, struct)) continue;

        const entry = {
          canonicalId: canonId,
          systemId: struct.systemId || data.systemId || courseSpec.id,
          organId: struct.organId || data.id || courseSpec.organId,
          name: struct.name,
          illustration: struct.illustration || "👁️✨",
          simple: struct.simple,
          academic: struct.academic,
          relatedStructures: Array.isArray(struct.relatedStructures) ? struct.relatedStructures : [],
          quiz: struct.quiz || null
        };

        // Register under canonical ID
        extensionEntries[canonId] = entry;

        // Register under English display name (for backward-compatible lookups)
        if (struct.name && struct.name.EN) {
          extensionEntries[struct.name.EN] = entry;
        }

        // Also register short aliases if present (e.g., "Lens" for "Crystalline Lens")
        if (canonId === "lens") {
          extensionEntries["Lens"] = entry;
        }

        // Store in global structure dictionary
        window.INSIDE_YOU_CONTENT.structures[canonId] = entry;
      }

      // Register into anatomy data registry if available
      if (window.INSIDE_YOU_DATA && typeof window.INSIDE_YOU_DATA.extendStructureDetails === "function") {
        window.INSIDE_YOU_DATA.extendStructureDetails(extensionEntries);
      }

      console.info(`[ContentLoader] Successfully registered course '${data.id || courseSpec.organId}' with ${Object.keys(data.structures).length} structures.`);
      return true;
    } catch (err) {
      console.warn(`[ContentLoader] Could not fetch ${courseSpec.path} (may be running on file:// or network restricted). Fallback remains intact. Details:`, err);
      return false;
    }
  }

  /**
   * Main loader routine loading all manifest courses.
   */
  async function loadAllContent() {
    const results = await Promise.allSettled(
      COURSE_MANIFEST.map(spec => loadCourseContent(spec))
    );
    return results;
  }

  // Kick off content loading immediately and export promise
  window.CONTENT_LOADER_PROMISE = loadAllContent();
})();
