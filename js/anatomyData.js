/**
 * INSIDE YOU — Anatomy Data, Structured Lessons, Quizzes & News Schema
 * Maps 3D anatomy node names to systems, organs, granular structures, dual explanation modes & quizzes.
 */

window.INSIDE_YOU_DATA = (function() {
  const SYSTEMS = [
    {
      id: "vision",
      icon: "👁️",
      name: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      desc: { EN: "Eye, cornea, lens, retina, and optical neural pathways.", ID: "Mata, kornea, lensa, retina, dan jalur saraf optik." },
      color: "#00f2fe",
      keywords: ["eye", "cornea", "lens", "retina", "sclera", "iris", "pupil", "optic", "ciliary", "conjunctiva", "oculi", "bulbus", "choroid", "macula", "vitreous"]
    },
    {
      id: "nervous",
      icon: "🧠",
      name: { EN: "Nervous System", ID: "Sistem Saraf" },
      desc: { EN: "Brain, cerebrum, cerebellum, brainstem, spinal cord and nerves.", ID: "Otak, serebrum, serebelum, batang otak, sumsum tulang belakang dan saraf." },
      color: "#a855f7",
      keywords: ["brain", "cerebr", "encephalon", "nerve", "dura", "cortex", "thalamus", "hypothalamus", "chiasm", "medulla", "pons", "spinal_cord", "neuron", "ganglion", "diencephalon", "hippocampus"]
    },
    {
      id: "cardio",
      icon: "🫀",
      name: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      desc: { EN: "Heart chambers, valves, aorta, coronary vessels, major arteries and veins.", ID: "Ruang jantung, katup, aorta, pembuluh koroner, arteri dan vena utama." },
      color: "#ef4444",
      keywords: ["heart", "cardi", "aorta", "ventricl", "atrium", "artery", "arteria", "vein", "vena", "coronary", "pericardi", "valve", "subclavian", "carotid", "jugular", "mitral", "tricuspid"]
    },
    {
      id: "resp",
      icon: "🫁",
      name: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      desc: { EN: "Lungs, trachea, bronchi, alveoli, larynx and diaphragm.", ID: "Paru-paru, trakea, bronkus, alveolus, laring dan diafragma." },
      color: "#3b82f6",
      keywords: ["lung", "pulmo", "trachea", "bronch", "larynx", "pleura", "alveol", "pharynx", "diaphragm"]
    },
    {
      id: "digestive",
      icon: "🍽️",
      name: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      desc: { EN: "Stomach, liver, small & large intestines, esophagus and pancreas.", ID: "Lambung, hati, usus halus & besar, esofagus dan pankreas." },
      color: "#f59e0b",
      keywords: ["stomach", "gastr", "liver", "hepat", "intestine", "colon", "duodenum", "ileum", "jejunum", "esophag", "pancreas", "gallbladder", "biliary", "spleen", "cecum", "appendix"]
    },
    {
      id: "urinary",
      icon: "🫘",
      name: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      desc: { EN: "Kidneys, nephrons, ureter, urinary bladder and urethra.", ID: "Ginjal, nefron, ureter, kandung kemih dan uretra." },
      color: "#10b981",
      keywords: ["kidney", "ren", "nephr", "ureter", "bladder", "vesica", "urethra", "adrenal"]
    },
    {
      id: "skeletal",
      icon: "🦴",
      name: { EN: "Skeletal System", ID: "Sistem Rangka" },
      desc: { EN: "Skull, vertebrae, ribs, pelvis, long bones and joints.", ID: "Tengkorak, tulang belakang, rusuk, panggul, tulang panjang dan sendi." },
      color: "#e2e8f0",
      keywords: ["bone", "os_", "ossa", "skeleton", "skull", "cranium", "mandible", "maxilla", "vertebra", "spine", "rib", "costa", "femur", "tibia", "fibula", "humerus", "radius", "ulna", "pelvis", "clavicle", "scapula", "sternum", "ilium", "ischium", "pubis", "patella", "sacrum", "coccyx", "atlas", "axis", "ethmoid", "sphenoid", "occipital", "parietal", "temporal", "zygomatic", "nasal", "calcaneus", "phalanx", "phalanges", "metacarpal", "metatarsal", "tarsal", "carpal", "cuneiform", "cuboid", "navicular", "talus", "scaphoid", "lunate", "triquetrum", "pisiform", "trapezium", "trapezoid", "capitate", "hamate", "vomer", "lacrimal", "hyoid", "cartilage", "ligament", "suture"]
    },
    {
      id: "muscular",
      icon: "💪",
      name: { EN: "Muscular System", ID: "Sistem Otot" },
      desc: { EN: "Skeletal muscles, tendons, fascia and muscular attachments.", ID: "Otot rangka, tendon, fasia dan pelekatan otot." },
      color: "#ec4899",
      keywords: ["muscle", "musculus", "biceps", "triceps", "pectoralis", "deltoid", "gluteus", "rectus", "trapezius", "latissimus", "quadriceps", "gastrocnemius", "tendon", "fascia", "brachii", "brachialis", "aponeurosis", "flexor", "extensor", "abductor", "adductor", "pronator", "supinator", "soleus", "sartorius", "gracilis", "tibialis", "peroneus", "fibularis", "oblique", "intercostal", "serratus", "rhomboid", "levator", "masseter", "temporalis", "pterygoid", "orbicularis", "frontalis", "occipitalis", "sternocleidomastoid", "scalene", "infraspinatus", "supraspinatus", "subscapularis", "teres", "coracobrachialis", "anconeus", "brachioradialis", "palmaris", "plantaris", "popliteus", "iliopsoas", "pectineus", "tensor"]
    },
    {
      id: "skin",
      icon: "🧴",
      name: { EN: "Integumentary System", ID: "Sistem Integumen (Kulit)" },
      desc: { EN: "Epidermis, dermis, subcutaneous tissue and protective barrier.", ID: "Epidermis, dermis, jaringan subkutan dan pelindung kulit." },
      color: "#f472b6",
      keywords: ["skin", "cutis", "dermis", "epidermis", "integument", "fascia_superficialis"]
    }
  ];

  /**
   * Organ definitions mapping organs to their system and explicit structure lists.
   */
  const ORGANS = [
    {
      id: "eye",
      systemId: "vision",
      name: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      desc: { EN: "The complex optical organ responsible for focusing light, phototransduction, and visual sensation.", ID: "Organ optik kompleks yang memfokuskan cahaya, transduksi sinyal, dan persepsi visual." },
      keywords: ["eye", "cornea", "lens", "retina", "sclera", "iris", "pupil", "optic", "ciliary", "conjunctiva", "bulbus", "choroid", "macula"],
      structures: [
        "Cornea", "Iris", "Lens", "Retina", "Sclera", "Optic Nerve", "Pupil", "Ciliary Body", "Choroid", "Macula & Fovea", "Vitreous Body", "Extraocular Muscles"
      ]
    },
    {
      id: "brain",
      systemId: "nervous",
      name: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      desc: { EN: "The control center of emotion, cognition, sensory integration, and motor execution.", ID: "Pusat kendali emosi, kognisi, integrasi sensorik, dan eksekusi motorik." },
      keywords: ["brain", "cerebr", "encephalon", "dura", "cortex", "thalamus", "hypothalamus", "chiasm", "medulla", "pons", "diencephalon", "hippocampus"],
      structures: [
        "Cerebrum", "Cerebellum", "Brainstem (Medulla & Pons)", "Cerebral Cortex", "Thalamus", "Hypothalamus", "Hippocampus", "Optic Chiasm"
      ]
    },
    {
      id: "spinal_cord",
      systemId: "nervous",
      name: { EN: "Spinal Cord & Peripheral Nerves", ID: "Sumsum Tulang Belakang & Saraf Tepi" },
      desc: { EN: "Neural pathway conveying motor commands and sensory afferent signals.", ID: "Jalur saraf pengirim perintah motorik dan sinyal sensori aferen." },
      keywords: ["spinal_cord", "nerve", "neuron", "ganglion"],
      structures: [
        "Cervical Spinal Cord", "Thoracic Spinal Cord", "Lumbar Spinal Cord", "Dorsal Root Ganglion", "Sciatic Nerve"
      ]
    },
    {
      id: "heart",
      systemId: "cardio",
      name: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      desc: { EN: "Muscular organ driving systemic and pulmonary blood circulation.", ID: "Organ berotot pendorong sirkulasi darah sistemik dan pulmonal." },
      keywords: ["heart", "cardi", "ventricl", "atrium", "coronary", "pericardi", "valve", "mitral", "tricuspid"],
      structures: [
        "Left Ventricle", "Right Ventricle", "Left Atrium", "Right Atrium", "Aorta", "Coronary Arteries", "Mitral Valve", "Tricuspid Valve", "Pericardium"
      ]
    },
    {
      id: "vessels",
      systemId: "cardio",
      name: { EN: "Major Vasculature (Arteries & Veins)", ID: "Pembuluh Darah Utama (Arteri & Vena)" },
      desc: { EN: "High-pressure arterial distribution networks and venous return conduits.", ID: "Jaringan arteri tekanan tinggi dan pembuluh balik vena." },
      keywords: ["aorta", "artery", "arteria", "vein", "vena", "subclavian", "carotid", "jugular"],
      structures: [
        "Ascending Aorta", "Carotid Artery", "Jugular Vein", "Subclavian Artery", "Vena Cava Superior & Inferior"
      ]
    },
    {
      id: "lungs",
      systemId: "resp",
      name: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      desc: { EN: "Alveolar gas exchange apparatus transferring oxygen and eliminating carbon dioxide.", ID: "Alat pertukaran gas alveolar penyuplai oksigen dan pembuang karbon dioksida." },
      keywords: ["lung", "pulmo", "trachea", "bronch", "larynx", "pleura", "alveol", "pharynx", "diaphragm"],
      structures: [
        "Left Lung (2 Lobes)", "Right Lung (3 Lobes)", "Trachea", "Primary Bronchi", "Alveolar Sacs", "Respiratory Diaphragm"
      ]
    },
    {
      id: "digestive_organs",
      systemId: "digestive",
      name: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      desc: { EN: "Enzymatic breakdown, nutrient absorption, metabolic storage, and excretion.", ID: "Pemecahan enzimatis, penyerapan nutrisi, penyimpanan metabolik, dan ekskresi." },
      keywords: ["stomach", "gastr", "liver", "hepat", "intestine", "colon", "duodenum", "ileum", "jejunum", "esophag", "pancreas", "gallbladder", "biliary", "spleen", "cecum"],
      structures: [
        "Stomach", "Duodenum", "Liver (Hepatic Lobes)", "Gallbladder", "Pancreas", "Small Intestine (Duodenum/Jejunum/Ileum)", "Large Intestine (Colon)", "Esophagus"
      ]
    },
    {
      id: "kidneys_bladder",
      systemId: "urinary",
      name: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      desc: { EN: "Nephron blood filtration, electrolyte homeostasis, and urine excretion.", ID: "Filstrasi darah oleh nefron, homeostatis elektrolit, dan ekskresi urin." },
      keywords: ["kidney", "ren", "nephr", "ureter", "bladder", "vesica", "urethra", "adrenal"],
      structures: [
        "Left Kidney", "Right Kidney", "Renal Cortex & Medulla", "Ureter Right", "Ureter Left", "Urinary Bladder", "Urethra"
      ]
    },
    {
      id: "skull_spine",
      systemId: "skeletal",
      name: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      desc: { EN: "Axial skeleton protecting the central brain tissue and spinal nervous chord.", ID: "Rangka aksial pelindung jaringan otak dan sumsum tulang belakang." },
      keywords: ["skull", "cranium", "mandible", "maxilla", "vertebra", "spine", "rib", "costa", "sternum", "atlas", "axis", "ethmoid", "sphenoid", "occipital", "parietal", "temporal", "zygomatic", "nasal", "vomer", "lacrimal", "hyoid", "suture", "cervical", "thoracic", "lumbar", "sacrum", "coccyx"],
      structures: [
        "Cranium (Frontal/Parietal/Temporal)", "Mandible", "Atlas (C1)", "Axis (C2)", "Cervical Vertebra C3", "Cervical Vertebra C4", "Cervical Vertebra C5", "Cervical Vertebra C6", "Cervical Vertebra C7 (Vertebra Prominens)", "Thoracic Spine & Ribs", "Lumbar Vertebra L1", "Lumbar Vertebra L2", "Lumbar Vertebra L3", "Lumbar Vertebra L4", "Lumbar Vertebra L5", "Sacrum & Coccyx"
      ]
    },
    {
      id: "limbs_pelvis",
      systemId: "skeletal",
      name: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      desc: { EN: "Appendicular framework enabling posture, locomotion, and weight bearing.", ID: "Kerangka apendikular pendorong postur, lokomosi, dan penopang beban." },
      keywords: ["bone", "os_", "ossa", "skeleton", "femur", "tibia", "fibula", "humerus", "radius", "ulna", "pelvis", "clavicle", "scapula", "ilium", "ischium", "pubis", "patella", "calcaneus", "phalanx", "phalanges", "metacarpal", "metatarsal", "tarsal", "carpal", "cuneiform", "cuboid", "navicular", "talus", "scaphoid", "lunate", "triquetrum", "pisiform", "trapezium", "trapezoid", "capitate", "hamate", "hip bone"],
      structures: [
        "Pelvis (Ilium, Ischium, Pubis)", "Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna", "Clavicle", "Scapula"
      ]
    },
    {
      id: "muscles_group",
      systemId: "muscular",
      name: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      desc: { EN: "Contractile muscle fibers driving voluntary motion, stability, and force generation.", ID: "Serat otot kontraktil penggerak mekanik, stabilitas, dan gaya." },
      keywords: ["muscle", "musculus", "biceps", "triceps", "pectoralis", "deltoid", "gluteus", "rectus", "trapezius", "latissimus", "quadriceps", "gastrocnemius", "tendon", "fascia", "brachii", "brachialis", "aponeurosis", "flexor", "extensor", "abductor", "adductor", "pronator", "supinator", "soleus", "sartorius", "gracilis", "tibialis", "peroneus", "fibularis", "oblique", "intercostal", "serratus", "rhomboid", "levator", "masseter", "temporalis", "pterygoid", "orbicularis", "frontalis", "occipitalis", "sternocleidomastoid", "scalene", "infraspinatus", "supraspinatus", "subscapularis", "teres", "coracobrachialis", "anconeus", "brachioradialis", "palmaris", "plantaris", "popliteus", "iliopsoas", "pectineus", "tensor"],
      structures: [
        "Pectoralis Major", "Deltoid Muscle", "Biceps Brachii", "Triceps Brachii", "Extraocular Muscles", "Quadriceps Femoris", "Trapezius", "Latissimus Dorsi", "Rectus Abdominis"
      ]
    },
    {
      id: "skin_layers",
      systemId: "skin",
      name: { EN: "Integumentary Protection", ID: "Perlindungan Integumen" },
      desc: { EN: "Multi-layered protective barrier, thermoregulation, and tactile sensation.", ID: "Penyekat pelindung berlapis, termoregulasi, dan sensasi rabaan." },
      keywords: ["skin", "cutis", "dermis", "epidermis", "integument", "fascia_superficialis", "hypodermis", "stratum", "subcutaneous", "extract"],
      structures: [
        "Stratum Corneum & Epidermis", "Dermal Layer & Collagen", "Subcutaneous Hypodermis & Adipose Tissue"
      ]
    }
  ];

  /**
   * CANONICAL ANATOMY REGISTRY
   * Stable canonical identities for anatomical structures decoupled from 3D asset node names.
   */
  const CANONICAL_REGISTRY = {
    cornea: {
      id: "cornea",
      displayName: { EN: "Cornea", ID: "Kornea" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    iris: {
      id: "iris",
      displayName: { EN: "Iris", ID: "Iris" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    lens: {
      id: "lens",
      displayName: { EN: "Lens", ID: "Lensa" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    suspensory_ligaments: {
      id: "suspensory_ligaments",
      displayName: { EN: "Suspensory Ligaments (Zonule of Zinn)", ID: "Ligamen Suspensorium (Zonula Zinn)" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    sclera: {
      id: "sclera",
      displayName: { EN: "Sclera", ID: "Sklera" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    choroid: {
      id: "choroid",
      displayName: { EN: "Choroid", ID: "Koroid" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    retina: {
      id: "retina",
      displayName: { EN: "Retina", ID: "Retina" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    optic_nerve: {
      id: "optic_nerve",
      displayName: { EN: "Optic Nerve", ID: "Saraf Optik" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    central_retinal_artery: {
      id: "central_retinal_artery",
      displayName: { EN: "Central Retinal Artery", ID: "Arteri Retina Sentral" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    central_retinal_vein: {
      id: "central_retinal_vein",
      displayName: { EN: "Central Retinal Vein", ID: "Vena Retina Sentral" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    extraocular_muscles: {
      id: "extraocular_muscles",
      displayName: { EN: "Extraocular Muscles", ID: "Otot Ekstraokular" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    pupil: {
      id: "pupil",
      displayName: { EN: "Pupil", ID: "Pupil" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    ciliary_body: {
      id: "ciliary_body",
      displayName: { EN: "Ciliary Body", ID: "Badan Siliar" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    macula: {
      id: "macula",
      displayName: { EN: "Macula & Fovea", ID: "Makula & Fovea" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    vitreous_body: {
      id: "vitreous_body",
      displayName: { EN: "Vitreous Body", ID: "Badan Kaca (Vitreus)" },
      organId: "eye",
      organName: { EN: "Eye & Ocular Apparatus", ID: "Mata & Aparatus Okular" },
      systemId: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      color: "#00f2fe"
    },
    // Nervous System canonical structures
    cerebrum: {
      id: "cerebrum",
      displayName: { EN: "Cerebrum", ID: "Serebrum" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    cerebellum: {
      id: "cerebellum",
      displayName: { EN: "Cerebellum", ID: "Serebelum" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    brainstem: {
      id: "brainstem",
      displayName: { EN: "Brainstem (Medulla & Pons)", ID: "Batang Otak (Medula & Pons)" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    thalamus: {
      id: "thalamus",
      displayName: { EN: "Thalamus", ID: "Talamus" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    hypothalamus: {
      id: "hypothalamus",
      displayName: { EN: "Hypothalamus", ID: "Hipotalamus" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    hippocampus: {
      id: "hippocampus",
      displayName: { EN: "Hippocampus", ID: "Hipokampus" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    optic_chiasm: {
      id: "optic_chiasm",
      displayName: { EN: "Optic Chiasm", ID: "Kiasma Optik" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    brain: {
      id: "brain",
      displayName: { EN: "Brain", ID: "Otak" },
      organId: "brain",
      organName: { EN: "Brain & Central Nervous System", ID: "Otak & Sistem Saraf Pusat" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    spinal_cord: {
      id: "spinal_cord",
      displayName: { EN: "Spinal Cord", ID: "Sumsum Tulang Belakang" },
      organId: "spinal_cord",
      organName: { EN: "Spinal Cord & Peripheral Nerves", ID: "Sumsum Tulang Belakang & Saraf Tepi" },
      systemId: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      color: "#a855f7"
    },
    // Cardiovascular System canonical structures
    heart: {
      id: "heart",
      displayName: { EN: "Heart", ID: "Jantung" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    left_ventricle: {
      id: "left_ventricle",
      displayName: { EN: "Left Ventricle", ID: "Ventrikel Kiri" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    right_ventricle: {
      id: "right_ventricle",
      displayName: { EN: "Right Ventricle", ID: "Ventrikel Kanan" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    left_atrium: {
      id: "left_atrium",
      displayName: { EN: "Left Atrium", ID: "Atrium Kiri" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    right_atrium: {
      id: "right_atrium",
      displayName: { EN: "Right Atrium", ID: "Atrium Kanan" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    aorta: {
      id: "aorta",
      displayName: { EN: "Aorta", ID: "Aorta" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    coronary_arteries: {
      id: "coronary_arteries",
      displayName: { EN: "Coronary Arteries", ID: "Arteri Koroner" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    mitral_valve: {
      id: "mitral_valve",
      displayName: { EN: "Mitral Valve", ID: "Katup Mitral" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    tricuspid_valve: {
      id: "tricuspid_valve",
      displayName: { EN: "Tricuspid Valve", ID: "Katup Trikuspidalis" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    pericardium: {
      id: "pericardium",
      displayName: { EN: "Pericardium", ID: "Perikardium" },
      organId: "heart",
      organName: { EN: "Heart & Cardiac Chambers", ID: "Jantung & Ruang Jantung" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    ascending_aorta: {
      id: "ascending_aorta",
      displayName: { EN: "Ascending Aorta", ID: "Aorta Asenden" },
      organId: "vessels",
      organName: { EN: "Major Vasculature (Arteries & Veins)", ID: "Pembuluh Darah Utama (Arteri & Vena)" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    carotid_artery: {
      id: "carotid_artery",
      displayName: { EN: "Carotid Artery", ID: "Arteri Karotis" },
      organId: "vessels",
      organName: { EN: "Major Vasculature (Arteries & Veins)", ID: "Pembuluh Darah Utama (Arteri & Vena)" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    jugular_vein: {
      id: "jugular_vein",
      displayName: { EN: "Jugular Vein", ID: "Vena Jugularis" },
      organId: "vessels",
      organName: { EN: "Major Vasculature (Arteries & Veins)", ID: "Pembuluh Darah Utama (Arteri & Vena)" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    subclavian_artery: {
      id: "subclavian_artery",
      displayName: { EN: "Subclavian Artery", ID: "Arteri Subklavia" },
      organId: "vessels",
      organName: { EN: "Major Vasculature (Arteries & Veins)", ID: "Pembuluh Darah Utama (Arteri & Vena)" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    vena_cava: {
      id: "vena_cava",
      displayName: { EN: "Vena Cava Superior & Inferior", ID: "Vena Kava Superior & Inferior" },
      organId: "vessels",
      organName: { EN: "Major Vasculature (Arteries & Veins)", ID: "Pembuluh Darah Utama (Arteri & Vena)" },
      systemId: "cardio",
      systemName: { EN: "Cardiovascular", ID: "Sistem Kardiovaskular" },
      color: "#ef4444"
    },
    // Respiratory System canonical structures
    lungs: {
      id: "lungs",
      displayName: { EN: "Lungs", ID: "Paru-Paru" },
      organId: "lungs",
      organName: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      systemId: "resp",
      systemName: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      color: "#3b82f6"
    },
    left_lung: {
      id: "left_lung",
      displayName: { EN: "Left Lung (2 Lobes)", ID: "Paru-Paru Kiri (2 Lobus)" },
      organId: "lungs",
      organName: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      systemId: "resp",
      systemName: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      color: "#3b82f6"
    },
    right_lung: {
      id: "right_lung",
      displayName: { EN: "Right Lung (3 Lobes)", ID: "Paru-Paru Kanan (3 Lobus)" },
      organId: "lungs",
      organName: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      systemId: "resp",
      systemName: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      color: "#3b82f6"
    },
    trachea: {
      id: "trachea",
      displayName: { EN: "Trachea", ID: "Trakea" },
      organId: "lungs",
      organName: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      systemId: "resp",
      systemName: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      color: "#3b82f6"
    },
    primary_bronchi: {
      id: "primary_bronchi",
      displayName: { EN: "Primary Bronchi", ID: "Bronkus Utama" },
      organId: "lungs",
      organName: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      systemId: "resp",
      systemName: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      color: "#3b82f6"
    },
    alveolar_sacs: {
      id: "alveolar_sacs",
      displayName: { EN: "Alveolar Sacs", ID: "Kantung Alveolus" },
      organId: "lungs",
      organName: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      systemId: "resp",
      systemName: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      color: "#3b82f6"
    },
    diaphragm: {
      id: "diaphragm",
      displayName: { EN: "Respiratory Diaphragm", ID: "Diafragma Pernapasan" },
      organId: "lungs",
      organName: { EN: "Lungs & Respiratory Tract", ID: "Paru-Paru & Saluran Pernapasan" },
      systemId: "resp",
      systemName: { EN: "Respiratory System", ID: "Sistem Pernapasan" },
      color: "#3b82f6"
    },
    // Digestive System canonical structures
    stomach: {
      id: "stomach",
      displayName: { EN: "Stomach", ID: "Lambung" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    liver: {
      id: "liver",
      displayName: { EN: "Liver (Hepatic Lobes)", ID: "Hati (Hepar)" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    gallbladder: {
      id: "gallbladder",
      displayName: { EN: "Gallbladder", ID: "Kandung Empedu" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    pancreas: {
      id: "pancreas",
      displayName: { EN: "Pancreas", ID: "Pankreas" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    duodenum: {
      id: "duodenum",
      displayName: { EN: "Duodenum", ID: "Duodenum" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    small_intestine: {
      id: "small_intestine",
      displayName: { EN: "Small Intestine (Duodenum/Jejunum/Ileum)", ID: "Usus Halus (Duodenum/Jejunum/Ileum)" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    large_intestine: {
      id: "large_intestine",
      displayName: { EN: "Large Intestine (Colon)", ID: "Usus Besar (Kolon)" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    esophagus: {
      id: "esophagus",
      displayName: { EN: "Esophagus", ID: "Esofagus" },
      organId: "digestive_organs",
      organName: { EN: "Gastrointestinal Tract & Glands", ID: "Saluran & Kelenjar Pencernaan" },
      systemId: "digestive",
      systemName: { EN: "Digestive System", ID: "Sistem Pencernaan" },
      color: "#f59e0b"
    },
    // Urinary System canonical structures
    kidney: {
      id: "kidney",
      displayName: { EN: "Kidney", ID: "Ginjal" },
      organId: "kidneys_bladder",
      organName: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      systemId: "urinary",
      systemName: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      color: "#10b981"
    },
    left_kidney: {
      id: "left_kidney",
      displayName: { EN: "Left Kidney", ID: "Ginjal Kiri" },
      organId: "kidneys_bladder",
      organName: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      systemId: "urinary",
      systemName: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      color: "#10b981"
    },
    right_kidney: {
      id: "right_kidney",
      displayName: { EN: "Right Kidney", ID: "Ginjal Kanan" },
      organId: "kidneys_bladder",
      organName: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      systemId: "urinary",
      systemName: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      color: "#10b981"
    },
    renal_cortex: {
      id: "renal_cortex",
      displayName: { EN: "Renal Cortex & Medulla", ID: "Korteks & Medula Ginjal" },
      organId: "kidneys_bladder",
      organName: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      systemId: "urinary",
      systemName: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      color: "#10b981"
    },
    ureter: {
      id: "ureter",
      displayName: { EN: "Ureter", ID: "Ureter" },
      organId: "kidneys_bladder",
      organName: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      systemId: "urinary",
      systemName: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      color: "#10b981"
    },
    urinary_bladder: {
      id: "urinary_bladder",
      displayName: { EN: "Urinary Bladder", ID: "Kandung Kemih" },
      organId: "kidneys_bladder",
      organName: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      systemId: "urinary",
      systemName: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      color: "#10b981"
    },
    urethra: {
      id: "urethra",
      displayName: { EN: "Urethra", ID: "Uretra" },
      organId: "kidneys_bladder",
      organName: { EN: "Kidneys & Urinary Tract", ID: "Ginjal & Saluran Kemih" },
      systemId: "urinary",
      systemName: { EN: "Urinary System", ID: "Sistem Ekskresi & Urinari" },
      color: "#10b981"
    },
    // Skeletal System canonical structures
    cranium: {
      id: "cranium",
      displayName: { EN: "Cranium (Frontal/Parietal/Temporal)", ID: "Tengkorak (Kranium)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    mandible: {
      id: "mandible",
      displayName: { EN: "Mandible", ID: "Mandibula (Rahang Bawah)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    cervical_vertebrae: {
      id: "cervical_vertebrae",
      displayName: { EN: "Cervical Vertebrae (C1-C7)", ID: "Vertebra Servikal (C1-C7)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    c1_atlas: {
      id: "c1_atlas",
      displayName: { EN: "Atlas (C1)", ID: "Atlas (C1)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    c2_axis: {
      id: "c2_axis",
      displayName: { EN: "Axis (C2)", ID: "Axis (C2)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    c3_vertebra: {
      id: "c3_vertebra",
      displayName: { EN: "Cervical Vertebra C3", ID: "Vertebra Servikal C3" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    c4_vertebra: {
      id: "c4_vertebra",
      displayName: { EN: "Cervical Vertebra C4", ID: "Vertebra Servikal C4" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    c5_vertebra: {
      id: "c5_vertebra",
      displayName: { EN: "Cervical Vertebra C5", ID: "Vertebra Servikal C5" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    c6_vertebra: {
      id: "c6_vertebra",
      displayName: { EN: "Cervical Vertebra C6", ID: "Vertebra Servikal C6" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    c7_vertebra: {
      id: "c7_vertebra",
      displayName: { EN: "Cervical Vertebra C7 (Vertebra Prominens)", ID: "Vertebra Servikal C7 (Vertebra Prominens)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    thoracic_ribs: {
      id: "thoracic_ribs",
      displayName: { EN: "Thoracic Spine & Ribs", ID: "Tulang Belakang Torakal & Rusuk" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    rib_1st: {
      id: "rib_1st",
      displayName: { EN: "Rib (1st)", ID: "Tulang Rusuk ke-1" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    rib_4th: {
      id: "rib_4th",
      displayName: { EN: "Rib 4th (Right)", ID: "Tulang Rusuk ke-4 (Kanan)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    rib: {
      id: "rib",
      displayName: { EN: "Rib", ID: "Tulang Rusuk (Kosta)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    lumbar_spine: {
      id: "lumbar_spine",
      displayName: { EN: "Lumbar Spine", ID: "Tulang Belakang Lumbal" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    l1_vertebra: {
      id: "l1_vertebra",
      displayName: { EN: "Lumbar Vertebra L1", ID: "Vertebra Lumbal L1" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    l2_vertebra: {
      id: "l2_vertebra",
      displayName: { EN: "Lumbar Vertebra L2", ID: "Vertebra Lumbal L2" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    l3_vertebra: {
      id: "l3_vertebra",
      displayName: { EN: "Lumbar Vertebra L3", ID: "Vertebra Lumbal L3" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    l4_vertebra: {
      id: "l4_vertebra",
      displayName: { EN: "Lumbar Vertebra L4", ID: "Vertebra Lumbal L4" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    l5_vertebra: {
      id: "l5_vertebra",
      displayName: { EN: "Lumbar Vertebra L5", ID: "Vertebra Lumbal L5" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    sacrum_coccyx: {
      id: "sacrum_coccyx",
      displayName: { EN: "Sacrum & Coccyx", ID: "Sakrum & Koksigis" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    pelvis: {
      id: "pelvis",
      displayName: { EN: "Pelvis (Ilium, Ischium, Pubis)", ID: "Panggul (Ilium, Iskium, Pubis)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    femur: {
      id: "femur",
      displayName: { EN: "Femur", ID: "Tulang Paha (Femur)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    tibia_fibula: {
      id: "tibia_fibula",
      displayName: { EN: "Tibia & Fibula", ID: "Tibia & Fibula (Tulang Kering & Betis)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    tibia: {
      id: "tibia",
      displayName: { EN: "Tibia", ID: "Tibia (Tulang Kering)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    fibula: {
      id: "fibula",
      displayName: { EN: "Fibula", ID: "Fibula (Tulang Betis)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    humerus: {
      id: "humerus",
      displayName: { EN: "Humerus", ID: "Humerus (Tulang Lengan Atas)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    radius_ulna: {
      id: "radius_ulna",
      displayName: { EN: "Radius & Ulna", ID: "Radius & Ulna (Pengumpil & Hasta)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    radius: {
      id: "radius",
      displayName: { EN: "Radius", ID: "Radius (Tulang Pengumpil)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    ulna: {
      id: "ulna",
      displayName: { EN: "Ulna", ID: "Ulna (Tulang Hasta)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    clavicle_scapula: {
      id: "clavicle_scapula",
      displayName: { EN: "Clavicle & Scapula", ID: "Klavikula & Skapula (Selangka & Belikat)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    clavicle: {
      id: "clavicle",
      displayName: { EN: "Clavicle", ID: "Klavikula (Tulang Selangka)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    scapula: {
      id: "scapula",
      displayName: { EN: "Scapula", ID: "Skapula (Tulang Belikat)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    patella: {
      id: "patella",
      displayName: { EN: "Patella", ID: "Patela (Tempurung Lutut)" },
      organId: "limbs_pelvis",
      organName: { EN: "Pelvis & Limb Skeleton", ID: "Panggul & Skeleton Anggota Gerak" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    sternum: {
      id: "sternum",
      displayName: { EN: "Sternum", ID: "Sternum (Tulang Dada)" },
      organId: "skull_spine",
      organName: { EN: "Skull, Cranium & Spine", ID: "Tengkorak & Tulang Belakang" },
      systemId: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      color: "#e2e8f0"
    },
    // Muscular System canonical structures
    pectoralis_major: {
      id: "pectoralis_major",
      displayName: { EN: "Pectoralis Major", ID: "Otot Pektoralis Mayor" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    biceps: {
      id: "biceps",
      displayName: { EN: "Biceps Brachii", ID: "Otot Biseps (Biceps Brachii)" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    triceps: {
      id: "triceps",
      displayName: { EN: "Triceps Brachii", ID: "Otot Triseps (Triceps Brachii)" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    deltoid: {
      id: "deltoid",
      displayName: { EN: "Deltoid Muscle", ID: "Otot Deltoid" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    rectus_abdominis: {
      id: "rectus_abdominis",
      displayName: { EN: "Rectus Abdominis", ID: "Otot Rektus Abdominis" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    quadriceps: {
      id: "quadriceps",
      displayName: { EN: "Quadriceps Femoris", ID: "Otot Kuadriseps Femoris" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    trapezius: {
      id: "trapezius",
      displayName: { EN: "Trapezius", ID: "Otot Trapezius" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    latissimus_dorsi: {
      id: "latissimus_dorsi",
      displayName: { EN: "Latissimus Dorsi", ID: "Otot Latissimus Dorsi" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    trapezius_latissimus: {
      id: "trapezius_latissimus",
      displayName: { EN: "Trapezius & Latissimus", ID: "Otot Trapesius & Latissimus" },
      organId: "muscles_group",
      organName: { EN: "Muscular Framework", ID: "Struktur Otot Rangka" },
      systemId: "muscular",
      systemName: { EN: "Muscular System", ID: "Sistem Otot" },
      color: "#ec4899"
    },
    // Skin canonical structures
    epidermis: {
      id: "epidermis",
      displayName: { EN: "Stratum Corneum & Epidermis", ID: "Stratum Korneum & Epidermis" },
      organId: "skin_layers",
      organName: { EN: "Integumentary Protection", ID: "Perlindungan Integumen" },
      systemId: "skin",
      systemName: { EN: "Integumentary System", ID: "Sistem Integumen (Kulit)" },
      color: "#f472b6"
    },
    dermis: {
      id: "dermis",
      displayName: { EN: "Dermal Layer & Collagen", ID: "Lapisan Dermis & Kolagen" },
      organId: "skin_layers",
      organName: { EN: "Integumentary Protection", ID: "Perlindungan Integumen" },
      systemId: "skin",
      systemName: { EN: "Integumentary System", ID: "Sistem Integumen (Kulit)" },
      color: "#f472b6"
    },
    hypodermis: {
      id: "hypodermis",
      displayName: { EN: "Subcutaneous Hypodermis & Adipose Tissue", ID: "Hipodermis & Jaringan Adiposa Subkutan" },
      organId: "skin_layers",
      organName: { EN: "Integumentary Protection", ID: "Perlindungan Integumen" },
      systemId: "skin",
      systemName: { EN: "Integumentary System", ID: "Sistem Integumen (Kulit)" },
      color: "#f472b6"
    }
  };

  /**
   * Centralized Canonical Alias Mapping
   * Maps 3D raw node names, aliases, and naming variations to Canonical Anatomy IDs.
   */
  const ANATOMY_ALIASES = {
    cornea: [
      "cornea_material.001_0", "cornea", "cornea.l", "cornea.r", "cornea.001", "cornea.r.001",
      "anterior surface of cornea.j", "anterior surface of cornea.t", "corneal vertex.t",
      "corneoscleral junction.j", "corneoscleral junction.t", "posterior surface of cornea.j",
      "posterior surface of cornea.t", "sulcus sclerae.j", "sulcus sclerae.t", "left cornea", "right cornea",
      "kornea"
    ],
    iris: [
      "iris_material.002_0", "iris", "iris.l", "iris.r", "anterior surface of iris.j",
      "anterior surface of iris.t", "folds of iris.j", "folds of iris.t", "posterior surface of iris.j",
      "posterior surface of iris.t", "left iris", "right iris"
    ],
    lens: [
      "lens_material.003_0", "lens", "lens.l", "lens.r", "lens.001", "lens101",
      "left lens", "right lens", "lensa", "crystalline lens", "lensa kristalina"
    ],
    suspensory_ligaments: [
      "suspensory ligaments 1__0", "suspensory ligaments 2__0", "suspensory ligaments 3__0", "suspensory ligaments 4__0",
      "suspensory ligaments 1", "suspensory ligaments 2", "suspensory ligaments 3", "suspensory ligaments 4",
      "suspensory ligaments", "zonule of zinn", "ciliary zonule", "ligamen suspensorium", "zonula zinn"
    ],
    sclera: [
      "sclera_material.006_0", "sclera", "sclera.l", "sclera.r", "sclera.r.001", "left sclera", "right sclera", "sklera"
    ],
    choroid: [
      "choroid_material.009_0", "choroid", "choroid plexus.l", "choroid plexus.r",
      "choroid plexus.l.001", "choroid plexus.r.001", "left choroid", "right choroid", "koroid"
    ],
    retina: [
      "retina_material.008_0", "retina", "retina.l", "retina.r", "left retina", "right retina"
    ],
    optic_nerve: [
      "cylinder.006_material.006_0", "cylinder.007_material.004_0", "cylinder.006", "cylinder.007",
      "optic nerve (ii).l", "optic nerve (ii).r", "optic nerve", "optic tract.l", "optic tract.r",
      "short ciliary nerves.l", "short ciliary nerves.r", "saraf optik", "nervus opticus"
    ],
    central_retinal_artery: [
      "artery_material.015_0", "artery", "central retinal artery.l", "central retinal artery.r",
      "central retinal artery.l.001", "central retinal artery.r.001", "long posterior ciliary arteries.l",
      "long posterior ciliary arteries.r", "long posterior ciliary arteries.l.001", "long posterior ciliary arteries.r.001",
      "short posterior ciliary arteries", "short posterior ciliary arteries.l.001", "short posterior ciliary arteries.r.001"
    ],
    central_retinal_vein: [
      "vein_material.014_0", "vein"
    ],
    extraocular_muscles: [
      "muscle 1_material.013_0", "muscle 2_material.007_0", "muscle 1", "muscle 2", "rectus", "oblique", "otot ekstraokular",
      "extraocular muscles", "extraocular muscle", "superior rectus", "inferior rectus", "medial rectus", "lateral rectus", "superior oblique", "inferior oblique", "levator palpebrae"
    ],
    pupil: [
      "pupil.j", "pupil.t", "pupil", "pupillary margin of iris.j", "pupillary margin of iris.t",
      "sphincter pupillae.j", "sphincter pupillae.t", "dilator pupillae.j", "dilator pupillae.t"
    ],
    ciliary_body: [
      "ciliary body-curve.l", "ciliary body-curve.r", "ciliary body", "ciliary ganglion.l", "ciliary ganglion.r", "badan siliar"
    ],
    macula: [
      "macula", "macula lutea", "fovea", "fovea centralis", "makula"
    ],
    vitreous_body: [
      "vitreous", "vitreous body", "vitreous humor", "corpus vitreum", "badan kaca"
    ],
    // Cross-system aliases
    heart: ["heart", "jantung", "cardi", "cor", "cardiac"],
    left_ventricle: ["left ventricle", "left_ventricle", "ventrikel kiri", "inferior papillary muscle of left ventricle"],
    right_ventricle: ["right ventricle", "right_ventricle", "ventrikel kanan", "anterior papillary muscle of right ventricle", "inferior papillary muscle of right ventricle", "septal papillary muscle of right ventricle"],
    left_atrium: ["left atrium", "left_atrium", "atrium kiri", "left atrioventricular valve.j", "posterior leaflet of left atrioventricular valve"],
    right_atrium: ["right atrium", "right_atrium", "atrium kanan", "right atrioventricular valve.j", "septal leaflet of right atrioventricular valve"],
    aorta: ["ascending aorta", "aorta", "arch of aorta"],
    coronary_arteries: ["left coronary artery", "right coronary artery", "coronary arteries", "arteri koroner", "anterior interventricular artery", "circumflex artery of heart"],
    cerebrum: ["cerebrum.g", "cerebrumg", "cerebrum", "cerebrum_g", "serebrum", "otak besar", "cerebral arterial circle.j", "middle cerebral artery (m1-segment).l", "anterior cerebral artery.l", "middle cerebral artery (m1-segment).r"],
    cerebellum: ["cerebellum.g", "cerebellum", "serebelum", "otak kecil", "posterior inferior cerebellar artery.l", "anterior inferior cerebellar artery.l", "anterior inferior cerebellar artery.r"],
    brainstem: ["brainstem.g", "brainstem", "batang otak", "medulla", "pons", "medulla oblongata", "brainstem (medulla & pons)"],
    thalamus: ["thalamus", "thalamusl", "thalamusr", "talamus", "thalamus.l", "thalamus.r"],
    hypothalamus: ["hypothalamus", "hypothalamusl", "hypothalamusr", "hypothalamus.l", "hypothalamus.r", "hippothalamus", "hippothalamusl", "hippothalamusr", "hippothalamus.l", "hippothalamus.r", "hipotalamus", "hypothalamus left", "hypothalamus right", "hippothalamus left", "hippothalamus right"],
    hippocampus: ["hippocampus", "hippocampusl", "hippocampusr", "hippocampusl001", "hippocampusr001", "hipokampus", "hippocampus.l", "hippocampus.r", "hippocampus left", "hippocampus right", "left hippocampus", "right hippocampus"],
    optic_chiasm: ["optic chiasm", "optic_chiasm", "chiasma opticum", "kiasma optik", "optic chiasma"],
    brain: ["brain", "otak", "encephalon"],
    spinal_cord: ["spinal cord", "spinal_cord", "sumsum tulang belakang", "medulla spinalis"],
    lungs: ["lung", "lungs", "pulmo", "paru", "paru-paru"],
    left_lung: ["left lung", "left_lung", "paru kiri", "paru-paru kiri", "anterior basal segmental artery of left lung", "inferior lobar artery of left lung.j", "superior lobar artery of left lung.j"],
    right_lung: ["right lung", "right_lung", "paru kanan", "paru-paru kanan", "superior lobar artery of right lung", "middle lobar artery of right lung", "inferior lobar artery of right lung"],
    trachea: ["trachea", "trakea"],
    stomach: ["stomach", "lambung", "gaster", "ventriculus"],
    duodenum: ["duodenum", "duodenum001", "duodenum.001", "duodenum101", "usus 12 jari", "usus dua belas jari"],
    liver: ["liver", "hati", "hepar", "hepatic"],
    esophagus: ["esophagus", "oesophagus", "oesophagus001", "esophagus001", "esofagus"],
    
    // Urinary System Aliases (Strict Left vs Right Isolation)
    kidney: ["kidney", "ginjal", "ren", "nephron"],
    left_kidney: ["kidney.l", "kidney.l.001", "kidney.l.002", "intrarenal arteries of left kidney", "intrarenal veins of left kidney", "left renal artery", "left renal vein", "left kidney", "ginjal kiri", "ren sinister", "left_kidney"],
    right_kidney: ["kidney.r", "kidney.r.001", "kidney.r.002", "intrarenal arteries of right kidney", "intrarenal veins of right kidney", "right renal artery", "right renal vein", "right kidney", "ginjal kanan", "ren dexter", "right_kidney"],
    ureter: ["ureter", "ureter.l", "ureter.r", "ureter.l.001", "ureter.r.001", "ureterl", "ureterr", "ureterl001", "ureterr001", "ureter001", "left ureter", "right ureter", "ureter left", "ureter right"],
    urinary_bladder: ["urinary bladder", "urinary bladder.001", "urinary bladder001", "urinary_bladder", "urinary_bladder001", "bladder", "vesica urinaria", "kandung kemih"],
    
    // Skeletal System Aliases
    femur: ["femur", "femur.r", "femur.l", "tulang paha"],
    tibia: ["tibia", "tibia.r", "tibia.l", "tibiar", "tibial", "tibia001", "tulang kering", "tibia right", "tibia (right)", "right tibia"],
    fibula: ["fibula", "fibula.r", "fibula.l", "fibula001", "tulang betis"],
    radius: ["radius", "radius.r", "radius.l", "radiusr", "radiusl", "radius001", "pengumpil", "articular circumference of head of radius", "radius right", "radius (right)", "right radius"],
    ulna: ["ulna", "ulna.r", "ulna.l", "ulnar", "ulnal", "ulna001", "hasta", "articular circumference of head of ulna"],
    clavicle: ["clavicle", "clavicle.r", "clavicle.l", "clavicler", "claviclel", "clavicle001", "selangka", "clavicle (right)", "clavicle (right) (right)", "clavicle (right) (right) (right)"],
    scapula: ["scapula", "scapula.r", "scapula.l", "scapula.r.", "scapula001", "belikat"],
    humerus: ["humerus", "humerus.r", "humerus.l", "humerus001"],
    patella: ["patella", "patella.r", "patella.l", "patella001", "tempurung lutut"],
    sternum: ["body of sternum", "manubrium of sternum", "xiphoid process", "sternum"],
    rib_1st: ["rib (1st).r", "rib (1st)", "1st rib", "costal cart of 1st rib.r", "costal cart of 1st.rib.r"],
    rib_4th: ["rib (4th).r", "rib (4th)((right))", "rib (4th)", "4th rib", "costal cart of 4th rib.r", "costal cart of 4th.rib.r"],
    rib: ["rib", "ribs", "costa", "kosta", "rib (2nd)", "rib (3rd)", "rib (5th)", "rib (6th)", "rib (7th)", "rib (8th)", "rib (9th)", "rib (10th)", "rib (11th)", "rib (12th)", "thoracic spine & ribs"],
    
    // Cervical Vertebrae Aliases (C1-C7)
    c1_atlas: ["atlas (c1)", "atlas", "c1", "atlas vertebra", "art cart of atlas c1"],
    c2_axis: ["axis (c2)", "axis", "c2", "axis vertebra", "art cart of axis c2", "dens"],
    c3_vertebra: ["cervical vertebra (c3)", "cervical vertebrae (c3)", "c3", "c3 vertebra", "cervical vertebra c3", "vertebra c3", "vertebra c3 art cart"],
    c4_vertebra: ["cervical vertebra (c4)", "cervical vertebrae (c4)", "c4", "c4 vertebra", "cervical vertebra c4", "vertebra c4", "vertebra c4 art cart"],
    c5_vertebra: ["cervical vertebra (c5)", "cervical vertebrae (c5)", "c5", "c5 vertebra", "cervical vertebra c5", "vertebra c5", "vertebra c5 art cart"],
    c6_vertebra: ["cervical vertebra (c6)", "cervical vertebrae (c6)", "c6", "c6 vertebra", "cervical vertebra c6", "vertebra c6", "vertebra c6 art cart"],
    c7_vertebra: ["cervical vertebra (c7)", "cervical vertebrae (c7)", "c7", "c7 vertebra", "cervical vertebra c7", "vertebra c7", "vertebra c7 art cart", "vertebra prominens"],
    
    // Lumbar Vertebrae Aliases (L1-L5)
    l1_vertebra: ["lumbar vertebrae (l1)", "lumbar vertebra (l1)", "l1", "l1 vertebra", "lumbar vertebra l1", "vertebra l1"],
    l2_vertebra: ["lumbar vertebrae (l2)", "lumbar vertebra (l2)", "l2", "l2 vertebra", "lumbar vertebra l2", "vertebra l2"],
    l3_vertebra: ["lumbar vertebrae (l3)", "lumbar vertebra (l3)", "l3", "l3 vertebra", "lumbar vertebra l3", "vertebra l3"],
    l4_vertebra: ["lumbar vertebrae (l4)", "lumbar vertebra (l4)", "l4", "l4 vertebra", "lumbar vertebra l4", "vertebra l4"],
    l5_vertebra: ["lumbar vertebrae (l5)", "lumbar vertebra (l5)", "l5", "l5 vertebra", "lumbar vertebra l5", "vertebra l5"],
    
    // Muscular System Aliases (with Normalized Suffix Removal)
    biceps: ["biceps", "biceps.r", "bicepsr", "bicepsl", "bicepsbrr", "bicepsrr", "biceps001", "biceps brachii", "otot biseps", "common tendon of biceps brachii", "bicipital aponeurosis"],
    triceps: ["triceps", "triceps.r", "triceps001", "triceps002", "tricepsr", "tricepsl", "triceps brachii", "otot triseps", "triceps brachii muscle", "caput longum of triceps brachii", "caput laterale of triceps brachii", "caput mediale of triceps brachii"],
    pectoralis_major: ["pectoralis major", "pectoralis major.r", "pectoralis major muscle", "pectoralis major muscler", "sternocostal head of pectoralis major muscle.r", "sternocostal head of pectoralis major muscler", "clavicular head of pectoralis major muscle.r", "abdominal head of pectoralis major muscle.r", "pectoralis", "otot pektoralis mayor"],
    deltoid: ["deltoid muscle", "deltoid muscle.r", "deltoid", "deltoid muscler", "acromial part of deltoid muscle.r", "clavicular part of deltoid muscle.r", "spinal part of deltoid muscle.r", "thoracoacromial artery deltoid br.r", "thoracoacromial artery deltoid brr", "thoracoacromial artery deltoid branch", "otot deltoid"],
    trapezius: ["trapezius", "trapezius muscle", "trapezius muscle.r", "trapezius muscler", "ascending part of trapezius muscle.r", "ascending part of trapezius muscler", "descending part of trapezius muscle.r", "transverse part of trapezius muscle.r", "otot trapezius"],
    latissimus_dorsi: ["latissimus dorsi", "latissimus dorsi.r", "latissimus", "otot latissimus dorsi"],
    quadriceps: ["quadriceps femoris", "quadriceps femoris.r", "rectus femoris.r", "vastus lateralis.r", "vastus medialis.r", "vastus intermedius.r", "quadriceps common tendon and patellar ligament", "quadriceps common tendon and patellar ligamentr", "patellar ligament", "patellar ligamentr", "otot kuadriseps femoris"],
    rectus_abdominis: ["rectus abdominis", "rectus abdominis.r", "rectus"],
    
    // Skin System Aliases
    dermis: ["dermis", "dermal", "dermal layer & collagen", "lapisan dermis", "extract1", "extract3_1", "extract6", "extract8", "extract1_extract1_0", "extract3_1_extract3_1_0", "extract6_extract6_0", "extract8_extract8_0", "pm3d_cube3d5_945", "pm3d_cube3d5_953", "pm3d_cube3d2"],
    hypodermis: ["hypodermis", "subcutaneous", "adipose", "subcutaneous hypodermis & adipose tissue", "hipodermis", "skin_zsphere6", "skin_zsphere7", "skin_zsphere29_11", "pm3d_sphere3d2_2", "pm3d_sphere3d2_343", "big", "big_big_0"],
    epidermis: ["epidermis", "epidermis_epidermis_0", "epischdermis", "skin_zsphere_4", "skin_zsphere", "skin", "stratum corneum", "kulit", "stratum corneum & epidermis"],
    
    // Backward compatibility mappings
    "left kidney": ["kidney.l", "kidney.l.001", "left kidney", "ginjal kiri"],
    "right kidney": ["kidney.r", "kidney.r.001", "right kidney", "ginjal kanan"],
    "left ventricle": ["left ventricle", "inferior papillary muscle of left ventricle", "ventrikel kiri"],
    "right ventricle": ["right ventricle", "ventrikel kanan"],
    "left atrium": ["left atrium", "atrium kiri"],
    "right atrium": ["right atrium", "atrium kanan"],
    "coronary arteries": ["coronary arteries", "arteri koroner"],
    "left lung (2 lobes)": ["left lung", "paru kiri", "anterior basal segmental artery of left lung"],
    "right lung (3 lobes)": ["right lung", "paru kanan", "superior lobar artery of right lung"],
    "cranium (frontal/parietal/temporal)": ["frontal bone", "parietal bone", "temporal bone", "occipital bone", "sphenoid bone", "ethmoid bone", "cranium", "skull", "tengkorak"],
    "mandible": ["mandible", "rahang bawah"],
    "cervical vertebrae (c1-c7)": ["atlas (c1)", "axis (c2)", "cervical vertebrae", "cervical vertebrae (c3)", "cervical vertebra", "cervical"],
    "thoracic spine & ribs": ["thoracic vertebra", "rib", "rib (4th)((right))", "body of sternum", "sternum"],
    "lumbar spine": ["lumbar vertebra", "lumbar vertebrae (l2)", "lumbar"],
    "sacrum & coccyx": ["sacrum", "coccyx"],
    "pelvis (ilium, ischium, pubis)": ["ilium", "ischium", "pubis", "hip bone", "pelvis", "panggul"],
    "tibia & fibula": ["tibia", "tibiar", "tibial", "fibula", "tulang kering"],
    "humerus": ["humerus"],
    "radius & ulna": ["radius", "radiusr", "radiusl", "ulna", "pengumpil"],
    "clavicle & scapula": ["clavicle", "clavicler", "claviclel", "scapula", "selangka"],
    "pectoralis major": ["pectoralis major", "pectoralis"],
    "biceps brachii": ["common tendon of biceps brachii", "biceps brachii", "biceps", "bicepsr", "bicipital aponeurosis", "otot biseps"],
    "deltoid muscle": ["deltoid muscle", "deltoid"],
    "rectus abdominis": ["rectus abdominis", "rectus"],
    "quadriceps femoris": ["quadriceps femoris", "rectus femoris", "vastus lateralis", "vastus medialis", "quadriceps"],
    "trapezius & latissimus": ["trapezius", "latissimus dorsi", "latissimus"],
    "stratum corneum & epidermis": ["skin_zsphere", "skin", "epidermis", "extract"],
    "dermal layer & collagen": ["dermis", "dermal", "extract"],
    "subcutaneous hypodermis & adipose tissue": ["hypodermis", "subcutaneous", "adipose", "extract"]
  };

  /** Backward-compatible ALIAS_MAPPING reference */
  const ALIAS_MAPPING = ANATOMY_ALIASES;

  /**
   * The only source of truth for course-level 3D assets. General anatomy keeps
   * the master model, while a configured course replaces it on demand.
   */
  /**
   * Centralized course → 3D model routing.
   * All URLs use ./anatomy/ so paths are self-contained within the project
   * regardless of web server root.
   *
   * ROUTING MAP:
   *   general  → z anatomy I             (master full-body model)
   *   vision   → eye anatomy             (Eye & Ocular Apparatus)
   *   skeletal → overview-skeleton       (Skeletal System ONLY)
   *   muscular → upper-limb + lower-limb (Muscular System ONLY)
   *   skin     → anatomy of the skin     (Integumentary System)
   */
  const COURSE_3D_CONFIG = {
    general: {
      key: "general",
      label: "General Anatomy",
      useGeneral: true,
      models: [
        { url: "./anatomy/z%20anatomy%20I.glb", bytes: 309166894, targetHeight: 4.4 }
      ]
    },
    vision: {
      key: "vision",
      organId: "eye",
      label: "Eye Anatomy",
      models: [
        { url: "./anatomy/eyes%20anatomy/eye%20anatomy.glb", bytes: 137148540, targetHeight: 3.6 }
      ]
    },
    skeletal: {
      key: "skeletal",
      label: "Skeletal Overview",
      models: [
        { url: "./anatomy/3D%20skeletal%20n%20otot/overview-skeleton.glb", bytes: 3422276, targetHeight: 4.4 }
      ]
    },
    muscular: {
      key: "muscular",
      organId: "muscles_group",
      label: "Muscular System: Upper & Lower Limb",
      layout: "vertical-pair",
      models: [
        { id: "upper-limb", label: "Upper Limb", url: "./anatomy/3D%20skeletal%20n%20otot/upper-limb.glb", bytes: 6911588, targetHeight: 2.2, offset: [0, 1.35, 0] },
        { id: "lower-limb", label: "Lower Limb", url: "./anatomy/3D%20skeletal%20n%20otot/lower-limb.glb", bytes: 6184984, targetHeight: 2.2, offset: [0, -1.35, 0] }
      ]
    },
    skin: {
      key: "skin",
      organId: "skin_layers",
      label: "Skin Anatomy",
      models: [
        { url: "./anatomy/skin%20anatomy/anatomy%20of%20the%20skin.glb", bytes: 16385604, targetHeight: 3.5 }
      ]
    },
    cardio: {
      key: "cardio",
      label: "Cardiovascular System",
      useGeneral: true,
      systemFilter: "cardio",
      organId: "heart"
    },
    nervous: {
      key: "nervous",
      label: "Nervous System",
      useGeneral: true,
      systemFilter: "nervous",
      organId: "brain"
    },
    resp: {
      key: "resp",
      label: "Respiratory System",
      useGeneral: true,
      systemFilter: "resp",
      organId: "lungs"
    },
    digestive: {
      key: "digestive",
      label: "Digestive System",
      useGeneral: true,
      systemFilter: "digestive",
      organId: "digestive_organs"
    },
    urinary: {
      key: "urinary",
      label: "Urinary System",
      useGeneral: true,
      systemFilter: "urinary",
      organId: "kidneys_bladder"
    }
  };

  function getCourse3DConfig(systemId) {
    const cfg = COURSE_3D_CONFIG[systemId];
    if (!cfg) {
      return { ...COURSE_3D_CONFIG.general, systemFilter: null };
    }
    if (cfg.useGeneral) {
      return {
        ...COURSE_3D_CONFIG.general,
        ...cfg,
        models: COURSE_3D_CONFIG.general.models
      };
    }
    return cfg;
  }

  /**
   * Structure Educational Content & Contextual Quizzes
   */
  const STRUCTURE_DETAILS = {
    "Cornea": {
      systemId: "vision",
      organId: "eye",
      name: { EN: "Cornea", ID: "Kornea" },
      illustration: "👁️✨",
      simple: {
        EN: {
          overview: "The cornea can be thought of as the ultra-clear front window of a camera lens. It is completely transparent so light rays can pass cleanly into the eye without distortion.",
          position: "Situated at the very front of the eyeball, shielding the iris and pupil from dust and physical impact.",
          mechanism: "Because of its curved dome shape, it performs approximately two-thirds of the eye's refractive power, bending incoming light towards the retina.",
          health: "Scratches (corneal abrasions) or infections can obscure vision. Wearing protective eye gear and avoiding rough rubbing keeps it healthy."
        },
        ID: {
          overview: "Kornea dapat dianalogikan sebagai kaca depan lensa kamera yang sangat jernih. Kornea sepenuhnya transparan agar sinar cahaya dapat masuk ke mata tanpa distorsi.",
          position: "Terletak di bagian paling depan bola mata, melindungi iris dan pupil dari debu dan benturan fisik.",
          mechanism: "Bentuk kubah melengkungnya melakukan dua pertiga daya pembiasan (refraksi) cahaya yang masuk ke retina.",
          health: "Goresan atau infeksi kornea dapat mengaburkan penglihatan. Menggunakan kacamata pelindung dan tidak mengucek mata kasar menjaga kornea tetap sehat."
        }
      },
      academic: {
        EN: {
          overview: "The cornea is an avascular, highly innervated fibrous tunic structure boasting a refractive index of ~1.376, contributing 40-44 Diopters (~65-75%) of total ocular refractive power.",
          position: "Anterior segment of the fibrous tunic, continuous posteriorly with the opaque sclera at the corneoscleral limbus.",
          mechanism: "Consists of 5 histological layers: Epithelium, Bowman's layer, Stroma (90% thickness), Descemet's membrane, and Endothelium. Endothelial Na+/K+-ATPase pumps preserve deturgescence (78% hydration) to maintain collagen lattice transparency.",
          health: "Keratoconus causes progressive stromal thinning and ectasia, resulting in irregular astigmatism. Management includes corneal cross-linking, rigid gas-permeable lenses, or penetrating keratoplasty."
        },
        ID: {
          overview: "Kornea adalah tunika fibrosa avaskular yang kaya persarafan dengan indeks bias ~1.376, menyumbang 40-44 Dioptri (~65-75%) dari total daya refraksi mata.",
          position: "Segmen anterior tunika fibrosa, berlanjut ke posterior dengan sklera opak pada limbus korneoskleral.",
          mechanism: "Tersusun atas 5 lapisan: Epitel, Lapisan Bowman, Stroma (90% ketebalan), Membran Descemet, dan Endotel. Pompa Na+/K+-ATPase endotel menjaga tingkat hidrasi 78% (deturgesensi) agar kisi kolagen tetap transparan.",
          health: "Keratokonus menyebabkan penipisan stroma dan ektasia kornea yang memicu astigmatisme ireguler. Terapi meliputi cross-linking kolagen, lensa RGP, hingga keratoplasti."
        }
      },
      quiz: {
        EN: [
          {
            question: "What proportion of the eye's total optical focusing power is provided by the cornea?",
            options: ["Approximately 10-20%", "Approximately 65-75%", "Exactly 100%", "Less than 5%"],
            answerIndex: 1,
            explanation: "The curvature and refractive index of the cornea provide about two-thirds (65-75% / ~43 Diopters) of total optical power."
          },
          {
            question: "Why is the corneal stroma completely transparent in a healthy eye?",
            options: [
              "Because it is filled with dense blood vessels",
              "Due to strict spatial alignment of uniform collagen fibrils and active deturgescence",
              "Because light bypasses the stroma completely",
              "It contains dark melanin pigments"
            ],
            answerIndex: 1,
            explanation: "Uniform collagen fibril spacing with destructive interference of scattered light keeps the stroma crystal clear."
          },
          {
            question: "Which endothelial mechanism actively maintains corneal deturgescence (clarity)?",
            options: ["Na+/K+-ATPase metabolic pump", "Passive osmotic diffusion only", "Calcium channel precipitation", "Hemoglobin oxygen binding"],
            answerIndex: 0,
            explanation: "The corneal endothelial Na+/K+-ATPase pump pumps excess fluid out of the stroma back into the anterior chamber."
          }
        ],
        ID: [
          {
            question: "Berapa proporsi daya pembiasan cahaya total mata yang disumbangkan oleh kornea?",
            options: ["Sekitar 10-20%", "Sekitar 65-75%", "Tepat 100%", "Kurang dari 5%"],
            answerIndex: 1,
            explanation: "Kelengkungan kornea menyumbangkan sekitar dua pertiga (65-75% atau ~43 Dioptri) dari total daya refraksi mata."
          },
          {
            question: "Mengapa stroma kornea tampak transparan jernih pada mata yang sehat?",
            options: [
              "Karena dipenuhi oleh pembuluh darah",
              "Karena susunan matriks serat kolagen yang teratur dan regulasi cairan ketat (deturgesensi)",
              "Karena cahaya tidak melewatinya",
              "Karena mengandung pigmen melanin gelap"
            ],
            answerIndex: 1,
            explanation: "Penyusunan serat kolagen berjarak seragam dengan pompa endotel menjaga transparansi kornea."
          },
          {
            question: "Mekanisme endotel mana yang mempertahankan kejernihan dan deturgesensi kornea?",
            options: ["Pompa metabolik Na+/K+-ATPase", "Difusi pasif osmosis saja", "Pengendapan saluran Kalsium", "Pengikatan hemoglobin"],
            answerIndex: 0,
            explanation: "Pompa Na+/K+-ATPase endotel secara aktif memompa kelebihan cairan keluar dari stroma kembali ke bilik mata depan."
          }
        ]
      }
    },

    "Iris": {
      systemId: "vision",
      organId: "eye",
      name: { EN: "Iris", ID: "Iris" },
      illustration: "🧿🌈",
      simple: {
        EN: {
          overview: "The iris is the colored circular curtain of the eye. It functions just like an adjustable camera diaphragm or aperture, controlling how much light enters.",
          position: "Suspended between the cornea in front and the crystalline lens behind, surrounding the central pupil opening.",
          mechanism: "Tiny smooth muscles contract in bright light to narrow the pupil (protecting the eye) and dilate in dim light (letting in maximum light).",
          health: "Eye color is determined by melanin concentration. Conditions like uveitis or iritis cause redness, pain, and light sensitivity."
        },
        ID: {
          overview: "Iris adalah tirai melingkar berwarna pada mata. Iris bekerja seperti diafragma kamera yang dapat disesuaikan, mengatur banyaknya cahaya yang masuk.",
          position: "Terletak di antara kornea di depan dan lensa kristalina di belakang, mengelilingi lubang pupil.",
          mechanism: "Otot polos kecil berkontraksi saat terang untuk mengecilkan pupil dan berelaksasi saat gelap untuk melebarkannya.",
          health: "Warna iris ditentukan konsentrasi melanin. Peradangan seperti iritis/uveitis menyebabkan mata merah, nyeri, dan silau."
        }
      },
      academic: {
        EN: {
          overview: "The iris is the most anterior component of the uveal tract (vascular tunic), acting as an adjustable optical aperture regulating retinal illuminance.",
          position: "Divides the anterior chamber from the posterior chamber of the eye, attached peripherally to the ciliary body at the iris root.",
          mechanism: "Innervated by the autonomic nervous system: Parasympathetic fibers (CN III via short ciliary nerves) constrict the circular sphincter pupillae (miosis); sympathetic fibers stimulate the radial dilator pupillae (mydriasis).",
          health: "Anterior uveitis (iritis) presents with ciliary flush, keratic precipitates, and hypopyon. Anisocoria (unequal pupil size) can indicate Horner's syndrome or oculomotor nerve compression."
        },
        ID: {
          overview: "Iris adalah komponen paling anterior dari traktus uvea (tunika vaskular), bertindak sebagai celah optik pengatur iluminasi retina.",
          position: "Memisahkan bilik mata depan (anterior) dan belakang (posterior), melekat di perifer pada badan siliar di akar iris.",
          mechanism: "Dipersarafi sistem saraf otonom: Serat parasimpatis (N. III via nervus siliaris brevis) mengontraksi sfingter pupila (miosis); serat simpatis merangsang dilator pupila radialis (midriasis).",
          health: "Uveitis anterior (iritis) ditandai dengan ciliary flush, presipitat keratik, dan hipopion. Anisokoria (ukuran pupil berbeda) dapat mengindikasikan sindrom Horner."
        }
      },
      quiz: {
        EN: [
          {
            question: "Which muscle in the iris is responsible for pupil constriction (miosis) under bright light?",
            options: ["Dilator pupillae", "Sphincter pupillae", "Ciliary muscle", "Superior oblique"],
            answerIndex: 1,
            explanation: "The circular sphincter pupillae muscle, controlled by parasympathetic nerves, constricts the pupil in bright conditions."
          },
          {
            question: "Which pigment primarily determines individual variation in human eye color within the iris stroma?",
            options: ["Melanin", "Hemoglobin", "Carotene", "Rhodopsin"],
            answerIndex: 0,
            explanation: "The concentration and distribution of melanin in the anterior border layer and stroma dictate eye color."
          },
          {
            question: "What autonomic division triggers pupillary dilation (mydriasis) during low-light or 'fight-or-flight' states?",
            options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Enteric nervous system", "Somatic motor system"],
            answerIndex: 0,
            explanation: "Sympathetic stimulation activates the radial dilator pupillae muscle fibers to dilate the pupil."
          }
        ],
        ID: [
          {
            question: "Otot iris mana yang bertanggung jawab mengecilkan pupil (miosis) di bawah cahaya terang?",
            options: ["Dilator pupila", "Sfingter pupila", "Otot siliaris", "Obliquus superior"],
            answerIndex: 1,
            explanation: "Otot sfingter pupila melingkar yang dipersarafi parasimpatis bertugas mengecilkan pupil saat terang."
          },
          {
            question: "Pigmen apa yang menentukan variasi warna mata manusia pada stroma iris?",
            options: ["Melanin", "Hemoglobin", "Karoten", "Rodopsin"],
            answerIndex: 0,
            explanation: "Konsentrasi dan kepadatan pigmen melanin di lapisan perbatasan anterior menentukan warna mata."
          },
          {
            question: "Divisi saraf otonom mana yang merangsang pelebaran pupil (midriasis) saat gelap atau kondisi waspada?",
            options: ["Sistem saraf simpatis", "Sistem saraf parasimpatis", "Sistem saraf enterik", "Sistem saraf somatik"],
            answerIndex: 0,
            explanation: "Rangsangan simpatis mengaktifkan serat otot dilator pupila untuk memperluas diameter pupil."
          }
        ]
      }
    },

    "Lens": {
      systemId: "vision",
      organId: "eye",
      name: { EN: "Crystalline Lens", ID: "Lensa Kristalina" },
      illustration: "🔍✨",
      simple: {
        EN: {
          overview: "The crystalline lens is the eye's autofocus lens. It changes its thickness dynamically to bring near objects (like reading a book) and distant vistas into sharp focus.",
          position: "Suspended right behind the iris and pupil by tiny elastic zonule fibers.",
          mechanism: "When focusing up close, surrounding ciliary muscles squeeze, causing the flexible lens to bulge fatter; when looking far away, it flattens out.",
          health: "As we age, the lens loses flexibility (presbyopia reading strain) or becomes cloudy due to clumped proteins (cataracts), which can be replaced with an intraocular lens."
        },
        ID: {
          overview: "Lensa kristalina adalah lensa autofokus mata. Lensa ini mengubah ketebalannya secara dinamis untuk memfokuskan objek dekat (membaca) maupun pemandangan jauh.",
          position: "Tergantung tepat di belakang iris dan pupil oleh serat-serat halus zonula Zinn.",
          mechanism: "Saat melihat dekat, otot siliaris berkontraksi sehingga lensa mencembung; saat melihat jauh, lensa memipih.",
          health: "Seiring usia, kelenturan lensa berkurang (presbiopia) atau menjadi keruh akibat penggumpalan protein (katarak)."
        }
      },
      academic: {
        EN: {
          overview: "The crystalline lens is a biconvex, transparent, avascular structure with high protein concentration (crystallins ~35%), providing ~15-20 Diopters of variable refractive power.",
          position: "Situated in the hyaloid fossa behind the iris, anchored to the ciliary body by the suspensory zonules of Zinn.",
          mechanism: "Accommodation (Helmholtz theory): Ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to increase anterior-posterior curvature for near vision convergence.",
          health: "Cataractogenesis involves photo-oxidative stress and crystallin aggregation. Surgical phacoemulsification with artificial intraocular lens (IOL) implantation restores visual clarity."
        },
        ID: {
          overview: "Lensa kristalina adalah struktur bikonveks, transparan, dan avaskular dengan konsentrasi protein kristalin tinggi (~35%), memberikan 15-20 Dioptri daya refraksi dinamis.",
          position: "Terletak di fosa hialoid di belakang iris, terhubung ke badan siliar melalui zonula Zinn.",
          mechanism: "Akomodasi (Teori Helmholtz): Kontraksi otot siliar mengendurkan tarikan zonula, memungkinkan kapsul lensa mencembung untuk penglihatan dekat.",
          health: "Kataraktogenesis dipicu stres foto-oksidatif dan agregasi protein kristalin. Fakoemulsifikasi bedah dengan implan lensa intraokular (IOL) memulihkan penglihatan."
        }
      },
      quiz: {
        EN: [
          {
            question: "According to the Helmholtz mechanism of accommodation, what happens to the ciliary muscle when focusing on nearby text?",
            options: [
              "The ciliary muscle contracts, relaxing zonular tension so the lens becomes more spherical",
              "The ciliary muscle relaxes, pulling zonules tight to flatten the lens",
              "The ciliary muscle detaches completely from the sclera",
              "The lens crystallin proteins dissolve instantly"
            ],
            answerIndex: 0,
            explanation: "Contraction of the ciliary muscle ring decreases diameter, releasing tension on zonules and allowing the elastic lens to round up."
          },
          {
            question: "What predominant structural proteins maintain lens transparency and refractive index?",
            options: ["Crystallins (alpha, beta, gamma)", "Collagen type II", "Myoglobin", "Keratin"],
            answerIndex: 0,
            explanation: "Crystallin proteins comprise over 90% of soluble lens proteins, ordered to minimize light scattering."
          },
          {
            question: "What common progressive age-related condition causes opacification and cloudiness of the crystalline lens?",
            options: ["Cataract", "Glaucoma", "Macular Degeneration", "Keratoconus"],
            answerIndex: 0,
            explanation: "Cataracts represent age-related denaturation and aggregation of lens crystallin proteins leading to opacification."
          }
        ],
        ID: [
          {
            question: "Menurut mekanisme akomodasi Helmholtz, apa yang terjadi pada otot siliaris saat mata memfokuskan bacaan dekat?",
            options: [
              "Otot siliaris berkontraksi, mengendurkan tegangan zonula sehingga lensa mencembung bulat",
              "Otot siliaris relaksasi penuh sehingga lensa ditarik mendatar",
              "Otot siliaris terlepas dari dinding sklera",
              "Protein kristalin lensa larut seketika"
            ],
            answerIndex: 0,
            explanation: "Kontraksi cincin otot siliaris mengurangi diameter dan mengendurkan tarikan zonula sehingga kapsul lensa mencembung."
          },
          {
            question: "Protein struktural utama apa yang menjaga kejernihan dan indeks bias lensa kristalina?",
            options: ["Kristalin (alfa, beta, gama)", "Kolagen tipe II", "Mioglobin", "Keratin"],
            answerIndex: 0,
            explanation: "Protein kristalin membentuk lebih dari 90% protein terlarut lensa yang tersusun padat tanpa menghamburkan cahaya."
          },
          {
            question: "Kondisi penurunan kejernihan akibat penggumpalan protein lensa seiring penuaan disebut?",
            options: ["Katarak", "Glaukoma", "Degenerasi Makula", "Keratokonus"],
            answerIndex: 0,
            explanation: "Katarak adalah kekeruhan pada lensa mata akibat denaturasi dan agregasi protein kristalin."
          }
        ]
      }
    },

    "Retina": {
      systemId: "vision",
      organId: "eye",
      name: { EN: "Retina", ID: "Retina" },
      illustration: "🖼️⚡",
      simple: {
        EN: {
          overview: "The retina functions like the digital image sensor inside a smartphone camera. It catches focused light patterns and instantly converts them into electrical neural signals.",
          position: "Lines the entire back inner wall of the eyeball, receiving light through the clear vitreous chamber.",
          mechanism: "Contains millions of photoreceptor cells: Rods (night and peripheral vision) and Cones (daylight, high-detail color vision) pass signals to the optic nerve.",
          health: "High blood pressure and uncontrolled diabetes can damage retinal micro-vessels. Sudden flashes or dark curtains may warn of retinal tears."
        },
        ID: {
          overview: "Retina berfungsi seperti sensor gambar digital pada kamera smartphone. Retina menangkap pola cahaya terfokus dan mengubahnya menjadi impuls listrik.",
          position: "Melapisi seluruh dinding dalam bagian belakang bola mata, menerima berkas cahaya.",
          mechanism: "Mengandung jutaan fotoreseptor: Sel Batang (cahaya redup & tepi) dan Sel Kerucut (warna & ketajaman siang hari) yang meneruskan sinyal ke saraf optik.",
          health: "Hipertensi dan diabetes dapat merusak mikrovaskular retina. Kilatan cahaya atau tirai gelap mendadak menandakan risiko robekan retina."
        }
      },
      academic: {
        EN: {
          overview: "The neural retina is a 10-layer neurosensory tissue derived from the neuroectodermal optic cup, transducing photons into graded electrical potentials.",
          position: "Innermost sensory tunic, bordered externally by the Retinal Pigment Epithelium (RPE) and Bruch's membrane of the choroid.",
          mechanism: "Phototransduction: Photons isomerize 11-cis-retinal to all-trans-retinal within rhodopsin/photopsin, activating transducin and cGMP PDE, closing cyclic nucleotide-gated channels to hyperpolarize photoreceptors.",
          health: "Rhegmatogenous retinal detachment occurs when subretinal fluid separates the neurosensory layers from the RPE, requiring urgent vitrectomy or pneumatic retinopexy."
        },
        ID: {
          overview: "Retina neural adalah jaringan neurosensorik 10 lapisan turunan cawan optik neuroektodermal yang mentransduksi foton menjadi potensial aksi bertingkat.",
          position: "Tunika sensorik paling dalam, berbatasan di bagian luar dengan Epitel Pigmen Retina (RPE) dan membran Bruch koroid.",
          mechanism: "Fototransduksi: Foton mengisomerisasi 11-cis-retinal menjadi all-trans-retinal pada rodopsin, mengaktifkan transdusin & PDE cGMP, menutup saluran Na+ sehingga sel mengalami hiperpolarisasi.",
          health: "Ablasio retina terjadi saat cairan subretinal memisahkan lapisan neurosensorik dari RPE, memerlukan tindakan vitrektomi darurat."
        }
      },
      quiz: {
        EN: [
          {
            question: "Which retinal photoreceptors provide sharp visual acuity and color vision in photopic (bright light) conditions?",
            options: ["Cone cells", "Rod cells", "Horizontal cells", "Mueller glia"],
            answerIndex: 0,
            explanation: "Cones are concentrated in the fovea centralis and express photopsin pigments for color discrimination."
          },
          {
            question: "During phototransduction, what electrical response occurs across the photoreceptor membrane upon photon capture?",
            options: ["Hyperpolarization", "Rapid depolarization", "Action potential burst", "Voltage collapse to 0 mV"],
            answerIndex: 0,
            explanation: "Photon absorption activates phosphodiesterase (PDE), lowering cGMP, closing sodium channels and hyperpolarizing the cell."
          },
          {
            question: "What emergency condition involves separation of the neurosensory retina from the underlying pigment epithelium (RPE)?",
            options: ["Retinal Detachment", "Presbyopia", "Astigmatism", "Blepharitis"],
            answerIndex: 0,
            explanation: "Retinal detachment strips the photoreceptors of choroidal metabolic support, risking rapid irreversible vision loss."
          }
        ],
        ID: [
          {
            question: "Fotoreseptor retina manakah yang memberikan ketajaman penglihatan tinggi dan persepsi warna pada kondisi terang?",
            options: ["Sel Kerucut (Cones)", "Sel Batang (Rods)", "Sel Horizontal", "Glia Mueller"],
            answerIndex: 0,
            explanation: "Sel kerucut terkonsentrasi di fovea centralis dan memiliki fotopsin untuk membedakan warna."
          },
          {
            question: "Saat penyerapan foton cahaya pada fototransduksi, respons listrik apa yang terjadi pada membran fotoreseptor?",
            options: ["Hiperpolarisasi", "Depolarisasi cepat", "Potensial aksi meletup", "Tegangan anjlok ke 0 mV"],
            answerIndex: 0,
            explanation: "Foton mengaktifkan PDE, menurunkan cGMP sehingga kanal ion Na+ menutup dan membran mengalami hiperpolarisasi."
          },
          {
            question: "Kondisi darurat medis apa yang terjadi saat lapisan neurosensorik retina terlepas dari lapisan epitel pigmen (RPE)?",
            options: ["Ablasio Retina", "Presbiopia", "Astigmatisme", "Blefaritis"],
            answerIndex: 0,
            explanation: "Ablasio retina memutus suplai nutrisi pembuluh koroid ke fotoreseptor, membutuhkan tindakan medis segera."
          }
        ]
      }
    },

    "Sclera": {
      systemId: "vision",
      organId: "eye",
      name: { EN: "Sclera", ID: "Sklera" },
      illustration: "🛡️⚪",
      simple: {
        EN: {
          overview: "The sclera is the tough, opaque 'white of the eye'. It acts as a protective shield and rigid shell that keeps the eyeball in its round spherical shape.",
          position: "Covers the posterior 5/6ths of the eyeball, merging smoothly into the transparent cornea at the front.",
          mechanism: "Provides anchoring attachment points for the 6 extraocular muscles that allow your eyes to swivel up, down, left, and right.",
          health: "Yellowing of the sclera (scleral icterus) is an early physical indicator of liver dysfunction or elevated bilirubin."
        },
        ID: {
          overview: "Sklera adalah bagian 'putih mata' yang kuat dan tidak tembus cahaya. Sklera bertindak sebagai pelindung kokoh yang menjaga bentuk bulat bola mata.",
          position: "Menyelimuti 5/6 bagian belakang bola mata, bersambung dengan kornea transparan di bagian depan.",
          mechanism: "Menyediakan titik perlekatan bagi 6 otot ekstraokular penggerak bola mata ke berbagai arah.",
          health: "Warna sklera yang menguning (ikterus sklera) menjadi tanda klinis awal gangguan fungsi hati atau tingginya kadar bilirubin."
        }
      },
      academic: {
        EN: {
          overview: "The sclera is the opaque, dense fibrous outer tunic of the globe composed primarily of interwoven Type I and Type III collagen fibrils and proteoglycans.",
          position: "Extends from the corneoscleral limbus anteriorly to the dural sheath of the optic nerve posteriorly (lamina cribrosa).",
          mechanism: "Maintains intraocular pressure (IOP) rigidity, protects intraocular contents from mechanical trauma, and receives insertions of all rectus and oblique extraocular tendons.",
          health: "Scleritis is a severe inflammatory disease frequently associated with systemic autoimmune disorders (e.g., Rheumatoid Arthritis, Granulomatosis with Polyangiitis)."
        },
        ID: {
          overview: "Sklera adalah tunika fibrosa luar bola mata yang padat dan opak, tersusun atas jalinan serat kolagen Tipe I & III serta proteoglikan.",
          position: "Membentang dari limbus korneoskleral di anterior hingga selubung dura saraf optik di posterior (lamina kribrosa).",
          mechanism: "Mempertahankan integritas tekanan intraokular (TIO), menahan trauma mekanik, dan menjadi insersio tendon 6 otot ekstraokular.",
          health: "Skleritis adalah peradangan destruktif yang sering berkaitan dengan penyakit autoimun sistemik seperti Artritis Reumatoid."
        }
      },
      quiz: {
        EN: [
          {
            question: "What crucial anatomical structures insert directly onto the outer surface of the sclera to coordinate eye movement?",
            options: ["The 6 Extraocular Muscles", "The Ciliary Zonules", "The Retinal Photoreceptors", "The Bowman's Membrane"],
            answerIndex: 0,
            explanation: "The four rectus and two oblique extraocular muscles insert their tendons into the dense collagen matrix of the sclera."
          },
          {
            question: "What perforated sieve-like region of the posterior sclera allows unmyelinated optic nerve axons to exit the globe?",
            options: ["Lamina Cribrosa", "Corneoscleral Limbus", "Canal of Schlemm", "Trabecular Meshwork"],
            answerIndex: 0,
            explanation: "The lamina cribrosa is the fenestrated collagen network through which retinal ganglion cell axons pass to form the optic nerve."
          },
          {
            question: "A yellowish discoloration of the sclera (scleral icterus) is most commonly indicative of which systemic issue?",
            options: ["Elevated serum bilirubin (Jaundice / Hepatic dysfunction)", "Vitamin C deficiency", "Acute corneal abrasion", "Hypertension"],
            answerIndex: 0,
            explanation: "Bilirubin has high affinity for elastin in the sclera, causing yellow discoloration during jaundice."
          }
        ],
        ID: [
          {
            question: "Struktur anatomi penting apa yang melekat langsung pada permukaan luar sklera untuk menggerakkan bola mata?",
            options: ["6 Otot Ekstraokular", "Zonula Zinn Lensa", "Fotoreseptor Retina", "Membran Bowman"],
            answerIndex: 0,
            explanation: "Empat otot rektus dan dua otot obliquus menancapkan tendonnya pada matriks kolagen kuat sklera."
          },
          {
            question: "Struktur anyaman berlubang pada sklera posterior tempat keluarnya berkas akson saraf optik disebut?",
            options: ["Lamina Kribrosa", "Limbus Korneoskleral", "Kanal Schlemm", "Trabecular Meshwork"],
            answerIndex: 0,
            explanation: "Lamina kribrosa adalah lempeng berpori pada sklera posterior jalur keluarnya akson sel ganglion retina."
          },
          {
            question: "Perubahan warna sklera menjadi kekuningan (ikterus sklera) paling sering menandakan kondisi apa?",
            options: ["Peningkatan kadar bilirubin serum (Penyakit kuning/gangguan hati)", "Kekurangan vitamin C", "Goresan kornea akut", "Hipertensi"],
            answerIndex: 0,
            explanation: "Bilirubin berikatan kuat dengan jaringan elastin sklera saat terjadi ikterus (gangguan empedu/hati)."
          }
        ]
      }
    },

    "Optic Nerve": {
      systemId: "vision",
      organId: "eye",
      name: { EN: "Optic Nerve (CN II)", ID: "Saraf Optik (N. II)" },
      illustration: "🔌🧠",
      simple: {
        EN: {
          overview: "The optic nerve is the high-speed fiber-optic data cable connecting your eye to your brain. It transmits all live visual telemetry gathered by the retina.",
          position: "Exits through the rear pole of each eyeball and travels into the cranial cavity towards the optic chiasm.",
          mechanism: "Bundles over 1.2 million individual nerve fibers together. The spot where it exits the retina creates your natural optical 'blind spot'.",
          health: "Glaucoma is characterized by progressive pressure-induced optic nerve fiber damage, silently narrowing peripheral vision."
        },
        ID: {
          overview: "Saraf optik adalah kabel data serat optik berkecepatan tinggi yang menghubungkan mata ke otak. Saraf ini mengirimkan seluruh sinyal visual dari retina.",
          position: "Keluar dari kutub belakang bola mata dan berjalan menuju rongga kranial ke kiasma optik.",
          mechanism: "Menggabungkan lebih dari 1,2 juta serat saraf individual. Titik keluarnya dari retina menciptakan 'bintik buta' alami.",
          health: "Glaukoma ditandai oleh kerusakan serabut saraf optik akibat tekanan bola mata tinggi yang menyempitkan lapang pandang."
        }
      },
      academic: {
        EN: {
          overview: "The optic nerve (Cranial Nerve II) is an extension of the central nervous system (CNS) derived from the diencephalon, enveloped by all three meningeal sheaths (dura, arachnoid, pia).",
          position: "Divided into 4 segments: Intraocular (optic disc ~1 mm), Intraorbital (~25-30 mm), Intracanalicular (~6 mm), and Intracranial (~10-15 mm).",
          mechanism: "Composed of ~1.2 million myelinated axons of Retinal Ganglion Cells (RGCs) that decussate partially at the optic chiasm before synapsing at the Lateral Geniculate Nucleus (LGN) and superior colliculus.",
          health: "Papilledema (optic disc edema secondary to elevated intracranial pressure) and optic neuritis (demyelination in Multiple Sclerosis) cause profound visual field loss."
        },
        ID: {
          overview: "Saraf optik (Nervus Kranialis II) adalah perpanjangan sistem saraf pusat (SSP) turunan diensefalon yang dibungkus oleh ketiga lapisan meningen (dura, araknoid, pia).",
          position: "Terbagi dalam 4 segmen: Intraokular (~1 mm), Intraorbital (~25-30 mm), Intrakanalikular (~6 mm), dan Intrakranial (~10-15 mm).",
          mechanism: "Tersusun atas ~1,2 juta akson bermielin Sel Ganglion Retina (RGC) yang bersilangan parsial di kiasma optik sebelum bersinaps di Korpus Genikulatum Lateral (LGN).",
          health: "Papiledema (pembengkakan diskus optikus akibat tekanan intrakranial tinggi) dan neuritis optik (demielinisasi pada Multiple Sclerosis) memicu penurunan visus."
        }
      },
      quiz: {
        EN: [
          {
            question: "Why is the optic nerve (CN II) developmentally considered a tract of the Central Nervous System (CNS) rather than a true peripheral nerve?",
            options: [
              "It is an outpouching of the diencephalon and is sheathed in meninges and oligodendrocytes",
              "It contains no axons",
              "It only carries voluntary motor commands",
              "It originates in the spinal cord"
            ],
            answerIndex: 0,
            explanation: "The optic nerve arises from the embryonic forebrain, is myelinated by oligodendrocytes, and is surrounded by dura, arachnoid, and pia mater."
          },
          {
            question: "Where do nasal retinal fibers of both optic nerves cross over to the contralateral hemisphere?",
            options: ["Optic Chiasm", "Superior Colliculus", "Cornea", "Ciliary Ganglion"],
            answerIndex: 0,
            explanation: "At the optic chiasm, fibers from the nasal hemiretinas decussate, enabling binocular depth perception."
          },
          {
            question: "What primary vision-threatening disease is caused by progressive axonal loss of optic nerve fibers often linked to elevated intraocular pressure?",
            options: ["Glaucoma", "Myopia", "Strabismus", "Chalazion"],
            answerIndex: 0,
            explanation: "Glaucoma is an optic neuropathy leading to characteristic visual field loss and optic disc cupping."
          }
        ],
        ID: [
          {
            question: "Mengapa saraf optik (N. II) secara embriologis diklasifikasikan sebagai bagian Sistem Saraf Pusat (SSP)?",
            options: [
              "Merupakan tonjolan diensefalon dan dibungkus selubung meningen serta mielin oligodendrosit",
              "Tidak memiliki akson saraf",
              "Hanya menghantarkan sinyal motorik sadar",
              "Berasal dari sumsum tulang belakang"
            ],
            answerIndex: 0,
            explanation: "Saraf optik berkembang dari otak depan embrio, bermielin oligodendrosit, dan dibungkus meningen."
          },
          {
            question: "Di manakah serabut saraf retina nasal bersilangan ke belahan otak yang berlawanan?",
            options: ["Kiasma Optik", "Kolikulus Superior", "Kornea", "Ganglion Siliaris"],
            answerIndex: 0,
            explanation: "Pada kiasma optik, serabut dari hemiretina nasal bersilangan untuk memungkinkan penglihatan binokular 3D."
          },
          {
            question: "Penyakit neuropati optik progresif yang sering berhubungan dengan tekanan intraokular tinggi disebut?",
            options: ["Glaukoma", "Miopia", "Strabismus", "Kalazion"],
            answerIndex: 0,
            explanation: "Glaukoma merusak akson saraf optik secara bertahap dan menyempitkan lapang pandang penderitanya."
          }
        ]
      }
    },

    "Left Ventricle": {
      systemId: "cardio",
      organId: "heart",
      name: { EN: "Left Ventricle", ID: "Ventrikel Kiri" },
      illustration: "🫀💪",
      simple: {
        EN: {
          overview: "The left ventricle is the powerhouse pump of the entire circulatory system. Its muscular walls are thick and powerful to squeeze oxygen-rich blood into the aorta and all the way to your toes.",
          position: "Forms the left lower chamber and apex of the heart.",
          mechanism: "During each heartbeat (systole), it contracts forcefully, ejecting ~70 mL of freshly oxygenated blood into systemic arterial circulation.",
          health: "Aerobic exercise strengthens cardiac muscle, while managing blood pressure prevents pathological wall thickening (hypertrophy)."
        },
        ID: {
          overview: "Ventrikel kiri adalah ruang pemompa utama sistem peredaran darah. Dinding ototnya tebal dan kuat untuk memompa darah kaya oksigen ke aorta hingga ujung kaki.",
          position: "Membentuk ruang bawah kiri dan apeks (puncak) jantung.",
          mechanism: "Pada setiap detakan (sistole), ruang ini berkontraksi kuat menyemprotkan ~70 mL darah beroksigen ke sirkulasi sistemik tubuh.",
          health: "Olahraga aerobik memperkuat otot jantung, dan mengendalikan tekanan darah mencegah penebalan patologis (hipertrofi)."
        }
      },
      academic: {
        EN: {
          overview: "The left ventricle is the thickest-walled myocardial chamber, generating systolic pressures of ~120 mmHg to overcome high Systemic Vascular Resistance (SVR).",
          position: "Located inferolaterally, separated from the right ventricle by the thick muscular interventricular septum.",
          mechanism: "Isovolumetric contraction elevates pressure above left atrial pressure (closing the mitral valve); once pressure exceeds aortic diastolic pressure (~80 mmHg), the aortic semilunar valve opens for ejection phase.",
          health: "Chronic pressure overload (hypertension, aortic stenosis) induces concentric Left Ventricular Hypertrophy (LVH), escalating myocardial oxygen demand and heart failure risks."
        },
        ID: {
          overview: "Ventrikel kiri adalah ruang miokardium berdinding paling tebal, menghasilkan tekanan sistolik ~120 mmHg untuk mengatasi Resistensi Vaskular Sistemik (SVR).",
          position: "Terletak di inferolateral, dipisahkan dari ventrikel kanan oleh septum interventrikular yang berotot tebal.",
          mechanism: "Kontraksi isovolumetrik meningkatkan tekanan menutup katup mitral; ketika tekanan melampaui tekanan aorta (~80 mmHg), katup aorta membuka untuk fase ejeksi.",
          health: "Beban tekanan kronis (hipertensi) memicu Hipertrofi Ventrikel Kiri (LVH), meningkatkan kebutuhan oksigen miokardium dan risiko gagal jantung."
        }
      },
      quiz: {
        EN: [
          {
            question: "Why is the left ventricular myocardial wall three times thicker than that of the right ventricle?",
            options: [
              "It must pump against the high resistance of the entire systemic circulation rather than the low-pressure pulmonary circuit",
              "It holds twice the volume of blood",
              "It has no coronary blood supply",
              "It is made of cartilage"
            ],
            answerIndex: 0,
            explanation: "The left ventricle generates ~120 mmHg systolic pressure to supply the entire body, compared to ~25 mmHg for the right ventricle."
          },
          {
            question: "What is the typical resting stroke volume ejected by the adult left ventricle per heartbeat?",
            options: ["Approximately 70 mL", "5 mL", "500 mL", "2 Liters"],
            answerIndex: 0,
            explanation: "The normal resting stroke volume (End-Diastolic Volume minus End-Systolic Volume) is approximately 70 mL."
          },
          {
            question: "Which heart valve prevents backflow of oxygenated blood from the aorta into the left ventricle during diastole?",
            options: ["Aortic Valve", "Tricuspid Valve", "Mitral Valve", "Pulmonary Valve"],
            answerIndex: 0,
            explanation: "The aortic semilunar valve snaps shut at the beginning of ventricular diastole when aortic pressure exceeds ventricular pressure."
          }
        ],
        ID: [
          {
            question: "Mengapa dinding miokardium ventrikel kiri tiga kali lebih tebal daripada ventrikel kanan?",
            options: [
              "Harus memompa melawan resistensi tinggi seluruh sirkulasi sistemik tubuh dibandingkan sirkulasi paru yang bertekanan rendah",
              "Menampung volume darah dua kali lebih banyak",
              "Tidak memiliki suplai pembuluh darah koroner",
              "Tersusun dari tulang rawan"
            ],
            answerIndex: 0,
            explanation: "Ventrikel kiri menghasilkan tekanan sistolik ~120 mmHg untuk menyuplai seluruh tubuh, sedangkan ventrikel kanan hanya ~25 mmHg."
          },
          {
            question: "Berapa volume sekuncup (stroke volume) istirahat rata-rata yang dikeluarkan ventrikel kiri per detakan?",
            options: ["Sekitar 70 mL", "5 mL", "500 mL", "2 Liter"],
            answerIndex: 0,
            explanation: "Volume darah yang dipompa ventrikel kiri sehat saat istirahat adalah sekitar 70 mL per denyut."
          },
          {
            question: "Katup jantung mana yang mencegah aliran balik darah dari aorta ke ventrikel kiri saat fase diastole?",
            options: ["Katup Aorta", "Katup Trikuspid", "Katup Mitral", "Katup Pulmonal"],
            answerIndex: 0,
            explanation: "Katup semilunaris aorta menutup rapat saat diastole ketika tekanan aorta lebih tinggi daripada tekanan bilik kiri."
          }
        ]
      }
    },

    "Cerebrum": {
      systemId: "nervous",
      organId: "brain",
      name: { EN: "Cerebrum", ID: "Serebrum (Otak Besar)" },
      illustration: "🧠⚡",
      simple: {
        EN: {
          overview: "The cerebrum is the command center of human consciousness. It processes everything you see, hear, remember, think, feel, and choose to do.",
          position: "Fills the entire upper dome of your cranium, divided into left and right hemispheres.",
          mechanism: "Billions of interconnected neurons exchange electrical and chemical neurotransmitter signals to run your body and mind.",
          health: "Continuous lifelong learning, restful sleep, balanced nutrition, and protective headgear keep cerebral networks agile and resilient."
        },
        ID: {
          overview: "Serebrum adalah pusat komando kesadaran manusia. Serebrum memproses semua yang Anda lihat, dengar, ingat, pikirkan, rasakan, dan lakukan.",
          position: "Mengisi seluruh kubah atas rongga tengkorak, terbagi menjadi belahan kiri dan kanan.",
          mechanism: "Miliaran neuron yang saling terhubung bertukar sinyal listrik dan neurotransmiter kimiawi.",
          health: "Belajar hal baru, tidur cukup, nutrisi seimbang, dan helm pelindung menjaga kesehatan jaringan saraf otak."
        }
      },
      academic: {
        EN: {
          overview: "The cerebrum comprises the outer cerebral cortex (6-layered neocortical gray matter), underlying subcortical white matter tracts, and basal ganglia.",
          position: "Occupies the anterior and middle cranial fossae, superior to the tentorium cerebelli, joined by the corpus callosum.",
          mechanism: "Organized into four functional lobes (Frontal: executive/motor, Parietal: somatosensory, Temporal: auditory/memory, Occipital: vision). Synaptic plasticity via Long-Term Potentiation (LTP) underpins cognitive consolidation.",
          health: "Middle cerebral artery (MCA) ischemic stroke precipitates contralateral hemiplegia and expressive or receptive aphasia depending on hemisphere dominance."
        },
        ID: {
          overview: "Serebrum terdiri dari korteks serebral (substansia grises 6 lapis neokorteks), traktus substansia alba subkortikal, dan ganglia basalis.",
          position: "Mengisi fosa kranialis anterior dan media di atas tentorium serebeli, dihubungkan oleh korpus kalosum.",
          mechanism: "Terbagi dalam 4 lobus utama (Frontal: motorik/eksekutif, Parietal: somatosensorik, Temporal: memori/auditori, Oksipital: visual). Plastisitas sinaps via Long-Term Potentiation (LTP) menjadi dasar memori.",
          health: "Stroke iskemia arteri serebri media (MCA) mengakibatkan hemiplegia kontralateral dan afasia motorik/sensorik."
        }
      },
      quiz: {
        EN: [
          {
            question: "Which massive bundle of commissural white matter fibers connects the left and right cerebral hemispheres?",
            options: ["Corpus Callosum", "Optic Chiasm", "Internal Capsule", "Fornix"],
            answerIndex: 0,
            explanation: "The corpus callosum contains over 200 million axonal fibers facilitating interhemispheric communication."
          },
          {
            question: "Which cerebral lobe is home to the primary visual cortex (Brodmann area 17 / V1)?",
            options: ["Occipital Lobe", "Frontal Lobe", "Temporal Lobe", "Parietal Lobe"],
            answerIndex: 0,
            explanation: "The occipital lobe at the posterior pole of the cerebrum processes raw retinotopic visual telemetry."
          },
          {
            question: "What neurobiological process strengthens synaptic connections in the cerebral cortex following repetitive stimulation?",
            options: ["Long-Term Potentiation (LTP)", "Apoptosis", "Phagocytosis", "Demyelination"],
            answerIndex: 0,
            explanation: "Long-Term Potentiation (LTP) is the primary cellular mechanism underlying learning and memory formation."
          }
        ],
        ID: [
          {
            question: "Berkas serat substansia alba tebal apa yang menghubungkan belahan otak besar (serebrum) kiri dan kanan?",
            options: ["Korpus Kalosum", "Kiasma Optik", "Kapsula Interna", "Forniks"],
            answerIndex: 0,
            explanation: "Korpus kalosum menghubungkan kedua hemisfer serebrum dengan lebih dari 200 juta serabut saraf aksonal."
          },
          {
            question: "Lobus serebrum manakah yang memuat korteks visual primer (Area Brodmann 17 / V1)?",
            options: ["Lobus Oksipital", "Lobus Frontal", "Lobus Temporal", "Lobus Parietal"],
            answerIndex: 0,
            explanation: "Lobus oksipital di bagian belakang kepala memproses sinyal visual dari retina."
          },
          {
            question: "Proses neurobiologis apa yang memperkuat koneksi sinapsis neuron serebrum sebagai dasar memori?",
            options: ["Long-Term Potentiation (LTP)", "Apoptosis", "Fagositosis", "Demielinisasi"],
            answerIndex: 0,
            explanation: "LTP adalah mekanisme dasar penguatan sinapsis saat otak belajar dan membentuk memori jangka panjang."
          }
        ]
      }
    }
  };

  /**
   * Health & Science News Database Schema
   */
  const NEWS_ARTICLES = [
    {
      id: "news-1",
      category: "AI in Healthcare",
      title: {
        EN: "AI Deep Learning Accurately Predicts Early Glaucoma from 3D Retinal Scans",
        ID: "AI Deep Learning Secara Akurat Memprediksi Glaukoma Dini dari Pemindaian Retina 3D"
      },
      summary: {
        EN: "Researchers at NIH have trained specialized neural networks to analyze micro-thin retinal optical coherence tomography (OCT) layers, spotting optic nerve degeneration 3 years before clinical symptoms.",
        ID: "Peneliti NIH melatih jaringan saraf tiruan untuk menganalisis lapisan OCT retina mikroskopis, mendeteksi degenerasi saraf optik 3 tahun sebelum gejala klinis muncul."
      },
      source: "National Eye Institute / NIH",
      date: "August 12, 2026",
      image: "👁️💻",
      readTime: "4 min read",
      url: "#"
    },
    {
      id: "news-2",
      category: "Anatomy",
      title: {
        EN: "Microscopic 3D Atlas Uncovers Hidden Lymphatic Channels in Human Dura Mater",
        ID: "Atlas 3D Mikroskopis Membongkar Saluran Limfatik Tersembunyi pada Dura Mater Manusia"
      },
      summary: {
        EN: "High-resolution tissue mapping reveals previously unmapped meningeal lymphatic vessels responsible for clearing metabolic waste and amyloid beta plaques during deep sleep.",
        ID: "Pemetaan jaringan resolusi tinggi mengungkapkan pembuluh limfatik menimbun limbah metabolik dan plak amiloid beta dari otak saat tidur nyenyak."
      },
      source: "Nature Neuroscience",
      date: "August 08, 2026",
      image: "🧠🔬",
      readTime: "6 min read",
      url: "#"
    },
    {
      id: "news-3",
      category: "Medicine",
      title: {
        EN: "Bioengineered Corneal Endothelial Graft Passes Phase III Clinical Trials",
        ID: "Graft Endotel Kornea Bio-Rekayasa Lolos Uji Klinis Fase III"
      },
      summary: {
        EN: "Cell-culture lab engineered corneal sheets restore 20/20 clarity to patients with Fuchs endothelial dystrophy without donor tissue reliance.",
        ID: "Lembaran epitel kornea hasil laboratorium mengembalikan kejernihan penglihatan penderita distrofi Fuchs tanpa tergantung donor."
      },
      source: "Lancet Ophthalmology",
      date: "July 29, 2026",
      image: "👁️🧪",
      readTime: "5 min read",
      url: "#"
    },
    {
      id: "news-4",
      category: "Research",
      title: {
        EN: "CRISPR Gene Editing Successfully Restores Photoreceptor Rod Function in Retinitis Pigmentosa Model",
        ID: "Penyuntingan Gen CRISPR Berhasil Memulihkan Fungsi Sel Batang Retina pada Model Retinitis Pigmentosa"
      },
      summary: {
        EN: "Targeted subretinal AAV vector delivery repairs rhodopsin gene mutation, arresting night-blindness progression in preclinical trials.",
        ID: "Vektor subretina AAV memperbaiki mutasi gen rodopsin, menghentikan perkembangan rabun senja pada uji pra-klinis."
      },
      source: "Cell Stem Cell",
      date: "July 18, 2026",
      image: "🧬✨",
      readTime: "7 min read",
      url: "#"
    }
  ];

  /**
   * Achievements & Badges Schema
   */
  const BADGES = [
    {
      id: "badge_vision",
      systemId: "vision",
      organId: "eye",
      title: { EN: "Vision Master", ID: "Master Penglihatan & Optik" },
      desc: { EN: "Mastered core ocular structures (Cornea, Iris, Lens, Retina) and passed quizzes.", ID: "Menguasai struktur okular utama (Kornea, Iris, Lensa, Retina) dan lulus kuis." },
      icon: "👁️",
      requiredStructures: ["Cornea", "Iris", "Lens", "Retina"]
    },
    {
      id: "badge_brain",
      systemId: "nervous",
      organId: "brain",
      title: { EN: "Neuro Architect", ID: "Arsitek Otak & Saraf" },
      desc: { EN: "Uncovered central cerebrum regions and neural communication.", ID: "Membuka kawasan serebrum pusat dan transmisi saraf sensorik." },
      icon: "🧠",
      requiredStructures: ["Cerebrum"]
    },
    {
      id: "badge_cardio",
      systemId: "cardio",
      organId: "heart",
      title: { EN: "Cardiac Master", ID: "Master Jantung & Sirkulasi" },
      desc: { EN: "Explored myocardial chambers, stroke volumes, and systemic arterial pressure.", ID: "Mengeksplorasi ruang miokardium, isi sekuncup, dan tekanan arteri sistemik." },
      icon: "🫀",
      requiredStructures: ["Left Ventricle"]
    }
  ];

  /**
   * Parses laterality (left vs right) from raw node or mesh names.
   */
  function parseLaterality(rawName) {
    if (!rawName) return null;
    const str = rawName.toLowerCase();
    // Explicit keywords and parentheticals
    if (/(?:[\._\-\s]l\b|\.l(?:\.\d+)?$|\(l\)|\(\(l\)\)|\bleft\b|\(left\)|\(\(left\)\)|\bkiri\b)/i.test(str)) {
      return "left";
    }
    if (/(?:[\._\-\s]r\b|\.r(?:\.\d+)?$|\(r\)|\(\(r\)\)|\bright\b|\(right\)|\(\(right\)\)|\bkanan\b)/i.test(str)) {
      return "right";
    }
    // Suffix artifacts like Thalamusl, Hippocampusl001, Ureterl001, Tibial
    if (/(?:thalamus|hypothalamus|hippothalamus|hippocampus|ureter|tibia|radius|clavicle|biceps|kidney|lung|femur|cornea|lens|retina|sclera|iris|choroid|triceps|deltoid|pectoralis)l(?:\d+)?$/i.test(str)) {
      return "left";
    }
    // Suffix artifacts like Tibiar, Radiusr, Clavicler, Bicepsr
    if (/(?:thalamus|hypothalamus|hippothalamus|hippocampus|ureter|tibia|radius|clavicle|biceps|kidney|lung|femur|cornea|lens|retina|sclera|iris|choroid|triceps|deltoid|pectoralis)r(?:\d+)?$/i.test(str)) {
      return "right";
    }
    return null;
  }

  /**
   * Controlled normalization of raw 3D mesh names.
   * Strips Blender material suffixes, indices, prefixes without aggressive fuzzy collision.
   */
  function normalizeRawName(rawName) {
    if (!rawName) return "";
    let str = rawName.toLowerCase().trim();
    if (str === "cerebrumg" || str === "cerebrum.g" || str === "cerebrum_g") return "cerebrum";
    
    // Normalize typo hippothalamus -> hypothalamus
    str = str.replace(/\bhippothalamus/gi, "hypothalamus");
    
    // Normalize exact malformed clavicle laterality alias
    if (str.includes("clavicle (right) (right)")) {
      str = str.replace("clavicle (right) (right)", "clavicle");
    }

    // Remove material suffixes like _material.001_0 or __0
    str = str.replace(/_material\.\d+_\d+$/i, "");
    str = str.replace(/__\d+$/i, "");
    
    // Remove digit index suffixes like .001, .002, 101, 001
    str = str.replace(/\.\d+$/i, "");
    str = str.replace(/\d{3,}$/i, "");
    
    // Remove blender suffixes like .l, .r, .j, .t, .g
    str = str.replace(/\.[a-z]$/i, "");
    
    // Remove prefixes
    str = str.replace(/^(?:mesh|z|os)[_\-\s]+/i, "");
    
    // Normalize British/Latin spellings: oesophagus -> esophagus
    str = str.replace(/\boesophag/g, "esophag");
    
    // Strip trailing laterality artifacts from known anatomical roots:
    // e.g. thalamusl -> thalamus, hippocampusl -> hippocampus, ureterl -> ureter,
    // tibiar -> tibia, radiusr -> radius, clavicler -> clavicle, bicepsr -> biceps, tricepsr -> triceps
    str = str.replace(/\b(thalamus|hypothalamus|hippothalamus|hippocampus|ureter|tibia|radius|clavicle|biceps|triceps|deltoid|pectoralis)[lr]\b/gi, "$1");
    str = str.replace(/(thalamus|hypothalamus|hippothalamus|hippocampus|ureter|tibia|radius|clavicle|biceps|triceps|deltoid|pectoralis)[lr](?:\d+)?$/gi, "$1");
    
    // Clean muscular naming artifacts like Muscler -> Muscle, Ligamentr -> Ligament, Brr -> Branch
    str = str.replace(/\bmuscler\b/gi, "muscle");
    str = str.replace(/\bligamentr\b/gi, "ligament");
    str = str.replace(/\bdeltoid brr\b/gi, "deltoid branch");
    str = str.replace(/\bdeltoid br\.r\b/gi, "deltoid branch");
    str = str.replace(/\bbr\.r\b/gi, "branch");
    str = str.replace(/\bbrr\b/gi, "branch");
    str = str.replace(/\b(biceps|triceps|deltoid|pectoralis)(?:brr|rr|r|l)(?:\d+)?\b/gi, "$1");
    
    // Skeletal patterns:
    // "cervical vertebrae (c3)" -> "cervical vertebrae"
    // "lumbar vertebrae (l2)" -> "lumbar vertebrae"
    // "rib (4th)((right))" -> "rib"
    str = str.replace(/\bcervical vertebrae\s*\([c\d\-]+\)/gi, "cervical vertebrae");
    str = str.replace(/\blumbar vertebrae\s*\([l\d\-]+\)/gi, "lumbar vertebrae");
    str = str.replace(/\brib\s*\(\d+(?:st|nd|rd|th)?\)\s*(?:\(\([a-z]+\)\)|\([a-z]+\))?/gi, "rib");
    
    // Replace underscores and extra spaces
    str = str.replace(/_/g, " ").replace(/\s+/g, " ").trim();
    if (str === "cerebrumg" || str === "cerebrum g") return "cerebrum";
    return str;
  }

  /**
   * Formats a display name from a raw node name if unmapped.
   */
  function formatNodeName(rawName) {
    if (!rawName) return "Unidentified Structure";
    let name = rawName.trim();
    name = name.replace(/^mesh[_\-\s]*/i, "");
    name = name.replace(/^Z[_\-\s]*/i, "");
    name = name.replace(/^os[_\-\s]+/i, "");
    name = name.replace(/_Material\.\d+_\d+$/i, "");
    name = name.replace(/__\d+$/i, "");
    name = name.replace(/\.\d+$/i, "");
    name = name.replace(/_\d+$/i, "");
    
    // Replace Brr / Br.r with Branch
    name = name.replace(/\bDeltoid br\.?r\b/i, "Deltoid Branch (Right)");
    name = name.replace(/\bbr\.r\b/i, "Branch (Right)");
    name = name.replace(/\bbrr\b/i, "Branch");
    name = name.replace(/\bmuscler\b/i, "Muscle (Right)");
    name = name.replace(/\bligamentr\b/i, "Ligament");

    // Capture single trailing Blender dot extensions like .l, .r, .j, .t, .g, .i, .s
    const sideMatch = name.match(/\.([lr])$/i);
    const sideSuffix = sideMatch ? (sideMatch[1].toLowerCase() === "l" ? " (Left)" : " (Right)") : "";
    name = name.replace(/\.[a-zA-Z]$/, "");
    name = name.replace(/_/g, " ");

    name = name.replace(/\bL\b/i, "(Left)").replace(/\bR\b/i, "(Right)");
    name = name.replace(/\bleft\b/i, "(Left)").replace(/\bright\b/i, "(Right)");
    
    // Normalize casing
    name = name.split(" ").filter(Boolean).map(w => {
      if (w.startsWith("(") && w.endsWith(")")) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
    
    if (sideSuffix && !name.includes("(Left)") && !name.includes("(Right)")) {
      name += sideSuffix;
    }
    
    // Fix Muscler -> Muscle in formatted display names
    name = name.replace(/Muscler/g, "Muscle");
    name = name.replace(/Ligamentr/g, "Ligament");
    
    return name;
  }

  /**
   * CANONICAL ANATOMY RESOLVER
   * Resolves raw 3D model node names to stable canonical anatomy identities.
   * STRICT GUARANTEE: Unmapped meshes never default to Eye or Vision.
   */
  function resolveCanonicalAnatomy(rawName, parentName) {
    const raw = (rawName || "").trim();
    const parent = (parentName || "").trim();
    const rawLower = raw.toLowerCase();
    const parentLower = parent.toLowerCase();
    const normRaw = normalizeRawName(raw);
    const normParent = normalizeRawName(parent);

    const side = parseLaterality(raw) || parseLaterality(parent);

    // 1. Direct match in CANONICAL_REGISTRY keys
    let matchedCanonicalKey = null;
    if (CANONICAL_REGISTRY[normRaw]) {
      matchedCanonicalKey = normRaw;
    } else if (CANONICAL_REGISTRY[normParent]) {
      matchedCanonicalKey = normParent;
    }

    // 2. Lookup in ANATOMY_ALIASES
    if (!matchedCanonicalKey) {
      for (const [canonId, aliases] of Object.entries(ANATOMY_ALIASES)) {
        if (!Array.isArray(aliases)) continue;
        const hasMatch = aliases.some(alias => {
          const aLower = alias.toLowerCase();
          return aLower === rawLower ||
                 aLower === parentLower ||
                 aLower === normRaw ||
                 aLower === normParent ||
                 (aLower.length > 3 && (normRaw.startsWith(aLower) || normParent.startsWith(aLower)));
        });
        if (hasMatch && CANONICAL_REGISTRY[canonId]) {
          matchedCanonicalKey = canonId;
          break;
        }
      }
    }

    // If canonical eye structure found:
    if (matchedCanonicalKey && CANONICAL_REGISTRY[matchedCanonicalKey]) {
      const canon = CANONICAL_REGISTRY[matchedCanonicalKey];
      let enDisplay = canon.displayName.EN;
      let idDisplay = canon.displayName.ID;

      if (matchedCanonicalKey === "ureter") {
        if (side === "left") {
          enDisplay = "Ureter Left";
          idDisplay = "Ureter Kiri";
        } else if (side === "right") {
          enDisplay = "Ureter Right";
          idDisplay = "Ureter Kanan";
        }
      } else {
        if (side === "left") {
          enDisplay += " (Left)";
          idDisplay += " (Kiri)";
        } else if (side === "right") {
          enDisplay += " (Right)";
          idDisplay += " (Kanan)";
        }
      }

      return {
        rawName: raw,
        parentName: parent || null,
        canonicalId: canon.id,
        displayName: enDisplay,
        displayNameObj: { EN: enDisplay, ID: idDisplay },
        side: side,
        organId: canon.organId,
        organName: canon.organName,
        systemId: canon.systemId,
        systemName: canon.systemName,
        color: canon.color,
        isMapped: true
      };
    }

    // 3. Fallback check for other systems (nervous, cardio, skeletal, muscular, skin, etc.)
    const clean = `${rawLower} ${parentLower} ${normRaw}`;
    let matchedSystem = null;
    let matchedOrgan = null;

    const explicitSystem = /optic chiasm|cerebr|brainstem|thalamus|hypothalamus|hippocampus|spinal.?cord|\bpons\b|\bmedulla\b/.test(clean)
      ? "nervous"
      : null;
    const nonVisionSystems = ["nervous", "resp", "digestive", "urinary", "cardio", "muscular", "skeletal", "skin"];
    const systemPriority = explicitSystem ? [explicitSystem] : nonVisionSystems;

    for (const sysId of systemPriority) {
      const system = SYSTEMS.find(s => s.id === sysId);
      if (system && system.keywords.some(kw => clean.includes(kw))) {
        matchedSystem = system;
        break;
      }
    }

    if (matchedSystem) {
      const systemOrgans = ORGANS.filter(o => o.systemId === matchedSystem.id);
      matchedOrgan = systemOrgans.find(organ => organ.keywords.some(kw => clean.includes(kw))) || null;
      const formatted = formatNodeName(raw || parent);
      return {
        rawName: raw,
        parentName: parent || null,
        canonicalId: normRaw || normParent || "unclassified",
        displayName: formatted,
        displayNameObj: { EN: formatted, ID: formatted },
        side: side,
        organId: matchedOrgan ? matchedOrgan.id : null,
        organName: matchedOrgan ? matchedOrgan.name : { EN: "Unclassified Structure", ID: "Struktur Belum Diklasifikasikan" },
        systemId: matchedSystem.id,
        systemName: matchedSystem.name,
        color: matchedSystem.color,
        isMapped: true
      };
    }

    // 4. UNMAPPED STRUCTURE: Clean, explicit unclassified state. NEVER defaults to Eye!
    const unmappedDisplayName = formatNodeName(raw || parent);
    return {
      rawName: raw,
      parentName: parent || null,
      canonicalId: "unmapped",
      displayName: unmappedDisplayName,
      displayNameObj: { EN: unmappedDisplayName, ID: unmappedDisplayName },
      side: side,
      organId: null,
      organName: { EN: "Unclassified Structure", ID: "Struktur Belum Diklasifikasikan" },
      systemId: "unclassified",
      systemName: { EN: "Unclassified", ID: "Belum Diklasifikasikan" },
      color: "#94a3b8",
      isMapped: false
    };
  }

  /**
   * Node Matcher against Systems & Organs (Delegates cleanly to Canonical Resolver)
   */
  function matchNode(rawName, parentName) {
    return resolveCanonicalAnatomy(rawName, parentName);
  }

  /**
   * Retrieves educational content for a structure with strict fallback (NO Cornea leaks)
   */
  function getStructureDetails(structName) {
    if (!structName) return null;

    // Check direct match
    if (STRUCTURE_DETAILS[structName]) {
      return STRUCTURE_DETAILS[structName];
    }

    // Check CANONICAL_REGISTRY lookup
    const lower = structName.toLowerCase();
    if (CANONICAL_REGISTRY[lower]) {
      const canon = CANONICAL_REGISTRY[lower];
      if (STRUCTURE_DETAILS[canon.displayName.EN]) {
        return STRUCTURE_DETAILS[canon.displayName.EN];
      }
    }

    // Check case-insensitive / partial match
    const key = Object.keys(STRUCTURE_DETAILS).find(k => k.toLowerCase() === structName.toLowerCase());
    if (key) {
      return STRUCTURE_DETAILS[key];
    }

    // Find parent organ and system for accurate metadata
    let foundOrgan = null;
    let foundSystem = null;

    for (const organ of ORGANS) {
      if (organ.structures.some(s => s.toLowerCase() === structName.toLowerCase())) {
        foundOrgan = organ;
        foundSystem = SYSTEMS.find(s => s.id === organ.systemId);
        break;
      }
    }

    if (!foundOrgan) {
      const match = matchNode(structName);
      foundOrgan = ORGANS.find(o => o.id === match.organId);
      foundSystem = SYSTEMS.find(s => s.id === match.systemId);
    }

    // An unmatched mesh remains explicitly unclassified; it must never inherit
    // the Eye lesson or Vision metadata merely because that is the first system.
    const sysId = foundSystem ? foundSystem.id : "unclassified";
    const orgId = foundOrgan ? foundOrgan.id : null;

    // Clean Fallback Card (never leaks Cornea content)
    return {
      systemId: sysId,
      organId: orgId,
      name: { EN: structName, ID: structName },
      illustration: foundSystem ? foundSystem.icon : "🧬",
      isFallback: true,
      simple: {
        EN: {
          overview: `${structName} is an important anatomical structure within the ${foundOrgan ? foundOrgan.name.EN : 'body'}.`,
          position: `Located within the ${foundOrgan ? foundOrgan.name.EN : 'body system'}. Detailed spatial cross-sections and 3D diagrams are currently being curated for this granular part.`,
          mechanism: `Contributes to the physiological and biomechanical functions of the ${foundOrgan ? foundOrgan.name.EN : 'human body'}.`,
          health: "Maintaining overall cardiovascular fitness, proper hydration, and routine health screenings supports organ wellness."
        },
        ID: {
          overview: `${structName} merupakan struktur anatomi penting di dalam ${foundOrgan ? foundOrgan.name.ID : 'tubuh'}.`,
          position: `Terletak di dalam sistem ${foundOrgan ? foundOrgan.name.ID : 'organ tubuh'}. Diagram anatomi 2D dan kurasi materi sedang dipersiapkan.`,
          mechanism: `Berperan dalam fungsi fisiologis dan biomekanis pada ${foundOrgan ? foundOrgan.name.ID : 'tubuh manusia'}.`,
          health: "Pola hidup sehat, hidrasi cukup, serta pemeriksaan kesehatan berkala menjaga fungsi organ tetap optimal."
        }
      },
      academic: {
        EN: {
          overview: `${structName} represents a specialized histological sub-unit belonging to the ${foundOrgan ? foundOrgan.name.EN : 'organ complex'}.`,
          position: `Anatomical regionalization within the ${foundSystem ? foundSystem.name.EN : 'system'}. Histological and topological micro-atlas mapping in active development.`,
          mechanism: `Engages in cellular signaling, structural integrity, and tissue-specific physiological pathways.`,
          health: "Clinical evaluations utilize targeted imaging, ultrasound, or endoscopic biopsy protocols when pathological symptoms arise."
        },
        ID: {
          overview: `${structName} merupakan sub-unit histologis khusus yang menjadi bagian dari ${foundOrgan ? foundOrgan.name.ID : 'kompleks organ'}.`,
          position: `Regionalisasi anatomi di dalam sistem ${foundSystem ? foundSystem.name.ID : 'tubuh'}. Atlas mikrotopologi sedang dalam proses pengembangan.`,
          mechanism: `Terlibat dalam persinyalan seluler, integritas struktural, dan jalur fisiologis spesifik jaringan.`,
          health: "Evaluasi klinis menggunakan pencitraan diagnostik, ultrasonografi, atau pemeriksaan laboratorium bila terdapat indikasi patologis."
        }
      },
      quiz: null
    };
  }

  /**
   * Returns all structures defined in an organ
   */
  function getOrganStructures(organId) {
    const organ = ORGANS.find(o => o.id === organId);
    return organ ? organ.structures : [];
  }

  /**
   * Returns all structures defined in a system across its organs
   */
  function getSystemStructures(systemId) {
    const systemOrgans = ORGANS.filter(o => o.systemId === systemId);
    const structs = [];
    systemOrgans.forEach(o => {
      o.structures.forEach(s => {
        if (!structs.includes(s)) structs.push(s);
      });
    });
    return structs;
  }

  function getHierarchyTree() {
    return SYSTEMS.map(sys => ({
      ...sys,
      organs: ORGANS.filter(o => o.systemId === sys.id)
    }));
  }

  function extendStructureDetails(entries) {
    Object.assign(STRUCTURE_DETAILS, entries || {});
  }

  /**
   * Bilingual Anatomy Search Resolver
   * Matches query against canonical IDs, English names, Indonesian names, and aliases.
   */
  function searchAnatomy(query) {
    if (!query || typeof query !== "string") return [];
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const results = [];
    const seenIds = new Set();

    // 1. Search in CANONICAL_REGISTRY
    Object.values(CANONICAL_REGISTRY).forEach(canon => {
      const en = (canon.displayName?.EN || "").toLowerCase();
      const id = (canon.displayName?.ID || "").toLowerCase();
      const cId = canon.id.toLowerCase();

      if (cId.includes(q) || en.includes(q) || id.includes(q)) {
        if (!seenIds.has(canon.id)) {
          seenIds.add(canon.id);
          results.push({
            canonicalId: canon.id,
            name: canon.displayName,
            organId: canon.organId,
            organName: canon.organName,
            systemId: canon.systemId,
            systemName: canon.systemName,
            color: canon.color
          });
        }
      }
    });

    // 2. Search in ANATOMY_ALIASES
    Object.entries(ANATOMY_ALIASES).forEach(([canonKey, aliases]) => {
      if (Array.isArray(aliases)) {
        const matches = aliases.some(alias => alias.toLowerCase().includes(q));
        if (matches && CANONICAL_REGISTRY[canonKey] && !seenIds.has(canonKey)) {
          const canon = CANONICAL_REGISTRY[canonKey];
          seenIds.add(canonKey);
          results.push({
            canonicalId: canon.id,
            name: canon.displayName,
            organId: canon.organId,
            organName: canon.organName,
            systemId: canon.systemId,
            systemName: canon.systemName,
            color: canon.color
          });
        }
      }
    });

    // 3. Search in STRUCTURE_DETAILS
    Object.entries(STRUCTURE_DETAILS).forEach(([structName, details]) => {
      const en = (details.name?.EN || structName).toLowerCase();
      const id = (details.name?.ID || structName).toLowerCase();

      if (en.includes(q) || id.includes(q)) {
        const canonMatch = resolveCanonicalAnatomy(structName);
        const canonId = canonMatch.canonicalId !== "unmapped" ? canonMatch.canonicalId : structName.toLowerCase();
        if (!seenIds.has(canonId)) {
          seenIds.add(canonId);
          results.push({
            canonicalId: canonId,
            name: details.name || { EN: structName, ID: structName },
            organId: details.organId,
            systemId: details.systemId,
            color: canonMatch.color || "#00f2fe"
          });
        }
      }
    });

    return results;
  }

  return {
    SYSTEMS,
    ORGANS,
    CANONICAL_REGISTRY,
    ANATOMY_ALIASES,
    ALIAS_MAPPING,
    COURSE_3D_CONFIG,
    STRUCTURE_DETAILS,
    NEWS_ARTICLES,
    BADGES,
    formatNodeName,
    parseLaterality,
    normalizeRawName,
    resolveCanonicalAnatomy,
    matchNode,
    getStructureDetails,
    getOrganStructures,
    getSystemStructures,
    getHierarchyTree,
    getCourse3DConfig,
    extendStructureDetails,
    searchAnatomy
  };
})();

// Backwards compatibility
window.VITRA_DATA = window.INSIDE_YOU_DATA;
