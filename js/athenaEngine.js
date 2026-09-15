/**
 * INSIDE YOU — ATHENA AI ENGINE
 * Intelligent Learning Assistant & Biomedical Reasoning Core
 * 
 * Architecture & Protocols:
 * 1. Semantic Intent & Domain Boundary Classifier (Intent-First)
 * 2. Dynamic Context-Awareness Engine (3D Viewport, Mesh Selection, Dual Mode)
 * 3. Knowledge Aggregator (Inside You Curriculum + Curated Biomedical KB + News)
 * 4. Context Linking & Material Bridging (e.g. Ulna <-> Radius)
 * 5. Clinical Safety & Medical Guardrails (3-Part Acute Symptom Protocol)
 * 6. Interactive 3D Deep Linking (Inspect in 3D, Open Lesson)
 * 7. Dual Engine: Instant Built-in Knowledge Core + Optional Gemini API
 */

window.ATHENA_ENGINE = (function() {
  // Hardcoded Master Key (Inside You Dedicated Deployment - Zero Setup Overhead)
  const ATHENA_API_KEY = 
    (typeof window !== 'undefined' && window.GEMINI_API_KEY) ||
    (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GEMINI_API_KEY) ||
    (typeof atob !== 'undefined' ? atob("QVEuQWI4Uk42SlJhbUVXdjYxRVVaYmFfNGtvTWQyRkNUTUsyaTg0TGcwTmV4N0dlZENpMUE=") : "");
  const ATHENA_MODEL_NAME = "gemini-2.0-flash";

  // Standard Refusal Template (Exact Specification)
  const REFUSAL_TEMPLATES = {
    EN: "Hello! I am Athena, your anatomy and health companion on Inside You. I am designed specifically to assist with human anatomy, medicine, physiology, and health sciences. Please feel free to ask anything related to the human body or medical science.",
    ID: "Halo! Saya Athena, asisten pembelajaran anatomi dan kesehatan Anda di Inside You. Saya dirancang khusus untuk membantu sains anatomi manusia, kedokteran, fisiologi, dan kesehatan. Silakan tanyakan apa pun yang berkaitan dengan tubuh manusia atau ilmu medis."
  };

  /**
   * Curated External Biomedical Knowledge Base (Expansion Layer)
   * Supplements native Inside You content with structures, physiology, and pathologies.
   */
  const CURATED_BIOMEDICAL_KB = {
    ulna: {
      id: "ulna",
      name: { EN: "Ulna", ID: "Ulna (Tulang Hasta)" },
      system: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      organ: "arm",
      overview: {
        EN: "The ulna is one of the two long bones of the human forearm, located on the medial (pinky) side, parallel to the radius.",
        ID: "Ulna (tulang hasta) adalah salah satu dari dua tulang panjang lengan bawah manusia, terletak di sisi medial (searah jari kelingking), sejajar dengan radius."
      },
      mechanism: {
        EN: "The proximal end forms a robust hinge joint with the trochlea of the humerus (olecranon process), providing elbow flexion and extension. It articulates laterally with the radius at the proximal and distal radioulnar joints to enable forearm pronation and supination.",
        ID: "Ujung proksimalnya membentuk sendi engsel kokoh dengan troklea humerus (prosesus olekranon), memungkinkan fleksi dan ekstensi siku. Berartikulasi secara lateral dengan radius pada sendi radioulnar proksimal dan distal untuk memungkinkan pronasi dan supinasi lengan bawah."
      },
      position: {
        EN: "Medial aspect of the forearm, extending from the elbow joint to the wrist.",
        ID: "Aspek medial lengan bawah, membentang dari sendi siku hingga pergelangan tangan."
      },
      clinical: {
        EN: "Common clinical conditions include olecranon bursitis ('student's elbow'), Monteggia fractures (fracture of proximal ulna with radial head dislocation), and nightstick fractures from direct trauma.",
        ID: "Kondisi klinis umum meliputi bursitis olekranon, fraktur Monteggia (fraktur sepertiga proksimal ulna disertai dislokasi kaput radius), dan fraktur 'nightstick' akibat benturan langsung."
      },
      bridges: {
        radius: {
          EN: "In Inside You, you are currently exploring the radius. The radius and ulna work together as a functional pair to enable pronation and supination of the forearm.",
          ID: "Di Inside You, Anda saat ini sedang menjelajahi radius. Radius dan ulna bekerja bersama sebagai pasangan fungsional untuk memungkinkan pronasi dan supinasi lengan bawah."
        },
        humerus: {
          EN: "The ulna forms the primary hinge joint with the humerus at the elbow, providing rigid structural stability during lifting.",
          ID: "Ulna membentuk sendi engsel utama dengan humerus pada siku, memberikan stabilitas struktural kokoh saat mengangkat beban."
        }
      },
      nativeLink: "radius"
    },
    radius: {
      id: "radius",
      name: { EN: "Radius", ID: "Radius (Tulang Pengumpil)" },
      system: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      organ: "arm",
      overview: {
        EN: "The radius is the lateral long bone of the forearm, situated on the thumb side. It is shorter and more mobile than the ulna.",
        ID: "Radius (tulang pengumpil) adalah tulang panjang lateral lengan bawah yang terletak di sisi ibu jari. Bentuknya lebih pendek dan lebih lincah dibandingkan ulna."
      },
      mechanism: {
        EN: "Its disk-shaped head rotates within the radial notch of the ulna and the annular ligament. During pronation, the radius crosses over the stationary ulna.",
        ID: "Kaputnya yang berbentuk cakram berputar di dalam takik radial ulna dan ligamen anular. Selama pronasi, radius menyilang di atas ulna yang relatif diam."
      },
      position: {
        EN: "Lateral aspect of the forearm between the elbow capitulum and the scaphoid/lunate carpal bones of the wrist.",
        ID: "Aspek lateral lengan bawah antara kapitulum humerus siku dan tulang karpal skafoid/lunatum di pergelangan tangan."
      },
      clinical: {
        EN: "Colles' fracture (fracture of distal radius with dorsal displacement) is the most frequent wrist fracture, commonly resulting from a fall onto an outstretched hand (FOOSH).",
        ID: "Fraktur Colles (fraktur radius distal dengan pergeseran dorsal) adalah fraktur pergelangan tangan paling umum, biasanya akibat jatuh dengan tangan menumpu (FOOSH)."
      },
      bridges: {
        ulna: {
          EN: "The radius pivots around the ulna, making human tool use, door-knob turning, and hand dexterity possible.",
          ID: "Radius berputar mengelilingi ulna, memungkinkan manusia menggunakan perkakas, memutar gagang pintu, dan ketangkasan tangan."
        }
      },
      nativeLink: "skeleton"
    },
    patella: {
      id: "patella",
      name: { EN: "Patella", ID: "Patela (Tempurung Lutut)" },
      system: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      organ: "knee",
      overview: {
        EN: "The patella is the largest sesamoid bone in the human body, embedded within the quadriceps femoris tendon.",
        ID: "Patela (tempurung lutut) adalah tulang sesamoid terbesar dalam tubuh manusia, tertanam di dalam tendon paha paha depan (quadriceps femoris)."
      },
      mechanism: {
        EN: "It acts as a mechanical pulley, increasing the moment arm and lever advantage of the quadriceps tendon by up to 30% during knee extension.",
        ID: "Berfungsi sebagai katrol mekanis, meningkatkan lengan momen dan keuntungan tuas tendon paha depan hingga 30% selama ekstensi lutut."
      },
      position: {
        EN: "Anterior aspect of the knee joint, gliding within the patellar groove (trochlea) of the distal femur.",
        ID: "Aspek anterior sendi lutut, meluncur di dalam alur patela (troklea) femur distal."
      },
      clinical: {
        EN: "Patellofemoral pain syndrome ('runner's knee'), patellar dislocation, and chondromalacia patellae are frequent orthopedic conditions.",
        ID: "Sindrom nyeri patelofemoral ('runner's knee'), dislokasi patela, dan kondromalasia patela adalah kondisi ortopedi yang sering dijumpai."
      },
      bridges: {
        femur: {
          EN: "The patella articulates with the femoral trochlear groove, protecting the anterior knee joint while maximizing quadriceps efficiency.",
          ID: "Patela berartikulasi dengan alur troklea femur, melindungi sendi lutut anterior sekaligus memaksimalkan efisiensi otot paha depan."
        }
      },
      nativeLink: "femur"
    },
    femur: {
      id: "femur",
      name: { EN: "Femur", ID: "Femur (Tulang Paha)" },
      system: "skeletal",
      systemName: { EN: "Skeletal System", ID: "Sistem Rangka" },
      organ: "thigh",
      overview: {
        EN: "The femur is the longest, heaviest, and strongest bone in the human body, capable of supporting up to 30 times an adult's body weight.",
        ID: "Femur (tulang paha) adalah tulang terpanjang, terberat, dan terkuat dalam tubuh manusia, mampu menopang beban hingga 30 kali berat badan orang dewasa."
      },
      mechanism: {
        EN: "Transmits body weight from the hip bone (acetabulum) to the tibia through the knee joint. Its femoral neck angle absorbs ground reaction impact during bipedal locomotion.",
        ID: "Mentransmisikan berat badan dari panggul (asetabulum) ke tibia melalui sendi lutut. Sudut leher femoral menyerap benturan reaksi lantai saat berjalan tegak."
      },
      position: {
        EN: "Upper leg / thigh, extending from the pelvis to the knee.",
        ID: "Paha atas, membentang dari panggul hingga ke lutut."
      },
      clinical: {
        EN: "Femoral neck fractures in elderly osteoporotic individuals, and high-energy femoral shaft fractures in motor accidents.",
        ID: "Fraktur leher femur pada lansia dengan osteoporosis, serta fraktur diafisis femur energi tinggi pada kecelakaan."
      },
      nativeLink: "femur"
    },
    hippocampus: {
      id: "hippocampus",
      name: { EN: "Hippocampus", ID: "Hipokampus" },
      system: "nervous",
      systemName: { EN: "Nervous System", ID: "Sistem Saraf" },
      organ: "brain",
      overview: {
        EN: "A seahorse-shaped structure embedded deep within the medial temporal lobe, central to the limbic system.",
        ID: "Struktur berbentuk mirip kuda laut yang tertanam di dalam lobus temporal medial, merupakan inti dari sistem limbik."
      },
      mechanism: {
        EN: "Plays an indispensable role in the consolidation of short-term memory into long-term declarative memory, and coordinates spatial navigation through place cells.",
        ID: "Berperan penting dalam konsolidasi memori jangka pendek menjadi memori jangka panjang deklaratif, serta memandu navigasi spasial melalui 'place cells'."
      },
      position: {
        EN: "Floor of the inferior horn of each lateral ventricle in the medial temporal lobe.",
        ID: "Dasar kornu inferior ventrikel lateral di lobus temporal medial."
      },
      clinical: {
        EN: "Highly vulnerable to hypoxia, chronic stress (cortisol-induced atrophy), and is among the first neural regions to suffer severe neurodegeneration in Alzheimer's disease.",
        ID: "Sangat rentan terhadap hipoksia, stres kronis (atrofi akibat kortisol), dan merupakan salah satu area pertama yang mengalami neurodegenerasi parah pada penyakit Alzheimer."
      },
      bridges: {
        cerebrum: {
          EN: "In Inside You, you can inspect the cerebrum. The hippocampus acts as the cognitive indexing hub that helps the cerebral cortex store and recall memories.",
          ID: "Di Inside You, Anda dapat memeriksa serebrum. Hipokampus bertindak sebagai pengindeks kognitif yang membantu korteks serebral menyimpan dan mengingat memori."
        }
      },
      nativeLink: "brain"
    },
    sympathetic_reaction: {
      id: "sympathetic_reaction",
      name: { EN: "Fight-or-Flight & Adrenaline Response", ID: "Respon Fight-or-Flight & Adrenalin" },
      system: "nervous",
      systemName: { EN: "Nervous & Endocrine", ID: "Sistem Saraf & Endokrin" },
      organ: "heart",
      overview: {
        EN: "A rapid physiological reaction triggered by the sympathetic nervous system and the adrenal medulla during intense excitement, stress, fear, or competitive stimuli.",
        ID: "Reaksi fisiologis cepat yang dipicu oleh sistem saraf simpatis dan medula adrenal selama kegembiraan tinggi, stres, ketakutan, atau kompetisi intens."
      },
      mechanism: {
        EN: "When confronted with high-stake stimuli (e.g. clutch moments in video games like VALORANT or athletic sprints), the amygdala activates the hypothalamus, firing sympathetic nerves that stimulate adrenal epinephrine release. Beta-1 adrenergic receptors in the heart increase heart rate (chronotropy) and contraction force (inotropy), while bronchodilation maximizes oxygen intake.",
        ID: "Saat menghadapi rangsangan menegangkan (misalnya momen clutch di game seperti VALORANT atau sprint atletik), amigdala mengaktivasi hipotalamus, memicu saraf simpatis untuk melepaskan epinefrin dari kelenjar adrenal. Reseptor adrenergik beta-1 di jantung meningkatkan denyut nadi dan kekuatan pompa, sementara bronkodilasi memaksimalkan asupan oksigen."
      },
      position: {
        EN: "Orchestrated across the brainstem, sympathetic chain ganglia, adrenal glands, and cardiac conduction system.",
        ID: "Dikoordinasikan melintasi batang otak, ganglion simpatis, kelenjar adrenal, dan sistem konduksi jantung."
      },
      clinical: {
        EN: "Beneficial in acute survival, but chronic sympathetic hyperactivity can lead to hypertension, anxiety, tachycardia, and adrenal exhaustion.",
        ID: "Sangat bermanfaat untuk pertahanan hidup jangka pendek, namun hiperaktivitas simpatis kronis dapat memicu hipertensi, kecemasan, takikardia, dan kelelahan adrenal."
      },
      bridges: {
        heart: {
          EN: "This sympathetic surge directly targets the sinoatrial node of the heart, accelerating the pacing rate that you feel as palpitations.",
          ID: "Lonjakan simpatis ini langsung menargetkan nodus sinoatrial jantung, mempercepat detak pompa yang Anda rasakan sebagai jantung berdebar."
        }
      },
      nativeLink: "heart"
    },
    diabetes: {
      id: "diabetes",
      name: { EN: "Diabetes Mellitus (Type 1 & Type 2)", ID: "Diabetes Melitus (Tipe 1 & Tipe 2)" },
      system: "digestive",
      systemName: { EN: "Endocrine & Metabolic", ID: "Sistem Endokrin & Metabolik" },
      organ: "pancreas",
      overview: {
        EN: "A group of metabolic disorders characterized by persistent hyperglycemia resulting from defects in insulin secretion, insulin action, or both.",
        ID: "Sekelompok gangguan metabolik yang ditandai dengan hiperglikemia persisten akibat gangguan sekresi insulin, kerja insulin, atau keduanya."
      },
      mechanism: {
        EN: "Type 1 Diabetes is an autoimmune condition where T-cells destroy pancreatic beta-cells in the islets of Langerhans, halting insulin production. Type 2 Diabetes involves peripheral insulin resistance coupled with progressive secretory defect.",
        ID: "Diabetes Tipe 1 adalah kondisi autoimun di mana sel T menghancurkan sel beta pankreas di pulau Langerhans, menghentikan produksi insulin. Diabetes Tipe 2 melibatkan resistensi insulin perifer disertai defek sekresi progresif."
      },
      position: {
        EN: "Originates in the endocrine pancreas, affecting vascular endothelium throughout the body.",
        ID: "Berasal dari pankreas endokrin, berdampak ke endotel pembuluh darah di seluruh tubuh."
      },
      clinical: {
        EN: "Long-term complications include diabetic retinopathy (damage to retinal microvasculature), diabetic nephropathy in renal glomeruli, diabetic neuropathy, and accelerated coronary artery disease.",
        ID: "Komplikasi jangka panjang meliputi retinopati diabetik (kerusakan mikrovaskular retina), nefropati diabetik pada glomerulus ginjal, neuropati, dan penyakit jantung koroner."
      },
      nativeLink: "pancreas"
    },
    glaucoma: {
      id: "glaucoma",
      name: { EN: "Glaucoma", ID: "Glaukoma" },
      system: "vision",
      systemName: { EN: "Vision & Optics", ID: "Penglihatan & Optik" },
      organ: "eye",
      overview: {
        EN: "A group of eye conditions that damage the optic nerve, often caused by abnormally high intraocular pressure (IOP).",
        ID: "Sekelompok kondisi mata yang merusak saraf optik, seringkali dipicu oleh peningkatan tekanan intraokular (TIO) yang abnormal."
      },
      mechanism: {
        EN: "Aqueous humor produced by the ciliary body normally drains through the trabecular meshwork into the Canal of Schlemm. In open-angle glaucoma, drainage resistance increases, elevating IOP and compressing retinal ganglion cell axons at the optic disc.",
        ID: "Cairan aqueous humor yang diproduksi oleh korpus siliaris normalnya mengalir melalui trabecular meshwork menuju Kanal Schlemm. Pada glaukoma sudut terbuka, hambatan aliran keluar meningkat, memicu tekanan tinggi yang menekan akson sel ganglion retina di diskus optikus."
      },
      position: {
        EN: "Anterior chamber angle and the posterior optic nerve head in the retina.",
        ID: "Sudut bilik mata depan dan pangkal saraf optik di bagian belakang retina."
      },
      clinical: {
        EN: "Typically causes painless, progressive peripheral vision loss ('tunnel vision') before affecting central acuity. Early tonometry and fundus imaging are critical to prevent irreversible blindness.",
        ID: "Khas dengan hilangnya penglihatan perifer secara bertahap dan tanpa rasa sakit ('tunnel vision') sebelum memengaruhi lapang pandang sentral. Skrining tonometri dini sangat krusial."
      },
      bridges: {
        cornea: {
          EN: "In Inside You, you can inspect the cornea and ocular structures. Corneal thickness is a vital measurement in calculating true intraocular pressure.",
          ID: "Di Inside You, Anda dapat memeriksa kornea dan struktur okular. Ketebalan kornea adalah parameter penting dalam mengukur tekanan intraokular yang akurat."
        }
      },
      nativeLink: "cornea"
    },
    mri: {
      id: "mri",
      name: { EN: "Magnetic Resonance Imaging (MRI)", ID: "Magnetic Resonance Imaging (MRI)" },
      system: "nervous",
      systemName: { EN: "Medical Diagnostic Technology", ID: "Teknologi Diagnostik Medis" },
      organ: "brain",
      overview: {
        EN: "A non-invasive medical imaging technique that uses strong magnetic fields, radio waves, and computer processing to create detailed cross-sectional anatomical pictures.",
        ID: "Teknik pencitraan medis non-invasif yang memanfaatkan medan magnet kuat, gelombang radio, dan komputasi untuk menghasilkan gambar anatomi beresolusi tinggi tanpa radiasi ionisasi."
      },
      mechanism: {
        EN: "Under a strong static magnetic field (typically 1.5T or 3.0T), hydrogen protons align. Radiofrequency pulses temporarily tilt these spins. When turned off, protons relax back to alignment, emitting RF signals picked up by receiver coils. T1 and T2 relaxation differences differentiate soft tissues.",
        ID: "Di bawah medan magnet statis yang kuat (1,5T atau 3,0T), proton hidrogen di dalam air dan lipid tubuh menyelaraskan diri. Pulsa frekuensi radio memiringkan putaran proton. Saat pulsa dimatikan, proton kembali ke posisi awal sambil memancarkan sinyal gelombang radio yang direkonstruksi menjadi gambar."
      },
      position: {
        EN: "Clinical radiology suite; exceptionally suited for neural, soft tissue, and musculoskeletal imaging.",
        ID: "Ruang radiologi klinis; sangat ideal untuk pencitraan jaringan lunak, otak, medula spinalis, dan sendi."
      },
      clinical: {
        EN: "Gold standard for visualizing cerebral infarctions, demyelinating plaques in multiple sclerosis, brain tumors, ligament tears, and spinal cord compression.",
        ID: "Standar baku emas untuk mendeteksi infark serebral, plak multipel sklerosis, tumor otak, robekan ligamen, dan kompresi sumsum tulang belakang."
      },
      nativeLink: "brain"
    }
  };

  /**
   * Domain Classifier & Intent Evaluation
   * Evaluates whether user's intent is within Health / Anatomy / Medicine,
   * or outside domain (general knowledge, coding, gaming strategy, politics, economics).
   */
  function classifyIntent(query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return { status: "BLOCKED", reason: "EMPTY" };

    // 1. Ambiguity handling: Health keywords used in non-health metaphors
    // e.g. "heart of a computer", "sick economy", "virus on my pc"
    const nonHealthMetaphors = [
      /heart\s+of\s+(a\s+|the\s+)?(computer|pc|cpu|machine|city|engine|country|system|code|network|company|app)/i,
      /(economy|market|country|stock).*?(sick|ill|paralyzed|dead|dying|lumpuh|collapse|crash)/i,
      /(sick|ill)\s+(economy|market|country)/i,
      /(computer|pc|laptop|windows|mac|android|software)\s+(virus|malware|infected)/i,
      /brain\s+of\s+(a\s+|the\s+)?(computer|robot|ai|phone|device|machine)/i,
      /jantung\s+(komputer|kota|mesin|ekonomi|sistem)/i,
      /ekonomi\s+(yang\s+)?(sakit|lumpuh|krisis)/i
    ];

    for (const pattern of nonHealthMetaphors) {
      if (pattern.test(q)) {
        return { status: "BLOCKED", reason: "NON_HEALTH_METAPHOR" };
      }
    }

    // 2. Ambiguity handling: Non-health triggers asking for physiological/bodily reactions
    // e.g. "Why does playing VALORANT make my heart race?", "why do scary movies make goosebumps", "why coffee makes shaky"
    const physiologicalContextPattern = /(why|how|what\s+happens|kenapa|mengapa|apa\s+yang\s+terjadi).*?(heart\s+race|palpitation|sweat|adrenaline|pulse|bp|blood\s+pressure|goosebumps|pupil|shivering|breath|jantung\s+berdebar|keringat|merinding|tekanan\s+darah|napas|adrenalin)/i;
    if (physiologicalContextPattern.test(q)) {
      return { status: "ALLOWED", category: "Physiology", subIntent: "sympathetic_reaction" };
    }

    // 3. Clear BLOCKED Domains
    // Programming & Math
    const programmingTerms = [
      /python|javascript|typescript|c\+\+|java\b|html|css|php|rust|golang|sql|regex|algorithm|script|function\s*\(|code\b|coding|compiler|debug/i,
      /buatkan\s+kode|bikin\s+program|koding/i
    ];
    for (const p of programmingTerms) {
      if (p.test(q)) return { status: "BLOCKED", reason: "PROGRAMMING" };
    }

    // Gaming Strategy & Pop Culture
    const gamingStrategyTerms = [
      /rank\s*up|valorant\s+crosshair|minecraft|fortnite|gta|aim\s+guide|cheat|genshin|gameplay|dota|league\s+of\s+legends|mobile\s+legends|build\s+item/i,
      /cara\s+naik\s+rank|cheat\s+game|trik\s+game/i
    ];
    for (const p of gamingStrategyTerms) {
      if (p.test(q)) return { status: "BLOCKED", reason: "GAMING" };
    }

    // Social, Politics & Finance
    const politicsFinanceTerms = [
      /president\s+of|prime\s+minister|election|politic|government|parliament|presiden|gubernur|pemilu|partai\s+politik/i,
      /crypto|bitcoin|ethereum|forex|stock\s+investment|saham|reksadana|cara\s+kaya|investasi\s+uang/i
    ];
    for (const p of politicsFinanceTerms) {
      if (p.test(q)) return { status: "BLOCKED", reason: "POLITICS_FINANCE" };
    }

    // Non-medical General Knowledge
    const generalTriviaTerms = [
      /who\s+invented\s+(the\s+)?(airplane|telephone|lightbulb|car|wheel|steam\s+engine)/i,
      /capital\s+of|ibukota\s+negara|luas\s+negara|jarak\s+ke\s+bulan/i,
      /who\s+won\s+world\s+cup|siapa\s+pemenang\s+piala\s+dunia/i
    ];
    for (const p of generalTriviaTerms) {
      if (p.test(q)) return { status: "BLOCKED", reason: "GENERAL_TRIVIA" };
    }

    // 4. Check ALLOWED Biomedical / Anatomical Indicators
    const healthKeywords = [
      "anatomy", "anatomi", "organ", "bone", "tulang", "muscle", "otot", "nerve", "saraf", "cell", "sel",
      "tissue", "jaringan", "heart", "jantung", "lung", "paru", "brain", "otak", "eye", "mata", "cornea",
      "kornea", "retina", "lens", "lensa", "iris", "ulna", "radius", "femur", "tibia", "fibula", "patella",
      "knee", "lutut", "skull", "tengkorak", "vertebra", "spine", "kidney", "ginjal", "stomach", "lambung",
      "liver", "hati", "intestine", "usus", "pancreas", "pankreas", "artery", "arteri", "vein", "vena",
      "aorta", "trachea", "trakea", "bronchus", "bronkus", "alveolus", "hippocampus", "hipokampus", "cerebrum",
      "serebrum", "cerebellum", "serebelum", "nephron", "nefron", "blood", "darah", "vessel", "pembuluh",
      "disease", "penyakit", "symptom", "gejala", "pain", "nyeri", "sakit", "syndrome", "sindrom", "infection",
      "infeksi", "cancer", "kanker", "tumor", "glaucoma", "glaukoma", "cataract", "katarak", "diabetes",
      "hypertension", "hipertensi", "stroke", "infarct", "infark", "fracture", "fraktur", "patah", "inflammation",
      "radang", "fever", "demam", "asthma", "asma", "pneumonia", "cardiac", "chest pain", "nyeri dada",
      "vitamin", "mineral", "protein", "carbohydrate", "karbohidrat", "lipid", "fat", "lemak", "enzyme",
      "enzim", "hormone", "hormon", "insulin", "adrenaline", "adrenalin", "dopamine", "dopamin", "serotonin",
      "cortisol", "kortisol", "metabolism", "metabolisme", "oxygen", "oksigen", "nutrition", "nutrisi", "dna",
      "rna", "gene", "gen", "mitochondria", "mitokondria", "atp", "glucose", "glukosa",
      "mri", "ct scan", "rontgen", "x-ray", "ultrasound", "usg", "ecg", "ekg", "biopsy", "biopsi",
      "microscope", "mikroskop", "prosthesis", "prostetik", "surgery", "operasi", "transplant", "transplantasi",
      "clinical trial", "uji klinis", "medical research", "riset medis", "journal", "vaksin", "vaccine",
      "antibody", "antibodi", "immune", "imun", "pathology", "patologi", "histology", "histologi",
      "this part", "bagian ini", "this organ", "organ ini", "this structure", "struktur ini",
      "what is this", "apa ini", "how does it work", "bagaimana cara kerjanya", "its function", "fungsinya"
    ];

    const isMatch = healthKeywords.some(kw => q.includes(kw));
    if (isMatch) {
      return { status: "ALLOWED", category: "Health & Anatomy" };
    }

    if (/function|work|purpose|mechanism|location|where|what|how|apa|fungsi|kerja|dimana|bagaimana/i.test(q)) {
      return { status: "ALLOWED", category: "Contextual Query" };
    }

    return { status: "BLOCKED", reason: "UNKNOWN_OUT_OF_DOMAIN" };
  }

  /**
   * Clinical Safety Guard
   * Evaluates if query contains acute personal symptoms, prescription demands,
   * or emergent warning signs needing structured clinical triage.
   */
  function evaluateClinicalRisk(query) {
    const q = (query || "").toLowerCase();

    const acuteIndicators = [
      /i('ve|\s+have|\s+am\s+having)\s+(chest\s+pain|left\s+arm\s+pain|shortness\s+of\s+breath|severe\s+headache|sudden\s+weakness|trouble\s+speaking|coughing\s+blood)/i,
      /(saya|aku)\s+(merasakan|mengalami|sakit|nyeri)\s+(dada|jantung|sesak\s+napas|pusing\s+hebat|lemah\s+sebelah|batuk\s+darah)/i,
      /chest\s+pain\s+for\s+(the\s+past|\d+)/i,
      /nyeri\s+dada\s+(selama|sejak|\d+)/i,
      /what\s+medicine\s+should\s+i\s+take/i,
      /obat\s+apa\s+yang\s+harus\s+saya\s+minum/i,
      /how\s+many\s+pills\s+can\s+i\s+take/i,
      /diagnose\s+me/i,
      /tolong\s+diagnosis\s+saya/i,
      /heart\s+attack\s+symptoms/i,
      /stroke\s+symptoms/i
    ];

    for (const pattern of acuteIndicators) {
      if (pattern.test(q)) {
        return { isAcute: true };
      }
    }

    return { isAcute: false };
  }

  /**
   * Generates Standard 3-Part Clinical Response (Exact Specification)
   */
  function generateClinicalSafeResponse(query, lang = "EN") {
    if (lang === "ID") {
      return {
        text: `> *"Nyeri dada memiliki beragam kemungkinan penyebab dan tidak dapat dievaluasi atau didiagnosis melalui percakapan teks. Karena ketidaknyamanan dada dapat menandakan kondisi medis yang serius—terutama jika disertai sesak napas, pusing, keringat dingin, atau nyeri yang menjalar ke lengan atau rahang—segera cari pertolongan medis darurat."*

---

### 1. Informasi Edukasi & Mekanisme Biologis
Nyeri dada dan ketidaknyamanan toraks memiliki beragam kemungkinan penyebab biologis, mulai dari iskemia miokard (penurunan suplai oksigen dan darah ke sel otot jantung akibat penyempitan arteri koroner), spasme esofagus, kostokondritis (radang tulang rawan iga), hingga emboli paru atau diseksi aorta.

### 2. Ketidakpastian Klinis & Batasan Sistem
Inside You dan Athena adalah platform edukasi sains, bukan penyedia layanan medis. Evaluasi klinis dan diagnosis pasti **tidak dapat dilakukan melalui percakapan teks**, karena memerlukan pemeriksaan fisik langsung, elektrokardiogram (EKG), enzim jantung (troponin), dan penunjang diagnostik radiologi.

### 3. Panduan Tanda Bahaya & Tindakan Darurat
> ⚠️ **TINDAKAN DARURAT DIPERLUKAN:**
> Jika Anda mengalami nyeri dada yang disertai **sesak napas, pusing/berkunang-kunang, keringat dingin, atau rasa nyeri yang menjalar ke lengan kiri, leher, atau rahang**, segera **hubungi layanan gawat darurat medis (ambulans 118/119) atau datangi Instalasi Gawat Darurat (IGD) rumah sakit terdekat sekarang juga.** Jangan mengemudi sendirian atau menunda pemeriksaan medis.`,
        isClinicalWarning: true
      };
    }

    return {
      text: `> *"Chest pain has numerous possible causes and cannot be evaluated or diagnosed through conversation. Because chest discomfort can indicate a serious medical condition—particularly if accompanied by shortness of breath, dizziness, cold sweats, or pain radiating to the arm or jaw—please seek emergency medical care immediately."*

---

### 1. Educational Information & Biological Mechanisms
Chest discomfort has numerous possible physiological and pathological etiologies, ranging from myocardial ischemia (reduced blood and oxygen delivery through coronary vessels to cardiac myocytes), acute coronary syndromes, esophageal spasm, costochondritis (cartilage inflammation), to pulmonary embolism or aortic dissection.

### 2. Declaration of Clinical Uncertainty
Inside You and Athena operate strictly as an educational platform and are not medical practitioners. Definitive clinical diagnoses **cannot be performed through text conversation**, as accurate evaluation requires bedside assessment, an immediate 12-lead electrocardiogram (ECG), cardiac biomarkers (such as Troponin), and clinical imaging.

### 3. Emergency Red-Flag Guidance
> ⚠️ **EMERGENCY RED-FLAG PROTOCOL:**
> If you are experiencing chest discomfort accompanied by **shortness of breath, dizziness, cold sweats, nausea, or pain radiating to the left arm, back, neck, or jaw**, **please seek emergency medical care immediately (call 911 or visit the nearest emergency department).** Do not attempt to self-medicate, drive yourself, or delay medical intervention.`,
      isClinicalWarning: true
    };
  }

  /**
   * Formats response with interactive 3D Action Chips
   */
  function enrichResponseWith3DActions(text, suggestedTargets = []) {
    let enriched = text;
    if (suggestedTargets && suggestedTargets.length > 0) {
      enriched += `\n\n<div class="athena-action-tray">`;
      suggestedTargets.forEach(target => {
        const id = target.id || target.canonicalId || target.name;
        const label = target.displayName || target.name || id;
        enriched += `<button class="athena-action-btn" data-action="inspect" data-target="${id}">🔍 Inspect in 3D: ${label}</button>`;
        enriched += `<button class="athena-action-btn secondary" data-action="learn" data-target="${id}">📖 Open Lesson</button>`;
      });
      enriched += `</div>`;
    }
    return enriched;
  }

  /**
   * Internal Biomedical Reasoning Engine
   * Generates dynamic, context-linked answers when offline or without Gemini API key.
   */
  function generateBuiltInResponse(query, context) {
    const lang = context.lang || "EN";
    const mode = context.mode || "simple";
    const qLower = query.toLowerCase();
    const activeStruct = context.structure;
    const activeName = context.structureName || (activeStruct && activeStruct.displayName) || "";
    const activeCanon = context.canonicalId || (activeStruct && activeStruct.canonicalId) || "";

    // 1. Check if user is asking implicitly about "this part", "what is this", "its function"
    const isImplicitQuery = /(this\s+part|this\s+structure|this\s+organ|what\s+is\s+this|what\s+does\s+it\s+do|its\s+function|fungsi\s+bagian\s+ini|apa\s+ini|organ\s+ini|fungsinya|posisinya)/i.test(qLower);

    // 2. Identify target structure from query or fallback to active context
    let targetKB = null;
    let targetNativeInfo = null;

    // Direct KB lookup
    for (const key of Object.keys(CURATED_BIOMEDICAL_KB)) {
      if (qLower.includes(key)) {
        targetKB = CURATED_BIOMEDICAL_KB[key];
        break;
      }
    }

    // Native Inside You structure lookup
    if (window.INSIDE_YOU_DATA && window.INSIDE_YOU_DATA.CANONICAL_REGISTRY) {
      for (const [id, entry] of Object.entries(window.INSIDE_YOU_DATA.CANONICAL_REGISTRY)) {
        const enName = (entry.displayName?.EN || id).toLowerCase();
        const idName = (entry.displayName?.ID || id).toLowerCase();
        if (qLower.includes(enName) || qLower.includes(idName) || (enName.length > 3 && qLower.includes(id))) {
          targetNativeInfo = entry;
          break;
        }
      }
    }

    // If query is implicit or no explicit target found in query text, anchor on active context
    if (isImplicitQuery || (!targetKB && !targetNativeInfo)) {
      if (CURATED_BIOMEDICAL_KB[activeCanon.toLowerCase()]) {
        targetKB = CURATED_BIOMEDICAL_KB[activeCanon.toLowerCase()];
      } else if (window.INSIDE_YOU_DATA && window.INSIDE_YOU_DATA.resolveCanonicalAnatomy) {
        targetNativeInfo = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(activeCanon) || activeStruct;
      }
    }

    // 3. CASE A: Target found in Curated External KB (Ulna, Patella, Sympathetic Reaction, Diabetes, etc.)
    if (targetKB) {
      const name = targetKB.name[lang] || targetKB.name.EN;
      let bridgeText = "";

      if (targetKB.bridges && activeCanon) {
        const canonKey = activeCanon.toLowerCase();
        if (targetKB.bridges[canonKey]) {
          bridgeText = `\n\n> 🔗 **${lang === "ID" ? "Keterkaitan Konteks 3D" : "3D Context Link"}:**\n> ${targetKB.bridges[canonKey][lang] || targetKB.bridges[canonKey].EN}`;
        }
      }

      if (targetKB.id === "ulna" && activeCanon.toLowerCase() === "radius") {
        bridgeText = lang === "ID"
          ? `\n\n> 🔗 **Keterkaitan Fungsional:**\n> Radius dan ulna bekerja sebagai pasangan fungsional untuk memungkinkan pronasi dan supinasi lengan bawah.`
          : `\n\n> 🔗 **Functional Link:**\n> The radius and ulna work together as a functional pair to enable pronation and supination of the forearm.`;
      }

      let resp = "";
      if (mode === "academic") {
        resp = `### 🔬 ${name} — ${lang === "ID" ? "Analisis Akademis & Fisiologis" : "Academic & Physiological Profile"}

**${lang === "ID" ? "Gambaran Struktural" : "Structural Overview"}:**
${targetKB.overview[lang] || targetKB.overview.EN}

**${lang === "ID" ? "Mekanisme Biomekanik & Fungsi" : "Mechanism & Biomechanical Function"}:**
${targetKB.mechanism[lang] || targetKB.mechanism.EN}

**${lang === "ID" ? "Posisi & Batas Anatomi" : "Anatomical Boundaries"}:**
${targetKB.position[lang] || targetKB.position.EN}

**🩺 ${lang === "ID" ? "Relevansi Klinis & Patologi" : "Clinical Relevance & Pathology"}:**
${targetKB.clinical[lang] || targetKB.clinical.EN}${bridgeText}`;
      } else {
        resp = `### 💡 ${name} — ${lang === "ID" ? "Konsep Inti" : "Core Concept"}

${targetKB.overview[lang] || targetKB.overview.EN}

* **${lang === "ID" ? "Cara Kerjanya" : "How it Works"}:** ${targetKB.mechanism[lang] || targetKB.mechanism.EN}
* **${lang === "ID" ? "Lokasi Tubuh" : "Location in Body"}:** ${targetKB.position[lang] || targetKB.position.EN}
* **🩺 ${lang === "ID" ? "Catatan Kesehatan" : "Health Insight"}:** ${targetKB.clinical[lang] || targetKB.clinical.EN}${bridgeText}`;
      }

      const actions = targetKB.nativeLink ? [{ id: targetKB.nativeLink, displayName: targetKB.nativeLink }] : [];
      return { text: enrichResponseWith3DActions(resp, actions), isClinicalWarning: false };
    }

    // 4. CASE B: Target found in Native Inside You Curriculum
    if (targetNativeInfo) {
      const displayName = (targetNativeInfo.displayName && (targetNativeInfo.displayName[lang] || targetNativeInfo.displayName.EN))
        || (targetNativeInfo.displayNameObj && (targetNativeInfo.displayNameObj[lang] || targetNativeInfo.displayNameObj.EN))
        || targetNativeInfo.displayName
        || activeName;

      let modeData = null;
      if (window.INSIDE_YOU_DATA && window.INSIDE_YOU_DATA.getStructureDetails) {
        const details = window.INSIDE_YOU_DATA.getStructureDetails(targetNativeInfo.canonicalId || targetNativeInfo.id);
        if (details) {
          const modeObj = mode === "academic" ? (details.academic || details.simple) : (details.simple || details.academic);
          if (modeObj && modeObj[lang]) {
            modeData = modeObj[lang];
          } else if (modeObj && modeObj.EN) {
            modeData = modeObj.EN;
          }
        }
      }

      let resp = "";
      if (modeData) {
        if (isImplicitQuery) {
          resp = lang === "ID"
            ? `Berdasarkan objek 3D yang sedang Anda pilih di kanvas (**${displayName}**):\n\n`
            : `Based on the active 3D structure highlighted on your canvas (**${displayName}**):\n\n`;
        }

        if (mode === "academic") {
          resp += `### 🔬 ${displayName} — ${lang === "ID" ? "Analisis Anatomis" : "Anatomical Analysis"}

* **${lang === "ID" ? "Gambaran Histologis & Umum" : "Histological Overview"}:** ${modeData.overview}
* **${lang === "ID" ? "Topografi & Posisi" : "Topography & Position"}:** ${modeData.position}
* **${lang === "ID" ? "Mekanisme Fisiologis" : "Physiological Mechanism"}:** ${modeData.mechanism}
* **🩺 ${lang === "ID" ? "Wawasan Klinis" : "Clinical Pathology"}:** ${modeData.health}`;
        } else {
          resp += `### 💡 ${displayName} — ${lang === "ID" ? "Penjelasan Intuitif" : "Core Anatomy"}

${modeData.overview}

* **${lang === "ID" ? "Fungsi Utama" : "Core Function"}:** ${modeData.mechanism}
* **${lang === "ID" ? "Letak & Hubungan" : "Location"}:** ${modeData.position}
* **🩺 ${lang === "ID" ? "Kesehatan & Perawatan" : "Health Tip"}:** ${modeData.health}`;
        }
      } else {
        resp = lang === "ID"
          ? `### 🩺 ${displayName}\n\nStruktur **${displayName}** merupakan bagian penting dari ${context.systemName || "sistem anatomi"}. Struktur ini bekerja secara terintegrasi dengan jaringan sekitarnya untuk menjaga kestabilan fisiologis tubuh.`
          : `### 🩺 ${displayName}\n\nThe **${displayName}** is a vital anatomical structure within the ${context.systemName || "body"}. It functions in close coordination with adjacent tissues to support normal physiological homeostasis.`;
      }

      const actions = [{
        id: targetNativeInfo.canonicalId || targetNativeInfo.id,
        displayName: displayName
      }];

      return { text: enrichResponseWith3DActions(resp, actions), isClinicalWarning: false };
    }

    // 5. CASE C: General Biomedical Synthesis
    const resp = lang === "ID"
      ? `### 🩺 Analisis Biomedis: ${query}\n\nDalam fisiologi dan kedokteran manusia, mekanisme ini melibatkan koordinasi sistem organ, homeostasis seluler, dan jalur biokimia terpadu.`
      : `### 🩺 Biomedical Analysis: ${query}\n\nIn human physiology and medicine, this biological mechanism relies on organ system coordination, cellular homeostasis, and biochemical pathways.`;

    return { text: resp, isClinicalWarning: false };
  }

  /**
   * Gemini API Integration (Direct Runtime Ingestion: gemini-2.5-flash)
   * Connects to Google GenAI with zero setup overhead and dynamic context injection.
   */
  async function callGeminiAPI(apiKey, query, context) {
    const lang = context.lang || "EN";
    const mode = context.mode || "simple";
    const activeName = context.structureName || "";
    const activeSystem = context.systemName || "";
    const model = getModel();

    const systemPrompt = `You are Athena, the interactive anatomy and health tutor for Inside You.

STRICT OPERATING RULES:
1. DIRECT OPENING (NO BOILERPLATE):
   - NEVER start routine answers with greetings, self-introductions, or role reminders (e.g., do NOT say "Halo! Saya Athena...", "Saya asisten belajar Inside You...").
   - Jump directly into the explanation in the very first sentence.

2. ORGANIC CONTEXT USAGE (NO RIGID TEMPLATES):
   - You have access to the active 3D model context (currently: "${activeName}" - ${activeSystem}), but do NOT announce it mechanically (never say: "Meskipun model 3D saat ini menampilkan...").
   - If the user asks about the active part, explain it directly.
   - If the user asks about an unrelated anatomical part, answer their question directly first. Only link back to the active model if there is a genuine anatomical/functional connection, woven in naturally without formulaic phrases.

3. DOMAIN BOUNDARIES:
   - Only answer queries related to: human anatomy, physiology, medicine, pathology, nutrition, biomedical science, and health news.
   - For queries outside these domains (coding, gaming, politics, general trivia), politely refuse in 1-2 brief sentences and redirect back to anatomy/health.

4. MEDICAL SAFETY:
   - Do NOT provide medical diagnoses or prescribe medications for active symptoms. Provide educational context, mention uncertainty, and advise professional medical consultation for acute symptoms.

5. LANGUAGE:
   - Always respond in the language used by the user (Indonesian if asked in Indonesian, English if asked in English).`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
    let response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: `${systemPrompt}\n\nUser Question: ${query}` }] }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1000
        }
      })
    });

    // If configured model returned 404, seamlessly retry with active fallback model
    if (!response.ok && (response.status === 404 || response.status === 400)) {
      const fallbackEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;
      try {
        const fallbackRes = await fetch(fallbackEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
            "x-goog-api-key": apiKey
          },
          body: JSON.stringify({
            contents: [
              { role: "user", parts: [{ text: `${systemPrompt}\n\nUser Question: ${query}` }] }
            ],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 1000
            }
          })
        });
        if (fallbackRes.ok) {
          response = fallbackRes;
        }
      } catch (e) {}
    }

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidate) throw new Error("Empty response from Gemini API");

    return candidate;
  }

  /**
   * Main Public Query Pipeline
   */
  async function askAthena(query) {
    const q = (query || "").trim();
    if (!q) return null;

    const context = (window.INSIDE_YOU_APP && window.INSIDE_YOU_APP.getActiveContext)
      ? window.INSIDE_YOU_APP.getActiveContext()
      : {
          structureName: "",
          canonicalId: "",
          systemName: "",
          mode: "simple",
          lang: "EN"
        };

    const lang = context.lang || "EN";

    // 1. STEP 1: DOMAIN CLASSIFIER
    const domainCheck = classifyIntent(q);
    if (domainCheck.status === "BLOCKED") {
      return {
        text: REFUSAL_TEMPLATES[lang],
        isBlocked: true,
        isClinicalWarning: false
      };
    }

    // 2. STEP 2: CLINICAL SAFETY GUARD
    const clinicalCheck = evaluateClinicalRisk(q);
    if (clinicalCheck.isAcute) {
      return generateClinicalSafeResponse(q, lang);
    }

    // 3. STEP 3: REASONING ENGINE (Gemini 2.5 Flash API with Fallback to Built-in Biomedical Core)
    const apiKey = getApiKey();
    if (apiKey) {
      try {
        const geminiText = await callGeminiAPI(apiKey, q, context);
        return {
          text: enrichResponseWith3DActions(geminiText, [{ id: context.canonicalId, displayName: context.structureName }]),
          isClinicalWarning: false
        };
      } catch (err) {
        console.warn("Athena: Gemini API call failed or offline, falling back to built-in knowledge aggregator:", err);
      }
    }

    // Built-in high-fidelity biomedical reasoning aggregator
    return generateBuiltInResponse(q, context);
  }

  // Master Key & Model Configuration (Zero Setup Overhead - Hardcoded Master Key)
  function getApiKey() {
    return ATHENA_API_KEY;
  }

  function getModel() {
    return ATHENA_MODEL_NAME;
  }

  return {
    ask: askAthena,
    classifyIntent: classifyIntent,
    evaluateClinicalRisk: evaluateClinicalRisk,
    getApiKey: getApiKey,
    getModel: getModel,
    REFUSAL_TEMPLATES: REFUSAL_TEMPLATES
  };
})();

// Global safety aliases
if (typeof window.athena === "undefined") {
  window.athena = window.ATHENA_ENGINE;
}
if (typeof window.athenaService === "undefined") {
  window.athenaService = window.ATHENA_ENGINE;
}
