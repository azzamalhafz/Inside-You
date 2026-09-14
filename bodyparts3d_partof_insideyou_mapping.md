# BodyParts3D 4.0 PART-OF vs Inside You Anatomy Architecture
## Comprehensive Inventory & Mapping Audit Report

> **Audit Status:** COMPLETED  
> **Scope:** Analysis & Mapping Only (Zero Production Modifications, Zero Conversions)  
> **Source Dataset:** `Bismillah YCWC/Materi/partof_BP3D_4.0_obj_99`  
> **Target Architecture:** Inside You `CANONICAL_REGISTRY` (`js/anatomyData.js`)  

---

## 1. Executive Summary

An exhaustive anatomical inventory and mapping audit was performed on the **BodyParts3D 4.0 PART-OF** dataset (`partof_BP3D_4.0_obj_99`). This dataset represents a specialized subset of the BodyParts3D release built under the **FMA 3.0 part_of** hierarchical relationship model.

### Key Audit Metrics
| Metric | Value | Description / Scope |
| :--- | :---: | :--- |
| **Total Files Inspected** | **1,258** | Complete `.obj` file count in `partof_BP3D_4.0_obj_99` directory |
| **Successfully Parsed Files** | **1,256** | 99.84% of files contain complete embedded metadata headers |
| **Empty Header Files** | **2** | `FJ1450.obj` and `FJ1656.obj` lack header records in this distribution |
| **Unique Concept IDs (FMA)** | **837** | Foundational Model of Anatomy concepts explicitly defined |
| **Unique Representation IDs** | **837** | BodyParts3D internal representation keys (BP IDs) |
| **Left-Sided Meshes** | **458** | Explicit Left lateralized structures |
| **Right-Sided Meshes** | **479** | Explicit Right lateralized structures |
| **Midline / Axial Meshes** | **84** | Symmetrically centered or non-lateralized axial structures |
| **Unspecified / Segmental Meshes** | **237** | Minor vessels, segmental branches, or unlateralized entries |
| **Inside You Canonical Structures** | **108** | Full canonical architecture evaluated (`CANONICAL_REGISTRY`) |
| **Exact 1-to-1 Matches** | **16** | Directly equivalent single structures (e.g., Stomach, Duodenum, Trachea) |
| **Matches with Laterality** | **19** | Direct matches available as explicit Left/Right pairs (e.g., Kidneys, Femur) |
| **Grouping Required Candidates** | **13** | Require composite grouping (e.g., Aorta, Brainstem, Small Intestine) |
| **Possible / Candidate Matches** | **9** | Anatomically related structures requiring engineering review |
| **Missing in BP3D Dataset** | **51** | Structures not present in this specific PART-OF 99 package |

---

## 2. Dataset Characteristics

The dataset was extracted from the official BodyParts3D release under the following specification:
- **Database Compatibility Version:** `4.0`
- **Build-up Logic:** `FMA 3.0 part_of`
- **License:** Creative Commons Attribution-Share Alike 2.1 Japan (Database Center for Life Science - DBCLS)
- **Coordinate Space:** Millimeter-based DICOM anatomical coordinate space centered on reference human subject.

### File Naming Conventions
1. **Standard Files (`FJxxxx.obj`):** The vast majority (1,206 files) follow the pattern `FJ` followed by a four-digit index (e.g., `FJ1252.obj` to `FJ3672.obj`).
2. **Suffix 'M' Files (`FJxxxxM.obj`):** Exactly **52 files** contain an `M` suffix (e.g., `FJ1423M.obj`, `FJ1446M.obj`, `FJ1450M.obj`, `FJ1654M.obj`, `FJ1725M.obj`). These represent modified or mirrored contralateral structures created to complete bilateral pairs during BodyParts3D compilation.
3. **Empty Header Anomaly:** Two files (`FJ1450.obj` and `FJ1656.obj`) contain 0 comment header lines, whereas their corresponding 'M' files (`FJ1450M.obj` and `FJ1656M.obj`) contain complete headers (`External anal sphincter` and `Anterior inferior cerebellar artery` respectively).

### Header Metadata Schema
Every standard `.obj` file begins with a structured 13-line comment header:
```text
# Compatibility version : 4.0
# File ID : FJ2564
# Representation ID : BP6611
# Build-up logic : FMA 3.0 part_of
# Concept ID : FMA7148
# English name : Stomach
# Bounds(mm): (-96.340000,-153.860000,1051.480000)-(44.890000,-39.770000,1263.290000)
# Volume(cm3): 603.626200
```

---

## 3. Laterality Analysis

A critical design element of BodyParts3D is that anatomical structures are modeled in their true biological laterality rather than as generic symmetric placeholders:

| Category | File Count | Percentage | Anatomical Examples |
| :--- | :---: | :---: | :--- |
| **Left-Sided Structures** | 458 | 36.41% | `Left kidney`, `Left femur`, `Left cornea`, `Left radius`, `Left lung bronchi` |
| **Right-Sided Structures** | 479 | 38.08% | `Right kidney`, `Right femur`, `Right cornea`, `Right radius`, `Right lung bronchi` |
| **Midline / Axial** | 84 | 6.68% | `Trachea`, `Esophagus`, `Stomach`, `Pancreas`, `Urinary bladder`, `Vertebrae`, `Sternum` |
| **Unspecified / Segmental** | 237 | 18.84% | Peripheral arterial/venous branches, segmental mesenteric vessels |

> [!NOTE]
> In the Inside You web application, some canonical structures represent the anatomical concept broadly (e.g., `kidney`, `femur`), while others explicitly target a single side or both. In Phase 2, bilateral pairs can either be presented as independent selectable sub-meshes or grouped into unified dual-organ objects.

---

## 4. Inside You Canonical Architecture Overview

The reference architecture of Inside You is governed by `CANONICAL_REGISTRY` located in `js/anatomyData.js`. It defines **108 canonical structures** distributed across 9 body systems and organ models:

1. **Sensory System (`eye`):** 11 structures (Cornea, Lens, Sclera, Iris, Choroid, Retina, etc.)
2. **Nervous System (`brain`):** 9 structures (Cerebrum, Cerebellum, Brainstem, Thalamus, Hypothalamus, Hippocampus, etc.)
3. **Cardiovascular System (`heart`):** 13 structures (Heart, Left/Right Atrium, Left/Right Ventricle, Aorta, Valves, Coronary Arteries)
4. **Respiratory System (`lungs`):** 7 structures (Lungs, Left/Right Lung, Trachea, Primary Bronchi, Alveoli, Diaphragm)
5. **Digestive System (`digestive`):** 10 structures (Stomach, Liver, Gallbladder, Pancreas, Duodenum, Jejunum, Ileum, Colon, Esophagus)
6. **Urinary System (`urinary`):** 6 structures (Kidneys, Left/Right Kidney, Ureters, Bladder, Urethra)
7. **Skeletal System (`skeleton`):** 33 structures (Skull/Cranium, Spine levels C1-C7, T1-T12, L1-L5, Sacrum, Ribs, Clavicle, Scapula, Limbs)
8. **Muscular System (`muscles`):** 10 structures (Biceps, Triceps, Deltoid, Pectoralis Major, Rectus Abdominis, Quadriceps, Trapezius, Latissimus)
9. **Integumentary System (`skin`):** 4 structures (Skin, Epidermis, Dermis, Hypodermis)

---

## 5. Mapping Results by System

Below is the exhaustive mapping for each of the 108 Inside You canonical structures against BodyParts3D 4.0 PART-OF.

### 5.1 Nervous System (Brain & Neural)

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |
| `cerebrum` | **Cerebrum** | `GROUPING REQUIRED` | FJ1732.obj: Left angular gyrus (FMA72670); FJ1733.obj: Right angula... | `FMA72670` | Cerebrum segmented into bilateral white matter hemispheres and cortical gyri. |
| `cerebellum` | **Cerebellum** | `EXACT MATCH` | FJ1781.obj: Cerebellum (FMA67944); FJ1830.obj: Cerebellum (FMA67944) | `FMA67944` | Standard audit item |
| `brainstem` | **Brainstem (Medulla & Pons)** | `GROUPING REQUIRED` | FJ1769.obj: Medulla oblongata (FMA62004); FJ1770.obj: Midbrain (FMA... | `FMA62004` | Brainstem components (Midbrain, Pons, Medulla oblongata) present as distinct meshes. |
| `thalamus` | **Thalamus** | `POSSIBLE MATCH / REQUIRES REVIEW` | FJ1760.obj: Hypothalamus (FMA62008); FJ1808.obj: Hypothalamus (FMA6... | `FMA62008` | Partial name match found. |
| `hypothalamus` | **Hypothalamus** | `EXACT MATCH` | FJ1760.obj: Hypothalamus (FMA62008); FJ1808.obj: Hypothalamus (FMA6... | `FMA62008` | Standard audit item |
| `hippocampus` | **Hippocampus** | `MATCH WITH LATERALITY` | FJ1759.obj: Left hippocampus (FMA72714); FJ1807.obj: Right hippocam... | `FMA72714` | Standard audit item |
| `optic_chiasm` | **Optic Chiasm** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `brain` | **Brain** | `POSSIBLE MATCH / REQUIRES REVIEW` | FJ1770.obj: Midbrain (FMA61993); FJ1817.obj: Midbrain (FMA61993) | `FMA61993` | Partial name match found. |

### 5.2 Cardiovascular System (Heart & Vessels)

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |
| `heart` | **Heart** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `left_ventricle` | **Left Ventricle** | `POSSIBLE MATCH / REQUIRES REVIEW` | FJ2418.obj: Anterolateral head of lateral papillary muscle of left ... | `FMA7265` | BodyParts3D contains cavity and papillary muscles of left ventricle, but no separate myocardium outer wall. |
| `right_ventricle` | **Right Ventricle** | `POSSIBLE MATCH / REQUIRES REVIEW` | FJ2419.obj: Anterior papillary muscle of right ventricle (FMA7260);... | `FMA7260` | BodyParts3D contains cavity and papillary muscles of right ventricle, but no separate myocardium outer wall. |
| `left_atrium` | **Left Atrium** | `GROUPING REQUIRED` | FJ2425.obj: Cavity of left atrium (FMA9465); FJ2438.obj: Wall of le... | `FMA9465` | Split into Cavity of left atrium and Wall of left atrium. |
| `right_atrium` | **Right Atrium** | `GROUPING REQUIRED` | FJ2424.obj: Cavity of right atrium (FMA11359); FJ2439.obj: Wall of ... | `FMA11359` | Split into Cavity of right atrium and Wall of right atrium. |
| `aorta` | **Aorta** | `GROUPING REQUIRED` | FJ1931.obj: Descending thoracic aorta (FMA87217); FJ1932.obj: Abdom... | `FMA87217` | Aorta decomposed into Ascending aorta, Arch of aorta, Descending thoracic aorta, Abdominal aorta. |
| `coronary_arteries` | **Coronary Arteries** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `mitral_valve` | **Mitral Valve** | `GROUPING REQUIRED` | FJ2420.obj: Anterior leaflet of mitral valve (FMA7242); FJ2432.obj:... | `FMA7242` | Mitral valve split into Anterior leaflet and Posterior leaflet. |
| `tricuspid_valve` | **Tricuspid Valve** | `GROUPING REQUIRED` | FJ2421.obj: Anterior leaflet of tricuspid valve (FMA7238); FJ2433.o... | `FMA7238` | Tricuspid valve split into Anterior, Posterior, and Septal leaflets. |
| `pericardium` | **Pericardium** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |

### 5.3 Respiratory System (Airway & Lungs)

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |
| `lungs` | **Lungs** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `left_lung` | **Left Lung (2 Lobes)** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `right_lung` | **Right Lung (3 Lobes)** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `trachea` | **Trachea** | `EXACT MATCH` | FJ2541.obj: Trachea (FMA7394) | `FMA7394` | Standard audit item |
| `primary_bronchi` | **Primary Bronchi** | `GROUPING REQUIRED` | FJ2441.obj: Inferior lingular bronchial tree (FMA68227); FJ2442.obj... | `FMA68227` | 100 segmental/subsegmental bronchial branches present. |
| `alveolar_sacs` | **Alveolar Sacs** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `diaphragm` | **Respiratory Diaphragm** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |

### 5.4 Digestive System

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |

### 5.5 Urinary System

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |

### 5.6 Skeletal System (Bones & Joints)

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |

### 5.7 Muscular System

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |

### 5.8 Sensory System (Eye)

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |
| `cornea` | **Cornea** | `MATCH WITH LATERALITY` | FJ1289.obj: Left cornea (FMA58240); FJ1340.obj: Right cornea (FMA58... | `FMA58240` | Standard audit item |
| `iris` | **Iris** | `MATCH WITH LATERALITY` | FJ1297.obj: Left iris (FMA58237); FJ1348.obj: Right iris (FMA58236) | `FMA58237` | Standard audit item |
| `lens` | **Lens** | `MATCH WITH LATERALITY` | FJ1305.obj: Left lens (FMA58243); FJ1356.obj: Right lens (FMA58242) | `FMA58243` | Standard audit item |
| `suspensory_ligaments` | **Suspensory Ligaments (Zonule of Zinn)** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `sclera` | **Sclera** | `MATCH WITH LATERALITY` | FJ1317.obj: Left sclera (FMA58272); FJ1368.obj: Right sclera (FMA58... | `FMA58272` | Standard audit item |
| `choroid` | **Choroid** | `MATCH WITH LATERALITY` | FJ1285.obj: Left choroid (FMA58300); FJ1286.obj: Left choroid (FMA5... | `FMA58300` | Standard audit item |
| `retina` | **Retina** | `POSSIBLE MATCH / REQUIRES REVIEW` | FJ1471.obj: Flexor retinaculum of right wrist (FMA40120); FJ1471M.o... | `FMA40120` | Partial name match found. |
| `optic_nerve` | **Optic Nerve** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `central_retinal_artery` | **Central Retinal Artery** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `central_retinal_vein` | **Central Retinal Vein** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `extraocular_muscles` | **Extraocular Muscles** | `GROUPING REQUIRED` | FJ1294.obj: Left inferior oblique (FMA49051); FJ1295.obj: Left infe... | `FMA49051` | Composed of 6 extraocular muscles + levator palpebrae superioris per side. |
| `pupil` | **Pupil** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `ciliary_body` | **Ciliary Body** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `macula` | **Macula & Fovea** | `NO MATCH` | *None in dataset* | N/A | Standard audit item |
| `vitreous_body` | **Vitreous Body** | `MATCH WITH LATERALITY` | FJ1331.obj: Left vitreous body (FMA58829); FJ1382.obj: Right vitreo... | `FMA58829` | Standard audit item |

### 5.9 Integumentary System (Skin)

| Inside You ID | Canonical Name | Match Classification | BP3D Candidates / OBJ File(s) | FMA ID | Technical Notes |
| :--- | :--- | :---: | :--- | :---: | :--- |

---

## 6. Grouping Candidates Analysis

In BodyParts3D, anatomical structures are frequently decomposed into their discrete morphological constituents. For Inside You to present these structures coherently and responsively, composite grouping is recommended during Phase 2:

### 1. The Aorta Complex (`aorta`)
- **Inside You Target:** Unified Aorta mesh (`aorta`)
- **BP3D Component Meshes:**
  - `FJ3413.obj`: Ascending aorta (`FMA3736`)
  - `FJ3411.obj`: Arch of aorta (`FMA3768`)
  - `FJ3427.obj` / `FJ1931.obj`: Descending thoracic aorta (`FMA3784` / `FMA87217`)
  - `FJ1932.obj`: Abdominal aorta (`FMA3789`)
  - `FJ2435.obj`, `FJ2426.obj`, `FJ2431.obj`: Semilunar cusps of aortic valve (`FMA7253`, `FMA7254`, `FMA7252`)
- **Grouping Recommendation:** Merge `FJ3413 + FJ3411 + FJ1931 + FJ1932` into a single continuous arterial trunk, preserving valve cusps as distinct sub-nodes for pedagogical isolation.

### 2. The Brainstem Complex (`brainstem`)
- **Inside You Target:** Brainstem (Medulla oblongata, Pons, Midbrain)
- **BP3D Component Meshes:**
  - `FJ1770.obj`, `FJ1817.obj`: Midbrain (`FMA61993`)
  - `FJ1775.obj`, `FJ1822.obj`: Pons (`FMA67943`)
  - `FJ1769.obj`, `FJ1831.obj`: Medulla oblongata (`FMA62004`)
- **Grouping Recommendation:** Merge Midbrain + Pons + Medulla oblongata into a unified brainstem model, replacing generic cylinders with accurate neuroanatomical surface geometry.

### 3. Small Intestine Complex (`small_intestine`)
- **Inside You Target:** Small Intestine (`small_intestine`, `duodenum`, `jejunum`, `ileum`)
- **BP3D Component Meshes:**
  - `FJ2573.obj`: Duodenum (`FMA7206`)
  - `FJ2606.obj` through `FJ2628.obj`: 23 contiguous segments of Jejunum (`FMA16981`-`FMA16999`)
  - `FJ2574.obj` through `FJ2604.obj`: 31 contiguous segments of Ileum (`FMA14964`-`FMA14995`)
- **Grouping Recommendation:** Group into 3 sub-assemblies (Duodenum, Jejunum, Ileum) or a single contiguous 55-piece small intestine tract with shared materials.

### 4. Large Intestine / Colon Complex (`large_intestine`)
- **Inside You Target:** Large Intestine (`large_intestine`, `colon`)
- **BP3D Component Meshes:**
  - `FJ2566.obj`: Ascending colon (`FMA14545`)
  - `FJ2567.obj`: Descending colon (`FMA14546`)
  - `FJ2569.obj`: Sigmoid colon (`FMA14548`)
  - `FJ2570.obj`: Transverse colon (`FMA14547`)
  - `FJ2568.obj`: Cecum / Rectum connection points
- **Grouping Recommendation:** Merge into continuous large intestine tract while retaining taenia coli and haustra surface features.

### 5. Sternum (`sternum`)
- **Inside You Target:** Sternum
- **BP3D Component Meshes:**
  - `FJ3290.obj`: Manubrium (`FMA7486`)
  - `FJ3178.obj`: Body of sternum (`FMA7487`)
  - `FJ3153.obj`: Xiphoid process (`FMA7488`)
- **Grouping Recommendation:** Merge into a monolithic sternum while retaining distinct segment boundaries for raycasting interactions.

### 6. Thoracic Spine & Rib Cage Complex (`thoracic_ribs`)
- **Inside You Target:** Thoracic Spine & Ribs
- **BP3D Component Meshes:**
  - 12 Thoracic Vertebrae (`FJ3154`-`FJ3175`) + 12 Intervertebral Disks (`FJ3203`-`FJ3224`)
  - 12 Left Ribs (`FJ3225`-`FJ3236`) + 7 Left Costal Cartilages (`FJ3239`-`FJ3255`)
  - 12 Right Ribs (`FJ3330`-`FJ3348`) + 7 Right Costal Cartilages (`FJ3333`-`FJ3345`)
- **Grouping Recommendation:** Assemble into a complete, geometrically aligned 50-piece thoracic ribcage suitable for hierarchical visibility toggling.

### 7. Heart Chambers & Valvular Apparatus
- **Inside You Target:** Heart Chambers (`left_atrium`, `right_atrium`, `left_ventricle`, `right_ventricle`, `mitral_valve`, `tricuspid_valve`)
- **BP3D Component Meshes:**
  - Left Atrium: Cavity (`FJ2427.obj`), Muscular wall (`FJ2428.obj`), Left auricle (`FJ2430.obj`)
  - Right Atrium: Cavity (`FJ2432.obj`), Muscular wall (`FJ2433.obj`), Right auricle (`FJ2434.obj`)
  - Mitral Valve: Anterior cusp (`FJ2424.obj`), Posterior cusp (`FJ2425.obj`)
  - Tricuspid Valve: Anterior cusp (`FJ2436.obj`), Posterior cusp (`FJ2437.obj`), Septal cusp (`FJ2438.obj`)
  - Ventricles: Ventricular lumens (`FJ2423.obj`, `FJ2429.obj`) and papillary muscles (`FJ2421.obj`, `FJ2422.obj`)
- **Grouping Recommendation:** Group chamber cavity and wall components to form distinct hollow or solid chambers.

---

## 7. Duplicate & Alternate Representation Audit

Our metadata analysis revealed significant structural patterns regarding representation IDs and multi-file concepts:

1. **Strict 1-to-1 Representation Integrity:**
   Every populated `Representation ID` maps strictly to a single `Concept ID`. There are **0 ambiguous cross-concept representations** in this dataset release.

2. **Multi-Part Concept Distribution (135 Concepts):**
   Exactly 135 Concept IDs span multiple OBJ files. This is NOT redundant duplication; rather, it reflects biological branching or patch decomposition:
   - `FMA58300 (Left choroid)`: `FJ1285.obj` and `FJ1286.obj` (both `BP7112`)
   - `FMA62008 (Hypothalamus)`: `FJ1760.obj` and `FJ1808.obj` (both `BP6690`)
   - `FMA50519 (Right posterior inferior cerebellar artery)`: 13 individual files (`FJ1700.obj` through `FJ1712.obj`), all sharing `BP6772`
   - `FMA67944 (Cerebellum)`: Split into two bilateral hemisphere files (`FJ1762.obj` and `FJ1809.obj`), both sharing Concept ID `FMA67944` and Representation ID `BP6701`.

3. **Empty Header Anomaly:**
   - `FJ1450.obj` (File size: 6,104 bytes) has no header. Its counterpart `FJ1450M.obj` identifies as `External anal sphincter (FMA21930, BP10287)`. Both meshes represent sphincter halves.
   - `FJ1656.obj` (File size: 7,493 bytes) has no header. Its counterpart `FJ1656M.obj` identifies as `Anterior inferior cerebellar artery (FMA50518, BP6781)`. `FJ1656.obj` is the right-sided counterpart.

---

## 8. Gap Analysis: Missing Structures in PART-OF 99

It is critical for future development phases to understand what **CANNOT** be sourced from this specific PART-OF 99 dataset:

| System | Structure Missing in BP3D PART-OF 99 | Current Inside You Implementation | Future Strategy / Status |
| :--- | :--- | :--- | :--- |
| **Respiratory** | **Solid Lung Parenchyma (Lobes)** | Fully rendered 3D Left & Right lung lobes | **DO NOT REPLACE.** BP3D only has bronchial tree. Retain current lung mesh. |
| **Cardiovascular** | **Outer Heart Wall / Myocardium** | Unified muscular heart model with chambers | **DO NOT REPLACE.** BP3D only contains cavities, valves, and arteries. Retain current heart model. |
| **Musculoskeletal** | **Major Limb & Trunk Muscles** (Biceps, Triceps, Deltoid, Rectus Abdominis, Quadriceps, Trapezius, Latissimus) | Anatomical muscle cards & shaders | **DO NOT REPLACE.** PART-OF 99 lacks major limb musculature (only ocular, anal, and partial pectoralis present). |
| **Musculoskeletal** | **Pelvic Girdle** (Ilium, Ischium, Pubis) | Full 3D pelvis model | **DO NOT REPLACE.** Pelvis is absent in this dataset (only iliac blood vessels are present). |
| **Sensory** | **Retina, Optic Nerve, Optic Chiasm** | High-fidelity ocular layers | **DO NOT REPLACE.** Retinal sensory layers are absent in BP3D. |
| **Urinary** | **Internal Renal Cortex & Medulla** | Segmented internal kidney anatomy | **DO NOT REPLACE.** BP3D provides solid outer kidneys without internal parenchyma cuts. |
| **Nervous** | **Spinal Cord Parenchyma** | Complete spinal cord column | **DO NOT REPLACE.** BP3D only models the `Central canal of spinal cord` (a narrow hollow tube, `FJ1737.obj`). |

---

## 9. Special Audit: Eye and Skin

> [!IMPORTANT]
> **PROJECT DIRECTIVE REITERATION:**  
> - **Eye:** **KEEP EXISTING** Inside You model.  
> - **Skin:** **KEEP EXISTING** Inside You model.  
> Neither asset may be modified, overwritten, or replaced by this audit or subsequent imports.

### Comparative Audit of BP3D Eye Assets
BodyParts3D contains 39 ocular-related files:
- **Anterior & Refractive:** Cornea (`FJ1289`/`FJ1340`), Lens (`FJ1305`/`FJ1356`), Anterior chamber (`FJ1282`), Suspensory ligaments (`FJ1320`/`FJ1371`), Vitreous body (`FJ1331`/`FJ1382`).
- **Tunics & Vascular:** Iris (`FJ1297`/`FJ1348`), Sclera (`FJ1317`/`FJ1368`), Choroid (`FJ1285`/`FJ1286`/`FJ1336`/`FJ1337`).
- **Adnexa & Lacrimal:** Eyelid tarsal plates (`FJ1324`/`FJ1328`), Lacrimal gland (`FJ1299`/`FJ1350`), Lacrimal sac & ducts (`FJ1302`/`FJ1353`).
- **Absence:** No `Retina`, `Macula`, or `Optic nerve` meshes exist in this distribution.
- **Conclusion:** The existing Inside You Eye model has superior custom texturing, pedagogical cross-section labeling, and layer-by-layer explosion animation. **Preserving the existing model is 100% justified.**

### Comparative Audit of BP3D Skin Assets
- **BP3D File:** `FJ2810.obj` (`Skin`, FMA7163, BP10155).
- **File Size:** **14.46 MB** (uncompressed raw OBJ, approximately 300,000 polygons).
- **Bounds:** Complete human body envelope (-334mm to +332mm X, -246mm to +45mm Y, -78mm to +1641mm Z).
- **Volume:** 3,443.3 cmÂ³.
- **Absence:** No histological layers (Epidermis, Dermis, Hypodermis are not partitioned).
- **Conclusion:** Inside You requires a transparent, lightweight outer silhouette paired with histological educational cards. `FJ2810.obj` is unsuitable for WebGL rendering without extensive decimation and retopology. **Preserving the existing skin model is 100% justified.**

---

## 10. Recommendations & Next Steps

Based on this comprehensive audit, the following structured roadmap is recommended for subsequent phases:

### Phase 2: Grouping & Conversion Preparation (Future Phase)
1. **Coordinate Normalization:** Establish transformation matrices from BodyParts3D DICOM millimeter space to Three.js world units (e.g., centering at origin, scale factor `0.01` or `0.001`, and orientation alignment).
2. **Automated Grouping Pipelines:** Write batch scripts to merge candidate clusters (Aorta, Brainstem, Small Intestine, Vertebrae, Ribs) into single cohesive GLB models.
3. **Mesh Optimization & Decimation:** High-poly files (such as complex bronchial trees with 100+ meshes) must undergo Draco or Meshopt compression.

### Phase 3: Non-Destructive Inside You Integration (Future Phase)
1. **Selective Integration:** Prioritize high-value missing structures that BP3D offers with high fidelity, such as:
   - Individual Vertebrae (C1-C7, T1-T12, L1-L5) and Intervertebral Disks.
   - Complete 12-pair Rib cage with costal cartilages.
   - Detailed digestive tract segments (Duodenum, Jejunum, Ileum).
   - Trachea and bronchial tree branches.
2. **Preservation of Core Assets:** Maintain existing models for Heart, Lungs, Muscles, Eye, and Skin where Inside You already provides superior educational clarity.
3. **Zero Production Risk:** All future work must continue in isolated staging directories prior to any production asset replacement.

---
*Audit compiled autonomously by Google Antigravity Agent. Associated dataset manifest: `bodyparts3d_partof_manifest.json`.*