/**
 * INSIDE YOU — Course-owned Lesson Additions & Synchronous Knowledge Layer
 * Kept strictly modular and separate from 3D engine and UI view layers.
 * Grounded in OpenStax Anatomy & Physiology 2e.
 */
(function () {
  const lesson = (systemId, organId, nameObj, illustration, simpleEN, academicEN, simpleID, academicID, quizEN, quizID, relatedStructures = []) => ({
    systemId,
    organId,
    name: typeof nameObj === "string" ? { EN: nameObj, ID: nameObj } : nameObj,
    illustration,
    simple: { EN: simpleEN, ID: simpleID },
    academic: { EN: academicEN, ID: academicID },
    relatedStructures,
    quiz: {
      EN: quizEN,
      ID: quizID
    }
  });



  const extensions = {
    // 1. VISION & OPTICS
    "Cornea": lesson("vision", "eye", { EN: "Cornea", ID: "Kornea" }, "👁️✨",
      { overview: "The cornea can be thought of as the ultra-clear front window of a camera lens. It is completely transparent so light rays can pass cleanly into the eye without distortion.", position: "Situated at the very front of the eyeball, shielding the iris and pupil from dust and physical impact.", mechanism: "Because of its curved dome shape, it performs approximately two-thirds of the eye's refractive power, bending incoming light towards the retina.", health: "Scratches (corneal abrasions) or infections can obscure vision. Wearing protective eye gear and avoiding rough rubbing keeps it healthy." },
      { overview: "The cornea is an avascular, highly innervated fibrous tunic structure boasting a refractive index of ~1.376, contributing 40-44 Diopters (~65-75%) of total ocular refractive power.", position: "Anterior segment of the fibrous tunic, continuous posteriorly with the opaque sclera at the corneoscleral limbus.", mechanism: "Consists of 5 histological layers: Epithelium, Bowman's layer, Stroma (90% thickness), Descemet's membrane, and Endothelium. Endothelial Na+/K+-ATPase pumps preserve deturgescence (78% hydration) to maintain collagen lattice transparency.", health: "Keratoconus causes progressive stromal thinning and ectasia, resulting in irregular astigmatism. Management includes corneal cross-linking, rigid gas-permeable lenses, or penetrating keratoplasty." },
      { overview: "Kornea dapat dianalogikan sebagai kaca depan lensa kamera yang sangat jernih. Kornea sepenuhnya transparan agar sinar cahaya dapat masuk ke mata tanpa distorsi.", position: "Terletak di bagian paling depan bola mata, melindungi iris dan pupil dari debu dan benturan fisik.", mechanism: "Bentuk kubah melengkungnya melakukan dua pertiga daya pembiasan (refraksi) cahaya yang masuk ke retina.", health: "Goresan atau infeksi kornea dapat mengaburkan penglihatan. Menggunakan kacamata pelindung dan tidak mengucek mata kasar menjaga kornea tetap sehat." },
      { overview: "Kornea adalah tunika fibrosa avaskular yang kaya persarafan dengan indeks bias ~1.376, menyumbang 40-44 Dioptri (~65-75%) dari total daya refraksi mata.", position: "Segmen anterior tunika fibrosa, berlanjut ke posterior dengan sklera opak pada limbus korneoskleral.", mechanism: "Tersusun atas 5 lapisan: Epitel, Lapisan Bowman, Stroma (90% ketebalan), Membran Descemet, dan Endotel. Pompa Na+/K+-ATPase endotel menjaga tingkat hidrasi 78% (deturgesensi) agar kisi kolagen tetap transparan.", health: "Keratokonus menyebabkan penipisan stroma dan ektasia kornea yang memicu astigmatisme ireguler. Terapi meliputi cross-linking kolagen, lensa RGP, hingga keratoplasti." },
      [
        { question: "What proportion of the eye's total optical focusing power is provided by the cornea?", options: ["Approximately 10-20%", "Approximately 65-75%", "Exactly 100%", "Less than 5%"], answerIndex: 1, explanation: "The curvature and refractive index of the cornea provide about two-thirds (65-75% / ~43 Diopters) of total optical power." },
        { question: "Why is the corneal stroma completely transparent in a healthy eye?", options: ["Because it is filled with blood vessels", "Due to uniform collagen fibril spacing and active endothelial deturgescence", "Because light bypasses it completely", "It contains dark melanin"], answerIndex: 1, explanation: "Uniform collagen fibril spacing with destructive interference of scattered light keeps the stroma crystal clear." },
        { question: "Which endothelial mechanism actively maintains corneal clarity?", options: ["Na+/K+-ATPase metabolic pump", "Passive osmosis only", "Calcium precipitation", "Hemoglobin binding"], answerIndex: 0, explanation: "The corneal endothelial Na+/K+-ATPase pump pumps excess fluid out of the stroma back into the anterior chamber." }
      ],
      [
        { question: "Berapa proporsi daya pembiasan cahaya total mata yang disumbangkan oleh kornea?", options: ["Sekitar 10-20%", "Sekitar 65-75%", "Tepat 100%", "Kurang dari 5%"], answerIndex: 1, explanation: "Kelengkungan kornea menyumbangkan sekitar dua pertiga (65-75% atau ~43 Dioptri) dari total daya refraksi mata." },
        { question: "Mengapa stroma kornea tampak transparan jernih pada mata yang sehat?", options: ["Karena dipenuhi pembuluh darah", "Karena susunan matriks serat kolagen teratur dan regulasi cairan ketat (deturgesensi)", "Karena cahaya tidak melewatinya", "Karena mengandung melanin gelap"], answerIndex: 1, explanation: "Penyusunan serat kolagen berjarak seragam dengan pompa endotel menjaga transparansi kornea." },
        { question: "Mekanisme endotel mana yang mempertahankan kejernihan dan deturgesensi kornea?", options: ["Pompa metabolik Na+/K+-ATPase", "Difusi pasif osmosis saja", "Pengendapan kalsium", "Pengikatan hemoglobin"], answerIndex: 0, explanation: "Pompa Na+/K+-ATPase endotel secara aktif memompa kelebihan cairan keluar dari stroma." }
      ],
      ["iris", "pupil", "lens", "sclera"]
    ),

    "Iris": lesson("vision", "eye", { EN: "Iris", ID: "Iris" }, "🧿🌈",
      { overview: "The iris is the colored circular curtain of the eye. It functions just like an adjustable camera diaphragm, controlling how much light enters.", position: "Suspended between the cornea in front and the crystalline lens behind, surrounding the central pupil opening.", mechanism: "Tiny smooth muscles contract in bright light to narrow the pupil and dilate in dim light to maximize visibility.", health: "Eye color is determined by melanin concentration. Inflammation (uveitis or iritis) causes redness, pain, and light sensitivity." },
      { overview: "The iris is the most anterior component of the uveal tract (vascular tunic), acting as an adjustable optical aperture regulating retinal illuminance.", position: "Divides the anterior chamber from the posterior chamber of the eye, attached peripherally to the ciliary body at the iris root.", mechanism: "Parasympathetic fibers (CN III) constrict the circular sphincter pupillae (miosis); sympathetic fibers stimulate the radial dilator pupillae (mydriasis).", health: "Anterior uveitis presents with ciliary flush, keratic precipitates, and hypopyon. Anisocoria can indicate Horner's syndrome or oculomotor nerve compression." },
      { overview: "Iris adalah tirai melingkar berwarna pada mata. Iris bekerja seperti diafragma kamera yang mengatur banyaknya cahaya yang masuk.", position: "Terletak di antara kornea di depan dan lensa kristalina di belakang, mengelilingi lubang pupil.", mechanism: "Otot polos kecil berkontraksi saat terang untuk mengecilkan pupil dan berelaksasi saat gelap untuk melebarkannya.", health: "Warna iris ditentukan konsentrasi melanin. Peradangan seperti iritis menyebabkan mata merah, nyeri, dan silau." },
      { overview: "Iris adalah komponen paling anterior dari traktus uvea, bertindak sebagai celah optik pengatur iluminasi retina.", position: "Memisahkan bilik mata depan dan belakang, melekat di perifer pada badan siliar di akar iris.", mechanism: "Serat parasimpatis (N. III) mengontraksi sfingter pupila (miosis); serat simpatis merangsang dilator pupila radialis (midriasis).", health: "Uveitis anterior ditandai ciliary flush dan presipitat keratik. Anisokoria dapat mengindikasikan sindrom Horner." },
      [
        { question: "Which muscle in the iris constricts the pupil (miosis) under bright light?", options: ["Dilator pupillae", "Sphincter pupillae", "Ciliary muscle", "Superior oblique"], answerIndex: 1, explanation: "The circular sphincter pupillae muscle constricts the pupil under parasympathetic control." },
        { question: "Which pigment determines individual variation in human eye color within the iris?", options: ["Melanin", "Hemoglobin", "Carotene", "Rhodopsin"], answerIndex: 0, explanation: "The concentration and density of melanin in the anterior border layer dictate eye color." },
        { question: "What division triggers pupillary dilation (mydriasis) during low-light states?", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Enteric nervous system", "Somatic motor system"], answerIndex: 0, explanation: "Sympathetic stimulation activates radial dilator pupillae fibers to widen the pupil." }
      ],
      [
        { question: "Otot iris mana yang mengecilkan pupil (miosis) di bawah cahaya terang?", options: ["Dilator pupila", "Sfingter pupila", "Otot siliaris", "Obliquus superior"], answerIndex: 1, explanation: "Otot sfingter pupila melingkar yang dipersarafi parasimpatis bertugas mengecilkan pupil saat terang." },
        { question: "Pigmen apa yang menentukan variasi warna mata manusia pada stroma iris?", options: ["Melanin", "Hemoglobin", "Karoten", "Rodopsin"], answerIndex: 0, explanation: "Konsentrasi dan kepadatan pigmen melanin menentukan warna mata." },
        { question: "Divisi saraf otonom mana yang merangsang pelebaran pupil (midriasis) saat gelap?", options: ["Sistem saraf simpatis", "Sistem saraf parasimpatis", "Sistem saraf enterik", "Sistem saraf somatik"], answerIndex: 0, explanation: "Rangsangan simpatis mengaktifkan serat otot dilator pupila untuk memperluas diameter pupil." }
      ],
      ["cornea", "pupil", "lens"]
    ),

    "Lens": lesson("vision", "eye", { EN: "Crystalline Lens", ID: "Lensa Kristalina" }, "🔍✨",
      { overview: "The crystalline lens is the eye's autofocus lens. It changes its thickness dynamically to bring near objects and distant vistas into sharp focus.", position: "Suspended right behind the iris and pupil by tiny elastic zonule fibers.", mechanism: "When focusing up close, surrounding ciliary muscles squeeze, allowing the flexible lens to bulge; when looking far away, it flattens out.", health: "As we age, the lens loses flexibility (presbyopia) or becomes cloudy due to clumped proteins (cataracts)." },
      { overview: "The crystalline lens is a biconvex, transparent, avascular structure with high protein concentration (crystallins ~35%), providing ~15-20 Diopters of variable refractive power.", position: "Situated in the hyaloid fossa behind the iris, anchored to the ciliary body by the suspensory zonules of Zinn.", mechanism: "Accommodation (Helmholtz theory): Ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to increase anterior-posterior curvature for near vision.", health: "Cataractogenesis involves photo-oxidative stress and crystallin aggregation, treated by phacoemulsification with intraocular lens (IOL) implantation." },
      { overview: "Lensa kristalina adalah lensa autofokus mata yang mengubah ketebalannya secara dinamis untuk memfokuskan objek dekat maupun jauh.", position: "Tergantung tepat di belakang iris dan pupil oleh serat-serat halus zonula Zinn.", mechanism: "Saat melihat dekat, otot siliaris berkontraksi sehingga lensa mencembung; saat melihat jauh, lensa memipih.", health: "Seiring usia, kelenturan lensa berkurang (presbiopia) atau menjadi keruh akibat penggumpalan protein (katarak)." },
      { overview: "Lensa kristalina adalah struktur bikonveks, transparan, dan avaskular dengan konsentrasi protein kristalin tinggi (~35%), memberikan 15-20 Dioptri daya refraksi dinamis.", position: "Terletak di fosa hialoid di belakang iris, terhubung ke badan siliar melalui zonula Zinn.", mechanism: "Akomodasi (Teori Helmholtz): Kontraksi otot siliar mengendurkan tarikan zonula, memungkinkan kapsul lensa mencembung untuk penglihatan dekat.", health: "Kataraktogenesis dipicu stres foto-oksidatif dan agregasi protein kristalin, diterapi dengan fakoemulsifikasi dan implan lensa IOL." },
      [
        { question: "According to the Helmholtz mechanism of accommodation, what happens when focusing on nearby objects?", options: ["The ciliary muscle contracts, relaxing zonular tension so the lens becomes more spherical", "The ciliary muscle relaxes, pulling zonules tight", "The ciliary muscle detaches from sclera", "The lens crystallins dissolve instantly"], answerIndex: 0, explanation: "Ciliary muscle contraction decreases ring diameter, releasing zonular tension so the elastic lens rounds up." },
        { question: "What predominant structural proteins maintain lens transparency?", options: ["Crystallins (alpha, beta, gamma)", "Collagen type II", "Myoglobin", "Keratin"], answerIndex: 0, explanation: "Crystallin proteins comprise over 90% of soluble lens proteins." },
        { question: "What age-related condition causes opacification of the crystalline lens?", options: ["Cataract", "Glaucoma", "Macular Degeneration", "Keratoconus"], answerIndex: 0, explanation: "Cataracts represent age-related denaturation and aggregation of lens crystallins." }
      ],
      [
        { question: "Menurut mekanisme akomodasi Helmholtz, apa yang terjadi pada otot siliaris saat mata fokus melihat dekat?", options: ["Otot siliaris berkontraksi, mengendurkan tegangan zonula sehingga lensa mencembung", "Otot siliaris relaksasi, menarik zonula kencang agar lensa memipih", "Otot siliaris terlepas dari sklera", "Protein kristalin lensa larut"], answerIndex: 0, explanation: "Kontraksi cincin otot siliaris mengendurkan tarikan zonula sehingga kapsul lensa mencembung." },
        { question: "Protein struktural utama apa yang menjaga kejernihan dan indeks bias lensa kristalina?", options: ["Kristalin (alfa, beta, gama)", "Kolagen tipe II", "Mioglobin", "Keratin"], answerIndex: 0, explanation: "Protein kristalin membentuk lebih dari 90% protein terlarut lensa." },
        { question: "Kondisi kekeruhan lensa akibat penggumpalan protein seiring penuaan disebut?", options: ["Katarak", "Glaukoma", "Degenerasi Makula", "Keratokonus"], answerIndex: 0, explanation: "Katarak adalah kekeruhan pada lensa mata akibat denaturasi dan agregasi protein kristalin." }
      ],
      ["iris", "pupil", "cornea"]
    ),

    // 2. CARDIOVASCULAR & HEART
    "Right Ventricle": lesson("cardio", "heart", { EN: "Right Ventricle", ID: "Ventrikel Kanan" }, "🫁🩸",
      { overview: "The right ventricle is the lung-delivery pump. It receives deoxygenated blood from the right atrium and propels it to the lungs for fresh oxygen.", position: "Forms the anterior surface of the heart, anterior and medial to the left ventricle.", mechanism: "Contracts to pump blood through the pulmonary valve into the pulmonary trunk towards both lungs.", health: "Pulmonary embolism or chronic lung disease can overstrain the right ventricle (cor pulmonale)." },
      { overview: "The right ventricle is a crescent-shaped chamber operating at low systolic pressures (~25 mmHg) designed for low-resistance pulmonary circulation.", position: "Anterior cardiac chamber separated from right atrium by tricuspid valve and bounded by trabeculae carneae.", mechanism: "Ejects stroke volume through the pulmonary trunk into pulmonary arterial circulation for alveolar gas exchange.", health: "Pulmonary hypertension leads to right ventricular hypertrophy and right-sided heart failure (edema, jugular distension)." },
      { overview: "Ventrikel kanan adalah pompa pengirim darah ke paru-paru. Menerima darah miskin oksigen dari atrium kanan dan mendorongnya ke paru-paru.", position: "Membentuk permukaan anterior jantung, berada di depan dan medial ventrikel kiri.", mechanism: "Berkontraksi memompa darah melalui katup pulmonal ke trunkus pulmonalis menuju kedua paru.", health: "Penyakit paru kronis atau emboli paru dapat membebani kerja ventrikel kanan (kor pulmonale)." },
      { overview: "Ventrikel kanan adalah ruang berbentuk bulan sabit yang bekerja pada tekanan sistolik rendah (~25 mmHg) untuk sirkulasi paru beresistensi rendah.", position: "Ruang anterior jantung yang dibatasi katup trikuspidalis dari atrium kanan serta memiliki trabekula karnea.", mechanism: "Menyemprotkan volume sekuncup ke trunkus pulmonalis menuju sirkulasi arteri pulmonal untuk pertukaran gas di alveolus.", health: "Hipertensi pulmonal memicu hipertrofi ventrikel kanan dan gagal jantung kanan." },
      [
        { question: "Where does the right ventricle pump deoxygenated blood?", options: ["Into the pulmonary trunk towards the lungs", "Directly into systemic aorta", "Into the left atrium", "Into carotid artery"], answerIndex: 0, explanation: "The right ventricle propels venous blood into the pulmonary circulation for oxygen replenishment." },
        { question: "Which structure prevents inversion of tricuspid valve leaflets during systole?", options: ["Chordae tendineae anchored to papillary muscles", "Aortic arch", "Corpus callosum", "Trabecular meshwork"], answerIndex: 0, explanation: "Tendon-like chordae tendineae tether the valve cusps to papillary muscles in the ventricular wall." },
        { question: "What is the typical systolic pressure of the normal right ventricle?", options: ["Approximately 20-25 mmHg", "120 mmHg", "200 mmHg", "2 mmHg"], answerIndex: 0, explanation: "The low-resistance pulmonary circuit requires only ~20-25 mmHg systolic pressure from the right ventricle." }
      ],
      [
        { question: "Ke manakah ventrikel kanan memompa darah yang miskin oksigen?", options: ["Ke trunkus pulmonalis menuju paru-paru", "Langsung ke aorta sistemik", "Ke atrium kiri", "Ke arteri karotis"], answerIndex: 0, explanation: "Ventrikel kanan memompa darah vena ke sirkulasi paru untuk pengisian ulang oksigen." },
        { question: "Struktur anatomi apa yang mencegah pembalikan daun katup trikuspidalis saat sistole?", options: ["Korda tendinea yang tertambat pada otot papilaris", "Arkus aorta", "Korpus kalosum", "Trabecular meshwork"], answerIndex: 0, explanation: "Serat korda tendinea menambatkan tepi katup ke otot papilaris di dinding ventrikel." },
        { question: "Berapa tekanan sistolik normal yang dihasilkan oleh ventrikel kanan?", options: ["Sekitar 20-25 mmHg", "120 mmHg", "200 mmHg", "2 mmHg"], answerIndex: 0, explanation: "Sirkuit paru beresistensi rendah hanya membutuhkan tekanan sistolik ~20-25 mmHg dari bilik kanan." }
      ],
      ["left_ventricle", "aorta"]
    ),

    "Aorta": lesson("cardio", "heart", { EN: "Aorta", ID: "Aorta" }, "🚀🩸",
      { overview: "The aorta is the body's main superhighway artery. It is the widest blood vessel, delivering oxygen-rich blood to the brain, heart, arms, organs, and legs.", position: "Arises from the top of the left ventricle, arches upward over the heart, and travels down through the chest and abdomen.", mechanism: "Its elastic walls expand with every heartbeat to absorb high pressure, then recoil to keep blood flowing smoothly between beats.", health: "Healthy blood pressure and avoiding smoking protect aortic walls from weakening, aneurysms, or dissections." },
      { overview: "The aorta is the primary systemic elastic artery, featuring abundant concentric elastin lamellae in its tunica media providing the Windkessel effect.", position: "Originates at aortic root, traverses ascending aorta, aortic arch, and descending thoracic/abdominal aorta.", mechanism: "Dampens high systolic pulsatile pressure into continuous peripheral capillary flow via elastic recoil during diastole.", health: "Aortic dissection occurs when a tear in the tunica intima creates a false lumen, requiring emergent repair." },
      { overview: "Aorta adalah jalan tol arteri utama tubuh. Pembuluh darah terbesar yang menyalurkan darah kaya oksigen ke seluruh organ tubuh.", position: "Berasal langsung dari ventrikel kiri, melengkung di atas jantung, dan turun melintasi rongga dada dan perut.", mechanism: "Dinding elastisnya meregang pada setiap detakan untuk menyerap tekanan tinggi, lalu membal kembali menjaga aliran darah tetap stabil.", health: "Menjaga tekanan darah normal mencegah pelemahan dinding aorta, aneurisma, atau diseksi aorta." },
      { overview: "Aorta adalah arteri elastis sistemik utama dengan banyak lamela elastin pada tunika media yang menghasilkan efek Windkessel.", position: "Berasal dari pangkal aorta, melalui aorta asenden, arkus aorta, dan aorta desenden torakalis/abdominalis.", mechanism: "Meredam tekanan pulsasi sistolik tinggi menjadi aliran kapiler kontinu melalui recoil elastis saat diastole.", health: "Diseksi aorta terjadi saat robekan tunika intima menciptakan lumen palsu, memerlukan penanganan bedah darurat." },
      [
        { question: "What physiological phenomenon allows the aorta to maintain continuous flow during diastole?", options: ["Windkessel effect (elastic recoil)", "Peristalsis", "Osmotic diuresis", "Active skeletal pumping"], answerIndex: 0, explanation: "The Windkessel effect describes how the elastic aortic wall expands in systole and recoils in diastole to sustain flow." },
        { question: "Which is the first branch arising from the arch of the aorta?", options: ["Brachiocephalic trunk", "Left subclavian artery", "Left common carotid artery", "Femoral artery"], answerIndex: 0, explanation: "The brachiocephalic trunk is the first and largest branch arising from the superior convexity of the aortic arch." },
        { question: "What vascular emergency involves a tear in the intima of the aortic wall?", options: ["Aortic Dissection", "Varicose veins", "Raynaud's disease", "Phlebitis"], answerIndex: 0, explanation: "Aortic dissection separates the layers of the aortic wall and requires immediate medical treatment." }
      ],
      [
        { question: "Fenomena fisiologis apa yang memungkinkan aorta mempertahankan aliran darah saat diastole?", options: ["Efek Windkessel (recoil elastis dinding arteri)", "Peristaltik", "Diuresis osmotik", "Pompa otot rangka aktif"], answerIndex: 0, explanation: "Efek Windkessel adalah kemampuan dinding elastis aorta meregang saat sistole dan membal saat diastole." },
        { question: "Manakah cabang arteri pertama yang keluar dari lengkung (arkus) aorta?", options: ["Trunkus brakiosefalika", "Arteri subklavia kiri", "Arteri karotis komunis kiri", "Arteri femoralis"], answerIndex: 0, explanation: "Trunkus brakiosefalika adalah cabang pertama dan terbesar dari arkus aorta." },
        { question: "Kondisi darurat vaskular fatal apa yang terjadi akibat robeknya lapisan intima dinding aorta?", options: ["Diseksi Aorta", "Varises", "Penyakit Raynaud", "Flebitis"], answerIndex: 0, explanation: "Diseksi aorta memisahkan lapisan dinding aorta dan merupakan kondisi gawat darurat bedah vaskular." }
      ],
      ["left_ventricle", "coronary_arteries"]
    ),

    // 3. NERVOUS SYSTEM
    "Cerebellum": lesson("nervous", "brain", { EN: "Cerebellum", ID: "Serebelum (Otak Kecil)" }, "🤸🎯",
      { overview: "The cerebellum is your internal precision balance and coordination gyro. It fine-tunes smooth muscle movements, balance, posture, and motor skills.", position: "Located at the back of your head, tucked beneath the occipital lobes of the cerebrum.", mechanism: "Compares what motor commands your brain intended to do with actual muscle feedback, correcting errors in milliseconds.", health: "Damage or alcohol toxicity causes ataxia (clumsiness, slurred speech, unsteadiness, and loss of fine motor coordination)." },
      { overview: "The cerebellum contains over 50% of total brain neurons in a foliate trilaminar cortex (molecular, Purkinje, granular layers) and four deep cerebellar nuclei.", position: "Located in posterior cranial fossa, dorsal to pons and medulla, separated from cerebrum by tentorium cerebelli.", mechanism: "Computes motor error signals via climbing fibers and mossy fibers, modulating inhibitory Purkinje outputs to deep nuclei.", health: "Cerebellar strokes or ataxia present with dysmetria, intention tremor, dysdiadochokinesia, and nystagmus." },
      { overview: "Serebelum adalah giroskop presisi keseimbangan dan koordinasi tubuh. Menghaluskan gerakan otot, keseimbangan, postur, dan keterampilan motorik.", position: "Terletak di bagian belakang kepala, berada di bawah lobus oksipital otak besar.", mechanism: "Membandingkan perintah motorik yang diinginkan otak dengan umpan balik otot, mengoreksi ketepatan waktu dalam milidetik.", health: "Kerusakan atau alkohol menyebabkan ataksia (jalan sempoyongan, bicara cadel, dan hilangnya koordinasi gerak halus)." },
      { overview: "Serebelum memuat lebih dari 50% neuron otak yang tersusun dalam korteks 3 lapis (molekular, sel Purkinje, granular) serta empat nukleus dalam.", position: "Terletak di fosa kranialis posterior, di dorsal pons dan medula oblongata, di bawah tentorium serebeli.", mechanism: "Menghitung sinyal kesalahan motorik melalui serat panjat dan serat lumut, memodulasi keluaran inhibisi sel Purkinje.", health: "Stroke serebelar bermanifestasi sebagai dismetria, tremor intensional, disdiadokokinesis, dan nistagmus." },
      [
        { question: "Which specialized neurons form the sole inhibitory output from the cerebellar cortex?", options: ["Purkinje cells", "Granule cells", "Pyramidal neurons", "Schwann cells"], answerIndex: 0, explanation: "Purkinje cells project GABAergic inhibitory axons to deep cerebellar nuclei." },
        { question: "What is the primary function executed by the cerebellum?", options: ["Coordination, error correction, and timing of movements", "Hormone secretion", "Vision phototransduction", "Kidney filtration"], answerIndex: 0, explanation: "The cerebellum fine-tunes movement velocity, timing, balance, and motor memory." },
        { question: "What clinical condition characterized by uncoordinated movements results from cerebellar damage?", options: ["Cerebellar Ataxia", "Aphasia", "Glaucoma", "Anemia"], answerIndex: 0, explanation: "Ataxia is the signature clinical sign of cerebellar dysfunction causing loss of coordination." }
      ],
      [
        { question: "Neuron khusus apa yang membentuk satu-satunya jalur keluaran inhibisi dari korteks serebelum?", options: ["Sel Purkinje", "Sel Granular", "Neuron Piramidal", "Sel Schwann"], answerIndex: 0, explanation: "Sel Purkinje menghasilkan sinyal inhibisi GABAergik ke nukleus serebelar dalam." },
        { question: "Apakah fungsi utama yang dijalankan oleh serebelum (otak kecil)?", options: ["Koordinasi, koreksi kesalahan, dan pengaturan waktu gerakan", "Sekresi hormon langsung", "Fototransduksi penglihatan", "Penyaringan ginjal"], answerIndex: 0, explanation: "Serebelum menyempurnakan kecepatan gerak, keseimbangan postur, dan memori motorik." },
        { question: "Kondisi klinis hilangnya koordinasi gerak halus akibat kerusakan serebelum disebut?", options: ["Ataksia Serebelar", "Afasia", "Glaukoma", "Anemia"], answerIndex: 0, explanation: "Ataksia adalah tanda khas disfungsi serebelar yang ditandai hilangnya koordinasi dan keseimbangan." }
      ],
      ["cerebrum", "brainstem"]
    ),

    "Brainstem": lesson("nervous", "brain", { EN: "Brainstem", ID: "Batang Otak" }, "🫁💓",
      { overview: "The brainstem is your vital autopilot lifeline. It controls essential survival functions like breathing, heart rate, blood pressure, and sleep-wake cycles.", position: "Stands at the base of the brain, seamlessly connecting the cerebrum above to the spinal cord below.", mechanism: "Houses core autonomic centers that automatically monitor oxygen, carbon dioxide, and blood pressure 24/7 without needing conscious thought.", health: "Brainstem reflexes (pupillary response, corneal reflex, gag reflex) are essential clinical markers of neurological vitality." },
      { overview: "The brainstem comprises Midbrain (mesencephalon), Pons (metencephalon), and Medulla Oblongata (myelencephalon), housing cranial nerve nuclei III-XII and the Reticular Activating System (RAS).", position: "Spans posterior cranial fossa anterior to cerebellum, passing through foramen magnum to merge into spinal cord.", mechanism: "Medullary respiratory groups regulate ventilatory rhythm based on central chemoreceptor pH/pCO2 detection. Cardiac centers modulate vagal and sympathetic tone.", health: "Brainstem herniation compresses the medulla, causing fatal respiratory and cardiovascular arrest (Cushing's triad)." },
      { overview: "Batang otak adalah pusat kendali kelangsungan hidup otomatis tubuh. Mengatur fungsi vital seperti napas, detak jantung, tekanan darah, dan siklus bangun-tidur.", position: "Berdiri di dasar otak, menghubungkan serebrum dengan sumsum tulang belakang.", mechanism: "Memuat pusat otonom vital yang memantau kadar oksigen, CO2, dan tekanan darah 24 jam sehari secara otomatis.", health: "Refleks batang otak (refleks cahaya pupil, refleks kornea, refleks muntah) adalah penanda klinis fungsi neurologis." },
      { overview: "Batang otak terdiri atas Otak Tengah (mesensefalon), Pons (metensefalon), dan Medula Oblongata (mielensefalon), memuat inti saraf kranial III-XII dan Sistem Aktivasi Retikular (RAS).", position: "Berada di fosa kranialis posterior di anterior serebelum, melewati foramen magnum menjadi medula spinalis.", mechanism: "Pusat respirasi medula mengatur ritme pernapasan berdasarkan deteksi pH/pCO2 kemoreseptor. Pusat kardiovaskular mengatur tonus simpatis dan vagus.", health: "Herniasi batang otak menekan medula, memicu henti napas dan henti jantung fatal (trias Cushing)." },
      [
        { question: "Which brainstem subdivision directly houses cardiac and respiratory rhythm generator centers?", options: ["Medulla Oblongata", "Corpus Callosum", "Occipital Lobe", "Cornea"], answerIndex: 0, explanation: "The medulla oblongata controls autonomous respiratory rhythm, vasodilation, and heart rate." },
        { question: "What diffuse neural network in the brainstem maintains cortical arousal and consciousness?", options: ["Reticular Activating System (RAS)", "Brachial Plexus", "Optic Chiasm", "Cauda Equina"], answerIndex: 0, explanation: "The Reticular Activating System (RAS) filters sensory telemetry and drives wakefulness." },
        { question: "Which finding is part of the classical Cushing's triad indicating brainstem compression?", options: ["Hypertension with widening pulse pressure and bradycardia", "Hypotension and tachycardia", "Hyperactivity and fever", "Hypothermia alone"], answerIndex: 0, explanation: "Cushing's triad (hypertension, bradycardia, irregular respirations) signals life-threatening intracranial pressure." }
      ],
      [
        { question: "Subdivisi batang otak manakah yang memuat pusat kendali ritme jantung dan pernapasan vital?", options: ["Medula Oblongata", "Korpus Kalosum", "Lobus Oksipital", "Kornea"], answerIndex: 0, explanation: "Medula oblongata mengatur ritme pernapasan otomatis, vasodilatasi, dan laju denyut jantung." },
        { question: "Jaringan saraf difus pada batang otak yang mempertahankan kesadaran dan kondisi terjaga disebut?", options: ["Reticular Activating System (RAS)", "Pleksus Brakialis", "Kiasma Optik", "Kauda Ekuina"], answerIndex: 0, explanation: "RAS memfilter sinyal sensorik dan merangsang korteks serebri untuk mempertahankan kondisi waspada." },
        { question: "Manakah tanda klinis Trias Cushing yang mengindikasikan ancaman herniasi batang otak?", options: ["Hipertensi dengan tekanan nadi melebar disertai bradikardia", "Hipotensi dan takikardia", "Hiperaktivitas dan demam", "Hipotermia tunggal"], answerIndex: 0, explanation: "Trias Cushing (hipertensi, bradikardia, napas ireguler) adalah tanda darurat peningkatan tekanan intrakranial berat." }
      ],
      ["cerebrum", "cerebellum", "spinal_cord"]
    ),

    // 4. RESPIRATORY SYSTEM
    "Left Lung (2 Lobes)": lesson("resp", "lungs", { EN: "Left Lung (2 Lobes)", ID: "Paru-Paru Kiri (2 Lobus)" }, "🫁🌬️",
      { overview: "The left lung is slightly smaller than the right lung because it shares chest space with the heart. It has two main lobes.", position: "Occupies the left pleural cavity in the chest, featuring a cardiac notch for the heart.", mechanism: "Inflates as your diaphragm drops, pulling in fresh air into millions of microscopic elastic air sacs (alveoli).", health: "Avoiding smoking and air pollution preserves alveolar elasticity and lung capacity." },
      { overview: "The left lung has two lobes (Superior and Inferior) divided by an oblique fissure, possessing a cardiac notch and lingula to accommodate the heart.", position: "Enclosed within parietal and visceral pleurae in the left hemithorax, separated by mediastinum.", mechanism: "Pulmonary capillaries across alveolar walls perform passive diffusion of O2 and CO2 along partial pressure gradients.", health: "Pneumonia causes alveolar exudative consolidation, impairing ventilation-perfusion matching." },
      { overview: "Paru-paru kiri sedikit lebih kecil dibanding paru kanan karena berbagi ruang dengan jantung. Paru kiri memiliki dua lobus utama.", position: "Mengisi rongga dada kiri, memiliki lekukan kardiak untuk jantung.", mechanism: "Mengembang saat diafragma turun, menarik udara ke jutaan kantung udara elastis (alveolus).", health: "Menghindari rokok dan polusi menjaga kelenturan alveolus dan kapasitas paru-paru." },
      { overview: "Paru-paru kiri memiliki dua lobus yang dipisahkan fisura oblik, memiliki insisura kardiaka untuk mengakomodasi apeks jantung.", position: "Dibungkus pleura di hemitoraks kiri, dipisahkan dari paru kanan oleh mediastinum.", mechanism: "Kapiler alveolus menjalankan difusi pasif O2 dan CO2 mengikuti hukum Fick.", health: "Pneumonia menyebabkan konsolidasi eksudat di alveolus, memicu hipoksemia." },
      [
        { question: "Why does the left lung possess only two lobes compared to the right lung?", options: ["To accommodate the asymmetrical placement and apex of the heart", "Because it does not receive blood supply", "It only functions during sleep", "It contains no alveoli"], answerIndex: 0, explanation: "The anatomical space occupied by the heart limits the left lung to two lobes." },
        { question: "What specialized fissure separates superior and inferior lobes of the left lung?", options: ["Oblique fissure", "Horizontal fissure", "Longitudinal fissure", "Coronal fissure"], answerIndex: 0, explanation: "The oblique fissure extends diagonally across the left lung." },
        { question: "What is the primary gas exchange unit at the terminal respiratory bronchioles?", options: ["Alveoli", "Trachea", "Larynx", "Pleural fluid"], answerIndex: 0, explanation: "Alveolar sacs provide over 70 square meters of surface area for O2 and CO2 diffusion." }
      ],
      [
        { question: "Mengapa paru-paru kiri hanya memiliki dua lobus?", options: ["Untuk memberi ruang bagi posisi dan apeks jantung", "Karena tidak menerima suplai darah", "Hanya berfungsi saat tidur", "Tidak memiliki alveolus"], answerIndex: 0, explanation: "Ruang yang ditempati jantung pada rongga dada kiri membuat paru kiri memiliki dua lobus." },
        { question: "Fisura anatomis apa yang memisahkan lobus superior dan inferior pada paru-paru kiri?", options: ["Fisura Oblik", "Fisura Horizontal", "Fisura Longitudinal", "Fisura Koronal"], answerIndex: 0, explanation: "Fisura oblik memotong miring membagi lobus atas dan bawah paru kiri." },
        { question: "Apakah unit fungsional pertukaran gas utama di saluran napas terminal?", options: ["Alveolus", "Trakea", "Laring", "Cairan pleura"], answerIndex: 0, explanation: "Kantung alveolus menyediakan luas permukaan lebih dari 70 meter persegi untuk difusi O2 dan CO2." }
      ],
      ["trachea"]
    ),

    "Trachea": lesson("resp", "lungs", { EN: "Trachea", ID: "Trakea (Batang Tenggorok)" }, "🫁🌬️",
      { overview: "The trachea (windpipe) is the sturdy breathing tube that channels air from throat into lungs. It is reinforced by C-shaped cartilage rings so it never collapses.", position: "Extends down the middle of the neck and chest in front of the esophagus.", mechanism: "Lined with microscopic vibrating cilia and mucus that trap dust and sweep dirt upward like a moving escalator.", health: "Choking occurs when food enters the trachea; the Heimlich maneuver helps clear blockages." },
      { overview: "The trachea is a 10-12 cm fibrocartilaginous tube composed of 16-20 hyaline cartilage C-rings bridged posteriorly by the trachealis muscle.", position: "Originates at cricoid cartilage (C6) and bifurcates at the carina (T4-T5) into primary bronchi.", mechanism: "Pseudostratified ciliated columnar epithelium drives the mucociliary escalator, propelling trapped particles toward the pharynx.", health: "Tracheomalacia involves cartilaginous ring weakness, causing dynamic airway collapse." },
      { overview: "Trakea adalah pipa pernapasan kokoh yang menyalurkan udara ke paru-paru, diperkuat cincin tulang rawan berbentuk C agar tidak kempis.", position: "Membentang di garis tengah leher dan dada di depan saluran esofagus.", mechanism: "Dilapisi rambut getar mikroskopis (silia) dan lendir yang menyapu debu ke atas menjauhi paru-paru.", health: "Tersedak terjadi saat makanan masuk ke trakea; manuver Heimlich dapat membebaskan sumbatan." },
      { overview: "Trakea adalah tabung fibrokartilago sepanjang 10-12 cm tersusun atas 16-20 cincin tulang rawan hialin C dengan otot trakealis di posterior.", position: "Berasal dari kartilago krikoid (C6) dan bercabang di karina (T4-T5) menjadi bronkus utama.", mechanism: "Epitel kolumnar bertingkat bersilia menjalankan eskalator mukosiliar menggerakkan lendir ke faring.", health: "Trakeomalasia adalah kelemahan tulang rawan trakea yang memicu kolaps saluran napas." },
      [
        { question: "What is the physiological purpose of C-shaped cartilage rings in the trachea?", options: ["To keep the airway permanently open while allowing the esophagus behind to expand", "To generate speech vocal tones", "To produce oxygen directly", "To filter urine waste"], answerIndex: 0, explanation: "Rigid C-rings prevent airway collapse while allowing food bolus transit through the esophagus." },
        { question: "What anatomical bifurcation point marks the division of the trachea into primary bronchi?", options: ["Carina", "Epiglottis", "Glottis", "Limbus"], answerIndex: 0, explanation: "The carina is the internal cartilaginous ridge located at the tracheal bifurcation (T4-T5 level)." },
        { question: "Which cellular mechanism cleanses the tracheal airway of inhaled particulate debris?", options: ["Mucociliary escalator (ciliated epithelium + goblet mucus)", "Phagocytosis in liver", "Active peristalsis", "Osmotic filtration"], answerIndex: 0, explanation: "Synchronized ciliary beating moves mucus-trapped particles upward to the pharynx." }
      ],
      [
        { question: "Apakah fungsi fisiologis cincin tulang rawan berbentuk C pada dinding trakea?", options: ["Menjaga saluran napas tetap terbuka sekaligus memungkinkan esofagus di belakangnya mengembang saat menelan", "Menghasilkan nada suara bicara", "Menghasilkan oksigen langsung", "Menyaring limbah urin"], answerIndex: 0, explanation: "Cincin kaku mencegah trakea kempis sekaligus memberi ruang bagi makanan di esofagus." },
        { question: "Titik percabangan trakea menjadi bronkus utama kanan dan kiri disebut?", options: ["Karina", "Epiglotis", "Glotis", "Limbus"], answerIndex: 0, explanation: "Karina adalah taji tulang rawan pada percabangan trakea setinggi T4-T5." },
        { question: "Mekanisme seluler apa yang membersihkan saluran trakea dari debu dan kotoran?", options: ["Eskalator mukosiliar (epitel bersilia & lendir sel goblet)", "Fagositosis hati", "Peristaltik aktif", "Filtrasi osmosis"], answerIndex: 0, explanation: "Gerakan silia terkoordinasi mendorong lendir yang menjerat debu ke atas menuju faring." }
      ],
      ["left_lung"]
    ),

    // 5. DIGESTIVE SYSTEM
    "Stomach": lesson("digestive", "digestive_organs", { EN: "Stomach", ID: "Lambung" }, "🍲⚡",
      { overview: "The stomach is a muscular churning blender and chemical bath. It sterilizes food with potent hydrochloric acid and breaks down protein into liquid soup (chyme).", position: "Located in the upper left abdomen directly below the diaphragm.", mechanism: "Triple layers of smooth muscle churn food while gastric juices digest proteins under protective mucous coating.", health: "Eating regular balanced meals and managing stress protects against gastritis and peptic ulcers." },
      { overview: "The stomach is a J-shaped muscular organ subdivided into Cardia, Fundus, Body, Antrum, and Pylorus, capable of expanding via gastric rugae up to ~1.5-2 liters.", position: "Intraperitoneal organ in the left epigastric region between lower esophageal sphincter and pyloric sphincter.", mechanism: "Parietal cells secrete HCl (pH 1.5-2.0) and Intrinsic Factor; chief cells secrete pepsinogen; G cells release gastrin.", health: "Helicobacter pylori colonization and NSAIDs disrupt mucosal bicarbonate defenses, leading to peptic ulcer disease." },
      { overview: "Lambung adalah blender otot penghancur dan bak kimiawi tubuh yang mensterilkan makanan dengan asam lambung dan mencerna protein menjadi kimus.", position: "Terletak di rongga perut kiri atas tepat di bawah diafragma.", mechanism: "Tiga lapisan otot polos meremas makanan bersama asam lambung di bawah perlindungan lendir tebal.", health: "Makan teratur dan mengelola stres melindungi dinding lambung dari gastritis dan tukak lambung." },
      { overview: "Lambung adalah organ berbentuk huruf J yang terdiri dari Kardia, Fundus, Korpus, Antrum, dan Pilorus yang mampu menampung 1,5-2 liter makanan.", position: "Organ di regio epigastrium kiri antara sfingter esofagus bawah dan sfingter pilorus.", mechanism: "Sel parietal mensekresi HCl (pH 1,5-2,0) dan Faktor Intrinsik; sel utama mensekresi pepsinogen; sel G menghasilkan gastrin.", health: "Infeksi H. pylori dan obat NSAID merusak sawar mukus lambung, memicu tukak peptik." },
      [
        { question: "Which specialized gastric cells secrete hydrochloric acid (HCl) and Intrinsic Factor?", options: ["Parietal cells", "Chief cells", "Goblet cells", "Acinar cells"], answerIndex: 0, explanation: "Parietal cells secrete HCl to denature proteins and intrinsic factor for vitamin B12 absorption." },
        { question: "What is the primary protein-digesting enzyme activated in the stomach?", options: ["Pepsin", "Amylase", "Lipase", "Trypsin"], answerIndex: 0, explanation: "Pepsinogen is cleaved by hydrochloric acid into active pepsin." },
        { question: "Which muscular sphincter controls the passage of chyme from stomach into duodenum?", options: ["Pyloric sphincter", "Lower esophageal sphincter", "Ileocecal valve", "Internal anal sphincter"], answerIndex: 0, explanation: "The pyloric sphincter meters small volumes of chyme into the duodenum." }
      ],
      [
        { question: "Sel lambung manakah yang mensekresikan asam klorida (HCl) dan Faktor Intrinsik?", options: ["Sel Parietal", "Chief Cells (Sel Utama)", "Sel Goblet", "Sel Asinar"], answerIndex: 0, explanation: "Sel parietal memproduksi asam lambung (HCl) dan faktor intrinsik penyerapan vitamin B12." },
        { question: "Enzim pencerna protein utama apa yang aktif dalam suasana asam lambung?", options: ["Pepsin", "Amilase", "Lipase", "Tripsin"], answerIndex: 0, explanation: "Pepsinogen diaktifkan oleh asam klorida menjadi enzim protease aktif pepsin." },
        { question: "Sfingter manakah yang mengatur pengeluaran kimus dari lambung ke duodenum?", options: ["Sfingter Pilorus", "Sfingter Esofagus Bawah", "Katup Ileosekal", "Sfingter Ani Internus"], answerIndex: 0, explanation: "Sfingter pilorus mengatur pengeluaran kimus secara bertahap ke duodenum." }
      ],
      ["liver"]
    ),

    "Liver (Hepatic Lobes)": lesson("digestive", "digestive_organs", { EN: "Liver", ID: "Hati (Hepar)" }, "🫁🧪",
      { overview: "The liver is your body's largest chemical processing plant. It filters toxins, stores energy (glycogen), produces bile to digest fats, and makes vital clotting proteins.", position: "Occupies the upper right quadrant of your abdomen beneath the diaphragm.", mechanism: "Blood from the intestines passes directly through the liver via the hepatic portal vein for detoxification and nutrient processing.", health: "Limiting alcohol, maintaining a healthy weight, and staying hydrated protect against fatty liver disease and cirrhosis." },
      { overview: "The liver is the largest metabolic organ, organized into microscopic hexagonal hepatic lobules centered around a central vein, bounded by portal triads.", position: "Right hypochondriac and epigastric regions, divided into Right, Left, Caudate, and Quadrate lobes.", mechanism: "Hepatocytes perform gluconeogenesis, glycogenolysis, plasma protein synthesis (albumin, clotting factors), bile acid production, and cytochrome P450 xenobiotic biotransformation.", health: "Chronic hepatitis and alcohol abuse induce stellate cell activation, leading to progressive hepatic fibrosis and cirrhosis." },
      { overview: "Hati adalah pabrik kimiawi internal terbesar tubuh yang menyaring racun, menyimpan energi (glikogen), memproduksi empedu pencerna lemak, dan membuat protein pembekuan darah.", position: "Terletak di kuadran kanan atas rongga perut di bawah diafragma.", mechanism: "Darah dari usus dialirkan melalui vena porta hepatika agar hepatosit dapat mendetoksifikasi zat dan mengolah nutrisi.", health: "Membatasi alkohol dan menjaga berat badan ideal mencegah perlemakan hati dan sirosis." },
      { overview: "Hati adalah organ metabolik terbesar yang tersusun atas lobulus hepar heksagonal dengan vena sentralis dan trias porta.", position: "Regio hipokondrium kanan, dibungkus kapsul Glisson, terbagi menjadi lobus kanan, kiri, kaudatus, dan kuadratus.", mechanism: "Hepatosit menjalankan glukoneogenesis, sintesis albumin dan faktor koagulasi, produksi empedu, dan detoksifikasi sitokrom P450.", health: "Hepatitis kronis memicu aktivasi sel stelata yang menyebabkan fibrosis hepar progresif dan sirosis hati." },
      [
        { question: "Which blood vessel delivers nutrient-rich blood from the digestive tract directly to the liver?", options: ["Hepatic portal vein", "Hepatic artery", "Renal vein", "Pulmonary artery"], answerIndex: 0, explanation: "The hepatic portal vein carries all absorbed dietary nutrients and toxins directly to the liver." },
        { question: "What digestive fluid is synthesized by hepatocytes to emulsify dietary fats?", options: ["Bile", "Pepsin", "Hydrochloric acid", "Insulin"], answerIndex: 0, explanation: "Bile salts emulsify lipid droplets for pancreatic lipase digestion." },
        { question: "What vital plasma protein maintaining oncotic pressure is synthesized by the liver?", options: ["Albumin", "Hemoglobin", "Keratin", "Myosin"], answerIndex: 0, explanation: "Albumin constitutes over half of plasma protein and is produced entirely by hepatocytes." }
      ],
      [
        { question: "Pembuluh darah apa yang membawa darah kaya nutrisi dari usus langsung ke hati?", options: ["Vena porta hepatika", "Arteri hepatika", "Vena renalis", "Arteri pulmonalis"], answerIndex: 0, explanation: "Vena porta hepatika membawa darah berisi nutrisi dari usus ke sel hepatosit." },
        { question: "Cairan pencernaan apa yang disintesis hati untuk mengemulsikan lemak di usus?", options: ["Cairan Empedu", "Pepsin", "Asam klorida", "Insulin"], answerIndex: 0, explanation: "Garam empedu memecah lemak menjadi butiran halus agar dapat dicerna lipase." },
        { question: "Protein plasma penting penentu tekanan onkotik darah yang diproduksi hati adalah?", options: ["Albumin", "Hemoglobin", "Keratin", "Miosin"], answerIndex: 0, explanation: "Albumin merupakan protein plasma terbanyak yang disintesis oleh sel hepatosit hati." }
      ],
      ["stomach"]
    ),

    // 6. URINARY SYSTEM
    "Left Kidney": lesson("urinary", "kidneys_bladder", { EN: "Kidney", ID: "Ginjal" }, "🫘💧",
      { overview: "Your bean-shaped kidneys clean about 200 quarts of blood each day, sifting out cellular waste into urine while retaining precious water, salts, and proteins.", position: "Located against the posterior abdominal wall on either side of the spine, below the rib cage.", mechanism: "Over one million microscopic nephrons filter blood, reabsorb vital nutrients and water, and concentrate waste into urine.", health: "Drinking adequate water and controlling blood pressure and blood sugar protect nephrons from chronic kidney disease." },
      { overview: "The kidney is a retroperitoneal organ subdivided into outer cortex and inner medulla (pyramids), housing ~1-1.2 million functional nephrons per kidney.", position: "Retroperitoneal space between T12 and L3 vertebral levels.", mechanism: "Glomerular Filtration Rate (GFR ~125 mL/min): Capillaries filter plasma into Bowman's capsule; tubules fine-tune osmolarity and electrolyte balance.", health: "Diabetic nephropathy causes glomerular basement membrane thickening, manifesting as microalbuminuria and declining GFR." },
      { overview: "Dua ginjal membersihkan sekitar 180-200 liter darah setiap hari, menyaring racun menjadi urin sambil mempertahankan air dan garam tubuh.", position: "Terletak di dinding belakang rongga perut di kedua sisi tulang belakang.", mechanism: "Lebih dari satu juta nefron mikroskopis menyaring darah, menyerap kembali nutrisi, dan memekatkan limbah menjadi urin.", health: "Minum air yang cukup dan mengontrol tekanan darah melindungi nefron dari penyakit ginjal kronis." },
      { overview: "Ginjal adalah organ retroperitoneal yang terbagi atas korteks dan medula, memuat ~1-1,2 juta nefron fungsional.", position: "Ruang retroperitoneal setinggi vertebra T12 hingga L3.", mechanism: "Laju Filtrasi Glomerulus (LFG ~125 mL/menit): Glomerulus menyaring plasma ke kapsula Bowman; tubulus mengatur osmolaritas dan elektrolit.", health: "Nefropati diabetik menyebabkan penebalan membran basal glomerulus dan penurunan LFG." },
      [
        { question: "What is the microscopic functional filtration unit of the human kidney?", options: ["Nephron", "Neuron", "Hepatocyte", "Alveolus"], answerIndex: 0, explanation: "Each kidney contains over 1 million nephrons, each consisting of a glomerulus and specialized tubules." },
        { question: "Which hormone increases renal sodium and water reabsorption in exchange for potassium?", options: ["Aldosterone", "Insulin", "Glucagon", "Thyroxine"], answerIndex: 0, explanation: "Aldosterone acts on principal cells of distal tubules and collecting ducts." },
        { question: "What hormone secreted by the kidney stimulates red blood cell production in bone marrow?", options: ["Erythropoietin (EPO)", "Renin", "Calcitriol", "Cortisol"], answerIndex: 0, explanation: "Renal hypoxemia triggers erythropoietin secretion to accelerate erythropoiesis." }
      ],
      [
        { question: "Apakah unit fungsional penyaring mikroskopis pada ginjal manusia?", options: ["Nefron", "Neuron", "Hepatosit", "Alveolus"], answerIndex: 0, explanation: "Setiap ginjal memiliki lebih dari 1 juta nefron yang terdiri dari glomerulus dan tubulus." },
        { question: "Hormon manakah yang meningkatkan penyerapan kembali natrium dan air di tubulus ginjal?", options: ["Aldosteron", "Insulin", "Glukagon", "Tiroksin"], answerIndex: 0, explanation: "Aldosteron bekerja pada tubulus distal dan duktus pengumpul untuk menyerap ion natrium dan air." },
        { question: "Hormon apa yang dihasilkan ginjal untuk merangsang pembentukan sel darah merah di sumsum tulang?", options: ["Eritropoietin (EPO)", "Renin", "Kalsitriol", "Kortisol"], answerIndex: 0, explanation: "Saat ginjal mendeteksi penurunan oksigen darah, ginjal mensekresikan eritropoietin." }
      ],
      ["aorta"]
    ),

    // 7. SKELETAL SYSTEM
    "Femur": lesson("skeletal", "limbs_pelvis", { EN: "Femur", ID: "Tulang Paha (Femur)" }, "🦴🦵",
      { overview: "The femur is the thigh bone—the longest, heaviest, and strongest bone in your entire body, supporting your weight with every step you take.", position: "Extends from your hip joint at the top down to your knee joint at the bottom.", mechanism: "Its rounded head fits into the hip socket for wide leg motion, while its thick dense shaft absorbs the massive force of locomotion.", health: "Resistance exercise, calcium, and vitamin D strengthen femoral density, reducing the risk of fractures." },
      { overview: "The femur is the primary weight-bearing long bone of the lower extremity, featuring a proximal head, neck, greater and lesser trochanters, cylindrical shaft, and distal condyles.", position: "Articulates proximally with the acetabulum of the pelvis and distally with the tibia and patella.", mechanism: "Dense cortical bone resists compressive loads; femoral neck creates an angle of inclination (~125 degrees) facilitating bipedal stride.", health: "Femoral neck fractures risk avascular necrosis of the femoral head due to disruption of retinacular vessels." },
      { overview: "Femur adalah tulang paha—tulang terpanjang, terberat, dan terkuat di seluruh tubuh Anda, menopang berat badan pada setiap langkah.", position: "Membentang dari sendi panggul di bagian atas hingga sendi lutut di bagian bawah.", mechanism: "Kepala bulatnya terpasang pada mangkuk sendi panggul untuk rentang gerak kaki, sementara batangnya menyerap gaya benturan.", health: "Olahraga teratur, asupan kalsium, dan vitamin D memperkuat kepadatan tulang femur." },
      { overview: "Femur adalah tulang panjang penopang beban utama pada ekstremitas bawah, memiliki kaput proksimal, kolum, trokanter mayor/minor, dan kondilus distal.", position: "Bersendi di proksimal dengan asetabulum tulang panggul dan di distal dengan tibia serta patela pada sendi lutut.", mechanism: "Tulang kortikal padat menahan beban kompresi; leher femur membentuk sudut inklinasi (~125 derajat) untuk mekanisme langkah bipedal.", health: "Fraktur leher femur berisiko nekrosis avaskular (AVN) kepala femur akibat terputusnya arteri retinakular." },
      [
        { question: "Which anatomical socket does the rounded head of the femur articulate with to form the hip joint?", options: ["Acetabulum", "Glenoid cavity", "Olecranon fossa", "Foramen magnum"], answerIndex: 0, explanation: "The femoral head articulates with the acetabulum of the pelvis to form a multi-axial ball-and-socket joint." },
        { question: "What is the typical normal angle of inclination between the femoral neck and shaft in an adult?", options: ["Approximately 125 degrees", "90 degrees", "180 degrees", "45 degrees"], answerIndex: 0, explanation: "The adult angle of inclination is approximately 125° (coxa norma), optimizing leverage for hip abductors." },
        { question: "Which bone is recognized as the longest and strongest in the human skeleton?", options: ["Femur", "Humerus", "Tibia", "Fibula"], answerIndex: 0, explanation: "The femur is the longest and strongest bone, capable of supporting multiple times body weight." }
      ],
      [
        { question: "Mangkuk sendi panggul manakah yang menjadi tempat melekatnya kepala bulat tulang paha (femur)?", options: ["Asetabulum", "Kavitas Glenoid", "Fosa Olekranon", "Foramen Magnum"], answerIndex: 0, explanation: "Kepala femur bersendi dengan asetabulum pada tulang panggul membentuk sendi peluru." },
        { question: "Berapakah sudut inklinasi normal antara leher femur dan batang femur pada orang dewasa?", options: ["Sekitar 125 derajat", "90 derajat", "180 derajat", "45 derajat"], answerIndex: 0, explanation: "Sudut inklinasi normal dewasa adalah ~125°, memberi daya ungkit optimal bagi otot abduktor panggul." },
        { question: "Tulang manakah yang dikenal sebagai tulang terpanjang dan terkuat dalam tubuh manusia?", options: ["Femur (Tulang Paha)", "Humerus (Lengan Atas)", "Tibia (Tulang Kering)", "Fibula (Tulang Betis)"], answerIndex: 0, explanation: "Femur adalah tulang terpanjang dan terkuat yang mampu menahan beban berkali-kali lipat berat badan." }
      ],
      ["biceps"]
    ),

    // 8. MUSCULAR SYSTEM
    "Biceps Brachii": lesson("muscular", "muscles_group", { EN: "Biceps Brachii", ID: "Otot Biseps (Biceps Brachii)" }, "💪🦾",
      { overview: "The biceps is the prominent muscle on the front of your upper arm that flexes your elbow when you lift something or turn a doorknob.", position: "Spans across the front of the upper arm between the shoulder and the elbow.", mechanism: "When you want to bend your arm, electrical impulses cause its muscle fibers to shorten, pulling the forearm bone upward and rotating your palm upward (supination).", health: "Proper warm-ups and progressive resistance training build biceps strength while protecting the bicipital tendon from strain." },
      { overview: "The biceps brachii is a two-headed fusiform muscle in the anterior compartment of the arm innervated by the musculocutaneous nerve (C5-C7).", position: "Originates via short head (coracoid process) and long head (supraglenoid tubercle), inserting onto radial tuberosity and bicipital aponeurosis.", mechanism: "Primary supinator of the radioulnar joints (especially in flexed elbow) and powerful flexor of the glenohumeral and humeroulnar joints.", health: "Distal biceps tendon rupture typically occurs during forceful eccentric contraction against heavy loads, requiring surgical re-anchoring." },
      { overview: "Biseps adalah otot di bagian depan lengan atas yang menekuk siku saat Anda mengangkat barang atau memutar gagang pintu.", position: "Membentang di bagian depan lengan atas antara sendi bahu dan sendi siku.", mechanism: "Saat Anda ingin menekuk lengan, sinyal saraf memicu serat otot memendek, menarik tulang lengan bawah ke atas dan memutar telapak tangan menengadah (supinasi).", health: "Pemanasan sebelum olahraga dan latihan beban bertahap memperkuat otot biseps serta melindungi tendon biseps dari cedera." },
      { overview: "Biceps brachii adalah otot fusiformis berkepala dua di kompartemen anterior lengan atas yang dipersarafi oleh nervus muskulokutaneus (C5-C7).", position: "Berasal dari kaput brevis (prosesus korakoideus) dan kaput longum (tuberkulum supraglenoidalis), berinsersi pada tuberositas radius.", mechanism: "Supinator utama sendi radioulnar (terutama saat siku ditekuk) dan fleksor kuat sendi siku dan bahu.", health: "Ruptur tendon biseps distal sering terjadi akibat beban berat eksentrik mendadak, membutuhkan fiksasi bedah." },
      [
        { question: "Which peripheral nerve innervates the biceps brachii muscle?", options: ["Musculocutaneous nerve", "Radial nerve", "Sciatic nerve", "Femoral nerve"], answerIndex: 0, explanation: "The musculocutaneous nerve (C5-C7) innervates all muscles of the anterior arm compartment." },
        { question: "Beyond elbow flexion, what movement is primarily executed by the biceps brachii?", options: ["Forearm Supination (turning palm up)", "Forearm Pronation", "Finger extension", "Wrist adduction"], answerIndex: 0, explanation: "Because it inserts onto the radial tuberosity, biceps brachii is the most powerful supinator of the flexed forearm." },
        { question: "Where does the long head of the biceps brachii tendon originate?", options: ["Supraglenoid tubercle of the scapula", "Lateral epicondyle of humerus", "Xiphoid process", "Greater trochanter"], answerIndex: 0, explanation: "The long head tendon arises from the supraglenoid tubercle and glenoid labrum." }
      ],
      [
        { question: "Saraf tepi manakah yang mempersarafi otot biceps brachii?", options: ["Nervus Muskulokutaneus", "Nervus Radialis", "Nervus Iskiadikus", "Nervus Femoralis"], answerIndex: 0, explanation: "Nervus muskulokutaneus (C5-C7) mempersarafi seluruh otot fleksor pada kompartemen anterior lengan atas." },
        { question: "Selain fleksi siku, gerakan memutar lengan bawah manakah yang paling kuat digerakkan oleh biseps?", options: ["Supinasi (memutar telapak tangan menghadap ke atas)", "Pronasi", "Ekstensi jari", "Adduksi pergelangan"], answerIndex: 0, explanation: "Karena berinsersi pada tuberositas radius, biseps adalah otot supinator terkuat saat siku ditekuk." },
        { question: "Di manakah titik origo (pangkal) tendon kepala panjang otot biseps?", options: ["Tuberkulum supraglenoidalis pada tulang belikat (skapula)", "Epikondilus lateral humerus", "Prosesus xifoideus", "Trokanter mayor"], answerIndex: 0, explanation: "Tendon caput longum berasal dari tuberkulum supraglenoidalis skapula melintasi kapsul sendi bahu." }
      ],
      ["femur"]
    ),

    // 9. INTEGUMENTARY SYSTEM (SKIN)
    "Stratum Corneum & Epidermis": lesson("skin", "skin_layers", { EN: "Epidermis", ID: "Epidermis" }, "🧴🛡️",
      { overview: "The epidermis is your tough, multi-layered protective outer surface. It constantly creates new skin cells at the bottom that rise to the top, replacing old cells that shed away.", position: "The outermost visible layer covering the entire surface of your body.", mechanism: "Packed with keratin proteins to make a waterproof seal, and melanin pigment granules that absorb harmful ultraviolet rays from sunlight.", health: "Applying broad-spectrum sunscreen and staying moisturized protects epidermal cells from UV DNA damage and premature aging." },
      { overview: "The epidermis is an avascular keratinized stratified squamous epithelium composed of five strata in thick skin (Basale, Spinosum, Granulosum, Lucidum, Corneum), renewing every 28-30 days.", position: "Superficial to the dermis, anchored via hemidesmosomes to the basement membrane at the dermal-epidermal junction.", mechanism: "Composed primarily of keratinocytes (~90%), melanocytes (eumelanin photoprotection), Langerhans cells, and Merkel cells.", health: "Chronic solar UV irradiation causes DNA pyrimidine dimer mutations in basal keratinocytes or melanocytes, predisposing to carcinoma or melanoma." },
      { overview: "Epidermis adalah permukaan pelindung luar tubuh yang kuat dan berlapis-lapis. Lapisan ini terus membuat sel kulit baru di dasar yang naik ke permukaan menggantikan sel-sel lama yang terkelupas.", position: "Lapisan paling luar yang tampak menutupi seluruh permukaan tubuh Anda.", mechanism: "Dipenuhi protein keratin yang menciptakan lapisan kedap air, serta butiran pigmen melanin yang menyerap radiasi ultraviolet sinar matahari.", health: "Menggunakan tabir surya dan menjaga kelembapan kulit melindungi sel-sel epidermis dari kerusakan DNA akibat sinar UV." },
      { overview: "Epidermis adalah epitel skuamosa berlapis berkeratin avaskular yang terdiri dari lima stratum pada kulit tebal yang diperbarui setiap 28-30 hari.", position: "Di atas lapisan dermis, tertambat melalui hemidesmosom pada membran basal dermo-epidermal junction.", mechanism: "Terutama terdiri dari keratinosit (~90%), melanosit (fotoproteksi pigmen melanin), sel Langerhans, dan sel Merkel.", health: "Radiasi UV matahari memicu mutasi dimer pirimidin DNA pada keratinosit basal atau melanosit, memicu risiko kanker kulit." },
      [
        { question: "Which epidermal stratum contains actively dividing stem cells that continuously regenerate the epidermis?", options: ["Stratum basale (germinativum)", "Stratum corneum", "Stratum lucidum", "Stratum granulosum"], answerIndex: 0, explanation: "The single-layered stratum basale contains mitotically active basal keratinocyte stem cells attached to the basement membrane." },
        { question: "What pigment produced by melanocytes protects epidermal nuclear DNA from ultraviolet (UV) radiation?", options: ["Melanin", "Hemoglobin", "Carotene", "Bilirubin"], answerIndex: 0, explanation: "Melanocytes transfer melanin granules into surrounding keratinocytes, forming supranuclear caps that shield DNA from UV photons." },
        { question: "Why is the epidermis completely avascular (lacking blood vessels)?", options: ["It receives all oxygen and nutrients via diffusion from underlying dermal capillaries", "It requires no nutrients to survive", "It is made entirely of bone cells", "Blood vessels only exist in the brain"], answerIndex: 0, explanation: "The epidermis contains no blood vessels; its cells depend on interstitial fluid diffusion from papillary dermal capillaries." }
      ],
      [
        { question: "Lapisan epidermis manakah yang memuat sel punca yang aktif membelah untuk meregenerasi sel kulit baru?", options: ["Stratum basale (germinativum)", "Stratum korneum", "Stratum lusidum", "Stratum granulosum"], answerIndex: 0, explanation: "Stratum basale adalah lapisan paling dasar yang terus membelah secara mitosis menghasilkan keratinosit baru." },
        { question: "Pigmen apa yang disintesis oleh melanosit untuk melindungi DNA inti sel dari radiasi ultraviolet (UV)?", options: ["Melanin", "Hemoglobin", "Karoten", "Bilirubin"], answerIndex: 0, explanation: "Melanin disalurkan ke keratinosit untuk membentuk payung pelindung di atas inti sel dari kerusakan sinar UV." },
        { question: "Mengapa lapisan epidermis tidak memiliki pembuluh darah (avaskular)?", options: ["Memperoleh seluruh nutrisi dan oksigen melalui difusi dari pembuluh kapiler di lapisan dermis bawahnya", "Tidak memerlukan nutrisi untuk bertahan hidup", "Tersusun atas sel-sel tulang keras", "Pembuluh darah hanya ada di organ dalam"], answerIndex: 0, explanation: "Epidermis tidak memiliki pembuluh darah; sel-selnya bergantung pada difusi cairan dari kapiler papila dermis." }
      ],
      ["cornea"]
    ),

    // ═══════════════════════════════════════════════════════
    // VISION — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Retina": lesson("vision", "eye", { EN: "Retina", ID: "Retina" }, "👁️📡",
      { overview: "The retina is the eye's camera sensor — a thin layer that lines the back of your eyeball. It converts light rays into electrical signals sent to your brain to create the images you see.", position: "Lines the innermost layer of the posterior two-thirds of the eyeball, directly behind the vitreous body.", mechanism: "Contains over 120 million photoreceptor rods (dim/peripheral vision) and 6 million cones (color/detail vision). These cells convert photons into neural impulses.", health: "Retinal detachment (the retina peeling away) causes flashes and floaters and requires urgent treatment." },
      { overview: "The retina is a stratified neuroepithelium derived from the optic cup, containing 10 distinct histological layers including the retinal pigment epithelium (RPE), photoreceptors, bipolar cells, and retinal ganglion cells (RGCs).", position: "Posterior segment lining, extending from the ora serrata to the optic disc. The central fovea within the macula provides the highest cone density.", mechanism: "Phototransduction cascade: Photons isomerize 11-cis-retinal to all-trans-retinal in opsins, activating G-protein transducin, which inhibits phosphodiesterase and produces hyperpolarization in rods/cones.", health: "Diabetic retinopathy causes neovascularization and hemorrhage secondary to chronic hyperglycemia damaging retinal microvasculature." },
      { overview: "Retina adalah sensor kamera bola mata — lapisan tipis di bagian belakang bola mata yang mengubah cahaya menjadi sinyal listrik yang dikirim ke otak.", position: "Melapisi permukaan bagian dalam dua pertiga posterior bola mata, tepat di belakang badan kaca (vitreus).", mechanism: "Mengandung lebih dari 120 juta sel batang (penglihatan redup/perifer) dan 6 juta sel kerucut (warna/detail). Sel-sel ini mengubah foton menjadi impuls saraf.", health: "Ablasi retina (retina terlepas) menimbulkan kilatan cahaya dan benda melayang dan memerlukan tindakan segera." },
      { overview: "Retina adalah neuroepitel berlapis yang berasal dari cangkir optik, mengandung 10 lapisan histologis termasuk epitel pigmen retina (RPE), fotoreseptor, sel bipolar, dan sel ganglion retina.", position: "Melapisi segmen posterior, membentang dari ora serata hingga diskus optik. Fovea di makula memiliki kepadatan sel kerucut tertinggi.", mechanism: "Kaskade fototransduksi: Foton mengisoimerisasi 11-cis-retinal menjadi all-trans-retinal pada opsin, mengaktifkan G-protein transdusin, menginhibisi fosfodiesterase, dan menyebabkan hiperpolarisasi sel batang/kerucut.", health: "Retinopati diabetik menyebabkan neovaskularisasi dan perdarahan akibat kerusakan mikrovaskular retina oleh hiperglikemia kronis." },
      [
        { question: "Which type of photoreceptor cell in the retina is specialized for high-acuity color vision in bright light?", options: ["Rods", "Cones", "Bipolar cells", "Müller cells"], answerIndex: 1, explanation: "Cones are concentrated in the fovea and are responsible for color discrimination and visual acuity." },
        { question: "What visual pigment in rod photoreceptors is sensitive to dim light and initiates phototransduction?", options: ["Melanin", "Rhodopsin", "Collagen", "Hemoglobin"], answerIndex: 1, explanation: "Rhodopsin is the G-protein coupled receptor in rods that captures photons and initiates the phototransduction cascade." },
        { question: "What serious condition causes the neurosensory retina to separate from the underlying retinal pigment epithelium?", options: ["Cataract", "Retinal detachment", "Glaucoma", "Macular degeneration"], answerIndex: 1, explanation: "Retinal detachment requires urgent surgical repair to restore blood supply and prevent permanent vision loss." }
      ],
      [
        { question: "Jenis sel fotoreseptor mana di retina yang berperan dalam penglihatan warna tajam di cahaya terang?", options: ["Sel batang", "Sel kerucut", "Sel bipolar", "Sel Müller"], answerIndex: 1, explanation: "Sel kerucut terkonsentrasi di fovea dan bertanggung jawab atas diskriminasi warna dan ketajaman visual." },
        { question: "Pigmen visual sel batang yang sensitif terhadap cahaya redup disebut?", options: ["Melanin", "Rodopsin", "Kolagen", "Hemoglobin"], answerIndex: 1, explanation: "Rodopsin adalah reseptor pada sel batang yang menangkap foton dan memulai kaskade fototransduksi." },
        { question: "Kondisi serius di mana lapisan neuro-retina terlepas dari epitel pigmen retina disebut?", options: ["Katarak", "Ablasi retina", "Glaukoma", "Degenerasi makula"], answerIndex: 1, explanation: "Ablasi retina memerlukan perbaikan bedah segera agar suplai darah terpulihkan dan kehilangan penglihatan permanen dapat dicegah." }
      ],
      ["optic_nerve", "macula", "cornea"]
    ),

    "Sclera": lesson("vision", "eye", { EN: "Sclera", ID: "Sklera" }, "🏐⚪",
      { overview: "The sclera is the tough, white outer shell of the eyeball. It gives the eye its shape, provides structural protection, and is the attachment point for the muscles that move your eye.", position: "Covers the posterior five-sixths of the outer surface of the eyeball.", mechanism: "Made of dense collagen fibers arranged in layers, the sclera resists deformation and maintains the intraocular pressure that keeps the eye's spherical shape.", health: "Yellow sclera (icterus/scleral jaundice) is a warning sign of liver disease. Inflammation (scleritis) causes deep, severe eye pain." },
      { overview: "The sclera is the posterior opaque portion of the fibrous tunic of the eye, composed of densely packed type I collagen fibrils with interspersed proteoglycans.", position: "Spans posterior to the corneoscleral limbus, pierced posteriorly by the optic nerve sheath at the lamina cribrosa.", mechanism: "Maintains globe integrity and intraocular pressure homeostasis. Serves as the attachment site for all six extraocular muscles.", health: "Scleritis can be associated with systemic autoimmune diseases (rheumatoid arthritis, vasculitis). Scleral blueness in osteogenesis imperfecta reflects thinned collagen exposing uveal pigment." },
      { overview: "Sklera adalah cangkang luar putih dan keras dari bola mata. Memberikan bentuk, perlindungan struktural, dan menjadi tempat melekatnya otot-otot penggerak mata.", position: "Menutupi lima perenam bagian posterior permukaan luar bola mata.", mechanism: "Tersusun atas serat kolagen padat berlapis yang menahan deformasi dan mempertahankan tekanan bola mata agar tetap bulat.", health: "Sklera kuning (ikterus sklera) adalah tanda peringatan penyakit hati. Radang sklera (skleritis) menyebabkan nyeri mata yang dalam dan parah." },
      { overview: "Sklera adalah bagian posterior opak dari tunika fibrosa mata, tersusun atas serat kolagen tipe I yang sangat padat.", position: "Membentang dari limbus korneoskleral ke posterior, ditembus oleh selubung saraf optik pada lamina kribosa.", mechanism: "Mempertahankan integritas bola mata dan tekanan intraokular. Menjadi tempat perlekatan keenam otot ekstraokular.", health: "Skleritis dapat disertai penyakit autoimun sistemik seperti artritis reumatoid. Sklera biru pada osteogenesis imperfekta mencerminkan penipisan kolagen." },
      [
        { question: "What type of connective tissue protein makes up the majority of the scleral structure?", options: ["Type I collagen", "Elastin", "Reticulin", "Fibronectin"], answerIndex: 0, explanation: "The sclera consists predominantly of densely packed type I collagen fibrils providing tensile strength." },
        { question: "What is the junction between the transparent cornea and the opaque sclera called?", options: ["Corneoscleral limbus", "Fovea centralis", "Ora serrata", "Lamina cribrosa"], answerIndex: 0, explanation: "The limbus is the transitional zone and contains important aqueous humor outflow structures." },
        { question: "Yellow discoloration of the white part of the eye is a clinical sign of which condition?", options: ["Jaundice (liver disease)", "Anemia", "Cataract", "Hypertension"], answerIndex: 0, explanation: "Scleral icterus reflects elevated bilirubin deposition, typically from liver or biliary pathology." }
      ],
      [
        { question: "Protein jaringan ikat utama apa yang menyusun sebagian besar struktur sklera?", options: ["Kolagen Tipe I", "Elastin", "Retikulin", "Fibronektin"], answerIndex: 0, explanation: "Sklera tersusun terutama dari serat kolagen tipe I yang sangat padat untuk kekuatan tensil." },
        { question: "Pertemuan antara kornea transparan dan sklera opak disebut?", options: ["Limbus korneoskleral", "Fovea sentralis", "Ora serata", "Lamina kribosa"], answerIndex: 0, explanation: "Limbus adalah zona transisi dan memuat struktur drainase humor akuos yang penting." },
        { question: "Perubahan warna kuning pada bagian putih mata merupakan tanda klinis dari kondisi?", options: ["Ikterus (penyakit hati)", "Anemia", "Katarak", "Hipertensi"], answerIndex: 0, explanation: "Ikterus skleral mencerminkan deposisi bilirubin yang meningkat, umumnya akibat patologi hati atau bilier." }
      ],
      ["cornea", "choroid"]
    ),

    "Optic Nerve": lesson("vision", "eye", { EN: "Optic Nerve", ID: "Saraf Optik" }, "🔌👁️",
      { overview: "The optic nerve is your eye's high-speed data cable. It bundles over a million nerve fibers from the retina and transmits all visual information directly to the brain's visual processing center.", position: "Exits the back of each eyeball and travels through the optic canal, meeting the opposite nerve at the optic chiasm beneath the brain.", mechanism: "Carries electrical impulses from retinal ganglion cells. At the optic chiasm, fibers from nasal (inner) halves cross sides, allowing each side of the brain to process both eyes' input.", health: "Glaucoma damages the optic nerve due to elevated eye pressure. Optic neuritis (inflammation) can cause sudden vision blurring." },
      { overview: "The optic nerve (CN II) is a second-order extension of the central nervous system, not a true peripheral nerve. It carries approximately 1.2 million retinal ganglion cell axons wrapped in oligodendrocyte myelin sheaths.", position: "Extends from the optic disc through the optic canal in the sphenoid bone to the optic chiasm, where nasal retinal fibers decussate.", mechanism: "Post-chiasmal fibers form the optic tracts projecting to the lateral geniculate nucleus (LGN) of the thalamus, then the optic radiation to primary visual cortex (V1, Brodmann area 17).", health: "Glaucomatous optic neuropathy shows characteristic cup-to-disc ratio expansion (>0.6). Papilledema from raised ICP causes optic disc swelling without direct visual loss initially." },
      { overview: "Saraf optik adalah kabel data berkecepatan tinggi dari mata. Menghubungkan lebih dari satu juta serat saraf dari retina dan meneruskan semua informasi visual ke pusat pemrosesan visual di otak.", position: "Keluar dari bagian belakang bola mata dan berjalan melalui kanalis optik, bertemu saraf sisi berlawanan di kiasma optik di bawah otak.", mechanism: "Membawa impuls listrik dari sel ganglion retina. Di kiasma optik, serat dari separuh nasal (dalam) menyilang ke sisi berlawanan, memungkinkan setiap sisi otak memproses input dari kedua mata.", health: "Glaukoma merusak saraf optik akibat tekanan mata tinggi. Neuritis optik (peradangan) dapat menyebabkan pandangan kabur mendadak." },
      { overview: "Saraf optik (N. II) adalah perpanjangan sistem saraf pusat, bukan saraf tepi sejati. Membawa ~1,2 juta akson sel ganglion retina yang diselubungi mielin oligodendrosit.", position: "Membentang dari diskus optik melalui kanalis optik hingga kiasma optik tempat serat retina nasal mendekusasi.", mechanism: "Serat pasca-kiasmatik membentuk traktus optikus menuju nukleus genikulum lateral (LGN) talamus, kemudian radiasi optik ke korteks visual primer (V1, Area Brodmann 17).", health: "Neuropati optik glaukomatosa ditandai ekspansi rasio cekungan-cakram (>0.6). Papil edema akibat peningkatan TIK menyebabkan bengkak diskus optik." },
      [
        { question: "At the optic chiasm, which retinal fibers cross to the opposite side of the brain?", options: ["Nasal (medial) retinal fibers", "Temporal (lateral) retinal fibers", "All fibers cross completely", "No fibers cross at all"], answerIndex: 0, explanation: "Nasal retinal fibers decussate at the optic chiasm so each hemisphere receives input from the contralateral visual field." },
        { question: "Where does the optic nerve relay visual information from the thalamus before reaching the primary visual cortex?", options: ["Lateral geniculate nucleus (LGN)", "Medial geniculate nucleus", "Superior colliculus", "Caudate nucleus"], answerIndex: 0, explanation: "The LGN of the thalamus is the primary relay station for retinogeniculate visual projections." },
        { question: "Progressive excavation of the optic nerve head with elevated intraocular pressure is the hallmark of which condition?", options: ["Glaucoma", "Cataract", "Macular degeneration", "Diabetic retinopathy"], answerIndex: 0, explanation: "Elevated IOP compresses axons at the lamina cribrosa causing progressive glaucomatous optic neuropathy." }
      ],
      [
        { question: "Di kiasma optik, serat retina mana yang menyilang ke sisi otak berlawanan?", options: ["Serat retina nasal (medial)", "Serat retina temporal (lateral)", "Semua serat menyilang sepenuhnya", "Tidak ada serat yang menyilang"], answerIndex: 0, explanation: "Serat retina nasal mendekusasi di kiasma optik agar setiap hemisfer menerima input dari lapang pandang kontralateral." },
        { question: "Di mana saraf optik menyampaikan informasi visual dari talamus sebelum mencapai korteks visual primer?", options: ["Nukleus genikulum lateral (LGN)", "Nukleus genikulum medial", "Kolikulus superior", "Nukleus kaudatus"], answerIndex: 0, explanation: "LGN talamus adalah stasiun relai utama untuk proyeksi visual retinogenikulat." },
        { question: "Ekskavasi progresif kepala saraf optik dengan tekanan intraokular tinggi adalah ciri khas dari?", options: ["Glaukoma", "Katarak", "Degenerasi makula", "Retinopati diabetik"], answerIndex: 0, explanation: "TIO tinggi menekan akson pada lamina kribosa sehingga menyebabkan neuropati optik glaukomatosa progresif." }
      ],
      ["retina", "macula", "cerebrum"]
    ),

    "Pupil": lesson("vision", "eye", { EN: "Pupil", ID: "Pupil" }, "⚫👁️",
      { overview: "The pupil is the adjustable opening in the center of the iris that lets light into the eye. It works exactly like the aperture of a camera, getting smaller in bright light and larger in dim light.", position: "The central circular aperture of the iris, surrounded by its pigmented muscular ring.", mechanism: "In bright light, the iris sphincter muscle contracts, shrinking the pupil. In dim light, the iris dilator muscle expands it to let in more light.", health: "Unequal pupil size (anisocoria) can be normal or indicate serious conditions such as brain herniation, Horner syndrome, or CN III palsy." },
      { overview: "The pupil is not a structure per se but rather an aperture in the iris diaphragm, variable in diameter from 1.5 mm (bright light) to 8 mm (maximal dark adaptation).", position: "Central opening of the iris, continuously adjusted by sphincter and dilator smooth muscle tone.", mechanism: "Direct pupillary light reflex: Light → retinal ganglion cells → pretectal nucleus → Edinger-Westphal nucleus → CN III → ciliary ganglion → sphincter pupillae (bilateral constriction).", health: "A fixed, dilated pupil (mydriasis) following head trauma suggests uncal herniation compressing CN III — a neurosurgical emergency requiring immediate imaging." },
      { overview: "Pupil adalah lubang yang dapat menyesuaikan diri di tengah iris yang mengatur masuknya cahaya ke mata. Bekerja persis seperti apertur kamera — mengecil di cahaya terang dan melebar di cahaya redup.", position: "Apertur melingkar sentral dari iris, dikelilingi oleh cincin otot berpinya.", mechanism: "Di cahaya terang, otot sfingter iris berkontraksi mengecilkan pupil. Di cahaya redup, otot dilator iris merentangkannya untuk memasukkan lebih banyak cahaya.", health: "Ukuran pupil yang tidak sama (anisokoria) bisa normal atau menunjukkan kondisi serius seperti herniasi otak, sindrom Horner, atau paresis N. III." },
      { overview: "Pupil bukan struktur tersendiri melainkan apertur pada diafragma iris, bervariasi dari 1,5 mm (cahaya terang) hingga 8 mm (adaptasi gelap maksimal).", position: "Lubang sentral iris yang terus-menerus disesuaikan oleh tonus otot sfingter dan dilator.", mechanism: "Refleks cahaya pupil langsung: Cahaya → sel ganglion retina → nukleus pretektal → nukleus Edinger-Westphal → N. III → ganglion siliaris → sfingter pupila (konstriksi bilateral).", health: "Pupil dilatasi tetap (midriasis) setelah trauma kepala menunjukkan herniasi unkal yang menekan N. III — darurat bedah saraf yang memerlukan pencitraan segera." },
      [
        { question: "What is the direct pupillary light reflex pathway? Where does it first synapse in the brainstem?", options: ["Pretectal nucleus of the midbrain", "Lateral geniculate nucleus", "Primary visual cortex", "Inferior colliculus"], answerIndex: 0, explanation: "The pretectal nucleus relays the pupillary light reflex bilaterally to the Edinger-Westphal nucleus." },
        { question: "A fixed, dilated pupil following head trauma most urgently suggests compression of which cranial nerve?", options: ["Cranial Nerve III (Oculomotor)", "Cranial Nerve VI (Abducens)", "Cranial Nerve IV (Trochlear)", "Cranial Nerve II (Optic)"], answerIndex: 0, explanation: "CN III carries parasympathetic fibers to sphincter pupillae; compression causes ipsilateral fixed mydriasis." },
        { question: "Pupillary constriction (miosis) is controlled by which division of the autonomic nervous system?", options: ["Parasympathetic", "Sympathetic", "Somatic motor", "Enteric"], answerIndex: 0, explanation: "Parasympathetic CN III fibers innervate the sphincter pupillae via the ciliary ganglion." }
      ],
      [
        { question: "Refleks cahaya pupil langsung pertama kali bersinaps di struktur otak tengah mana?", options: ["Nukleus pretektal otak tengah", "Nukleus genikulum lateral", "Korteks visual primer", "Kolikulus inferior"], answerIndex: 0, explanation: "Nukleus pretektal meneruskan refleks cahaya pupil bilateral ke nukleus Edinger-Westphal." },
        { question: "Pupil yang dilatasi tetap setelah trauma kepala paling mendesak mengindikasikan penekanan saraf kranial mana?", options: ["Saraf Kranial III (Okulomotor)", "Saraf Kranial VI (Abdusen)", "Saraf Kranial IV (Troklear)", "Saraf Kranial II (Optik)"], answerIndex: 0, explanation: "N. III membawa serat parasimpatis ke sfingter pupila; penekanannya menyebabkan midriasis tetap ipsilateral." },
        { question: "Konstriksi pupil (miosis) dikendalikan oleh divisi mana dari sistem saraf otonom?", options: ["Parasimpatis", "Simpatis", "Motorik somatik", "Enterik"], answerIndex: 0, explanation: "Serat parasimpatis N. III mempersarafi sfingter pupila melalui ganglion siliaris." }
      ],
      ["iris", "cornea", "lens"]
    ),

    "Choroid": lesson("vision", "eye", { EN: "Choroid", ID: "Koroid" }, "❤️👁️",
      { overview: "The choroid is a dense vascular layer sandwiched between the retina and sclera. It acts as the eye's internal blood supply network, keeping the retina alive and nourished.", position: "Lies between the retina (inside) and the sclera (outside), running throughout the posterior eye.", mechanism: "Rich networks of capillaries (choriocapillaris) deliver oxygen and nutrients to the outer retinal layers. Dark pigment in the choroid also absorbs stray light to prevent visual interference.", health: "Choroiditis (inflammation) or choroidal neovascularization (new vessel growth) in conditions like wet macular degeneration can severely damage central vision." },
      { overview: "The choroid is the middle vascular layer (uveal tract) between the retina and sclera, composed of the choriocapillaris, Sattler's layer, and Haller's layer, with melanocytes providing optical insulation.", position: "Extends from the ora serrata anteriorly to the margin of the optic nerve posteriorly.", mechanism: "The choriocapillaris supplies 65% of total retinal oxygen demand and maintains the outer blood-retinal barrier via retinal pigment epithelium (RPE) tight junctions.", health: "Choroidal neovascularization in age-related macular degeneration is treated with anti-VEGF intravitreal injections (ranibizumab, bevacizumab)." },
      { overview: "Koroid adalah lapisan pembuluh darah padat yang terjepit antara retina dan sklera. Berperan sebagai jaringan suplai darah internal mata yang menjaga retina tetap hidup dan bergizi.", position: "Terletak di antara retina (dalam) dan sklera (luar), membentang di seluruh bagian posterior mata.", mechanism: "Jaringan kapiler kaya (koriokapilaris) menyalurkan oksigen dan nutrisi ke lapisan retina luar. Pigmen gelap di koroid juga menyerap cahaya menyimpang untuk mencegah gangguan visual.", health: "Koroiditis (radang) atau neovaskularisasi koroidal pada kondisi seperti degenerasi makula basah dapat merusak penglihatan sentral secara parah." },
      { overview: "Koroid adalah lapisan vaskular tengah (traktus uvea) antara retina dan sklera, terdiri dari koriokapilaris, lapisan Sattler, dan lapisan Haller, dengan melanosit sebagai isolasi optis.", position: "Membentang dari ora serata di anterior hingga tepi saraf optik di posterior.", mechanism: "Koriokapilaris menyuplai 65% kebutuhan oksigen retina total dan mempertahankan sawar darah-retina luar melalui sambungan ketat RPE.", health: "Neovaskularisasi koroidal pada degenerasi makula berkaitan usia diobati dengan injeksi intravitreal anti-VEGF (ranibizumab, bevacizumab)." },
      [
        { question: "Which layer of the choroid is directly responsible for delivering oxygen and nutrients to the outer retina?", options: ["Choriocapillaris", "Haller's layer", "Bruch's membrane", "Müller cells"], answerIndex: 0, explanation: "The choriocapillaris is the innermost choroidal capillary layer in direct nutritive contact with the retinal pigment epithelium." },
        { question: "What role do melanocytes in the choroidal stroma play in visual function?", options: ["Absorb scattered light to prevent optical noise and glare", "Produce tears", "Synthesize rhodopsin", "Control pupil diameter"], answerIndex: 0, explanation: "Choroidal melanin pigmentation reduces internal light scatter, improving image contrast." },
        { question: "Abnormal blood vessel growth from the choroid into the retina in macular degeneration is called?", options: ["Choroidal neovascularization (CNV)", "Papilledema", "Retinal detachment", "Optic atrophy"], answerIndex: 0, explanation: "CNV leaks fluid and blood under the retina, causing distorted central vision in wet AMD." }
      ],
      [
        { question: "Lapisan koroid mana yang secara langsung menghantarkan oksigen dan nutrisi ke retina luar?", options: ["Koriokapilaris", "Lapisan Haller", "Membran Bruch", "Sel Müller"], answerIndex: 0, explanation: "Koriokapilaris adalah lapisan kapiler koroid terdalam yang berkontak langsung dengan epitel pigmen retina." },
        { question: "Apa peran melanosit di stroma koroid dalam fungsi visual?", options: ["Menyerap cahaya tersebar untuk mencegah gangguan optis dan silau", "Memproduksi air mata", "Mensintesis rodopsin", "Mengendalikan diameter pupil"], answerIndex: 0, explanation: "Melanin koroid mengurangi hamburan cahaya internal sehingga meningkatkan kontras gambar." },
        { question: "Pertumbuhan pembuluh darah abnormal dari koroid ke retina pada degenerasi makula disebut?", options: ["Neovaskularisasi koroidal (NVK)", "Papil edema", "Ablasi retina", "Atrofi optik"], answerIndex: 0, explanation: "NVK mengalirkan cairan dan darah di bawah retina menyebabkan distorsi penglihatan sentral pada AMD basah." }
      ],
      ["retina", "sclera"]
    ),

    "Macula & Fovea": lesson("vision", "eye", { EN: "Macula & Fovea", ID: "Makula & Fovea" }, "🎯👁️",
      { overview: "The macula is the specialized central area of your retina responsible for the sharp, detailed central vision you use for reading, recognizing faces, and driving. The fovea at its center is the point of maximum visual sharpness.", position: "Located at the exact center of the retina, approximately 3.5 mm from the optic disc.", mechanism: "The fovea is densely packed with cone photoreceptors and completely devoid of rods, blood vessels, and overlying neuronal layers, giving it the highest visual acuity of any retinal region.", health: "Age-related macular degeneration (AMD) destroys the macula, causing central vision loss while peripheral vision is preserved." },
      { overview: "The macula lutea is a 5-6 mm diameter pigmented region of the retina with the fovea centralis at its center, containing ~35,000 cone photoreceptors per mm², the highest spatial frequency of any retinal location.", position: "Temporal to the optic disc, with the fovea at its center. The foveola (~0.35 mm diameter) contains only cone inner segments.", mechanism: "The absence of rods and interneurons (inner nuclear layer) in the foveola creates a 1:1 cone-to-ganglion cell ratio, maximizing spatial resolution for fine detail detection.", health: "Wet AMD involves VEGF-driven choroidal neovascularization invading the macula; dry AMD results from drusen accumulation and geographic atrophy." },
      { overview: "Makula adalah area sentral khusus pada retina yang bertanggung jawab atas penglihatan sentral yang tajam dan detail yang digunakan untuk membaca, mengenali wajah, dan mengemudi. Fovea di pusatnya adalah titik ketajaman visual maksimum.", position: "Terletak tepat di pusat retina, sekitar 3,5 mm dari cakram optik.", mechanism: "Fovea dipenuhi padat sel kerucut fotoreseptor dan sepenuhnya bebas dari sel batang, pembuluh darah, dan lapisan neuronal di atasnya, memberikan ketajaman visual tertinggi.", health: "Degenerasi makula berkaitan usia (AMD) menghancurkan makula, menyebabkan kehilangan penglihatan sentral sementara penglihatan perifer tetap terjaga." },
      { overview: "Makula lutea adalah daerah retina berpigmen berdiameter 5-6 mm dengan fovea sentralis di pusatnya, mengandung ~35.000 sel kerucut per mm² — kepadatan spasial tertinggi di seluruh retina.", position: "Temporal dari diskus optik, dengan fovea di pusatnya. Foveola (~0,35 mm diameter) hanya berisi segmen dalam sel kerucut.", mechanism: "Tidak adanya sel batang dan interneuron di foveola menciptakan rasio kerucut-ke-sel-ganglion 1:1, memaksimalkan resolusi spasial untuk deteksi detail.", health: "AMD basah melibatkan neovaskularisasi koroidal yang dikendalikan VEGF yang menginvasi makula; AMD kering terjadi akibat akumulasi drusen dan atrofi geografik." },
      [
        { question: "Which photoreceptor type dominates the fovea and provides high-acuity color vision?", options: ["Cones", "Rods", "Amacrine cells", "Horizontal cells"], answerIndex: 0, explanation: "The fovea contains ~35,000 cones/mm² and is completely devoid of rods, providing maximum visual acuity." },
        { question: "What structural feature of the fovea creates the highest visual resolution in the human eye?", options: ["Absence of blood vessels and inner retinal layers, 1:1 cone-to-ganglion cell ratio", "Maximum rod density", "Thick optic nerve fiber layer", "High melanin pigmentation"], answerIndex: 0, explanation: "The foveola has no overlying neurons or vasculature, minimizing light scatter and enabling optimal image formation." },
        { question: "Age-related macular degeneration (AMD) primarily destroys which type of vision?", options: ["Central (fine detail) vision", "Peripheral vision", "Night vision", "Color vision entirely"], answerIndex: 0, explanation: "AMD destroys macular cone photoreceptors, causing central scotoma while peripheral vision is typically preserved." }
      ],
      [
        { question: "Jenis fotoreseptor apa yang mendominasi fovea dan memberikan penglihatan warna ketajaman tinggi?", options: ["Sel kerucut", "Sel batang", "Sel amakrin", "Sel horizontal"], answerIndex: 0, explanation: "Fovea mengandung ~35.000 kerucut/mm² dan sepenuhnya bebas dari sel batang." },
        { question: "Fitur struktural fovea apa yang menciptakan resolusi visual tertinggi pada mata manusia?", options: ["Tidak adanya pembuluh darah dan lapisan retina dalam, rasio kerucut-ke-sel-ganglion 1:1", "Kepadatan sel batang maksimum", "Lapisan serat saraf optik yang tebal", "Pigmentasi melanin tinggi"], answerIndex: 0, explanation: "Foveola tidak memiliki neuron atau vaskulatur yang menutupinya, meminimalkan hamburan cahaya." },
        { question: "Degenerasi makula berkaitan usia (AMD) terutama menghancurkan jenis penglihatan apa?", options: ["Penglihatan sentral (detail halus)", "Penglihatan perifer", "Penglihatan malam", "Penglihatan warna sepenuhnya"], answerIndex: 0, explanation: "AMD menghancurkan fotoreseptor kerucut makula, menyebabkan skotoma sentral sementara penglihatan perifer umumnya terjaga." }
      ],
      ["retina", "optic_nerve"]
    ),

    "Vitreous Body": lesson("vision", "eye", { EN: "Vitreous Body", ID: "Badan Kaca (Vitreus)" }, "🫧👁️",
      { overview: "The vitreous body is the large, clear, jelly-like substance that fills the inside of your eyeball. It maintains the round shape of the eye and keeps the retina pressed firmly against the back wall.", position: "Fills the posterior chamber of the eye — the large space between the lens and the retina, comprising about 80% of the eye's total volume.", mechanism: "Composed of water (~98%), hyaluronic acid, and collagen fibrils, it acts as a transparent gel cushion that transmits light without distortion.", health: "Floaters (protein clumps casting shadows) are common, especially after age 50. Sudden onset of many floaters with flashes may indicate retinal detachment." },
      { overview: "The vitreous humor is a transparent avascular gel composed of type II collagen fibrils, hyaluronic acid, proteoglycans, and ~98-99% water, occupying approximately 4 mL of the posterior segment.", position: "Fills the vitreous chamber posterior to the crystalline lens, with attachments to the optic disc, retinal vessels at the vitreous base, and the inner retinal surface.", mechanism: "Maintains globe shape, provides refractive index ~1.336 for light transmission, and serves as a diffusion medium for oxygen and metabolites between retina and lens.", health: "Posterior vitreous detachment (PVD) occurs as vitreous liquefies with age (syneresis). If PVD tears a retinal blood vessel, vitreous hemorrhage results; traction can cause retinal detachment." },
      { overview: "Badan kaca adalah zat gelatin jernih besar yang mengisi bagian dalam bola mata. Mempertahankan bentuk bulat mata dan menjaga retina menempel kuat pada dinding belakang.", position: "Mengisi ruang posterior mata — ruang besar antara lensa dan retina, mencakup sekitar 80% volume total mata.", mechanism: "Tersusun atas air (~98%), asam hialuronat, dan fibril kolagen. Berperan sebagai bantalan gel transparan yang mentransmisikan cahaya tanpa distorsi.", health: "Floaters (gumpalan protein yang membentuk bayangan) umum terjadi terutama setelah usia 50. Floaters mendadak banyak disertai kilatan cahaya dapat mengindikasikan ablasi retina." },
      { overview: "Humor vitreus adalah gel transparan avaskular terdiri dari fibril kolagen tipe II, asam hialuronat, proteoglikan, dan ~98-99% air, menempati sekitar 4 mL segmen posterior.", position: "Mengisi ruang vitreus di posterior lensa kristalina, melekat pada diskus optik, pembuluh darah retina di basis vitreus, dan permukaan retina dalam.", mechanism: "Mempertahankan bentuk bola mata, menyediakan indeks bias ~1,336 untuk transmisi cahaya, dan berfungsi sebagai media difusi oksigen dan metabolit antara retina dan lensa.", health: "Pelepasan vitreus posterior (PVP) terjadi saat vitreus mencair seiring usia (sineresis). Jika PVP merobek pembuluh darah retina, terjadi perdarahan vitreus; traksi dapat menyebabkan ablasi retina." },
      [
        { question: "What is the primary structural component that gives the vitreous its gel-like consistency?", options: ["Collagen type II fibrils + hyaluronic acid network", "Elastin fibers", "Hemoglobin", "Keratin sheets"], answerIndex: 0, explanation: "Type II collagen fibrils form the vitreous scaffold with hyaluronic acid hydrating the interstitial space." },
        { question: "Floaters in the vitreous are caused by?", options: ["Aggregates of collagen fibrils and protein clumps casting shadows on the retina", "Leaking blood vessels", "Air bubbles", "Detached photoreceptors"], answerIndex: 0, explanation: "With age, vitreous collagen condenses into opaque aggregates visible as floaters." },
        { question: "What serious complication can result from posterior vitreous detachment (PVD) if vitreoretinal traction is severe?", options: ["Retinal detachment", "Corneal abrasion", "Cataract", "Glaucoma"], answerIndex: 0, explanation: "Severe vitreoretinal traction during PVD can tear the retina, allowing fluid to enter and separate it from the RPE." }
      ],
      [
        { question: "Komponen struktural utama apa yang memberikan konsistensi seperti gel pada vitreus?", options: ["Fibril kolagen tipe II + jaringan asam hialuronat", "Serat elastin", "Hemoglobin", "Lembaran keratin"], answerIndex: 0, explanation: "Fibril kolagen tipe II membentuk perancah vitreus dengan asam hialuronat menghidrasi ruang interstisial." },
        { question: "Floaters di dalam vitreus disebabkan oleh?", options: ["Agregat fibril kolagen dan gumpalan protein yang membentuk bayangan pada retina", "Pembuluh darah yang bocor", "Gelembung udara", "Fotoreseptor yang terlepas"], answerIndex: 0, explanation: "Seiring usia, kolagen vitreus mengental menjadi agregat opak yang terlihat sebagai floaters." },
        { question: "Komplikasi serius apa yang dapat terjadi akibat pelepasan vitreus posterior (PVP) jika traksi vitreoretinaparah?", options: ["Ablasi retina", "Abrasi kornea", "Katarak", "Glaukoma"], answerIndex: 0, explanation: "Traksi vitreoritinal parah saat PVP dapat merobek retina, memungkinkan cairan masuk dan memisahkannya dari RPE." }
      ],
      ["retina", "lens"]
    ),

    "Ciliary Body": lesson("vision", "eye", { EN: "Ciliary Body", ID: "Badan Siliar" }, "⚙️👁️",
      { overview: "The ciliary body is the muscular ring behind the iris that controls the shape of the lens for focusing. It also produces the clear aqueous fluid that fills the front of the eye.", position: "Located just behind the iris, encircling the lens like a ring muscle.", mechanism: "When you focus on nearby objects, the ciliary muscle contracts, reducing zonule tension and allowing the lens to round up. It also continuously secretes aqueous humor.", health: "Ciliary body inflammation (cyclitis) can cause severe eye pain and blurred vision. Elevated production without adequate drainage causes glaucoma." },
      { overview: "The ciliary body is the middle uveal structure between the iris root and choroid, consisting of the ciliary muscle (smooth muscle), ciliary processes, and pars plana.", position: "Posterior to the iris root, anchored to the scleral spur anteriorly, merging with the choroid posteriorly.", mechanism: "Ciliary epithelium (pigmented and non-pigmented double layer) actively secretes ~2 mL/day of aqueous humor via Na+/K+-ATPase and carbonic anhydrase. The ciliary muscle's contraction/relaxation controls accommodation.", health: "Carbonic anhydrase inhibitors (acetazolamide, dorzolamide) and beta-blockers (timolol) reduce aqueous humor production, lowering IOP in glaucoma management." },
      { overview: "Badan siliar adalah cincin otot di belakang iris yang mengendalikan bentuk lensa untuk memfokuskan. Juga memproduksi cairan aqueus jernih yang mengisi bagian depan mata.", position: "Terletak tepat di belakang iris, mengelilingi lensa seperti cincin otot.", mechanism: "Saat fokus pada objek dekat, otot siliaris berkontraksi, mengurangi tegangan zonula dan membiarkan lensa mencembung. Juga terus-menerus mensekresikan humor akuos.", health: "Peradangan badan siliar (siklitis) dapat menyebabkan nyeri mata parah dan penglihatan kabur. Produksi berlebih tanpa drainase yang memadai menyebabkan glaukoma." },
      { overview: "Badan siliar adalah struktur uvea tengah antara akar iris dan koroid, terdiri dari otot siliaris (otot polos), prosesus siliaris, dan pars plana.", position: "Di posterior akar iris, tertambat pada taji skleral di anterior, bergabung dengan koroid di posterior.", mechanism: "Epitel siliaris (lapisan ganda berpigmen dan tidak berpigmen) secara aktif mensekresikan ~2 mL/hari humor akuos melalui Na+/K+-ATPase dan anhidrase karbonat. Kontraksi/relaksasi otot siliaris mengontrol akomodasi.", health: "Inhibitor anhidrase karbonat (asetazolamid, dorzolamin) dan beta-bloker (timolol) mengurangi produksi humor akuos, menurunkan TIO pada pengelolaan glaukoma." },
      [
        { question: "What fluid does the ciliary body produce that is critical for maintaining intraocular pressure?", options: ["Aqueous humor", "Vitreous humor", "Tears (lacrimal secretion)", "Cerebrospinal fluid"], answerIndex: 0, explanation: "The ciliary epithelium secretes ~2-3 mL/day of aqueous humor which drains through the trabecular meshwork." },
        { question: "The ciliary muscle's contraction during near-vision accommodation does what to the zonules of Zinn?", options: ["Relaxes them, reducing lens tension so it rounds up", "Tightens them, flattening the lens", "Ruptures them permanently", "Increases their pigmentation"], answerIndex: 0, explanation: "Ciliary muscle contraction reduces the ring diameter, reducing zonule tension, allowing the elastic lens capsule to spring into a more spherical shape." },
        { question: "Which drug class reduces aqueous humor production by inhibiting an enzyme in the ciliary epithelium?", options: ["Carbonic anhydrase inhibitors", "Antihistamines", "ACE inhibitors", "Statins"], answerIndex: 0, explanation: "Carbonic anhydrase inhibitors (e.g., acetazolamide, dorzolamide) block aqueous secretion and lower IOP." }
      ],
      [
        { question: "Cairan apa yang diproduksi badan siliar yang penting untuk mempertahankan tekanan intraokular?", options: ["Humor akuos", "Humor vitreus", "Air mata", "Cairan serebrospinal"], answerIndex: 0, explanation: "Epitel siliaris mensekresikan ~2-3 mL/hari humor akuos yang didrainase melalui jalinan trabekula." },
        { question: "Kontraksi otot siliaris selama akomodasi penglihatan dekat melakukan apa pada zonula Zinn?", options: ["Merelaksasinya, mengurangi tegangan lensa sehingga mencembung", "Mengencangkannya, meratakan lensa", "Memutusnya secara permanen", "Meningkatkan pigmentasinya"], answerIndex: 0, explanation: "Kontraksi otot siliaris mengurangi diameter cincin, mengurangi tegangan zonula, membiarkan kapsul lensa elastis mengambil bentuk lebih bulat." },
        { question: "Kelas obat mana yang mengurangi produksi humor akuos dengan menghambat enzim di epitel siliaris?", options: ["Inhibitor anhidrase karbonat", "Antihistamin", "Inhibitor ACE", "Statin"], answerIndex: 0, explanation: "Inhibitor anhidrase karbonat (misalnya asetazolamid, dorzolamin) menghambat sekresi akuos dan menurunkan TIO." }
      ],
      ["lens", "iris"]
    ),

    // ═══════════════════════════════════════════════════════
    // NERVOUS SYSTEM — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Cerebrum": lesson("nervous", "brain", { EN: "Cerebrum", ID: "Serebrum (Otak Besar)" }, "🧠💡",
      { overview: "The cerebrum is the largest part of the brain — the wrinkled outer layer (cortex) responsible for all conscious thought, emotions, sensory perception, voluntary movement, language, and memory.", position: "Occupies the upper portion of the skull, divided into left and right hemispheres by the longitudinal fissure.", mechanism: "The cerebral cortex contains about 16 billion neurons arranged in six functional layers. Different lobes specialize in specific functions: frontal (executive), parietal (sensation), temporal (hearing/memory), occipital (vision).", health: "Stroke (blocked or burst blood vessel) damages cerebral tissue, causing deficits in motor, language, or sensory functions depending on the affected region." },
      { overview: "The cerebrum is the telencephalon component of the prosencephalon, consisting of bilateral cortical hemispheres connected by the corpus callosum, basal ganglia, and limbic system structures.", position: "Superiorly positioned in the neurocranium. Divided into frontal, parietal, temporal, and occipital lobes, each with distinct gyri and sulci patterns.", mechanism: "Six-layered neocortex (isocortex) processes sensory, motor, and associative information. Brodmann's cytoarchitectural map delineates 52 functional areas including primary motor (area 4), somatosensory (areas 3,1,2), Broca's speech area (44/45), and Wernicke's area (22).", health: "Ischemic stroke of the middle cerebral artery causes contralateral hemiplegia, hemisensory loss, and aphasia (dominant hemisphere). TIA resolves within 24 hours but predicts future stroke risk." },
      { overview: "Serebrum adalah bagian terbesar otak — lapisan luar berkerut (korteks) yang bertanggung jawab atas semua pemikiran sadar, emosi, persepsi sensorik, gerakan sukarela, bahasa, dan memori.", position: "Menempati bagian atas tengkorak, dibagi menjadi hemisfer kiri dan kanan oleh fisura longitudinal.", mechanism: "Korteks serebral mengandung sekitar 16 miliar neuron yang tersusun dalam enam lapisan fungsional. Lobus yang berbeda mengkhususkan diri dalam fungsi tertentu: frontal (eksekutif), parietal (sensasi), temporal (pendengaran/memori), oksipital (penglihatan).", health: "Stroke (pembuluh darah tersumbat atau pecah) merusak jaringan serebral menyebabkan defisit motorik, bahasa, atau sensorik tergantung pada area yang terkena." },
      { overview: "Serebrum adalah komponen telensefalon dari prosensefalon, terdiri dari hemisfer kortikal bilateral yang terhubung oleh korpus kalosum, ganglia basal, dan struktur sistem limbik.", position: "Diposisikan superior di neurokranium. Terbagi menjadi lobus frontal, parietal, temporal, dan oksipital masing-masing dengan pola girus dan sulkus yang khas.", mechanism: "Neokorteks enam lapis (isokorteks) memproses informasi sensorik, motorik, dan asosiatif. Peta sitoarsitektur Brodmann mendelineasi 52 area fungsional termasuk area motorik primer (area 4), somatosensorik (area 3,1,2), area bicara Broca (44/45), dan area Wernicke (22).", health: "Stroke iskemik arteri serebri media menyebabkan hemiplegia kontralateral, defisit hemisensorik, dan afasia (hemisfer dominan). TIA mengobati sendiri dalam 24 jam tetapi memprediksi risiko stroke berikutnya." },
      [
        { question: "The primary motor cortex controlling voluntary movement is located in which cerebral lobe?", options: ["Frontal lobe (precentral gyrus)", "Parietal lobe", "Occipital lobe", "Temporal lobe"], answerIndex: 0, explanation: "The precentral gyrus of the frontal lobe houses Brodmann area 4, the primary motor cortex." },
        { question: "Which structure connects the left and right cerebral hemispheres, enabling interhemispheric communication?", options: ["Corpus callosum", "Hippocampus", "Amygdala", "Basal ganglia"], answerIndex: 0, explanation: "The corpus callosum is a massive white matter commissure connecting corresponding cortical areas of both hemispheres." },
        { question: "Damage to Wernicke's area (superior temporal gyrus) causes which type of language impairment?", options: ["Receptive (fluent) aphasia — comprehension impaired, speech fluent but nonsensical", "Expressive aphasia — understands but cannot speak", "Mutism only", "Motor paralysis"], answerIndex: 0, explanation: "Wernicke's area (Brodmann 22) processes language comprehension; its damage produces fluent but meaningless speech." }
      ],
      [
        { question: "Korteks motorik primer yang mengendalikan gerakan sukarela terletak di lobus serebral mana?", options: ["Lobus frontal (girus presentralis)", "Lobus parietal", "Lobus oksipital", "Lobus temporal"], answerIndex: 0, explanation: "Girus presentralis lobus frontal memuat area Brodmann 4, korteks motorik primer." },
        { question: "Struktur mana yang menghubungkan hemisfer serebral kiri dan kanan memungkinkan komunikasi interhemisfer?", options: ["Korpus kalosum", "Hipokampus", "Amigdala", "Ganglia basalis"], answerIndex: 0, explanation: "Korpus kalosum adalah komisura materi putih masif yang menghubungkan area kortikal yang bersesuaian dari kedua hemisfer." },
        { question: "Kerusakan pada area Wernicke (girus temporal superior) menyebabkan gangguan bahasa jenis apa?", options: ["Afasia reseptif (fasih) — pemahaman terganggu, bicara fasih tetapi tidak bermakna", "Afasia ekspresif — memahami tetapi tidak bisa berbicara", "Bisu saja", "Kelumpuhan motorik"], answerIndex: 0, explanation: "Area Wernicke (Brodmann 22) memproses pemahaman bahasa; kerusakannya menghasilkan bicara fasih tetapi tidak bermakna." }
      ],
      ["cerebellum", "brainstem", "hippocampus"]
    ),

    "Thalamus": lesson("nervous", "brain", { EN: "Thalamus", ID: "Talamus" }, "🧠🔀",
      {
        overview: "The thalamus is the brain's central communications hub and gateway within the diencephalon. It connects the cerebrum with the rest of the nervous system, processing and relaying virtually all incoming sensory information—with the sole exception of the sense of smell (olfaction)—before signals reach the conscious cerebral cortex.",
        position: "Situated deep beneath the cerebrum in the diencephalon at the top of the brainstem, forming the lateral walls of the fluid-filled third ventricle between the two cerebral hemispheres.",
        mechanism: "Acts as an active processor and gatekeeper rather than a simple cable. It sorts sensory signals through specific relay nuclei (such as the lateral geniculate for vision and medial geniculate for hearing) and determines which stimuli receive attention, while also relaying motor feedback from the basal nuclei and cerebellum back to the cerebral cortex.",
        health: "Ischemic strokes damaging thalamic blood supply cause Dejerine-Roussy syndrome (Thalamic Pain Syndrome), resulting in severe chronic neuropathic burning pain, sensory loss (hemianesthesia), and hypersensitivity on the opposite side of the body."
      },
      {
        overview: "The thalamus is a bilateral collection of distinct diencephalic nuclei that constitutes the primary relay and integrative center between the cerebral cortex, brainstem, spinal cord, and peripheral nervous system. It processes all ascending sensory pathways except olfaction (which connects directly to the limbic cerebrum) and mediates extensive reciprocal thalamocortical oscillations.",
        position: "Located in the dorsal diencephalon, forming the superior and lateral boundaries of the third ventricle; bordered laterally by the posterior limb of the internal capsule, superiorly by the fornix and lateral ventricles, and inferiorly by the hypothalamic sulcus and midbrain tegmentum.",
        mechanism: "Composed of organized nuclear groups: specific relay nuclei (Lateral Geniculate Nucleus [LGN] for retinogeniculate visual relay to V1; Medial Geniculate Nucleus [MGN] for auditory pathways to A1; Ventral Posterolateral [VPL] and Ventral Posteromedial [VPM] for medial lemniscal, spinothalamic, and trigeminothalamic somatosensation), motor relay nuclei (Ventral Anterior [VA] and Ventral Lateral [VL] mediating basal ganglia disinhibition and cerebellar dentatothalamic loops to motor cortices), association nuclei (Pulvinar, Mediodorsal), and the GABAergic Thalamic Reticular Nucleus (TRN) providing inhibitory sensory gating and sleep spindle generation.",
        health: "Infarction in the thalamoperforating or thalamogeniculate branches of the posterior cerebral artery (PCA) produces Dejerine-Roussy syndrome, characterized by contralateral hemianesthesia, sensory ataxia, dysesthesias, severe intractable central neuropathic pain, and alterations in vigilance or consciousness when intralaminar/reticular projections are disrupted."
      },
      {
        overview: "Talamus adalah gerbang utama dan pusat relai komunikasi otak di dalam diensefalon. Organ ini menghubungkan serebrum dengan seluruh sistem saraf, memproses dan menyortir hampir semua informasi sensorik yang masuk—dengan satu-satunya pengecualian indra penciuman (olfaktori)—sebelum sinyal mencapai korteks serebral kesadaran.",
        position: "Terletak jauh di bawah serebrum pada kawasan diensefalon di puncak batang otak, membentuk dinding lateral ventrikel ketiga yang berisi cairan di antara kedua belahan otak besar.",
        mechanism: "Berfungsi sebagai penyaring aktif dan pengatur lalu lintas sinyal, bukan sekadar kabel pasif. Talamus menyortir rangsangan melalui nukleus relai spesifik (seperti nukleus genikulat lateral untuk penglihatan dan nukleus genikulat medial untuk pendengaran), serta meneruskan umpan balik perintah motorik dari ganglia basalis dan serebelum kembali ke korteks motorik.",
        health: "Stroke iskemik yang merusak cabang arteri talamus dapat memicu Sindrom Nyeri Talamik (Dejerine-Roussy), yang bermanifestasi sebagai nyeri neuropatik kronis berupa sensasi terbakar parah, hilangnya sensasi raba (hemianestesia), dan hipersensitivitas pada sisi tubuh kontralateral."
      },
      {
        overview: "Talamus adalah kompleks nukleus diensefalon berpasangan yang menjadi stasiun relai dan integrasi primer antara korteks serebri, batang otak, medula spinalis, dan sistem saraf perifer. Talamus merupakan sinaps wajib bagi seluruh jaras sensorik asenden kecuali penciuman (yang terhubung langsung ke paleokorteks olfaktori serebrum) serta mengatur osilasi timbal balik talamokortikal.",
        position: "Terletak di diensefalon dorsal, membentuk batas superior dan lateral dari ventrikel ketiga; berbatasan di lateral dengan krus posterior kapsula interna, di superior dengan forniks dan ventrikel lateral, serta di inferior dengan sulkus hipotalamikus dan tegmentum mesensefalon.",
        mechanism: "Terdiri atas kelompok nukleus terspesialisasi: nukleus relai spesifik (LGN untuk relai visual retinogenikulat ke V1; MGN untuk jaras auditori ke A1; VPL dan VPM untuk somatosensorik lemniskus medialis, traktus spinotalamikus, dan trigeminotalamikus), nukleus motorik (VA dan VL yang menyalurkan umpan balik disinhibisi ganglia basalis dan luaran serebelar ke korteks motorik primer), nukleus asosiasi (Pulvinar, Mediodorsal), dan Thalamic Reticular Nucleus (TRN) berbasis GABAergik yang mengatur gerbang penapisan sensorik serta osilasi gelombang 'spindle' tidur.",
        health: "Infark cabang arteri talamoperforata atau talamogenikulata dari arteri serebri posterior (PCA) menyebabkan sindrom Dejerine-Roussy, ditandai dengan hemianestesia kontralateral, ataksia sensorik, disestesia, nyeri sentral neuropatik pascastroke yang resistan terhadap analgesik biasa, serta penurunan kesadaran apabila proyeksi nukleus intralaminar terganggu."
      },
      [
        { question: "Which sensory modality bypasses primary synaptic relay in the thalamus before reaching the cerebrum?", options: ["Olfaction (Smell)", "Vision", "Audition (Hearing)", "Somatosensation (Touch and Pain)"], answerIndex: 0, explanation: "According to OpenStax Anatomy & Physiology, all sensory pathways must synapse in the thalamus before processing by the cerebral cortex, with the single exception of olfaction (the sense of smell)." },
        { question: "Which thalamic nucleus serves as the dedicated relay station for visual pathways connecting the optic tract to the primary visual cortex (V1)?", options: ["Lateral Geniculate Nucleus (LGN)", "Medial Geniculate Nucleus (MGN)", "Ventral Posterolateral Nucleus (VPL)", "Subthalamic Nucleus"], answerIndex: 0, explanation: "The Lateral Geniculate Nucleus (LGN) of the thalamus receives visual signals from the optic tract and projects optic radiations directly to the visual cortex in the occipital lobe." },
        { question: "Beyond relaying sensory information, how does the thalamus participate in somatic motor control?", options: ["It relays motor feedback loops from the basal nuclei and cerebellum back to the cerebral cortex", "It directly stimulates skeletal muscle fibers via peripheral motor nerves", "It secretes acetylcholine into the bloodstream to trigger muscle contraction", "It synthesizes cerebrospinal fluid to lubricate spinal joints"], answerIndex: 0, explanation: "The cerebrum sends motor information to the thalamus, which mediates feedback loops involving basal nuclei output (disinhibition) and cerebellar coordination before returning commands to the motor cortex." }
      ],
      [
        { question: "Modalitas sensorik manakah yang tidak melalui sinaps relai primer di talamus sebelum mencapai cerebrum?", options: ["Penciuman (Olfaktori)", "Penglihatan (Visual)", "Pendengaran (Auditori)", "Perabaan & Nyeri (Somatosensorik)"], answerIndex: 0, explanation: "Berdasarkan referensi OpenStax Anatomi & Fisiologi, seluruh jaras sensorik wajib bersinaps di talamus sebelum diproses korteks, dengan satu-satunya pengecualian yaitu indra penciuman (olfaktori)." },
        { question: "Nukleus talamus manakah yang menjadi stasiun relai khusus untuk jaras penglihatan dari traktus optik menuju korteks visual primer (V1)?", options: ["Lateral Geniculate Nucleus (LGN)", "Medial Geniculate Nucleus (MGN)", "Ventral Posterolateral Nucleus (VPL)", "Subthalamic Nucleus"], answerIndex: 0, explanation: "Lateral Geniculate Nucleus (LGN) pada talamus menerima sinyal visual dari traktus optik dan memancarkan radiasi optika langsung ke korteks visual di lobus oksipital." },
        { question: "Selain merelai informasi sensorik, bagaimana peran talamus dalam sistem kendali motorik tubuh?", options: ["Merelai sirkuit umpan balik motorik dari ganglia basalis dan serebelum kembali ke korteks serebri", "Menginervasi serat otot rangka secara langsung melalui saraf perifer", "Mensekresikan asetilkolin ke peredaran darah untuk memicu kontraksi otot", "Memproduksi cairan serebrospinal untuk melumasi persendian tulang belakang"], answerIndex: 0, explanation: "Serebrum berinteraksi dengan ganglia basalis dan serebelum melalui talamus, di mana talamus bertindak sebagai stasiun relai keluaran motorik sebelum diteruskan ke korteks motorik primer." }
      ],
      ["cerebrum", "hypothalamus", "brainstem", "hippocampus"]
    ),

    "Hypothalamus": lesson("nervous", "brain", { EN: "Hypothalamus", ID: "Hipotalamus" }, "🧠⚖️",
      { overview: "The hypothalamus is the brain's master regulator of the body's internal environment. It controls hunger, thirst, body temperature, sleep cycles, and the release of hormones from the pituitary gland.", position: "A small walnut-sized structure located below the thalamus in the center of the brain, just above the brainstem.", mechanism: "Acts as the command center between the nervous system and the endocrine (hormone) system, sending signals that trigger hormone release, temperature adjustments, and appetite responses.", health: "Damage to the hypothalamus can cause uncontrolled hunger (hyperphagia), temperature dysregulation, diabetes insipidus, or growth disorders." },
      { overview: "The hypothalamus is the diencephalic structure forming the floor and lateral walls of the third ventricle, housing more than 12 distinct nuclei organized into periventricular, medial, and lateral zones.", position: "Inferior to the thalamus, superior to the pituitary stalk (infundibulum), bounded anteriorly by the optic chiasm.", mechanism: "Produces hypothalamic releasing hormones (CRH, TRH, GHRH, GnRH) that regulate anterior pituitary secretion. Directly synthesizes ADH and oxytocin in paraventricular and supraoptic nuclei for posterior pituitary release.", health: "Craniopharyngiomas compressing the hypothalamus cause panhypopituitarism, diabetes insipidus, visual field defects, and severe obesity." },
      { overview: "Hipotalamus adalah pengatur utama otak atas lingkungan internal tubuh. Mengendalikan rasa lapar, haus, suhu tubuh, siklus tidur, dan pelepasan hormon dari kelenjar pituitari.", position: "Struktur seukuran kenari yang terletak di bawah talamus di pusat otak, tepat di atas batang otak.", mechanism: "Bertindak sebagai pusat komando antara sistem saraf dan sistem endokrin (hormon), mengirimkan sinyal yang memicu pelepasan hormon, penyesuaian suhu, dan respons nafsu makan.", health: "Kerusakan pada hipotalamus dapat menyebabkan kelaparan yang tidak terkontrol (hiperfagia), disregulasi suhu, diabetes insipidus, atau gangguan pertumbuhan." },
      { overview: "Hipotalamus adalah struktur diensefalon yang membentuk lantai dan dinding lateral ventrikel ketiga, memuat lebih dari 12 nukleus berbeda yang diorganisir dalam zona periventrikel, medial, dan lateral.", position: "Inferior dari talamus, superior dari tangkai pituitari (infundibulum), dibatasi di anterior oleh kiasma optik.", mechanism: "Menghasilkan hormon pelepas hipotalamus (CRH, TRH, GHRH, GnRH) yang mengatur sekresi pituitari anterior. Langsung mensintesis ADH dan oksitosin di nukleus paraventrikel dan supraoptik untuk pelepasan pituitari posterior.", health: "Kraniofaringioma yang menekan hipotalamus menyebabkan panhipopituitarisme, diabetes insipidus, defek lapang pandang, dan obesitas berat." },
      [
        { question: "The hypothalamus controls the endocrine system primarily through its regulation of which gland?", options: ["Anterior and posterior pituitary gland", "Thyroid gland directly", "Adrenal cortex directly", "Pancreas"], answerIndex: 0, explanation: "The hypothalamus communicates with the anterior pituitary via portal blood and with the posterior pituitary via direct axonal projections." },
        { question: "Which two hormones are synthesized in the hypothalamus and stored/released from the posterior pituitary?", options: ["ADH (vasopressin) and Oxytocin", "GH and TSH", "ACTH and FSH", "Prolactin and LH"], answerIndex: 0, explanation: "ADH and oxytocin are made in paraventricular/supraoptic nuclei and transported via axons to the posterior pituitary." },
        { question: "Which hypothalamic nucleus primarily controls circadian rhythms and sleep-wake cycles?", options: ["Suprachiasmatic nucleus (SCN)", "Ventromedial nucleus", "Arcuate nucleus", "Posterior hypothalamic nucleus"], answerIndex: 0, explanation: "The SCN receives direct retinal input (retinohypothalamic tract) and acts as the master circadian clock." }
      ],
      [
        { question: "Hipotalamus mengendalikan sistem endokrin terutama melalui regulasinya terhadap kelenjar apa?", options: ["Kelenjar pituitari anterior dan posterior", "Kelenjar tiroid langsung", "Korteks adrenal langsung", "Pankreas"], answerIndex: 0, explanation: "Hipotalamus berkomunikasi dengan pituitari anterior melalui darah portal dan dengan pituitari posterior melalui proyeksi akson langsung." },
        { question: "Dua hormon mana yang disintesis di hipotalamus dan disimpan/dilepaskan dari pituitari posterior?", options: ["ADH (vasopresin) dan Oksitosin", "GH dan TSH", "ACTH dan FSH", "Prolaktin dan LH"], answerIndex: 0, explanation: "ADH dan oksitosin dibuat di nukleus paraventrikel/supraoptik dan diangkut melalui akson ke pituitari posterior." },
        { question: "Nukleus hipotalamik mana yang terutama mengendalikan ritme sirkadian dan siklus bangun-tidur?", options: ["Nukleus suprakiasmatik (NSK)", "Nukleus ventromedial", "Nukleus arkuata", "Nukleus hipotalamik posterior"], answerIndex: 0, explanation: "NSK menerima input retinal langsung (traktus retinohipotalamik) dan bertindak sebagai jam sirkadian induk." }
      ],
      ["thalamus", "cerebrum", "brainstem"]
    ),

    "Hippocampus": lesson("nervous", "brain", { EN: "Hippocampus", ID: "Hipokampus" }, "🧠💾",
      { overview: "The hippocampus is the brain's memory formation center. It converts short-term experiences into long-term memories and is also essential for spatial navigation — it acts like your brain's internal GPS.", position: "Located deep within the temporal lobe of each cerebral hemisphere, forming part of the limbic system.", mechanism: "New information flows into the hippocampus from sensory cortices, is processed, and then gradually transferred (consolidated) into long-term memory stored in the cortex through synaptic strengthening.", health: "Alzheimer's disease heavily attacks the hippocampus first, which is why difficulty forming new memories is one of the earliest symptoms." },
      { overview: "The hippocampus is an archicortical (3-layered) structure of the limbic system, consisting of Cornu Ammonis (CA1-CA4) subfields and dentate gyrus, with critical roles in declarative memory and spatial cognition.", position: "Located in the medial temporal lobe, forming the floor of the inferior horn of the lateral ventricle.", mechanism: "Hippocampal long-term potentiation (LTP) via NMDA and AMPA receptor-dependent synaptic plasticity enables memory encoding. Entorhinal cortex serves as primary input/output gateway via the perforant path.", health: "Mesial temporal lobe epilepsy (MTLE) typically involves hippocampal sclerosis. HM's case — bilateral hippocampectomy — established the hippocampus as essential for declarative memory formation." },
      { overview: "Hipokampus adalah pusat pembentukan memori otak. Mengubah pengalaman jangka pendek menjadi ingatan jangka panjang dan juga penting untuk navigasi spasial — bertindak seperti GPS internal otak.", position: "Terletak jauh di dalam lobus temporal setiap hemisfer serebral, membentuk bagian dari sistem limbik.", mechanism: "Informasi baru mengalir ke hipokampus dari korteks sensoris, diproses, kemudian secara bertahap dipindahkan (dikonsolidasikan) ke memori jangka panjang yang tersimpan di korteks melalui penguatan sinaptik.", health: "Penyakit Alzheimer menyerang hipokampus terlebih dahulu, itulah mengapa kesulitan membentuk ingatan baru adalah salah satu gejala paling awal." },
      { overview: "Hipokampus adalah struktur arkikortikal (3 lapis) dari sistem limbik, terdiri dari subfield Cornu Ammonis (CA1-CA4) dan girus dentata, dengan peran kritis dalam memori deklaratif dan kognisi spasial.", position: "Terletak di lobus temporal medial, membentuk lantai kornu inferior ventrikel lateral.", mechanism: "Potensiasi jangka panjang hipokampus (LTP) melalui plastisitas sinaptik bergantung reseptor NMDA dan AMPA memungkinkan pengkodean memori. Korteks entorhinal berfungsi sebagai gerbang input/output utama melalui jalur perforant.", health: "Epilepsi lobus temporal mesial (MTLE) biasanya melibatkan sklerosis hipokampus. Kasus HM — hipokampektomi bilateral — menetapkan hipokampus sebagai esensial untuk pembentukan memori deklaratif." },
      [
        { question: "What type of memory is the hippocampus most critical for forming?", options: ["Declarative (explicit) memory — facts and events", "Procedural (implicit) memory — motor skills", "Working memory", "Reflexive spinal memory"], answerIndex: 0, explanation: "The hippocampus is essential for declarative memory (episodic and semantic), while procedural memory relies more on the basal ganglia and cerebellum." },
        { question: "Which cellular mechanism in hippocampal neurons is considered the synaptic basis of memory formation?", options: ["Long-term potentiation (LTP) via NMDA receptor activation", "Short-term depression (STD)", "Apoptosis", "Myelination of axons"], answerIndex: 0, explanation: "LTP is a persistent strengthening of synaptic connections following repeated stimulation, thought to underlie learning and memory." },
        { question: "Which neurological disease preferentially destroys hippocampal neurons as one of its earliest manifestations?", options: ["Alzheimer's disease", "Parkinson's disease", "Multiple sclerosis", "Huntington's disease"], answerIndex: 0, explanation: "Alzheimer's disease begins with entorhinal cortex and hippocampal tau/amyloid pathology, causing early episodic memory failure." }
      ],
      [
        { question: "Jenis memori apa yang paling kritis dibentuk oleh hipokampus?", options: ["Memori deklaratif (eksplisit) — fakta dan peristiwa", "Memori prosedural (implisit) — keterampilan motorik", "Memori kerja", "Memori spinal refleksif"], answerIndex: 0, explanation: "Hipokampus sangat penting untuk memori deklaratif (episodik dan semantik), sementara memori prosedural lebih bergantung pada ganglia basalis dan serebelum." },
        { question: "Mekanisme seluler mana pada neuron hipokampus yang dianggap sebagai dasar sinaptik dari pembentukan memori?", options: ["Potensiasi jangka panjang (LTP) melalui aktivasi reseptor NMDA", "Depresi jangka pendek (STD)", "Apoptosis", "Mielinasi akson"], answerIndex: 0, explanation: "LTP adalah penguatan persisten koneksi sinaptik setelah stimulasi berulang, yang dianggap mendasari pembelajaran dan memori." },
        { question: "Penyakit neurologis mana yang secara preferensial menghancurkan neuron hipokampus sebagai salah satu manifestasi paling awal?", options: ["Penyakit Alzheimer", "Penyakit Parkinson", "Multiple sclerosis", "Penyakit Huntington"], answerIndex: 0, explanation: "Penyakit Alzheimer dimulai dengan patologi tau/amiloid korteks entorhinal dan hipokampus, menyebabkan kegagalan memori episodik awal." }
      ],
      ["cerebrum", "thalamus"]
    ),

    "Optic Chiasm": lesson("nervous", "brain", { EN: "Optic Chiasm", ID: "Kiasma Optik" }, "✖️👁️",
      { overview: "The optic chiasm is the X-shaped crossing point where the two optic nerves meet underneath the brain. It reroutes visual information so the left brain sees the right visual field and vice versa.", position: "Located at the base of the brain, directly above the pituitary gland and below the hypothalamus.", mechanism: "Fibers from the nasal (inner) half of each retina cross to the opposite side, while temporal (outer) fibers continue on the same side, creating the optic tracts.", health: "Pituitary tumors pressing upward on the optic chiasm classically cause bitemporal hemianopia — loss of both outer (peripheral) visual fields." },
      { overview: "The optic chiasm is the decussation point of retinal ganglion cell axons, where nasal retinal fibers from both eyes cross the midline, resulting in the right optic tract carrying information from the left hemifield of both eyes.", position: "Lies in the suprasellar cistern, superior to the sella turcica and pituitary gland, inferior to the hypothalamus.", mechanism: "Complete decussation of nasal retinal axons ensures each cerebral hemisphere processes the contralateral visual hemifield for binocular stereoscopic integration in the visual cortex.", health: "Compression by pituitary macroadenoma causes bitemporal hemianopia. Complete chiasmal transection causes total bitemporal field loss (tunnel vision)." },
      { overview: "Kiasma optik adalah titik persimpangan berbentuk X di mana dua saraf optik bertemu di bawah otak. Mengarahkan ulang informasi visual sehingga otak kiri melihat lapang pandang kanan dan sebaliknya.", position: "Terletak di dasar otak, tepat di atas kelenjar pituitari dan di bawah hipotalamus.", mechanism: "Serat dari separuh nasal (dalam) setiap retina menyilang ke sisi berlawanan, sementara serat temporal (luar) melanjutkan di sisi yang sama, membentuk traktus optikus.", health: "Tumor pituitari yang menekan kiasma optik secara klasik menyebabkan hemianopia bitemporal — hilangnya lapang pandang luar (perifer) di kedua mata." },
      { overview: "Kiasma optik adalah titik dekusasi akson sel ganglion retina, di mana serat retina nasal dari kedua mata menyilang garis tengah, menghasilkan traktus optik kanan yang membawa informasi dari hemifield kiri kedua mata.", position: "Terletak di sisterna suprasela, superior dari sela tursika dan kelenjar pituitari, inferior dari hipotalamus.", mechanism: "Dekusasi lengkap akson retina nasal memastikan setiap hemisfer serebral memproses hemifield visual kontralateral untuk integrasi stereoskopik binokular di korteks visual.", health: "Kompresi oleh makroadenoma pituitari menyebabkan hemianopia bitemporal. Transeksi total kiasmal menyebabkan kehilangan lapang pandang bitemporal total (penglihatan terowongan)." },
      [
        { question: "What characteristic visual field defect results from compression of the optic chiasm by a pituitary tumor?", options: ["Bitemporal hemianopia (loss of both temporal/lateral visual fields)", "Right homonymous hemianopia", "Central scotoma", "Complete blindness"], answerIndex: 0, explanation: "Pituitary compression damages crossing nasal retinal fibers, causing bitemporal hemianopia." },
        { question: "After partial decussation at the optic chiasm, what structure carries visual information toward the thalamus?", options: ["Optic tract", "Optic nerve", "Optic radiation", "Optic disc"], answerIndex: 0, explanation: "The optic tract runs from the optic chiasm to the lateral geniculate nucleus of the thalamus." },
        { question: "Which retinal fibers cross at the optic chiasm, and which remain on the same side?", options: ["Nasal (medial) fibers cross; temporal (lateral) fibers stay ipsilateral", "Temporal fibers cross; nasal stay ipsilateral", "All fibers cross completely", "No crossing occurs"], answerIndex: 0, explanation: "Nasal retinal fibers decussate to represent the contralateral visual field in each hemisphere." }
      ],
      [
        { question: "Defek lapang pandang khas apa yang terjadi akibat kompresi kiasma optik oleh tumor pituitari?", options: ["Hemianopia bitemporal (hilangnya lapang pandang temporal/lateral keduanya)", "Hemianopia homonim kanan", "Skotoma sentral", "Kebutaan total"], answerIndex: 0, explanation: "Kompresi pituitari merusak serat retina nasal yang menyilang, menyebabkan hemianopia bitemporal." },
        { question: "Setelah dekusasi parsial di kiasma optik, struktur apa yang membawa informasi visual menuju talamus?", options: ["Traktus optikus", "Saraf optik", "Radiasi optik", "Diskus optik"], answerIndex: 0, explanation: "Traktus optikus berjalan dari kiasma optik ke nukleus genikulum lateral talamus." },
        { question: "Serat retina mana yang menyilang di kiasma optik, dan mana yang tetap di sisi yang sama?", options: ["Serat nasal (medial) menyilang; serat temporal (lateral) tetap ipsilateral", "Serat temporal menyilang; nasal tetap ipsilateral", "Semua serat menyilang sepenuhnya", "Tidak ada penyilangan"], answerIndex: 0, explanation: "Serat retina nasal mendekusasi untuk mewakili lapang pandang kontralateral di setiap hemisfer." }
      ],
      ["optic_nerve", "thalamus", "hypothalamus"]
    ),

    // ═══════════════════════════════════════════════════════
    // CARDIOVASCULAR — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Left Ventricle": lesson("cardio", "heart", { EN: "Left Ventricle", ID: "Ventrikel Kiri" }, "🫀💪",
      { overview: "The left ventricle is the hardest-working chamber of the heart — the engine that drives blood through the entire body. Its thick muscular walls generate the force needed to pump blood to every organ via the aorta.", position: "Lower-left portion of the heart, forming most of the apex and left heart border.", mechanism: "During systole (contraction), the thick muscular wall squeezes and the aortic valve opens, ejecting blood into the aorta at about 120 mmHg blood pressure.", health: "Heart attacks (myocardial infarction) most often damage the left ventricular muscle. Left ventricular failure causes blood to back up into the lungs, causing shortness of breath and pulmonary edema." },
      { overview: "The left ventricle is the largest and most muscular cardiac chamber, with wall thickness of 8-12 mm (vs 3-4 mm for right ventricle), generating systolic pressures of 80-120 mmHg.", position: "Posterolateral chamber in the heart, receiving oxygenated blood from the left atrium via the mitral valve and ejecting via the aortic valve.", mechanism: "Frank-Starling mechanism: Increased preload (end-diastolic volume) increases stroke volume. Ejection fraction (EF) = SV/EDV × 100%; normal EF ≥55%. The LV myocardium is perfused primarily by the left anterior descending (LAD) artery.", health: "Dilated cardiomyopathy causes LV dilation and EF reduction (<40%), resulting in systolic heart failure. ACE inhibitors and beta-blockers reduce mortality." },
      { overview: "Ventrikel kiri adalah ruang jantung yang bekerja paling keras — mesin yang mendorong darah ke seluruh tubuh. Dinding ototnya yang tebal menghasilkan gaya yang diperlukan untuk memompa darah ke setiap organ melalui aorta.", position: "Bagian kiri bawah jantung, membentuk sebagian besar apeks dan batas jantung kiri.", mechanism: "Selama sistole (kontraksi), dinding otot tebal memeras dan katup aorta terbuka, mengeluarkan darah ke aorta pada tekanan sekitar 120 mmHg.", health: "Serangan jantung (infark miokard) paling sering merusak otot ventrikel kiri. Kegagalan ventrikel kiri menyebabkan darah menumpuk di paru-paru, menyebabkan sesak napas dan edema paru." },
      { overview: "Ventrikel kiri adalah ruang jantung yang terbesar dan paling berotot, dengan ketebalan dinding 8-12 mm, menghasilkan tekanan sistolik 80-120 mmHg.", position: "Ruang posterolateral jantung yang menerima darah kaya oksigen dari atrium kiri melalui katup mitral dan mengeluarkan melalui katup aorta.", mechanism: "Mekanisme Frank-Starling: Peningkatan preload (volume akhir diastolik) meningkatkan volume sekuncup. Fraksi ejeksi (EF) = SV/EDV × 100%; EF normal ≥55%. Miokardium LV terutama diperfusi oleh arteri desendens anterior kiri (LAD).", health: "Kardiomiopati dilatasi menyebabkan dilatasi LV dan penurunan EF (<40%), mengakibatkan gagal jantung sistolik. ACE inhibitor dan beta-bloker mengurangi mortalitas." },
      [
        { question: "What is the normal ejection fraction of the left ventricle?", options: ["55-70%", "10-20%", "90-100%", "30-40%"], answerIndex: 0, explanation: "Normal LV ejection fraction is ≥55%, representing the proportion of end-diastolic volume ejected with each heartbeat." },
        { question: "Which coronary artery primarily supplies blood to the left ventricular myocardium?", options: ["Left anterior descending (LAD) artery", "Right coronary artery", "Circumflex artery only", "Pulmonary artery"], answerIndex: 0, explanation: "The LAD is often called the 'widow maker' because its occlusion causes massive anterior LV infarction." },
        { question: "In the Frank-Starling mechanism, increasing end-diastolic volume (preload) results in?", options: ["Greater stroke volume due to enhanced myofilament overlap", "Decreased stroke volume", "No change in output", "Arrhythmia"], answerIndex: 0, explanation: "The Frank-Starling law states that cardiac output is proportional to the degree of ventricular filling within physiological limits." }
      ],
      [
        { question: "Berapa fraksi ejeksi normal ventrikel kiri?", options: ["55-70%", "10-20%", "90-100%", "30-40%"], answerIndex: 0, explanation: "EF normal LV adalah ≥55%, mewakili proporsi volume akhir diastolik yang dikeluarkan dengan setiap detak jantung." },
        { question: "Arteri koroner mana yang terutama menyuplai darah ke miokardium ventrikel kiri?", options: ["Arteri desendens anterior kiri (LAD)", "Arteri koroner kanan", "Arteri sirkumfleks saja", "Arteri pulmonal"], answerIndex: 0, explanation: "LAD sering disebut 'widow maker' karena oklusinya menyebabkan infark LV anterior masif." },
        { question: "Dalam mekanisme Frank-Starling, peningkatan volume akhir diastolik (preload) menghasilkan?", options: ["Volume sekuncup yang lebih besar akibat tumpang tindih miofilamen yang ditingkatkan", "Penurunan volume sekuncup", "Tidak ada perubahan output", "Aritmia"], answerIndex: 0, explanation: "Hukum Frank-Starling menyatakan bahwa curah jantung sebanding dengan derajat pengisian ventrikel dalam batas fisiologis." }
      ],
      ["right_ventricle", "aorta", "coronary_arteries"]
    ),

    "Left Atrium": lesson("cardio", "heart", { EN: "Left Atrium", ID: "Atrium Kiri" }, "🫀🔵",
      { overview: "The left atrium is the heart's oxygen-rich receiving chamber. It collects freshly oxygenated blood arriving from the four pulmonary veins after the blood has been refreshed in the lungs.", position: "Upper-back portion of the heart, forming the heart's posterior surface.", mechanism: "Acts as a reservoir and priming pump for the left ventricle, delivering its blood through the mitral valve during diastole.", health: "Atrial fibrillation (irregular electrical signals in the atria) causes the left atrium to quiver rather than contract, promoting blood clot formation and stroke risk." },
      { overview: "The left atrium is the most posterior cardiac chamber receiving oxygenated pulmonary venous blood via four pulmonary veins (two superior, two inferior). Its appendage (LAA) is the primary site of thrombus formation in atrial fibrillation.", position: "Posterosuperior chamber forming the cardiac base, separated from the left ventricle by the mitral valve and from the right atrium by the atrial septum.", mechanism: "Diastolic reservoir function: Stores pulmonary venous return during LV systole. Active atrial contraction contributes ~20-30% of LV filling (atrial kick).", health: "Left atrial dilation from chronic mitral regurgitation or atrial fibrillation increases stroke risk through left atrial appendage thrombus formation, treated with anticoagulation or LAA closure devices." },
      { overview: "Atrium kiri adalah ruang penerima darah kaya oksigen jantung. Mengumpulkan darah beroksigen segar yang datang dari empat vena pulmonal setelah darah diperbarui di paru-paru.", position: "Bagian atas-belakang jantung, membentuk permukaan posterior jantung.", mechanism: "Bertindak sebagai reservoir dan pompa pengisi untuk ventrikel kiri, mengirimkan darahnya melalui katup mitral selama diastole.", health: "Fibrilasi atrium (sinyal listrik tidak teratur di atria) menyebabkan atrium kiri bergetar bukan berkontraksi, mendorong pembentukan bekuan darah dan risiko stroke." },
      { overview: "Atrium kiri adalah ruang jantung paling posterior yang menerima darah vena pulmonal beroksigen melalui empat vena pulmonal. Apendiks (LAA) adalah tempat utama pembentukan trombus pada fibrilasi atrium.", position: "Ruang posterosuperior yang membentuk basis kardiak, dipisahkan dari ventrikel kiri oleh katup mitral dan dari atrium kanan oleh septum atrial.", mechanism: "Fungsi reservoir diastolik: Menyimpan aliran balik vena pulmonal selama sistole LV. Kontraksi atrium aktif berkontribusi ~20-30% dari pengisian LV (atrial kick).", health: "Dilatasi atrium kiri dari regurgitasi mitral kronis atau fibrilasi atrium meningkatkan risiko stroke melalui pembentukan trombus apendiks atrium kiri, diobati dengan antikoagulasi atau perangkat penutupan LAA." },
      [
        { question: "Which four vessels deliver oxygenated blood from the lungs into the left atrium?", options: ["Pulmonary veins (four — two from each lung)", "Pulmonary arteries", "Vena cava superior and inferior", "Coronary veins"], answerIndex: 0, explanation: "The four pulmonary veins (right superior/inferior, left superior/inferior) carry oxygenated blood from lung alveoli to the left atrium." },
        { question: "What valve controls blood flow between the left atrium and left ventricle?", options: ["Mitral (bicuspid) valve", "Aortic valve", "Tricuspid valve", "Pulmonary valve"], answerIndex: 0, explanation: "The mitral valve prevents backflow from the left ventricle into the left atrium during systole." },
        { question: "Atrial fibrillation increases the risk of stroke primarily through which mechanism?", options: ["Thrombus formation in the left atrial appendage embolizing to the brain", "Direct coronary artery compression", "Pulmonary valve regurgitation", "Aortic stenosis"], answerIndex: 0, explanation: "Stagnant blood in the fibrillating left atrium and its appendage forms clots that can embolize to cerebral arteries." }
      ],
      [
        { question: "Pembuluh mana yang menghantarkan darah beroksigen dari paru-paru ke atrium kiri?", options: ["Vena pulmonal (empat — dua dari setiap paru)", "Arteri pulmonal", "Vena kava superior dan inferior", "Vena koroner"], answerIndex: 0, explanation: "Keempat vena pulmonal membawa darah beroksigen dari alveolus paru ke atrium kiri." },
        { question: "Katup apa yang mengontrol aliran darah antara atrium kiri dan ventrikel kiri?", options: ["Katup mitral (bikuspidalis)", "Katup aorta", "Katup trikuspidalis", "Katup pulmonal"], answerIndex: 0, explanation: "Katup mitral mencegah aliran balik dari ventrikel kiri ke atrium kiri selama sistole." },
        { question: "Fibrilasi atrium meningkatkan risiko stroke terutama melalui mekanisme apa?", options: ["Pembentukan trombus di apendiks atrium kiri yang beremboli ke otak", "Kompresi arteri koroner langsung", "Regurgitasi katup pulmonal", "Stenosis aorta"], answerIndex: 0, explanation: "Darah yang menggenang di atrium kiri yang berfibrillasi dan apendiknya membentuk bekuan yang dapat beremboli ke arteri serebral." }
      ],
      ["right_atrium", "left_ventricle", "mitral_valve"]
    ),

    "Right Atrium": lesson("cardio", "heart", { EN: "Right Atrium", ID: "Atrium Kanan" }, "🫀🔴",
      { overview: "The right atrium is the first stop for oxygen-depleted blood returning from the body. It collects used blood from the superior and inferior vena cava, then passes it to the right ventricle for dispatch to the lungs.", position: "Upper-right chamber of the heart, forming the right heart border.", mechanism: "Acts as a venous reservoir and primer. The sinoatrial (SA) node — the heart's pacemaker — is located in the wall of the right atrium and initiates each heartbeat.", health: "Right atrial enlargement from chronic lung disease or tricuspid valve problems can cause swelling of the legs and abdomen (right heart failure signs)." },
      { overview: "The right atrium receives venous blood from the superior vena cava (upper body), inferior vena cava (lower body), and coronary sinus (myocardial venous drainage). The sinoatrial node at the sulcus terminalis is the cardiac pacemaker.", position: "Anterosuperior right chamber separated from right ventricle by tricuspid valve and from left atrium by the atrial septum (containing the fossa ovalis).", mechanism: "SA node spontaneously depolarizes at 60-100 bpm. Action potential propagates via internodal pathways to AV node, bundle of His, bundle branches, and Purkinje fibers.", health: "Tricuspid valve stenosis or pulmonary hypertension causes right atrial pressure elevation, leading to systemic venous hypertension and right heart failure (hepatomegaly, edema, ascites)." },
      { overview: "Atrium kanan adalah pemberhentian pertama bagi darah kekurangan oksigen yang kembali dari tubuh. Mengumpulkan darah bekas dari vena kava superior dan inferior, lalu meneruskannya ke ventrikel kanan untuk dikirim ke paru-paru.", position: "Ruang kanan atas jantung, membentuk batas jantung kanan.", mechanism: "Bertindak sebagai reservoir vena dan pengisi. Nodus sinoatrial (SA) — alat pacu jantung — terletak di dinding atrium kanan dan memulai setiap detak jantung.", health: "Pembesaran atrium kanan dari penyakit paru kronis atau masalah katup trikuspidalis dapat menyebabkan pembengkakan kaki dan perut (tanda-tanda gagal jantung kanan)." },
      { overview: "Atrium kanan menerima darah vena dari vena kava superior (tubuh atas), vena kava inferior (tubuh bawah), dan sinus koroner (drainase vena miokardium). Nodus sinoatrial di sulkus terminalis adalah alat pacu jantung.", position: "Ruang kanan anterosuperior yang dipisahkan dari ventrikel kanan oleh katup trikuspidalis dan dari atrium kiri oleh septum atrial (mengandung fossa ovalis).", mechanism: "Nodus SA spontan mendepolarisasi pada 60-100 dpm. Potensial aksi merambat melalui jalur internodal ke nodus AV, berkas His, cabang berkas, dan serat Purkinje.", health: "Stenosis katup trikuspidalis atau hipertensi pulmonal menyebabkan peningkatan tekanan atrium kanan, menyebabkan hipertensi vena sistemik dan gagal jantung kanan." },
      [
        { question: "The cardiac pacemaker (sinoatrial node) is located in which cardiac structure?", options: ["Wall of the right atrium near the superior vena cava junction", "Left ventricle", "Atrioventricular node", "Interventricular septum"], answerIndex: 0, explanation: "The SA node is located at the junction of the superior vena cava and right atrium." },
        { question: "Which two major veins empty deoxygenated systemic blood directly into the right atrium?", options: ["Superior vena cava and inferior vena cava", "Pulmonary veins", "Coronary arteries", "Jugular veins"], answerIndex: 0, explanation: "The SVC drains the upper body and IVC drains the lower body, both emptying into the right atrium." },
        { question: "The embryological remnant of the foramen ovale that can remain patent in adults, potentially causing paradoxical embolism, is called?", options: ["Patent foramen ovale (PFO)", "Ventricular septal defect (VSD)", "Atrial flutter", "Cor triatriatum"], answerIndex: 0, explanation: "PFO occurs in ~25% of adults and is a potential pathway for paradoxical embolism from venous clots to arterial circulation." }
      ],
      [
        { question: "Alat pacu jantung (nodus sinoatrial) terletak di struktur jantung mana?", options: ["Dinding atrium kanan dekat persimpangan vena kava superior", "Ventrikel kiri", "Nodus atrioventrikel", "Septum interventrikel"], answerIndex: 0, explanation: "Nodus SA terletak di persimpangan vena kava superior dan atrium kanan." },
        { question: "Dua vena besar mana yang mengosongkan darah sistemik terdeoksigenasi langsung ke atrium kanan?", options: ["Vena kava superior dan vena kava inferior", "Vena pulmonal", "Arteri koroner", "Vena jugularis"], answerIndex: 0, explanation: "VKS mengalirkan tubuh bagian atas dan VKI mengalirkan tubuh bagian bawah, keduanya mengosongkan ke atrium kanan." },
        { question: "Sisa embriologis foramen ovale yang dapat tetap paten pada orang dewasa, berpotensi menyebabkan emboli paradoksal, disebut?", options: ["Foramen ovale paten (FOP)", "Defek septum ventrikel (DSV)", "Flutter atrium", "Cor triatriatum"], answerIndex: 0, explanation: "FOP terjadi pada ~25% orang dewasa dan merupakan jalur potensial untuk emboli paradoksal dari bekuan vena ke sirkulasi arteri." }
      ],
      ["left_atrium", "right_ventricle", "tricuspid_valve"]
    ),

    "Coronary Arteries": lesson("cardio", "heart", { EN: "Coronary Arteries", ID: "Arteri Koroner" }, "🫀🌿",
      { overview: "The coronary arteries are the heart's own blood supply system — a network of vessels that wrap around and penetrate the cardiac muscle, delivering the oxygen and nutrients the heart needs to keep beating.", position: "Arise from the root of the aorta just above the aortic valve, encircling the heart in the atrioventricular and interventricular grooves.", mechanism: "Two main coronary arteries — left (LCA) and right (RCA) — branch into a network covering every region of the heart. They fill primarily during diastole when the heart muscle relaxes.", health: "Atherosclerosis (fatty plaque buildup) narrows coronary arteries causing angina (chest pain) or heart attack (myocardial infarction) if completely blocked." },
      { overview: "The left and right coronary arteries originate from the left and right coronary sinuses of the aortic root. The LCA divides into the left anterior descending (LAD) and left circumflex (LCx) arteries.", position: "The RCA runs in the right atrioventricular groove. The LAD descends in the anterior interventricular groove; LCx travels in the left atrioventricular groove.", mechanism: "Coronary perfusion pressure = Diastolic BP - LV end-diastolic pressure. Flow is primarily diastolic for the LV since LV systolic contraction compresses intramyocardial vessels.", health: "STEMI (ST-elevation MI) from complete occlusion requires emergent revascularization via PCI (angioplasty/stenting) within 90 minutes of presentation." },
      { overview: "Arteri koroner adalah sistem suplai darah jantung itu sendiri — jaringan pembuluh yang membungkus dan menembus otot jantung, mengirimkan oksigen dan nutrisi yang dibutuhkan jantung untuk terus berdetak.", position: "Berasal dari pangkal aorta tepat di atas katup aorta, mengelilingi jantung dalam alur atrioventrikular dan interventricular.", mechanism: "Dua arteri koroner utama — kiri (LCA) dan kanan (RCA) — bercabang menjadi jaringan yang menutupi setiap wilayah jantung. Mereka mengisi terutama selama diastole saat otot jantung relaksasi.", health: "Aterosklerosis (penumpukan plak lemak) mempersempit arteri koroner menyebabkan angina (nyeri dada) atau serangan jantung (infark miokard) jika tersumbat sepenuhnya." },
      { overview: "Arteri koroner kiri dan kanan berasal dari sinus koroner kiri dan kanan dari pangkal aorta. LCA terbagi menjadi arteri desendens anterior kiri (LAD) dan arteri sirkumfleks kiri (LCx).", position: "RCA berjalan di alur atrioventrikular kanan. LAD turun di alur interventrikular anterior; LCx berjalan di alur atrioventrikular kiri.", mechanism: "Tekanan perfusi koroner = DBP - tekanan akhir diastolik LV. Aliran terutama diastolik untuk LV karena kontraksi sistolik LV memampatkan pembuluh intramyokardial.", health: "STEMI (MI elevasi ST) dari oklusi lengkap memerlukan revaskularisasi segera melalui PCI (angioplasti/stenting) dalam 90 menit setelah presentasi." },
      [
        { question: "Which branch of the left coronary artery supplies the anterior wall of the left ventricle and is commonly called the 'widow maker'?", options: ["Left anterior descending (LAD) artery", "Left circumflex artery", "Right marginal artery", "Posterior descending artery"], answerIndex: 0, explanation: "LAD occlusion causes massive anterior MI affecting the majority of the left ventricular myocardium." },
        { question: "During which phase of the cardiac cycle does most coronary perfusion of the left ventricle occur?", options: ["Diastole", "Systole", "Isovolumic contraction", "Isovolumic relaxation"], answerIndex: 0, explanation: "LV systolic contraction compresses intramyocardial vessels, so LV coronary flow is primarily diastolic." },
        { question: "Atherosclerotic narrowing of coronary arteries causing chest pain on exertion but not at rest is called?", options: ["Stable angina pectoris", "STEMI", "Pulmonary embolism", "Aortic dissection"], answerIndex: 0, explanation: "Stable angina results from reduced coronary reserve when demand exceeds the capacity of a significantly narrowed coronary artery." }
      ],
      [
        { question: "Cabang arteri koroner kiri mana yang menyuplai dinding anterior ventrikel kiri dan umumnya disebut 'widow maker'?", options: ["Arteri desendens anterior kiri (LAD)", "Arteri sirkumfleks kiri", "Arteri marginal kanan", "Arteri desendens posterior"], answerIndex: 0, explanation: "Oklusi LAD menyebabkan MI anterior masif yang mempengaruhi sebagian besar miokardium ventrikel kiri." },
        { question: "Selama fase siklus jantung mana sebagian besar perfusi koroner ventrikel kiri terjadi?", options: ["Diastole", "Sistole", "Kontraksi isovolemik", "Relaksasi isovolemik"], answerIndex: 0, explanation: "Kontraksi sistolik LV memampatkan pembuluh intramyokardial, sehingga aliran koroner LV terutama terjadi saat diastole." },
        { question: "Penyempitan aterosklerotik arteri koroner yang menyebabkan nyeri dada saat beraktivitas tetapi tidak saat istirahat disebut?", options: ["Angina pektoris stabil", "STEMI", "Emboli paru", "Diseksi aorta"], answerIndex: 0, explanation: "Angina stabil terjadi akibat berkurangnya cadangan koroner ketika permintaan melebihi kapasitas arteri koroner yang menyempit signifikan." }
      ],
      ["left_ventricle", "aorta"]
    ),

    "Mitral Valve": lesson("cardio", "heart", { EN: "Mitral Valve", ID: "Katup Mitral" }, "🫀🚪",
      { overview: "The mitral valve is a two-leaflet gate between the left atrium and left ventricle. It opens to allow oxygenated blood to flow from the left atrium into the left ventricle, then snaps shut to prevent backflow during each heartbeat.", position: "Located between the left atrium and left ventricle on the left side of the heart.", mechanism: "Strong fibrous strings (chordae tendineae) attached to papillary muscles hold the leaflets in place against the high pressure of ventricular contraction, preventing them from flipping backward.", health: "Mitral regurgitation (leaky valve) and mitral stenosis (narrowed valve) are common conditions. Rheumatic fever can damage the mitral valve, requiring surgical repair or replacement." },
      { overview: "The mitral (bicuspid) valve consists of two leaflets (anterior and posterior), two papillary muscles, and chordae tendineae. It maintains unidirectional flow from left atrium to left ventricle.", position: "Atrioventricular position in the left heart, with annulus in the fibrous skeleton of the heart.", mechanism: "During LV systole, papillary muscles contract, tensioning chordae tendineae and preventing mitral leaflet prolapse into the left atrium (preventing regurgitation).", health: "Mitral valve prolapse (MVP) affects ~2-3% of the population. Severe mitral stenosis (rheumatic etiology) causes left atrial hypertension, pulmonary congestion, and atrial fibrillation." },
      { overview: "Katup mitral adalah gerbang dua daun antara atrium kiri dan ventrikel kiri. Terbuka untuk membiarkan darah beroksigen mengalir dari atrium kiri ke ventrikel kiri, kemudian menutup rapat untuk mencegah aliran balik selama setiap detak jantung.", position: "Terletak di antara atrium kiri dan ventrikel kiri di sisi kiri jantung.", mechanism: "Benang fibrosa kuat (korda tendinea) yang melekat pada otot papilaris menahan daun katup agar tidak terbalik ke belakang melawan tekanan tinggi kontraksi ventrikel.", health: "Regurgitasi mitral (katup bocor) dan stenosis mitral (katup menyempit) adalah kondisi umum. Demam rematik dapat merusak katup mitral, memerlukan perbaikan atau penggantian bedah." },
      { overview: "Katup mitral (bikuspidalis) terdiri dari dua daun (anterior dan posterior), dua otot papilaris, dan korda tendinea. Mempertahankan aliran searah dari atrium kiri ke ventrikel kiri.", position: "Posisi atrioventrikular di jantung kiri, dengan anulus di kerangka fibrosa jantung.", mechanism: "Selama sistole LV, otot papilaris berkontraksi, menegangkan korda tendinea dan mencegah prolaps daun katup mitral ke atrium kiri (mencegah regurgitasi).", health: "Prolaps katup mitral (MVP) mempengaruhi ~2-3% populasi. Stenosis mitral berat (etiologi rematik) menyebabkan hipertensi atrium kiri, kongesti paru, dan fibrilasi atrium." },
      [
        { question: "How many leaflets (cusps) does the mitral valve have, distinguishing it from the tricuspid valve?", options: ["Two leaflets (bicuspid)", "Three leaflets (tricuspid)", "Four leaflets", "One leaflet (unicuspid)"], answerIndex: 0, explanation: "The mitral (bicuspid) valve has two leaflets — anterior and posterior — while the tricuspid has three." },
        { question: "What structure prevents the mitral valve leaflets from everting into the left atrium during ventricular systole?", options: ["Chordae tendineae anchored to papillary muscles", "Aortic valve", "Fibrous pericardium", "Pulmonary veins"], answerIndex: 0, explanation: "Papillary muscle contraction during systole tightens the chordae tendineae, preventing mitral leaflet prolapse." },
        { question: "Which infectious disease has historically caused the most mitral valve stenosis by scarring and fusing the leaflets?", options: ["Rheumatic fever (Group A Streptococcus)", "Influenza", "COVID-19", "Tuberculosis"], answerIndex: 0, explanation: "Rheumatic fever triggers an autoimmune response that scars cardiac valves, classically causing mitral stenosis." }
      ],
      [
        { question: "Berapa daun (kuspis) yang dimiliki katup mitral, membedakannya dari katup trikuspidalis?", options: ["Dua daun (bikuspidalis)", "Tiga daun (trikuspidalis)", "Empat daun", "Satu daun (unikusipidalis)"], answerIndex: 0, explanation: "Katup mitral (bikuspidalis) memiliki dua daun — anterior dan posterior — sementara trikuspidalis memiliki tiga." },
        { question: "Struktur apa yang mencegah daun katup mitral terbalik ke atrium kiri selama sistole ventrikel?", options: ["Korda tendinea yang tertambat pada otot papilaris", "Katup aorta", "Perikardium fibrosa", "Vena pulmonal"], answerIndex: 0, explanation: "Kontraksi otot papilaris selama sistole mengencangkan korda tendinea, mencegah prolaps daun mitral." },
        { question: "Penyakit infeksi mana yang secara historis paling banyak menyebabkan stenosis katup mitral dengan membentuk jaringan parut dan fusi daun?", options: ["Demam rematik (Streptococcus Grup A)", "Influenza", "COVID-19", "Tuberkulosis"], answerIndex: 0, explanation: "Demam rematik memicu respons autoimun yang membentuk parut pada katup jantung, secara klasik menyebabkan stenosis mitral." }
      ],
      ["left_atrium", "left_ventricle"]
    ),

    "Pericardium": lesson("cardio", "heart", { EN: "Pericardium", ID: "Perikardium" }, "🫀🛡️",
      { overview: "The pericardium is the tough double-layered protective sac surrounding the heart. It keeps the heart in position, prevents it from over-expanding, and protects it from nearby infections.", position: "Encloses the entire heart and the roots of the major vessels entering and leaving the heart.", mechanism: "The outer fibrous pericardium provides rigid protection. The inner serous pericardium produces a small amount of lubricating fluid (15-50 mL) that reduces friction during each heartbeat.", health: "Pericarditis (inflammation) causes sharp chest pain that worsens when lying flat. Cardiac tamponade (excessive pericardial fluid) compresses the heart and is a life-threatening emergency." },
      { overview: "The pericardium consists of the outer fibrous pericardium and the inner bilayered serous pericardium (parietal and visceral layers, the latter also called the epicardium).", position: "Attached anteriorly to the sternum, posteriorly to vertebral bodies, and inferiorly to the diaphragm.", mechanism: "Pericardial fluid provides lubrication, reducing friction to <1 mmHg during cardiac motion. The fibrous pericardium limits acute cardiac dilation (pericardial restraint).", health: "Cardiac tamponade presents with Beck's triad: hypotension, distended neck veins (elevated JVP), and muffled heart sounds. Emergency pericardiocentesis is lifesaving." },
      { overview: "Perikardium adalah kantung pelindung berlapis ganda yang keras mengelilingi jantung. Menjaga posisi jantung, mencegahnya mengembang berlebihan, dan melindunginya dari infeksi di sekitarnya.", position: "Membungkus seluruh jantung dan akar pembuluh besar yang masuk dan keluar dari jantung.", mechanism: "Perikardium fibrosa luar memberikan perlindungan kaku. Perikardium serosa dalam menghasilkan sejumlah kecil cairan pelumas (15-50 mL) yang mengurangi gesekan selama setiap detak jantung.", health: "Perikarditis (radang) menyebabkan nyeri dada tajam yang memburuk saat berbaring. Tamponade jantung (cairan perikard berlebihan) memampatkan jantung dan merupakan darurat yang mengancam jiwa." },
      { overview: "Perikardium terdiri dari perikardium fibrosa luar dan perikardium serosa berlapis ganda dalam (lapisan parietal dan viseral, yang terakhir juga disebut epikardium).", position: "Melekat di anterior pada sternum, di posterior pada badan vertebral, dan di inferior pada diafragma.", mechanism: "Cairan perikard memberikan pelumasan, mengurangi gesekan menjadi <1 mmHg selama gerakan jantung. Perikardium fibrosa membatasi dilatasi jantung akut (pericardial restraint).", health: "Tamponade jantung bermanifestasi dengan trias Beck: hipotensi, vena leher yang distensi (JVP tinggi), dan bunyi jantung teredam. Perikardiosentesis darurat menyelamatkan jiwa." },
      [
        { question: "Beck's triad of hypotension, elevated JVP (distended neck veins), and muffled heart sounds is the classic presentation of which emergency?", options: ["Cardiac tamponade", "Aortic dissection", "Pulmonary embolism", "STEMI"], answerIndex: 0, explanation: "Cardiac tamponade is caused by compressive pericardial fluid that reduces ventricular filling and cardiac output." },
        { question: "What is the normal volume of pericardial fluid, and what is its function?", options: ["15-50 mL — lubricates the pericardial surfaces reducing cardiac friction", "500 mL — provides cardiac nutrition", "1 mL — prevents fibrosis", "2 liters — cushions the heart"], answerIndex: 0, explanation: "A small amount of serous fluid between parietal and visceral pericardium lubricates the cardiac surface during each contraction." },
        { question: "Which layer of the pericardium is also known as the epicardium?", options: ["Visceral layer of the serous pericardium", "Parietal layer of the serous pericardium", "Fibrous pericardium", "Myocardium"], answerIndex: 0, explanation: "The visceral serous pericardium (epicardium) adheres directly to the myocardium." }
      ],
      [
        { question: "Trias Beck berupa hipotensi, JVP tinggi (vena leher distensi), dan bunyi jantung teredam adalah presentasi klasik dari kondisi darurat apa?", options: ["Tamponade jantung", "Diseksi aorta", "Emboli paru", "STEMI"], answerIndex: 0, explanation: "Tamponade jantung disebabkan oleh cairan perikard kompresif yang mengurangi pengisian ventrikel dan curah jantung." },
        { question: "Berapa volume normal cairan perikard dan apa fungsinya?", options: ["15-50 mL — melumasi permukaan perikard mengurangi gesekan jantung", "500 mL — menyediakan nutrisi jantung", "1 mL — mencegah fibrosis", "2 liter — meredam jantung"], answerIndex: 0, explanation: "Sejumlah kecil cairan serosa antara perikardium parietal dan viseral melumasi permukaan jantung selama setiap kontraksi." },
        { question: "Lapisan perikardium mana yang juga dikenal sebagai epikardium?", options: ["Lapisan viseral dari perikardium serosa", "Lapisan parietal dari perikardium serosa", "Perikardium fibrosa", "Miokardium"], answerIndex: 0, explanation: "Perikardium serosa viseral (epikardium) melekat langsung pada miokardium." }
      ],
      ["left_ventricle", "right_ventricle"]
    ),

    // ═══════════════════════════════════════════════════════
    // RESPIRATORY — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Right Lung (3 Lobes)": lesson("resp", "lungs", { EN: "Right Lung (3 Lobes)", ID: "Paru-Paru Kanan (3 Lobus)" }, "🫁🟢",
      { overview: "The right lung is slightly larger than the left and has three lobes. It does about 55% of the total breathing work due to its larger size.", position: "Occupies the right pleural cavity, extending from the diaphragm below to the apex of the chest above.", mechanism: "Air flows down the trachea, then into the right main bronchus and its three lobar bronchi. Oxygen crosses thin alveolar membranes into capillaries, while carbon dioxide is removed.", health: "Pneumonia, lung cancer, and pulmonary embolism affecting the right lung can cause pleuritic chest pain, cough, and breathing difficulty." },
      { overview: "The right lung has three lobes (Superior, Middle, Inferior) separated by the horizontal fissure (between superior and middle) and oblique fissure (between middle and inferior).", position: "Right hemithorax, bounded by the costal, mediastinal, and diaphragmatic surfaces. Medial surface contains the right hilum with the bronchus, pulmonary artery, and veins.", mechanism: "Right main bronchus is shorter, wider, and more vertical than left — making it the more common site for aspirated foreign bodies. Contains ~260 million alveoli providing ~35 m² gas exchange surface.", health: "Right middle lobe syndrome involves chronic collapse or consolidation, often due to lymph node compression of the middle lobe bronchus." },
      { overview: "Paru-paru kanan sedikit lebih besar dari yang kiri dan memiliki tiga lobus. Melakukan sekitar 55% dari total pekerjaan pernapasan karena ukurannya yang lebih besar.", position: "Menempati rongga pleura kanan, membentang dari diafragma di bawah hingga apeks dada di atas.", mechanism: "Udara mengalir turun trakea, kemudian ke bronkus utama kanan dan tiga bronkus lobar-nya. Oksigen melintasi membran alveolar tipis ke kapiler, sementara karbon dioksida dikeluarkan.", health: "Pneumonia, kanker paru, dan emboli paru yang mempengaruhi paru kanan dapat menyebabkan nyeri dada pleuritik, batuk, dan kesulitan bernapas." },
      { overview: "Paru-paru kanan memiliki tiga lobus (Superior, Tengah, Inferior) yang dipisahkan oleh fisura horizontal (antara superior dan tengah) dan fisura oblik (antara tengah dan inferior).", position: "Hemitoraks kanan, dibatasi oleh permukaan kostal, mediastinal, dan diafragmatik. Permukaan medial mengandung hilus kanan dengan bronkus, arteri pulmonal, dan vena.", mechanism: "Bronkus utama kanan lebih pendek, lebih lebar, dan lebih vertikal dari kiri — menjadikannya tempat yang lebih umum untuk benda asing yang teraspirasi. Mengandung ~260 juta alveolus.", health: "Sindrom lobus tengah kanan melibatkan kolaps atau konsolidasi kronis, sering akibat kompresi kelenjar getah bening pada bronkus lobus tengah." },
      [
        { question: "How many lobes does the right lung contain, and what structures separate them?", options: ["Three lobes — separated by horizontal and oblique fissures", "Two lobes — separated by oblique fissure", "Four lobes — separated by three fissures", "One lobe"], answerIndex: 0, explanation: "The right lung has superior, middle, and inferior lobes separated by horizontal and oblique fissures." },
        { question: "Why is the right main bronchus more likely to receive an aspirated foreign body than the left?", options: ["It is shorter, wider, and more vertical, providing a more direct path from the trachea", "It is longer and narrower", "It lies completely posterior", "It receives no airflow"], answerIndex: 0, explanation: "The wider angle of the right main bronchus makes aspirated material more likely to enter it." },
        { question: "Approximately how many alveoli does the human right lung contain?", options: ["~260 million alveoli", "~1,000", "~10,000", "~1 million"], answerIndex: 0, explanation: "Both lungs together contain approximately 480-500 million alveoli providing ~70 m² total gas exchange surface." }
      ],
      [
        { question: "Berapa lobus paru-paru kanan dan struktur apa yang memisahkannya?", options: ["Tiga lobus — dipisahkan oleh fisura horizontal dan oblik", "Dua lobus — dipisahkan oleh fisura oblik", "Empat lobus — dipisahkan oleh tiga fisura", "Satu lobus"], answerIndex: 0, explanation: "Paru kanan memiliki lobus superior, tengah, dan inferior yang dipisahkan oleh fisura horizontal dan oblik." },
        { question: "Mengapa bronkus utama kanan lebih mungkin menerima benda asing yang teraspirasi daripada yang kiri?", options: ["Lebih pendek, lebih lebar, dan lebih vertikal, memberikan jalur lebih langsung dari trakea", "Lebih panjang dan lebih sempit", "Terletak sepenuhnya di posterior", "Tidak menerima aliran udara"], answerIndex: 0, explanation: "Sudut yang lebih lebar dari bronkus utama kanan membuat materi yang teraspirasi lebih mungkin masuk ke dalamnya." },
        { question: "Berapa perkiraan jumlah alveolus yang dikandung paru-paru kanan manusia?", options: ["~260 juta alveolus", "~1.000", "~10.000", "~1 juta"], answerIndex: 0, explanation: "Kedua paru bersama-sama mengandung sekitar 480-500 juta alveolus yang menyediakan ~70 m² total permukaan pertukaran gas." }
      ],
      ["left_lung", "trachea"]
    ),

    // ═══════════════════════════════════════════════════════
    // DIGESTIVE — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Gallbladder": lesson("digestive", "digestive_organs", { EN: "Gallbladder", ID: "Kandung Empedu" }, "🟢🫁",
      { overview: "The gallbladder is a small pear-shaped pouch tucked under your liver. It stores and concentrates bile — the digestive fluid made by the liver — and releases it into the small intestine after you eat a fatty meal.", position: "Lies in a fossa on the inferior surface of the liver's right lobe, connected to the common bile duct.", mechanism: "Between meals, bile from the liver fills and concentrates in the gallbladder (up to 10-fold). After a fatty meal, cholecystokinin (CCK) signals the gallbladder to contract and eject bile into the duodenum.", health: "Gallstones (cholesterol or pigment crystals) can block bile flow, causing intense right upper abdominal pain (biliary colic). Cholecystectomy (surgical removal) is a common treatment." },
      { overview: "The gallbladder is a ~7-10 cm pear-shaped musculomembranous sac with fundus, body, and neck, connected to the common bile duct via the cystic duct.", position: "Fossa vesicae biliaris on the visceral surface of the liver's right lobe (segments IVb and V).", mechanism: "CCK (released by I-cells of duodenum after fat ingestion) stimulates gallbladder contraction and Sphincter of Oddi relaxation, delivering concentrated bile to the duodenum for lipid emulsification.", health: "Acute cholecystitis presents with Murphy's sign (inspiratory arrest on RUQ palpation). Choledocholithiasis (CBD stone) causes obstructive jaundice and ascending cholangitis (Charcot's triad: fever, jaundice, RUQ pain)." },
      { overview: "Kandung empedu adalah kantung kecil berbentuk buah pir yang tersembunyi di bawah hati. Menyimpan dan memekatkan empedu — cairan pencernaan yang dibuat oleh hati — dan melepaskannya ke usus halus setelah makan makanan berlemak.", position: "Terletak di fossa pada permukaan inferior lobus kanan hati, terhubung ke saluran empedu umum.", mechanism: "Di antara waktu makan, empedu dari hati mengisi dan dipekatkan di kandung empedu (hingga 10 kali lipat). Setelah makan berlemak, kolecistokinin (CCK) memberi sinyal kandung empedu untuk berkontraksi dan mengeluarkan empedu ke duodenum.", health: "Batu empedu (kristal kolesterol atau pigmen) dapat memblokir aliran empedu, menyebabkan nyeri perut kanan atas yang intens (kolik biliar). Kolesistektomi (pengangkatan bedah) adalah pengobatan umum." },
      { overview: "Kandung empedu adalah kantung muskulomembranosa ~7-10 cm berbentuk buah pir dengan fundus, badan, dan leher, terhubung ke saluran empedu umum melalui duktus sistikus.", position: "Fossa vesicae biliaris pada permukaan viseral lobus kanan hati (segmen IVb dan V).", mechanism: "CCK (dilepaskan oleh sel-I duodenum setelah konsumsi lemak) merangsang kontraksi kandung empedu dan relaksasi Sfingter Oddi, mengirimkan empedu pekat ke duodenum untuk emulsifikasi lipid.", health: "Kolesistitis akut bermanifestasi dengan tanda Murphy (berhenti inspirasi saat palpasi RUQ). Koledokolitiasis menyebabkan ikterus obstruktif dan kolangitis asenden (trias Charcot: demam, ikterus, nyeri RUQ)." },
      [
        { question: "What hormone, released by the duodenum after a fatty meal, triggers gallbladder contraction and bile release?", options: ["Cholecystokinin (CCK)", "Gastrin", "Secretin", "Insulin"], answerIndex: 0, explanation: "CCK from duodenal I-cells stimulates gallbladder contraction and relaxation of the Sphincter of Oddi." },
        { question: "Gallstones most commonly form from supersaturation of which substance in bile?", options: ["Cholesterol", "Protein", "Water", "Potassium"], answerIndex: 0, explanation: "Cholesterol gallstones account for >80% of gallstones in Western populations due to bile cholesterol supersaturation." },
        { question: "Charcot's triad (fever, jaundice, and RUQ pain) is the classic presentation of which biliary emergency?", options: ["Ascending cholangitis", "Acute pancreatitis", "Appendicitis", "Hepatitis A"], answerIndex: 0, explanation: "Ascending cholangitis results from biliary obstruction with bacterial superinfection requiring urgent biliary decompression." }
      ],
      [
        { question: "Hormon apa yang dilepaskan oleh duodenum setelah makan berlemak memicu kontraksi kandung empedu dan pelepasan empedu?", options: ["Kolecistokinin (CCK)", "Gastrin", "Sekretin", "Insulin"], answerIndex: 0, explanation: "CCK dari sel-I duodenum merangsang kontraksi kandung empedu dan relaksasi Sfingter Oddi." },
        { question: "Batu empedu paling umum terbentuk dari supersaturasi zat apa dalam empedu?", options: ["Kolesterol", "Protein", "Air", "Kalium"], answerIndex: 0, explanation: "Batu empedu kolesterol menyumbang >80% batu empedu di populasi Barat akibat supersaturasi kolesterol empedu." },
        { question: "Trias Charcot (demam, ikterus, dan nyeri RUQ) adalah presentasi klasik dari kondisi biliar darurat apa?", options: ["Kolangitis asenden", "Pankreatitis akut", "Apendisitis", "Hepatitis A"], answerIndex: 0, explanation: "Kolangitis asenden terjadi akibat obstruksi biliar dengan superinfeksi bakteri yang memerlukan dekompresi biliar segera." }
      ],
      ["liver", "stomach"]
    ),

    "Pancreas": lesson("digestive", "digestive_organs", { EN: "Pancreas", ID: "Pankreas" }, "🟡💊",
      { overview: "The pancreas is a double-duty gland hidden behind the stomach. It produces powerful digestive enzymes to break down all food types (exocrine function), and it also controls blood sugar levels by making insulin and glucagon hormones (endocrine function).", position: "Lies transversely behind the stomach in the retroperitoneal space, with its head nestled in the C-curve of the duodenum.", mechanism: "Digestive juices flow into the duodenum to break down proteins, fats, and carbohydrates. Beta cells in the islets of Langerhans release insulin when blood sugar rises; alpha cells release glucagon when it falls.", health: "Type 1 diabetes results from immune destruction of insulin-producing beta cells. Pancreatitis (inflammation) causes severe upper abdominal pain radiating to the back." },
      { overview: "The pancreas is a retroperitoneal mixed exocrine-endocrine gland divided into head (in C-loop of duodenum), neck, body, and tail (touching spleen). Its endocrine component consists of ~1 million islets of Langerhans.", position: "Lies anterior to L1-L2 vertebrae, posterior to stomach. Pancreatic duct (of Wirsung) drains into the ampulla of Vater in the duodenum.", mechanism: "Exocrine: Acinar cells secrete digestive proenzymes (trypsinogen, chymotrypsinogen, lipase, amylase) triggered by secretin and CCK. Endocrine: Beta-cell insulin enables cellular glucose uptake; alpha-cell glucagon promotes gluconeogenesis/glycogenolysis.", health: "Acute necrotizing pancreatitis from gallstones or alcohol causes systemic inflammation, SIRS, and multiorgan failure. Pancreatic cancer (usually ductal adenocarcinoma) has very poor prognosis." },
      { overview: "Pankreas adalah kelenjar serbaguna yang tersembunyi di belakang perut. Menghasilkan enzim pencernaan yang kuat untuk memecah semua jenis makanan (fungsi eksokrin), dan juga mengontrol kadar gula darah dengan membuat hormon insulin dan glukagon (fungsi endokrin).", position: "Terletak melintang di belakang lambung dalam ruang retroperitoneal, dengan kepalanya bersarang di lekukan-C duodenum.", mechanism: "Jus pencernaan mengalir ke duodenum untuk memecah protein, lemak, dan karbohidrat. Sel beta di pulau Langerhans melepaskan insulin saat gula darah naik; sel alfa melepaskan glukagon saat turun.", health: "Diabetes tipe 1 terjadi akibat penghancuran imun sel beta penghasil insulin. Pankreatitis (radang) menyebabkan nyeri perut atas yang parah menjalar ke punggung." },
      { overview: "Pankreas adalah kelenjar campuran eksokrin-endokrin retroperitoneal yang dibagi menjadi kepala (di lengkung-C duodenum), leher, badan, dan ekor (menyentuh limpa). Komponen endokrinnya terdiri dari ~1 juta pulau Langerhans.", position: "Terletak anterior dari vertebra L1-L2, posterior dari lambung. Duktus pankreatik (Wirsung) mengalir ke ampula Vater di duodenum.", mechanism: "Eksokrin: Sel asinar mensekresikan proenzim pencernaan (tripsinogen, kimotripsinogen, lipase, amilase) yang dipicu oleh sekretin dan CCK. Endokrin: Insulin sel beta memungkinkan penyerapan glukosa seluler; glukagon sel alfa mempromosikan glukoneogenesis/glikogenolisis.", health: "Pankreatitis nekrotikan akut dari batu empedu atau alkohol menyebabkan peradangan sistemik dan kegagalan multiorgan. Kanker pankreas (biasanya adenokarsinoma duktal) memiliki prognosis sangat buruk." },
      [
        { question: "What dual-function role makes the pancreas unique among digestive organs?", options: ["Both exocrine (digestive enzyme secretion) and endocrine (insulin/glucagon hormone production)", "Only produces digestive enzymes", "Only produces hormones", "Only filters blood"], answerIndex: 0, explanation: "The pancreas has both exocrine acinar cells and endocrine islets of Langerhans, making it a mixed gland." },
        { question: "Which pancreatic cell type is destroyed by autoimmune attack in Type 1 diabetes mellitus?", options: ["Beta cells of the islets of Langerhans", "Alpha cells", "Acinar cells", "Delta cells"], answerIndex: 0, explanation: "Autoimmune destruction of insulin-secreting beta cells causes absolute insulin deficiency in Type 1 diabetes." },
        { question: "Acute pancreatitis commonly elevates which two serum enzyme markers?", options: ["Amylase and Lipase", "ALT and AST", "Troponin I and CK-MB", "BUN and Creatinine"], answerIndex: 0, explanation: "Elevated serum amylase (>3× ULN) and lipase (more specific) confirm acute pancreatitis." }
      ],
      [
        { question: "Peran fungsi ganda apa yang membuat pankreas unik di antara organ pencernaan?", options: ["Baik eksokrin (sekresi enzim pencernaan) dan endokrin (produksi hormon insulin/glukagon)", "Hanya menghasilkan enzim pencernaan", "Hanya menghasilkan hormon", "Hanya menyaring darah"], answerIndex: 0, explanation: "Pankreas memiliki sel asinar eksokrin dan pulau Langerhans endokrin, menjadikannya kelenjar campuran." },
        { question: "Jenis sel pankreas mana yang dihancurkan oleh serangan autoimun pada diabetes melitus tipe 1?", options: ["Sel beta pulau Langerhans", "Sel alfa", "Sel asinar", "Sel delta"], answerIndex: 0, explanation: "Penghancuran autoimun sel beta penghasil insulin menyebabkan defisiensi insulin absolut pada diabetes tipe 1." },
        { question: "Pankreatitis akut umumnya meningkatkan dua penanda enzim serum mana?", options: ["Amilase dan Lipase", "ALT dan AST", "Troponin I dan CK-MB", "BUN dan Kreatinin"], answerIndex: 0, explanation: "Amilase serum yang meningkat (>3× ULN) dan lipase (lebih spesifik) mengkonfirmasi pankreatitis akut." }
      ],
      ["stomach", "liver", "gallbladder"]
    ),

    // ═══════════════════════════════════════════════════════
    // SKELETAL — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Cranium (Frontal/Parietal/Temporal)": lesson("skeletal", "skull_spine", { EN: "Cranium (Frontal/Parietal/Temporal)", ID: "Tengkorak (Kranium)" }, "💀🦷",
      { overview: "The cranium is your skull's braincase — the bony dome that encases and shields your brain from impact. It consists of eight interlocked flat bones fused together along immovable joints called sutures.", position: "Forms the upper and back of the skull, enclosing the brain within the neurocranium.", mechanism: "The bones are connected by fibrous sutures that provide rigidity and allow small forces to be dispersed. The inner surface forms depressions (fossae) for different brain regions.", health: "Skull fractures can cause epidural or subdural hematomas (bleeding between skull and brain membranes). Increased intracranial pressure causes headache, vomiting, and altered consciousness." },
      { overview: "The neurocranium consists of 8 bones: frontal, two parietals, occipital, two temporals, sphenoid, and ethmoid. They articulate at the coronal, sagittal, lambdoid, and squamous sutures.", position: "The cranial fossae (anterior, middle, posterior) house respective brain divisions. The foramen magnum in the occipital bone is the brainstem exit point.", mechanism: "Cortical and cancellous (diploë) bone layers provide structural strength with low weight. The inner periosteum (endocranium/dura mater) reflects against the falx cerebri and tentorium cerebelli.", health: "Epidural hematoma (arterial) from middle meningeal artery rupture in temporal bone fracture presents with a 'lucid interval' followed by rapid deterioration — requiring emergency craniectomy." },
      { overview: "Kranium adalah cangkang tulang tengkorak yang mengelilingi dan melindungi otak dari benturan. Terdiri dari delapan tulang datar yang terkunci bersama di sepanjang sambungan tak bergerak yang disebut sutura.", position: "Membentuk bagian atas dan belakang tengkorak, mengelilingi otak di dalam neurokranium.", mechanism: "Tulang-tulang dihubungkan oleh sutura fibrosa yang memberikan kekakuan dan memungkinkan gaya kecil tersebar. Permukaan bagian dalam membentuk cekungan (fosa) untuk berbagai bagian otak.", health: "Fraktur tengkorak dapat menyebabkan hematoma epidural atau subdural (perdarahan antara tengkorak dan selaput otak). Tekanan intrakranial yang meningkat menyebabkan sakit kepala, muntah, dan gangguan kesadaran." },
      { overview: "Neurokranium terdiri dari 8 tulang: frontal, dua parietal, oksipital, dua temporal, sfenoid, dan etmoid. Mereka bersendi pada sutura koronal, sagital, lambdoid, dan skuamosa.", position: "Fosa kranial (anterior, tengah, posterior) menampung divisi otak masing-masing. Foramen magnum di tulang oksipital adalah titik keluar batang otak.", mechanism: "Lapisan tulang kortikal dan kanselus (diploe) memberikan kekuatan struktural dengan bobot rendah. Periosteum dalam (endokranium/dura mater) memantul terhadap falks serebri dan tentorium serebeli.", health: "Hematoma epidural (arterial) dari ruptur arteri meningea media pada fraktur tulang temporal bermanifestasi dengan 'interval lusid' diikuti deteriorasi cepat — memerlukan kraniotomi darurat." },
      [
        { question: "How many bones make up the human neurocranium (braincase)?", options: ["8 bones", "14 bones", "22 bones", "1 bone"], answerIndex: 0, explanation: "The neurocranium consists of 8 bones: frontal, two parietals, occipital, two temporals, sphenoid, and ethmoid." },
        { question: "What is the large opening at the base of the occipital bone through which the brainstem passes?", options: ["Foramen magnum", "Foramen ovale", "Jugular foramen", "Internal acoustic meatus"], answerIndex: 0, explanation: "The foramen magnum is the largest skull foramen, transmitting the medulla, vertebral arteries, and CN XI spinal roots." },
        { question: "An arterial epidural hematoma following temporal bone fracture typically involves rupture of which vessel?", options: ["Middle meningeal artery", "Superior sagittal sinus", "Basilar artery", "Internal carotid artery"], answerIndex: 0, explanation: "The middle meningeal artery runs in a groove in the temporal bone and is commonly ruptured in temporal skull fractures." }
      ],
      [
        { question: "Berapa jumlah tulang yang menyusun neurokranium (tempurung otak) manusia?", options: ["8 tulang", "14 tulang", "22 tulang", "1 tulang"], answerIndex: 0, explanation: "Neurokranium terdiri dari 8 tulang: frontal, dua parietal, oksipital, dua temporal, sfenoid, dan etmoid." },
        { question: "Lubang besar di dasar tulang oksipital tempat batang otak melewati disebut?", options: ["Foramen magnum", "Foramen ovale", "Foramen jugularis", "Meatus akustikus internal"], answerIndex: 0, explanation: "Foramen magnum adalah foramen tengkorak terbesar, meneruskan medula, arteri vertebral, dan akar spinal N. XI." },
        { question: "Hematoma epidural arterial setelah fraktur tulang temporal biasanya melibatkan ruptur pembuluh apa?", options: ["Arteri meningea media", "Sinus sagital superior", "Arteri basilaris", "Arteri karotis internal"], answerIndex: 0, explanation: "Arteri meningea media berjalan di alur tulang temporal dan umumnya robek pada fraktur tengkorak temporal." }
      ],
      ["mandible", "cervical_vertebrae"]
    ),

    "Pelvis (Ilium, Ischium, Pubis)": lesson("skeletal", "limbs_pelvis", { EN: "Pelvis (Ilium, Ischium, Pubis)", ID: "Panggul (Ilium, Iskium, Pubis)" }, "🦴🟣",
      { overview: "The pelvis is the basin-shaped ring of bones at the base of your spine that connects your trunk to your legs. It supports the weight of the upper body, protects pelvic organs, and in females, forms the birth canal.", position: "Located at the base of the vertebral column, connecting axial to appendicular skeleton through the hip joints.", mechanism: "The pelvis transmits forces between the trunk and lower limbs during standing, walking, and running. The sacroiliac joints and pubic symphysis allow minimal movement to absorb shocks.", health: "Hip fractures (especially femoral neck) in the elderly after falls are life-threatening due to fat embolism, pneumonia, and blood clots from prolonged immobility." },
      { overview: "The pelvis consists of the two hip bones (os coxae — each formed by ilium, ischium, pubis) united anteriorly at the pubic symphysis and posteriorly with the sacrum at the sacroiliac joints.", position: "The acetabulum (formed by contributions from all three bones) articulates with the femoral head. The greater sciatic notch and lesser sciatic notch are important passages for sciatic nerve and internal pudendal vessels.", mechanism: "The female pelvis is wider (gynecoid type) with a larger pelvic inlet (> 11 cm transverse diameter) to accommodate fetal passage. The male pelvis is narrower and more vertically oriented.", health: "Pelvic ring fractures from high-energy trauma can cause massive internal hemorrhage (injured iliac vessels) and urological injuries (bladder, urethra)." },
      { overview: "Panggul adalah cincin tulang berbentuk baskom di dasar tulang belakang yang menghubungkan batang tubuh ke kaki. Menopang berat tubuh bagian atas, melindungi organ panggul, dan pada wanita membentuk jalan lahir.", position: "Terletak di dasar kolum vertebral, menghubungkan kerangka aksial ke apendikular melalui sendi panggul.", mechanism: "Panggul meneruskan gaya antara batang tubuh dan ekstremitas bawah saat berdiri, berjalan, dan berlari. Sendi sakroiliaka dan simfisis pubis memungkinkan pergerakan minimal untuk menyerap benturan.", health: "Fraktur panggul (terutama leher femur) pada lansia setelah jatuh mengancam jiwa akibat emboli lemak, pneumonia, dan pembekuan darah dari imobilisasi berkepanjangan." },
      { overview: "Panggul terdiri dari dua tulang pinggul (os coxae — masing-masing dibentuk oleh ilium, iskium, pubis) yang bersatu di anterior pada simfisis pubis dan di posterior dengan sakrum pada sendi sakroiliaka.", position: "Asetabulum (dibentuk oleh kontribusi dari ketiga tulang) bersendi dengan kepala femur. Insisura skiatika mayor dan minor adalah lorong penting untuk saraf skiatik dan pembuluh pudendal internal.", mechanism: "Panggul wanita lebih lebar (tipe ginekoid) dengan pintu masuk panggul yang lebih besar (> 11 cm diameter transversal) untuk mengakomodasi jalan fetal. Panggul pria lebih sempit dan lebih berorientasi vertikal.", health: "Fraktur cincin panggul dari trauma energi tinggi dapat menyebabkan perdarahan internal masif (pembuluh iliaka cedera) dan cedera urologis (kandung kemih, uretra)." },
      [
        { question: "The pelvis is formed by the fusion of which three bones on each side?", options: ["Ilium, ischium, and pubis (fusing to form the os coxae)", "Femur, tibia, and fibula", "Sacrum, coccyx, and lumbar vertebra", "Ilium and sacrum only"], answerIndex: 0, explanation: "Each hip bone (os coxae) forms from the ilium, ischium, and pubis fusing at the triradiate cartilage during adolescence." },
        { question: "Which structure of the pelvis articulates with the head of the femur to form the hip joint?", options: ["Acetabulum", "Greater trochanter", "Pubic symphysis", "Sacroiliac joint"], answerIndex: 0, explanation: "The acetabulum is a cup-shaped articular socket receiving the femoral head in a ball-and-socket joint." },
        { question: "The female pelvis differs from the male pelvis primarily by being?", options: ["Wider with a larger pelvic inlet to accommodate childbirth", "Narrower and longer", "Identical in shape", "Composed of only two bones"], answerIndex: 0, explanation: "Sexual dimorphism in pelvic shape reflects the female adaptation for parturition — wider outlet and more circular inlet." }
      ],
      [
        { question: "Panggul dibentuk oleh fusi tiga tulang mana di setiap sisi?", options: ["Ilium, iskium, dan pubis (bergabung membentuk os coxae)", "Femur, tibia, dan fibula", "Sakrum, koksigis, dan vertebra lumbal", "Ilium dan sakrum saja"], answerIndex: 0, explanation: "Setiap tulang pinggul (os coxae) terbentuk dari ilium, iskium, dan pubis yang bersatu pada kartilago tiradiata saat remaja." },
        { question: "Struktur panggul mana yang bersendi dengan kepala femur untuk membentuk sendi panggul?", options: ["Asetabulum", "Trokanter mayor", "Simfisis pubis", "Sendi sakroiliaka"], answerIndex: 0, explanation: "Asetabulum adalah soket artikular berbentuk cangkir yang menerima kepala femur dalam sendi peluru." },
        { question: "Panggul wanita berbeda dari panggul pria terutama dengan?", options: ["Lebih lebar dengan pintu masuk panggul yang lebih besar untuk mengakomodasi persalinan", "Lebih sempit dan lebih panjang", "Identik dalam bentuk", "Terdiri dari hanya dua tulang"], answerIndex: 0, explanation: "Dimorfisme seksual dalam bentuk panggul mencerminkan adaptasi wanita untuk persalinan — outlet lebih lebar dan pintu masuk lebih melingkar." }
      ],
      ["femur", "sacrum_coccyx"]
    ),

    // ═══════════════════════════════════════════════════════
    // MUSCULAR — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Pectoralis Major": lesson("muscular", "muscles_group", { EN: "Pectoralis Major", ID: "Otot Pektoralis Mayor" }, "💪🟦",
      { overview: "The pectoralis major is the large fan-shaped muscle covering the front of your chest. It gives the chest its broad appearance and is responsible for pushing movements — like a push-up or throwing a ball.", position: "Covers the anterior chest wall, extending from the clavicle, sternum, and ribs to the upper humerus.", mechanism: "Adducts and medially rotates the arm. In push-up motion it horizontally adducts the arm. It also assists in deep breathing by lifting the rib cage when the arms are fixed.", health: "Pectoralis major tears (ruptures) occur during heavy bench press or wrestling, requiring surgical repair for competitive athletes." },
      { overview: "The pectoralis major is a large triangular muscle with two heads — clavicular (upper) and sternocostal (lower) — inserting on the lateral lip of the intertubercular groove of the humerus.", position: "Superficial anterior thoracic wall. Innervated by both the medial and lateral pectoral nerves (C5-T1).", mechanism: "Sternocostal head: adduction, extension, and medial rotation. Clavicular head: flexion and medial rotation of the arm. Both activate in horizontal adduction and powerful pushing movements.", health: "Pectoralis major rupture presents as a visible 'roll' deformity over the anterior axillary fold. Gynecomastia can mask pectoralis pathology in males." },
      { overview: "Otot pektoralis mayor adalah otot besar berbentuk kipas yang menutupi bagian depan dada. Memberikan dada tampilan yang lebar dan bertanggung jawab atas gerakan mendorong — seperti push-up atau melempar bola.", position: "Menutupi dinding dada anterior, membentang dari klavikula, sternum, dan tulang rusuk ke humerus bagian atas.", mechanism: "Adduksi dan rotasi medial lengan. Dalam gerakan push-up ia adduksi horizontal lengan. Juga membantu pernapasan dalam dengan mengangkat rongga dada saat lengan difiksasi.", health: "Robekan (ruptur) otot pektoralis mayor terjadi selama bench press berat atau gulat, memerlukan perbaikan bedah bagi atlet kompetitif." },
      { overview: "Otot pektoralis mayor adalah otot segitiga besar dengan dua kepala — klavikular (atas) dan sternokosal (bawah) — berinsersi pada bibir lateral alur intertuberkular humerus.", position: "Dinding toraks anterior superfisial. Dipersarafi oleh nervus pektoral medial dan lateral (C5-T1).", mechanism: "Kepala sternokosal: adduksi, ekstensi, dan rotasi medial. Kepala klavikular: fleksi dan rotasi medial lengan. Keduanya aktif dalam adduksi horizontal dan gerakan mendorong kuat.", health: "Ruptur pektoralis mayor bermanifestasi sebagai deformitas 'gulungan' yang terlihat di atas lipatan aksila anterior. Ginekomastia dapat menyembunyikan patologi pectoralis pada pria." },
      [
        { question: "The pectoralis major has two heads. Which head primarily contributes to shoulder flexion?", options: ["Clavicular head", "Sternocostal head", "Both heads equally", "Neither head"], answerIndex: 0, explanation: "The clavicular head acts as a shoulder flexor when the arm is at the side, while the sternocostal head extends the raised arm." },
        { question: "Which nerve(s) innervate the pectoralis major?", options: ["Medial and lateral pectoral nerves (C5-T1)", "Musculocutaneous nerve", "Axillary nerve", "Radial nerve"], answerIndex: 0, explanation: "Both pectoral nerves (from the medial and lateral cords of the brachial plexus) innervate the respective heads." },
        { question: "A pectoralis major tear during heavy bench pressing would most commonly occur at which location?", options: ["Musculotendinous junction or humeral insertion", "Sternocostal origin", "Clavicular origin", "Belly of the muscle"], answerIndex: 0, explanation: "Pectoralis major tears typically occur at the musculotendinous junction or the humeral insertion during eccentric overload." }
      ],
      [
        { question: "Otot pektoralis mayor memiliki dua kepala. Kepala mana yang terutama berkontribusi pada fleksi bahu?", options: ["Kepala klavikular", "Kepala sternokosal", "Kedua kepala sama", "Tidak satupun"], answerIndex: 0, explanation: "Kepala klavikular bertindak sebagai fleksor bahu saat lengan di samping, sementara kepala sternokosal mengekstensi lengan yang terangkat." },
        { question: "Saraf mana yang mempersarafi otot pektoralis mayor?", options: ["Nervus pektoral medial dan lateral (C5-T1)", "Nervus muskulokutaneus", "Nervus aksilaris", "Nervus radialis"], answerIndex: 0, explanation: "Kedua nervus pektoral (dari korda medial dan lateral pleksus brakhialis) mempersarafi kepala masing-masing." },
        { question: "Robekan otot pektoralis mayor saat bench press berat paling sering terjadi di lokasi mana?", options: ["Taut muskulotendinosa atau insersi humerus", "Origo sternokosal", "Origo klavikular", "Perut otot"], answerIndex: 0, explanation: "Robekan pektoralis mayor biasanya terjadi di taut muskulotendinosa atau insersi humerus selama beban eksentrik berlebihan." }
      ],
      ["biceps", "deltoid"]
    ),

    "Deltoid Muscle": lesson("muscular", "muscles_group", { EN: "Deltoid Muscle", ID: "Otot Deltoid" }, "💪🔵",
      { overview: "The deltoid is the rounded triangle-shaped muscle covering your shoulder. It is the primary muscle responsible for lifting your arm away from your body to the side (abduction) and gives the shoulder its characteristic round shape.", position: "Covers the shoulder joint, wrapping from the clavicle and scapula down to the deltoid tuberosity of the humerus.", mechanism: "The middle (acromial) portion is the main arm abductor. The anterior portion flexes and medially rotates, while the posterior portion extends and laterally rotates the arm.", health: "Deltoid muscle injections are common medical sites. Axillary nerve injury (from shoulder dislocation or humeral neck fracture) paralyzes the deltoid, causing inability to abduct the arm." },
      { overview: "The deltoid has three parts: anterior (clavicular), middle (acromial), and posterior (spinal) portions. All three converge to insert at the deltoid tuberosity (lateral humerus shaft, midpoint).", position: "Drapes over the glenohumeral joint, innervated by the axillary nerve (C5-C6) from the posterior cord of the brachial plexus.", mechanism: "Middle deltoid: primary arm abductor from 15-90° (beyond requires supraspinatus). Anterior deltoid: flexion, horizontal adduction, medial rotation. Posterior: extension, horizontal abduction, lateral rotation.", health: "Axillary nerve injury produces deltoid weakness/atrophy and loss of sensation over the lateral deltoid skin patch (regimental badge area)." },
      { overview: "Deltoid adalah otot segitiga bulat yang menutupi bahu. Ini adalah otot utama yang bertanggung jawab mengangkat lengan menjauh dari tubuh ke samping (abduksi) dan memberikan bahu bentuk bulatnya yang khas.", position: "Menutupi sendi bahu, membungkus dari klavikula dan skapula turun ke tuberositas deltoid humerus.", mechanism: "Bagian tengah (akromial) adalah abduktor lengan utama. Bagian anterior memfleksikan dan merotasi medial, sementara bagian posterior mengekstensi dan merotasi lateral lengan.", health: "Injeksi otot deltoid adalah lokasi medis yang umum. Cedera nervus aksilaris (dari dislokasi bahu atau fraktur leher humerus) melumpuhkan deltoid, menyebabkan ketidakmampuan untuk adduksi lengan." },
      { overview: "Deltoid memiliki tiga bagian: anterior (klavikular), tengah (akromial), dan posterior (spinal). Ketiganya menyatu untuk berinsersi di tuberositas deltoid (batang humerus lateral, titik tengah).", position: "Menyelubungi sendi glenohumeral, dipersarafi oleh nervus aksilaris (C5-C6) dari korda posterior pleksus brakhialis.", mechanism: "Deltoid tengah: abduktor lengan utama dari 15-90° (melampaui memerlukan supraspinatus). Deltoid anterior: fleksi, adduksi horizontal, rotasi medial. Posterior: ekstensi, abduksi horizontal, rotasi lateral.", health: "Cedera nervus aksilaris menghasilkan kelemahan/atrofi deltoid dan kehilangan sensasi di patch kulit deltoid lateral (area lencana resimen)." },
      [
        { question: "Which nerve innervates the deltoid muscle, and injury to this nerve commonly occurs from which shoulder trauma?", options: ["Axillary nerve (C5-C6); shoulder dislocation or proximal humeral fracture", "Radial nerve; distal humeral fracture", "Musculocutaneous nerve; coracoid process fracture", "Median nerve; wrist injury"], answerIndex: 0, explanation: "The axillary nerve wraps around the surgical neck of the humerus and is vulnerable in anterior shoulder dislocation." },
        { question: "The middle (acromial) portion of the deltoid is the primary mover for arm abduction from approximately which range?", options: ["15° to 90° of abduction", "0° to 180° continuously", "90° to 180° only", "0° to 15° only"], answerIndex: 0, explanation: "Initial abduction (0-15°) is initiated by the supraspinatus; middle deltoid is the primary abductor from 15-90°." },
        { question: "What clinical sign results from axillary nerve injury causing deltoid paralysis?", options: ["Inability to abduct the arm + sensory loss over lateral shoulder (badge sign)", "Wrist drop", "Finger clawing", "Elbow flexion weakness only"], answerIndex: 0, explanation: "Axillary nerve injury causes deltoid paralysis (abduction loss) and patch anesthesia over the lateral deltoid skin." }
      ],
      [
        { question: "Saraf mana yang mempersarafi otot deltoid, dan cedera saraf ini umumnya terjadi akibat trauma bahu apa?", options: ["Nervus aksilaris (C5-C6); dislokasi bahu atau fraktur humerus proksimal", "Nervus radialis; fraktur humerus distal", "Nervus muskulokutaneus; fraktur prosesus korakoid", "Nervus medianus; cedera pergelangan"], answerIndex: 0, explanation: "Nervus aksilaris membungkus leher bedah humerus dan rentan dalam dislokasi bahu anterior." },
        { question: "Bagian tengah (akromial) deltoid adalah penggerak utama abduksi lengan dari kisaran perkiraan mana?", options: ["15° hingga 90° abduksi", "0° hingga 180° terus-menerus", "90° hingga 180° saja", "0° hingga 15° saja"], answerIndex: 0, explanation: "Abduksi awal (0-15°) dimulai oleh supraspinatus; deltoid tengah adalah abduktor utama dari 15-90°." },
        { question: "Tanda klinis apa yang terjadi akibat cedera nervus aksilaris yang menyebabkan paralisis deltoid?", options: ["Ketidakmampuan untuk mengabduksi lengan + kehilangan sensasi di bahu lateral (tanda lencana)", "Wrist drop", "Cakar jari", "Kelemahan fleksi siku saja"], answerIndex: 0, explanation: "Cedera nervus aksilaris menyebabkan paralisis deltoid (kehilangan abduksi) dan anestesia patch di kulit deltoid lateral." }
      ],
      ["biceps", "pectoralis_major"]
    ),

    "Quadriceps Femoris": lesson("muscular", "muscles_group", { EN: "Quadriceps Femoris", ID: "Otot Kuadriseps Femoris" }, "💪🟡",
      { overview: "The quadriceps is the large four-headed muscle group on the front of your thigh. It is one of the most powerful muscle groups in the body, responsible for straightening the knee, kicking, jumping, and climbing stairs.", position: "Covers the anterior and lateral thigh, from the hip/pelvis above to the kneecap (patella) and tibia below.", mechanism: "All four heads (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius) converge into the quadriceps tendon, wrap around the patella via the patellar ligament, and pull the tibia to extend the knee.", health: "ACL injuries and patellar tendinopathy (jumper's knee) are common sports injuries. Quadriceps weakness from disuse atrophy significantly impairs walking." },
      { overview: "The quadriceps femoris consists of four muscles: rectus femoris (crosses hip and knee), vastus lateralis (largest), vastus medialis (important for patellar tracking), and vastus intermedius (deepest). All innervated by the femoral nerve (L2-L4).", position: "Anterior compartment of the thigh. The rectus femoris originates from the anterior inferior iliac spine; the vasti originate from the femur. All insert into the quadriceps tendon → patella → patellar ligament → tibial tuberosity.", mechanism: "Provides the major extending force at the knee joint. Vastus medialis oblique (VMO) portion is critical for patellar medial stabilization during terminal knee extension.", health: "Quadriceps tendon rupture (above patella) vs. patellar ligament rupture (below patella) — both present with inability to extend knee. MRI differentiates; surgical repair is required." },
      { overview: "Kuadriseps adalah kelompok otot empat kepala besar di bagian depan paha. Ini adalah salah satu kelompok otot paling kuat di tubuh, bertanggung jawab meluruskan lutut, menendang, melompat, dan menaiki tangga.", position: "Menutupi paha anterior dan lateral, dari pinggul/panggul di atas hingga lutut (patela) dan tibia di bawah.", mechanism: "Keempat kepala (rektus femoris, vastus lateralis, vastus medialis, vastus intermedius) menyatu menjadi tendon kuadriseps, membungkus patela melalui ligamen patelar, dan menarik tibia untuk mengekstensi lutut.", health: "Cedera ACL dan tendinopati patelar (lutut jumper) adalah cedera olahraga yang umum. Kelemahan kuadriseps dari atrofi disuse sangat mengganggu berjalan." },
      { overview: "Kuadriseps femoris terdiri dari empat otot: rektus femoris (melintasi panggul dan lutut), vastus lateralis (terbesar), vastus medialis (penting untuk pelacakan patelar), dan vastus intermedius (terdalam). Semuanya dipersarafi oleh nervus femoralis (L2-L4).", position: "Kompartemen anterior paha. Rektus femoris berasal dari spina iliaka anterior inferior; vasti berasal dari femur. Semua berinsersi ke tendon kuadriseps → patela → ligamen patelar → tuberositas tibia.", mechanism: "Memberikan gaya ekstensi utama pada sendi lutut. Porsi vastus medialis oblik (VMO) sangat penting untuk stabilisasi medial patelar selama ekstensi lutut terminal.", health: "Ruptur tendon kuadriseps (di atas patela) vs. ruptur ligamen patelar (di bawah patela) — keduanya bermanifestasi dengan ketidakmampuan mengekstensi lutut. MRI membedakan; perbaikan bedah diperlukan." },
      [
        { question: "Which of the four quadriceps muscles is the only one to cross both the hip and knee joints?", options: ["Rectus femoris", "Vastus lateralis", "Vastus medialis", "Vastus intermedius"], answerIndex: 0, explanation: "Rectus femoris originates from the anterior inferior iliac spine, so it crosses and acts on both the hip (flexion) and knee (extension)." },
        { question: "The quadriceps tendon inserts through the patella and attaches to the tibia via which structure?", options: ["Patellar ligament (infrapatellar tendon)", "Iliotibial band", "Medial collateral ligament", "Anterior cruciate ligament"], answerIndex: 0, explanation: "The patellar ligament (continuation of the quadriceps tendon below the patella) attaches to the tibial tuberosity." },
        { question: "Which nerve innervates all four muscles of the quadriceps femoris?", options: ["Femoral nerve (L2-L4)", "Sciatic nerve", "Obturator nerve", "Tibial nerve"], answerIndex: 0, explanation: "The femoral nerve from the lumbar plexus innervates all quadriceps muscles in the anterior thigh compartment." }
      ],
      [
        { question: "Dari keempat otot kuadriseps, mana satu-satunya yang melintasi sendi panggul dan lutut?", options: ["Rektus femoris", "Vastus lateralis", "Vastus medialis", "Vastus intermedius"], answerIndex: 0, explanation: "Rektus femoris berasal dari spina iliaka anterior inferior, sehingga melintasi dan bekerja pada panggul (fleksi) dan lutut (ekstensi)." },
        { question: "Tendon kuadriseps berinsersi melalui patela dan melekat ke tibia melalui struktur mana?", options: ["Ligamen patelar (tendon infrapatelar)", "Pita iliotibial", "Ligamen kolateral medial", "Ligamen cruciate anterior"], answerIndex: 0, explanation: "Ligamen patelar (kelanjutan tendon kuadriseps di bawah patela) melekat ke tuberositas tibia." },
        { question: "Saraf mana yang mempersarafi keempat otot kuadriseps femoris?", options: ["Nervus femoralis (L2-L4)", "Nervus skiatik", "Nervus obturator", "Nervus tibialis"], answerIndex: 0, explanation: "Nervus femoralis dari pleksus lumbal mempersarafi semua otot kuadriseps di kompartemen anterior paha." }
      ],
      ["femur", "biceps"]
    ),

    // ═══════════════════════════════════════════════════════
    // INTEGUMENTARY — REMAINING STRUCTURES
    // ═══════════════════════════════════════════════════════
    "Dermal Layer & Collagen": lesson("skin", "skin_layers", { EN: "Dermal Layer & Collagen", ID: "Lapisan Dermis & Kolagen" }, "🧴🟤",
      { overview: "The dermis is the thick, tough middle layer of skin that lies directly below the epidermis. It contains collagen fibers, elastic fibers, blood vessels, nerves, hair follicles, and sweat glands — giving skin its strength, flexibility, and sensation.", position: "Located between the epidermis above and the hypodermis below, comprising the majority of total skin thickness (1-4 mm depending on body region).", mechanism: "Collagen type I and III fibers provide tensile strength. Elastin fibers provide recoil. Dermal papillae interdigitate with epidermal ridges, anchoring the two layers and creating fingerprints.", health: "Excessive collagen production during wound healing causes keloid or hypertrophic scars. Loss of dermal elastin and collagen with age causes wrinkles." },
      { overview: "The dermis is a dense irregular connective tissue layer consisting of papillary dermis (superficial, loose connective tissue with papillae projecting into epidermis) and reticular dermis (deep, dense irregular collagen/elastin network).", position: "Rests on the epidermal basement membrane, extending to the dermal-hypodermal junction. Contains cutaneous plexuses, Meissner's (touch) and Pacinian (pressure) corpuscles, hair follicles, sebaceous glands, and eccrine/apocrine sweat glands.", mechanism: "Fibroblasts synthesize type I and III collagen, elastin, and hyaluronic acid GAGs. Dermal vasculature provides thermoregulation (vasodilation/vasoconstriction). Meissner's and Pacinian corpuscles provide fine touch and vibration discrimination.", health: "Systemic sclerosis (scleroderma) causes excessive dermal fibrosis (TGF-β-driven myofibroblast activation), causing skin tightening and organ fibrosis." },
      { overview: "Dermis adalah lapisan kulit tengah yang tebal dan kuat yang terletak langsung di bawah epidermis. Mengandung serat kolagen, serat elastis, pembuluh darah, saraf, folikel rambut, dan kelenjar keringat — memberikan kulit kekuatan, fleksibilitas, dan sensasi.", position: "Terletak antara epidermis di atas dan hipodermis di bawah, mencakup sebagian besar ketebalan total kulit (1-4 mm tergantung wilayah tubuh).", mechanism: "Serat kolagen tipe I dan III memberikan kekuatan tensil. Serat elastin memberikan recoil. Papila dermal berinterdigitasi dengan pegunungan epidermal, menambatkan dua lapisan dan menciptakan sidik jari.", health: "Produksi kolagen berlebihan selama penyembuhan luka menyebabkan keloid atau bekas luka hipertrofik. Kehilangan elastin dan kolagen dermal seiring usia menyebabkan keriput." },
      { overview: "Dermis adalah lapisan jaringan ikat ireguler padat yang terdiri dari dermis papilaris (superfisial, jaringan ikat longgar dengan papila yang menonjol ke epidermis) dan dermis retikularis (dalam, jaringan kolagen/elastin ireguler padat).", position: "Beristirahat pada membran basal epidermal, membentang ke persimpangan dermal-hipodermal. Mengandung pleksus kutaneus, korpuskel Meissner (sentuhan) dan Pacini (tekanan), folikel rambut, kelenjar sebasea, dan kelenjar keringat ekrin/apokrin.", mechanism: "Fibroblas mensintesis kolagen tipe I dan III, elastin, dan GAG asam hialuronat. Vaskularisasi dermal menyediakan termoregulasi (vasodilatasi/vasokonstriksi). Korpuskel Meissner dan Pacini menyediakan diskriminasi sentuhan halus dan vibrasi.", health: "Sklerosis sistemik (skleroderma) menyebabkan fibrosis dermal berlebihan (aktivasi miofibroblast yang dikendalikan TGF-β), menyebabkan pengencangan kulit dan fibrosis organ." },
      [
        { question: "Which collagen types are the primary structural proteins of the dermis providing skin tensile strength?", options: ["Type I and Type III collagen", "Type IV and Type VII collagen", "Elastin and fibronectin", "Reticulin only"], answerIndex: 0, explanation: "Type I collagen (thick bundles, reticular dermis) and Type III (thinner, papillary dermis) provide the main structural matrix of the dermis." },
        { question: "Which dermal mechanoreceptor is responsible for fine touch and light pressure sensation?", options: ["Meissner's corpuscle", "Pacinian corpuscle", "Ruffini ending", "Free nerve ending"], answerIndex: 0, explanation: "Meissner's corpuscles in the dermal papillae respond to fine touch, low-frequency vibration, and texture discrimination." },
        { question: "Excessive collagen deposition during wound healing that extends beyond the original wound boundary is called?", options: ["Keloid", "Hypertrophic scar", "Atrophic scar", "Vitiligo"], answerIndex: 0, explanation: "Keloids invade adjacent normal skin unlike hypertrophic scars, which remain confined to the wound margins." }
      ],
      [
        { question: "Jenis kolagen apa yang merupakan protein struktural utama dermis yang memberikan kekuatan tensil kulit?", options: ["Kolagen Tipe I dan Tipe III", "Kolagen Tipe IV dan Tipe VII", "Elastin dan fibronektin", "Retikulin saja"], answerIndex: 0, explanation: "Kolagen tipe I (bundel tebal, dermis retikularis) dan tipe III (lebih tipis, dermis papilaris) menyediakan matriks struktural utama dermis." },
        { question: "Mekanoreseptor dermal mana yang bertanggung jawab atas sensasi sentuhan halus dan tekanan ringan?", options: ["Korpuskel Meissner", "Korpuskel Pacini", "Ujung Ruffini", "Ujung saraf bebas"], answerIndex: 0, explanation: "Korpuskel Meissner di papila dermal merespons sentuhan halus, vibrasi frekuensi rendah, dan diskriminasi tekstur." },
        { question: "Deposisi kolagen berlebihan selama penyembuhan luka yang meluas melampaui batas luka asli disebut?", options: ["Keloid", "Bekas luka hipertrofik", "Bekas luka atrofik", "Vitiligo"], answerIndex: 0, explanation: "Keloid menginvasi kulit normal yang berdekatan tidak seperti bekas luka hipertrofik yang tetap terbatas pada tepian luka." }
      ],
      ["epidermis", "hypodermis"]
    ),

    "Subcutaneous Hypodermis & Adipose Tissue": lesson("skin", "skin_layers", { EN: "Subcutaneous Hypodermis & Adipose Tissue", ID: "Hipodermis & Jaringan Adiposa Subkutan" }, "🧴🟡",
      { overview: "The hypodermis (subcutaneous layer) is the deepest layer of skin — a cushion of fat and connective tissue that insulates your body, stores energy, and connects your skin to underlying muscles and bones.", position: "Lies beneath the dermis, connecting the skin to underlying fascia, muscle, and bone.", mechanism: "Adipocytes (fat cells) store energy as triglycerides and release fatty acids when needed. The layer also provides thermal insulation, cushioning against blows, and a passageway for blood vessels and nerves.", health: "Cellulitis (bacterial infection of the hypodermis) causes spreading redness and warmth. Lipodystrophy disorders cause abnormal fat distribution. Body fat percentage is measured here with calipers." },
      { overview: "The hypodermis (tela subcutanea) consists of loose connective tissue and adipose tissue lobules separated by fibrous septa. It is not technically part of the skin but connects it to the underlying deep fascia.", position: "Thickness varies greatly by body region, sex, and nutritional state. Rich in loose areolar tissue allowing skin mobility over deeper structures.", mechanism: "White adipose tissue (WAT) stores triglycerides and secretes adipokines (leptin, adiponectin) regulating metabolism and inflammation. Brown adipose tissue (BAT) in neonates generates heat via uncoupling protein-1 (UCP-1) thermogenesis.", health: "Obesity-associated adipose tissue inflammation with macrophage infiltration ('crown-like structures') promotes low-grade systemic inflammation, insulin resistance, and metabolic syndrome." },
      { overview: "Hipodermis (lapisan subkutan) adalah lapisan kulit terdalam — bantalan lemak dan jaringan ikat yang mengisolasi tubuh, menyimpan energi, dan menghubungkan kulit ke otot dan tulang di bawahnya.", position: "Terletak di bawah dermis, menghubungkan kulit ke fasia, otot, dan tulang di bawahnya.", mechanism: "Adiposit (sel lemak) menyimpan energi sebagai trigliserida dan melepaskan asam lemak saat dibutuhkan. Lapisan ini juga menyediakan isolasi termal, bantalan terhadap pukulan, dan jalur untuk pembuluh darah dan saraf.", health: "Selulitis (infeksi bakteri pada hipodermis) menyebabkan kemerahan dan kehangatan yang menyebar. Gangguan lipodistrofi menyebabkan distribusi lemak abnormal. Persentase lemak tubuh diukur di sini dengan kaliper." },
      { overview: "Hipodermis (tela subkutanea) terdiri dari jaringan ikat longgar dan lobulus jaringan adiposa yang dipisahkan oleh septa fibrosa. Ini secara teknis bukan bagian dari kulit tetapi menghubungkannya ke fasia dalam di bawahnya.", position: "Ketebalan sangat bervariasi berdasarkan wilayah tubuh, jenis kelamin, dan status nutrisi. Kaya akan jaringan areolar longgar yang memungkinkan mobilitas kulit di atas struktur yang lebih dalam.", mechanism: "Jaringan adiposa putih (WAT) menyimpan trigliserida dan mensekresikan adipokin (leptin, adiponektin) yang mengatur metabolisme dan peradangan. Jaringan adiposa coklat (BAT) pada neonatus menghasilkan panas melalui termogenesis protein pemisah-1 (UCP-1).", health: "Peradangan jaringan adiposa terkait obesitas dengan infiltrasi makrofag ('struktur seperti mahkota') mendorong peradangan sistemik derajat rendah, resistensi insulin, dan sindrom metabolik." },
      [
        { question: "What is the primary energy storage molecule within adipocytes of the hypodermis?", options: ["Triglycerides (triacylglycerols)", "Glycogen", "Protein", "Cholesterol only"], answerIndex: 0, explanation: "Adipocytes store energy as triglycerides, which are hydrolyzed to glycerol and free fatty acids during lipolysis." },
        { question: "Which hormone, secreted by adipose tissue, signals satiety to the hypothalamus and regulates energy balance?", options: ["Leptin", "Insulin", "Glucagon", "Cortisol"], answerIndex: 0, explanation: "Leptin is an adipokine that signals fat mass to the hypothalamus, suppressing appetite and increasing energy expenditure." },
        { question: "What type of adipose tissue is specialized for non-shivering thermogenesis, prominent in human neonates?", options: ["Brown adipose tissue (BAT) via UCP-1", "White adipose tissue (WAT)", "Reticular connective tissue", "Dense collagen fibers"], answerIndex: 0, explanation: "BAT generates heat through uncoupling protein-1 (UCP-1) dissipating the proton gradient as heat rather than ATP." }
      ],
      [
        { question: "Apakah molekul penyimpan energi utama dalam adiposit hipodermis?", options: ["Trigliserida (triasilgliserol)", "Glikogen", "Protein", "Kolesterol saja"], answerIndex: 0, explanation: "Adiposit menyimpan energi sebagai trigliserida, yang dihidrolisis menjadi gliserol dan asam lemak bebas selama lipolisis." },
        { question: "Hormon mana yang disekresikan oleh jaringan adiposa, memberi sinyal kenyang ke hipotalamus dan mengatur keseimbangan energi?", options: ["Leptin", "Insulin", "Glukagon", "Kortisol"], answerIndex: 0, explanation: "Leptin adalah adipokin yang memberi sinyal massa lemak ke hipotalamus, menekan nafsu makan dan meningkatkan pengeluaran energi." },
        { question: "Jenis jaringan adiposa mana yang berperan khusus untuk termogenesis tanpa menggigil, menonjol pada neonatus manusia?", options: ["Jaringan adiposa coklat (BAT) melalui UCP-1", "Jaringan adiposa putih (WAT)", "Jaringan ikat retikuler", "Serat kolagen padat"], answerIndex: 0, explanation: "BAT menghasilkan panas melalui protein pemisah-1 (UCP-1) yang membuang gradien proton sebagai panas daripada ATP." }
      ],
      ["epidermis", "dermis"]
    ),

    // Nervous - Brainstem / Cortex / Spinal Cord / Nerves
    "Brainstem (Medulla & Pons)": lesson("nervous", "brain", { EN: "Brainstem (Medulla & Pons)", ID: "Batang Otak (Medula & Pons)" }, "🧠⚡",
      {
        overview: "The brainstem is your brain's vital control center at the base of the skull. It acts like an automatic autopilot keeping you alive by controlling breathing, heart rate, blood pressure, and swallowing without you having to think about it.",
        position: "Located at the base of the brain, directly connecting the cerebral hemispheres above to the spinal cord below.",
        mechanism: "Contains autonomic reflex centers in the medulla and pons that monitor blood gases and adjust breathing depth and heart beats, while nerve tracts relay messages up and down.",
        health: "Concussions or brainstem strokes can disrupt breathing or consciousness. Wearing helmets and managing blood pressure protects this vital command center."
      },
      {
        overview: "The brainstem comprises the midbrain (mesencephalon), pons (metencephalon), and medulla oblongata (myelencephalon), functioning as the conduit for ascending sensory and descending motor tracts and the origin of cranial nerves III–XII.",
        position: "Rests on the clivus of the occipital bone within the posterior cranial fossa, continuous caudally with the spinal cord at the foramen magnum.",
        mechanism: "The reticular activating system (RAS) modulates cortical arousal and wakefulness. The medulla contains the dorsal and ventral respiratory groups, cardiac accelerator/inhibitory centers, and vasomotor center.",
        health: "Lateral medullary syndrome (Wallenberg syndrome) resulting from posterior inferior cerebellar artery (PICA) occlusion presents with ipsilateral cranial nerve deficits, Horner syndrome, ataxia, and contralateral pain/temperature loss."
      },
      {
        overview: "Batang otak adalah pusat kendali vital di dasar tengkorak. Struktur ini bertindak seperti autopilot otomatis yang menjaga Anda tetap hidup dengan mengontrol pernapasan, detak jantung, tekanan darah, dan menelan secara otomatis.",
        position: "Terletak di dasar otak, menghubungkan belahan otak besar di atas langsung ke sumsum tulang belakang di bawah.",
        mechanism: "Mengandung pusat refleks otonom di medula dan pons yang memantau gas darah dan mengatur kedalaman napas serta denyut jantung, sementara serabut saraf menghantarkan sinyal bolak-balik.",
        health: "Gegar otak atau stroke batang otak dapat mengganggu pernapasan atau kesadaran. Menggunakan helm dan mengontrol tekanan darah melindungi pusat komando vital ini."
      },
      {
        overview: "Batang otak terdiri dari otak tengah (mesensefalon), pons (metensefalon), dan medula oblongata (mielensefalon), berfungsi sebagai saluran traktus sensorik asenden dan motorik desenden serta asal nuklei saraf kranial III–XII.",
        position: "Berada di atas klivus tulang oksipital di dalam fosa kranialis posterior, berlanjut ke kaudal dengan medula spinalis pada foramen magnum.",
        mechanism: "Sistem aktivasi retikular (RAS) memodulasi keterjagaan dan kewaspadaan kortikal. Medula menampung kelompok pernapasan dorsal/ventral, pusat akselerator jantung, dan pusat vasomotor.",
        health: "Sindrom medula lateral (sindrom Wallenberg) akibat oklusi arteri serebelar inferior posterior (PICA) bermanifestasi dengan defisit saraf kranial ipsilateral, sindrom Horner, ataksia, dan hilangnya sensasi nyeri/suhu kontralateral."
      },
      [
        { question: "What vital autonomic functions are regulated by centers in the medulla oblongata?", options: ["Cardiac rhythm, vasomotor tone, and respiration", "Voluntary muscle memory", "Visual color processing", "Endocrine growth hormone release"], answerIndex: 0, explanation: "The medulla houses autonomic reflex centers that control breathing rate, heart rate, and vascular diameter." },
        { question: "Which brainstem structure contains the respiratory pneumotaxic and apneustic centers?", options: ["Pons", "Midbrain", "Corpus callosum", "Thalamus"], answerIndex: 0, explanation: "The pons contains the pneumotaxic and apneustic centers that fine-tune respiration depth and rate." },
        { question: "Damage to the reticular activating system (RAS) in the brainstem typically causes:", options: ["Loss of consciousness or coma", "Isolated hearing loss", "Hyperreflexia only", "Anosmia"], answerIndex: 0, explanation: "The RAS is responsible for wakefulness and ascending cortical arousal; severe damage precipitates coma." }
      ],
      [
        { question: "Fungsi otonom vital apa yang diatur oleh pusat-pusat di medula oblongata?", options: ["Ritme jantung, tonus vasomotor, dan pernapasan", "Memori otot sukarela", "Pemrosesan warna visual", "Pelepasan hormon pertumbuhan"], answerIndex: 0, explanation: "Medula menampung pusat refleks otonom yang mengontrol laju pernapasan, denyut jantung, dan diameter pembuluh darah." },
        { question: "Struktur batang otak manakah yang mengandung pusat pernapasan pneumotaksik dan apneustik?", options: ["Pons", "Otak tengah", "Korpus kalosum", "Talamus"], answerIndex: 0, explanation: "Pons mengandung pusat pneumotaksik dan apneustik yang menyempurnakan kedalaman dan laju pernapasan." },
        { question: "Kerusakan pada sistem aktivasi retikular (RAS) di batang otak biasanya menyebabkan:", options: ["Hilangnya kesadaran atau koma", "Gangguan pendengaran terisolasi", "Hanya hiperrefleksia", "Anosmia"], answerIndex: 0, explanation: "RAS bertanggung jawab atas kewaspadaan dan keterjagaan kortikal; kerusakan parah memicu koma." }
      ],
      ["cerebrum", "cerebellum", "spinal_cord"]
    ),

    "Cerebral Cortex": lesson("nervous", "brain", { EN: "Cerebral Cortex", ID: "Korteks Serebri" }, "🧠🌐",
      {
        overview: "The cerebral cortex is the wrinkled outer layer of the brain—the conscious 'thinking cap' where thoughts, memories, imagination, sensory perception, and conscious decisions take place.",
        position: "Forms the outermost 2 to 4 millimeter grey matter mantle enveloping both cerebral hemispheres.",
        mechanism: "Billions of interconnected neurons process incoming sights, sounds, and touches, organize language, formulate ideas, and send motor commands to muscles.",
        health: "Staying mentally active, getting quality sleep, and regular aerobic exercise support neuroplasticity and protect cortical gray matter density against dementia."
      },
      {
        overview: "The cerebral cortex is a 6-layered neocortical gray matter structure containing roughly 16 billion neurons organized in functional columns and specialized Brodmann cytoarchitectural areas.",
        position: "Superficial to subcortical white matter (corona radiata), deeply folded into sulci and gyri across the frontal, parietal, temporal, and occipital lobes.",
        mechanism: "Pyramidal neurons in layers III and V project corticocortical and corticospinal axons. Interneurons mediate GABAergic inhibition; primary sensory cortices process unimodal inputs before transmodal heteromodal association.",
        health: "Alzheimer's disease features neurofibrillary tau tangles and extracellular amyloid-beta plaques in cortical and entorhinal regions, precipitating progressive cortical atrophy and cognitive decline."
      },
      {
        overview: "Korteks serebri adalah lapisan luar otak yang berlipat-lipat—pusat berpikir sadar tempat pikiran, memori, imajinasi, persepsi sensorik, dan pengambilan keputusan berlangsung.",
        position: "Membentuk mantel materi abu-abu setebal 2 hingga 4 milimeter terluar yang membungkus kedua belahan otak besar.",
        mechanism: "Miliaran neuron yang saling berhubungan memproses penglihatan, suara, dan sentuhan, menyusun bahasa, merumuskan ide, dan mengirimkan perintah motorik ke otot.",
        health: "Tetap aktif secara mental, tidur berkualitas, dan olahraga aerobik teratur mendukung neuroplastisitas dan melindungi kepadatan korteks dari demensia."
      },
      {
        overview: "Korteks serebri adalah struktur materi abu-abu neokortikal 6 lapis yang menampung sekitar 16 miliar neuron yang tersusun dalam kolom fungsional dan area sitoarsitektural Brodmann khusus.",
        position: "Superfisial terhadap materi putih subkortikal, berlipat menjadi sulkus dan girus di seluruh lobus frontal, parietal, temporal, dan oksipital.",
        mechanism: "Neuron piramidal pada lapisan III dan V memproyeksikan akson kortikokortikal dan kortikospinal. Interneuron memediasi inhibisi GABAergik; korteks sensorik primer memproses input unimodal sebelum asosiasi heteromodal.",
        health: "Penyakit Alzheimer ditandai dengan kekusutan neurofibrilar protein tau dan plak amiloid-beta ekstraseluler di regio kortikal, memicu atrofi kortikal progresif dan penurunan kognitif."
      },
      [
        { question: "How many histological cellular layers constitute the human neocortex?", options: ["6 layers", "3 layers", "10 layers", "2 layers"], answerIndex: 0, explanation: "The neocortex is characteristically composed of 6 horizontal cellular layers (I to VI)." },
        { question: "Which cortical region is primarily responsible for executive functioning and planning?", options: ["Prefrontal cortex", "Primary visual cortex", "Occipital pole", "Cerebellar cortex"], answerIndex: 0, explanation: "The prefrontal cortex integrates complex information to mediate executive functions, working memory, and decision-making." },
        { question: "Pyramidal cell axons from layer V of the primary motor cortex form which major tract?", options: ["Corticospinal (pyramidal) tract", "Spinothalamic tract", "Dorsal column pathway", "Optic radiation"], answerIndex: 0, explanation: "Large Betz cells and pyramidal neurons in layer V project long axons that form the corticospinal tract for voluntary motor control." }
      ],
      [
        { question: "Berapa banyak lapisan seluler histologis yang menyusun neokorteks manusia?", options: ["6 lapisan", "3 lapisan", "10 lapisan", "2 lapisan"], answerIndex: 0, explanation: "Neokorteks secara karakteristik tersusun atas 6 lapisan seluler horizontal (I hingga VI)." },
        { question: "Wilayah kortikal manakah yang terutama bertanggung jawab atas fungsi eksekutif dan perencanaan?", options: ["Korteks prefrontal", "Korteks visual primer", "Kutub oksipital", "Korteks serebelar"], answerIndex: 0, explanation: "Korteks prefrontal mengintegrasikan informasi kompleks untuk memediasi fungsi eksekutif, memori kerja, dan pengambilan keputusan." },
        { question: "Akson sel piramidal dari lapisan V korteks motorik primer membentuk traktus utama mana?", options: ["Traktus kortikospinal (piramidal)", "Traktus spinotalamikus", "Jalur kolom dorsal", "Radiasi optik"], answerIndex: 0, explanation: "Sel Betz besar dan neuron piramidal di lapisan V memproyeksikan akson panjang yang membentuk traktus kortikospinal untuk kontrol motorik sadar." }
      ],
      ["cerebrum", "thalamus"]
    ),

    "Cervical Spinal Cord": lesson("nervous", "spinal_cord", { EN: "Cervical Spinal Cord", ID: "Medula Spinalis Servikal" }, "⚡🦴",
      {
        overview: "The cervical spinal cord is the topmost segment of the spinal cord in the neck. It acts as the high-speed communication cable connecting the brain to the shoulders, arms, hands, and breathing muscles.",
        position: "Runs safely inside the vertebral canal of cervical vertebrae C1 through C7 in the neck.",
        mechanism: "Transmits motor signals down to arm muscles and diaphragm, while carrying touch, temperature, and pain sensations from the upper body back up to the brain.",
        health: "Maintaining good neck posture, wearing seatbelts, and avoiding head-first diving prevent traumatic cervical spinal cord injuries and paralysis."
      },
      {
        overview: "The cervical spinal cord consists of 8 segments (C1-C8) that give rise to the cervical plexus (C1-C4) and brachial plexus (C5-T1), with expanded ventral gray horns forming the cervical enlargement.",
        position: "Occupies the upper vertebral canal from the foramen magnum to the C7/T1 intervertebral junction.",
        mechanism: "Motor neurons in ventral horns (C3-C5) form the phrenic nerve powering diaphragmatic contraction. Corticospinal and spinothalamic tracts transmit somatomotor and somatosensory action potentials.",
        health: "Cervical spondylotic myelopathy from osteophyte formation or disc herniation causes progressive upper extremity numbness, clumsy hands, spastic gait, and hyperreflexia."
      },
      {
        overview: "Medula spinalis servikal adalah segmen paling atas dari sumsum tulang belakang di leher. Struktur ini bertindak sebagai kabel komunikasi berkecepatan tinggi yang menghubungkan otak dengan bahu, lengan, tangan, dan otot pernapasan.",
        position: "Berjalan di dalam kanalis vertebralis dari vertebra servikal C1 hingga C7 di leher.",
        mechanism: "Mengirimkan sinyal motorik ke otot lengan dan diafragma, serta membawa sensasi sentuhan, suhu, dan nyeri dari tubuh bagian atas kembali ke otak.",
        health: "Menjaga postur leher yang baik, mengenakan sabuk pengaman, dan menghindari menyelam dengan kepala terlebih dahulu mencegah cedera medula spinalis servikal dan kelumpuhan."
      },
      {
        overview: "Medula spinalis servikal terdiri dari 8 segmen (C1-C8) yang membentuk pleksus servikalis (C1-C4) dan pleksus brakialis (C5-T1), dengan kornu ventral yang membesar membentuk pembesaran servikal.",
        position: "Menempati kanalis vertebralis atas dari foramen magnum hingga persambungan C7/T1.",
        mechanism: "Neuron motorik di kornu ventral (C3-C5) membentuk saraf frenikus yang menggerakkan diafragma. Traktus kortikospinal dan spinotalamikus menghantarkan potensial aksi somatomotorik dan somatosensorik.",
        health: "Mielopati spondilotik servikal akibat osteofit atau herniasi diskus menyebabkan mati rasa pada lengan, tangan canggung, gaya berjalan spastik, dan hiperrefleksia."
      },
      [
        { question: "Which spinal nerve roots contribute to the phrenic nerve that innervates the diaphragm?", options: ["C3, C4, and C5", "C1, C2, and C3", "C6, C7, and C8", "T1, T2, and T3"], answerIndex: 0, explanation: "'C3, 4, 5 keep the diaphragm alive' - the phrenic nerve originates from cervical roots C3-C5." },
        { question: "Which nerve plexus arises from cervical segments C5 through T1 to supply the upper limbs?", options: ["Brachial plexus", "Lumbar plexus", "Cervical plexus", "Sacral plexus"], answerIndex: 0, explanation: "The brachial plexus forms from ventral rami of C5-T1, providing innervation to the upper limb." },
        { question: "The prominent enlargement of the cervical cord is anatomically due to:", options: ["Abundant motor neurons for upper limb innervation", "Thicker myelin sheath", "CSF pooling", "Sympathetic chain ganglia"], answerIndex: 0, explanation: "The cervical enlargement has expanded ventral gray horns containing lower motor neurons for upper extremity muscles." }
      ],
      [
        { question: "Akar saraf tulang belakang mana yang berkontribusi pada saraf frenikus yang menginervasi diafragma?", options: ["C3, C4, dan C5", "C1, C2, dan C3", "C6, C7, dan C8", "T1, T2, dan T3"], answerIndex: 0, explanation: "'C3, 4, 5 menjaga diafragma tetap hidup' - saraf frenikus berasal dari akar servikal C3-C5." },
        { question: "Pleksus saraf manakah yang muncul dari segmen servikal C5 hingga T1 untuk menyuplai ekstremitas atas?", options: ["Pleksus brakialis", "Pleksus lumbalis", "Pleksus servikalis", "Pleksus sakralis"], answerIndex: 0, explanation: "Pleksus brakialis terbentuk dari rami ventral C5-T1, menyediakan persarafan untuk anggota gerak atas." },
        { question: "Pembesaran servikal medula spinalis secara anatomis disebabkan oleh:", options: ["Banyaknya neuron motorik untuk inervasi ekstremitas atas", "Selubung mielin yang lebih tebal", "Pengumpulan CSF", "Ganglia rantai simpatis"], answerIndex: 0, explanation: "Pembesaran servikal memiliki kornu abu-abu ventral yang membesar berisi neuron motorik bawah untuk otot ekstremitas atas." }
      ],
      ["thoracic_spinal_cord", "brainstem"]
    ),

    "Thoracic Spinal Cord": lesson("nervous", "spinal_cord", { EN: "Thoracic Spinal Cord", ID: "Medula Spinalis Torakal" }, "⚡🫁",
      {
        overview: "The thoracic spinal cord is the middle section of the spinal cord running through your upper and mid-back. It controls chest, back, and abdominal wall muscles, and coordinates internal organ rhythms.",
        position: "Extends through the thoracic spine from vertebrae T1 down to T12 in the upper and middle back.",
        mechanism: "Nerves branch out between each rib (intercostal nerves) to expand the ribcage during breathing, tighten abdominal muscles, and send sympathetic nerve signals to the heart and stomach.",
        health: "Back-strengthening exercises, ergonomic seating, and core stability protect the thoracic spine and preserve posture."
      },
      {
        overview: "The thoracic spinal cord consists of 12 segments (T1-T12) characterized by slender cylindrical diameter and the distinctive presence of the lateral horn (intermediolateral cell column, IML).",
        position: "Enclosed within the thoracic vertebral canal from the level of T1 down to approximately T9/T10 vertebral body levels.",
        mechanism: "Preganglionic sympathetic neuron cell bodies in the IML (T1-L2) send myelinated axons through white rami communicantes to the sympathetic chain ganglia, regulating heart rate, bronchodilation, and visceral vasomotor tone.",
        health: "Thoracic spine burst fractures or disc herniations risk thoracic myelopathy and autonomic dysreflexia in lesions above T6, presenting with paroxysmal hypertension and bradycardia."
      },
      {
        overview: "Medula spinalis torakal adalah bagian tengah dari sumsum tulang belakang yang membentang di punggung atas dan tengah. Bagian ini mengontrol otot-otot dada, punggung, dan dinding perut, serta mengkoordinasikan fungsi organ dalam.",
        position: "Membentang di dalam tulang belakang torakal dari vertebra T1 hingga T12 di punggung atas dan tengah.",
        mechanism: "Saraf bercabang di antara setiap tulang rusuk (saraf interkostal) untuk memperluas sangkar dada saat bernapas, mengencangkan otot perut, dan mengirim sinyal simpatis ke jantung dan lambung.",
        health: "Latihan penguatan punggung, posisi duduk ergonomis, dan stabilitas otot inti melindungi tulang belakang torakal dan menjaga postur tubuh."
      },
      {
        overview: "Medula spinalis torakal terdiri dari 12 segmen (T1-T12) yang ditandai dengan diameter silindris ramping dan adanya kornu lateral (kolom sel intermediolateral, IML).",
        position: "Tertutup di dalam kanalis vertebralis torakal dari tingkat T1 hingga sekitar tingkat T9/T10.",
        mechanism: "Badan sel neuron simpatis preganglionik di IML (T1-L2) mengirim akson bermielin melalui rami komunikantes alba ke ganglia rantai simpatis, mengatur denyut jantung, bronkodilatasi, dan tonus vasomotor organ dalam.",
        health: "Fraktur kompresi atau herniasi diskus torakal berisiko menyebabkan mielopati torakal dan disrefleksia otonom pada lesi di atas T6, bermanifestasi dengan hipertensi paroksismal dan bradikardia."
      },
      [
        { question: "What specialized gray matter region from T1-L2 contains preganglionic sympathetic cell bodies?", options: ["Lateral horn (intermediolateral cell column)", "Dorsal horn substantia gelatinosa", "Ventral horn somatic motor pool", "Central canal ependyma"], answerIndex: 0, explanation: "The intermediolateral cell column (IML) in the lateral horn houses sympathetic preganglionic autonomic motor neurons." },
        { question: "Thoracic spinal nerves exit beneath vertebrae and innervate the chest wall as:", options: ["Intercostal nerves", "Sciatic nerves", "Femoral nerves", "Phrenic nerves"], answerIndex: 0, explanation: "Thoracic ventral rami continue directly as intercostal nerves running along the costal grooves of the ribs." },
        { question: "Sympathetic fibers originating from T1-T4 segments predominantly innervate which organs?", options: ["Heart and lungs", "Kidneys and ureters", "Urinary bladder and rectum", "Lower limb flexors"], answerIndex: 0, explanation: "Upper thoracic sympathetic outflow (T1-T4) provides sympathetic innervation to thoracic viscera including the heart and lungs." }
      ],
      [
        { question: "Wilayah materi abu-abu khusus mana dari T1-L2 yang mengandung badan sel simpatis preganglionik?", options: ["Kornu lateral (kolom sel intermediolateral)", "Substansia gelatinosa kornu dorsal", "Kumpulan motorik somatik kornu ventral", "Ependima kanalis sentralis"], answerIndex: 0, explanation: "Kolom sel intermediolateral (IML) di kornu lateral menampung neuron motorik otonom preganglionik simpatis." },
        { question: "Saraf tulang belakang torakal keluar di bawah vertebra dan menginervasi dinding dada sebagai:", options: ["Saraf interkostal", "Saraf skiatik", "Saraf femoralis", "Saraf frenikus"], answerIndex: 0, explanation: "Rami ventral torakal berlanjut langsung sebagai saraf interkostal yang berjalan di sepanjang sulkus kosta." },
        { question: "Serabut simpatis yang berasal dari segmen T1-T4 terutama menginervasi organ mana?", options: ["Jantung dan paru-paru", "Ginjal dan ureter", "Kandung kemih dan rektum", "Fleksor ekstremitas bawah"], answerIndex: 0, explanation: "Aliran simpatis torakal atas (T1-T4) menyediakan inervasi simpatis ke organ visera toraks termasuk jantung dan paru-paru." }
      ],
      ["cervical_spinal_cord", "lumbar_spinal_cord"]
    ),

    "Lumbar Spinal Cord": lesson("nervous", "spinal_cord", { EN: "Lumbar Spinal Cord", ID: "Medula Spinalis Lumbal" }, "⚡🦵",
      {
        overview: "The lumbar spinal cord is the lower segment of the spinal cord that powers the hip, thigh, and leg muscles and relays sensations from your legs and feet.",
        position: "Located in the lower back region within vertebrae T11 to L1/L2, terminating as the tapered conus medullaris.",
        mechanism: "Ventral horn motor neurons generate nerve impulses that travel through the lumbar plexus to kick, step, and walk, while dorsal roots receive sensory signals from lower extremity dermatomes.",
        health: "Proper lifting technique (bending knees, not back) and core strength prevent lower back trauma and lumbar nerve root compression."
      },
      {
        overview: "The lumbar cord contains 5 segments (L1-L5) with an expanded lumbar enlargement that gives rise to the lumbar plexus (femoral and obturator nerves) before tapering as the conus medullaris.",
        position: "Situated within the lower thoracic and upper lumbar spinal canal (terminating at vertebral level L1-L2 in adults), surrounded by the cauda equina.",
        mechanism: "Large alpha motor neurons in the ventral horns innervate anterior and medial thigh musculature. Afferent sensory fibers from the quadriceps muscle spindle mediate the monosynaptic patellar tendon reflex (L2-L4).",
        health: "Cauda equina syndrome caused by massive central disc herniation or trauma presents with saddle anesthesia, bilateral sciatica, motor weakness, and urinary retention with overflow incontinence."
      },
      {
        overview: "Medula spinalis lumbal adalah segmen bawah sumsum tulang belakang yang menggerakkan otot panggul, paha, dan tungkai serta meneruskan sensasi dari kaki Anda.",
        position: "Terletak di punggung bawah di dalam vertebra T11 hingga L1/L2, berakhir sebagai konus medularis yang meruncing.",
        mechanism: "Neuron motorik kornu ventral menghasilkan impuls saraf yang berjalan melalui pleksus lumbalis untuk menendang, melangkah, dan berjalan, sementara akar dorsal menerima sinyal sensorik dari dermatoma tungkai bawah.",
        health: "Teknik mengangkat beban yang benar (menekuk lutut, bukan punggung) dan kekuatan otot inti mencegah trauma punggung bawah dan jepitan akar saraf lumbal."
      },
      {
        overview: "Korda lumbal terdiri dari 5 segmen (L1-L5) dengan pembesaran lumbal yang membentuk pleksus lumbalis (saraf femoralis dan obturator) sebelum meruncing sebagai konus medularis.",
        position: "Terletak di kanalis spinalis torakal bawah dan lumbal atas (berakhir setinggi vertebra L1-L2 pada orang dewasa), dikelilingi oleh kauda ekuina.",
        mechanism: "Neuron motorik alfa besar di kornu ventral menginervasi otot paha anterior dan medial. Serabut sensorik aferen dari gelendong otot kuadriseps memediasi refleks tendon patela monosinaptik (L2-L4).",
        health: "Sindrom kauda ekuina akibat herniasi diskus sentral masif bermanifestasi dengan anestesia pelana (saddle anesthesia), skiatika bilateral, kelemahan motorik, dan retensi urine dengan inkontinensia paradoksal."
      },
      [
        { question: "At what vertebral level does the adult spinal cord terminate as the conus medullaris?", options: ["L1 - L2 vertebral level", "L5 - S1 junction", "T8 - T9 level", "C7 - T1 level"], answerIndex: 0, explanation: "In adults, the spinal cord terminates at the lower border of L1 or upper L2 as the conus medullaris." },
        { question: "Which major nerve of the anterior thigh arises from lumbar roots L2, L3, and L4?", options: ["Femoral nerve", "Sciatic nerve", "Pudendal nerve", "Ulnar nerve"], answerIndex: 0, explanation: "The femoral nerve arises from posterior divisions of anterior rami of L2-L4 to innervate the quadriceps femoris." },
        { question: "The collection of descending nerve roots below the conus medullaris is called the:", options: ["Cauda equina", "Filum terminale", "Dorsal root ganglion", "Choroid plexus"], answerIndex: 0, explanation: "The cauda equina ('horse's tail') is the collection of lumbosacral nerve roots traveling within the subarachnoid space." }
      ],
      [
        { question: "Pada tingkat vertebra mana sumsum tulang belakang dewasa berakhir sebagai konus medularis?", options: ["Tingkat vertebra L1 - L2", "Persambungan L5 - S1", "Tingkat T8 - T9", "Tingkat C7 - T1"], answerIndex: 0, explanation: "Pada orang dewasa, sumsum tulang belakang berakhir di batas bawah L1 atau L2 atas sebagai konus medularis." },
        { question: "Saraf utama paha anterior mana yang berasal dari akar lumbal L2, L3, dan L4?", options: ["Saraf femoralis", "Saraf skiatik", "Saraf pudenda", "Saraf ulnaris"], answerIndex: 0, explanation: "Saraf femoralis muncul dari divisi posterior rami anterior L2-L4 untuk menginervasi otot paha depan (kuadriseps)." },
        { question: "Kumpulan akar saraf yang turun di bawah konus medularis disebut:", options: ["Kauda ekuina", "Filum terminale", "Ganglion akar dorsal", "Pleksus koroid"], answerIndex: 0, explanation: "Kauda ekuina ('ekor kuda') adalah kumpulan akar saraf lumbosakral yang berjalan di dalam ruang subaraknoid." }
      ],
      ["thoracic_spinal_cord", "sciatic_nerve"]
    ),

    "Dorsal Root Ganglion": lesson("nervous", "spinal_cord", { EN: "Dorsal Root Ganglion", ID: "Ganglion Akar Dorsal" }, "🔬⚡",
      {
        overview: "The dorsal root ganglion is a tiny cluster of sensory nerve cells sitting just outside the spinal cord. It acts like a sensory gateway, receiving sensations of touch, temperature, and pain from your skin and organs.",
        position: "Located in the intervertebral foramina along the posterior (dorsal) root of every spinal nerve.",
        mechanism: "Pseudounipolar sensory neurons collect signals from sensory receptors in the skin and muscles and transmit them directly into the spinal cord's dorsal horn.",
        health: "The chickenpox virus (Varicella zoster) can stay dormant inside dorsal root ganglia for decades, later reactivating as painful shingles along specific nerve dermatomes."
      },
      {
        overview: "The dorsal root ganglion (DRG) houses the pseudounipolar cell bodies of primary first-order afferent sensory neurons and surrounding protective satellite glial cells.",
        position: "Located within the neural (intervertebral) foramen just distal to the dorsal rootlets and proximal to the spinal nerve trunk.",
        mechanism: "Peripheral axons transmit nociceptive (A-delta/C fibers), mechanoreceptive (A-beta fibers), and proprioceptive (A-alpha fibers) action potentials past the DRG soma directly to the central axonal branch terminating in the spinal cord.",
        health: "Diabetic peripheral neuropathy and chronic radicular pain frequently involve DRG hyperexcitability and altered sodium channel expression (Nav1.7, Nav1.8), targeted by DRG neuromodulation and neuropathic analgesics."
      },
      {
        overview: "Ganglion akar dorsal adalah kumpulan kecil sel saraf sensorik yang terletak tepat di luar sumsum tulang belakang. Struktur ini bertindak sebagai gerbang sensorik, menerima sensasi sentuhan, suhu, dan nyeri dari kulit dan organ.",
        position: "Terletak di dalam foramina intervertebralis di sepanjang akar posterior (dorsal) dari setiap saraf tulang belakang.",
        mechanism: "Neuron sensorik pseudounipolar mengumpulkan sinyal dari reseptor sensorik di kulit dan otot serta mentransmisikannya langsung ke kornu dorsal sumsum tulang belakang.",
        health: "Virus cacar air (Varicella zoster) dapat tidak aktif di dalam ganglion akar dorsal selama puluhan tahun, kemudian aktif kembali sebagai cacar ular (herpes zoster) yang nyeri di sepanjang dermatoma saraf."
      },
      {
        overview: "Ganglion akar dorsal (DRG) menampung badan sel pseudounipolar dari neuron sensorik aferen primer tingkat pertama dan sel glia satelit pelindung di sekitarnya.",
        position: "Terletak di dalam foramen intervertebralis tepat di sebelah distal radiks dorsal dan proksimal batang saraf tulang belakang.",
        mechanism: "Akson perifer mentransmisikan potensial aksi nosiseptif (serabut A-delta/C), mekanoreseptif (serabut A-beta), dan proprioseptif (serabut A-alfa) melewati soma DRG langsung ke cabang akson sentral yang berakhir di sumsum tulang belakang.",
        health: "Neuropati perifer diabetik dan nyeri radikuler kronis sering kali melibatkan hipereksitabilitas DRG dan perubahan ekspresi saluran natrium (Nav1.7, Nav1.8), yang ditargetkan oleh neuromodulasi DRG dan analgesik neuropatik."
      },
      [
        { question: "What morphological type of neuron is characteristic of the dorsal root ganglion?", options: ["Pseudounipolar neuron", "Multipolar neuron", "Bipolar neuron", "Pyramidal neuron"], answerIndex: 0, explanation: "DRG somatic sensory neurons are pseudounipolar, possessing a single process that bifurcates into peripheral and central axonal branches." },
        { question: "What supportive glial cells closely surround individual sensory neuron cell bodies in the DRG?", options: ["Satellite glial cells", "Astrocytes", "Oligodendrocytes", "Microglia"], answerIndex: 0, explanation: "Satellite glial cells (SGCs) form an intimate protective cellular sheath around sensory neuron soma in sensory ganglia." },
        { question: "Sensory nociceptive (pain) signals transmitting through the DRG synapse primarily in which spinal cord lamina?", options: ["Rexed laminae I and II (substantia gelatinosa)", "Rexed lamina IX (motor nuclei)", "Lateral horn (IML)", "Anterior white commissure"], answerIndex: 0, explanation: "Primary pain and temperature fibers terminate in the superficial dorsal horn, specifically Rexed laminae I and II." }
      ],
      [
        { question: "Tipe morfologi neuron apa yang khas dari ganglion akar dorsal?", options: ["Neuron pseudounipolar", "Neuron multipolar", "Neuron bipolar", "Neuron piramidal"], answerIndex: 0, explanation: "Neuron sensorik somatik DRG bersifat pseudounipolar, memiliki satu cabang prosesus yang bercabang menjadi akson perifer dan sentral." },
        { question: "Sel glia pendukung mana yang mengelilingi badan sel neuron sensorik individu di DRG?", options: ["Sel glia satelit", "Astrosit", "Oligodendrosit", "Mikroglia"], answerIndex: 0, explanation: "Sel glia satelit (SGC) membentuk selubung pelindung di sekitar badan sel neuron sensorik dalam ganglia sensorik." },
        { question: "Sinyal nosiseptif (nyeri) sensorik yang mentransmisikan melalui DRG bersinaps terutama di lamina korda spinalis mana?", options: ["Lamina Rexed I dan II (substansia gelatinosa)", "Lamina Rexed IX (nuklei motorik)", "Kornu lateral (IML)", "Komisura putih anterior"], answerIndex: 0, explanation: "Serabut nyeri dan suhu primer berakhir di kornu dorsal superfisial, khususnya lamina Rexed I dan II." }
      ],
      ["lumbar_spinal_cord", "thoracic_spinal_cord"]
    ),

    "Sciatic Nerve": lesson("nervous", "spinal_cord", { EN: "Sciatic Nerve", ID: "Saraf Skiatik" }, "⚡🦵",
      {
        overview: "The sciatic nerve is the thickest and longest nerve in your body. It runs from your lower back through your buttocks and down the back of each leg to power your leg muscles and give feeling to your legs and feet.",
        position: "Exits the pelvis through the greater sciatic foramen under the buttock muscles and runs down the posterior thigh to the back of the knee.",
        mechanism: "Transmits motor commands to the hamstring and calf muscles and conveys sensory signals from the lower leg and sole of the foot back up to the spinal cord.",
        health: "Sciatica occurs when a herniated disc, bone spur, or tight piriformis muscle pinches the sciatic nerve, causing sharp shooting pain, tingling, or numbness down the leg."
      },
      {
        overview: "The sciatic nerve (ischiadic nerve) is formed from ventral rami of spinal roots L4 through S3 within the sacral plexus, measuring up to 2 cm in diameter.",
        position: "Passes through the greater sciatic foramen inferior to the piriformis muscle, descends deep to gluteus maximus along the posterior thigh, bifurcating at the popliteal fossa.",
        mechanism: "Provides motor innervation to hamstring muscles (semitendinosus, semimembranosus, biceps femoris) and adductor magnus; its tibial and common fibular terminal branches innervate all lower leg and foot muscles.",
        health: "Piriformis syndrome and lumbar disc herniations compressing L5/S1 roots provoke sciatica characterized by positive straight leg raise (Lasègue sign), dermatomal pain, and diminished Achilles reflex."
      },
      {
        overview: "Saraf skiatik adalah saraf paling tebal dan paling panjang di tubuh Anda. Saraf ini membentang dari punggung bawah melalui bokong dan turun ke belakang setiap kaki untuk menggerakkan otot kaki dan memberikan sensasi rasa pada kaki.",
        position: "Keluar dari panggul melalui foramen skiatika mayor di bawah otot bokong dan berjalan di sepanjang paha belakang hingga ke belakang lutut.",
        mechanism: "Mengirimkan perintah motorik ke otot hamstring dan betis serta menyampaikan sinyal sensorik dari tungkai bawah dan telapak kaki kembali ke sumsum tulang belakang.",
        health: "Skiatika terjadi ketika herniasi diskus, taji tulang, atau otot piriformis yang tegang menjepit saraf skiatik, menyebabkan rasa sakit yang tajam seperti tertembak, kesemutan, atau mati rasa di sepanjang kaki."
      },
      {
        overview: "Saraf skiatik (nervus ischiadicus) dibentuk dari rami ventral akar saraf L4 hingga S3 dalam pleksus sakralis, dengan diameter mencapai 2 cm.",
        position: "Melewati foramen skiatika mayor inferior terhadap otot piriformis, berjalan di sebelah dalam gluteus maksimus di sepanjang paha posterior, bercabang di fosa poplitea.",
        mechanism: "Menyediakan inervasi motorik ke otot-otot hamstring dan adduktor magnus; cabang terminal tibia dan fibula komunis menginervasi semua otot tungkai bawah dan kaki.",
        health: "Sindrom piriformis dan herniasi diskus lumbal yang menekan akar L5/S1 memicu skiatika yang ditandai dengan tes lasegue positif, nyeri dermatomal, dan refleks achilles menurun."
      },
      [
        { question: "Which spinal nerve roots contribute to the formation of the sciatic nerve?", options: ["L4, L5, S1, S2, S3", "L1, L2, L3, L4", "C5, C6, C7, C8, T1", "S2, S3, S4, S5"], answerIndex: 0, explanation: "The sciatic nerve arises from the sacral plexus with roots from L4, L5, S1, S2, and S3." },
        { question: "At the apex of the popliteal fossa, the sciatic nerve divides into which two terminal branches?", options: ["Tibial nerve and common fibular (peroneal) nerve", "Femoral nerve and obturator nerve", "Sural nerve and saphenous nerve", "Deep and superficial peroneal nerves"], answerIndex: 0, explanation: "The sciatic nerve splits into the tibial nerve (medial) and common fibular nerve (lateral) at the popliteal fossa." },
        { question: "Compression or irritation of the sciatic nerve beneath which pelvic muscle causes piriformis syndrome?", options: ["Piriformis muscle", "Gluteus maximus", "Psoas major", "Quadratus femoris"], answerIndex: 0, explanation: "Spasm or hypertrophy of the piriformis muscle can compress the underlying sciatic nerve, causing sciatica symptoms." }
      ],
      [
        { question: "Akar saraf tulang belakang mana yang berkontribusi pada pembentukan saraf skiatik?", options: ["L4, L5, S1, S2, S3", "L1, L2, L3, L4", "C5, C6, C7, C8, T1", "S2, S3, S4, S5"], answerIndex: 0, explanation: "Saraf skiatik muncul dari pleksus sakralis dengan akar dari L4, L5, S1, S2, dan S3." },
        { question: "Di puncak fossa poplitea, saraf skiatik terbagi menjadi dua cabang terminal mana?", options: ["Saraf tibia dan saraf fibula komunis (peroneal)", "Saraf femoralis dan saraf obturator", "Saraf sural dan saraf safena", "Saraf peroneal dalam dan superfisial"], answerIndex: 0, explanation: "Saraf skiatik terbelah menjadi saraf tibia (medial) dan saraf fibula komunis (lateral) di fossa poplitea." },
        { question: "Kompresi atau iritasi saraf skiatik di bawah otot panggul manakah yang menyebabkan sindrom piriformis?", options: ["Otot piriformis", "Gluteus maksimus", "Psoas mayor", "Kuadratus femoris"], answerIndex: 0, explanation: "Spasme atau hipertrofi otot piriformis dapat menekan saraf skiatik di bawahnya, menyebabkan gejala skiatika." }
      ],
      ["lumbar_spinal_cord", "quadriceps"]
    ),

    // Cardio - Valves, Great Vessels
    "Tricuspid Valve": lesson("cardio", "heart", { EN: "Tricuspid Valve", ID: "Katup Trikuspid" }, "🫀🚪",
      {
        overview: "The tricuspid valve is a three-flapped one-way valve in the right side of the heart. It opens to let oxygen-poor blood flow from the right atrium into the right ventricle, then snaps shut to prevent backflow.",
        position: "Positioned between the right atrium and right ventricle of the heart.",
        mechanism: "During heart relaxation (diastole), its three flaps open for blood filling. When the ventricle squeezes (systole), blood pressure pushes the flaps shut while tiny tendon cords hold them tightly in place.",
        health: "Infections (endocarditis) or pulmonary hypertension can cause tricuspid regurgitation, allowing blood to leak backward into the veins and causing leg swelling."
      },
      {
        overview: "The tricuspid valve (right atrioventricular valve) consists of three fibroelastic leaflets (anterior, posterior, septal) anchored to the fibrous cardiac skeleton.",
        position: "Guards the right atrioventricular orifice within the right heart chambers.",
        mechanism: "Chordae tendineae originating from right ventricular papillary muscles attach to free leaflet margins, counteracting systolic ventricular pressures to prevent leaflet prolapse and eversion into the right atrium.",
        health: "Tricuspid regurgitation produces a holosystolic murmur at the left lower sternal border, pulsating jugular veins, hepatic congestion, and peripheral edema; managed with diuretics or transcatheter/surgical annuloplasty."
      },
      {
        overview: "Katup trikuspid adalah katup satu arah berdaun tiga di sisi kanan jantung. Katup ini membuka untuk membiarkan darah miskin oksigen mengalir dari atrium kanan ke ventrikel kanan, lalu menutup rapat untuk mencegah aliran balik.",
        position: "Terletak di antara atrium kanan dan ventrikel kanan jantung.",
        mechanism: "Saat jantung berelaksasi (diastol), ketiga daunnya membuka untuk pengisian darah. Saat ventrikel berkontraksi (sistol), tekanan darah mendorong daun katup menutup sementara tali tendon menahannya tetap rapat.",
        health: "Infeksi (endokarditis) atau hipertensi paru dapat menyebabkan regurgitasi trikuspid, menyebabkan darah bocor kembali ke vena dan memicu pembengkakan kaki."
      },
      {
        overview: "Katup trikuspid (katup atrioventrikular kanan) terdiri dari tiga daun fibrokartilago (anterior, posterior, septal) yang bertambat pada rangka fibrosa jantung.",
        position: "Menjaga orifisium atrioventrikular kanan di dalam ruang jantung kanan.",
        mechanism: "Korda tendinea yang berasal dari otot papilaris ventrikel kanan menempel pada tepi bebas daun katup, menahan tekanan ventrikel sistolik untuk mencegah prolaps daun katup ke atrium kanan.",
        health: "Regurgitasi trikuspid menghasilkan bising holosistolik di batas sternal kiri bawah, pulsasi vena jugularis, kongesti hati, dan edema perifer; dikelola dengan diuretik atau anuloplasti bedah."
      },
      [
        { question: "How many cusps comprise the right atrioventricular (tricuspid) valve?", options: ["3 (anterior, posterior, septal)", "2 (anterior, posterior)", "4 (quadricuspid)", "1 single flap"], answerIndex: 0, explanation: "The tricuspid valve has three cusps: anterior, posterior, and septal." },
        { question: "What fibrous structures anchor the tricuspid valve cusps to papillary muscles?", options: ["Chordae tendineae", "Pectinate muscles", "Crista terminalis", "Trabeculae carneae"], answerIndex: 0, explanation: "Chordae tendineae (tendinous cords) connect valve leaflets to papillary muscles to prevent prolapse during systole." },
        { question: "During which phase of the cardiac cycle is the tricuspid valve open?", options: ["Ventricular diastole (filling)", "Isovolumetric contraction", "Ventricular ejection", "Isovolumetric relaxation"], answerIndex: 0, explanation: "The tricuspid valve opens during ventricular diastole to allow passive and active venous blood filling into the ventricle." }
      ],
      [
        { question: "Berapa banyak kuspis yang menyusun katup atrioventrikular kanan (trikuspid)?", options: ["3 (anterior, posterior, septal)", "2 (anterior, posterior)", "4 (kuadrikuspid)", "1 lipatan tunggal"], answerIndex: 0, explanation: "Katup trikuspid memiliki tiga kuspis: anterior, posterior, dan septal." },
        { question: "Struktur fibrosa apa yang menambatkan daun katup trikuspid ke otot papilaris?", options: ["Korda tendinea", "Otot pektinatus", "Krista terminalis", "Trabekula karnea"], answerIndex: 0, explanation: "Korda tendinea (tali tendon) menghubungkan daun katup ke otot papilaris untuk mencegah prolaps selama sistol." },
        { question: "Selama fase siklus jantung manakah katup trikuspid terbuka?", options: ["Diastol ventrikel (pengisian)", "Kontraksi isovolumetrik", "Ejeksi ventrikel", "Relaksasi isovolumetrik"], answerIndex: 0, explanation: "Katup trikuspid terbuka selama diastol ventrikel untuk memungkinkan pengisian darah vena pasif dan aktif ke dalam ventrikel." }
      ],
      ["right_ventricle", "right_atrium", "mitral_valve"]
    ),

    "Ascending Aorta": lesson("cardio", "heart", { EN: "Ascending Aorta", ID: "Aorta Asenden" }, "🫀🔴",
      {
        overview: "The ascending aorta is the main trunk of the body's largest blood vessel. It rises directly out of the heart's left ventricle, carrying high-pressure, oxygen-rich blood on the first step of its journey to the rest of the body.",
        position: "Extends upward about 5 centimeters from the base of the left ventricle to the aortic arch in the middle of the chest.",
        mechanism: "Its elastic muscular walls expand like a balloon with each heartbeat to absorb high pressure, then gently squeeze during rest to keep blood flowing steadily.",
        health: "High blood pressure and smoking can weaken the aortic wall, leading to an ascending aortic aneurysm or tear (dissection), which requires emergency medical attention."
      },
      {
        overview: "The ascending aorta measures roughly 5 cm in length and 2.5–3 cm in diameter, arising from the aortic annulus and terminating at the origin of the brachiocephalic artery.",
        position: "Enclosed within the fibrous pericardial sheath in the middle mediastinum, situated anterior to the pulmonary artery bifurcation and left atrium.",
        mechanism: "Aortic sinuses of Valsalva at its root give rise to the coronary arteries. The rich elastin lamellae within its tunica media provide the Windkessel effect, dampening systolic pulse pressure and maintaining continuous diastolic coronary perfusion.",
        health: "Stanford Type A aortic dissection involves an intimal tear in the ascending aorta, posing immediate risk of cardiac tamponade, acute aortic regurgitation, or myocardial infarction; requires emergent surgical graft replacement."
      },
      {
        overview: "Aorta asenden adalah batang utama pembuluh darah terbesar di tubuh. Pembuluh ini muncul langsung dari ventrikel kiri jantung, membawa darah kaya oksigen bertekanan tinggi pada langkah pertama perjalanannya ke seluruh tubuh.",
        position: "Membentang ke atas sekitar 5 sentimeter dari dasar ventrikel kiri ke arkus aorta di tengah dada.",
        mechanism: "Dinding ototnya yang elastis mengembang seperti balon pada setiap detak jantung untuk menyerap tekanan tinggi, lalu memompa lembut saat jantung beristirahat agar aliran darah tetap stabil.",
        health: "Tekanan darah tinggi dan merokok dapat melemahkan dinding aorta, memicu aneurisma aorta asenden atau robekan (diseksi), yang membutuhkan penanganan darurat segera."
      },
      {
        overview: "Aorta asenden memiliki panjang sekitar 5 cm dan diameter 2,5–3 cm, muncul dari anulus aorta dan berakhir di pangkal arteri brakiosefalika.",
        position: "Tertutup di dalam kantung perikardium fibrosa di mediastinum media, terletak anterior terhadap bifurkasio arteri pulmonalis dan atrium kiri.",
        mechanism: "Sinus aorta Valsalva pada dasarnya menjadi tempat munculnya arteri koroner. Lapisan elastin yang kaya pada tunika media memberikan efek Windkessel, meredam tekanan sistolik dan mempertahankan perfusi koroner diastolik terus-menerus.",
        health: "Diseksi aorta Stanford Tipe A melibatkan robekan intima pada aorta asenden, menimbulkan risiko tamponade jantung, insufisiensi aorta akut, atau infark miokard; memerlukan penggantian tandur bedah darurat."
      },
      [
        { question: "Which vital arteries arise directly from the aortic sinuses at the base of the ascending aorta?", options: ["Coronary arteries (left and right)", "Carotid arteries", "Subclavian arteries", "Bronchial arteries"], answerIndex: 0, explanation: "The left and right coronary arteries originate from the aortic sinuses of Valsalva just above the aortic valve." },
        { question: "What physiological mechanism allows elastic aortic wall recoil to maintain continuous diastolic organ perfusion?", options: ["Windkessel effect", "Frank-Starling law", "Bainbridge reflex", "Bernoulli principle"], answerIndex: 0, explanation: "The Windkessel effect describes the elastic expansion during systole and passive recoil during diastole that dampens pulsatile pressure." },
        { question: "A tear in the tunica intima of the ascending aorta leading to blood dissection is classified as:", options: ["Stanford Type A aortic dissection", "Stanford Type B aortic dissection", "Atherosclerotic plaque rupture", "Coarctation of the aorta"], answerIndex: 0, explanation: "Stanford Type A dissections involve the ascending aorta and represent surgical emergencies." }
      ],
      [
        { question: "Arteri vital manakah yang muncul langsung dari sinus aorta di dasar aorta asenden?", options: ["Arteri koroner (kiri dan kanan)", "Arteri karotis", "Arteri subklavia", "Arteri bronkial"], answerIndex: 0, explanation: "Arteri koroner kiri dan kanan berasal dari sinus Valsalva aorta tepat di atas katup aorta." },
        { question: "Mekanisme fisiologis apa yang memungkinkan dinding aorta elastis mempertahankan perfusi organ diastolik terus-menerus?", options: ["Efek Windkessel", "Hukum Frank-Starling", "Refleks Bainbridge", "Prinsip Bernoulli"], answerIndex: 0, explanation: "Efek Windkessel menggambarkan ekspansi elastis selama sistol dan rekoil pasif selama diastol yang meredam tekanan pulsatif." },
        { question: "Robekan pada tunika intima aorta asenden yang menyebabkan diseksi darah diklasifikasikan sebagai:", options: ["Diseksi aorta Stanford Tipe A", "Diseksi aorta Stanford Tipe B", "Ruptur plak aterosklerotik", "Koarktasio aorta"], answerIndex: 0, explanation: "Diseksi Stanford Tipe A melibatkan aorta asenden dan merupakan keadaan darurat bedah." }
      ],
      ["aorta", "left_ventricle", "coronary_arteries"]
    ),

    "Carotid Artery": lesson("cardio", "heart", { EN: "Carotid Artery", ID: "Arteri Karotis" }, "🫀🔴",
      {
        overview: "The carotid arteries are the two major pulse points in your neck. They act like main highways delivering fresh, oxygen-packed blood directly from the heart up into your brain, eyes, and face.",
        position: "Ascends on both the left and right sides of your neck, easily felt as a strong pulse just under your jawline.",
        mechanism: "Splits into internal (feeding brain cells) and external (feeding face and scalp) branches, with built-in sensors that monitor your blood pressure and oxygen levels.",
        health: "Cholesterol plaque buildup (atherosclerosis) can narrow carotid arteries, increasing the risk of a transient ischemic attack (TIA) or ischemic stroke."
      },
      {
        overview: "The common carotid artery ascends within the carotid sheath accompanied by the internal jugular vein and vagus nerve, bifurcating at the C3/C4 thyroid cartilage level into internal and external branches.",
        position: "Located in the anterior cervical triangle of the neck lateral to the trachea and larynx.",
        mechanism: "The carotid sinus at the bifurcation contains baroreceptors innervated by CN IX (Hering's nerve) that regulate systemic blood pressure; the adjacent carotid body contains chemoreceptors sensing arterial pO2, pCO2, and pH.",
        health: "Carotid artery stenosis (>70% luminal narrowing) from atherosclerotic plaque risks thromboembolic stroke; evaluated with carotid duplex ultrasound and treated with statins, antiplatelet therapy, carotid endarterectomy (CEA), or stenting."
      },
      {
        overview: "Arteri karotis adalah dua titik denyut nadi utama di leher Anda. Pembuluh ini bertindak sebagai jalur utama yang menyalurkan darah segar kaya oksigen langsung dari jantung ke otak, mata, dan wajah Anda.",
        position: "Naik di kedua sisi leher kiri dan kanan, mudah diraba sebagai denyutan kuat tepat di bawah garis rahang.",
        mechanism: "Bercabang menjadi arteri karotis interna (memberi makan sel otak) dan eksterna (memberi makan wajah dan kulit kepala), dengan sensor alami yang memantau tekanan darah dan kadar oksigen.",
        health: "Penumpukan plak kolesterol (aterosklerosis) dapat mempersempit arteri karotis, meningkatkan risiko stroke iskemik atau serangan stroke ringan (TIA)."
      },
      {
        overview: "Arteri karotis komunis berjalan naik di dalam selubung karotis bersama vena jugularis interna dan saraf vagus, bercabang setinggi kartilago tiroid C3/C4 menjadi cabang interna dan eksterna.",
        position: "Terletak di trigonum servikalis anterior leher di lateral trakea dan laring.",
        mechanism: "Sinus karotis pada bifurkasio berisi baroreseptor yang diinervasi oleh CN IX yang mengatur tekanan darah sistemik; badan karotis di dekatnya berisi kemoreseptor yang merasakan pO2, pCO2, dan pH arteri.",
        health: "Stenosis arteri karotis (>70%) akibat plak aterosklerosis berisiko memicu stroke tromboemboli; dievaluasi dengan USG dupleks karotis dan ditangani dengan statin, antiplatelet, endarterektomi karotis (CEA), atau pemasangan stent."
      },
      [
        { question: "At what vertebral level does the common carotid artery typically bifurcate?", options: ["C3 - C4 (upper border of thyroid cartilage)", "C1 - C2 (atlas/axis)", "T1 - T2 level", "C6 - C7 level"], answerIndex: 0, explanation: "The common carotid artery bifurcates into internal and external branches at the level of the upper thyroid cartilage (C3-C4)." },
        { question: "What specialized baroreceptor structure is located at the carotid bifurcation to monitor blood pressure?", options: ["Carotid sinus", "Carotid body", "Aortic glomus", "Stellate ganglion"], answerIndex: 0, explanation: "The carotid sinus is a dilated area rich in baroreceptors that sense arterial blood pressure changes, innervated by CN IX." },
        { question: "The carotid body (glomus caroticum) functions primarily as a:", options: ["Peripheral chemoreceptor (detecting arterial pO2, pCO2, pH)", "Baroreceptor (detecting stretch)", "Endocrine hormone gland", "Thermoreceptor"], answerIndex: 0, explanation: "The carotid body contains chemoreceptor glomus cells sensitive to arterial hypoxemia, hypercapnia, and acidosis." }
      ],
      [
        { question: "Pada tingkat vertebra berapa arteri karotis komunis biasanya bercabang?", options: ["C3 - C4 (batas atas kartilago tiroid)", "C1 - C2 (atlas/aksis)", "Tingkat T1 - T2", "Tingkat C6 - C7"], answerIndex: 0, explanation: "Arteri karotis komunis bercabang menjadi karotis interna dan eksterna setinggi kartilago tiroid atas (C3-C4)." },
        { question: "Struktur baroreseptor khusus apa yang terletak di bifurkasio karotis untuk memantau tekanan darah?", options: ["Sinus karotis", "Badan karotis", "Glomus aorta", "Ganglion stelata"], answerIndex: 0, explanation: "Sinus karotis adalah area yang kaya baroreseptor untuk mendeteksi perubahan tekanan darah arteri, diinervasi oleh CN IX." },
        { question: "Badan karotis (glomus caroticum) berfungsi terutama sebagai:", options: ["Kemoreseptor perifer (mendeteksi pO2, pCO2, pH arteri)", "Baroreseptor (mendeteksi regangan)", "Kelenjar hormon endokrin", "Termoreseptor"], answerIndex: 0, explanation: "Badan karotis mengandung sel kemoreseptor glomus yang peka terhadap hipoksemia, hiperkapnia, dan asidosis arteri." }
      ],
      ["jugular_vein", "cerebrum", "aorta"]
    ),

    "Jugular Vein": lesson("cardio", "heart", { EN: "Jugular Vein", ID: "Vena Jugularis" }, "🫀🔵",
      {
        overview: "The jugular veins are the primary drainage pipes in your neck. They collect used, oxygen-depleted blood from your brain, skull, and face and carry it smoothly back toward your heart.",
        position: "Runs down both sides of your neck alongside the carotid arteries, connecting the base of the skull to the chest.",
        mechanism: "Gravity and suction from the heart's right atrium draw deoxygenated blood downward through the internal and external jugular veins into the superior vena cava.",
        health: "When heart failure raises pressure inside the heart, doctors can see the jugular vein pulsating strongly in the neck (elevated jugular venous pressure or JVP)."
      },
      {
        overview: "The internal jugular vein (IJV) is the direct caudal continuation of the sigmoid sinus at the jugular foramen, joining the subclavian vein to form the brachiocephalic vein.",
        position: "Descends within the carotid sheath lateral to the internal and common carotid arteries beneath the sternocleidomastoid muscle.",
        mechanism: "Drains venous blood from intracranial dural venous sinuses, orbit, and anterior face. The external jugular vein (EJV) drains superficial scalp and posterior head tissues into the subclavian vein.",
        health: "Internal jugular vein cannulation is a standard approach for central venous line placement. Thrombophlebitis of the IJV secondary to oropharyngeal infection is known as Lemierre syndrome."
      },
      {
        overview: "Vena jugularis adalah saluran pembuangan utama di leher Anda. Vena ini mengumpulkan darah yang telah digunakan dari otak, tengkorak, dan wajah lalu membawanya kembali ke jantung.",
        position: "Berjalan turun di kedua sisi leher Anda di samping arteri karotis, menghubungkan dasar tengkorak ke dada.",
        mechanism: "Gravitasi dan daya hisap dari atrium kanan jantung menarik darah terdeoksigenasi ke bawah melalui vena jugularis interna dan eksterna menuju vena kava superior.",
        health: "Ketika gagal jantung meningkatkan tekanan di dalam jantung, dokter dapat melihat vena jugularis berdenyut kuat di leher (peningkatan tekanan vena jugularis atau JVP)."
      },
      {
        overview: "Vena jugularis interna (IJV) adalah kelanjutan kaudal langsung dari sinus sigmoid pada foramen jugularis, bergabung dengan vena subklavia untuk membentuk vena brakiosefalika.",
        position: "Berjalan turun di dalam selubung karotis lateral terhadap arteri karotis interna dan komunis di bawah otot sternokleidomastoideus.",
        mechanism: "Mengalirkan darah vena dari sinus dura intrakranial, rongga mata, dan wajah anterior. Vena jugularis eksterna (EJV) mengalirkan jaringan kulit kepala superfisial ke vena subklavia.",
        health: "Kanalisasi vena jugularis interna adalah prosedur standar untuk pemasangan jalur vena sentral. Tromboflebitis IJV akibat infeksi orofaring dikenal sebagai sindrom Lemierre."
      },
      [
        { question: "The internal jugular vein is the direct caudal continuation of which intracranial dural venous sinus?", options: ["Sigmoid sinus", "Superior sagittal sinus", "Cavernous sinus", "Straight sinus"], answerIndex: 0, explanation: "The sigmoid sinus exits the skull base through the jugular foramen to continue as the internal jugular vein." },
        { question: "The internal jugular vein unites with the subclavian vein to form the:", options: ["Brachiocephalic (innominate) vein", "Superior vena cava", "Azygos vein", "Cephalic vein"], answerIndex: 0, explanation: "The confluence of the IJV and subclavian vein forms the brachiocephalic vein behind the sternoclavicular joint." },
        { question: "Elevated internal jugular venous pulsation observed in physical examination reflects increased pressure in the:", options: ["Right atrium (central venous pressure)", "Left ventricle", "Pulmonary capillaries", "Carotid artery"], answerIndex: 0, explanation: "Jugular venous pressure (JVP) provides an accurate clinical estimate of right atrial (central venous) pressure." }
      ],
      [
        { question: "Vena jugularis interna adalah kelanjutan kaudal langsung dari sinus vena dura intrakranial mana?", options: ["Sinus sigmoid", "Sinus sagitalis superior", "Sinus kavernosus", "Sinus rektus"], answerIndex: 0, explanation: "Sinus sigmoid keluar dari dasar tengkorak melalui foramen jugularis untuk berlanjut sebagai vena jugularis interna." },
        { question: "Vena jugularis interna bersatu dengan vena subklavia untuk membentuk:", options: ["Vena brakiosefalika (inominata)", "Vena kava superior", "Vena azigos", "Vena sefalika"], answerIndex: 0, explanation: "Pertemuan IJV dan vena subklavia membentuk vena brakiosefalika di belakang sendi sternoklavikularis." },
        { question: "Peningkatan pulsasi vena jugularis interna yang diamati pada pemeriksaan fisik mencerminkan peningkatan tekanan di:", options: ["Atrium kanan (tekanan vena sentral)", "Ventrikel kiri", "Kapiler paru", "Arteri karotis"], answerIndex: 0, explanation: "Tekanan vena jugularis (JVP) memberikan perkiraan klinis yang akurat untuk tekanan atrium kanan (vena sentral)." }
      ],
      ["carotid_artery", "vena_cava", "right_atrium"]
    ),

    "Subclavian Artery": lesson("cardio", "heart", { EN: "Subclavian Artery", ID: "Arteri Subklavia" }, "🫀🔴",
      {
        overview: "The subclavian arteries are large paired blood vessels situated under your collarbones. They supply oxygen-rich blood to your entire arms, chest wall, and the back of your brain.",
        position: "Arches beneath each clavicle (collarbone) across the top of the lungs and down into the armpits.",
        mechanism: "Branches off into the vertebral artery heading up to the brain and continues past the first rib as the axillary artery to power the arm and hand.",
        health: "Repetitive overhead arm motions or an extra cervical rib can compress the artery, causing thoracic outlet syndrome (TOS) with arm numbness and cold fingers."
      },
      {
        overview: "The right subclavian artery arises from the brachiocephalic trunk; the left originates directly from the aortic arch. Each arches over the pleural cupola behind the anterior scalene muscle.",
        position: "Traverses the scalene triangle between the anterior and middle scalene muscles, transitioning to the axillary artery at the lateral border of the first rib.",
        mechanism: "Gives rise to 5 key branches: vertebral artery, internal thoracic (mammary) artery, thyrocervical trunk, costocervical trunk, and dorsal scapular artery, providing critical collateral circulation.",
        health: "Subclavian steal syndrome occurs with proximal subclavian stenosis, causing retrograde flow down the ipsilateral vertebral artery to supply the arm, provoking vertebrobasilar insufficiency and syncope with arm exercise."
      },
      {
        overview: "Arteri subklavia adalah pembuluh darah besar di bawah tulang selangka Anda. Pembuluh ini menyuplai darah kaya oksigen ke seluruh lengan, dinding dada, dan bagian belakang otak Anda.",
        position: "Melengkung di bawah setiap tulang selangka (klavikula) di atas puncak paru-paru dan turun ke ketiak.",
        mechanism: "Bercabang menjadi arteri vertebralis yang menuju ke otak dan berlanjut melewati tulang rusuk pertama sebagai arteri aksilaris untuk memberi makan lengan dan tangan.",
        health: "Gerakan mengangkat lengan berulang-ulang atau adanya tulang rusuk leher tambahan dapat menjepit arteri ini, menyebabkan sindrom outlet toraks (TOS) dengan rasa kebas pada lengan dan jari dingin."
      },
      {
        overview: "Arteri subklavia kanan berasal dari trunkus brakiosefalika; yang kiri berasal langsung dari arkus aorta. Masing-masing melengkung di atas kupola pleura di belakang otot skalenus anterior.",
        position: "Melintasi segitiga skalenus antara otot skalenus anterior dan medius, bertransisi menjadi arteri aksilaris pada batas lateral kosta pertama.",
        mechanism: "Memunculkan 5 cabang utama: arteri vertebralis, arteri torasika interna, trunkus tiroservikal, trunkus kostoservikal, dan arteri skapularis dorsal.",
        health: "Sindrom pencurian subklavia (subclavian steal syndrome) terjadi saat stenosis subklavia proksimal memicu aliran balik menuruni arteri vertebralis ipsilateral untuk menyuplai lengan, memicu insufisiensi vertebrobasilar saat lengan beraktivitas."
      },
      [
        { question: "Which major artery supplying posterior cerebral circulation branches directly off the first part of the subclavian artery?", options: ["Vertebral artery", "Internal carotid artery", "Middle cerebral artery", "Facial artery"], answerIndex: 0, explanation: "The vertebral artery arises from the first part of the subclavian artery and ascends through the transverse foramina of C6-C1." },
        { question: "At which anatomical boundary does the subclavian artery change its name to the axillary artery?", options: ["Lateral border of the first rib", "Inferior border of teres major", "Clavicular mid-shaft", "Anterior scalene insertion"], answerIndex: 0, explanation: "The subclavian artery becomes the axillary artery at the outer lateral border of the first rib." },
        { question: "Subclavian steal syndrome occurs when proximal subclavian stenosis causes retrograde blood flow down which artery?", options: ["Ipsilateral vertebral artery", "Internal carotid artery", "Basilar artery", "Common carotid artery"], answerIndex: 0, explanation: "Proximal subclavian occlusion causes retrograde flow down the ipsilateral vertebral artery to supply the upper limb at the expense of brain perfusion." }
      ],
      [
        { question: "Arteri utama mana yang menyuplai sirkulasi serebral posterior yang bercabang langsung dari bagian pertama arteri subklavia?", options: ["Arteri vertebralis", "Arteri karotis interna", "Arteri serebri media", "Arteri fasialis"], answerIndex: 0, explanation: "Arteri vertebralis muncul dari bagian pertama arteri subklavia dan naik melalui foramina transversa C6-C1." },
        { question: "Pada batas anatomis manakah arteri subklavia berganti nama menjadi arteri aksilaris?", options: ["Batas lateral iga pertama", "Batas inferior teres mayor", "Bagian tengah klavikula", "Insersi skalenus anterior"], answerIndex: 0, explanation: "Arteri subklavia menjadi arteri aksilaris di batas luar lateral dari tulang iga pertama." },
        { question: "Sindrom 'subclavian steal' terjadi ketika stenosis subklavia proksimal menyebabkan aliran darah retrograde menuruni arteri mana?", options: ["Arteri vertebralis ipsilateral", "Arteri karotis interna", "Arteri basilaris", "Arteri karotis komunis"], answerIndex: 0, explanation: "Oklusi subklavia proksimal menyebabkan aliran retrograde menuruni arteri vertebralis ipsilateral untuk menyuplai lengan." }
      ],
      ["aorta", "carotid_artery", "humerus"]
    ),

    "Vena Cava Superior & Inferior": lesson("cardio", "heart", { EN: "Vena Cava Superior & Inferior", ID: "Vena Kava Superior & Inferior" }, "🫀🔵",
      {
        overview: "The superior and inferior vena cava are the two largest veins in your entire body. They gather all oxygen-depleted blood from your head, arms, torso, and legs and return it into the right side of the heart.",
        position: "The superior vena cava drains the upper body into the top of the right atrium; the inferior vena cava runs up the spine from the legs and abdomen into the bottom of the right atrium.",
        mechanism: "Passive venous return is propelled by muscle pumps, negative breathing pressures in the chest, and one-way valves in lower veins, delivering roughly 5 liters of blood per minute to the heart.",
        health: "Blood clots from deep leg veins (DVT) can travel up the inferior vena cava into the lungs, causing a life-threatening pulmonary embolism. Blood thinners or IVC filters prevent this."
      },
      {
        overview: "The superior vena cava (SVC) forms from the confluence of the right and left brachiocephalic veins; the inferior vena cava (IVC) originates from the common iliac veins at L5 and pierces the diaphragm at T8.",
        position: "SVC occupies the right superior mediastinum; IVC ascends retroperitoneally in the posterior abdominal wall to the right of the abdominal aorta.",
        mechanism: "The SVC returns venous blood from regions above the diaphragm (head, neck, upper limbs, azygos venous drainage). The IVC returns blood from lower limbs, pelvis, abdominal viscera, and kidneys into the right atrium.",
        health: "SVC syndrome from mediastinal malignancies (e.g. small cell lung cancer, lymphoma) causes facial edema, plethora, and distended thoracic collaterals. IVC compression in late pregnancy reduces venous return, provoking supine hypotensive syndrome."
      },
      {
        overview: "Vena kava superior dan inferior adalah dua pembuluh vena terbesar di seluruh tubuh Anda. Keduanya mengumpulkan semua darah miskin oksigen dari kepala, lengan, badan, dan kaki lalu mengembalikannya ke sisi kanan jantung.",
        position: "Vena kava superior mengalirkan tubuh bagian atas ke bagian atas atrium kanan; vena kava inferior membentang di sepanjang tulang belakang dari kaki dan perut ke bagian bawah atrium kanan.",
        mechanism: "Aliran balik vena pasif didorong oleh pompa otot, tekanan napas negatif di dada, dan katup satu arah di vena bagian bawah, menyalurkan sekitar 5 liter darah per menit ke jantung.",
        health: "Gumpalan darah dari vena dalam kaki (DVT) dapat berjalan menaiki vena kava inferior ke paru-paru, menyebabkan emboli paru yang berbahaya. Obat pengencer darah atau filter IVC dapat mencegahnya."
      },
      {
        overview: "Vena kava superior (SVC) terbentuk dari pertemuan vena brakiosefalika kanan dan kiri; vena kava inferior (IVC) berasal dari vena iliaka komunis di L5 dan menembus diafragma di T8.",
        position: "SVC menempati mediastinum superior kanan; IVC naik secara retroperitoneal di dinding perut posterior di sebelah kanan aorta abdominalis.",
        mechanism: "SVC mengembalikan darah vena dari wilayah di atas diafragma (kepala, leher, lengan atas, drainase vena azigos). IVC mengembalikan darah dari ekstremitas bawah, panggul, organ perut, dan ginjal ke atrium kanan.",
        health: "Sindrom SVC akibat keganasan mediastinum menyebabkan edema wajah, pletora, dan distensi vena dada kolateral. Kompresi IVC pada kehamilan lanjut mengurangi aliran balik vena, memicu sindrom hipotensi telentang."
      },
      [
        { question: "At which diaphragmatic hiatus does the inferior vena cava pass into the thoracic cavity?", options: ["Caval opening (T8 level)", "Esophageal hiatus (T10 level)", "Aortic hiatus (T12 level)", "Sternocostal triangle"], answerIndex: 0, explanation: "The IVC passes through the caval opening in the central tendon of the diaphragm at the level of T8 ('I 8 10 Eggs At 12')." },
        { question: "Which solitary venous tributary empties into the posterior aspect of the superior vena cava just before it enters the pericardium?", options: ["Azygos vein", "Hemiazygos vein", "Internal thoracic vein", "Inferior thyroid vein"], answerIndex: 0, explanation: "The azygos vein arches over the root of the right lung to drain into the posterior SVC." },
        { question: "Obstruction of the superior vena cava typically presents clinically as:", options: ["Facial plethora, periorbital edema, and distended neck/chest veins", "Lower extremity pitting edema only", "Ascites and jaundice", "Acute pulmonary embolism"], answerIndex: 0, explanation: "SVC syndrome leads to venous congestion in the upper body manifesting as head and neck swelling and collateral venous distension." }
      ],
      [
        { question: "Pada hiatus diafragma manakah vena kava inferior lewat ke dalam rongga dada?", options: ["Lubang kaval (tingkat T8)", "Hiatus esofagus (tingkat T10)", "Hiatus aorta (tingkat T12)", "Segitiga sternokostal"], answerIndex: 0, explanation: "IVC melewati lubang kaval di tendon sentral diafragma setinggi T8." },
        { question: "Cabang vena tunggal manakah yang bermuara ke aspek posterior vena kava superior tepat sebelum memasuki perikardium?", options: ["Vena azigos", "Vena hemiazigos", "Vena torasika interna", "Vena tiroid inferior"], answerIndex: 0, explanation: "Vena azigos melengkung di atas akar paru kanan untuk mengalir ke SVC posterior." },
        { question: "Obstruksi vena kava superior biasanya bermanifestasi secara klinis sebagai:", options: ["Pletora wajah, edema periorbital, dan pelebaran vena leher/dada", "Hanya edema tungkai bawah", "Asites dan penyakit kuning", "Emboli paru akut"], answerIndex: 0, explanation: "Sindrom SVC menyebabkan kongesti vena di tubuh bagian atas yang bermanifestasi sebagai pembengkakan kepala dan leher serta pelebaran vena kolateral." }
      ],
      ["right_atrium", "jugular_vein", "heart"]
    ),

    // Respiratory - Bronchi, Alveoli, Diaphragm
    "Primary Bronchi": lesson("resp", "lungs", { EN: "Primary Bronchi", ID: "Bronkus Primer" }, "🫁🌬️",
      {
        overview: "The primary bronchi are the two main airway tubes branching from the windpipe into each lung. They conduct inhaled air deep into the bronchial tree.",
        position: "Located in the center of the chest behind the heart, branching out from the lower end of the trachea at the carina.",
        mechanism: "Reinforced by rings of cartilage to stay wide open, lined with microscopic cilia and mucus that sweep dust particles back up and out of the airways.",
        health: "Infections can cause acute bronchitis with cough and mucus. Because the right bronchus is wider and more vertical, accidentally swallowed objects are much more likely to fall into the right lung."
      },
      {
        overview: "The trachea bifurcates at the carina (T4/T5 sternal angle) into the right and left main (primary) bronchi, each entering the pulmonary hilum.",
        position: "Situated in the superior and middle mediastinum, with the left bronchus passing beneath the aortic arch and anterior to the esophagus.",
        mechanism: "The right primary bronchus is wider, shorter (~2.5 cm), and more vertical (25° angle) compared to the left (~5 cm, 45° angle). C-shaped hyaline cartilage rings and pseudostratified ciliated columnar epithelium maintain airway patency and mucociliary clearance.",
        health: "Foreign body aspiration preferentially lodges in the right main bronchus or bronchus intermedius. Bronchogenic carcinoma frequently arises near the bronchial bifurcation, evaluated with flexible bronchoscopy and CT."
      },
      {
        overview: "Bronkus primer adalah dua saluran udara utama yang bercabang dari batang tenggorokan ke masing-masing paru-paru. Saluran ini menghantarkan udara yang dihirup jauh ke dalam percabangan paru.",
        position: "Terletak di tengah dada di belakang jantung, bercabang dari ujung bawah trakea pada karina.",
        mechanism: "Diperkuat oleh cincin tulang rawan agar tetap terbuka lebar, dilapisi oleh silia mikroskopis dan lendir yang menyapu partikel debu keluar dari saluran napas.",
        health: "Infeksi dapat menyebabkan bronkitis akut dengan batuk dan lendir. Karena bronkus kanan lebih lebar dan lebih tegak, benda asing yang tidak sengaja tertelan jauh lebih mungkin masuk ke paru kanan."
      },
      {
        overview: "Trakea bercabang di karina (sudut sternal T4/T5) menjadi bronkus utama (primer) kanan dan kiri, yang masing-masing memasuki hilus paru.",
        position: "Terletak di mediastinum superior dan media, dengan bronkus kiri berjalan di bawah arkus aorta dan anterior terhadap esofagus.",
        mechanism: "Bronkus primer kanan lebih lebar, lebih pendek (~2,5 cm), dan lebih vertikal (sudut 25°) dibandingkan kiri (~5 cm, sudut 45°). Cincin tulang rawan hialin dan epitel kolumnar bersilia mempertahankan kepatenan jalan napas dan klirens mukosiliar.",
        health: "Aspirasi benda asing paling sering bersarang di bronkus utama kanan. Karsinoma bronkogenik sering muncul di dekat percabangan bronkus, dievaluasi dengan bronkoskopi fleksibel dan CT scan."
      },
      [
        { question: "Why are aspirated foreign objects significantly more likely to lodge in the right main bronchus?", options: ["It is wider, shorter, and runs more vertically", "It is narrower and longer", "It has higher ciliary resistance", "It branches at an acute 90-degree angle"], answerIndex: 0, explanation: "The right primary bronchus is wider, shorter, and more vertical, providing an almost direct downward path from the trachea." },
        { question: "The internal cartilaginous ridge located at the tracheal bifurcation is called the:", options: ["Carina", "Cricoid cartilage", "Epiglottis", "Conus elasticus"], answerIndex: 0, explanation: "The carina is the internal ridge at the tracheal bifurcation, densely innervated by sensitive cough reflex receptors." },
        { question: "How many secondary (lobar) bronchi branch off the right main bronchus compared to the left?", options: ["3 on the right (3 lobes), 2 on the left (2 lobes)", "2 on the right, 3 on the left", "4 on the right, 3 on the left", "1 on each side"], answerIndex: 0, explanation: "The right lung has 3 lobes (superior, middle, inferior) and thus 3 lobar bronchi; the left lung has 2 lobes and 2 lobar bronchi." }
      ],
      [
        { question: "Mengapa benda asing yang teraspirasi jauh lebih mungkin bersarang di bronkus utama kanan?", options: ["Salurannya lebih lebar, lebih pendek, dan berjalan lebih vertikal", "Salurannya lebih sempit dan lebih panjang", "Memiliki resistensi silia yang lebih tinggi", "Bercabang pada sudut siku-siku 90 derajat"], answerIndex: 0, explanation: "Bronkus primer kanan lebih lebar, lebih pendek, dan lebih vertikal, menyediakan jalur langsung ke bawah dari trakea." },
        { question: "Punggung tulang rawan internal yang terletak di bifurkasio trakea disebut:", options: ["Karina", "Tulang rawan krikoid", "Epiglotis", "Konus elastikus"], answerIndex: 0, explanation: "Karina adalah punggung tulang rawan internal pada bifurkasio trakea, kaya reseptor refleks batuk yang sensitif." },
        { question: "Berapa banyak bronkus sekunder (lobar) yang bercabang dari bronkus utama kanan dibandingkan dengan kiri?", options: ["3 di kanan (3 lobus), 2 di kiri (2 lobus)", "2 di kanan, 3 di kiri", "4 di kanan, 3 di kiri", "1 di setiap sisi"], answerIndex: 0, explanation: "Paru-paru kanan memiliki 3 lobus sehingga memiliki 3 bronkus lobaris; paru-paru kiri memiliki 2 lobus dan 2 bronkus lobaris." }
      ],
      ["trachea", "left_lung", "right_lung"]
    ),

    "Alveolar Sacs": lesson("resp", "lungs", { EN: "Alveolar Sacs", ID: "Kantung Alveolus" }, "🫁🍇",
      {
        overview: "Alveolar sacs are tiny, microscopic clusters shaped like bunches of grapes at the very end of your airway tree. This is where the magic of breathing happens: oxygen enters your blood and carbon dioxide is removed.",
        position: "Located at the deepest tips of the respiratory bronchioles throughout both lungs, with roughly 300 to 500 million sacs in healthy lungs.",
        mechanism: "Their walls are so thin that oxygen molecules easily slip through into nearby blood capillaries while carbon dioxide passes out into the air to be exhaled.",
        health: "Pneumonia fills these tiny sacs with fluid, while smoking destroys their delicate walls (emphysema), making breathing difficult and reducing oxygen absorption."
      },
      {
        overview: "Alveolar sacs represent the terminal functional units of the respiratory zone, comprising multiple polyhedral alveoli interconnected by pores of Kohn, providing an enormous surface area of 70–100 m².",
        position: "Distributed diffusely throughout pulmonary parenchyma distal to terminal alveolar ducts.",
        mechanism: "The blood-air barrier (0.2–0.5 µm thick) consists of type I pneumocytes, fused basement membranes, and capillary endothelium. Type II pneumocytes produce dipalmitoylphosphatidylcholine surfactant to decrease surface tension and prevent atelectasis according to the Law of Laplace.",
        health: "Acute Respiratory Distress Syndrome (ARDS) causes diffuse alveolar damage, surfactant inactivation, and hyaline membrane formation. Emphysema involves elastase-driven destruction of alveolar septa, reducing diffusion capacity (DLCO)."
      },
      {
        overview: "Kantung alveolus adalah kelompok mikroskopis kecil berbentuk seperti tandan anggur di ujung saluran pernapasan. Di sinilah tempat pertukaran gas pernapasan berlangsung: oksigen masuk ke darah dan karbon dioksida dikeluarkan.",
        position: "Terletak di ujung terdalam bronkiolus respiratorius di kedua paru-paru, dengan sekitar 300 hingga 500 juta kantung pada paru-paru sehat.",
        mechanism: "Dindingnya sangat tipis sehingga molekul oksigen mudah menembus ke dalam kapiler darah di dekatnya sementara karbon dioksida keluar ke udara untuk dihembuskan.",
        health: "Pneumonia mengisi kantung kecil ini dengan cairan, sementara merokok merusak dinding halusnya (emfisema), membuat bernapas menjadi sulit dan mengurangi penyerapan oksigen."
      },
      {
        overview: "Kantung alveolus adalah unit fungsional terminal dari zona pernapasan, terdiri dari beberapa alveoli polihedral yang dihubungkan oleh pori-pori Kohn, menyediakan area permukaan 70–100 m².",
        position: "Tersebar secara difus di seluruh parenkim paru di sebelah distal duktus alveolaris terminal.",
        mechanism: "Sawar darah-udara (tebal 0,2–0,5 µm) terdiri dari pneumosit tipe I, membran basal yang menyatu, dan endotel kapiler. Pneumosit tipe II memproduksi surfaktan untuk menurunkan tegangan permukaan dan mencegah atelektasis.",
        health: "Acute Respiratory Distress Syndrome (ARDS) menyebabkan kerusakan alveolar difus, inaktivasi surfaktan, dan pembentukan membran hialin. Emfisema melibatkan perusakan septa alveolar yang dimediasi elastase."
      },
      [
        { question: "Which cells in the alveolar wall produce pulmonary surfactant to reduce surface tension?", options: ["Type II alveolar pneumocytes", "Type I alveolar pneumocytes", "Alveolar macrophages (dust cells)", "Goblet cells"], answerIndex: 0, explanation: "Type II pneumocytes (great alveolar cells) secrete surfactant to prevent alveolar collapse at low lung volumes." },
        { question: "The extremely thin blood-gas barrier in alveoli facilitates gas exchange primarily through:", options: ["Passive Fickian diffusion", "Active ATP-dependent transport", "Facilitated GLUT transport", "Endocytosis"], answerIndex: 0, explanation: "O2 and CO2 traverse the ultra-thin alveolar-capillary membrane via passive diffusion governed by Fick's law." },
        { question: "What is the primary phospholipid constituent of pulmonary surfactant?", options: ["Dipalmitoylphosphatidylcholine (DPPC)", "Sphingomyelin", "Phosphatidylserine", "Cardiolipin"], answerIndex: 0, explanation: "DPPC is the main amphipathic phospholipid in surfactant that drastically reduces surface tension at the air-water interface." }
      ],
      [
        { question: "Sel mana pada dinding alveolus yang memproduksi surfaktan paru untuk menurunkan tegangan permukaan?", options: ["Pneumosit alveolus tipe II", "Pneumosit alveolus tipe I", "Makrofag alveolus (sel debu)", "Sel goblet"], answerIndex: 0, explanation: "Pneumosit tipe II mensekresikan surfaktan untuk mencegah kolapsnya alveolus pada volume paru rendah." },
        { question: "Penghalang darah-gas yang sangat tipis di alveolus memfasilitasi pertukaran gas terutama melalui:", options: ["Difusi pasif hukum Fick", "Transpor aktif bergantung ATP", "Transpor terfasilitasi GLUT", "Endositosis"], answerIndex: 0, explanation: "O2 dan CO2 melintasi membran kapiler-alveolus yang sangat tipis melalui difusi pasif yang diatur oleh hukum Fick." },
        { question: "Apakah konstituen fosfolipid utama dari surfaktan paru?", options: ["Dipalmitoilfosfatidilkolin (DPPC)", "Sfingomielin", "Fosfatidilserin", "Kardiolipin"], answerIndex: 0, explanation: "DPPC adalah fosfolipid amfifatik utama dalam surfaktan yang secara drastis mengurangi tegangan permukaan." }
      ],
      ["left_lung", "right_lung", "primary_bronchi"]
    ),

    "Respiratory Diaphragm": lesson("resp", "lungs", { EN: "Respiratory Diaphragm", ID: "Diafragma Pernapasan" }, "🫁🛡️",
      {
        overview: "The diaphragm is the large dome-shaped muscle that separates your chest from your belly. It is your body's primary breathing engine, pulling air into your lungs every time it contracts.",
        position: "Spans across the bottom of the rib cage, forming the floor of the chest cavity and the roof of the abdominal cavity.",
        mechanism: "When you breathe in, the diaphragm contracts and flattens downward, creating a vacuum that sucks air into your lungs. When it relaxes, it rises and gently pushes air back out.",
        health: "Hiccups happen when the diaphragm spasms involuntarily. Deep diaphragmatic belly breathing calms the nervous system, lowers blood pressure, and improves oxygenation."
      },
      {
        overview: "The diaphragm is a musculotendinous dome-shaped partition between the thoracic and abdominal cavities, featuring peripheral muscular crura and a central aponeurotic tendon.",
        position: "Originates from the xiphoid process, lower six costal cartilages, and upper lumbar vertebrae (L1-L3), inserting into the central tendon.",
        mechanism: "Innervated exclusively by bilateral phrenic nerves (C3-C5). Contraction lowers the central tendon, increasing vertical thoracic volume and generating negative intrapleural pressure (-4 to -8 cm H2O) that drives tidal airflow. Three major apertures transmit the IVC (T8), esophagus (T10), and aorta (T12).",
        health: "Diaphragmatic paralysis from phrenic nerve injury causes paradoxical inward movement on inspiration (sniff test fluoroscopy). Congenital diaphragmatic hernia (Bochdalek) allows abdominal viscera into the chest, causing pulmonary hypoplasia."
      },
      {
        overview: "Diafragma adalah otot besar berbentuk kubah yang memisahkan rongga dada dari rongga perut. Otot ini merupakan mesin pernapasan utama tubuh yang menarik udara ke dalam paru-paru setiap kali berkontraksi.",
        position: "Membentang di bagian bawah sangkar tulang rusuk, membentuk dasar rongga dada dan atap rongga perut.",
        mechanism: "Saat Anda menarik napas, diafragma berkontraksi dan merata ke bawah, menciptakan ruang hampa yang menghirup udara ke dalam paru-paru. Saat berelaksasi, otot ini naik kembali dan mendorong udara keluar.",
        health: "Cegukan terjadi ketika diafragma mengalami kejang tanpa sengaja. Latihan pernapasan perut diafragma yang dalam menenangkan sistem saraf, menurunkan tekanan darah, dan meningkatkan kadar oksigen.",
      },
      {
        overview: "Diafragma adalah sekat muskulo-tendinea berbentuk kubah antara rongga toraks dan abdomen, memiliki krura muskular perifer dan tendon sentral aponeurotik.",
        position: "Berorigo dari prosesus xifoideus, 6 rawan kosta bawah, dan vertebra lumbalis atas (L1-L3), berinsersi ke tendon sentral.",
        mechanism: "Diinervasi secara eksklusif oleh saraf frenikus bilateral (C3-C5). Kontraksi menurunkan tendon sentral, meningkatkan volume toraks vertikal dan menghasilkan tekanan intrapleura negatif (-4 hingga -8 cm H2O). Tiga lubang utama mentransmisikan IVC (T8), esofagus (T10), dan aorta (T12).",
        health: "Paralisis diafragma akibat cedera saraf frenikus menyebabkan gerakan paradoksal ke dalam saat inspirasi (sniff test). Hernia diafragma kongenital (Bochdalek) memungkinkan organ perut masuk ke dada, menyebabkan hipoplasia paru."
      },
      [
        { question: "What happens to the thoracic cavity volume and intrathoracic pressure when the diaphragm contracts?", options: ["Thoracic volume increases, intrathoracic pressure becomes negative", "Thoracic volume decreases, intrathoracic pressure rises", "No pressure changes occur", "Intrathoracic pressure equals atmospheric pressure"], answerIndex: 0, explanation: "Diaphragmatic contraction flattens the dome, increasing thoracic volume and generating negative intrathoracic pressure that pulls air inward." },
        { question: "Which nerve provides complete motor innervation to the respiratory diaphragm?", options: ["Phrenic nerve (C3-C5)", "Vagus nerve (CN X)", "Intercostal nerves", "Thoracodorsal nerve"], answerIndex: 0, explanation: "Phrenic nerves arise from cervical roots C3-C5 to supply exclusive motor control to the diaphragm." },
        { question: "Which structure traverses the diaphragm through the aortic hiatus at vertebral level T12?", options: ["Descending aorta, thoracic duct, and azygos vein", "Inferior vena cava only", "Esophagus and vagal trunks", "Phrenic nerve"], answerIndex: 0, explanation: "The aortic hiatus (T12) transmits the descending aorta, thoracic duct, and azygos vein." }
      ],
      [
        { question: "Apa yang terjadi pada volume rongga dada dan tekanan intratoraks saat diafragma berkontraksi?", options: ["Volume toraks meningkat, tekanan intratoraks menjadi negatif", "Volume toraks menurun, tekanan intratoraks meningkat", "Tidak ada perubahan tekanan", "Tekanan intratoraks menyamai tekanan atmosfer"], answerIndex: 0, explanation: "Kontraksi diafragma meratakan kubah, meningkatkan volume toraks dan menghasilkan tekanan negatif yang menghirup udara." },
        { question: "Saraf manakah yang menyediakan inervasi motorik eksklusif ke diafragma pernapasan?", options: ["Saraf frenikus (C3-C5)", "Saraf vagus (CN X)", "Saraf interkostal", "Saraf torakodorsal"], answerIndex: 0, explanation: "Saraf frenikus berasal dari akar servikal C3-C5 untuk menyuplai kontrol motorik tunggal ke diafragma." },
        { question: "Struktur manakah yang melintasi diafragma melalui hiatus aorta pada tingkat vertebra T12?", options: ["Aorta desenden, duktus torasikus, dan vena azigos", "Vena kava inferior saja", "Esofagus dan trunkus vagus", "Saraf frenikus"], answerIndex: 0, explanation: "Hiatus aorta (T12) mentransmisikan aorta desenden, duktus torasikus, dan vena azigos." }
      ],
      ["left_lung", "cervical_spinal_cord"]
    ),

    // Digestive - Intestines & Esophagus
    "Small Intestine (Duodenum/Jejunum/Ileum)": lesson("digestive", "digestive_organs", { EN: "Small Intestine (Duodenum/Jejunum/Ileum)", ID: "Usus Halus (Duodenum/Jejunum/Ileum)" }, "🥣🌿",
      {
        overview: "The small intestine is a long, narrow winding tube where almost all nutrient digestion and absorption takes place, turning food into fuel for your cells.",
        position: "Coiled in the central and lower abdomen, extending from the stomach's exit to the start of the large intestine.",
        mechanism: "Pancreatic enzymes and bile break down carbohydrates, proteins, and fats. Millions of microscopic finger-like folds (villi) absorb amino acids, sugars, vitamins, and minerals into the bloodstream.",
        health: "Celiac disease damages intestinal villi when gluten is eaten, preventing nutrient absorption. Drinking water and eating fiber keeps digestion smooth."
      },
      {
        overview: "Spanning approximately 6 meters, the small intestine comprises the duodenum (25 cm), jejunum (2.5 m), and ileum (3.5 m), lined by simple columnar epithelium with brush border microvilli.",
        position: "Suspended from the posterior abdominal wall by the mesentery, framed peripherally by the colon.",
        mechanism: "Duodenal enteropeptidase activates trypsinogen into trypsin. Plicae circulares, villi, and microvilli amplify absorptive surface area over 600-fold. SGLT1, GLUT5, and peptide transporters absorb nutrients, while the terminal ileum reabsorbs conjugated bile salts and vitamin B12-intrinsic factor complexes.",
        health: "Crohn's disease causes transmural skip lesions and strictures frequently in the terminal ileum. Celiac sprue manifests with anti-tTG antibodies, intraepithelial lymphocytosis, and villous atrophy leading to malabsorption."
      },
      {
        overview: "Usus halus adalah saluran berliku yang panjang dan sempit tempat hampir semua pencernaan dan penyerapan nutrisi berlangsung, mengubah makanan menjadi bahan bakar bagi sel tubuh.",
        position: "Melingkar di perut bagian tengah dan bawah, membentang dari muara lambung hingga awal usus besar.",
        mechanism: "Enzim pankreas dan empedu memecah karbohidrat, protein, dan lemak. Jutaan lipatan mirip jari mikroskopis (vili) menyerap asam amino, gula, vitamin, dan mineral ke dalam aliran darah.",
        health: "Penyakit celiac merusak vili usus saat mengonsumsi gluten, menghambat penyerapan nutrisi. Minum air yang cukup dan makan serat menjaga pencernaan tetap lancar."
      },
      {
        overview: "Membentang sekitar 6 meter, usus halus terdiri dari duodenum (25 cm), jejunum (2,5 m), dan ileum (3,5 m), dilapisi epitel kolumnar selapis dengan mikrovili brush border.",
        position: "Tergantung dari dinding perut posterior oleh mesenterium, dikelilingi oleh kolon di tepi luarnya.",
        mechanism: "Enteropeptidase duodenum mengaktifkan tripsinogen menjadi tripsin. Plika sirkularis, vili, dan mikrovili melipatgandakan area penyerapan hingga lebih dari 600 kali lipat. Ileum terminal menyerap kembali garam empedu dan kompleks vitamin B12-faktor intrinsik.",
        health: "Penyakit Crohn menyebabkan peradangan transmural melompat-lompat (skip lesions) terutama di ileum terminal. Penyakit Celiac bermanifestasi dengan antibodi anti-tTG dan atrofi vili usus yang memicu malabsorpsi."
      },
      [
        { question: "Where is vitamin B12 actively absorbed in the small intestine?", options: ["Terminal ileum (bound to gastric intrinsic factor)", "Duodenal bulb", "Proximal jejunum", "Cecum"], answerIndex: 0, explanation: "Vitamin B12 complexed with intrinsic factor is specifically absorbed by cuboidal enterocytes in the terminal ileum." },
        { question: "What specialized mucosal projections massively amplify the absorption surface area of enterocytes?", options: ["Villi and microvilli (brush border)", "Peyer patches", "Haustra", "Rugae"], answerIndex: 0, explanation: "Intestinal villi and microvilli increase luminal absorptive surface area to over 30 square meters." },
        { question: "Enteropeptidase (enterokinase) on the duodenal brush border activates which critical digestive proenzyme?", options: ["Trypsinogen into trypsin", "Pepsinogen into pepsin", "Proelastase into elastase", "Procarboxypeptidase"], answerIndex: 0, explanation: "Enteropeptidase cleaves trypsinogen into active trypsin, which subsequently triggers the entire pancreatic zymogen cascade." }
      ],
      [
        { question: "Di manakah vitamin B12 diserap secara aktif di usus halus?", options: ["Ileum terminal (terikat pada faktor intrinsik lambung)", "Bulbus duodenum", "Jejunum proksimal", "Sekum"], answerIndex: 0, explanation: "Vitamin B12 yang berikatan dengan faktor intrinsik secara spesifik diserap di ileum terminal." },
        { question: "Tonjolan mukosa khusus apa yang memperluas area permukaan penyerapan enterosit secara masif?", options: ["Vili dan mikrovili (brush border)", "Bercak Peyer", "Haustra", "Rugae"], answerIndex: 0, explanation: "Vili dan mikrovili usus meningkatkan luas permukaan penyerapan luminal hingga lebih dari 30 meter persegi." },
        { question: "Enteropeptidase (enterokinase) pada brush border duodenum mengaktifkan proenzim pencernaan mana?", options: ["Tripsinogen menjadi tripsin", "Pepsinogen menjadi pepsin", "Proelastase menjadi elastase", "Prokarboksipeptidase"], answerIndex: 0, explanation: "Enteropeptidase memecah tripsinogen menjadi tripsin aktif, yang kemudian memicu kaskade zimogen pankreas." }
      ],
      ["stomach", "liver", "pancreas", "large_intestine"]
    ),

    "Large Intestine (Colon)": lesson("digestive", "digestive_organs", { EN: "Large Intestine (Colon)", ID: "Usus Besar (Kolon)" }, "🥣🟤",
      {
        overview: "The large intestine (colon) is the wider final section of your digestive tract. It absorbs leftover water and salts from food waste and houses trillions of friendly gut bacteria before removing waste.",
        position: "Frames the perimeter of the abdomen like a picture frame, starting on the lower right side and ending at the rectum.",
        mechanism: "Slow muscular waves squeeze indigestible fiber and fluids, reabsorbing water to form solid stool while gut bacteria produce essential vitamins.",
        health: "Eating high-fiber foods, drinking plenty of water, and staying active prevents constipation. Routine colonoscopy screenings help detect and prevent colon cancer."
      },
      {
        overview: "The large intestine spans roughly 1.5 m, comprising the cecum, appendix, ascending, transverse, descending, and sigmoid colon, and rectum.",
        position: "Arranged around the abdominal periphery from the right iliac fossa (ileocecal valve) to the pelvic floor.",
        mechanism: "Distinguished by taeniae coli (longitudinal smooth muscle bands), haustra, and epiploic appendages. Epithelial Na+ channels (ENaC) and aldosterone reabsorb 1.5 L of water and electrolytes daily; commensal microbiome ferments fiber into short-chain fatty acids (SCFAs) and synthesizes vitamin K and biotin.",
        health: "Ulcerative colitis causes continuous mucosal inflammation beginning in the rectum. Colorectal adenocarcinoma develops via the adenoma-carcinoma sequence (APC, KRAS, TP53 mutations); screened via colonoscopy starting at age 45."
      },
      {
        overview: "Usus besar (kolon) adalah bagian akhir yang lebih lebar dari saluran pencernaan Anda. Organ ini menyerap sisa air dan garam dari sisa makanan dan menampung triliunan bakteri usus baik sebelum membuang limbah.",
        position: "Membingkai tepi rongga perut seperti bingkai foto, mulai dari sisi kanan bawah hingga berakhir di rektum.",
        mechanism: "Gelombang kontraksi otot memeras serat dan cairan yang tidak tercerna, menyerap kembali air untuk membentuk tinja padat sementara bakteri usus mensintesis vitamin esensial.",
        health: "Mengonsumsi makanan tinggi serat, minum banyak air, dan aktif bergerak mencegah sembelit. Skrining kolonoskopi rutin membantu mendeteksi dan mencegah kanker usus besar."
      },
      {
        overview: "Usus besar membentang sekitar 1,5 m, terdiri dari sekum, apendiks, kolon asenden, transversum, desenden, sigmoid, dan rektum.",
        position: "Tersusun di sekeliling tepi perut dari fosa iliaka kanan (katup ileosekal) hingga dasar panggul.",
        mechanism: "Ditandai dengan taenia koli, haustra, dan apendiks epiploika. Saluran ENaC dan aldosteron menyerap 1,5 L air dan elektrolit setiap hari; mikrobioma komensal memfermentasi serat menjadi asam lemak rantai pendek (SCFA) dan mensintesis vitamin K.",
        health: "Kolitis ulseratif menyebabkan peradangan mukosa kontinu yang dimulai dari rektum. Adenokarsinoma kolorektal berkembang melalui mutasi APC, KRAS, TP53; diskrining melalui kolonoskopi mulai usia 45 tahun."
      },
      [
        { question: "What are the three longitudinal bands of smooth muscle along the outer colon wall called?", options: ["Taeniae coli", "Haustra", "Plicae circulares", "Myenteric plexuses"], answerIndex: 0, explanation: "Taeniae coli are three distinct bands of longitudinal smooth muscle that bunch the colon into haustra." },
        { question: "Which essential vitamin is synthesized in significant quantities by colon microflora?", options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"], answerIndex: 0, explanation: "Colonic commensal bacteria (e.g., E. coli, Bacteroides) synthesize vitamin K, crucial for hepatic clotting factor synthesis." },
        { question: "The watershed area at the splenic flexure vulnerable to ischemic colitis is known as:", options: ["Griffiths point", "Treves field", "McBurney point", "Calot triangle"], answerIndex: 0, explanation: "Griffiths point at the splenic flexure lies at the junction of SMA and IMA territories, making it vulnerable to ischemia." }
      ],
      [
        { question: "Apa sebutan untuk tiga pita otot polos longitudinal di sepanjang dinding luar kolon?", options: ["Taenia koli", "Haustra", "Plika sirkularis", "Pleksus mienterikus"], answerIndex: 0, explanation: "Taenia koli adalah tiga pita otot polos longitudinal yang mengerutkan kolon menjadi kantung-kantung haustra." },
        { question: "Vitamin penting manakah yang disintesis dalam jumlah signifikan oleh mikroflora usus besar?", options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"], answerIndex: 0, explanation: "Bakteri komensal kolon mensintesis vitamin K, yang sangat penting untuk sintesis faktor pembekuan darah di hati." },
        { question: "Area rawan iskemia (watershed) pada fleksura splenika yang rentan terhadap kolitis iskemik dikenal sebagai:", options: ["Titik Griffiths", "Area Treves", "Titik McBurney", "Segitiga Calot"], answerIndex: 0, explanation: "Titik Griffiths pada fleksura splenika terletak di perbatasan wilayah SMA dan IMA, membuatnya rentan terhadap iskemia." }
      ],
      ["small_intestine", "stomach"]
    ),

    "Esophagus": lesson("digestive", "digestive_organs", { EN: "Esophagus", ID: "Esofagus" }, "🥣🔴",
      {
        overview: "The esophagus is a muscular swallowing tube that carries food and drinks from your throat down into your stomach using coordinated muscular waves.",
        position: "Runs down behind the windpipe and heart, passing through the diaphragm muscle to connect to the top of the stomach.",
        mechanism: "When you swallow, muscular contractions (peristalsis) push food downward in just a few seconds, while a muscular valve at the bottom opens to let food into the stomach and snaps shut to block acid.",
        health: "Acid reflux (GERD) happens when stomach acid leaks upward past the lower sphincter, causing heartburn. Eating smaller meals and avoiding lying down right after eating protects the esophagus."
      },
      {
        overview: "The esophagus is a 25 cm fibromuscular conduit lined with non-keratinized stratified squamous epithelium, transitioning from striated muscle in the upper third to smooth muscle in the distal third.",
        position: "Descends in the posterior mediastinum behind the trachea and left atrium, traversing the esophageal hiatus of the diaphragm at T10.",
        mechanism: "Coordinated primary and secondary peristalsis mediated by the vagus nerve and myenteric (Auerbach) plexus propels the bolus. The high-pressure lower esophageal sphincter (LES) prevents gastroesophageal reflux of acidic chime (pH 1.5–2).",
        health: "Chronic GERD triggers intestinal metaplasia (Barrett's esophagus) predisposing to esophageal adenocarcinoma. Achalasia involves loss of myenteric ganglion cells in the LES, causing impaired relaxation and bird's-beak appearance on barium swallow."
      },
      {
        overview: "Esofagus adalah saluran menelan berotot yang membawa makanan dan minuman dari tenggorokan ke lambung menggunakan gelombang otot yang terkoordinasi.",
        position: "Berjalan turun di belakang batang tenggorokan dan jantung, melewati otot diafragma untuk terhubung ke bagian atas lambung.",
        mechanism: "Saat Anda menelan, kontraksi otot (peristaltik) mendorong makanan ke bawah dalam beberapa detik, sementara katup berotot di bagian bawah membuka untuk memasukkan makanan ke lambung lalu menutup rapat untuk menahan asam.",
        health: "Refluks asam (GERD) terjadi saat asam lambung naik melewati sfingter bawah, menyebabkan rasa panas di dada (heartburn). Makan dalam porsi lebih kecil dan tidak langsung berbaring setelah makan melindungi esofagus."
      },
      {
        overview: "Esofagus adalah saluran fibromuskular 25 cm yang dilapisi epitel skuamosa berlapis tanpa keratin, bertransisi dari otot lurik di sepertiga atas ke otot polos di sepertiga distal.",
        position: "Turun di mediastinum posterior di belakang trakea dan atrium kiri, melewati hiatus esofagus diafragma pada T10.",
        mechanism: "Peristaltik primer dan sekunder yang terkoordinasi dimediasi oleh saraf vagus dan pleksus mienterikus. Sfingter esofagus bawah (LES) mempertahankan tekanan istirahat untuk mencegah refluks asam lambung.",
        health: "GERD kronis memicu metaplasia intestinal (esofagus Barrett) yang berisiko menjadi adenokarsinoma esofagus. Akalasia melibatkan hilangnya sel ganglion mienterikus pada LES, menyebabkan gangguan relaksasi dan gambaran bird's-beak pada foto barium."
      },
      [
        { question: "What epithelial transition occurs at the gastroesophageal junction (Z-line)?", options: ["Stratified squamous to simple columnar epithelium", "Columnar to transitional epithelium", "Pseudostratified to cuboidal epithelium", "Keratinized stratified squamous to simple squamous"], answerIndex: 0, explanation: "The squamocolumnar junction (Z-line) marks the transition from esophageal stratified squamous to gastric simple columnar mucosa." },
        { question: "Which muscular sphincter prevents retrograde reflux of gastric acid into the esophagus?", options: ["Lower esophageal sphincter (LES)", "Pyloric sphincter", "Ileocecal valve", "Upper esophageal sphincter (cricopharyngeus)"], answerIndex: 0, explanation: "The lower esophageal sphincter (LES) maintains tonic resting pressure to prevent gastric acid reflux." },
        { question: "Metaplastic replacement of esophageal squamous cells by intestinal goblet cells due to chronic GERD is:", options: ["Barrett esophagus", "Achalasia", "Mallory-Weiss syndrome", "Zenker diverticulum"], answerIndex: 0, explanation: "Barrett esophagus is specialized intestinal metaplasia predisposing to esophageal adenocarcinoma." }
      ],
      [
        { question: "Transisi epitel apa yang terjadi pada persambungan gastroesofagus (garis Z)?", options: ["Epitel skuamosa berlapis menjadi epitel kolumnar selapis", "Kolumnar menjadi epitel transisional", "Pseudostratifikasi menjadi epitel kuboid", "Skuamosa berlapis terkeratinisasi menjadi skuamosa selapis"], answerIndex: 0, explanation: "Persambungan skuamokolumnar (garis Z) menandai peralihan dari mukosa esofagus skuamosa berlapis ke mukosa lambung kolumnar selapis." },
        { question: "Sfingter otot manakah yang mencegah refluks asam lambung ke dalam esofagus?", options: ["Sfingter esofagus bawah (LES)", "Sfingter pilorus", "Katup ileosekal", "Sfingter esofagus atas (krikofaringeus)"], answerIndex: 0, explanation: "Sfingter esofagus bawah (LES) mempertahankan tekanan tonik untuk mencegah refluks asam lambung." },
        { question: "Penggantian metaplastik sel skuamosa esofagus oleh sel goblet akibat GERD kronis disebut:", options: ["Esofagus Barrett", "Akalasia", "Sindrom Mallory-Weiss", "Divertikulum Zenker"], answerIndex: 0, explanation: "Esofagus Barrett adalah metaplasia intestinal khusus yang merupakan faktor risiko adenokarsinoma esofagus." }
      ],
      ["stomach", "trachea"]
    ),

    // Urinary - Right Kidney, Cortex/Medulla, Ureter, Bladder, Urethra
    "Right Kidney": lesson("urinary", "kidneys_bladder", { EN: "Right Kidney", ID: "Ginjal Kanan" }, "🫘🟡",
      {
        overview: "The right kidney is a bean-shaped filtration organ in your lower back. It filters waste and extra water from your blood 24 hours a day to make urine and keep your body's chemistry in balance.",
        position: "Located in the back of the abdomen behind the liver, sitting slightly lower than the left kidney because the liver rests above it.",
        mechanism: "Blood enters through the renal artery, passes through millions of tiny filtering units (nephrons) that clean out metabolic wastes and balance salts, and drains clean blood back into the body.",
        health: "Drinking enough water and keeping blood pressure and blood sugar under control protects kidney filtration units from chronic kidney disease."
      },
      {
        overview: "The right kidney is a retroperitoneal organ located between vertebral levels T12 and L3, slightly inferior to the left kidney due to hepatic displacement.",
        position: "Resting in the right paravertebral gutter on the quadratus lumborum, surrounded by perirenal fat and Gerota's renal fascia.",
        mechanism: "Receives 10-12% of cardiac output via the right renal artery. Glomerular capillary ultrafiltration (GFR ~120 mL/min) generates filtrate processed by tubular segments, while juxtaglomerular apparatus cells secrete renin in response to hypoperfusion.",
        health: "Renal cell carcinoma (clear cell subtype) originates from proximal convoluted tubule epithelium. Autosomal dominant polycystic kidney disease (PKD1/PKD2 mutations) leads to progressive cystic enlargement and renal failure."
      },
      {
        overview: "Ginjal kanan adalah organ penyaring berbentuk kacang di punggung bawah Anda. Organ ini menyaring limbah dan kelebihan air dari darah selama 24 jam sehari untuk menghasilkan urine dan menjaga keseimbangan kimiawi tubuh.",
        position: "Terletak di bagian belakang rongga perut di belakang hati, posisinya sedikit lebih rendah dari ginjal kiri karena tertekan oleh hati di atasnya.",
        mechanism: "Darah masuk melalui arteri renalis, melewati jutaan unit penyaring kecil (nefron) yang membersihkan sisa metabolisme dan menyeimbangkan kadar garam, lalu mengalirkan darah bersih kembali ke tubuh.",
        health: "Minum air yang cukup serta menjaga tekanan darah dan gula darah tetap terkendali melindungi unit penyaring ginjal dari penyakit ginjal kronis."
      },
      {
        overview: "Ginjal kanan adalah organ retroperitoneal yang terletak antara tingkat vertebra T12 dan L3, sedikit lebih inferior daripada ginjal kiri karena desakan lobus kanan hati.",
        position: "Berada di lekukan paravertebral kanan di atas otot kuadratus lumborum, dibungkus oleh lemak perirenal dan fasia Gerota.",
        mechanism: "Menerima 10-12% curah jantung melalui arteri renalis kanan. Ultrafiltrasi glomerulus (GFR ~120 mL/menit) menghasilkan filtrat yang diproses oleh tubulus, sementara sel jukstaglomerulus mensekresi renin.",
        health: "Karsinoma sel ginjal (tipe clear cell) berasal dari epitel tubulus kontortus proksimal. Penyakit ginjal polikistik dominan autosomal memicu pembesaran kistik progresif dan gagal ginjal."
      },
      [
        { question: "Why is the right kidney anatomically situated slightly lower than the left kidney?", options: ["Displacement by the overlying right lobe of the liver", "Larger right renal artery length", "Pressure from the ascending colon", "Shorter right ureter"], answerIndex: 0, explanation: "The substantial bulk of the right lobe of the liver displaces the right kidney slightly inferiorly compared to the left." },
        { question: "What is the primary functional filtering unit of the kidney?", options: ["Nephron", "Renal lobule", "Minor calyx", "Podocyte"], answerIndex: 0, explanation: "The nephron (comprising glomerulus, Bowman capsule, and tubular system) is the fundamental functional unit." },
        { question: "Which hormone released by juxtaglomerular cells in response to low renal perfusion activates the renin-angiotensin-aldosterone system?", options: ["Renin", "Erythropoietin", "Aldosterone", "Calcitriol"], answerIndex: 0, explanation: "Granular JG cells in the afferent arteriole secrete the enzyme renin to initiate the RAAS cascade for blood pressure regulation." }
      ],
      [
        { question: "Mengapa ginjal kanan secara anatomis terletak sedikit lebih rendah dibandingkan ginjal kiri?", options: ["Tertekan ke bawah oleh lobus kanan hati yang besar", "Panjang arteri renalis kanan yang lebih panjang", "Tekanan dari kolon asenden", "Ureter kanan yang lebih pendek"], answerIndex: 0, explanation: "Ukuran lobus kanan hati mendesak posisi ginjal kanan sedikit lebih rendah dibandingkan ginjal kiri." },
        { question: "Apakah unit penyaring fungsional utama pada ginjal?", options: ["Nefron", "Lobulus ginjal", "Kaliks minor", "Podosit"], answerIndex: 0, explanation: "Nefron (terdiri dari glomerulus, kapsula Bowman, dan sistem tubulus) adalah unit fungsional dasar." },
        { question: "Hormon mana yang dilepaskan oleh sel jukstaglomerulus untuk mengaktifkan sistem renin-angiotensin-aldosteron?", options: ["Renin", "Eritropoietin", "Aldosteron", "Kalsitriol"], answerIndex: 0, explanation: "Sel JG pada arteriol aferen mensekresi enzim renin untuk memulai kaskade RAAS guna mengatur tekanan darah." }
      ],
      ["left_kidney", "renal_cortex_medulla", "ureter"]
    ),

    "Renal Cortex & Medulla": lesson("urinary", "kidneys_bladder", { EN: "Renal Cortex & Medulla", ID: "Korteks & Medula Ginjal" }, "🫘🔬",
      {
        overview: "The kidney has two main layers: an outer cortex that does the fine blood filtering and an inner medulla with triangular pyramids that concentrate urine and guide it out toward the bladder.",
        position: "The cortex forms the outer smooth rim of the kidney, while the medulla forms the inner core containing 8 to 18 cone-shaped pyramids.",
        mechanism: "Tiny filtering capsules in the cortex filter fluid out of the blood, and deep loops in the medulla reabsorb water back into the body so urine becomes concentrated.",
        health: "Dehydration forces the medulla to work harder to concentrate urine, increasing the risk of kidney stones. Drinking plenty of water prevents stone formation."
      },
      {
        overview: "The renal parenchyma consists of an outer cortex (containing all glomeruli, proximal, and distal convoluted tubules) and an inner medulla containing renal pyramids and collecting ducts.",
        position: "The cortex extends inward between pyramids as renal columns of Bertin; pyramid apices (renal papillae) project into minor calyces.",
        mechanism: "The countercurrent multiplier system in the medullary loops of Henle creates a hyperosmotic interstitial gradient (up to 1200 mOsm/kg). In the presence of ADH (vasopressin), aquaporin-2 channels insert into collecting duct apical membranes to concentrate urine.",
        health: "Acute tubular necrosis (ATN) from renal ischemia or nephrotoxins causes muddy brown casts and sloughing of medullary tubular cells. Renal papillary necrosis occurs with chronic NSAID abuse, sickle cell disease, or severe pyelonephritis."
      },
      {
        overview: "Ginjal memiliki dua lapisan utama: korteks luar yang menyaring darah dan medula dalam dengan piramida berbentuk kerucut yang memekatkan urine dan menyalurkannya ke arah kandung kemih.",
        position: "Korteks membentuk tepi luar ginjal yang halus, sedangkan medula membentuk inti bagian dalam yang berisi 8 hingga 18 piramida berbentuk kerucut.",
        mechanism: "Kapsul penyaring kecil di korteks menyaring cairan dari darah, dan lengkung ansa Henle di medula menyerap kembali air ke dalam tubuh sehingga urine menjadi pekat.",
        health: "Dehidrasi memaksa medula bekerja lebih keras untuk memekatkan urine, meningkatkan risiko terbentuknya batu ginjal. Minum banyak air mencegah pembentukan kristal batu."
      },
      {
        overview: "Parenkim ginjal terdiri dari korteks luar (mengandung semua glomerulus, tubulus proksimal, dan tubulus distal) dan medula dalam yang berisi piramida ginjal dan duktus koligens.",
        position: "Korteks meluas ke dalam di antara piramida sebagai kolumna Bertin; apeks piramida (papila ginjal) bermuara ke dalam kaliks minor.",
        mechanism: "Sistem pengganda lawan arus di ansa Henle medula menciptakan gradien interstisial hiperosmotik (hingga 1200 mOsm/kg). Dengan adanya ADH (vasopresin), saluran akuaporin-2 disisipkan untuk menyerap air kembali.",
        health: "Nekrosis tubular akut (ATN) akibat iskemia atau nefrotoksin menyebabkan silinder granular coklat (muddy brown casts). Nekrosis papila ginjal dapat terjadi pada penggunaan NSAID kronis atau pielonefritis berat."
      },
      [
        { question: "Which critical nephron components are exclusively located within the renal cortex?", options: ["Glomeruli and Bowman capsules", "Descending thin limbs of Henle", "Papillary ducts of Bellini", "Vasa recta hairpins"], answerIndex: 0, explanation: "All glomeruli and Bowman capsules are located exclusively within the renal cortex." },
        { question: "What physiological mechanism creates the hyperosmotic medullary gradient enabling urine concentration?", options: ["Countercurrent multiplier system in the loop of Henle", "Active glomerular glucose secretion", "Hydrostatic capillary filtration", "Aldosterone synthesis in podocytes"], answerIndex: 0, explanation: "Countercurrent multiplication in the loops of Henle and countercurrent exchange in the vasa recta create the hypertonic medullary gradient." },
        { question: "Urine formed in the medullary collecting ducts exits the renal papilla directly into which structure?", options: ["Minor calyx", "Major calyx", "Renal pelvis", "Ureter"], answerIndex: 0, explanation: "The apex of each medullary pyramid (renal papilla) perforates into a cup-shaped minor calyx." }
      ],
      [
        { question: "Komponen nefron penting manakah yang secara eksklusif terletak di dalam korteks ginjal?", options: ["Glomerulus dan kapsula Bowman", "Ansa Henle segmen tipis desenden", "Duktus papilaris Bellini", "Lengkung vasa rekta"], answerIndex: 0, explanation: "Semua glomerulus dan kapsula Bowman terletak secara eksklusif di dalam korteks ginjal." },
        { question: "Mekanisme fisiologis apa yang menciptakan gradien medula hiperosmotik untuk memekatkan urine?", options: ["Sistem pengganda lawan arus di ansa Henle", "Sekresi glukosa glomerulus aktif", "Filtrasi kapiler hidrostatik", "Sintesis aldosteron dalam podosit"], answerIndex: 0, explanation: "Mekanisme lawan arus di ansa Henle dan vasa rekta menciptakan gradien osmotik hipertonik di medula ginjal." },
        { question: "Urine yang terbentuk di duktus koligens medula keluar dari papila ginjal langsung ke struktur mana?", options: ["Kaliks minor", "Kaliks mayor", "Pelvis ginjal", "Ureter"], answerIndex: 0, explanation: "Ujung setiap piramida medula (papila ginjal) bermuara langsung ke dalam kaliks minor." }
      ],
      ["right_kidney", "left_kidney", "ureter"]
    ),

    "Ureter": lesson("urinary", "kidneys_bladder", { EN: "Ureter", ID: "Ureter" }, "🫘〰️",
      {
        overview: "The ureters are two narrow muscular tubes that carry urine from each kidney down into the urinary bladder using gentle rhythmic squeezing waves.",
        position: "Runs downward from the center of each kidney through the lower back and pelvis into the back wall of the bladder.",
        mechanism: "Smooth muscle walls contract rhythmically (peristalsis) several times a minute to pump urine into the bladder, entering at an angle that acts like a flap to stop backflow.",
        health: "Kidney stones passing through the ureter cause intense sharp flank pain (renal colic). Staying well-hydrated helps prevent crystals from forming stones."
      },
      {
        overview: "The ureters are retroperitoneal muscular conduits (25–30 cm in length) lined with distensible transitional epithelium (urothelium).",
        position: "Descend along the anterior surface of the psoas major muscle, cross the pelvic brim at the bifurcation of common iliac vessels, and enter the bladder posterolaterally.",
        mechanism: "Pacemaker cells in renal calyces trigger smooth muscle peristaltic waves. The oblique intramural tunnel (1.5–2 cm) through the detrusor muscle functions as a physiological flap valve preventing vesicoureteral reflux (VUR).",
        health: "Ureteral calculi commonly lodge at 3 anatomical constrictions: ureteropelvic junction (UPJ), pelvic brim crossing, and ureterovesical junction (UVJ), causing severe colicky pain radiating to the groin with microscopic hematuria."
      },
      {
        overview: "Ureter adalah dua saluran berotot sempit yang membawa urine dari setiap ginjal turun ke kandung kemih menggunakan gelombang perasan berirama yang lembut.",
        position: "Membentang ke bawah dari pusat setiap ginjal melalui punggung bawah dan panggul ke dinding belakang kandung kemih.",
        mechanism: "Dinding otot polosnya berkontraksi secara ritmis (peristaltik) beberapa kali per menit untuk memompa urine ke dalam kandung kemih, masuk secara miring untuk mencegah aliran balik urine.",
        health: "Batu ginjal yang melewati ureter menyebabkan nyeri pinggang tajam yang parah (kolik ginjal). Menjaga hidrasi dengan baik membantu mencegah kristal membentuk batu."
      },
      {
        overview: "Ureter adalah saluran berotot retroperitoneal (panjang 25–30 cm) yang dilapisi oleh epitel transisional (urotelium) yang dapat meregang.",
        position: "Berjalan turun di sepanjang permukaan anterior otot psoas mayor, melintasi tepi panggul pada bifurkasio pembuluh darah iliaka komunis, dan masuk ke kandung kemih secara posterolateral.",
        mechanism: "Sel perintis di kaliks ginjal memicu gelombang peristaltik otot polos. Terowongan intramural miring (1,5–2 cm) melalui otot detrusor bertindak sebagai katup penutup fisiologis yang mencegah refluks vesikoureter (VUR).",
        health: "Batu ureter paling sering tersangkut di 3 penyempitan anatomis: UPJ, persilangan pinggir panggul, dan UVJ, menyebabkan nyeri kolik hebat yang menjalar ke selangkangan dengan hematuria mikroskopis."
      },
      [
        { question: "How does the anatomical entry of the ureter into the bladder prevent urine backflow?", options: ["An oblique intramural tunnel that compresses shut as the bladder fills", "A muscular bicuspid sphincter valve", "A cartilaginous flap valve", "Constant reverse pressure gradients"], answerIndex: 0, explanation: "The oblique path through the detrusor wall acts as a one-way flap valve compressed shut by intraluminal bladder pressure." },
        { question: "What type of specialized epithelium lines the mucosal surface of the ureter?", options: ["Transitional epithelium (urothelium)", "Simple columnar epithelium", "Stratified squamous epithelium", "Pseudostratified ciliated epithelium"], answerIndex: 0, explanation: "The urinary tract is lined by urothelium capable of stretching and resisting osmotic chemical damage." },
        { question: "Which three anatomical sites are notorious for kidney stone (calculus) impaction along the ureter?", options: ["Ureteropelvic junction, pelvic brim crossing, and ureterovesical junction", "Upper pole, middle cortex, and hilum", "Renal artery crossing, splenic margin, and cecum", "Pubic crest, ischial spine, and trigone"], answerIndex: 0, explanation: "The 3 anatomical narrowings are: 1) UPJ, 2) crossing of the iliac vessels at the pelvic brim, and 3) UVJ at the bladder wall." }
      ],
      [
        { question: "Bagaimana cara masuknya ureter ke dalam kandung kemih mencegah aliran balik urine?", options: ["Terowongan intramural miring yang tertekan menutup saat kandung kemih terisi", "Katup sfingter bikuspid berotot", "Katup penutup tulang rawan", "Gradien tekanan balik konstan"], answerIndex: 0, explanation: "Jalur miring melalui dinding detrusor bertindak sebagai katup satu arah yang tertekan menutup oleh tekanan intraluminal kandung kemih." },
        { question: "Tipe epitel khusus apakah yang melapisi permukaan mukosa ureter?", options: ["Epitel transisional (urotelium)", "Epitel kolumnar selapis", "Epitel skuamosa berlapis", "Epitel bertingkat bersilia"], answerIndex: 0, explanation: "Saluran kemih dilapisi oleh urotelium yang mampu meregang dan menahan kerusakan kimiawi urine." },
        { question: "Tiga lokasi anatomis manakah yang paling sering menjadi tempat tersangkutnya batu ginjal di sepanjang ureter?", options: ["Sambungan ureteropelvik, persilangan pinggir panggul, dan sambungan ureterovesikal", "Kutub atas, korteks tengah, dan hilus", "Persilangan arteri renalis, batas limpa, dan sekum", "Krista pubis, spina iskiadika, dan trigonum"], answerIndex: 0, explanation: "3 penyempitan fisiologis: 1) Sambungan ureteropelvik (UPJ), 2) Persilangan pembuluh darah iliaka di pinggir panggul, dan 3) Sambungan ureterovesikal (UVJ)." }
      ],
      ["right_kidney", "urinary_bladder"]
    ),

    "Urinary Bladder": lesson("urinary", "kidneys_bladder", { EN: "Urinary Bladder", ID: "Kandung Kemih" }, "🫘💧",
      {
        overview: "The urinary bladder is a stretchable muscular balloon in your lower pelvis that holds urine safely until you are ready to use the bathroom.",
        position: "Located in the pelvis behind the pubic bone; as it fills, it expands upward into the lower abdomen.",
        mechanism: "Its elastic walls stretch comfortably as urine fills. When full, nerve sensors send a signal to your brain; when you decide to pee, the muscular wall squeezes while the sphincter relaxes.",
        health: "Urinary tract infections (UTIs) cause burning and frequent urination. Drinking water and avoiding holding urine for too long keeps the bladder healthy."
      },
      {
        overview: "The urinary bladder is a hollow distensible pelvic organ composed of the detrusor smooth muscle lined with transitional urothelium and umbrella cells.",
        position: "Situated on the pelvic floor behind the pubic symphysis, anterior to the uterus in females and rectum in males.",
        mechanism: "Parasympathetic efferents from S2-S4 (pelvic splanchnic nerves) stimulate M3 muscarinic receptors causing detrusor contraction and micturition. Sympathetic T11-L2 fibers (hypogastric nerve) stimulate beta-3 receptors to relax the detrusor and alpha-1 receptors to contract the internal sphincter for continence.",
        health: "Urothelial (transitional cell) carcinoma is the most common bladder malignancy, strongly associated with cigarette smoking and industrial aromatic amine exposure; presents with painless gross hematuria."
      },
      {
        overview: "Kandung kemih adalah balon berotot yang dapat meregang di panggul bawah Anda yang menampung urine dengan aman sampai Anda siap untuk buang air kecil.",
        position: "Terletak di dalam rongga panggul di belakang tulang kemaluan; saat terisi, organ ini mengembang ke atas ke rongga perut bawah.",
        mechanism: "Dinding elastisnya meregang dengan nyaman saat terisi urine. Saat penuh, sensor saraf mengirimkan sinyal ke otak; saat berkemih, dinding otot memeras sementara sfingter membuka.",
        health: "Infeksi saluran kemih (ISK) menyebabkan rasa perih dan sering buang air kecil. Minum air yang cukup dan tidak menahan kencing terlalu lama menjaga kandung kemih tetap sehat."
      },
      {
        overview: "Kandung kemih adalah organ panggul berongga yang dapat mengembang, terdiri dari otot polos detrusor yang dilapisi urotelium transisional dan sel payung (umbrella cells).",
        position: "Terletak di dasar panggul di belakang simfisis pubis, anterior terhadap uterus pada wanita dan rektum pada pria.",
        mechanism: "Serabut parasimpatis dari S2-S4 menstimulasi reseptor muskarinik M3 untuk mengontraksikan detrusor saat berkemih. Serabut simpatis T11-L2 merelaksasikan detrusor dan mengontraksikan sfingter internal untuk menahan kencing.",
        health: "Karsinoma urotelial adalah keganasan kandung kemih tersering, sangat terkait dengan merokok dan paparan amina aromatik industri; bermanifestasi dengan hematuria tanpa nyeri (painless gross hematuria)."
      },
      [
        { question: "What is the triangular smooth anatomical region at the base of the bladder called?", options: ["Trigone", "Fundus", "Apex", "Dome"], answerIndex: 0, explanation: "The trigone is the smooth triangular region bounded by the two ureteric orifices and the internal urethral meatus." },
        { question: "Which autonomic nervous system pathway stimulates detrusor muscle contraction to induce urination?", options: ["Parasympathetic nervous system (S2-S4 pelvic splanchnic nerves)", "Sympathetic nervous system (T11-L2 hypogastric nerves)", "Somatic pudendal nerve", "Vagus nerve"], answerIndex: 0, explanation: "Parasympathetic pelvic splanchnic nerves release acetylcholine onto M3 muscarinic receptors to contract the detrusor." },
        { question: "What specialized superficial epithelial cells protect the bladder wall against hypertonic urine toxicity?", options: ["Umbrella (facet) cells with uroplakin plaques", "Ciliated columnar cells", "Keratinocytes", "Parietal cells"], answerIndex: 0, explanation: "Umbrella cells form tight junctions and uroplakin-coated asymmetric apical membranes that create an impermeable urine barrier." }
      ],
      [
        { question: "Apakah sebutan untuk daerah anatomis segitiga halus di dasar kandung kemih?", options: ["Trigonum", "Fundus", "Apeks", "Kubah (dome)"], answerIndex: 0, explanation: "Trigonum adalah area segitiga halus yang dibatasi oleh dua lubang ureter dan muara uretra interna." },
        { question: "Jalur sistem saraf otonom mana yang menstimulasi kontraksi otot detrusor untuk memicu buang air kecil?", options: ["Sistem saraf parasimpatis (saraf splangnikus panggul S2-S4)", "Sistem saraf simpatis (saraf hipogastrikus T11-L2)", "Saraf pudenda somatik", "Saraf vagus"], answerIndex: 0, explanation: "Saraf parasimpatis panggul melepaskan asetilkolin pada reseptor muskarinik M3 untuk mengontraksikan detrusor." },
        { question: "Sel epitel superfisial khusus apakah yang melindungi dinding kandung kemih dari toksisitas urine hipertonik?", options: ["Sel payung (umbrella cells) dengan plak uroplakin", "Sel kolumnar bersilia", "Keratinosit", "Sel parietal"], answerIndex: 0, explanation: "Sel payung membentuk taut ketat dan membran apikal berlapis uroplakin yang menciptakan penghalang kedap urine." }
      ],
      ["ureter", "urethra"]
    ),

    "Urethra": lesson("urinary", "kidneys_bladder", { EN: "Urethra", ID: "Uretra" }, "🫘🚪",
      {
        overview: "The urethra is the small tube that carries urine from the bladder out of the body during urination.",
        position: "Connects the bottom of the bladder to the external urinary opening.",
        mechanism: "A ring of voluntary muscle (the external sphincter) acts like a faucet handle, staying tightly closed until you consciously choose to release it.",
        health: "Because the female urethra is shorter and closer to the outside, bacteria can enter more easily. Good hygiene and staying hydrated protect against infections."
      },
      {
        overview: "The urethra exhibits marked sexual dimorphism: in females, it measures roughly 4 cm; in males, it spans ~20 cm divided into prostatic, membranous, bulbar, and penile (spongy) segments.",
        position: "Extends from the internal urethral meatus at the bladder trigone through the pelvic floor to the external meatus.",
        mechanism: "Voluntary urinary continence is maintained by the external urethral sphincter (striated muscle in the deep perineal pouch) innervated somatically by the pudendal nerve (S2-S4).",
        health: "Benign prostatic hyperplasia (BPH) in men compresses the prostatic urethra, causing hesitancy, weak stream, and nocturia. Urethral strictures from trauma or infection cause obstructive voiding symptoms requiring dilation or urethroplasty."
      },
      {
        overview: "Uretra adalah saluran kecil yang membawa urine dari kandung kemih keluar dari tubuh saat Anda buang air kecil.",
        position: "Menghubungkan bagian bawah kandung kemih ke muara luar saluran kemih.",
        mechanism: "Cincin otot sadar (sfingter eksternal) bertindak seperti keran air, tetap tertutup rapat sampai Anda secara sadar memilih untuk melepaskannya.",
        health: "Karena uretra wanita lebih pendek dan dekat dengan bagian luar, bakteri lebih mudah masuk. Menjaga kebersihan diri dan cukup minum air melindungi dari infeksi saluran kemih."
      },
      {
        overview: "Uretra menunjukkan perbedaan anatomi pria dan wanita: pada wanita panjangnya sekitar 4 cm; pada pria sekitar 20 cm yang terbagi menjadi bagian prostatika, membranosa, bulbar, dan spongiosa.",
        position: "Membentang dari meatus uretra interna di trigonum kandung kemih melalui dasar panggul ke meatus eksterna.",
        mechanism: "Kontinensia urine sadar dipertahankan oleh sfingter uretra eksternal (otot lurik di kantung perineum dalam) yang diinervasi secara somatik oleh saraf pudenda (S2-S4).",
        health: "Hiperplasia prostat jinak (BPH) pada pria menekan uretra prostatika, memicu pancaran urine lemah dan nokturia. Striktur uretra akibat trauma atau infeksi menyebabkan gejala sumbatan berkemih."
      },
      [
        { question: "Which nerve provides somatic voluntary motor control over the external urethral sphincter?", options: ["Pudendal nerve (S2-S4)", "Pelvic splanchnic nerve", "Hypogastric nerve", "Femoral nerve"], answerIndex: 0, explanation: "The pudendal nerve innervates the striated muscle of the external urethral sphincter for voluntary continence." },
        { question: "Why are females anatomically much more susceptible to ascending urinary tract infections (UTIs)?", options: ["Shorter urethra length (approx. 4 cm) closer to perianal flora", "Absence of urothelium", "Lack of internal sphincter", "Higher urine pH"], answerIndex: 0, explanation: "The shorter female urethra allows bacteria from the perineum easier access to ascend into the bladder." },
        { question: "In males, which urethral segment is completely surrounded by the prostate gland?", options: ["Prostatic urethra", "Membranous urethra", "Spongy (penile) urethra", "Navicular fossa"], answerIndex: 0, explanation: "The prostatic urethra traverses the prostate gland where it receives ejaculatory ducts and prostatic secretions." }
      ],
      [
        { question: "Saraf manakah yang menyediakan kontrol motorik sadar somatik atas sfingter uretra eksternal?", options: ["Saraf pudenda (S2-S4)", "Saraf splangnikus panggul", "Saraf hipogastrikus", "Saraf femoralis"], answerIndex: 0, explanation: "Saraf pudenda menginervasi otot lurik sfingter uretra eksternal untuk menahan kencing secara sadar." },
        { question: "Mengapa wanita secara anatomis jauh lebih rentan terhadap infeksi saluran kemih (ISK) asenden?", options: ["Panjang uretra yang lebih pendek (sekitar 4 cm) dan dekat dengan flora perianal", "Ketiadaan urotelium", "Tidak adanya sfingter internal", "pH urine yang lebih tinggi"], answerIndex: 0, explanation: "Uretra wanita yang pendek memudahkan bakteri dari perineum masuk dan naik ke kandung kemih." },
        { question: "Pada pria, segmen uretra manakah yang dikelilingi seluruhnya oleh kelenjar prostat?", options: ["Uretra prostatika", "Uretra membranosa", "Uretra spongiosa (penis)", "Fossa navikularis"], answerIndex: 0, explanation: "Uretra prostatika melintasi kelenjar prostat tempat bermuaranya duktus ejakulatorius." }
      ],
      ["urinary_bladder"]
    ),

    // Skeletal - Mandible, Spine, Ribs, Limbs, Girdles
    "Mandible": lesson("skeletal", "skeleton", { EN: "Mandible", ID: "Mandibula (Rahang Bawah)" }, "💀🗣️",
      {
        overview: "The mandible is the strongest and largest bone in your face. It forms your lower jaw, holds your bottom teeth, and moves smoothly to let you chew, bite, talk, and yawn.",
        position: "Forms the lower jawline at the base of the face, hinging at both sides just in front of your ears.",
        mechanism: "Connects to the skull at the temporomandibular joint (TMJ), where powerful chewing muscles (like the masseter and temporalis) pull it up, down, and side to side.",
        health: "Teeth grinding (bruxism) or jaw clenching can strain the TMJ joints, causing clicking, jaw pain, and tension headaches. Mouthguards protect teeth and joints at night."
      },
      {
        overview: "The mandible is the only mobile bone of the facial skeleton, comprising a curved horizontal body and two vertical rami.",
        position: "Forms the inferior facial framework, articulating superiorly with the mandibular fossae of temporal bones at the bicondylar temporomandibular joints (TMJs).",
        mechanism: "Each ramus terminates in an anterior coronoid process (temporalis insertion) and posterior condylar process (articular fibrocartilage disc). Houses the 16 mandibular teeth within alveolar sockets. Transmits the inferior alveolar neurovascular bundle via the mandibular foramen through the mandibular canal to the mental foramen.",
        health: "TMJ dysfunction manifests with articular disc displacement, joint clicking, and masticatory muscle spasm. Mandibular angle or parasymphyseal fractures frequently compromise inferior alveolar nerve sensation to the lower lip and chin."
      },
      {
        overview: "Mandibula adalah tulang terkuat dan terbesar di wajah Anda. Tulang ini membentuk rahang bawah, menopang deretan gigi bawah, dan bergerak bebas agar Anda dapat mengunyah, menggigit, berbicara, dan menguap.",
        position: "Membentuk garis rahang bawah di dasar wajah, bertumpu pada kedua sisi tepat di depan telinga Anda.",
        mechanism: "Terhubung ke tengkorak pada sendi temporomandibular (TMJ), tempat otot pengunyah yang kuat (seperti maseter dan temporalis) menariknya ke atas, bawah, dan samping.",
        health: "Kebiasaan menggertakkan gigi (bruxism) dapat membebani sendi TMJ, menimbulkan bunyi klik, nyeri rahang, dan sakit kepala tegang. Pelindung gigi (mouthguard) melindungi sendi di malam hari."
      },
      {
        overview: "Mandibula adalah satu-satunya tulang yang dapat bergerak pada kerangka wajah, terdiri dari korpus horizontal melengkung dan dua rami vertikal.",
        position: "Membentuk kerangka wajah inferior, berartikulasi di superior dengan fossa mandibularis tulang temporal pada sendi temporomandibular (TMJ).",
        mechanism: "Setiap ramus berakhir pada prosesus koronoid anterior (insersi temporalis) dan prosesus kondilar posterior (diskus artikular). Menampung 16 gigi mandibula dalam soket alveolar. Mentransmisikan berkas neurovaskular alveolar inferior melalui kanalis mandibula.",
        health: "Disfungsi TMJ bermanifestasi sebagai pergeseran diskus artikular, bunyi klik sendi, dan spasme otot pengunyah. Fraktur angulus mandibula sering kali mengganggu sensasi saraf alveolar inferior pada bibir bawah dan dagu."
      },
      [
        { question: "What type of synovial joint is the temporomandibular joint (TMJ)?", options: ["Bicondylar modified hinge joint with a fibrocartilaginous disc", "Ball and socket joint", "Pivot joint", "Syndesmosis"], answerIndex: 0, explanation: "The TMJ is a modified hinge synovial joint containing a specialized articular disc allowing hinge and gliding motions." },
        { question: "Which cranial nerve branch provides sensory innervation to the lower teeth via the mandibular canal?", options: ["Inferior alveolar nerve (CN V3)", "Maxillary nerve (CN V2)", "Facial nerve (CN VII)", "Hypoglossal nerve (CN XII)"], answerIndex: 0, explanation: "The inferior alveolar nerve, a branch of the mandibular division of the trigeminal nerve (V3), enters the mandibular foramen to innervate mandibular dentition." },
        { question: "Which powerful muscle of mastication inserts broadly onto the coronoid process of the mandible?", options: ["Temporalis muscle", "Masseter muscle", "Lateral pterygoid muscle", "Buccinator"], answerIndex: 0, explanation: "The fan-shaped temporalis muscle inserts into the coronoid process and anterior border of the mandibular ramus." }
      ],
      [
        { question: "Jenis sendi sinovial apakah sendi temporomandibular (TMJ)?", options: ["Sendi engsel termodifikasi bikondilar dengan diskus fibrokartilago", "Sendi peluru (ball and socket)", "Sendi putar", "Sindesmosis"], answerIndex: 0, explanation: "TMJ adalah sendi engsel modifikasi yang berisi diskus artikular khusus yang memungkinkan gerakan engsel dan meluncur." },
        { question: "Cabang saraf kranial mana yang memberikan inervasi sensorik ke gigi bawah melalui saluran mandibula?", options: ["Saraf alveolar inferior (CN V3)", "Saraf maksilaris (CN V2)", "Saraf fasialis (CN VII)", "Saraf hipoglosus (CN XII)"], answerIndex: 0, explanation: "Saraf alveolar inferior, cabang dari divisi mandibula saraf trigeminus (V3), menginervasi gigi rahang bawah." },
        { question: "Otot pengunyah kuat manakah yang berinsersi secara luas pada prosesus koronoid mandibula?", options: ["Otot temporalis", "Otot maseter", "Otot pterigoid lateral", "Buksinator"], answerIndex: 0, explanation: "Otot temporalis yang berbentuk kipas berinsersi pada prosesus koronoid dan tepi anterior ramus mandibula." }
      ],
      ["cranium"]
    ),

    "Cervical Vertebrae (C1-C7)": lesson("skeletal", "skeleton", { EN: "Cervical Vertebrae (C1-C7)", ID: "Vertebra Servikal (C1-C7)" }, "💀🧣",
      {
        overview: "The cervical spine consists of the 7 stacked neck bones that hold up your heavy head, allow you to nod and turn in all directions, and guard your delicate spinal cord.",
        position: "Extends from the base of the skull down to the top of the shoulders and upper chest.",
        mechanism: "The top bone (Atlas, C1) allows nodding 'yes', while the second bone (Axis, C2) acts as a pivot pin for shaking your head 'no'. Special holes on each side carry arteries supplying the back of the brain.",
        health: "Looking down at phones for hours ('text neck') strains cervical muscles and joints. Good posture and ergonomic screen heights prevent chronic neck pain."
      },
      {
        overview: "The cervical vertebral column comprises 7 vertebrae (C1-C7) exhibiting lordotic curvature and specialized foramina transversaria in their transverse processes transmitting the vertebral arteries.",
        position: "Occupies the neck region between the occipital condyles and the first thoracic vertebra (T1).",
        mechanism: "C1 (atlas) lacks a vertebral body, articulating with occipital condyles (atlanto-occipital joint: flexion/extension 'nodding'). C2 (axis) bears the dens (odontoid process) secured by the transverse ligament (atlantoaxial joint: ~50% of cervical axial rotation). C3-C6 feature bifid spinous processes and uncinate processes (uncovertebral joints of Luschka); C7 features a long non-bifid spine (vertebra prominens).",
        health: "Whiplash hyperextension/hyperflexion injures the anterior longitudinal ligament and facet capsules. Cervical radiculopathy from disc herniation or uncovertebral osteophytosis causes radiating upper limb paresthesias."
      },
      {
        overview: "Tulang belakang leher (servikal) terdiri dari 7 ruas tulang leher yang menopang kepala yang berat, memungkinkan Anda mengangguk dan menoleh ke segala arah, serta melindungi sumsum tulang belakang.",
        position: "Membentang dari dasar tengkorak turun ke bagian atas bahu dan dada atas.",
        mechanism: "Ruas teratas (Atlas, C1) memungkinkan gerakan mengangguk 'ya', sedangkan ruas kedua (Aksis, C2) bertindak sebagai pasak putar untuk gerakan menggeleng 'tidak'. Lubang di kedua sisi mengalirkan arteri vertebralis ke otak.",
        health: "Kebiasaan menunduk menatap ponsel berjam-jam ('text neck') membebani otot dan sendi leher. Postur tubuh yang baik dan posisi layar sejajar mata mencegah nyeri leher kronis."
      },
      {
        overview: "Kolom vertebra servikal terdiri dari 7 ruas (C1-C7) dengan kurvatura lordosis dan foramina transversaria khusus yang dilalui arteri vertebralis.",
        position: "Menempati daerah leher antara kondilus oksipital dan vertebra torakal pertama (T1).",
        mechanism: "C1 (atlas) tidak memiliki korpus, berartikulasi dengan oksipital (sendi atlanto-oksipital: fleksi/ekstensi). C2 (aksis) memiliki dens yang diikat oleh ligamen transversum (sendi atlantoaksial: ~50% rotasi leher). C3-C6 memiliki prosesus spinosus bifida; C7 memiliki tonjolan panjang (vertebra prominens).",
        health: "Cedera lecutan (whiplash) merusak ligamen longitudinal anterior. Radikulopati servikal akibat herniasi diskus atau osteofit menyebabkan nyeri dan kesemutan menjalar ke lengan."
      },
      [
        { question: "What unique anatomical feature distinguishes cervical vertebrae from thoracic and lumbar vertebrae?", options: ["Transverse foramina (foramina transversaria) transmitting vertebral arteries", "Costal facets for rib heads", "Mammillary processes", "Heart-shaped bodies"], answerIndex: 0, explanation: "Transverse foramina in cervical transverse processes transmit the vertebral arteries and veins (C1-C6)." },
        { question: "Which joint provides the primary pivot for rotational head movement ('shaking head no')?", options: ["Atlantoaxial joint (between C1 and C2 dens)", "Atlanto-occipital joint", "C7-T1 junction", "Temporomandibular joint"], answerIndex: 0, explanation: "The median atlantoaxial joint allows C1 to rotate around the vertical odontoid peg (dens) of C2." },
        { question: "Which prominent cervical vertebra is easily palpable at the base of the posterior neck?", options: ["C7 (vertebra prominens)", "C1 (atlas)", "C3", "C5"], answerIndex: 0, explanation: "C7 has a long, non-bifid spinous process known clinically as the vertebra prominens." }
      ],
      [
        { question: "Ciri anatomi unik apa yang membedakan vertebra servikal dari vertebra torakal dan lumbal?", options: ["Foramina transversaria yang mentransmisikan arteri vertebralis", "Faset kosta untuk kepala iga", "Prosesus mamilaris", "Korpus berbentuk hati"], answerIndex: 0, explanation: "Foramina transversaria pada prosesus transversus servikal mentransmisikan arteri dan vena vertebralis (C1-C6)." },
        { question: "Sendi manakah yang menyediakan poros utama untuk gerakan rotasi kepala ('menggelengkan kepala')?", options: ["Sendi atlantoaksial (antara C1 dan dens C2)", "Sendi atlanto-oksipital", "Persambungan C7-T1", "Sendi temporomandibular"], answerIndex: 0, explanation: "Sendi atlantoaksial median memungkinkan C1 berputar di sekitar poros odontoid (dens) dari C2." },
        { question: "Vertebra servikal manakah yang prosesus spinosusnya paling menonjol dan mudah diraba di pangkal leher belakang?", options: ["C7 (vertebra prominens)", "C1 (atlas)", "C3", "C5"], answerIndex: 0, explanation: "C7 memiliki prosesus spinosus panjang yang dikenal secara klinis sebagai vertebra prominens." }
      ],
      ["thoracic_spine_ribs", "cranium", "cervical_spinal_cord"]
    ),

    "Thoracic Spine & Ribs": lesson("skeletal", "skeleton", { EN: "Thoracic Spine & Ribs", ID: "Tulang Belakang Torakal & Tulang Rusuk" }, "💀🛡️",
      {
        overview: "The thoracic spine and 12 pairs of ribs form an elastic, protective rib cage around your chest. It shields your heart and lungs from injury while expanding smoothly with every breath.",
        position: "Forms the entire upper and mid-back torso, connecting at the front to the breastbone (sternum).",
        mechanism: "Ribs curve around the chest like bucket handles, lifting upward and outward during inhalation to create more chest room, then gently dropping back down during exhalation.",
        health: "Rib fractures from trauma are painful and can restrict deep breathing. Sitting upright with good spinal alignment prevents mid-back stiffness and maintains lung capacity."
      },
      {
        overview: "The thoracic skeleton consists of 12 thoracic vertebrae (T1-T12) with kyphotic curvature articulating with 12 pairs of ribs, costal cartilages, and the sternum to form the osseocartilaginous thoracic cage.",
        position: "Spans the thoracic cavity from the superior thoracic aperture (T1, 1st ribs, manubrium) to the inferior aperture bordered by the diaphragm.",
        mechanism: "Ribs 1-7 are vertebrosternal (true ribs); 8-10 are vertebrochondral (false ribs); 11-12 are floating ribs. Costovertebral and costotransverse synovial joints allow 'bucket-handle' (transverse diameter increase) and 'pump-handle' (anteroposterior diameter increase) motions during ventilation. Intercostal spaces carry the neurovascular bundle (Vein, Artery, Nerve: VAN) within the inferior costal groove.",
        health: "Thoracic outlet syndrome compresses the brachial plexus or subclavian vessels at the superior thoracic aperture. Flail chest occurs when consecutive segmented rib fractures cause paradoxical chest wall motion during respiration."
      },
      {
        overview: "Tulang belakang torakal dan 12 pasang tulang rusuk membentuk sangkar dada pelindung yang elastis. Sangkar ini melindungi jantung dan paru-paru dari benturan sekaligus mengembang dengan mulus setiap kali Anda bernapas.",
        position: "Membentuk seluruh punggung atas dan tengah, terhubung di bagian depan ke tulang dada (sternum).",
        mechanism: "Tulang rusuk melengkung mengelilingi dada seperti pegangan ember, terangkat ke atas dan luar saat menarik napas untuk memberi ruang bagi paru-paru, lalu turun kembali saat menghembuskan napas.",
        health: "Patah tulang rusuk akibat benturan terasa sangat nyeri dan dapat membatasi napas dalam. Duduk tegak dengan postur tulang belakang yang baik mencegah kekakuan punggung dan menjaga kapasitas paru-paru.",
      },
      {
        overview: "Kerangka toraks terdiri dari 12 vertebra torakal (T1-T12) dengan kurvatura kifosis yang berartikulasi dengan 12 pasang kosta, kartilago kosta, dan sternum.",
        position: "Membentang di rongga dada dari aperturna torasika superior hingga apertura inferior yang dibatasi oleh diafragma.",
        mechanism: "Rusuk 1-7 adalah rusuk sejati; 8-10 adalah rusuk palsu; 11-12 adalah rusuk melayang. Sendi kostovertebral dan kostotransversus memungkinkan gerakan 'bucket-handle' dan 'pump-handle' saat bernapas. Ruang interkostal membawa berkas neurovaskular (Vena, Arteri, Saraf - VAN) di sulkus kosta inferior.",
        health: "Sindrom outlet toraks menekan pleksus brakialis atau pembuluh subklavia pada apertura superior. Flail chest terjadi akibat patah rusuk berurutan yang memicu gerakan dinding dada paradoksal saat bernapas."
      },
      [
        { question: "What is the superior-to-inferior anatomical arrangement of the intercostal bundle in the costal groove?", options: ["VAN (Vein, Artery, Nerve)", "NAV (Nerve, Artery, Vein)", "AVN (Artery, Vein, Nerve)", "NVA (Nerve, Vein, Artery)"], answerIndex: 0, explanation: "From superior to inferior, the neurovascular bundle is arranged as Vein, Artery, and Nerve protected under the costal groove." },
        { question: "Which rib pairs are classified as 'floating ribs' because they have no anterior cartilaginous sternal attachment?", options: ["Ribs 11 and 12", "Ribs 1 and 2", "Ribs 8, 9, and 10", "Ribs 7 and 8"], answerIndex: 0, explanation: "Ribs 11 and 12 terminate freely in posterior abdominal musculature without connecting to costal cartilage or the sternum." },
        { question: "What joint connects the costal cartilage of ribs to the thoracic vertebral transverse processes?", options: ["Costotransverse joint", "Costovertebral joint proper", "Sternocostal joint", "Interchondral joint"], answerIndex: 0, explanation: "The costotransverse joint connects the rib tubercle to the transverse process of its corresponding thoracic vertebra." }
      ],
      [
        { question: "Bagaimana susunan anatomis dari superior ke inferior dari berkas neurovaskular di sulkus kosta?", options: ["VAN (Vena, Arteri, Saraf)", "NAV (Saraf, Arteri, Vena)", "AVN (Arteri, Vena, Saraf)", "NVA (Saraf, Vena, Arteri)"], answerIndex: 0, explanation: "Dari atas ke bawah, berkas neurovaskular tersusun sebagai Vena, Arteri, dan Saraf (VAN) di bawah lekukan kosta." },
        { question: "Pasangan tulang rusuk mana yang diklasifikasikan sebagai 'rusuk melayang' karena tidak memiliki perlekatan kartilago anterior?", options: ["Rusuk 11 dan 12", "Rusuk 1 dan 2", "Rusuk 8, 9, dan 10", "Rusuk 7 dan 8"], answerIndex: 0, explanation: "Rusuk 11 dan 12 berakhir bebas di otot dinding perut posterior tanpa menempel pada sternum." },
        { question: "Sendi apa yang menghubungkan tuberkulum tulang rusuk ke prosesus transversus vertebra torakal?", options: ["Sendi kostotransversus", "Sendi kostovertebral", "Sendi sternokostal", "Sendi interkondral"], answerIndex: 0, explanation: "Sendi kostotransversus menghubungkan tuberkulum iga dengan prosesus transversus dari vertebra torakal yang bersesuaian." }
      ],
      ["cervical_vertebrae", "lumbar_spine"]
    ),

    "Lumbar Spine": lesson("skeletal", "skeleton", { EN: "Lumbar Spine", ID: "Tulang Belakang Lumbal" }, "💀🪵",
      {
        overview: "The lumbar spine consists of the 5 largest, thickest vertebrae in your lower back. It carries the weight of your entire upper body and gives you power for bending, twisting, and lifting.",
        position: "Forms the inward curve of the lower back between the rib cage and the pelvis.",
        mechanism: "Thick shock-absorbing cartilage discs between the vertebrae cushion heavy loads, while strong ligaments and muscles keep the column sturdy and balanced.",
        health: "Lifting heavy objects with a bent back can herniate a disc (pinched nerve/sciatica). Lifting with your legs and strengthening your core muscles protects the lower back."
      },
      {
        overview: "The lumbar spine consists of 5 massive vertebrae (L1-L5) with lordotic curvature, characterized by broad kidney-shaped vertebral bodies, stout pedicles, rectangular spinous processes, and mamillary processes.",
        position: "Situated in the lower back between T12 and the sacral promontory (L5/S1 lumbosacral angle).",
        mechanism: "Intervertebral fibrocartilaginous discs (outer annulus fibrosus and inner gelatinous nucleus pulposus) bear high compressive axial loads. The spinal cord terminates as the conus medullaris at L1/L2, continuing as the cauda equina nerve roots within the thecal sac. Lumbar puncture is safely performed at L3/L4 or L4/L5.",
        health: "Posterolateral lumbar disc herniation (most common at L4-L5 and L5-S1) impinges exiting or traversing spinal nerve roots, producing sciatica with radiating dermatomal pain and motor weakness. Spondylolisthesis involves forward slippage of a vertebra due to pars interarticularis defect (spondylolysis)."
      },
      {
        overview: "Tulang belakang lumbal terdiri dari 5 ruas tulang terbesar dan tertebal di punggung bawah Anda. Bagian ini menopang beban seluruh tubuh bagian atas dan memberi Anda kekuatan untuk membungkuk, memutar, dan mengangkat beban.",
        position: "Membentuk lengkungan alami punggung bawah antara sangkar tulang rusuk dan panggul.",
        mechanism: "Bantalan tulang rawan tebal (diskus) di antara ruas tulang menyerap guncangan beban berat, sementara ligamen dan otot yang kuat menjaga tulang belakang tetap kokoh dan seimbang.",
        health: "Mengangkat beban berat dengan posisi punggung membungkuk dapat memicu saraf terjepit (hernia nukleus pulposus / skiatika). Mengangkat beban menggunakan kekuatan kaki dan melatih otot inti melindungi punggung bawah."
      },
      {
        overview: "Tulang belakang lumbal terdiri dari 5 vertebra masif (L1-L5) dengan kurvatura lordosis, ditandai dengan korpus tebal berbentuk ginjal, pedikel kokoh, dan prosesus spinosus persegi.",
        position: "Terletak di punggung bawah antara T12 dan promontorium sakrum (sudut lumbosakral L5/S1).",
        mechanism: "Diskus intervertebralis (anulus fibrosus luar dan nukleus pulposus gelatinosa dalam) menahan beban kompresi aksial yang tinggi. Medula spinalis berakhir sebagai konus medularis pada L1/L2, berlanjut sebagai berkas kauda ekuina. Pungsi lumbal dilakukan dengan aman pada L3/L4 atau L4/L5.",
        health: "Herniasi diskus lumbal posterolateral (paling sering L4-L5 dan L5-S1) menjepit akar saraf spinalis, memicu skiatika (sciatica) dengan nyeri menjalar ke kaki. Spondilolistesis melibatkan pergeseran ruas tulang ke depan akibat defek pars interartikularis."
      },
      [
        { question: "What two components compose the intervertebral disc?", options: ["Annulus fibrosus (outer fibrocartilage) and nucleus pulposus (inner gel)", "Articular capsule and synovial membrane", "Cortical shell and trabecular marrow", "Lamina and pedicle"], answerIndex: 0, explanation: "The intervertebral disc is composed of a tough concentric annulus fibrosus enclosing the gelatinous, water-rich nucleus pulposus." },
        { question: "Why is posterolateral disc herniation most frequent at L4-L5 and L5-S1 levels?", options: ["Narrowing of posterior longitudinal ligament and high biomechanical axial loading", "Absence of anterior ligament", "Larger spinal canal volume", "Thinner vertebral bone cortex"], answerIndex: 0, explanation: "The posterior longitudinal ligament tapers in the lower lumbar region, creating a structural weakness exposed to maximum gravitational load." },
        { question: "Lumbar puncture (spinal tap) is safely performed below which vertebral landmark in adults?", options: ["L3 / L4 or L4 / L5 interspace (below conus medullaris)", "T12 / L1 interspace", "C7 / T1 junction", "L1 / L2 disc space"], answerIndex: 0, explanation: "Because the spinal cord ends at L1-L2, a spinal needle is inserted at L3-L4 or L4-L5 into the subarachnoid lumbar cistern." }
      ],
      [
        { question: "Dua komponen apa yang menyusun diskus intervertebralis?", options: ["Anulus fibrosus (luar) dan nukleus pulposus (dalam)", "Kapsul artikular dan membran sinovial", "Korteks tulang dan sumsum trabekular", "Lamina dan pedikel"], answerIndex: 0, explanation: "Diskus intervertebralis terdiri dari anulus fibrosus yang liat mengelilingi nukleus pulposus yang kaya air." },
        { question: "Mengapa herniasi diskus posterolateral (HNP) paling sering terjadi pada tingkat L4-L5 dan L5-S1?", options: ["Menyempitnya ligamen longitudinal posterior dan beban aksial biomekanik yang tinggi", "Tidak adanya ligamen anterior", "Volume kanalis spinalis yang lebih besar", "Korteks tulang vertebra yang lebih tipis"], answerIndex: 0, explanation: "Ligamen longitudinal posterior menipis di daerah lumbal bawah, menjadikannya titik lemah di bawah beban aksial tertinggi." },
        { question: "Pungsi lumbal (spinal tap) dapat dilakukan dengan aman di bawah tingkat vertebra mana pada orang dewasa?", options: ["Ruang intervertebra L3 / L4 atau L4 / L5 (di bawah konus medularis)", "Ruang T12 / L1", "Persambungan C7 / T1", "Ruang diskus L1 / L2"], answerIndex: 0, explanation: "Karena medula spinalis berakhir di L1-L2, jarum lumbal dimasukkan pada L3-L4 atau L4-L5 ke dalam sisterna lumbal." }
      ],
      ["thoracic_spine_ribs", "sacrum_coccyx", "lumbar_spinal_cord"]
    ),

    "Sacrum & Coccyx": lesson("skeletal", "skeleton", { EN: "Sacrum & Coccyx", ID: "Sakrum & Koksigis" }, "💀🦴",
      {
        overview: "The sacrum is a sturdy triangular bone made of 5 fused vertebrae that locks the spine securely into your hip bones, while the coccyx (tailbone) anchors pelvic floor muscles.",
        position: "Forms the solid back wall of the pelvis at the base of the spine, ending with the small tailbone at the very bottom.",
        mechanism: "Transfers the entire weight of your upper body smoothly across into both hip bones when standing or walking, while providing attachment points for strong hip and pelvic muscles.",
        health: "Falling hard on the tailbone can bruise or fracture the coccyx (coccydynia). In women, hormonal changes during pregnancy loosen pelvic joints to prepare for childbirth."
      },
      {
        overview: "The sacrum is a wedge-shaped bone formed by the fusion of 5 sacral vertebrae (S1-S5); the coccyx comprises 3-5 fused rudimentary vertebrae at the inferior apex.",
        position: "Forms the posterior-superior boundary of the pelvic cavity, articulating laterally with the iliac bones at the sacroiliac (SI) joints and superiorly with L5 at the lumbosacral angle.",
        mechanism: "Transfers gravitational axial loads from the vertebral column to the pelvic girdle and lower limbs. Anterior and posterior sacral foramina transmit the ventral and dorsal rami of spinal nerves S1-S4. The coccyx serves as the insertion site for the pubococcygeus and iliococcygeus components of the levator ani and gluteus maximus.",
        health: "Sacroiliitis (inflammation of SI joints) is a hallmark of seronegative spondyloarthropathies like ankylosing spondylitis (HLA-B27). Coccygodynia results from direct trauma or childbirth strain on the sacrococcygeal synchondrosis."
      },
      {
        overview: "Sakrum adalah tulang segitiga kokoh yang terbentuk dari 5 ruas tulang belakang yang menyatu, mengunci tulang belakang ke tulang pinggul, sedangkan koksigis (tulang ekor) menambatkan otot-otot dasar panggul.",
        position: "Membentuk dinding belakang panggul yang kokoh di dasar tulang belakang, berakhir dengan tulang ekor kecil di ujung paling bawah.",
        mechanism: "Menyalurkan seluruh berat tubuh bagian atas secara merata ke kedua tulang pinggul saat berdiri atau berjalan, serta menyediakan tempat melekatnya otot pinggul dan panggul yang kuat.",
        health: "Jatuh terduduk dapat memar atau mematahkan tulang ekor (koksigodinia). Pada wanita hamil, perubahan hormon mengendurkan sendi panggul untuk mempersiapkan persalinan."
      },
      {
        overview: "Sakrum adalah tulang berbentuk baji yang dibentuk oleh fusi 5 vertebra sakral (S1-S5); koksigis terdiri dari 3-5 vertebra rudimenter yang menyatu di apeks inferior.",
        position: "Membentuk batas posterior-superior rongga panggul, berartikulasi di lateral dengan tulang ilium pada sendi sakroiliaka (SI) dan di superior dengan L5.",
        mechanism: "Mentransfer beban gravitasi aksial dari tulang belakang ke gelang panggul dan ekstremitas bawah. Foramina sakralis anterior dan posterior mentransmisikan cabang saraf spinal S1-S4. Koksigis berfungsi sebagai tempat perlekatan otot levator ani dan gluteus maksimus.",
        health: "Sakroiliitis (peradangan sendi SI) adalah tanda khas spondiloartropati seronegatif seperti ankilosing spondilitis (HLA-B27). Koksigodinia terjadi akibat trauma langsung atau regangan saat melahirkan."
      },
      [
        { question: "Which joint transfers gravitational body weight from the vertebral column to the pelvic girdle?", options: ["Sacroiliac (SI) joint", "Pubic symphysis", "Acetabulofemoral joint", "Lumbosacral facet joint"], answerIndex: 0, explanation: "The sacroiliac joints transfer the upper body weight from the sacrum to the iliac bones of the pelvis." },
        { question: "What landmark on the anterior superior border of S1 is an essential obstetric pelvic measurement?", options: ["Sacral promontory", "Median sacral crest", "Sacral hiatus", "Coccygeal cornua"], answerIndex: 0, explanation: "The sacral promontory projects anteriorly into the pelvic inlet, defining the conjugate diameters of the birth canal." },
        { question: "Which key pelvic floor muscle attaches to the coccyx and supports pelvic viscera?", options: ["Levator ani (pubococcygeus/iliococcygeus)", "Pectineus", "Sartorius", "Psoas minor"], answerIndex: 0, explanation: "The levator ani muscle group inserts into the anococcygeal ligament and coccyx to support pelvic organs." }
      ],
      [
        { question: "Sendi manakah yang menyalurkan berat tubuh bagian atas dari tulang belakang ke gelang panggul?", options: ["Sendi sakroiliaka (SI)", "Simfisis pubis", "Sendi panggul (asetabulofemoral)", "Sendi faset lumbosakral"], answerIndex: 0, explanation: "Sendi sakroiliaka mentransfer beban tubuh bagian atas dari sakrum ke tulang ilium panggul." },
        { question: "Tanda anatomis apa pada batas superior anterior S1 yang merupakan ukuran penting dalam obstetri?", options: ["Promontorium sakrum", "Krista sakralis mediana", "Hiatus sakralis", "Kornu koksigis"], answerIndex: 0, explanation: "Promontorium sakrum menonjol ke anterior ke dalam pintu atas panggul, menentukan diameter konjugata jalan lahir." },
        { question: "Otot dasar panggul penting manakah yang melekat pada koksigis dan menopang organ visera panggul?", options: ["Levator ani (pubokoksigeus/iliokoksigeus)", "Pektineus", "Sartorius", "Psoas minor"], answerIndex: 0, explanation: "Kelompok otot levator ani melekat pada ligamen anokoksigeal dan koksigis untuk menopang organ-organ panggul." }
      ],
      ["lumbar_spine", "pelvis"]
    ),

    "Tibia & Fibula": lesson("skeletal", "skeleton", { EN: "Tibia & Fibula", ID: "Tibia & Fibula (Tulang Kering & Betis)" }, "💀🦵",
      {
        overview: "The tibia (shinbone) and fibula (calf bone) are the two long bones of the lower leg. The sturdy tibia carries your body weight, while the slender fibula steadies your ankle joint and anchors leg muscles.",
        position: "Extends from the knee joint down to the ankle joint in the lower leg.",
        mechanism: "The broad top of the tibia forms the lower half of the knee joint. At the ankle, both bones form bony side bumps (malleoli) that lock the foot securely in place like a bracket.",
        health: "Running on hard surfaces without proper footwear can cause painful inflammation along the shin (shin splints). The nerve wrapping around the fibular neck is vulnerable to blows, which can cause foot drop."
      },
      {
        overview: "The tibia is the medial, major weight-bearing column of the leg, articulating proximally with femoral condyles and distally with the talus; the lateral fibula serves primarily for muscle attachment and ankle mortise stabilization.",
        position: "Forms the crural skeleton, interconnected along their shafts by the dense interosseous membrane.",
        mechanism: "The expanded distal end of the tibia forms the medial malleolus, while the distal fibula forms the lateral malleolus, together creating the talocrural mortise. The common fibular (peroneal) nerve winds intimately around the fibular neck.",
        health: "Tibial shaft fractures carry high risk of acute compartment syndrome due to rigid osteofascial boundaries. Direct trauma to the fibular neck can lacerate the common fibular nerve, paralyzing anterior compartment dorsiflexors and evertors, producing high-stepping foot drop gait."
      },
      {
        overview: "Tibia (tulang kering) dan fibula (tulang betis) adalah dua tulang panjang pada tungkai bawah. Tibia yang kokoh menopang seluruh berat badan, sedangkan fibula yang ramping menstabilkan pergelangan kaki dan tempat melekatnya otot betis.",
        position: "Membentang dari sendi lutut turun ke sendi pergelangan kaki pada tungkai bawah.",
        mechanism: "Bagian atas tibia yang lebar membentuk bagian bawah sendi lutut. Pada pergelangan kaki, kedua tulang membentuk tonjolan mata kaki (maleolus) yang mengunci kaki dengan kokoh seperti penjepit.",
        health: "Berlari di permukaan keras tanpa sepatu yang tepat dapat memicu peradangan nyeri di tulang kering (shin splints). Saraf yang melingkari leher fibula rentan terhadap benturan yang dapat menyebabkan kaki terkulai (foot drop).",
      },
      {
        overview: "Tibia adalah kolom penopang beban utama tungkai bawah di sisi medial, berartikulasi di proksimal dengan kondilus femur dan di distal dengan talus; fibula di lateral menstabilkan sendi pergelangan kaki.",
        position: "Membentuk kerangka kruris, dihubungkan di sepanjang batangnya oleh membran interosea yang padat.",
        mechanism: "Ujung distal tibia membentuk maleolus medialis, sedangkan fibula distal membentuk maleolus lateralis, bersama-sama menciptakan mangkuk sendi talokrural. Saraf fibularis (peroneus) komunis melingkar di sekitar leher fibula.",
        health: "Fraktur batang tibia berisiko tinggi memicu sindrom kompartemen akut. Trauma langsung pada leher fibula dapat mencederai saraf fibula komunis, melumpuhkan otot dorsifleksor dan evertor kaki sehingga memicu 'foot drop'."
      },
      [
        { question: "Which major lower leg bone directly bears over 90% of body weight during standing and walking?", options: ["Tibia (shinbone)", "Fibula", "Patella", "Talus"], answerIndex: 0, explanation: "The tibia is the primary weight-bearing column of the crus, transmitting virtually all axial load to the foot." },
        { question: "What nerve curves tightly around the neck of the fibula, making it vulnerable to trauma and foot drop?", options: ["Common fibular (peroneal) nerve", "Tibial nerve", "Saphenous nerve", "Femoral nerve"], answerIndex: 0, explanation: "The common fibular nerve wraps around the fibular neck; injury here paralyzes anterior and lateral compartment leg muscles causing foot drop." },
        { question: "The lateral malleolus of the ankle joint is formed by the distal end of the:", options: ["Fibula", "Tibia", "Calcaneus", "Cuboid bone"], answerIndex: 0, explanation: "The lateral malleolus is the expanded distal end of the fibula stabilizing the ankle mortise." }
      ],
      [
        { question: "Tulang tungkai bawah mana yang menopang lebih dari 90% berat badan saat berdiri dan berjalan?", options: ["Tibia (tulang kering)", "Fibula (tulang betis)", "Patela", "Talus"], answerIndex: 0, explanation: "Tibia adalah kolom penopang beban utama tungkai bawah yang mentransmisikan beban ke kaki." },
        { question: "Saraf apa yang melengkung erat di sekitar leher fibula sehingga rentan cedera yang menyebabkan 'foot drop'?", options: ["Saraf fibula komunis (peroneal)", "Saraf tibia", "Saraf safena", "Saraf femoralis"], answerIndex: 0, explanation: "Saraf fibula komunis melingkari leher fibula; cedera di sini melumpuhkan otot kompartemen anterior dan menyebabkan foot drop." },
        { question: "Maleolus lateralis (mata kaki luar) pada pergelangan kaki dibentuk oleh ujung distal dari:", options: ["Fibula", "Tibia", "Kalkaneus", "Tulang kuboid"], answerIndex: 0, explanation: "Maleolus lateralis adalah ujung distal fibula yang diperbesar untuk menstabilkan sendi pergelangan kaki." }
      ],
      ["femur"]
    ),

    "Humerus": lesson("skeletal", "skeleton", { EN: "Humerus", ID: "Humerus (Tulang Lengan Atas)" }, "💀💪",
      {
        overview: "The humerus is the single large bone of your upper arm. It connects your shoulder blade to your elbow, giving you power and leverage to push, pull, lift, and throw.",
        position: "Extends from the shoulder joint down through the upper arm to the elbow joint.",
        mechanism: "Its ball-shaped top rotates freely inside the shallow shoulder socket, while its bottom end has spool-shaped hinges that lock with forearm bones to bend and straighten the elbow.",
        health: "Breaking the middle of the upper arm bone can pinch the radial nerve running right behind it, causing wrist drop (inability to lift the hand up). Sling immobilization or surgery helps it heal properly."
      },
      {
        overview: "The humerus is the long bone of the brachium, featuring a hemispherical proximal head articulating with the scapular glenoid cavity and complex distal condyles articulating with the radius and ulna.",
        position: "Spans the arm between the glenohumeral joint proximally and the elbow (humeroulnar and humeroradial) joints distally.",
        mechanism: "Greater and lesser tubercles provide insertion points for the rotator cuff musculature. The mid-diaphyseal radial groove transmits the radial nerve and profunda brachii artery. Distally, the lateral capitulum articulates with the radial head, and the medial trochlea articulates with the ulnar trochlear notch.",
        health: "Mid-shaft humeral fractures risk radial nerve neuropraxia/transection manifesting as wrist drop and loss of sensation over the first dorsal interosseous webspace. Surgical neck fractures threaten the axillary nerve within the quadrangular space, causing deltoid paralysis."
      },
      {
        overview: "Humerus adalah tulang tunggal yang besar pada lengan atas Anda. Tulang ini menghubungkan tulang belikat ke sendi siku, memberi Anda kekuatan dan daya ungkit untuk mendorong, menarik, mengangkat, dan melempar.",
        position: "Membentang dari sendi bahu turun melalui lengan atas ke sendi siku.",
        mechanism: "Bagian atasnya yang bulat seperti bola berputar bebas di dalam mangkuk sendi bahu, sedangkan ujung bawahnya memiliki persendian mirip engsel yang terhubung dengan tulang lengan bawah untuk menekuk dan meluruskan siku.",
        health: "Patah pada bagian tengah tulang lengan atas dapat menjepit saraf radialis yang berjalan di belakangnya, menyebabkan 'wrist drop' (ketidakmampuan mengangkat pergelangan tangan). Pemasangan gips atau operasi membantu pemulihan.",
      },
      {
        overview: "Humerus adalah tulang panjang brakium, memiliki kepala hemisferik proksimal yang berartikulasi dengan fosa glenoid dan kondilus distal yang berartikulasi dengan radius dan ulna.",
        position: "Membentang di lengan antara sendi glenohumeral di proksimal dan sendi siku di distal.",
        mechanism: "Tuberkulum mayor dan minor menjadi tempat insersi otot rotator cuff. Sulkus radialis di tengah batang tulang mentransmisikan saraf radialis dan arteri profunda braki. Di distal, kapitulum berartikulasi dengan radius dan troklea dengan ulna.",
        health: "Fraktur tengah batang humerus berisiko mencederai saraf radialis yang menyebabkan 'wrist drop'. Fraktur leher bedah mengancam saraf aksilaris di dalam celah kuadrangular, memicu paralisis otot deltoid."
      },
      [
        { question: "A mid-shaft fracture of the humerus most commonly puts which nerve at risk of injury in the spiral groove?", options: ["Radial nerve", "Median nerve", "Ulnar nerve", "Musculocutaneous nerve"], answerIndex: 0, explanation: "The radial nerve runs intimately in the radial groove along the posterior midshaft of the humerus, risking palsy (wrist drop) upon shaft fracture." },
        { question: "Which smooth distal articular condyle of the humerus articulates specifically with the head of the radius?", options: ["Capitulum", "Trochlea", "Medial epicondyle", "Coronoid fossa"], answerIndex: 0, explanation: "The lateral capitulum articulates with the cup-shaped radial head; the medial trochlea articulates with the trochlear notch of the ulna." },
        { question: "Fracture of the surgical neck of the humerus endangers which nerve and vascular pair?", options: ["Axillary nerve and posterior circumflex humeral artery", "Radial nerve and profunda brachii", "Ulnar nerve and superior ulnar collateral", "Median nerve and brachial artery"], answerIndex: 0, explanation: "The axillary nerve and posterior humeral circumflex vessels traverse the quadrangular space immediately behind the humeral surgical neck." }
      ],
      [
        { question: "Fraktur bagian tengah tulang humerus paling sering membahayakan saraf mana di sulkus spiralis?", options: ["Saraf radialis", "Saraf medianus", "Saraf ulnaris", "Saraf muskulokutaneus"], answerIndex: 0, explanation: "Saraf radialis berjalan di dalam sulkus radialis pada bagian tengah humerus, berisiko cedera (wrist drop) jika terjadi patah tulang." },
        { question: "Kondilus artikular distal humerus manakah yang berartikulasi secara khusus dengan kepala radius?", options: ["Kapitulum", "Troklea", "Epikondilus medialis", "Fossa koronoid"], answerIndex: 0, explanation: "Kapitulum di bagian lateral berartikulasi dengan kepala radius; troklea di bagian medial berartikulasi dengan takik troklearis ulna." },
        { question: "Fraktur pada leher bedah (surgical neck) humerus membahayakan pasangan saraf dan pembuluh darah mana?", options: ["Saraf aksilaris dan arteri sirkumfleksa humeri posterior", "Saraf radialis dan profunda braki", "Saraf ulnaris dan kolateral ulnaris superior", "Saraf medianus dan arteri brakiologis"], answerIndex: 0, explanation: "Saraf aksilaris dan pembuluh sirkumfleksa humeri posterior berjalan tepat di belakang leher bedah humerus." }
      ],
      ["radius_ulna", "biceps", "deltoid", "clavicle_scapula"]
    ),

    "Radius & Ulna": lesson("skeletal", "skeleton", { EN: "Radius & Ulna", ID: "Radius & Ulna (Tulang Pengumpil & Hasta)" }, "💀🤲",
      {
        overview: "The radius (thumb side) and ulna (pinky side) are the two parallel bones of your forearm. They allow your elbow to bend and your forearm to rotate, letting you turn your palm up or down.",
        position: "Runs parallel along the forearm from the elbow joint down to the wrist.",
        mechanism: "The ulna forms the sturdy elbow hinge at the back, while the radius rotates over the ulna like a steering wheel when you flip your palm up (supination) or down (pronation).",
        health: "Catching yourself with an outstretched hand during a fall can fracture the distal radius (Colles' fracture). In young kids, sudden arm pulling can slip the radial head ('nursemaid's elbow')."
      },
      {
        overview: "The radius (lateral) and ulna (medial) constitute the antebrachial skeleton, linked along their diaphyses by an oblique fibrous interosseous membrane.",
        position: "Spans between the humeroradial/humeroulnar elbow joints and the radiocarpal wrist joint.",
        mechanism: "The proximal ulnar olecranon and coronoid process form the trochlear notch articulating with the humeral trochlea. The circular radial head pivots within the radial notch of the ulna held by the annular ligament, enabling 150° of forearm pronation/supination. Distally, the radius articulates with scaphoid and lunate carpal bones.",
        health: "Colles' fracture (extra-articular distal radius fracture with dorsal displacement/'dinner fork' deformity) follows a fall onto an outstretched hand (FOOSH). Nursemaid's elbow involves subluxation of the radial head beneath the annular ligament in young children."
      },
      {
        overview: "Radius (sisi jempol) dan ulna (sisi kelingking) adalah dua tulang sejajar pada lengan bawah Anda. Keduanya memungkinkan siku menekuk dan lengan bawah berputar untuk membalikkan telapak tangan ke atas atau ke bawah.",
        position: "Berjalan sejajar di sepanjang lengan bawah dari sendi siku hingga ke pergelangan tangan.",
        mechanism: "Ulna membentuk engsel siku yang kokoh di belakang, sedangkan radius berputar menyilang di atas ulna saat Anda memutar telapak tangan ke atas (supinasi) atau ke bawah (pronasi).",
        health: "Menahan tubuh dengan tangan terbuka saat jatuh dapat mematahkan ujung tulang radius (fraktur Colles). Pada balita, tarikan lengan yang tiba-tiba dapat menggeser kepala radius ('nursemaid elbow')."
      },
      {
        overview: "Radius (lateral) dan ulna (medial) membentuk kerangka antebrakium, dihubungkan di sepanjang batangnya oleh membran interosea fibrosa.",
        position: "Membentang antara sendi siku dan sendi pergelangan tangan radiokarpal.",
        mechanism: "Olekranon proksimal ulna membentuk takik troklearis yang berartikulasi dengan troklea humerus. Kepala radius berputar di dalam takik radialis ulna yang diikat oleh ligamen anular, memungkinkan pronasi dan supinasi 150°. Di distal, radius berartikulasi dengan tulang skafoid dan lunatum.",
        health: "Fraktur Colles (fraktur radius distal dengan deformitas 'garpu makan') terjadi akibat jatuh bertumpu pada telapak tangan. Nursemaid elbow adalah subluksasi kepala radius dari ligamen anular pada anak kecil."
      },
      [
        { question: "What specialized movement of the forearm occurs when the radius crosses diagonally over the stationary ulna?", options: ["Pronation (palm turned downward/posteriorly)", "Supination (palm turned upward)", "Abduction", "Adduction"], answerIndex: 0, explanation: "During pronation, the pronator teres and pronator quadratus rotate the radial head and pivot the distal radius across the ulna." },
        { question: "Subluxation of the radial head out of the annular ligament in young children ('nursemaid's elbow') is caused by:", options: ["Sudden longitudinal axial traction on an extended, pronated arm", "Direct blow to the olecranon", "Extreme wrist hyperflexion", "Repetitive overhead throwing"], answerIndex: 0, explanation: "Radial head subluxation occurs when sudden pulling on a child's arm slips the radial head under the lax annular ligament." },
        { question: "Which prominent ulnar feature forms the bony point of the elbow and receives the triceps tendon insertion?", options: ["Olecranon process", "Coronoid process", "Radial tuberosity", "Ulnar styloid process"], answerIndex: 0, explanation: "The olecranon is the substantial proximal ulnar process that forms the point of the elbow and serves as the triceps attachment." }
      ],
      [
        { question: "Gerakan khusus lengan bawah apa yang terjadi ketika tulang radius menyilang secara diagonal di atas ulna?", options: ["Pronasi (telapak tangan menghadap ke bawah/belakang)", "Supinasi (telapak tangan menghadap ke atas)", "Abduksi", "Adduksi"], answerIndex: 0, explanation: "Selama pronasi, otot pronator memutar kepala radius sehingga ujung distal radius menyilang di atas ulna." },
        { question: "Subluksasi kepala radius dari ligamen anular pada anak kecil ('nursemaid elbow') disebabkan oleh:", options: ["Tarikan aksial longitudinal tiba-tiba pada lengan yang lurus dan terpronasi", "Pukulan langsung pada olekranon", "Hiperfleksi pergelangan tangan ekstrem", "Melempar bola berulang kali"], answerIndex: 0, explanation: "Subluksasi kepala radius terjadi ketika tarikan tiba-tiba pada lengan anak menyebabkan kepala radius tergelincir dari ligamen anular." },
        { question: "Tonjolan ulna manakah yang membentuk tonjolan keras siku dan menerima insersi tendon trisep?", options: ["Prosesus olekranon", "Prosesus koronoid", "Tuberositas radialis", "Prosesus stiloideus ulna"], answerIndex: 0, explanation: "Olekranon adalah tonjolan proksimal ulna yang membentuk tonjolan siku dan menjadi tempat melekatnya otot trisep." }
      ],
      ["humerus", "biceps"]
    ),

    "Clavicle & Scapula": lesson("skeletal", "skeleton", { EN: "Clavicle & Scapula", ID: "Klavikula & Skapula (Gelang Bahu)" }, "💀🦅",
      {
        overview: "The collarbone (clavicle) and shoulder blade (scapula) form the shoulder girdle. They connect your entire arm to your chest while giving your shoulder the widest range of movement of any joint in your body.",
        position: "The collarbone spans across the upper front chest, and the shoulder blade glides smoothly over the upper back ribs.",
        mechanism: "The S-shaped collarbone acts like a strut keeping your arm away from the rib cage, while the shoulder blade glides along the back so you can reach high above your head.",
        health: "Falling hard onto the shoulder commonly fractures the collarbone at its middle curve. Rest, slings, and physical therapy restore full shoulder strength and motion."
      },
      {
        overview: "The pectoral girdle comprises the anterior S-shaped clavicle and posterior triangular scapula, attaching the upper extremity to the axial skeleton exclusively at the sternoclavicular (SC) joint.",
        position: "Overlies the superior and posterior thoracic wall from the manubrium sterni to the posterolateral rib cage (ribs 2-7).",
        mechanism: "The clavicle acts as a rigid strut maintaining the glenohumeral joint lateral to the thoracic cage. The scapula glides across the scapulothoracic physiological joint. The acromion articulates with the lateral clavicle at the AC joint, the coracoid process anchors the coracobrachialis/short head of biceps, and the shallow glenoid fossa articulates with the humeral head reinforced by the fibrous glenoid labrum.",
        health: "Clavicular fractures occur most frequently at the junction of the middle and lateral thirds (its thinnest, least supported region). Acromioclavicular (AC) joint separation ('shoulder separation') results from a direct blow tearing the acromioclavicular and coracoclavicular ligaments."
      },
      {
        overview: "Tulang selangka (klavikula) dan tulang belikat (skapula) membentuk gelang bahu. Keduanya menghubungkan seluruh lengan Anda ke dada sekaligus memberikan rentang gerak terluas pada bahu dibandingkan sendi lainnya di tubuh.",
        position: "Tulang selangka membentang di bagian depan dada atas, dan tulang belikat meluncur di atas tulang rusuk punggung atas.",
        mechanism: "Tulang selangka berbentuk huruf S berfungsi sebagai penopang agar lengan tidak menempel ke dada, sedangkan tulang belikat meluncur di punggung agar Anda dapat meraih benda tinggi di atas kepala.",
        health: "Jatuh bertumpu pada bahu sering kali mematahkan tulang selangka di lengkungan tengahnya. Istirahat, penggunaan sling, dan fisioterapi memulihkan kekuatan gerak bahu sepenuhnya."
      },
      {
        overview: "Gelang pektoral terdiri dari klavikula anterior berbentuk huruf S dan skapula posterior segitiga, menambatkan ekstremitas atas ke rangka aksial hanya melalui sendi sternoklavikularis (SC).",
        position: "Berada di atas dinding dada superior dan posterior dari manubrium sterni hingga kosta 2-7.",
        mechanism: "Klavikula bertindak sebagai penopang lateral bagi sendi glenohumeral. Skapula meluncur di atas dinding toraks. Akromion berartikulasi dengan klavikula lateral pada sendi AC, prosesus korakoid menambatkan otot bisep pendek, dan fosa glenoid dangkal berartikulasi dengan kepala humerus.",
        health: "Fraktur klavikula paling sering terjadi pada persambungan sepertiga tengah dan lateral. Separasi sendi akromioklavikularis (AC) terjadi akibat benturan langsung yang merobek ligamen akromioklavikular dan korakoklavikular."
      },
      [
        { question: "What is the only direct skeletal synovial joint linking the upper extremity to the axial skeleton?", options: ["Sternoclavicular (SC) joint", "Acromioclavicular (AC) joint", "Glenohumeral joint", "Scapulothoracic articulation"], answerIndex: 0, explanation: "The sternoclavicular joint between the medial clavicle and manubrium sterni is the sole bony articulation of the upper limb with the axial skeleton." },
        { question: "What is the most common anatomical site of clavicle fractures following a fall on an outstretched shoulder?", options: ["Junction of the middle and lateral thirds", "Medial sternal end", "Coracoid tip", "Acromial facet"], answerIndex: 0, explanation: "The junction of the middle and lateral thirds is the thinnest curved portion of the clavicle and the most frequent fracture site." },
        { question: "What fibrocartilaginous ring deepens the shallow glenoid cavity of the scapula to enhance shoulder stability?", options: ["Glenoid labrum", "Acetabular labrum", "Meniscus", "Annular ligament"], answerIndex: 0, explanation: "The glenoid labrum deepens the glenoid socket by approx. 50% to improve stability of the multiaxial glenohumeral joint." }
      ],
      [
        { question: "Sendi sinovial langsung manakah yang merupakan satu-satunya penghubung ekstremitas atas ke rangka aksial?", options: ["Sendi sternoklavikularis (SC)", "Sendi akromioklavikularis (AC)", "Sendi glenohumeral", "Sendi skapulotorasik"], answerIndex: 0, explanation: "Sendi sternoklavikularis antara klavikula medial dan manubrium sterni adalah satu-satunya artikulasi tulang ekstremitas atas dengan rangka aksial." },
        { question: "Lokasi anatomi manakah yang paling sering mengalami fraktur klavikula akibat jatuh bertumpu pada bahu?", options: ["Pertemuan sepertiga tengah dan sepertiga lateral", "Ujung sternal medial", "Ujung korakoid", "Faset akromial"], answerIndex: 0, explanation: "Pertemuan sepertiga tengah dan lateral adalah bagian melengkung tertipis dari klavikula dan merupakan lokasi fraktur tersering." },
        { question: "Cincin fibrokartilago apakah yang memperdalam fosa glenoid skapula untuk meningkatkan stabilitas sendi bahu?", options: ["Labrum glenoid", "Labrum asetabular", "Meniskus", "Ligamen anular"], answerIndex: 0, explanation: "Labrum glenoid memperdalam mangkuk fosa glenoid sekitar 50% untuk menstabilkan sendi bahu glenohumeral." }
      ],
      ["humerus", "deltoid", "trapezius_latissimus"]
    ),

    // Muscular - Core & Back Muscles
    "Rectus Abdominis": lesson("muscular", "muscles", { EN: "Rectus Abdominis", ID: "Rektus Abdominis (Otot Perut)" }, "💪🧱",
      {
        overview: "The rectus abdominis is the long vertical muscle running down the front of your belly (famous as the 'six-pack'). It bends your spine forward, compresses internal organs, and stabilizes your pelvis.",
        position: "Runs straight down the front of the abdomen from the bottom of the ribs to the pubic bone.",
        mechanism: "Crossed by horizontal tendon bands that create separate muscular blocks (the six-pack look). When it contracts, it curls your torso forward during sit-ups and helps you cough and breathe out forcefully.",
        health: "Diastasis recti occurs when the central seam (linea alba) stretches and separates during pregnancy. Planks and core exercises strengthen the abdominal wall and protect the lower back."
      },
      {
        overview: "The rectus abdominis is a paired strap muscle of the anterior abdominal wall enclosed within the fibrous rectus sheath, originating from the pubic crest and symphysis and inserting into the xiphoid process and 5th-7th costal cartilages.",
        position: "Occupies the paramedian anterior abdominal wall on either side of the avascular linea alba.",
        mechanism: "Segmented by 3-4 transverse tendinous intersections (inscriptiones tendineae) adhering to the anterior rectus sheath. Innervated segmentally by thoracoabdominal nerves (T7-T11) and subcostal nerve (T12). Concentric contraction flexes the lumbar spine and increases intra-abdominal pressure during defecation, micturition, and parturition.",
        health: "Rectus sheath hematoma arises from rupture of the superior or inferior epigastric arteries (often in anticoagulated patients during vigorous coughing). Diastasis recti is non-herniating midline widening of the linea alba due to elevated intra-abdominal tension."
      },
      {
        overview: "Rektus abdominis adalah otot vertikal panjang yang membentang di bagian depan perut Anda (terkenal sebagai otot 'six-pack'). Otot ini menekuk tulang belakang ke depan, menopang organ dalam, dan menstabilkan panggul.",
        position: "Membentang lurus ke bawah di bagian depan perut dari tulang rusuk bawah hingga ke tulang kemaluan.",
        mechanism: "Dilewati oleh pita tendon horizontal yang menciptakan lekukan otot terpisah (tampilan six-pack). Saat berkontraksi, otot ini menarik tubuh ke depan saat sit-up dan membantu saat batuk atau menghembuskan napas kuat.",
        health: "Diastasis rekti terjadi ketika garis tengah perut (linea alba) meregang dan terpisah saat kehamilan. Latihan plank dan kekuatan otot inti memperkuat dinding perut serta melindungi punggung bawah."
      },
      {
        overview: "Rektus abdominis adalah otot berpasangan di dinding perut anterior yang terbungkus di dalam selubung rektus, berorigo dari krista dan simfisis pubis serta berinsersi pada prosesus xifoideus dan rawan kosta 5-7.",
        position: "Menempati dinding perut anterior paramedian di kedua sisi linea alba avaskular.",
        mechanism: "Terbagi oleh 3-4 interseksi tendinea transversa. Diinervasi secara segmental oleh saraf torakoabdominal (T7-T11) dan subkostal (T12). Kontraksi konsentris memfleksikan tulang belakang lumbal dan meningkatkan tekanan intra-abdomen saat mengejan dan batuk.",
        health: "Hematoma selubung rektus terjadi akibat ruptur arteri epigastrika superior atau inferior. Diastasis rekti adalah pelebaran garis tengah linea alba tanpa adanya defek cincin hernia."
      },
      [
        { question: "What fibrous midline connective tissue band separates the right and left rectus abdominis muscles?", options: ["Linea alba", "Linea semilunaris", "Arcuate line", "Tendinous intersection"], answerIndex: 0, explanation: "The linea alba is the tough avascular fibrous midline raphe formed by interweaving abdominal wall aponeuroses." },
        { question: "Which structures divide the rectus abdominis transversely into distinct muscular bellies ('six-pack')?", options: ["Tendinous intersections (inscriptiones tendineae)", "Costal demifacets", "Intermuscular septa", "Fascia lata"], answerIndex: 0, explanation: "Three or four fibrous transverse bands called tendinous intersections segment the rectus abdominis muscle." },
        { question: "What is the primary concentric biomechanical action of the rectus abdominis muscle?", options: ["Flexion of the lumbar vertebral column and compression of abdominal viscera", "Spinal extension and hyperlordosis", "Lateral pelvic rotation only", "Femoral adduction"], answerIndex: 0, explanation: "The rectus abdominis powerfully flexes the trunk and lumbar spine and compresses the abdominal cavity during forced expiration and straining." }
      ],
      [
        { question: "Pita jaringan ikat fibrosa di garis tengah apakah yang memisahkan otot rektus abdominis kanan dan kiri?", options: ["Linea alba", "Linea semilunaris", "Garis arkuata", "Interseksi tendinea"], answerIndex: 0, explanation: "Linea alba adalah raphe fibrosa avaskular di garis tengah yang terbentuk dari jalinan aponeurosis dinding perut." },
        { question: "Struktur manakah yang membagi rektus abdominis secara melintang menjadi beberapa tonjolan otot terpisah ('six-pack')?", options: ["Interseksi tendinea (inscriptiones tendineae)", "Faset kosta", "Septum intermuskular", "Fasia lata"], answerIndex: 0, explanation: "Tiga atau empat pita transversal fibrosa yang disebut interseksi tendinea membagi otot rektus abdominis." },
        { question: "Apakah aksi biomekanik konsentris utama dari otot rektus abdominis?", options: ["Fleksi tulang belakang lumbal dan kompresi organ visera perut", "Ekstensi tulang belakang dan hiperlordosis", "Hanya rotasi panggul lateral", "Adduksi paha"], answerIndex: 0, explanation: "Rektus abdominis secara kuat memfleksikan batang tubuh dan tulang belakang lumbal serta mengompresi rongga perut saat ekspirasi paksa." }
      ],
      ["pectoralis_major", "pelvis"]
    ),

    "Trapezius & Latissimus": lesson("muscular", "muscles", { EN: "Trapezius & Latissimus", ID: "Trapezius & Latissimus Dorsi (Otot Punggung)" }, "💪🪁",
      {
        overview: "The trapezius (upper back and neck) and latissimus dorsi (mid and lower back) are the two major muscles that power your back. They move your shoulder blades, pull your arms, and maintain an upright posture.",
        position: "The trapezius forms a diamond over the neck and upper shoulders; the latissimus dorsi covers the wide middle and lower back spreading toward the armpits.",
        mechanism: "The trapezius shrugs your shoulders and pulls your shoulder blades together. The latissimus dorsi pulls your arms down and back with great power when swimming, climbing, or doing pull-ups.",
        health: "Slouching over computers causes upper trapezius tension and knotting. Regular stretching, chin tucks, and pull-up exercises build balanced back support."
      },
      {
        overview: "The trapezius (cranial nerve XI innervated) and latissimus dorsi (thoracodorsal nerve innervated) form the broad superficial muscular layer of the posterior torso and shoulder girdle.",
        position: "Trapezius spans from the occipital protuberance to T12 and the clavicle/scapular spine; latissimus dorsi spans from T7-L5 spines, thoracolumbar fascia, and iliac crest to the intertubercular groove of the humerus.",
        mechanism: "Trapezius superior fibers elevate the scapula, middle fibers retract, and inferior fibers depress the scapula; superior and inferior fibers act as a force couple to upwardly rotate the glenoid fossa for arm abduction >90°. Latissimus dorsi acts as the primary adductor, extensor, and internal rotator of the humerus ('swimmer/climber muscle').",
        health: "Spinal accessory nerve injury during posterior neck lymph node dissection paralyzes the trapezius, causing shoulder droop and impaired arm elevation above horizontal. Latissimus dorsi myocutaneous flaps are routinely utilized in reconstructive plastic and breast surgery."
      },
      {
        overview: "Trapezius (punggung atas dan leher) dan latissimus dorsi (punggung tengah dan bawah) adalah dua otot utama yang membentuk punggung Anda. Otot ini menggerakkan tulang belikat, menarik lengan, dan menjaga postur tubuh tetap tegak.",
        position: "Trapezius membentuk pola berlian di atas leher dan bahu atas; latissimus dorsi menutupi punggung tengah dan bawah yang melebar ke arah ketiak.",
        mechanism: "Trapezius mengangkat bahu dan menarik kedua tulang belikat saling mendekat. Latissimus dorsi menarik lengan ke bawah dan belakang dengan kuat saat berenang, memanjat, atau melakukan pull-up.",
        health: "Membungkuk di depan komputer memicu ketegangan dan kram pada otot trapezius atas. Peregangan teratur dan latihan pull-up membangun postur punggung yang seimbang.",
      },
      {
        overview: "Trapezius (diinervasi oleh saraf kranial XI) dan latissimus dorsi (diinervasi saraf torakodorsal) membentuk lapisan otot superfisial yang luas pada punggung posterior dan gelang bahu.",
        position: "Trapezius membentang dari protuberansia oksipital ke T12 dan spina skapula; latissimus dorsi membentang dari spina T7-L5 dan krista iliaka ke sulkus bicipitalis humerus.",
        mechanism: "Serabut atas trapezius mengangkat skapula, serabut tengah meretraksi, dan serabut bawah mendepresi skapula; bersama-sama memutar fosa glenoid ke atas untuk abduksi lengan >90°. Latissimus dorsi berfungsi sebagai adduktor, ekstensor, dan rotator internal utama humerus.",
        health: "Cedera saraf aksesorius spinalis (CN XI) melumpuhkan trapezius, menyebabkan bahu turun dan gangguan mengangkat lengan ke atas. Flap latissimus dorsi sering digunakan dalam bedah rekonstruksi."
      },
      [
        { question: "Which cranial nerve provides primary motor innervation to the trapezius muscle?", options: ["Spinal accessory nerve (Cranial Nerve XI)", "Dorsal scapular nerve", "Thoracodorsal nerve", "Axillary nerve"], answerIndex: 0, explanation: "The spinal accessory nerve (CN XI) descends through the posterior triangle of the neck to innervate the trapezius." },
        { question: "Which nerve innervates the latissimus dorsi muscle to power shoulder extension and adduction ('climbing muscle')?", options: ["Thoracodorsal nerve (middle subscapular nerve)", "Long thoracic nerve", "Suprascapular nerve", "Radial nerve"], answerIndex: 0, explanation: "The thoracodorsal nerve (originating from the posterior cord of the brachial plexus, C6-C8) innervates the latissimus dorsi." },
        { question: "Working together, the superior and inferior fibers of the trapezius rotate the scapula to allow:", options: ["Full arm abduction above the horizontal 90-degree plane", "Shoulder internal impingement", "Glenoid cavity downward tilt", "Elbow hyperextension"], answerIndex: 0, explanation: "Upward rotation of the scapular glenoid fossa by the trapezius and serratus anterior is essential for elevating the arm past 90 degrees." }
      ],
      [
        { question: "Saraf kranial manakah yang menyediakan inervasi motorik utama ke otot trapezius?", options: ["Saraf aksesorius spinal (Saraf Kranial XI)", "Saraf skapularis dorsal", "Saraf torakodorsal", "Saraf aksilaris"], answerIndex: 0, explanation: "Saraf aksesorius spinal (CN XI) berjalan turun melalui trigonum colli posterior untuk menginervasi otot trapezius." },
        { question: "Saraf apa yang menginervasi otot latissimus dorsi untuk melakukan ekstensi dan adduksi bahu ('otot pemanjat')?", options: ["Saraf torakodorsal (saraf subspakular tengah)", "Saraf torasikus panjang", "Saraf supraskapular", "Saraf radialis"], answerIndex: 0, explanation: "Saraf torakodorsal (berasal dari korda posterior pleksus brakialis, C6-C8) menginervasi latissimus dorsi." },
        { question: "Bekerja bersama, serabut atas dan bawah trapezius memutar skapula ke atas untuk memungkinkan:", options: ["Abduksi lengan penuh di atas bidang horizontal 90 derajat", "Impingement internal bahu", "Kemiringan fosa glenoid ke bawah", "Hiperekstensi siku"], answerIndex: 0, explanation: "Rotasi ke atas fosa glenoid skapula oleh trapezius dan serratus anterior sangat penting untuk mengangkat lengan di atas 90 derajat." }
      ],
      ["deltoid", "clavicle_scapula", "humerus"]
    ),

    // ─── NERVOUS SYSTEM STRUCTURES ──────────────────────────────────────────
    "Thalamus": lesson("nervous", "brain", { EN: "Thalamus", ID: "Talamus" }, "🧠🔀",
      {
        overview: "The thalamus is the brain's central communications hub and gateway within the diencephalon. It connects the cerebrum with the rest of the nervous system, processing and relaying virtually all incoming sensory information—with the sole exception of the sense of smell (olfaction)—before signals reach the conscious cerebral cortex.",
        position: "Situated deep beneath the cerebrum in the diencephalon at the top of the brainstem, forming the lateral walls of the fluid-filled third ventricle between the two cerebral hemispheres.",
        mechanism: "Acts as an active processor and gatekeeper rather than a simple cable. It sorts sensory signals through specific relay nuclei (such as the lateral geniculate for vision and medial geniculate for hearing) and determines which stimuli receive attention, while also relaying motor feedback from the basal nuclei and cerebellum back to the cerebral cortex.",
        health: "Ischemic strokes damaging thalamic blood supply cause Dejerine-Roussy syndrome (Thalamic Pain Syndrome), resulting in severe chronic neuropathic burning pain, sensory loss (hemianesthesia), and hypersensitivity on the opposite side of the body."
      },
      {
        overview: "The thalamus is a bilateral collection of distinct diencephalic nuclei that constitutes the primary relay and integrative center between the cerebral cortex, brainstem, spinal cord, and peripheral nervous system. It processes all ascending sensory pathways except olfaction (which connects directly to the limbic cerebrum) and mediates extensive reciprocal thalamocortical oscillations.",
        position: "Located in the dorsal diencephalon, forming the superior and lateral boundaries of the third ventricle; bordered laterally by the posterior limb of the internal capsule, superiorly by the fornix and lateral ventricles, and inferiorly by the hypothalamic sulcus and midbrain tegmentum.",
        mechanism: "Composed of organized nuclear groups: specific relay nuclei (Lateral Geniculate Nucleus [LGN] for retinogeniculate visual relay to V1; Medial Geniculate Nucleus [MGN] for auditory pathways to A1; Ventral Posterolateral [VPL] and Ventral Posteromedial [VPM] for medial lemniscal, spinothalamic, and trigeminothalamic somatosensation), motor relay nuclei (Ventral Anterior [VA] and Ventral Lateral [VL] mediating basal ganglia disinhibition and cerebellar dentatothalamic loops to motor cortices), association nuclei (Pulvinar, Mediodorsal), and the GABAergic Thalamic Reticular Nucleus (TRN) providing inhibitory sensory gating and sleep spindle generation.",
        health: "Infarction in the thalamoperforating or thalamogeniculate branches of the posterior cerebral artery (PCA) produces Dejerine-Roussy syndrome, characterized by contralateral hemianesthesia, sensory ataxia, dysesthesias, severe intractable central neuropathic pain, and alterations in vigilance or consciousness when intralaminar/reticular projections are disrupted."
      },
      {
        overview: "Talamus adalah gerbang utama dan pusat relai komunikasi otak di dalam diensefalon. Organ ini menghubungkan serebrum dengan seluruh sistem saraf, memproses dan menyortir hampir semua informasi sensorik yang masuk—dengan satu-satunya pengecualian indra penciuman (olfaktori)—sebelum sinyal mencapai korteks serebral kesadaran.",
        position: "Terletak jauh di bawah serebrum pada kawasan diensefalon di puncak batang otak, membentuk dinding lateral ventrikel ketiga yang berisi cairan di antara kedua belahan otak besar.",
        mechanism: "Berfungsi sebagai penyaring aktif dan pengatur lalu lintas sinyal, bukan sekadar kabel pasif. Talamus menyortir rangsangan melalui nukleus relai spesifik (seperti nukleus genikulat lateral untuk penglihatan dan nukleus genikulat medial untuk pendengaran), serta meneruskan umpan balik perintah motorik dari ganglia basalis dan serebelum kembali ke korteks motorik.",
        health: "Stroke iskemik yang merusak cabang arteri talamus dapat memicu Sindrom Nyeri Talamik (Dejerine-Roussy), yang bermanifestasi sebagai nyeri neuropatik kronis berupa sensasi terbakar parah, hilangnya sensasi raba (hemianestesia), dan hipersensitivitas pada sisi tubuh kontralateral."
      },
      {
        overview: "Talamus adalah kompleks nukleus diensefalon berpasangan yang menjadi stasiun relai dan integrasi primer antara korteks serebri, batang otak, medula spinalis, dan sistem saraf perifer. Talamus merupakan sinaps wajib bagi seluruh jaras sensorik asenden kecuali penciuman (yang terhubung langsung ke paleokorteks olfaktori serebrum) serta mengatur osilasi timbal balik talamokortikal.",
        position: "Terletak di diensefalon dorsal, membentuk batas superior dan lateral dari ventrikel ketiga; berbatasan di lateral dengan krus posterior kapsula interna, di superior dengan forniks dan ventrikel lateral, serta di inferior dengan sulkus hipotalamikus dan tegmentum mesensefalon.",
        mechanism: "Terdiri atas kelompok nukleus terspesialisasi: nukleus relai spesifik (LGN untuk relai visual retinogenikulat ke V1; MGN untuk jaras auditori ke A1; VPL dan VPM untuk somatosensorik lemniskus medialis, traktus spinotalamikus, dan trigeminotalamikus), nukleus motorik (VA dan VL yang menyalurkan umpan balik disinhibisi ganglia basalis dan luaran serebelar ke korteks motorik primer), nukleus asosiasi (Pulvinar, Mediodorsal), dan Thalamic Reticular Nucleus (TRN) berbasis GABAergik yang mengatur gerbang penapisan sensorik serta osilasi gelombang 'spindle' tidur.",
        health: "Infark cabang arteri talamoperforata atau talamogenikulata dari arteri serebri posterior (PCA) menyebabkan sindrom Dejerine-Roussy, ditandai dengan hemianestesia kontralateral, ataksia sensorik, disestesia, nyeri sentral neuropatik pascastroke yang resistan terhadap analgesik biasa, serta penurunan kesadaran apabila proyeksi nukleus intralaminar terganggu."
      },
      [
        { question: "Which sensory modality bypasses primary synaptic relay in the thalamus before reaching the cerebrum?", options: ["Olfaction (Smell)", "Vision", "Audition (Hearing)", "Somatosensation (Touch and Pain)"], answerIndex: 0, explanation: "According to OpenStax Anatomy & Physiology, all sensory pathways must synapse in the thalamus before processing by the cerebral cortex, with the single exception of olfaction (the sense of smell)." },
        { question: "Which thalamic nucleus serves as the dedicated relay station for visual pathways connecting the optic tract to the primary visual cortex (V1)?", options: ["Lateral Geniculate Nucleus (LGN)", "Medial Geniculate Nucleus (MGN)", "Ventral Posterolateral Nucleus (VPL)", "Subthalamic Nucleus"], answerIndex: 0, explanation: "The Lateral Geniculate Nucleus (LGN) of the thalamus receives visual signals from the optic tract and projects optic radiations directly to the visual cortex in the occipital lobe." },
        { question: "Beyond relaying sensory information, how does the thalamus participate in somatic motor control?", options: ["It relays motor feedback loops from the basal nuclei and cerebellum back to the cerebral cortex", "It directly stimulates skeletal muscle fibers via peripheral motor nerves", "It secretes acetylcholine into the bloodstream to trigger muscle contraction", "It synthesizes cerebrospinal fluid to lubricate spinal joints"], answerIndex: 0, explanation: "The cerebrum sends motor information to the thalamus, which mediates feedback loops involving basal nuclei output (disinhibition) and cerebellar coordination before returning commands to the motor cortex." }
      ],
      [
        { question: "Modalitas sensorik manakah yang tidak melalui sinaps relai primer di talamus sebelum mencapai cerebrum?", options: ["Penciuman (Olfaktori)", "Penglihatan (Visual)", "Pendengaran (Auditori)", "Perabaan & Nyeri (Somatosensorik)"], answerIndex: 0, explanation: "Berdasarkan referensi OpenStax Anatomi & Fisiologi, seluruh jaras sensorik wajib bersinaps di talamus sebelum diproses korteks, dengan satu-satunya pengecualian yaitu indra penciuman (olfaktori)." },
        { question: "Nukleus talamus manakah yang menjadi stasiun relai khusus untuk jaras penglihatan dari traktus optik menuju korteks visual primer (V1)?", options: ["Lateral Geniculate Nucleus (LGN)", "Medial Geniculate Nucleus (MGN)", "Ventral Posterolateral Nucleus (VPL)", "Subthalamic Nucleus"], answerIndex: 0, explanation: "Lateral Geniculate Nucleus (LGN) pada talamus menerima sinyal visual dari traktus optik dan memancarkan radiasi optika langsung ke korteks visual di lobus oksipital." },
        { question: "Selain merelai informasi sensorik, bagaimana peran talamus dalam sistem kendali motorik tubuh?", options: ["Merelai sirkuit umpan balik motorik dari ganglia basalis dan serebelum kembali ke korteks serebri", "Menginervasi serat otot rangka secara langsung melalui saraf perifer", "Mensekresikan asetilkolin ke peredaran darah untuk memicu kontraksi otot", "Memproduksi cairan serebrospinal untuk melumasi persendian tulang belakang"], answerIndex: 0, explanation: "Serebrum berinteraksi dengan ganglia basalis dan serebelum melalui talamus, di mana talamus bertindak sebagai stasiun relai keluaran motorik sebelum diteruskan ke korteks motorik primer." }
      ],
      ["cerebrum", "hypothalamus", "brainstem", "hippocampus"]
    ),

    "Hypothalamus": lesson("nervous", "brain", { EN: "Hypothalamus", ID: "Hipotalamus" }, "🌡️⚖️",
      { overview: "The hypothalamus is your body's master homeostatic thermostat and hormonal controller. It regulates body temperature, thirst, hunger, sleep-wake cycles, and autonomic body balance.", position: "Situated directly below the thalamus and just above the pituitary gland at the base of the brain.", mechanism: "Integrates neural and humoral signals, synthesizing releasing hormones to command the anterior pituitary and ADH/oxytocin for posterior pituitary release.", health: "Hypothalamic trauma or tumors cause diabetes insipidus (inability to concentrate urine), temperature dysregulation, or severe appetite disorders." },
      { overview: "The hypothalamus is a ventral diencephalic command center comprising distinct nuclei (SCN, PVN, SON, Arcuate, VMH) coordinating autonomic and neuroendocrine homeostasis.", position: "Forms the floor and ventral walls of the third ventricle, connected to the hypophysis via the infundibular stalk.", mechanism: "Regulates 24-hour circadian rhythms via the suprachiasmatic nucleus (SCN), synthesizes ADH and oxytocin, and secretes hypophysiotropic hormones into the portal hypophyseal circulation.", health: "Central diabetes insipidus results from loss of ADH-producing magnocellular neurons in supraoptic/paraventricular nuclei, presenting as severe polyuria." },
      { overview: "Hipotalamus adalah termostat homeostatis dan pengatur hormonal utama tubuh. Organ ini mengatur suhu tubuh, rasa haus, lapar, siklus tidur, dan keseimbangan otonom.", position: "Terletak tepat di bawah talamus dan di atas kelenjar hipofisis di dasar otak.", mechanism: "Memantau cairan tubuh dan melepaskan hormon pengatur hipofisis serta ADH/oksitosin untuk mengontrol metabolisme dan ekskresi air.", health: "Kerusakan hipotalamus dapat memicu diabetes insipidus (ekskresi urin encer berlebih) dan gangguan suhu tubuh ekstrem." },
      { overview: "Hipotalamus adalah pusat komando ventral diensefalon yang mengoordinasikan sistem otonom dan neuroendokrin melalui aksis hipotalamus-hipofisis.", position: "Membentuk dasar dan dinding ventrikel ketiga, terhubung ke kelenjar hipofisis via tangkai infundibulum.", mechanism: "Nukleus suprakiasmatik (SCN) mengatur ritme sirkadian 24 jam; nukleus supraoptik/paraventrikular menyintesis ADH dan oksitosin.", health: "Hilangnya neuron penghasil ADH di hipotalamus memicu diabetes insipidus sentral dengan gejala poliuria dan polidipsia masif." },
      [
        { question: "Which hypothalamic nucleus functions as the master circadian pacemaker of the human body?", options: ["Suprachiasmatic Nucleus (SCN)", "Arcuate Nucleus", "Ventromedial Nucleus", "Red Nucleus"], answerIndex: 0, explanation: "The suprachiasmatic nucleus (SCN) synchronizes circadian rhythms based on retinal light telemetry." },
        { question: "Which two hormones are synthesized in the hypothalamus and stored in the posterior pituitary?", options: ["Antidiuretic Hormone (ADH) and Oxytocin", "Insulin and Glucagon", "Thyroxine and Calcitonin", "Cortisol and Aldosterone"], answerIndex: 0, explanation: "The supraoptic and paraventricular nuclei synthesize ADH and oxytocin." },
        { question: "What condition is characterized by massive dilute urine excretion due to ADH deficiency from hypothalamic injury?", options: ["Central Diabetes Insipidus", "Type 2 Diabetes", "Cushing's Disease", "Addison's Disease"], answerIndex: 0, explanation: "Deficient ADH secretion results in central diabetes insipidus and profound polyuria." }
      ],
      [
        { question: "Nukleus hipotalamus manakah yang bertindak sebagai pemacu ritme sirkadian utama tubuh?", options: ["Nukleus Suprakiasmatik (SCN)", "Nukleus Arkuata", "Nukleus Ventromedial", "Nukleus Ruber"], answerIndex: 0, explanation: "Nukleus suprakiasmatik (SCN) menyelaraskan ritme biologis tubuh berdasarkan sinyal cahaya dari retina." },
        { question: "Dua hormon apa yang disintesis di hipotalamus dan dialirkan ke hipofisis posterior?", options: ["Hormon Antidiuretik (ADH) dan Oksitosin", "Insulin dan Glukagon", "Tiroksin dan Kalsitonin", "Kortisol dan Aldosteron"], answerIndex: 0, explanation: "Neuron di nukleus supraoptik dan paraventrikular menghasilkan hormon ADH dan oksitosin." },
        { question: "Kondisi apakah yang timbul akibat kekurangan sekresi ADH akibat lesi hipotalamus?", options: ["Diabetes Insipidus Sentral", "Diabetes Tipe 2", "Penyakit Cushing", "Penyakit Addison"], answerIndex: 0, explanation: "Diabetes insipidus sentral menyebabkan ginjal tidak mampu memekatkan urin sehingga terjadi poliuria masif." }
      ],
      ["thalamus", "cerebrum", "brainstem"]
    ),

    "Hippocampus": lesson("nervous", "brain", { EN: "Hippocampus", ID: "Hipokampus" }, "🧬📚",
      { overview: "The hippocampus is your brain's memory consolidator and internal spatial GPS. It transforms short-term experiences into lasting long-term memories and maps out spatial environments.", position: "Curved structure tucked deep inside the medial temporal lobe of each cerebral hemisphere.", mechanism: "Employs neural circuits (Dentate Gyrus, CA1, CA3) and synaptic Long-Term Potentiation (LTP) to bind facts and events before transferring them to the cortex.", health: "One of the earliest structures damaged in Alzheimer's disease, explaining why loss of recent short-term memory is a hallmark early symptom." },
      { overview: "The hippocampal formation consists of the Dentate Gyrus, Cornu Ammonis subfields (CA1-CA4), and Subiculum, executing declarative episodic memory encoding and spatial cognitive mapping via place cells.", position: "Situated along the floor of the inferior horn of the lateral ventricle in the medial temporal lobe.", mechanism: "Utilizes the trisynaptic circuit (perforant path -> mossy fibers -> Schaffer collaterals) and NMDA receptor-dependent Long-Term Potentiation (LTP) for synaptic plasticity.", health: "Bilateral hippocampal lesions cause profound anterograde amnesia (inability to form new declarative memories while sparing remote memories)." },
      { overview: "Hipokampus adalah penyimpan memori dan GPS internal otak Anda. Organ ini mengubah ingatan jangka pendek menjadi memori jangka panjang serta memetakan navigasi ruang.", position: "Struktur melengkung di kedalaman lobus temporal medial pada kedua belahan otak besar.", mechanism: "Menggunakan sirkuit trisinaptik dan Long-Term Potentiation (LTP) untuk mengunci memori fakta dan peristiwa baru.", health: "Merupakan area otak pertama yang terdampak penyakit Alzheimer sehingga memicu hilangnya daya ingat peristiwa baru." },
      { overview: "Formasio hipokampus terdiri dari Girus Dentatus, subbidang CA1-CA4, dan Subikulum yang memproses memori deklaratif dan navigasi spasial.", position: "Terletak di dasar kornu inferior ventrikel lateral pada lobus temporal medial.", mechanism: "Mengandalkan sirkuit trisinaptik dan plastisitas sinaps reseptor NMDA untuk konsolidasi memori.", health: "Kerusakan hipokampus bilateral menyebabkan amnesia anterograd berat di mana pasien tidak mampu membentuk memori deklaratif baru." },
      [
        { question: "What form of memory is primarily consolidated and encoded by the hippocampus?", options: ["Declarative (Episodic and Semantic) Memory", "Procedural Motor Memory", "Cardiac Reflex Memory", "Corneal Refraction"], answerIndex: 0, explanation: "The hippocampus is critical for encoding and consolidating conscious declarative facts and events." },
        { question: "What classic axonal pathway connects the Dentate Gyrus to CA3 pyramidal neurons in the hippocampus?", options: ["Mossy fibers", "Schaffer collaterals", "Corpus callosum", "Anterior commissure"], answerIndex: 0, explanation: "Granule cells of the dentate gyrus project mossy fibers onto CA3 pyramidal neurons." },
        { question: "What clinical syndrome results from bilateral destruction of the hippocampal formations?", options: ["Anterograde amnesia (inability to form new long-term memories)", "Complete blindness", "Total motor paralysis", "Renal failure"], answerIndex: 0, explanation: "Bilateral hippocampal damage prevents the formation of new declarative memories while sparing remote past memories." }
      ],
      [
        { question: "Jenis memori manakah yang paling bergantung pada hipokampus untuk proses konsolidasi?", options: ["Memori Deklaratif (Episodik & Semantik)", "Memori Keterampilan Motorik Prosedural", "Memori Refleks Jantung", "Refraksi Kornea"], answerIndex: 0, explanation: "Hipokampus sangat penting untuk mengubah fakta dan peristiwa baru menjadi memori jangka panjang." },
        { question: "Jalur aksonal apakah yang menghubungkan Girus Dentatus dengan neuron piramidal CA3 pada hipokampus?", options: ["Serat lumut (Mossy fibers)", "Kolateral Schaffer", "Korpus kalosum", "Komisura anterior"], answerIndex: 0, explanation: "Serat lumut memproyeksikan sinyal dari sel granular girus dentatus ke neuron piramidal CA3." },
        { question: "Sindrom klinis apakah yang timbul akibat kerusakan bilateral pada kedua hipokampus?", options: ["Amnesia Anterograd (ketidakmampuan membentuk memori baru)", "Kebutaan total", "Kelumpuhan motorik total", "Gagal ginjal"], answerIndex: 0, explanation: "Kerusakan hipokampus bilateral menghentikan pembentukan memori baru sementara memori lama tetap utuh." }
      ],
      ["thalamus", "cerebrum", "hypothalamus"]
    ),

    // ─── URINARY SYSTEM STRUCTURES ──────────────────────────────────────────
    "Left Kidney": lesson("urinary", "kidneys_bladder", { EN: "Left Kidney", ID: "Ginjal Kiri" }, "🫘👈",
      { overview: "The left kidney sits slightly higher than the right kidney behind your stomach and spleen. It constantly filters blood to purge toxins, balance electrolytes, and regulate blood pressure.", position: "Retroperitoneal on the left side of the spine from T11 to L2, capped by the left adrenal gland.", mechanism: "Over a million nephrons filter blood from the left renal artery, extracting urea, creatinine, and excess fluid into the left ureter.", health: "Left renal calculus (kidney stone) lodging in the renal pelvis produces severe left flank colic radiating to the groin." },
      { overview: "The left kidney (ren sinister) is positioned higher (T11-L2) than the right, drained by the longer left renal vein which crosses anterior to the aorta beneath the superior mesenteric artery.", position: "Retroperitoneal space bounded anteriorly by the stomach, spleen, tail of pancreas, and left colic flexure.", mechanism: "Performs glomerular ultrafiltration (GFR), tubular countercurrent multiplication, and acid-base regulation (H+ excretion, HCO3- reabsorption).", health: "Nutcracker syndrome involves compression of the left renal vein between the SMA and aorta, causing hematuria and left flank pain." },
      { overview: "Ginjal kiri terletak sedikit lebih tinggi dari ginjal kanan di belakang lambung dan limpa. Organ ini menyaring darah untuk membuang racun, menyeimbangkan elektrolit, dan mengatur tekanan darah.", position: "Di rongga retroperitoneal kiri tulang belakang setinggi T11-L2, di bawah kelenjar adrenal kiri.", mechanism: "Lebih dari satu juta nefron menyaring darah dari arteri renalis kiri dan membuang limbah urin ke ureter kiri.", health: "Batu ginjal di pelvis renalis kiri menimbulkan nyeri kolik tajam di pinggang kiri yang menjalar ke lipat paha." },
      { overview: "Ginjal kiri (ren sinister) terletak setinggi T11-L2, dialiri arteri renalis kiri dan vena renalis kiri yang melintasi bagian depan aorta di bawah arteri mesenterika superior.", position: "Ruang retroperitoneal berbatasan anterior dengan lambung, limpa, dan fleksura koli sinistra.", mechanism: "Menjalankan filtrasi glomerulus, pemekatan urin melalui lengkung Henle, serta pengaturan keseimbangan asam-basa tubuh.", health: "Sindrom Nutcracker terjadi saat vena renalis kiri terjepit di antara aorta dan SMA, memicu hematuria dan nyeri pinggang kiri." },
      [
        { question: "Why is the left kidney positioned anatomically higher than the right kidney?", options: ["The right kidney is pushed inferiorly by the large right lobe of the liver", "The left kidney has shorter vascular pedicles", "The spleen pulls the left kidney superiorly", "The stomach pushes down the right kidney"], answerIndex: 0, explanation: "The voluminous liver in the right upper quadrant displaces the right kidney downward by 1-2 cm." },
        { question: "Which vein drains the left kidney and crosses anterior to the abdominal aorta?", options: ["Left Renal Vein", "Inferior Vena Cava", "Left Common Iliac Vein", "Hepatic Portal Vein"], answerIndex: 0, explanation: "The left renal vein has a longer path, coursing across the front of the abdominal aorta into the IVC." },
        { question: "What is the primary filtration unit within the renal cortex and medulla?", options: ["Nephron", "Neuron", "Alveolus", "Hepatocyte"], answerIndex: 0, explanation: "Each kidney houses over 1 million microscopic nephrons executing filtration, reabsorption, and secretion." }
      ],
      [
        { question: "Mengapa ginjal kiri secara anatomis terletak lebih tinggi daripada ginjal kanan?", options: ["Ginjal kanan terdorong ke bawah oleh massa lobus kanan organ hati yang besar", "Ginjal kiri memiliki pembuluh darah yang lebih pendek", "Limpa menarik ginjal kiri ke atas", "Lambung mendorong ginjal kanan ke bawah"], answerIndex: 0, explanation: "Ukuran hati yang besar di kuadran kanan atas mendorong posisi ginjal kanan lebih rendah." },
        { question: "Pembuluh darah vena manakah yang mengalirkan darah dari ginjal kiri melintasi bagian depan aorta?", options: ["Vena Renalis Kiri", "Vena Kava Inferior", "Vena Iliaka Komunis", "Vena Porta Hepatika"], answerIndex: 0, explanation: "Vena renalis kiri berjalan melintasi depan aorta abdominalis sebelum bermuara ke VCI." },
        { question: "Apakah unit fungsional penyaring darah utama di dalam ginjal?", options: ["Nefron", "Neuron", "Alveolus", "Hepatosit"], answerIndex: 0, explanation: "Setiap ginjal memuat lebih dari satu juta nefron yang menyaring darah dan memekatkan urin." }
      ],
      ["right_kidney", "ureter", "urinary_bladder"]
    ),

    "Right Kidney": lesson("urinary", "kidneys_bladder", { EN: "Right Kidney", ID: "Ginjal Kanan" }, "🫘👉",
      { overview: "The right kidney sits on the right side of your spine just beneath the liver. It filters blood constantly to maintain body fluid purity, electrolyte balance, and healthy blood pressure.", position: "Retroperitoneal on the right side of the spine between T12 and L3, positioned slightly lower than the left kidney.", mechanism: "Receives blood from the right renal artery, filtering out waste via nephrons and releasing renin during low blood pressure to activate the RAAS system.", health: "Subject to blunt trauma from right flank impacts and calcium oxalate stone formation in the renal calyces." },
      { overview: "The right kidney (ren dexter) is situated at T12-L3, featuring a shorter right renal vein directly entering the IVC and a longer right renal artery passing posterior to the IVC.", position: "Posterior to the right hepatic lobe, descending duodenum, and right colic flexure, encased in Gerota's fascia.", mechanism: "Juxtaglomerular apparatus (JGA) releases renin in response to decreased renal arterial perfusion or low macula densa sodium chloride delivery.", health: "Renal cell carcinoma (RCC) frequently arises from proximal convoluted tubular epithelium and may invade the right renal vein." },
      { overview: "Ginjal kanan berada di sisi kanan tulang belakang di bawah organ hati. Ginjal kanan bekerja terus-menerus menyaring darah untuk mempertahankan keseimbangan cairan dan elektrolit tubuh.", position: "Di ruang retroperitoneal kanan setinggi T12-L3, dengan posisi sedikit lebih rendah dibanding ginjal kiri.", mechanism: "Menyaring darah dari arteri renalis kanan dan melepaskan hormon renin saat tekanan darah turun untuk mengaktifkan sistem RAAS.", health: "Rentan terhadap benturan tumpul pinggang kanan dan pengendapan batu kalsium oksalat di kaliks ginjal." },
      { overview: "Ginjal kanan (ren dexter) berada di retroperitoneal setinggi T12-L3, memiliki vena renalis kanan pendek dan arteri renalis kanan yang melintas di belakang VCI.", position: "Di posterior lobus kanan hati dan duodenum, terbungkus kapsul ginjal dan fasia Gerota.", mechanism: "Aparatus jukstaglomerulus (JGA) menyekresikan renin saat tekanan perfusi darah ginjal turun untuk memicu vasokonstriksi via sistem RAAS.", health: "Karsinoma sel ginjal (RCC) dapat menginvasi vena renalis kanan dan vena kava inferior jika tidak terdeteksi dini." },
      [
        { question: "Which specialized cellular structure in the kidney releases renin to activate the RAAS pathway during hypotension?", options: ["Juxtaglomerular Apparatus (JGA)", "Bowman's capsule parietal wall", "Loop of Henle bend", "Renal papilla"], answerIndex: 0, explanation: "Juxtaglomerular cells in the afferent arteriole secrete renin when renal perfusion pressure drops." },
        { question: "Which major blood vessel passes anterior to the right renal artery?", options: ["Inferior Vena Cava (IVC)", "Superior Mesenteric Artery", "Celiac Trunk", "Left Renal Vein"], answerIndex: 0, explanation: "The right renal artery courses behind the inferior vena cava on its path from the aorta to the right kidney." },
        { question: "What fibrous connective tissue fascia encases the kidney, adrenal gland, and perinephric fat?", options: ["Gerota's Fascia (Renal Fascia)", "Fascia Lata", "Scarpa's Fascia", "Camper's Fascia"], answerIndex: 0, explanation: "Gerota's fascia anchors and cushions the retroperitoneal kidney within perinephric adipose tissue." }
      ],
      [
        { question: "Struktur seluler khusus apakah di ginjal yang melepaskan hormon renin untuk meningkatkan tekanan darah?", options: ["Aparatus Jukstaglomerulus (JGA)", "Kapsula Bowman", "Lengkung Henle", "Papila Renalis"], answerIndex: 0, explanation: "Sel jukstaglomerulus pada arteriol aferen mensekresi renin saat tekanan darah ginjal menurun." },
        { question: "Pembuluh darah besar apakah yang melintas di depan arteri renalis kanan?", options: ["Vena Kava Inferior (VCI)", "Arteri Mesenterika Superior", "Trunkus Seliakus", "Vena Renalis Kiri"], answerIndex: 0, explanation: "Arteri renalis kanan berjalan di belakang vena kava inferior untuk mencapai hilum ginjal kanan." },
        { question: "Fasia fibrosa kuat apakah yang membungkus ginjal dan lemak perirenal di rongga retroperitoneal?", options: ["Fasia Gerota (Fasia Renalis)", "Fasia Lata", "Fasia Scarpa", "Fasia Camper"], answerIndex: 0, explanation: "Fasia Gerota membungkus dan menambatkan posisi ginjal di dinding posterior abdomen." }
      ],
      ["left_kidney", "ureter", "urinary_bladder"]
    ),

    "Ureter": lesson("urinary", "kidneys_bladder", { EN: "Ureter", ID: "Ureter" }, "🧪🚰",
      { overview: "The ureters are two muscular conduits that transport urine drop-by-drop from each kidney down into the urinary bladder.", position: "Descends retroperitoneally from the renal pelvis along the posterior abdominal wall into the pelvic cavity.", mechanism: "Smooth muscle walls contract rhythmically (peristalsis) every 10 to 30 seconds to propel urine downward independent of gravity.", health: "Kidney stones traveling down the narrow ureter cause excruciating spasmodic pain (ureteral colic) and blood in the urine." },
      { overview: "The ureters are paired retroperitoneal muscular tubes (25-30 cm long) lined with transitional epithelium (urothelium) and double smooth muscle coats.", position: "Originates at the ureteropelvic junction (UPJ), crosses the pelvic brim over the iliac vessel bifurcation, and enters the bladder obliquely at the UVJ.", mechanism: "Myogenic pacemaker cells in renal calyces trigger peristaltic waves; oblique intramural passage through the detrusor forms a physiological flap valve preventing vesicoureteral reflux (VUR).", health: "Three physiological constriction sites (UPJ, pelvic brim crossing, UVJ) represent classic lodgement points for renal calculi." },
      { overview: "Ureter adalah dua saluran pipa berotot yang mengalirkan urin tetes demi tetes dari ginjal ke kandung kemih.", position: "Turun di sepanjang dinding belakang rongga perut masuk ke dalam rongga panggul.", mechanism: "Dinding otot polosnya berkontraksi secara ritmis (gelombang peristalsis) setiap 10-30 detik untuk mendorong urin ke bawah.", health: "Batu ginjal yang tersangkut di penyempitan saluran ureter memicu nyeri kolik hebat disertai kencing berdarah." },
      { overview: "Ureter adalah sepasang saluran berotot retroperitoneal sepanjang 25-30 cm yang dilapisi epitel transisional (urotelium).", position: "Bermula dari taut ureteropelvis (UPJ), melintasi tepi panggul di atas pembuluh iliaka, dan menembus dinding kandung kemih secara miring di UVJ.", mechanism: "Kontraksi peristalsis otot polos mendorong urin; jalur oblik intramural mencegah aliran balik urin (refluks vesikoureter).", health: "Tiga penyempitan anatomis rawan sumbatan batu: UPJ, persilangan vaskular iliaka, dan sambungan UVJ." },
      [
        { question: "What physiological mechanism actively pumps urine down the ureters into the bladder?", options: ["Rhythmic smooth muscle peristalsis", "Passive gravitational flow alone", "Negative suction pressure from bladder", "Voluntary skeletal muscle pumping"], answerIndex: 0, explanation: "Myogenic peristaltic waves propagate through the ureteral smooth muscle wall to pump urine downward." },
        { question: "What structural feature at the ureterovesical junction (UVJ) prevents backwards urine reflux?", options: ["Oblique intramural tunnel through the detrusor that closes under bladder pressure", "Rigid cartilage flap valve", "Voluntary sphincter ring", "Continuous mucus seal"], answerIndex: 0, explanation: "The oblique intramural passage collapses shut as intravesical bladder pressure rises during filling." },
        { question: "Which of the following is NOT a classic physiological constriction site of the ureter?", options: ["Hepatic flexure crossing", "Ureteropelvic junction (UPJ)", "Pelvic brim crossing over iliac vessels", "Ureterovesical junction (UVJ)"], answerIndex: 0, explanation: "The three anatomical constriction sites are UPJ, crossing the pelvic brim/iliac vessels, and UVJ." }
      ],
      [
        { question: "Mekanisme fisiologis apakah yang aktif mendorong urin menuruni ureter menuju kandung kemih?", options: ["Gelombang peristalsis otot polos ureter yang ritmis", "Hanya gaya gravitasi pasif semata", "Tekanan hisap negatif kandung kemih", "Pompa otot rangka sadar"], answerIndex: 0, explanation: "Kontraksi peristalsis otot polos secara aktif memompa urin bahkan saat tubuh dalam posisi berbaring." },
        { question: "Struktur apakah pada taut ureterovesikal (UVJ) yang mencegah aliran balik (refluks) urin ke ginjal?", options: ["Saluran oblik intramural yang tertekan dan menutup saat kandung kemih terisi", "Katup tulang rawan kaku", "Cincin sfinkter sadar", "Penyumbat lendir tebal"], answerIndex: 0, explanation: "Ureter menembus dinding kandung kemih secara miring sehingga saat kandung kemih mengembang, saluran tersebut otomatis terjepit rapat." },
        { question: "Manakah di bawah ini yang BUKAN merupakan salah satu dari 3 titik penyempitan anatomis ureter?", options: ["Persilangan fleksura hepatika", "Taut Ureteropelvis (UPJ)", "Persilangan vaskular iliaka di pintu atas panggul", "Taut Ureterovesikal (UVJ)"], answerIndex: 0, explanation: "Tiga penyempitan alami ureter adalah UPJ, persilangan pembuluh iliaka, dan taut UVJ." }
      ],
      ["left_kidney", "right_kidney", "urinary_bladder"]
    ),

    "Urinary Bladder": lesson("urinary", "kidneys_bladder", { EN: "Urinary Bladder", ID: "Kandung Kemih" }, "🎈💧",
      { overview: "The urinary bladder is an expandable muscular reservoir that stores urine until it is convenient to empty it.", position: "Located on the pelvic floor behind the pubic bone (pubic symphysis).", mechanism: "Relaxes to expand and store up to 500 mL of urine; during urination, the detrusor muscle contracts while sphincters relax under nervous coordination.", health: "Urinary tract infections (UTIs / cystitis) inflame the bladder lining, causing burning urination (dysuria) and urinary urgency." },
      { overview: "The urinary bladder (vesica urinaria) is a distensible pelvic reservoir composed of the detrusor muscle (meshwork of 3 smooth muscle layers), mucosal urothelium, and the triangular trigone.", position: "Subperitoneal pelvic space posterior to the pubic symphysis and anterior to rectum/uterus.", mechanism: "Micturition reflex: S2-S4 pelvic splanchnic parasympathetic stimulation excites detrusor muscarinic M3 receptors and relaxes internal sphincter; pudendal nerve relaxes external urethral sphincter.", health: "Urinary retention from BPH or neurogenic bladder leads to hydronephrosis and progressive renal impairment if untreated." },
      { overview: "Kandung kemih adalah kantung berotot elastis yang menampung urin secara nyaman hingga saatnya buang air kecil.", position: "Terletak di dasar panggul, tepat di belakang tulang kemaluan (simfisis pubis).", mechanism: "Meregang untuk menampung hingga 500 mL urin; saat berkemih, otot detrusor berkontraksi mengeluarkan urin.", health: "Infeksi saluran kemih (sistitis) menyebabkan rasa perih terbakar saat berkemih (disuria) dan anyang-anyangan." },
      { overview: "Kandung kemih (vesica urinaria) adalah reservoir panggul subperitoneal yang tersusun dari otot detrusor, urotelium, dan trigonum vesika.", position: "Di rongga panggul posterior simfisis pubis dan anterior rektum/uterus.", mechanism: "Refleks miksi dipicu persarafan parasimpatis S2-S4 yang merangsang reseptor M3 detrusor dan merelaksasi sfinkter uretra.", health: "Retensi urin kronis akibat pembesaran prostat (BPH) dapat memicu refluks hidronefrosis dan gagal ginjal." },
      [
        { question: "What is the primary smooth muscle of the urinary bladder wall that contracts to expel urine?", options: ["Detrusor muscle", "Pyloric sphincter", "Dartos muscle", "Rectus abdominis"], answerIndex: 0, explanation: "The detrusor muscle forms the muscular wall of the bladder, contracting during micturition." },
        { question: "What smooth triangular mucosal area at the base of the bladder is bounded by the two ureteral orifices and the internal urethral orifice?", options: ["Trigone of the bladder", "Renal papilla", "Perineal body", "Corpus spongiosum"], answerIndex: 0, explanation: "The trigone is a smooth, highly sensitive triangular mucosal region anchored to the bladder base." },
        { question: "Which branch of the autonomic nervous system stimulates detrusor contraction and initiates bladder voiding?", options: ["Parasympathetic nervous system (S2-S4 pelvic splanchnic nerves)", "Sympathetic nervous system (T11-L2)", "Somatic system only", "Enteric nervous system"], answerIndex: 0, explanation: "Parasympathetic pelvic splanchnic outflow stimulates detrusor contraction via acetylcholine on muscarinic receptors." }
      ],
      [
        { question: "Otot polos utama penyusun dinding kandung kemih yang berkontraksi saat proses buang air kecil disebut?", options: ["Otot Detrusor", "Sfinkter Pilorus", "Otot Dartos", "Rektus Abdominis"], answerIndex: 0, explanation: "Otot detrusor berkontraksi saat dirangsang oleh saraf parasimpatis untuk mengosongkan urin." },
        { question: "Area segitiga halus di dasar kandung kemih yang dibatasi oleh dua lubang ureter dan lubang uretra interna disebut?", options: ["Trigonum Kandung Kemih (Trigone)", "Papila Renalis", "Korpus Perineal", "Korpus Spongiosum"], answerIndex: 0, explanation: "Trigonum adalah area mukosa segitiga yang sangat peka terhadap regangan volume urin." },
        { question: "Cabang sistem saraf otonom manakah yang merangsang kontraksi otot detrusor untuk memulai buang air kecil?", options: ["Sistem Saraf Parasimpatis (S2-S4 saraf splanknikus panggul)", "Sistem Saraf Simpatis (T11-L2)", "Hanya sistem saraf somatik", "Sistem saraf enterik"], answerIndex: 0, explanation: "Saraf parasimpatis melepaskan asetilkolin yang memicu kontraksi otot detrusor kandung kemih." }
      ],
      ["ureter", "left_kidney", "right_kidney"]
    ),

    // ─── SKELETAL SYSTEM STRUCTURES ─────────────────────────────────────────
    "Atlas (C1)": lesson("skeletal", "skull_spine", { EN: "Atlas (C1)", ID: "Atlas (C1)" }, "🌐🔄",
      { overview: "The Atlas (C1) is the topmost vertebra of your neck supporting your skull, named after the mythical titan who held up the heavens. It allows you to nod your head 'yes'.", position: "The very first cervical vertebra, located immediately below the base of the skull.", mechanism: "Forms a ring without a vertebral body, featuring deep concave facets where the skull's occipital condyles rock forward and backward.", health: "Axial compression trauma (such as diving into shallow water) can cause a Jefferson burst fracture of the C1 ring." },
      { overview: "The atlas (C1) is an atypical ring-like cervical vertebra composed of anterior and posterior arches and paired lateral masses with superior concave articular facets.", position: "Articulates superiorly with occipital condyles (atlanto-occipital joint) and inferiorly with the axis C2 (atlanto-axial joint).", mechanism: "Atlanto-occipital synovial joints permit ~15 degrees of sagittal flexion/extension (nodding). The transverse ligament of the atlas braces the dens of C2 against the anterior arch.", health: "Rupture of the transverse ligament produces atlantoaxial subluxation and catastrophic cervical myelopathy." },
      { overview: "Tulang Atlas (C1) adalah ruas tulang leher pertama yang menopang langsung tengkorak kepala. Tulang ini memungkinkan gerakan mengangguk 'ya'.", position: "Ruas tulang leher teratas, terletak persis di bawah dasar tengkorak.", mechanism: "Berbentuk cincin tanpa korpus vertebra dengan faset cekung tempat kondilus oksipital tengkorak berayun.", health: "Trauma benturan aksial pada puncak kepala dapat memicu fraktur ledakan Jefferson pada cincin C1." },
      { overview: "Atlas (C1) adalah vertebra servikal atipikal berbentuk cincin yang terdiri dari arkus anterior/posterior dan massa lateral dengan faset superior cekung.", position: "Bersendi di superior dengan kondilus oksipitalis dan di inferior dengan vertebra aksis (C2).", mechanism: "Sendi atlanto-oksipitalis memfasilitasi fleksi-ekstensi sagital (mengangguk). Ligamen transversum atlas menahan prosesus odontoideus dens C2.", health: "Ruptur ligamen transversum atlas memicu instabilitas atlantoaksial berat yang menekan sumsum tulang leher." },
      [
        { question: "Which primary motion is executed at the atlanto-occipital joint between the skull and the C1 Atlas?", options: ["Sagittal flexion and extension (Nodding 'yes')", "Axial rotation (Shaking head 'no')", "Lateral hip abduction", "Shoulder circumduction"], answerIndex: 0, explanation: "Occipital condyles rock on the superior articular facets of C1 to produce sagittal head nodding." },
        { question: "What unique anatomical feature characterizes the C1 Atlas compared to typical vertebrae?", options: ["It lacks a vertebral body and spinous process, forming a ring", "It has the largest spinous process", "It has fused costal ribs", "It possesses no transverse foramina"], answerIndex: 0, explanation: "The atlas lacks both a body (centrum) and spinous process, consisting of anterior and posterior arches." },
        { question: "What vital ligament prevents the dens of C2 from displacing posterior into the spinal cord?", options: ["Transverse ligament of the atlas", "Ligamentum flavum", "Supraspinous ligament", "Anterior longitudinal ligament"], answerIndex: 0, explanation: "The transverse ligament spans between the lateral masses of C1 to securely hold the dens in place." }
      ],
      [
        { question: "Gerakan apakah yang utamanya difasilitasi oleh sendi atlanto-oksipitalis antara tengkorak dan atlas (C1)?", options: ["Fleksi dan ekstensi sagital (Mengangguk 'ya')", "Rotasi aksial leher (Menggeleng 'tidak')", "Abduksi sendi panggul", "Sirkumduksi bahu"], answerIndex: 0, explanation: "Sendi atlanto-oksipitalis memungkinkan tengkorak berayun ke depan dan belakang untuk mengangguk." },
        { question: "Ciri khas anatomis apakah yang membedakan vertebra C1 Atlas dari ruas tulang belakang lainnya?", options: ["Tidak memiliki korpus vertebra dan taju duri, melainkan berbentuk cincin", "Memiliki taju duri terbesar di seluruh tulang belakang", "Memiliki tulang rusuk menyatu", "Tidak memiliki lubang foramen transversarium"], answerIndex: 0, explanation: "Atlas tidak memiliki badan vertebra maupun prosesus spinosus, melainkan berbentuk cincin arkus." },
        { question: "Ligamen penting apakah yang menahan tonjolan dens C2 agar tidak bergeser menekan sumsum tulang leher?", options: ["Ligamen transversum atlas", "Ligamentum flavum", "Ligamen supraspinosum", "Ligamen longitudinal anterior"], answerIndex: 0, explanation: "Ligamen transversum atlas membentang kokoh di belakang dens untuk mengunci posisinya." }
      ],
      ["c2_axis", "c3_vertebra", "cranium"]
    ),

    "Axis (C2)": lesson("skeletal", "skull_spine", { EN: "Axis (C2)", ID: "Axis (C2)" }, "🔄⚙️",
      { overview: "The Axis (C2) is the second neck vertebra featuring a tooth-like vertical axle (the dens) that allows your head to rotate side-to-side to say 'no'.", position: "Situated in the upper neck immediately below the C1 Atlas vertebra.", mechanism: "The C1 Atlas ring rotates around the central vertical dens peg of C2, producing ~50% of your neck's total rotation range.", health: "Violent hyperextension trauma (such as high-speed motor vehicle crashes) can cause a Hangman's fracture through the pars interarticularis of C2." },
      { overview: "The axis (C2) is distinguished by the superior odontoid process (dens), large convex superior articular facets, and a bifid spinous process.", position: "Articulates superiorly with the C1 atlas at the pivot atlanto-axial joint and inferiorly with C3.", mechanism: "The median and lateral atlanto-axial joints permit ~50 degrees of axial head rotation, checked by bilateral alar ligaments anchoring the dens apex to the occiput.", health: "Type II dens fractures through the base have high nonunion rates due to tenuous watershed microvascular supply." },
      { overview: "Tulang Aksis (C2) adalah ruas tulang leher kedua dengan tonjolan mirip pasak gigi (dens) sebagai poros putar kepala untuk menggeleng 'tidak'.", position: "Terletak di leher bagian atas persis di bawah tulang C1 atlas.", mechanism: "Cincin C1 berputar mengelilingi pasak dens C2, menyumbang sekitar 50% dari total rentang putaran rotasi leher.", health: "Trauma hiperekstensi leher mendadak dapat mematahkan arkus bilateral C2 (Fraktur Hangman)." },
      { overview: "Aksis (C2) dicirikan oleh prosesus odontoideus (dens), faset artikular superior lebar, dan prosesus spinosus bifida.", position: "Bersendi di superior dengan atlas (C1) dan di inferior dengan vertebra C3.", mechanism: "Sendi putar atlanto-aksialis menghasilkan ~50 derajat rotasi kepala pada bidang transversal yang dibatasi ligamen alar.", health: "Fraktur odontoid dens Tipe II pada basis dens memiliki risiko gagal sambung (nonunion) tinggi akibat vaskularisasi terbatas." },
      [
        { question: "What prominent vertical projection of the C2 Axis serves as the pivot axle for head rotation?", options: ["Dens (Odontoid Process)", "Spinous process", "Xiphoid process", "Greater trochanter"], answerIndex: 0, explanation: "The dens projects superiorly from the body of C2, serving as the pivot axis for head rotation." },
        { question: "What paired check ligaments extend from the dens to the occipital condyles to limit excessive rotation?", options: ["Alar ligaments", "Ligamentum nuchae", "Cruciate ligament", "Interspinous ligament"], answerIndex: 0, explanation: "The alar ligaments check and limit axial rotation of the cranium upon C2." },
        { question: "What fracture eponym describes traumatic bilateral spondylolisthesis of the C2 pars interarticularis?", options: ["Hangman's Fracture", "Jefferson Fracture", "Colles' Fracture", "Smith's Fracture"], answerIndex: 0, explanation: "Hangman's fracture is a bilateral fracture through the pedicles/pars interarticularis of C2." }
      ],
      [
        { question: "Tonjolan vertikal menonjol apakah pada vertebra C2 Aksis yang bertindak sebagai poros putar bagi cincin C1?", options: ["Dens (Prosesus Odontoideus)", "Taju duri (Prosesus Spinosus)", "Prosesus Xifoideus", "Trokanter Mayor"], answerIndex: 0, explanation: "Dens adalah pasak silinder vertikal C2 yang menjadi poros kepala saat menggeleng." },
        { question: "Sepasang ligamen apakah yang membentang dari puncak dens ke kondilus oksipital untuk membatasi rotasi leher?", options: ["Ligamen Alar", "Ligamentum Nukhae", "Ligamen Krusiatum", "Ligamen Interspinosum"], answerIndex: 0, explanation: "Ligamen alar membatasi rentang putaran kepala agar tidak mencederai saraf leher." },
        { question: "Fraktur bilateral pada pars interartikularis C2 akibat trauma hiperekstensi leher dikenal sebagai?", options: ["Fraktur Hangman", "Fraktur Jefferson", "Fraktur Colles", "Fraktur Smith"], answerIndex: 0, explanation: "Fraktur Hangman adalah fraktur spondilolistesis traumatik pada arkus neuralis vertebra C2 aksis." }
      ],
      ["c1_atlas", "c3_vertebra"]
    ),

    "Tibia": lesson("skeletal", "limbs_pelvis", { EN: "Tibia", ID: "Tibia (Tulang Kering)" }, "🦴🏃",
      { overview: "The tibia (shinbone) is the large, strong bone located on the front of your lower leg. It bears almost all of your body weight when standing and walking.", position: "Situated on the medial (inner) side of the lower leg, between the knee joint above and the ankle joint below.", mechanism: "Its wide flat top (tibial plateau) supports the femur, transmitting downward forces directly into the talus bone of the foot via the medial malleolus.", health: "Running on hard surfaces with inadequate footwear can cause tibial stress fractures or painful shin splints (medial tibial stress syndrome)." },
      { overview: "The tibia is the primary weight-bearing column of the crural skeleton, featuring medial/lateral condyles, intercondylar eminence, tibial tuberosity, anterior border (shin crest), and distal medial malleolus.", position: "Articulates proximally with the femoral condyles and fibular head, and distally with the talus at the talocrural ankle mortise.", mechanism: "Bears approximately 85-90% of total axial ground reaction forces transmitted through the lower extremity. The anterior border is subcutaneous along its entire length.", health: "Open tibial shaft fractures carry high risks of osteomyelitis and anterior compartment syndrome due to subcutaneous location and delicate periosteal vascular watershed zones." },
      { overview: "Tibia (tulang kering) adalah tulang besar dan kuat di bagian depan tungkai bawah Anda. Tulang ini menopang hampir seluruh beban tubuh saat Anda berdiri dan melangkah.", position: "Terletak di sisi medial (dalam) tungkai bawah, membentang dari lutut di bagian atas hingga pergelangan kaki di bagian bawah.", mechanism: "Permukaan atasnya yang datar menopang kondilus femur, menyalurkan seluruh beban tubuh ke tulang pergelangan kaki melalui maleolus medial.", health: "Lari berlebih di permukaan keras tanpa alas kaki yang empuk dapat memicu peradangan 'shin splints' atau fraktur stres tulang kering." },
      { overview: "Tibia adalah tulang panjang penopang beban utama tungkai bawah (~85-90% beban aksial), terdiri dari kondilus medial/lateral, tuberositas tibia, dan maleolus medialis.", position: "Bersendi di proksimal dengan femur dan fibula, serta di distal dengan talus membentuk sendi pergelangan kaki.", mechanism: "Menopang gaya tekan aksial tubuh pada tungkai bawah dengan tepi anterior tepat di bawah kulit.", health: "Fraktur terbuka batang tibia memiliki risiko tinggi osteomielitis dan sindrom kompartemen anterior." },
      [
        { question: "What percentage of axial body weight is transmitted through the tibia compared to the fibula during standing?", options: ["Approximately 85-90% through the tibia", "50% tibia and 50% fibula equally", "Only 10% through the tibia", "0% (the fibula bears all weight)"], answerIndex: 0, explanation: "The tibia is the primary weight-bearing pillar, taking ~85-90% of the axial load, while the fibula takes ~10-15%." },
        { question: "What prominent subcutaneous bony landmark of the distal medial tibia forms the inner ankle bump?", options: ["Medial Malleolus", "Lateral Malleolus", "Tibial Tuberosity", "Greater Trochanter"], answerIndex: 0, explanation: "The medial malleolus forms the inner wall of the talocrural ankle mortise." },
        { question: "Where does the patellar tendon (quadriceps tendon) insert on the proximal anterior tibia?", options: ["Tibial Tuberosity", "Intercondylar Eminence", "Medial Condyle", "Fibular Notch"], answerIndex: 0, explanation: "The patellar ligament anchors onto the tibial tuberosity to execute knee extension." }
      ],
      [
        { question: "Berapa persentase beban tubuh aksial yang ditopang oleh tulang tibia dibanding fibula saat berdiri tegak?", options: ["Sekitar 85-90% ditopang oleh tibia", "50% tibia dan 50% fibula terbagi rata", "Hanya 10% beban pada tibia", "0% (fibula menopang seluruh beban)"], answerIndex: 0, explanation: "Tibia adalah pilar penopang beban utama tungkai bawah (~85-90%)." },
        { question: "Tonjolan tulang medial apakah di ujung bawah tibia yang membentuk tonjolan mata kaki bagian dalam?", options: ["Maleolus Medialis", "Maleolus Lateralis", "Tuberositas Tibia", "Trokanter Mayor"], answerIndex: 0, explanation: "Maleolus medialis adalah dinding kokoh pergelangan kaki bagian dalam tempat bersendi dengan tulang talus." },
        { question: "Di bagian proksimal anterior tibia manakah ligamen patela (tendon paha depan kuadriseps) melekat?", options: ["Tuberositas Tibia", "Eminensia Interkondilaris", "Kondilus Medial", "Faset Fibula"], answerIndex: 0, explanation: "Ligamen patela berinsersi pada tuberositas tibia untuk meluruskan sendi lutut." }
      ],
      ["femur", "fibula", "pelvis"]
    ),

    "Radius": lesson("skeletal", "limbs_pelvis", { EN: "Radius", ID: "Radius (Tulang Pengumpil)" }, "🦾🖐️",
      { overview: "The radius is the lateral bone of your forearm on the thumb side. It enables you to twist your forearm to flip your palm up (supination) or down (pronation).", position: "Located on the outer (lateral) thumb-side of your forearm between the elbow and the wrist.", mechanism: "Its disc-like head spins smoothly against the capitulum of the humerus and radial notch of the ulna, pivoting the entire hand 180 degrees.", health: "Landing on an outstretched hand (FOOSH) frequently breaks the distal radius, known as a Colles' wrist fracture with a 'dinner-fork' deformity." },
      { overview: "The radius is the lateral long bone of the antebrachium, featuring a proximal cylindrical head, neck, radial tuberosity, bowed diaphysis, and expanded distal end with the styloid process and carpal articular facets.", position: "Articulates proximally with the humeral capitulum and ulnar radial notch; distally with the scaphoid and lunate at the radiocarpal wrist joint.", mechanism: "During pronation, pronator muscles pull the distal radius across the stationary ulna.", health: "Colles' fracture (dorsally displaced distal radius fracture) is the most common wrist fracture in adults following falls." },
      { overview: "Radius (tulang pengumpil) adalah tulang lengan bawah di sisi ibu jari (jempol). Tulang ini memungkinkan Anda memutar telapak tangan menghadap ke atas (supinasi) atau ke bawah (pronasi).", position: "Terletak di sisi luar (lateral) lengan bawah searah jempol tangan, membentang dari siku hingga pergelangan tangan.", mechanism: "Kepala bulat pipihnya berputar pada kapitulum humerus dan lekukan ulna, memutar telapak tangan hingga 180 derajat.", health: "Terjatuh dengan posisi tangan menumpu (FOOSH) sering menyebabkan patah tulang radius distal (Fraktur Colles)." },
      { overview: "Radius adalah tulang panjang lateral antebrakium dengan kaput silindris, tuberositas radii, dan faset artikular distal untuk os skafoid dan lunatum.", position: "Bersendi di proksimal dengan kapitulum humerus dan di distal dengan skafoid/lunatum membentuk sendi pergelangan tangan radiokarpal.", mechanism: "Saat pronasi, otot pronator menarik radius distal melintasi ulna yang tetap diam.", health: "Fraktur Colles (fraktur radius distal dengan pergeseran dorsal) menghasilkan deformitas garpu makan." },
      [
        { question: "What primary forearm rotational movement occurs when the radius pivots parallel to the ulna to turn the palm upward?", options: ["Supination", "Pronation", "Adduction", "Circumduction"], answerIndex: 0, explanation: "Supination rotates the radius parallel to the ulna, orienting the palm upward." },
        { question: "Which two carpal bones of the wrist directly articulate with the distal articular surface of the radius?", options: ["Scaphoid and Lunate", "Hamate and Capitate", "Pisiform and Triquetrum", "Trapezium and Trapezoid"], answerIndex: 0, explanation: "The distal radiocarpal joint forms between the radial articular surface, scaphoid, and lunate." },
        { question: "What classic distal radius fracture with dorsal displacement typically results from a fall onto an outstretched hand (FOOSH)?", options: ["Colles' Fracture", "Jefferson Fracture", "Jones Fracture", "Pott's Fracture"], answerIndex: 0, explanation: "A Colles' fracture is a distal radius fracture with dorsal displacement resulting in a 'dinner fork' deformity." }
      ],
      [
        { question: "Gerakan rotasi lengan bawah apakah yang terjadi saat tulang radius berputar membuka telapak tangan menghadap ke atas?", options: ["Supinasi", "Pronasi", "Adduksi", "Sirkumduksi"], answerIndex: 0, explanation: "Supinasi adalah gerakan memutar radius sejajar dengan ulna hingga telapak tangan menghadap ke atas." },
        { question: "Dua tulang pergelangan tangan (karpal) manakah yang bersendi langsung dengan ujung distal tulang radius?", options: ["Skafoid dan Lunatum", "Hamatum dan Kapitatum", "Pisiforme dan Trikwetrum", "Trapesium dan Trapesoid"], answerIndex: 0, explanation: "Sendi pergelangan tangan radiokarpal dibentuk oleh faset distal radius yang bersendi dengan os skafoid dan lunatum." },
        { question: "Patah tulang radius distal dengan pergeseran patahan ke belakang (dorsal) akibat jatuh bertumpu tangan dikenal sebagai?", options: ["Fraktur Colles", "Fraktur Jefferson", "Fraktur Jones", "Fraktur Pott"], answerIndex: 0, explanation: "Fraktur Colles adalah fraktur radius distal klasik yang menghasilkan bentuk deformitas garpu makan." }
      ],
      ["humerus", "biceps", "ulna"]
    ),

    "Clavicle (Right)": lesson("skeletal", "limbs_pelvis", { EN: "Clavicle (Right)", ID: "Klavikula / Tulang Selangka (Kanan)" }, "🪃🦴",
      { overview: "The clavicle (collarbone) is an S-shaped horizontal strut that bridges your breastbone to your shoulder, keeping your arms held out away from your chest for wide mobility.", position: "Stretches horizontally across the top front of your chest just above the first rib.", mechanism: "Acts as a rigid horizontal crane that transmits physical shocks from your arm directly to the central axial skeleton.", health: "One of the most frequently fractured bones in the body, usually broken at the junction of its middle and lateral thirds during sports falls." },
      { overview: "The clavicle is the only horizontal long bone in the human skeleton, connecting the appendicular upper limb to the axial sternum via the Sternoclavicular (SC) and Acromioclavicular (AC) synovial joints.", position: "Superior to the first rib, with its convex medial two-thirds articulating with the manubrium of the sternum and concave lateral third articulating with the acromion of the scapula.", mechanism: "Maintains the glenohumeral joint away from the thoracic cage, allowing 360-degree circumduction. Subclavian vessels and brachial plexus pass beneath its middle third.", health: "Middle-third clavicular fractures can endanger the underlying subclavian artery/vein and brachial plexus chords if severely displaced." },
      { overview: "Klavikula (tulang selangka) adalah tulang horizontal berbentuk huruf S yang menghubungkan tulang dada dengan tulang belikat, menjaga bahu tetap kokoh dan leluasa bergerak.", position: "Membentang horizontal di dada bagian atas di depan leher, tepat di atas tulang rusuk pertama.", mechanism: "Bertindak seperti penyangga mekanis yang menyalurkan beban dan benturan dari lengan ke kerangka dada tengah.", health: "Merupakan salah satu tulang yang paling sering patah dalam tubuh, terutama pada titik peralihan sepertiga tengah akibat jatuh dengan tumpuan bahu." },
      { overview: "Klavikula adalah satu-satunya tulang panjang yang terletak secara horizontal dalam tubuh manusia, menghubungkan kerangka lengan dengan tulang dada aksial via sendi Sternoklavikular (SC) dan Akromioklavikular (AC).", position: "Terletak di atas iga pertama, dua pertiga medialnya cembung bersendi dengan manubrium sterni dan sepertiga lateralnya cekung bersendi dengan akromion skapula.", mechanism: "Menahan sendi bahu agar terbebas dari dinding dada untuk memungkinkan rentang sirkumduksi gerak lengan yang luas.", health: "Fraktur sepertiga tengah klavikula yang bergeser jauh berisiko mencederai pembuluh darah subklavia dan serabut saraf pleksus brakialis di bawahnya." },
      [
        { question: "What is the only bony articulation connecting the upper extremity (shoulder girdle) to the axial skeleton?", options: ["Sternoclavicular (SC) Joint", "Acromioclavicular (AC) Joint", "Glenohumeral Joint", "Scapulothoracic articulation"], answerIndex: 0, explanation: "The sternoclavicular joint is the solitary true synovial joint anchoring the pectoral girdle to the axial sternum." },
        { question: "At which anatomical location does the clavicle most frequently fracture during traumatic shoulder impacts?", options: ["Junction of the middle and lateral thirds", "Sternoclavicular facet", "Acromial tip", "Conoid tubercle"], answerIndex: 0, explanation: "The transition between the convex medial two-thirds and concave lateral one-third is the mechanical weak point of the bone." },
        { question: "Which major neurovascular bundle passes immediately inferior to the middle third of the clavicle?", options: ["Subclavian vessels and Brachial Plexus", "Femoral nerve and artery", "Carotid sheath", "Radial artery"], answerIndex: 0, explanation: "The subclavian artery, subclavian vein, and trunks of the brachial plexus pass beneath the clavicle." }
      ],
      [
        { question: "Sendi tulang satu-satunya apakah yang menghubungkan kerangka anggota gerak atas (bahu) dengan kerangka aksial tubuh?", options: ["Sendi Sternoklavikular (SC)", "Sendi Akromioklavikular (AC)", "Sendi Glenohumeral", "Artikulasi Skapulotorasik"], answerIndex: 0, explanation: "Sendi sternoklavikular adalah satu-satunya persendian sejati yang mengaitkan gelang bahu dengan tulang dada (sternum)." },
        { question: "Di bagian manakah tulang klavikula paling sering mengalami patah tulang (fraktur) akibat benturan bahu?", options: ["Taut sepertiga tengah dan sepertiga lateral", "Faset sternal", "Ujung akromion", "Tuberkulum konoid"], answerIndex: 0, explanation: "Titik peralihan antara kurvatura medial dan lateral merupakan titik paling rentan terhadap gaya puntir dan benturan." },
        { question: "Struktur neurovaskular penting apakah yang berjalan persis di bawah sepertiga tengah tulang selangka (klavikula)?", options: ["Pembuluh darah subklavia dan Pleksus Brakialis", "Saraf dan arteri femoralis", "Selubung karotis", "Arteri radialis"], answerIndex: 0, explanation: "Arteri subklavia, vena subklavia, dan berkas saraf pleksus brakialis melintas di bawah klavikula menuju lengan." }
      ],
      ["scapula", "humerus", "radius"]
    ),

    // ─── MUSCULAR SYSTEM STRUCTURES ─────────────────────────────────────────
    "Pectoralis Major": lesson("muscular", "muscles_group", { EN: "Pectoralis Major", ID: "Otot Pektoralis Mayor" }, "🛡️💪",
      { overview: "The pectoralis major is the large fan-shaped muscle of the chest. It powers pushing movements, hugging, and pulling your arms across your chest.", position: "Covers the anterior chest wall from the collarbone and sternum to the upper arm.", mechanism: "When it contracts, it pulls the upper arm bone inward toward your chest (adduction) and rotates it inward (internal rotation).", health: "Heavy bench pressing without proper form can tear the pectoralis major tendon at its humeral insertion." },
      { overview: "The pectoralis major is a thick, fan-shaped muscle composed of two distinct heads: a clavicular head (medial clavicle) and a sternocostal head (sternum and upper 6 costal cartilages), innervated by both medial and lateral pectoral nerves (C5-T1).", position: "Forms the anterior wall of the axilla, inserting onto the lateral lip of the intertubercular (bicipital) sulcus of the humerus.", mechanism: "Executes powerful adduction, medial (internal) rotation, and horizontal flexion of the humerus at the glenohumeral joint. Clavicular head assists in shoulder flexion.", health: "Avulsion of the pectoralis major tendon off the humeral insertion manifests as sudden chest wall ecchymosis, loss of anterior axillary fold contour, and weakness in arm adduction." },
      { overview: "Pektoralis mayor adalah otot dada besar berbentuk kipas. Otot ini memberi tenaga saat melakukan gerakan mendorong, memeluk, dan merapatkan kedua lengan ke dada.", position: "Menutupi dinding dada depan, membentang dari tulang selangka dan tulang dada hingga ke tulang lengan atas.", mechanism: "Saat berkontraksi, otot ini menarik tulang lengan atas ke arah tengah dada (adduksi) dan memutarnya ke dalam (rotasi internal).", health: "Latihan angkat beban berlebihan tanpa pemanasan dapat merobek tendon pektoralis mayor pada perlekatannya di humerus." },
      { overview: "Pektoralis mayor adalah otot tebal berbentuk kipas yang terdiri atas kaput klavikularis dan kaput sternokostalis, dipersarafi nervus pektoralis medialis dan lateralis (C5-T1).", position: "Membentuk dinding anterior fosa aksila, berinsersi pada bibir lateral sulkus bisipitalis tulang humerus.", mechanism: "Menghasilkan gerakan adduksi kuat, rotasi medial, dan fleksi horizontal lengan atas pada sendi bahu.", health: "Avulsi tendon pektoralis mayor ditandai dengan memar luas dinding dada, hilangnya lipatan ketiak depan, dan kelemahan adduksi lengan." },
      [
        { question: "Which two distinct anatomical heads comprise the pectoralis major muscle?", options: ["Clavicular head and Sternocostal head", "Long head and Short head", "Lateral head and Medial head", "Anterior head and Posterior head"], answerIndex: 0, explanation: "Pectoralis major arises from the medial clavicle (clavicular head) and anterior sternum/costal cartilages (sternocostal head)." },
        { question: "Where does the tendon of the pectoralis major insert on the humerus?", options: ["Lateral lip of the bicipital (intertubercular) groove", "Radial tuberosity", "Deltoid tuberosity", "Lesser trochanter"], answerIndex: 0, explanation: "Pectoralis major inserts onto the lateral lip of the intertubercular sulcus of the humerus." },
        { question: "What primary arm movements are produced by contraction of the whole pectoralis major?", options: ["Humeral adduction, medial rotation, and horizontal flexion", "Shoulder abduction and external rotation", "Elbow extension and supination", "Wrist flexion"], answerIndex: 0, explanation: "Pectoralis major pulls the arm across the chest in adduction, horizontal flexion, and internal rotation." }
      ],
      [
        { question: "Dua kaput (kepala) anatomis apakah yang menyusun otot pektoralis mayor dada?", options: ["Kaput Klavikularis dan Kaput Sternokostalis", "Kaput Longum dan Kaput Brevis", "Kaput Lateralis dan Kaput Medialis", "Kaput Anterior dan Kaput Posterior"], answerIndex: 0, explanation: "Pektoralis mayor berpangkal pada tulang selangka (kaput klavikularis) serta tulang dada dan rawan iga (kaput sternokostalis)." },
        { question: "Di manakah tendon otot pektoralis mayor melekat (insersi) pada tulang lengan atas (humerus)?", options: ["Bibir lateral sulkus bisipitalis (intertuberkularis) humerus", "Tuberositas radius", "Tuberositas deltoid", "Trokanter minor"], answerIndex: 0, explanation: "Tendon pektoralis mayor berinsersi pada tepi lateral sulkus intertuberkularis humerus." },
        { question: "Gerakan utama apakah pada lengan atas yang dihasilkan oleh kontraksi otot pektoralis mayor?", options: ["Adduksi lengan, rotasi medial ke dalam, dan fleksi horizontal dada", "Abduksi lengan ke atas dan rotasi eksternal", "Ekstensi siku dan supinasi", "Fleksi pergelangan tangan"], answerIndex: 0, explanation: "Pektoralis mayor merapatkan lengan ke dada (adduksi) dan memutar lengan ke arah dalam." }
      ],
      ["deltoid", "biceps", "latissimus_dorsi"]
    ),

    "Deltoid Muscle": lesson("muscular", "muscles_group", { EN: "Deltoid Muscle", ID: "Otot Deltoid" }, "🏔️🦾",
      { overview: "The deltoid is the powerful triangular cap muscle covering your shoulder. It raises your arm out to the side, forward, and backward.", position: "Forms the rounded contour of the outer shoulder.", mechanism: "Divided into three parts (anterior, middle, posterior). The middle fibers lift your arm straight out to the side (abduction) from 15 to 90 degrees.", health: "Common site for routine intramuscular vaccine injections due to its thickness and rich vascularity." },
      { overview: "The deltoid is a multipennate shoulder muscle innervated by the axillary nerve (C5-C6) originating from the lateral third of the clavicle (anterior), acromion (middle), and spine of the scapula (posterior).", position: "Inserts distally onto the deltoid tuberosity on the lateral midshaft of the humerus.", mechanism: "The multipennate middle deltoid is the prime mover of glenohumeral abduction between 15 and 90 degrees (initiated 0-15 degrees by supraspinatus). Anterior fibers flex and medially rotate; posterior fibers extend and laterally rotate.", health: "Axillary nerve injury (from anterior shoulder dislocation or surgical neck fracture of the humerus) leads to deltoid paralysis, shoulder abduction weakness, and sensory loss over the lateral shoulder ('sergeant's patch')." },
      { overview: "Deltoid adalah otot bahu berbentuk segitiga tebal yang membungkus sendi bahu. Otot ini mengangkat lengan ke samping, ke depan, dan ke belakang.", position: "Membentuk kontur bulat pada bahu bagian luar.", mechanism: "Terbagi atas tiga bagian (depan, tengah, belakang). Serat tengahnya mengangkat lengan lurus ke samping (abduksi) dari sudut 15 hingga 90 derajat.", health: "Merupakan lokasi umum untuk suntikan vaksin intramuskular karena ketebalannya dan pasokan darah yang kaya." },
      { overview: "Deltoid adalah otot multipenatus bahu yang dipersarafi nervus aksilaris (C5-C6), berpangkal pada sepertiga lateral klavikula, akromion, dan spina skapula.", position: "Berinsersi di distal pada tuberositas deltoid di pertengahan lateral batang tulang humerus.", mechanism: "Serat tengah multipenatus adalah penggerak utama abduksi sendi bahu dari 15 hingga 90 derajat.", health: "Cedera nervus aksilaris melumpuhkan otot deltoid dan menghilangkan sensasi kulit pada bahu lateral." },
      [
        { question: "Which peripheral nerve supplies motor innervation to the deltoid muscle?", options: ["Axillary nerve", "Radial nerve", "Median nerve", "Suprascapular nerve"], answerIndex: 0, explanation: "The axillary nerve (C5-C6) branches from the posterior cord of the brachial plexus to innervate deltoid and teres minor." },
        { question: "What is the primary action of the middle (acromial) fibers of the deltoid muscle?", options: ["Abduction of the arm from 15 to 90 degrees", "Initiation of abduction (0-15 degrees)", "Forearm pronation", "Scapular depression"], answerIndex: 0, explanation: "The multipennate middle deltoid drives powerful shoulder abduction between 15° and 90°." },
        { question: "Where does the deltoid muscle insert on the humerus?", options: ["Deltoid tuberosity", "Medial epicondyle", "Lesser tubercle", "Radial head"], answerIndex: 0, explanation: "The deltoid tendon converges onto the V-shaped deltoid tuberosity on the lateral middle shaft of the humerus." }
      ],
      [
        { question: "Saraf tepi manakah yang menyediakan persarafan motorik pada otot deltoid bahu?", options: ["Nervus Aksilaris", "Nervus Radialis", "Nervus Medianus", "Nervus Supraskapularis"], answerIndex: 0, explanation: "Nervus aksilaris (C5-C6) melingkari kolum bedah humerus untuk mempersarafi deltoid." },
        { question: "Apakah fungsi mekanik utama dari serat tengah (akromial) otot deltoid?", options: ["Abduksi lengan dari sudut 15 hingga 90 derajat", "Inisiasi abduksi awal (0-15 derajat)", "Pronasi lengan bawah", "Depresi tulang belikat"], answerIndex: 0, explanation: "Serat tengah deltoid adalah penggerak utama abduksi lengan mengangkat ke samping antara 15° hingga 90°." },
        { question: "Di bagian manakah tendon otot deltoid berinsersi pada tulang humerus?", options: ["Tuberositas Deltoid", "Epikondilus Medial", "Tuberkulum Minus", "Kaput Radius"], answerIndex: 0, explanation: "Tendon deltoid melekat kokoh pada tuberositas deltoid di pertengahan luar tulang lengan atas (humerus)." }
      ],
      ["pectoralis_major", "trapezius", "biceps"]
    ),

    "Quadriceps Femoris": lesson("muscular", "muscles_group", { EN: "Quadriceps Femoris", ID: "Otot Kuadriseps Femoris" }, "🦵⚡",
      { overview: "The quadriceps femoris is the massive four-part muscle group on the front of your thigh. It straightens your knee when walking, climbing stairs, jumping, and kicking.", position: "Covers the entire front and sides of your thigh bone (femur).", mechanism: "Its four heads unite into a single strong tendon that encases the kneecap (patella) and pulls the shinbone straight.", health: "Strengthening the quadriceps stabilizes the patellofemoral joint, preventing anterior knee pain and protecting the ACL from strain." },
      { overview: "The quadriceps femoris comprises four distinct muscular components in the anterior compartment of the thigh: Rectus Femoris (bi-articular: flexes hip and extends knee), Vastus Lateralis, Vastus Medialis (includes VMO fibers stabilizing patellar tracking), and Vastus Intermedius, all innervated by the femoral nerve (L2-L4).", position: "Arises from the anterior inferior iliac spine (rectus femoris) and femoral shaft/linea aspera (vastus muscles), inserting via the quadriceps tendon onto the patella and via the patellar ligament onto the tibial tuberosity.", mechanism: "The primary extensor of the tibiofemoral knee joint, crucial for decelerating knee flexion during heel strike and providing upward propulsion during jumping.", health: "Patellofemoral Pain Syndrome (runner's knee) frequently stems from vastus medialis obliquus (VMO) weakness leading to lateral patellar maltracking." },
      { overview: "Kuadriseps femoris adalah kelompok otot besar empat-kepala di bagian depan paha Anda. Otot ini meluruskan sendi lutut saat berjalan, menaiki tangga, melompat, dan menendang.", position: "Menutupi seluruh bagian depan dan samping tulang paha (femur).", mechanism: "Keempat kepalanya bersatu menjadi satu tendon kuat yang membungkus tempurung lutut (patela) dan menarik tulang kering agar lutut lurus.", health: "Memperkuat otot kuadriseps menstabilkan sendi lutut patelofemoral, mencegah nyeri lutut depan dan melindungi ligamen ACL dari cedera." },
      { overview: "Kuadriseps femoris terdiri atas empat komponen otot pada kompartemen anterior paha: Rektus Femoris, Vastus Lateralis, Vastus Medialis, dan Vastus Intermedius, dipersarafi nervus femoralis (L2-L4).", position: "Berasal dari spina iliaka anterior inferior (AIIS) dan linea aspera femur, berinsersi via tendon kuadriseps ke patela dan tuberositas tibia.", mechanism: "Ekstensor utama sendi lutut tibiofemoral, sangat krusial untuk deselerasi saat melangkah dan daya tolak melompat.", health: "Sindrom Nyeri Patelofemoral sering disebabkan oleh kelemahan otot vastus medialis obliquus (VMO)." },
      [
        { question: "Which of the four quadriceps muscles crosses both the hip joint and the knee joint (bi-articular)?", options: ["Rectus Femoris", "Vastus Lateralis", "Vastus Medialis", "Vastus Intermedius"], answerIndex: 0, explanation: "Rectus femoris originates from the anterior inferior iliac spine (AIIS) of the pelvis, allowing it to flex the hip and extend the knee." },
        { question: "Which peripheral nerve provides motor innervation to the entire quadriceps femoris group?", options: ["Femoral nerve", "Sciatic nerve", "Obturator nerve", "Peroneal nerve"], answerIndex: 0, explanation: "The femoral nerve (L2-L4) innervates all four bellies of the quadriceps in the anterior thigh compartment." },
        { question: "Where does the patellar ligament (the continuation of the quadriceps tendon) insert distally?", options: ["Tibial tuberosity", "Medial malleolus", "Fibula head", "Greater trochanter"], answerIndex: 0, explanation: "The patellar ligament anchors the quadriceps contraction directly onto the anterior tibial tuberosity." }
      ],
      [
        { question: "Manakah dari empat otot kuadriseps yang melintasi dua sendi sekaligus: sendi panggul dan sendi lutut (bi-artikular)?", options: ["Rektus Femoris (Rectus Femoris)", "Vastus Lateralis", "Vastus Medialis", "Vastus Intermedius"], answerIndex: 0, explanation: "Rektus femoris berorigo pada spina iliaka anterior inferior (AIIS) panggul sehingga dapat memfleksikan panggul dan mengekstensikan lutut." },
        { question: "Saraf tepi manakah yang mempersarafi seluruh kelompok otot kuadriseps femoris paha depan?", options: ["Nervus Femoralis", "Nervus Iskiadikus", "Nervus Obturatorius", "Nervus Peroneus"], answerIndex: 0, explanation: "Nervus femoralis (L2-L4) mempersarafi seluruh otot ekstensor paha depan." },
        { question: "Di manakah ligamen patela (kelanjutan tendon kuadriseps) melekat pada tulang tungkai bawah?", options: ["Tuberositas Tibia", "Maleolus Medialis", "Kaput Fibula", "Trokanter Mayor"], answerIndex: 0, explanation: "Ligamen patela meneruskan gaya kontraksi kuadriseps ke tuberositas tibia untuk meluruskan lutut." }
      ],
      ["biceps", "deltoid"]
    ),

    "Trapezius": lesson("muscular", "muscles_group", { EN: "Trapezius", ID: "Otot Trapezius" }, "🪁🛡️",
      { overview: "The trapezius is a large diamond-shaped muscle spanning your upper back and neck. It shrugs your shoulders, pulls your shoulder blades together, and steadies your neck.", position: "Extends from the base of your skull down along the spine to the mid-back and across to both shoulder blades.", mechanism: "Upper fibers elevate the shoulders (shrugging), middle fibers retract shoulder blades (pulling back), and lower fibers depress the shoulders.", health: "Poor computer posture causes chronic trapezius muscle spasms, upper neck tightness, and tension headaches." },
      { overview: "The trapezius is a flat, superficial triangular muscle in the posterior cervical and dorsal trunk, innervated by Cranial Nerve XI (Accessory Nerve) for motor function and C3-C4 cervical nerves for proprioception.", position: "Originates from the external occipital protuberance, nuchal ligament, and spinous processes of C7-T12, inserting onto the lateral third of the clavicle, acromion, and spine of the scapula.", mechanism: "Descending (upper) fibers elevate and upwardly rotate the scapula; transverse (middle) fibers retract the scapula; ascending (lower) fibers depress and upwardly rotate the scapula during full shoulder abduction above 90 degrees.", health: "Spinal accessory nerve injury (e.g., during posterior triangle cervical lymph node biopsy) results in shoulder drop, trapezius atrophy, and inability to abduct the arm above 90 degrees." },
      { overview: "Trapezius adalah otot berbentuk belah ketupat besar yang membentang di leher belakang dan punggung atas. Otot ini mengangkat bahu (mengedik), merapatkan tulang belikat, dan menstabilkan leher.", position: "Membentang dari dasar tengkorak menuruni tulang belakang hingga punggung tengah dan melebar ke kedua tulang belikat.", mechanism: "Serat atas mengangkat bahu ke atas, serat tengah menarik belikat ke arah tulang belakang, dan serat bawah menurunkan bahu.", health: "Postur membungkuk di depan komputer memicu ketegangan otot trapezius kronis, leher kaku, dan sakit kepala tegang." },
      { overview: "Trapezius adalah otot segitiga superfisial pada batang tubuh posterior yang dipersarafi secara motorik oleh Saraf Kranial XI (Nervus Aksesorius).", position: "Berasal dari protuberansia oksipitalis eksterna dan prosesus spinosus C7-T12, berinsersi pada sepertiga lateral klavikula, akromion, dan spina skapula.", mechanism: "Serat atas mengelevasikan belikat; serat tengah meretraksikan belikat; serat bawah mendepresi dan memutar skapula ke atas saat abduksi lengan di atas 90 derajat.", health: "Cedera nervus aksesorius kranial XI menyebabkan bahu terkulai dan ketidakmampuan mengangkat lengan di atas 90 derajat." },
      [
        { question: "Which cranial nerve provides primary motor innervation to the trapezius muscle?", options: ["Cranial Nerve XI (Spinal Accessory Nerve)", "Cranial Nerve VII (Facial Nerve)", "Cranial Nerve X (Vagus Nerve)", "Cranial Nerve V (Trigeminal Nerve)"], answerIndex: 0, explanation: "The spinal accessory nerve (CN XI) descends through the posterior triangle of the neck to innervate trapezius." },
        { question: "Which part of the trapezius muscle is primarily responsible for shrugging (elevating) the shoulders?", options: ["Descending (Upper) fibers", "Transverse (Middle) fibers", "Ascending (Lower) fibers", "Deep costal fibers"], answerIndex: 0, explanation: "The upper fibers contract to elevate the pectoral girdle and upwardly rotate the scapula." },
        { question: "What clinical finding is characteristic of unilateral spinal accessory nerve palsy?", options: ["Shoulder droop and difficulty abducting the arm above horizontal (90 degrees)", "Total paralysis of forearm flexors", "Loss of facial sensation", "Pupillary dilation"], answerIndex: 0, explanation: "Loss of trapezius tone causes the shoulder to drop down and forward, impairing upward scapular rotation needed for overhead arm abduction." }
      ],
      [
        { question: "Saraf kranial manakah yang menyediakan persarafan motorik utama untuk otot trapezius?", options: ["Saraf Kranial XI (Nervus Aksesorius Spinal)", "Saraf Kranial VII (Fasialis)", "Saraf Kranial X (Vagus)", "Saraf Kranial V (Trigeminus)"], answerIndex: 0, explanation: "Nervus aksesorius (CN XI) berjalan di leher belakang untuk mempersarafi otot trapezius." },
        { question: "Bagian serat otot trapezius manakah yang terutama bekerja saat gerakan mengedikkan (mengangkat) bahu ke atas?", options: ["Serat Desenden (Serat Atas)", "Serat Transversal (Serat Tengah)", "Serat Asenden (Serat Bawah)", "Serat Kostal Dalam"], answerIndex: 0, explanation: "Serat atas trapezius mengelevasikan gelang bahu ke atas." },
        { question: "Tanda klinis khas apakah yang timbul akibat kelumpuhan nervus aksesorius spinalis pada otot trapezius?", options: ["Bahu terkulai (shoulder droop) dan kesulitan mengangkat lengan ke atas melebihi 90 derajat", "Kelumpuhan total otot fleksor lengan bawah", "Hilangnya sensasi rasa wajah", "Pelebaran pupil mata"], answerIndex: 0, explanation: "Hilangnya tonus trapezius membuat bahu jatuh terkulai ke bawah dan membatasi gerak abduksi lengan di atas kepala." }
      ],
      ["latissimus_dorsi", "deltoid", "pectoralis_major"]
    ),

    "Latissimus Dorsi": lesson("muscular", "muscles_group", { EN: "Latissimus Dorsi", ID: "Otot Latissimus Dorsi" }, "🏊‍♂️🧗",
      { overview: "The latissimus dorsi ('lats') is the widest muscle in the human body, forming your V-tapered back. It powers pull-ups, swimming strokes, and pulling objects toward your body.", position: "Spans the middle and lower back, sweeping up from the spine and hips into the armpit.", mechanism: "Pulls the upper arm downward and backward (extension and adduction) with powerful leverage.", health: "Essential for swimmers, climbers, and rowers; tight lats can restrict full overhead shoulder mobility and promote lower back arching." },
      { overview: "The latissimus dorsi is a broad, triangular muscle covering the inferior half of the posterior trunk, innervated by the thoracodorsal nerve (C6-C8) from the posterior cord of the brachial plexus.", position: "Originates from the spinous processes of T7-T12, thoracolumbar fascia, iliac crest, and inferior 3-4 ribs, wrapping around the teres major to insert into the floor of the intertubercular groove of the humerus.", mechanism: "Powerful extensor, adductor, and medial rotator of the humerus at the glenohumeral joint ('swimmer's muscle'). Assists in deep expiration and coughing.", health: "Commonly mobilized as a pedicled or free myocutaneous flap in reconstructive plastic surgery for breast reconstruction or head/neck soft tissue coverage." },
      { overview: "Latissimus dorsi adalah otot terlebar di tubuh manusia yang membentuk siluet punggung berbentuk V. Otot ini memberi tenaga besar saat gerakan pull-up, berenang gaya bebas, dan mendayung.", position: "Membentang di punggung tengah dan bawah, menyapu ke atas dari tulang belakang dan panggul masuk ke ketiak.", mechanism: "Menarik tulang lengan atas ke bawah dan ke belakang (ekstensi dan adduksi) dengan kekuatan ungkit tinggi.", health: "Sangat vital bagi perenang dan pemanjat; otot latissimus yang kaku dapat membatasi kelenturan bahu saat mengangkat tangan lurus ke atas." },
      { overview: "Latissimus dorsi adalah otot lebar segitiga pada punggung bawah yang dipersarafi oleh nervus torakodorsalis (C6-C8) cabang fasikulus posterior pleksus brakialis.", position: "Berasal dari prosesus spinosus T7-T12, fasia torakolumbalis, krista iliaka, dan iga bawah, berputar melingkari teres mayor untuk berinsersi di dasar sulkus intertuberkularis humerus.", mechanism: "Ekstensor, adduktor, dan rotator medial kuat bagi tulang humerus pada sendi bahu ('otot perenang'). Membantu batuk kuat dan ekspirasi paksa.", health: "Sering digunakan sebagai flap rekonstruksi bedah plastik (myocutaneous flap) untuk rekonstruksi payudara pasca-mastektomi." },
      [
        { question: "Which nerve innervates the latissimus dorsi muscle?", options: ["Thoracodorsal nerve", "Long thoracic nerve", "Axillary nerve", "Musculocutaneous nerve"], answerIndex: 0, explanation: "The thoracodorsal nerve (C6-C8) branches from the posterior cord of the brachial plexus to supply latissimus dorsi." },
        { question: "Where does the tendon of the latissimus dorsi insert on the humerus?", options: ["Floor of the intertubercular (bicipital) groove", "Radial tuberosity", "Deltoid tuberosity", "Greater tubercle"], answerIndex: 0, explanation: "Latissimus dorsi inserts into the floor of the bicipital groove between pectoralis major and teres major." },
        { question: "Which combination of movements is primarily generated by contraction of the latissimus dorsi on the arm?", options: ["Humeral extension, adduction, and internal rotation", "Humeral abduction and external rotation", "Elbow flexion and supination", "Scapular elevation"], answerIndex: 0, explanation: "Latissimus dorsi extends, adducts, and internally rotates the humerus, powering climbing and swimming." }
      ],
      [
        { question: "Saraf tepi manakah yang mempersarafi otot latissimus dorsi?", options: ["Nervus Torakodorsalis", "Nervus Torasikus Longus", "Nervus Aksilaris", "Nervus Muskulokutaneus"], answerIndex: 0, explanation: "Nervus torakodorsalis (C6-C8) keluar dari pleksus brakialis untuk mempersarafi latissimus dorsi." },
        { question: "Di manakah perlekatan (insersi) tendon latissimus dorsi pada tulang humerus?", options: ["Dasar sulkus intertuberkularis (bisipitalis) humerus", "Tuberositas radius", "Tuberositas deltoid", "Tuberkulum mayus"], answerIndex: 0, explanation: "Latissimus dorsi berinsersi di dasar lekukan bisipitalis di antara pektoralis mayor dan teres mayor." },
        { question: "Kombinasi gerakan lengan apakah yang dihasilkan oleh kontraksi otot latissimus dorsi?", options: ["Ekstensi lengan ke belakang, adduksi ke dalam, dan rotasi internal", "Abduksi lengan ke samping dan rotasi eksternal", "Fleksi siku dan supinasi", "Elevasi tulang belikat"], answerIndex: 0, explanation: "Latissimus dorsi menarik lengan ke belakang, merapatkan ke tubuh, dan memutar ke dalam saat mendayung atau berenang." }
      ],
      ["trapezius", "pectoralis_major", "deltoid"]
    ),

    // ─── SKIN / INTEGUMENTARY STRUCTURES ────────────────────────────────────
    "Stratum Corneum & Epidermis": lesson("skin", "skin_layers", { EN: "Stratum Corneum & Epidermis", ID: "Stratum Korneum & Epidermis" }, "🧴🛡️",
      { overview: "The epidermis is your tough, multi-layered protective outer surface. It constantly creates new skin cells at the bottom that rise to the top, replacing old cells that shed away.", position: "The outermost visible layer covering the entire surface of your body.", mechanism: "Packed with keratin proteins to make a waterproof seal, and melanin pigment granules that absorb harmful ultraviolet rays from sunlight.", health: "Applying broad-spectrum sunscreen and staying moisturized protects epidermal cells from UV DNA damage and premature aging." },
      { overview: "The epidermis is an avascular keratinized stratified squamous epithelium composed of five discrete strata in thick skin (Basale, Spinosum, Granulosum, Lucidum, Corneum), renewing every 28-30 days.", position: "Superficial to the dermis, anchored via hemidesmosomes to the epidermal basement membrane at the dermal-epidermal junction.", mechanism: "Composed primarily of keratinocytes (~90%), melanocytes (eumelanin/pheomelanin photoprotection), Langerhans cells (antigen presentation), and Merkel cells (mechanoreception).", health: "Chronic solar UV irradiation causes DNA pyrimidine dimer mutations in basal keratinocytes or melanocytes, predisposing to basal cell carcinoma, squamous cell carcinoma, or melanoma." },
      { overview: "Epidermis adalah permukaan pelindung luar tubuh yang kuat dan berlapis-lapis. Lapisan ini terus membuat sel kulit baru di dasar yang naik ke permukaan menggantikan sel-sel lama yang terkelupas.", position: "Lapisan paling luar yang tampak menutupi seluruh permukaan tubuh Anda.", mechanism: "Dipenuhi protein keratin yang menciptakan lapisan kedap air, serta butiran pigmen melanin yang menyerap radiasi ultraviolet sinar matahari.", health: "Menggunakan tabir surya dan menjaga kelembapan kulit melindungi sel-sel epidermis dari kerusakan DNA akibat sinar UV dan penuaan dini." },
      { overview: "Epidermis adalah epitel skuamosa berlapis berkeratin avaskular yang terdiri dari lima stratum pada kulit tebal (Basale, Spinosum, Granulosum, Lusidum, Korneum) yang diperbarui setiap 28-30 hari.", position: "Di atas lapisan dermis, tertambat melalui hemidesmosom pada membran basal dermo-epidermal junction.", mechanism: "Terutama terdiri dari keratinosit (~90%), melanosit (fotoproteksi pigmen melanin), sel Langerhans, dan sel Merkel.", health: "Radiasi UV matahari memicu mutasi dimer pirimidin DNA pada keratinosit basal atau melanosit, meningkatkan risiko karsinoma sel basal atau melanoma." },
      [
        { question: "Which epidermal stratum contains actively dividing stem cells that continuously regenerate the epidermis?", options: ["Stratum basale (germinativum)", "Stratum corneum", "Stratum lucidum", "Stratum granulosum"], answerIndex: 0, explanation: "The single-layered stratum basale contains mitotically active basal keratinocyte stem cells attached to the basement membrane." },
        { question: "What pigment produced by melanocytes protects epidermal nuclear DNA from ultraviolet (UV) radiation?", options: ["Melanin", "Hemoglobin", "Carotene", "Bilirubin"], answerIndex: 0, explanation: "Melanocytes transfer melanin granules into surrounding keratinocytes, forming supranuclear caps that shield DNA from UV photons." },
        { question: "Why is the epidermis completely avascular (lacking blood vessels)?", options: ["It receives all oxygen and nutrients via diffusion from underlying dermal capillaries", "It requires no nutrients to survive", "It is made entirely of bone cells", "Blood vessels only exist in the brain"], answerIndex: 0, explanation: "The epidermis contains no blood vessels; its cells depend on interstitial fluid diffusion from papillary dermal capillaries." }
      ],
      [
        { question: "Lapisan epidermis manakah yang memuat sel punca yang aktif membelah untuk meregenerasi sel kulit baru?", options: ["Stratum basale (germinativum)", "Stratum korneum", "Stratum lusidum", "Stratum granulosum"], answerIndex: 0, explanation: "Stratum basale adalah lapisan paling dasar yang terus membelah secara mitosis menghasilkan keratinosit baru." },
        { question: "Pigmen apa yang disintesis oleh melanosit untuk melindungi DNA inti sel dari radiasi ultraviolet (UV)?", options: ["Melanin", "Hemoglobin", "Karoten", "Bilirubin"], answerIndex: 0, explanation: "Melanin disalurkan ke keratinosit untuk membentuk payung pelindung di atas inti sel dari kerusakan sinar UV." },
        { question: "Mengapa lapisan epidermis tidak memiliki pembuluh darah (avaskular)?", options: ["Memperoleh seluruh nutrisi dan oksigen melalui difusi dari pembuluh kapiler di lapisan dermis bawahnya", "Tidak memerlukan nutrisi untuk bertahan hidup", "Tersusun atas sel-sel tulang keras", "Pembuluh darah hanya ada di organ dalam"], answerIndex: 0, explanation: "Epidermis tidak memiliki pembuluh darah; sel-selnya bergantung pada difusi cairan dari kapiler papila dermis." }
      ],
      ["dermis", "hypodermis"]
    ),

    "Dermal Layer & Collagen": lesson("skin", "skin_layers", { EN: "Dermal Layer & Collagen", ID: "Lapisan Dermis & Kolagen" }, "🧶🧬",
      { overview: "The dermis is the living, elastic structural core of your skin. It contains blood vessels, hair follicles, sweat glands, and sensory touch receptors.", position: "Situated directly beneath the epidermis and above the subcutaneous fatty layer.", mechanism: "A dense mesh of collagen and elastin fibers provides strength and elasticity, while capillaries dilate to release heat (flushing) or constrict to conserve warmth.", health: "UV light and natural aging degrade dermal collagen, causing wrinkling; proper hydration and sun protection preserve dermal resilience." },
      { overview: "The dermis is a tough, vascular connective tissue layer subdivided into a superficial papillary dermis (areolar connective tissue with dermal papillae and Meissner's corpuscles) and a deeper reticular dermis (dense irregular connective tissue with type I collagen and cleavage lines of Langer).", position: "Interlocks with epidermal rete ridges at the dermal-epidermal junction, bounded deep by the subcutaneous tissue.", mechanism: "Houses cutaneous appendages (eccrine/apocrine sweat glands, sebaceous glands, hair follicles, arrector pili muscles), extensive vascular plexuses (subpapillary and deep dermal), and sensory nerve endings (Ruffini endings, Krause end bulbs, free nerve endings).", health: "Second-degree (partial-thickness) burns destroy the epidermis and extend into the dermis, causing painful blistering; hypertrophic scars and keloids result from abnormal fibroblastic collagen overproduction during dermal wound healing." },
      { overview: "Dermis adalah inti struktural kulit yang hidup dan elastis. Lapisan ini memuat pembuluh darah, folikel rambut, kelenjar keringat, dan reseptor peraba.", position: "Terletak persis di bawah lapisan epidermis dan di atas lapisan lemak subkutan.", mechanism: "Anyaman serat kolagen dan elastin memberikan kekuatan dan kelenturan, sementara kapiler darah melebar untuk membuang panas atau menyempit untuk menjaga kehangatan.", health: "Radiasi UV dan penuaan memecah kolagen dermis memicu kerutan; asupan cairan yang baik dan tabir surya mempertahankan elastisitas dermis." },
      { overview: "Dermis adalah lapisan jaringan ikat vaskular yang terbagi atas dermis papilaris superfisial dan dermis retikularis profunda.", position: "Bertaut dengan rete ridges epidermis pada taut dermo-epidermal, berbatasan di bagian dalam dengan jaringan subkutan.", mechanism: "Memuat apendiks kulit, pleksus vaskular kaya, dan ujung saraf sensorik (reseptor Meissner, Pacini, Ruffini).", health: "Luka bakar derajat dua merusak epidermis hingga lapisan dermis menimbulkan bula/lepuh berisi cairan yang nyeri." },
      [
        { question: "What primary fibrous structural protein comprises approximately 70-80% of the dry weight of the reticular dermis?", options: ["Type I Collagen", "Keratin", "Myosin", "Actin"], answerIndex: 0, explanation: "Type I and III collagen bundles in the dense irregular connective tissue of the reticular dermis provide tensile strength." },
        { question: "Which sensory receptors located within the dermal papillae detect light touch and low-frequency vibrations?", options: ["Meissner's corpuscles (Tactile corpuscles)", "Pacinian corpuscles", "Golgi tendon organs", "Muscle spindles"], answerIndex: 0, explanation: "Meissner's corpuscles in the papillary dermis detect delicate dynamic touch and flutter." },
        { question: "What happens to dermal blood vessels in response to elevated core body temperature?", options: ["Vasodilation to increase cutaneous blood flow and radiate heat outward", "Vasoconstriction to trap all heat inside", "Complete occlusion of all capillaries", "They produce melanin pigment"], answerIndex: 0, explanation: "Dermal arteriovenous anastomoses and capillary beds dilate under sympathetic cholinergic control to release excess metabolic heat." }
      ],
      [
        { question: "Protein struktural serat utama apakah yang menyusun sekitar 70-80% berat kering dari lapisan dermis retikularis?", options: ["Kolagen Tipe I", "Keratin", "Miosin", "Aktin"], answerIndex: 0, explanation: "Berkas serat kolagen tipe I memberikan kekuatan tarikan yang kokoh pada lapisan dermis kulit." },
        { question: "Reseptor sensorik apakah di dalam papila dermis yang bertugas mendeteksi rangsangan rabaan halus dan getaran frekuensi rendah?", options: ["Korpuskel Meissner", "Korpuskel Pacini", "Organ Tendon Golgi", "Gelendong Otot"], answerIndex: 0, explanation: "Korpuskel Meissner yang terletak di puncak papila dermis merespons sentuhan ringan dan rabaan halus." },
        { question: "Apa yang terjadi pada pembuluh darah di lapisan dermis saat suhu inti tubuh meningkat panas?", options: ["Vasodilatasi (melebar) untuk meningkatkan aliran darah ke permukaan dan membuang panas", "Vasokonstriksi (menyempit) untuk menahan seluruh panas di dalam", "Penyumbatan total pada seluruh kapiler", "Memproduksi pigmen melanin"], answerIndex: 0, explanation: "Pembuluh darah kapiler dermis melebar (vasodilatasi) agar panas tubuh dapat diradiasikan keluar melalui kulit." }
      ],
      ["epidermis", "hypodermis"]
    ),

    "Subcutaneous Hypodermis & Adipose Tissue": lesson("skin", "skin_layers", { EN: "Subcutaneous Hypodermis & Adipose Tissue", ID: "Hipodermis & Jaringan Adiposa Subkutan" }, "🧈🛡️",
      { overview: "The hypodermis (subcutaneous layer) is the soft, fatty shock-absorbing cushion beneath your skin. It insulates against cold, stores long-term energy, and anchors your skin to muscles.", position: "Deepest layer of the integumentary structure, located directly beneath the dermis.", mechanism: "Packed with specialized fat cells (adipocytes) that provide thermal insulation like a winter blanket and act as an emergency calorie reserve.", health: "Common site for subcutaneous injections (like insulin) because its rich adipose tissue allows slow, steady medication absorption." },
      { overview: "The hypodermis (subcutis / superficial fascia) is a fibrofatty layer composed of unilocular white adipose tissue lobules separated by fibrous connective tissue septa (retinacula cutis) tethering the dermis to underlying deep investing fascia.", position: "Underlies the reticular dermis throughout the body except in the eyelids, clitoris, and penis.", mechanism: "Serves as major lipid reservoir (triglyceride storage and endocrine secretion of leptin, adiponectin), mechanical shock absorber, and thermal insulator. Transmits major cutaneous nerves, superficial veins, and lymphatic trunks; houses deep lamellar Pacinian (Vater-Pacini) corpuscles.", health: "Cellulitis is a bacterial infection (commonly Streptococcus pyogenes or Staphylococcus aureus) of the deep dermis and subcutaneous adipose tissue requiring systemic antibiotic therapy." },
      { overview: "Hipodermis (lapisan subkutan) adalah bantalan lemak peredam benturan di bawah kulit Anda. Lapisan ini menahan suhu dingin (isolasi termal), menyimpan energi cadangan, dan merekatkan kulit ke otot.", position: "Lapisan paling dalam dari struktur penutup tubuh, terletak persis di bawah lapisan dermis.", mechanism: "Dipenuhi sel-sel lemak (adiposit) yang bertindak seperti selimut termal penahan dingin serta cadangan kalori darurat tubuh.", health: "Merupakan lokasi umum untuk suntikan subkutan (seperti insulin) karena jaringan lemak memungkinkan penyerapan obat secara perlahan dan stabil." },
      { overview: "Hipodermis (subkutis / fasia superfisialis) adalah lapisan fibro-adiposa yang tersusun dari lobulus jaringan adiposa putih unilokular yang dipisahkan oleh septa jaringan ikat fibrosa.", position: "Terletak di bawah dermis retikularis di seluruh tubuh (kecuali kelopak mata dan penis).", mechanism: "Berfungsi sebagai reservoir lipid, peredam benturan mekanis, dan penyekat termal. Memuat korpuskel Pacini untuk vibrasi dalam.", health: "Selulitis adalah infeksi bakteri akut pada dermis dalam dan jaringan lemak subkutan hipodermis yang memerlukan terapi antibiotik sistemik." },
      [
        { question: "What is the primary cell type populating the subcutaneous hypodermis layer?", options: ["Adipocytes (Fat cells)", "Keratinocytes", "Melanocytes", "Chondrocytes"], answerIndex: 0, explanation: "Adipocytes filled with large single lipid droplets constitute the vast majority of the hypodermal tissue." },
        { question: "Which large encapsulated mechanoreceptors located deep in the hypodermis and lower dermis detect high-frequency vibration and transient pressure changes?", options: ["Pacinian corpuscles (Lamellar corpuscles)", "Merkel discs", "Ruffini endings", "Meissner corpuscles"], answerIndex: 0, explanation: "Pacinian corpuscles consist of concentric lamellae detecting deep vibration and rapid mechanical deformation." },
        { question: "Why is the subcutaneous hypodermis frequently selected as the target site for insulin injections?", options: ["Its vascularized adipose matrix allows slow, consistent, and predictable absorption without intramuscular spikes", "It contains no nerves at all", "It breaks down insulin immediately", "It is the only place skin can be punctured"], answerIndex: 0, explanation: "Subcutaneous adipose allows steady, predictable systemic absorption of basal and bolus insulin." }
      ],
      [
        { question: "Jenis sel dominan apakah yang menyusun sebagian besar jaringan lapisan hipodermis subkutan?", options: ["Adiposit (Sel Lemak)", "Keratinosit", "Melanosit", "Kondrosit"], answerIndex: 0, explanation: "Adiposit yang menyimpan vakuola trigliserida besar merupakan sel utama penyusun jaringan lemak subkutan." },
        { question: "Reseptor mekanik berselubung besar apakah di kedalaman hipodermis yang mendeteksi getaran frekuensi tinggi dan tekanan dalam?", options: ["Korpuskel Pacini (Lamellar Corpuscle)", "Diskus Merkel", "Ujung Ruffini", "Korpuskel Meissner"], answerIndex: 0, explanation: "Korpuskel Pacini berbentuk menyerupai irisan bawang yang peka terhadap getaran dalam dan perubahan tekanan mekanis cepat." },
        { question: "Mengapa lapisan hipodermis subkutan sering dipilih sebagai lokasi penyuntikan hormon insulin?", options: ["Jaringan lemak subkutan memungkinkan penyerapan obat secara perlahan, stabil, dan terprediksi", "Tidak memiliki serabut saraf sama sekali", "Langsung menghancurkan insulin seketika", "Merupakan satu-satunya area tubuh yang bisa ditembus jarum"], answerIndex: 0, explanation: "Penyuntikan subkutan pada jaringan lemak hipodermis memberikan laju penyerapan insulin yang stabil tanpa lonjakan drastis." }
      ],
      ["dermis", "epidermis"]
    ),

    // ═══════════════════════════════════════════════════════
    // ADDITIONAL STRUCTURE CONTENT PATCH — NEW LESSONS
    // ═══════════════════════════════════════════════════════

    // 1 & 2. HIPPOCAMPUS (LEFT & RIGHT)
    "Hippocampus (Left)": lesson("nervous", "brain", { EN: "Hippocampus (Left)", ID: "Hipokampus (Kiri)" }, "🧠🗺️",
      {
        overview: "The left hippocampus is your brain's primary memory consolidation hub and spatial navigator. It transforms short-term daily experiences and verbal information into lasting long-term memories.",
        position: "Situated deep within the left medial temporal lobe, forming a seahorse-shaped curvature along the floor of the lateral ventricle's inferior horn.",
        mechanism: "Sensory perceptions flow into the hippocampus via the perforant path, where synaptic long-term potentiation stabilizes neural traces before transferring them to the cerebral cortex for permanent storage.",
        health: "The hippocampus is one of the earliest structures damaged in Alzheimer's disease, explaining why short-term memory loss is an early warning sign. Chronic psychological stress and sleep deprivation also impair memory consolidation."
      },
      {
        overview: "The left hippocampus is a three-layered archicortical structure of the limbic system comprising the dentate gyrus, Cornu Ammonis subfields (CA1–CA4), and subiculum, mediating declarative (episodic and semantic) memory consolidation and cognitive mapping.",
        position: "Located in the inferomedial left temporal lobe, forming the ventricular floor of the inferior horn of the left lateral ventricle, situated posterior to the amygdala and medial to the parahippocampal gyrus.",
        mechanism: "Operates via the trisynaptic circuit: entorhinal perforant path fibers synapse on dentate granule cells, which project mossy fibers to CA3 pyramidal neurons, projecting Schaffer collaterals to CA1 pyramidal cells. Synaptic plasticity via NMDA/AMPA-dependent Long-Term Potentiation (LTP) and hippocampal place cells mediate spatial memory.",
        health: "Bilateral hippocampal lesions (e.g., patient H.M.) produce dense anterograde amnesia with preserved procedural memory. Mesial temporal lobe epilepsy (MTLE) characteristically features hippocampal sclerosis with selective CA1/CA4 pyramidal neuronal loss and astrogliosis."
      },
      {
        overview: "Hipokampus kiri adalah pusat konsolidasi memori dan navigator spasial otak Anda. Mengubah pengalaman sehari-hari dan informasi verbal jangka pendek menjadi ingatan jangka panjang yang abadi.",
        position: "Terletak jauh di dalam lobus temporal medial kiri, membentuk lengkungan menyerupai kuda laut di sepanjang dasar kornu inferior ventrikel lateral.",
        mechanism: "Persepsi sensorik masuk ke hipokampus melalui jalur perforan, di mana potensiasi sinaptik jangka panjang memperkuat jejak memori sebelum dipindahkan ke korteks serebral untuk disimpan permanen.",
        health: "Hipokampus adalah salah satu struktur pertama yang dirusak oleh penyakit Alzheimer, menjelaskan mengapa kehilangan memori baru menjadi gejala awal. Stres kronis dan kurang tidur juga menurunkan fungsinya."
      },
      {
        overview: "Hipokampus kiri adalah struktur arkikorteks tiga lapis dari sistem limbik yang terdiri dari girus dentatus, subfield Kornu Amonis (CA1–CA4), dan subikulum, yang memediasi konsolidasi memori deklaratif dan pemetaan kognitif.",
        position: "Terletak di lobus temporal inferomedial kiri, membentuk dasar ventrikel pada kornu inferior ventrikel lateral kiri, di sebelah posterior amigdala dan medial girus parahipokampalis.",
        mechanism: "Bekerja melalui sirkuit trisinaptik: serat jalur perforan entorinal bersinaps pada sel granula dentatus, memproyeksikan serat lumut (mossy fibers) ke neuron piramidal CA3, yang memproyeksikan kolateral Schaffer ke CA1. Plastisitas sinaptik LTP berbasis reseptor NMDA/AMPA dan 'place cells' memfasilitasi navigasi spasial.",
        health: "Kerusakan hipokampus bilateral menyebabkan amnesia anterograd berat dengan memori prosedural yang tetap utuh. Epilepsi lobus temporal mesial (MTLE) khas ditandai oleh sklerosis hipokampus dengan hilangnya neuron piramidal CA1/CA4 dan gliosis reaktif."
      },
      [
        { question: "What primary category of memory depends on the hippocampus for encoding and long-term consolidation?", options: ["Declarative (explicit) episodic and semantic memory", "Implicit procedural motor memory", "Reflexive spinal withdrawal memory", "Immediate retinal persistence"], answerIndex: 0, explanation: "The hippocampus is essential for consolidating conscious declarative facts and events, whereas procedural memory depends on the basal ganglia and cerebellum." },
        { question: "Which cellular mechanism in hippocampal neurons represents the primary foundation of synaptic plasticity and memory formation?", options: ["Long-Term Potentiation (LTP) dependent on NMDA and AMPA glutamate receptors", "All-or-none muscular tetany", "Passive sodium diffusion", "Endothelial filtration"], answerIndex: 0, explanation: "LTP is a persistent strengthening of synapses based on recent patterns of activity driven by NMDA receptor activation." },
        { question: "In the hippocampal trisynaptic circuit, which axonal pathway connects the dentate gyrus granule cells to CA3 pyramidal neurons?", options: ["Mossy fibers", "Schaffer collaterals", "Corpus callosum", "Anterior commissure"], answerIndex: 0, explanation: "Dentate gyrus granule cells project unmyelinated mossy fibers onto the apical dendrites of CA3 pyramidal neurons." }
      ],
      [
        { question: "Kategori memori utama apa yang pembentukan dan konsolidasi jangka panjangnya sangat bergantung pada hipokampus?", options: ["Memori deklaratif (eksplisit) episodik dan semantik", "Memori prosedural implisit keterampilan motorik", "Memori penarikan refleks spinal", "Persistensi visual retina sesaat"], answerIndex: 0, explanation: "Hipokampus sangat penting untuk memori deklaratif (fakta dan peristiwa), sedangkan memori prosedural bergantung pada ganglia basalis dan serebelum." },
        { question: "Mekanisme seluler apa pada neuron hipokampus yang menjadi fondasi utama plastisitas sinaptik dan pembentukan memori?", options: ["Long-Term Potentiation (LTP) berbasis reseptor glutamat NMDA dan AMPA", "Tetani otot rangka", "Difusi natrium pasif", "Filtrasi endotel"], answerIndex: 0, explanation: "LTP adalah penguatan persisten koneksi sinaptik berdasarkan pola stimulasi berulang yang dimediasi reseptor NMDA." },
        { question: "Dalam sirkuit trisinaptik hipokampus, jalur akson manakah yang menghubungkan sel granula girus dentatus dengan neuron piramidal CA3?", options: ["Serat lumut (mossy fibers)", "Kolateral Schaffer", "Korpus kalosum", "Komisura anterior"], answerIndex: 0, explanation: "Sel granula girus dentatus memproyeksikan serat lumut ke dendrit apikal neuron piramidal CA3." }
      ],
      ["thalamus", "cerebrum", "hypothalamus"]
    ),

    "Hippocampus (Right)": lesson("nervous", "brain", { EN: "Hippocampus (Right)", ID: "Hipokampus (Kanan)" }, "🧠🗺️",
      {
        overview: "The right hippocampus is your brain's spatial orientation and memory consolidation center. It works closely with the left hippocampus to map out environments and encode conscious life experiences.",
        position: "Located deep within the right medial temporal lobe, curving beneath the inferior horn of the right lateral ventricle.",
        mechanism: "Processes spatial and contextual inputs using specialized networks of place cells and synaptic plasticity (LTP), transforming immediate experiences into stable cortical memory networks.",
        health: "Vulnerable to neurofibrillary tangles in Alzheimer's disease and hypoxic ischemic injury. Regular aerobic exercise and adequate sleep promote hippocampal neurogenesis and synaptic health."
      },
      {
        overview: "The right hippocampus is a bilateral archicortical component of the temporal limbic lobe, comprising the dentate gyrus, subiculum, and Cornu Ammonis fields (CA1–CA4), particularly prominent in spatial navigation and episodic memory.",
        position: "Situated in the inferomedial right temporal lobe along the floor of the right lateral ventricle's inferior horn, bounded medially by the ambient cistern and superiorly by the choroid fissure.",
        mechanism: "Receives processed multimodal sensory inputs via the entorhinal cortex perforant path. Dentate granule cells relay signals through mossy fibers to CA3, which project via Schaffer collaterals to CA1 pyramidal neurons, undergoing NMDA-dependent Long-Term Potentiation.",
        health: "Right hippocampal sclerosis in mesial temporal lobe epilepsy causes nonverbal and spatial memory deficits. Acute ischemic vulnerability of the Sommer sector (CA1 pyramidal layer) occurs during cerebral hypoperfusion."
      },
      {
        overview: "Hipokampus kanan adalah pusat orientasi spasial dan konsolidasi memori otak Anda. Bekerja bersama hipokampus kiri untuk memetakan ruang fisik dan menyandikan pengalaman hidup sadar.",
        position: "Terletak jauh di dalam lobus temporal medial kanan, melengkung di bawah dasar kornu inferior ventrikel lateral kanan.",
        mechanism: "Memproses input spasial dan kontekstual menggunakan jaringan sel tempat (place cells) dan plastisitas sinaptik (LTP), mengubah pengalaman sesaat menjadi memori kortikal yang stabil.",
        health: "Rentan terhadap kekeruhan neurofibrilar pada penyakit Alzheimer dan cedera iskemik hipoksik. Olahraga aerobik teratur dan tidur cukup merangsang neurogenesis hipokampus."
      },
      {
        overview: "Hipokampus kanan adalah komponen arkikorteks bilateral dari lobus limbik temporal, terdiri dari girus dentatus, subikulum, dan area Kornu Amonis (CA1–CA4), sangat penting dalam navigasi spasial dan memori episodik.",
        position: "Terletak di lobus temporal inferomedial kanan di sepanjang dasar kornu inferior ventrikel lateral kanan, dibatasi secara medial oleh sisterna ambien.",
        mechanism: "Menerima input sensorik multimodal melalui jalur perforan korteks entorinal. Sel granula dentatus meneruskan sinyal melalui serat lumut ke CA3, yang memproyeksikan kolateral Schaffer ke CA1 untuk menjalani Long-Term Potentiation berbasis NMDA.",
        health: "Sklerosis hipokampus kanan pada epilepsi lobus temporal memicu defisit memori spasial dan nonverbal. Kerentanan iskemik akut pada sektor Sommer (lapisan CA1) terjadi saat hipoperfusi serebral."
      },
      [
        { question: "Which specific pyramidal cell subfield in the hippocampus is classically known as the 'Sommer sector' due to its extreme vulnerability to hypoxia and ischemia?", options: ["CA1 subfield", "Dentate gyrus", "CA3 subfield", "Subiculum"], answerIndex: 0, explanation: "The CA1 region (Sommer sector) contains pyramidal neurons that are exquisitely sensitive to oxygen deprivation and excitotoxicity." },
        { question: "What specialized hippocampal neurons fire action potentials when an individual enters a specific location in an environment?", options: ["Place cells", "Purkinje cells", "Betz cells", "Renshaw cells"], answerIndex: 0, explanation: "Place cells in the hippocampus construct an internal cognitive map of the spatial environment." },
        { question: "Which main axonal tract serves as the major output pathway carrying signals from the hippocampus to the mammillary bodies and thalamus?", options: ["Fornix", "Corpus callosum", "Optic radiation", "Internal capsule"], answerIndex: 0, explanation: "The fornix is the prominent C-shaped bundle of white matter serving as the primary hippocampal efferent tract." }
      ],
      [
        { question: "Subfield sel piramidal hipokampus manakah yang secara klasik dikenal sebagai 'sektor Sommer' karena sangat rentan terhadap hipoksia dan iskemia?", options: ["Subfield CA1", "Girus dentatus", "Subfield CA3", "Subikulum"], answerIndex: 0, explanation: "Area CA1 (sektor Sommer) memiliki neuron piramidal yang paling peka terhadap kekurangan oksigen dan eksitotoksisitas." },
        { question: "Neuron khusus hipokampus apakah yang melepaskan potensial aksi ketika seseorang memasuki lokasi tertentu di suatu lingkungan?", options: ["Place cells (sel tempat)", "Sel Purkinje", "Sel Betz", "Sel Renshaw"], answerIndex: 0, explanation: "Place cells pada hipokampus membentuk peta kognitif internal dari lingkungan spasial." },
        { question: "Traktus akson utama manakah yang berfungsi sebagai jalur keluaran (eferen) utama yang membawa sinyal dari hipokampus ke korpus mamilaris?", options: ["Forniks", "Korpus kalosum", "Radiasi optik", "Kapsula interna"], answerIndex: 0, explanation: "Forniks adalah berkas materi putih berbentuk C yang menjadi jalur eferen utama hipokampus." }
      ],
      ["thalamus", "cerebrum", "hypothalamus"]
    ),

    // 3 & 4. HYPOTHALAMUS (LEFT & RIGHT)
    "Hypothalamus (Left)": lesson("nervous", "brain", { EN: "Hypothalamus (Left)", ID: "Hipotalamus (Kiri)" }, "🧠⚖️",
      {
        overview: "The hypothalamus is your body's master homeostatic command center. It functions like a central thermostat and hormonal director, regulating body temperature, hunger, thirst, sleep cycles, and autonomic equilibrium.",
        position: "Situated in the central core of the brain directly below the thalamus and just above the pituitary gland, forming the lower wall of the third ventricle.",
        mechanism: "Constantly samples blood chemistry and neural inputs, synthesizing releasing hormones that govern the pituitary gland and activating sympathetic or parasympathetic nervous responses.",
        health: "Hypothalamic injury or tumors can lead to central diabetes insipidus (inability to concentrate urine), severe core temperature fluctuations, sleep-wake disruption, or hyperphagic obesity."
      },
      {
        overview: "The left hypothalamus is a bilateral ventral diencephalic nuclear complex comprising distinct nuclei (supraoptic, paraventricular, suprachiasmatic, arcuate, ventromedial, and lateral nuclei) coordinating neuroendocrine, autonomic, and homeostatic drives.",
        position: "Located inferior to the hypothalamic sulcus of the thalamus, superior to the pituitary stalk (infundibulum), and bounded anteriorly by the optic chiasm and laterally by the optic tracts.",
        mechanism: "Magnocellular neurons in paraventricular and supraoptic nuclei synthesize oxytocin and ADH (vasopressin) for transport to the posterior pituitary. Parvocellular neurosecretory cells secrete hypophysiotropic hormones (CRH, TRH, GnRH, GHRH, somatostatin, dopamine) into the hypophyseal portal system.",
        health: "Loss of ADH secretion causes central diabetes insipidus resulting in massive hypotonic polyuria and polydipsia. Compression by pituitary macroadenomas or craniopharyngiomas causes panhypopituitarism and visual field defects."
      },
      {
        overview: "Hipotalamus kiri adalah pusat komando homeostatis tubuh Anda. Berfungsi seperti termostat sentral dan pengatur hormon yang mengendalikan suhu tubuh, rasa lapar, haus, siklus tidur, dan keseimbangan otonom.",
        position: "Terletak di inti tengah otak tepat di bawah talamus dan di atas kelenjar pituitari, membentuk dinding bawah ventrikel ketiga.",
        mechanism: "Secara terus-menerus memantau kimia darah dan input saraf, menyintesis hormon pelepas yang mengatur kelenjar pituitari, serta mengaktifkan respons saraf simpatis atau parasimpatis.",
        health: "Cedera atau tumor hipotalamus dapat menyebabkan diabetes insipidus sentral (ketidakmampuan memekatkan urine), fluktuasi suhu tubuh drastis, gangguan tidur, atau obesitas karena rasa lapar berlebih."
      },
      {
        overview: "Hipotalamus kiri adalah kompleks nukleus ventral diensefalon bilateral yang mencakup nukleus supraoptik, paraventrikular, suprakiasmatik, arkuata, ventromedial, dan lateral yang mengoordinasikan sistem neuroendokrin dan otonom.",
        position: "Terletak di inferior sulkus hipotalamikus talamus, superior dari infundibulum hipofisis, dan dibatasi di anterior oleh kiasma optikum.",
        mechanism: "Neuron magnoseluler pada nukleus paraventrikular dan supraoptik menyintesis oksitosin dan ADH (vasopresin) untuk disimpan di neurohipofisis. Sel parvoseluler mensekresikan hormon pelepas (CRH, TRH, GnRH, GHRH, somatostatin, dopamin) ke sistem portal hipofisis.",
        health: "Hilangnya sekresi ADH memicu diabetes insipidus sentral yang ditandai poliuria masif dan polidipsia. Kompresi oleh kraniofaringioma dapat memicu panhipopituitarisme dan gangguan lapang pandang."
      },
      [
        { question: "Which two peptide hormones are directly synthesized in the paraventricular and supraoptic nuclei of the hypothalamus?", options: ["Antidiuretic hormone (ADH/vasopressin) and Oxytocin", "Growth hormone (GH) and Prolactin", "Insulin and Glucagon", "Thyroid-stimulating hormone (TSH) and ACTH"], answerIndex: 0, explanation: "ADH and oxytocin are synthesized in hypothalamic cell bodies and transported axonally to the posterior pituitary for release." },
        { question: "Which hypothalamic nucleus acts as the body's master circadian pacemaker regulating 24-hour sleep-wake rhythms?", options: ["Suprachiasmatic nucleus (SCN)", "Ventromedial nucleus", "Arcuate nucleus", "Mammillary body"], answerIndex: 0, explanation: "The suprachiasmatic nucleus receives direct retinohypothalamic projections to synchronize internal circadian clocks to light cycles." },
        { question: "How do hypothalamic releasing and inhibiting factors reach the hormone-producing cells of the anterior pituitary?", options: ["Via the hypophyseal portal venous system", "Through the central canal of the spinal cord", "Directly through the internal carotid arterial lumen", "Via cranial motor nerves"], answerIndex: 0, explanation: "The hypophyseal portal system carries neurohormones directly from the median eminence to the anterior pituitary parenchyma." }
      ],
      [
        { question: "Dua hormon peptida manakah yang disintesis langsung di nukleus paraventrikular dan supraoptik hipotalamus?", options: ["Hormon antidiuretik (ADH/vasopresin) dan Oksitosin", "Hormon pertumbuhan (GH) dan Prolaktin", "Insulin dan Glukagon", "TSH dan ACTH"], answerIndex: 0, explanation: "ADH dan oksitosin disintesis di badan sel hipotalamus dan dialirkan secara aksonal ke neurohipofisis untuk dilepaskan." },
        { question: "Nukleus hipotalamus manakah yang bertindak sebagai pemacu ritme sirkadian utama tubuh yang mengatur siklus bangun-tidur 24 jam?", options: ["Nukleus suprakiasmatik (NSK)", "Nukleus ventromedial", "Nukleus arkuata", "Korpus mamilaris"], answerIndex: 0, explanation: "Nukleus suprakiasmatik menerima sinyal langsung dari retina untuk menyinkronkan jam biologis internal dengan siklus terang-gelap." },
        { question: "Bagaimanakah faktor pelepas dan penghambat hipotalamus mencapai sel-sel penghasil hormon di pituitari anterior?", options: ["Melalui sistem vena portal hipofisis", "Melalui kanalis sentralis sumsum tulang belakang", "Langsung melalui lumen arteri karotis interna", "Melalui saraf motorik kranial"], answerIndex: 0, explanation: "Sistem portal hipofisis mengalirkan neurohormon secara langsung dari eminensia mediana ke parenkim pituitari anterior." }
      ],
      ["thalamus", "cerebrum", "brainstem"]
    ),

    "Hypothalamus (Right)": lesson("nervous", "brain", { EN: "Hypothalamus (Right)", ID: "Hipotalamus (Kanan)" }, "🧠⚖️",
      {
        overview: "The right hypothalamus functions symmetrically with the left to maintain physiological equilibrium. It regulates internal body temperature, hunger, fluid balance, emotional responses, and autonomic drive.",
        position: "Located in the diencephalon below the right thalamus, forming the anteroventral boundary of the third ventricle.",
        mechanism: "Integrates visceral and hormonal feedback, releasing neuroendocrine factors that stimulate the anterior pituitary gland and modulating autonomic brainstem centers.",
        health: "Lesions can cause poikilothermia (inability to regulate body temperature), hypothalamic amenorrhea, or uncontrolled water loss from lack of antidiuretic hormone."
      },
      {
        overview: "The right hypothalamus is an essential diencephalic autonomic and neuroendocrine command hub, sharing symmetric bilateral connectivity with limbic structures, brainstem nuclei, and the hypophysis.",
        position: "Forms the right lateral wall and floor of the third ventricle, situated inferior to the right thalamus and anterior to the right mammillary body.",
        mechanism: "Thermoregulation: Anterior hypothalamic nuclei mediate heat dissipation (parasympathetic), whereas posterior hypothalamic nuclei coordinate heat conservation/shivering (sympathetic). Lateral nuclei drive hunger; ventromedial nuclei drive satiety.",
        health: "Craniopharyngiomas or hypothalamic gliomas can produce hyperphagic hypothalamic obesity, panhypopituitarism, and temperature instability requiring hormone replacement."
      },
      {
        overview: "Hipotalamus kanan bekerja secara simetris dengan hipotalamus kiri untuk menjaga keseimbangan fisiologis tubuh. Mengatur suhu tubuh internal, rasa lapar, keseimbangan cairan, dan sistem saraf otonom.",
        position: "Terletak di diensefalon di bawah talamus kanan, membentuk dinding anteroventral ventrikel ketiga.",
        mechanism: "Mengintegrasikan umpan balik viseral dan hormonal, melepaskan faktor neuroendokrin yang merangsang pituitari anterior, serta memodulasi pusat otonom di batang otak.",
        health: "Lesi dapat memicu poikilotermia (tubuh tidak mampu mengatur suhu sendiri), amenorea hipotalamik, atau kehilangan cairan masif akibat kekurangan hormon antidiuretik."
      },
      {
        overview: "Hipotalamus kanan adalah pusat kendali otonom dan neuroendokrin diensefalon esensial yang memiliki konektivitas simetris bilateral dengan struktur limbik, nukleus batang otak, dan hipofisis.",
        position: "Membentuk dinding lateral kanan dan dasar ventrikel ketiga, berada di inferior talamus kanan dan anterior korpus mamilaris kanan.",
        mechanism: "Termoregulasi: Nukleus hipotalamus anterior memediasi pelepasan panas (parasimpatis), sedangkan nukleus posterior mengoordinasikan konservasi panas/menggigil (simpatis). Nukleus lateral memicu rasa lapar; nukleus ventromedial memicu rasa kenyang.",
        health: "Kraniofaringioma atau glioma hipotalamus dapat menyebabkan obesitas hipotalamik hiperfagik, panhipopituitarisme, dan ketidakstabilan suhu yang memerlukan terapi sulih hormon."
      },
      [
        { question: "Which region of the hypothalamus is primarily responsible for heat dissipation and triggering sweat/vasodilation?", options: ["Anterior hypothalamus", "Posterior hypothalamus", "Mammillary body", "Subthalamic nucleus"], answerIndex: 0, explanation: "The anterior hypothalamus senses elevated temperature and drives parasympathetic heat-loss mechanisms." },
        { question: "Which hypothalamic nucleus is traditionally identified as the 'satiety center' that suppresses appetite when stimulated?", options: ["Ventromedial nucleus (VMN)", "Lateral hypothalamic area", "Suprachiasmatic nucleus", "Supraoptic nucleus"], answerIndex: 0, explanation: "Bilateral destruction of the ventromedial nucleus causes hyperphagia and severe obesity." },
        { question: "What is the primary clinical consequence of destructive lesions in the hypothalamic magnocellular neurons?", options: ["Central diabetes insipidus with severe dilute polyuria", "Cushing disease with hypercortisolemia", "Hyperthyroidism", "Parkinsonian tremor"], answerIndex: 0, explanation: "Loss of ADH synthesis prevents renal water reabsorption in the collecting ducts, producing massive dilute urine output." }
      ],
      [
        { question: "Wilayah hipotalamus manakah yang bertanggung jawab utama untuk pelepasan panas tubuh (memicu keringat dan vasodilatasi)?", options: ["Hipotalamus anterior", "Hipotalamus posterior", "Korpus mamilaris", "Nukleus subtalamikus"], answerIndex: 0, explanation: "Hipotalamus anterior mendeteksi kenaikan suhu darah dan memicu mekanisme pelepasan panas tubuh." },
        { question: "Nukleus hipotalamus manakah yang dikenal sebagai 'pusat kenyang' yang menekan nafsu makan saat teraktivasi?", options: ["Nukleus ventromedial (VMN)", "Area hipotalamus lateral", "Nukleus suprakiasmatik", "Nukleus supraoptik"], answerIndex: 0, explanation: "Kerusakan pada nukleus ventromedial memicu nafsu makan tak terkendali (hiperfagia) dan obesitas." },
        { question: "Apa konsekuensi klinis utama dari lesi destruktif pada neuron magnoseluler hipotalamus?", options: ["Diabetes insipidus sentral dengan poliuria encer masif", "Penyakit Cushing", "Hipertiroidisme", "Tremor Parkinson"], answerIndex: 0, explanation: "Hilangnya sintesis ADH menghentikan reabsorpsi air di tubulus ginjal, memicu ekskresi urine dalam jumlah sangat besar." }
      ],
      ["thalamus", "cerebrum", "brainstem"]
    ),

    // 5. DUODENUM
    "Duodenum": lesson("digestive", "digestive_organs", { EN: "Duodenum", ID: "Duodenum" }, "🥣🧪",
      {
        overview: "The duodenum is the first and shortest section of the small intestine (about 10 inches or 12 finger-breadths long). It serves as the digestive mixing chamber where acidic stomach chyme is neutralized and mixed with bile and pancreatic enzymes.",
        position: "Situated in the upper abdomen, forming a C-shaped loop wrapping snugly around the head of the pancreas right after the stomach's pylorus.",
        mechanism: "Submucosal Brunner's glands secrete alkaline bicarbonate mucus to neutralize stomach acid, while the major duodenal papilla delivers pancreatic juices and bile to break down fats, proteins, and carbohydrates.",
        health: "Duodenal ulcers are common causes of burning upper abdominal pain (often improving temporarily after eating), frequently caused by *Helicobacter pylori* infection or regular NSAID painkiller use."
      },
      {
        overview: "The duodenum is the proximal, shortest (~25 cm), and predominantly retroperitoneal segment of the small intestine, acting as the primary site of completed chemical digestion and chyme neutralization.",
        position: "Spans from the pyloroduodenal junction (L1 level) to the duodenojejunal flexure (ligament of Treitz, L2 level), anatomically divided into superior (1st/bulb), descending (2nd), horizontal/inferior (3rd), and ascending (4th) parts.",
        mechanism: "Submucosal Brunner's (duodenal) glands secrete bicarbonate-rich alkaline mucus. The descending part contains the major duodenal papilla (ampulla of Vater, guarded by the sphincter of Oddi), delivering bile and pancreatic zymogens (trypsinogen, lipase, amylase). Enteroendocrine I cells release cholecystokinin (CCK) and S cells release secretin.",
        health: "Duodenal peptic ulcers most frequently occur in the duodenal bulb (1st part); anterior ulcers risk free peritoneal perforation, while posterior ulcers risk erosion into the gastroduodenal artery causing massive hemorrhage. Superior mesenteric artery (SMA) syndrome compresses the 3rd duodenal part."
      },
      {
        overview: "Duodenum (usus dua belas jari) adalah bagian pertama dan terpendek dari usus halus (panjang sekitar 25 cm). Berfungsi sebagai ruang pencampuran kimia utama tempat asam lambung dinetralkan dan dicampur dengan empedu serta enzim pankreas.",
        position: "Terletak di perut bagian atas, membentuk lengkungan menyerupai huruf C yang melingkari kepala pankreas tepat setelah lubang pilorus lambung.",
        mechanism: "Kelenjar Brunner submukosa mensekresikan lendir basa bikarbonat untuk menetralkan asam lambung, sementara papila duodeni menyalurkan getah pankreas dan empedu untuk mencerna lemak, protein, dan karbohidrat.",
        health: "Tukak duodenum (ulkus peptikum) memicu nyeri perih di ulu hati yang sering membaik sesaat setelah makan, umumnya disebabkan oleh infeksi bakteri *Helicobacter pylori* atau konsumsi obat antinyeri NSAID."
      },
      {
        overview: "Duodenum adalah segmen usus halus yang paling proksimal, terpendek (~25 cm), dan sebagian besar retroperitoneal, bertindak sebagai lokasi utama penyelesaian pencernaan kimiawi dan netralisasi kimus asam.",
        position: "Membentang dari taut piloroduodenal (setinggi L1) hingga fleksura duodenojejunal (ligamen Treitz, setinggi L2), terbagi menjadi pars superior (bulbus), pars descendens, pars horizontalis, dan pars ascendens.",
        mechanism: "Kelenjar Brunner submukosa mensekresikan mukus kaya bikarbonat. Pars descendens memuat papila duodeni mayor (ampula Vater dengan sfingter Oddi) yang menyalurkan empedu dan zimogen pankreas (tripsinogen, lipase, amilase). Sel enteroendokrin I mensekresikan CCK dan sel S mensekresikan sekretin.",
        health: "Ulkus peptikum duodenum paling sering terjadi di bulbus duodenum; ulkus anterior berisiko perforasi ke rongga peritoneum, sedangkan ulkus posterior berisiko mengikis arteri gastroduodenalis dan memicu perdarahan saluran cerna masif. Sindrom SMA menyebabkan kompresi pada pars horizontalis duodenum."
      },
      [
        { question: "Which anatomical opening in the descending (2nd) part of the duodenum delivers bile and pancreatic juice into the digestive tract?", options: ["Major duodenal papilla (Ampulla of Vater) regulated by the Sphincter of Oddi", "Ileocecal valve", "Pyloric canal", "Cardiac sphincter"], answerIndex: 0, explanation: "The major duodenal papilla is the common opening for the common bile duct and pancreatic duct into the 2nd part of the duodenum." },
        { question: "What specialized submucosal glands in the duodenum produce alkaline mucus to protect the lining against gastric acid?", options: ["Brunner's (duodenal) glands", "Peyer's patches", "Crypts of Lieberkühn only", "Gastric chief cells"], answerIndex: 0, explanation: "Brunner's glands in the duodenal submucosa secrete bicarbonate-rich mucus that elevates luminal pH for pancreatic enzymes." },
        { question: "Which gastrointestinal hormone secreted by duodenal enteroendocrine cells stimulates gallbladder contraction and pancreatic enzyme secretion?", options: ["Cholecystokinin (CCK)", "Gastrin", "Glucagon", "Erythropoietin"], answerIndex: 0, explanation: "CCK is released by duodenal I cells in response to dietary fats and proteins, stimulating bile expulsion and pancreatic acinar secretion." }
      ],
      [
        { question: "Struktur anatomis manakah pada pars descendens duodenum yang menyalurkan empedu dan enzim pankreas ke saluran pencernaan?", options: ["Papila duodeni mayor (Ampula Vater) yang diatur Sfingter Oddi", "Katup ileosekal", "Kanalis pilorus", "Sfingter kardia"], answerIndex: 0, explanation: "Papila duodeni mayor adalah muara bersama duktus koledokus dan duktus pankreatikus ke dalam pars descendens duodenum." },
        { question: "Kelenjar submukosa khusus apakah pada duodenum yang menghasilkan lendir basa untuk melindungi mukosa dari asam lambung?", options: ["Kelenjar Brunner", "Plak Peyer", "Kripta Lieberkühn saja", "Sel utama lambung"], answerIndex: 0, explanation: "Kelenjar Brunner pada submukosa duodenum mensekresikan mukus kaya bikarbonat untuk menetralkan kimus asam lambung." },
        { question: "Hormon saluran cerna apa yang disekresikan oleh sel enteroendokrin duodenum untuk merangsang kontraksi kandung empedu dan pelepasan enzim pankreas?", options: ["Kolesistokinin (CCK)", "Gastrin", "Glukagon", "Eritropoietin"], answerIndex: 0, explanation: "CCK disekresikan oleh sel I duodenum sebagai respons terhadap asam lemak dan peptida, memicu pengosongan empedu dan sekresi enzim pankreas." }
      ],
      ["stomach", "pancreas", "liver", "small_intestine"]
    ),

    // 6 & 7. URETER (LEFT & RIGHT)
    "Ureter (Left)": lesson("urinary", "kidneys_bladder", { EN: "Ureter (Left)", ID: "Ureter (Kiri)" }, "🫘🌊",
      {
        overview: "The left ureter is a muscular tube (about 10 to 12 inches long) that actively propels urine from your left kidney down into the urinary bladder.",
        position: "Runs vertically down the left posterior abdominal and pelvic wall behind the digestive organs (retroperitoneal), connecting the left renal pelvis to the base of the bladder.",
        mechanism: "Smooth muscle in its walls contracts in rhythmic peristaltic waves several times a minute, pumping urine downward. Enters the bladder wall at an oblique angle that functions as a one-way flap valve.",
        health: "Kidney stones traveling down the left ureter can lodge at physiological narrowings, producing severe spasmodic flank and groin pain (renal colic). Failure of the one-way valve leads to vesicoureteral reflux (VUR)."
      },
      {
        overview: "The left ureter is a retroperitoneal fibromuscular conduit (25–30 cm in length, 3–4 mm in caliber) lined by specialized transitional epithelium (urothelium) that actively transports urine via smooth muscle peristalsis.",
        position: "Originates at the left ureteropelvic junction (UPJ, L2 level), descends vertically on the anterior surface of the left psoas major muscle, crosses anterior to the left common iliac vessels at the pelvic brim, and enters the bladder base obliquely at the ureterovesical junction (UVJ).",
        mechanism: "Histologically consists of mucosa (urothelium), a muscularis (inner longitudinal and outer circular smooth muscle layers), and an adventitia. Myogenic pacemaker cells in the renal pelvis generate peristaltic waves (1–5/min). The 1.5–2 cm oblique intramural passage through the detrusor muscle collapses under intravesical pressure during bladder filling, preventing reflux.",
        health: "Ureteral calculi typically lodge at three sites of narrowing: (1) UPJ, (2) Pelvic brim crossing iliac vessels, and (3) UVJ / intramural tunnel, causing acute severe renal colic. Vesicoureteral reflux (VUR) promotes ascending pyelonephritis and hydronephrosis."
      },
      {
        overview: "Ureter kiri adalah saluran berotot sepanjang 25-30 cm yang secara aktif memompa urine dari ginjal kiri turun ke kandung kemih.",
        position: "Membentang vertikal di dinding belakang rongga perut dan panggul kiri di belakang organ pencernaan (retroperitoneal), menghubungkan pelvis ginjal kiri ke dasar kandung kemih.",
        mechanism: "Otot polos pada dindingnya berkontraksi dalam gelombang peristaltik ritmis beberapa kali per menit untuk mendorong urine. Masuk ke dinding kandung kemih dengan sudut miring sebagai katup satu arah pencegah aliran balik.",
        health: "Batu ginjal yang turun ke ureter kiri dapat tersangkut pada penyempitan alami, memicu nyeri kolik tajam di pinggang kiri yang menjalar ke selangkangan. Kelemahan katup memicu refluks vesikoureter (VUR)."
      },
      {
        overview: "Ureter kiri adalah saluran fibromuskular retroperitoneal (panjang 25-30 cm, kaliber 3-4 mm) berlapisan urotelium yang mengangkut urine melalui gerak peristaltik otot polos aktif.",
        position: "Bermula dari taut ureteropelvis kiri (UPJ, setinggi L2), berjalan turun di anterior otot psoas mayor kiri, menyilang di depan pembuluh iliaka komunis kiri pada tepi panggul, dan memasuki kandung kemih secara miring di taut ureterovesika (UVJ).",
        mechanism: "Tersusun atas mukosa (urotelium), muskularis (lapisan longitudinal dalam dan sirkular luar), serta adventisia. Sel pacu miogenik memicu kontraksi peristaltik (1-5 kali/menit). Terowongan intramural sepanjang 1,5-2 cm di dinding kandung kemih tertekan oleh tekanan intravesika saat terisi, mencegah refluks urine.",
        health: "Batu ureter rentan tersangkut di 3 titik penyempitan: (1) UPJ, (2) Persilangan pembuluh iliaka di tepi panggul, dan (3) UVJ intramural, memicu kolik renal akut. Refluks vesikoureter (VUR) memicu infeksi ginjal asenden (pielonefritis) dan hidronefrosis."
      },
      [
        { question: "How is urine propelled through the ureter from the kidney to the bladder?", options: ["Via active smooth muscle peristalsis independent of gravity", "Exclusively by gravitational hydrostatic pressure", "By voluntary contraction of pelvic skeletal muscles", "Through passive arterial pulsatile compression"], answerIndex: 0, explanation: "Myogenic pacemaker cells in the renal pelvis generate rhythmic smooth muscle peristaltic waves that propel urine boluses even when supine." },
        { question: "What anatomical arrangement prevents vesicoureteral reflux (urine backing up into the ureter during bladder filling)?", options: ["The oblique intramural passage through the bladder wall which collapses under rising intravesical pressure", "A cartilaginous flap valve at the renal pelvis", "A voluntary striated muscle sphincter", "An active ATP-dependent sodium gate"], answerIndex: 0, explanation: "As the bladder fills with urine, the increased intravesical pressure compresses the oblique intramural ureteral tunnel, sealing it shut." },
        { question: "Which of the following is one of the three classic anatomical sites where kidney stones lodge in the ureter?", options: ["Ureterovesical junction (UVJ) entering the bladder wall", "Renal cortex glomerulus", "Prostatic urethra", "Splenic flexure"], answerIndex: 0, explanation: "The UVJ is the narrowest point of the entire ureter and the most frequent site of calculus impaction." }
      ],
      [
        { question: "Bagaimanakah urine dialirkan di sepanjang ureter dari ginjal menuju kandung kemih?", options: ["Melalui gerakan peristaltik aktif otot polos yang independen dari gravitasi", "Hanya mengandalkan gaya gravitasi saat berdiri", "Melalui kontraksi sadar otot rangka panggul", "Melalui kompresi denyut nadi arteri pasif"], answerIndex: 0, explanation: "Sel pacu miogenik pada pelvis ginjal memicu gelombang peristaltik ritmis yang mendorong bolus urine bahkan saat berbaring." },
        { question: "Struktur anatomis apakah yang mencegah refluks vesikoureter (aliran balik urine ke ginjal saat kandung kemih terisi)?", options: ["Lintasan intramural miring yang menembus dinding kandung kemih dan menutup akibat tekanan intravesika", "Katup tulang rawan pada pelvis ginjal", "Sfingter otot lurik sadar", "Pintu gerbang natrium dependen-ATP"], answerIndex: 0, explanation: "Saat kandung kemih terisi, tekanan urine di dalam rongga menekan lorong intramural ureter yang miring sehingga tertutup rapat." },
        { question: "Manakah di antara pilihan berikut yang merupakan salah satu dari tiga lokasi penyempitan anatomis klasik tempat tersangkutnya batu ureter?", options: ["Taut ureterovesika (UVJ) saat menembus dinding kandung kemih", "Glomerulus korteks ginjal", "Uretra prostatika", "Fleksura splenika"], answerIndex: 0, explanation: "Taut ureterovesika (UVJ) adalah bagian tersempit dari seluruh saluran ureter dan lokasi paling umum tersangkutnya batu." }
      ],
      ["left_kidney", "urinary_bladder"]
    ),

    "Ureter (Right)": lesson("urinary", "kidneys_bladder", { EN: "Ureter (Right)", ID: "Ureter (Kanan)" }, "🫘🌊",
      {
        overview: "The right ureter is the muscular tube carrying urine from your right kidney to the bladder. It operates rhythmically to pump urine downward continuously.",
        position: "Descends vertically in the right retroperitoneal space, passing behind the duodenum, right colon vessels, and root of the mesentery to enter the bladder base.",
        mechanism: "Employs peristaltic contractions of smooth muscle coats to drive urine forward, using an oblique valve-like entry into the bladder to protect against reflux.",
        health: "Right ureteral stone impaction causes severe right flank and lower quadrant pain that can mimic acute appendicitis or biliary colic, requiring urgent ultrasound or CT imaging."
      },
      {
        overview: "The right ureter is a retroperitoneal muscular conduit conveying urine from the right renal pelvis to the urinary bladder via rhythmic smooth muscle contractions.",
        position: "Originates at the right UPJ (L2 level), descends on the right psoas major muscle, crossed anteriorly by the right gonadal vessels, right colic vessels, and root of the mesentery, crossing the external/common iliac artery at the pelvic brim to reach the UVJ.",
        mechanism: "Tri-layered wall (urothelium, inner longitudinal and outer circular smooth muscle, adventitia) conducts myogenic peristaltic waves. Oblique intramural passage provides a passive physiological anti-reflux valve.",
        health: "Right ureteral colic presents with sudden severe colicky pain radiating to the right groin and scrotum/labia, often mimicking acute appendicitis. Persistent obstruction leads to hydroureter and hydronephrosis."
      },
      {
        overview: "Ureter kanan adalah saluran berotot yang membawa urine dari ginjal kanan ke kandung kemih. Bekerja secara ritmis untuk memompa urine secara terus-menerus.",
        position: "Berjalan turun secara vertikal di ruang retroperitoneal kanan, melintas di belakang duodenum dan pembuluh usus kanan menuju dasar kandung kemih.",
        mechanism: "Menggunakan kontraksi peristaltik otot polos untuk mendorong urine maju, serta bermuara miring ke dalam kandung kemih sebagai pelindung dari aliran balik.",
        health: "Batu yang tersangkut di ureter kanan menimbulkan nyeri kolik hebat di pinggang dan perut kanan bawah yang gejalanya menyerupai usus buntu (apendisitis akut), membutuhkan pemeriksaan USG atau CT scan."
      },
      {
        overview: "Ureter kanan adalah saluran muskular retroperitoneal yang mengalirkan urine dari pelvis ginjal kanan ke kandung kemih melalui kontraksi peristaltik ritmis.",
        position: "Bermula di UPJ kanan (setinggi L2), turun di atas otot psoas mayor kanan, disilang di anterior oleh pembuluh gonad kanan dan akar mesenterium, menyilang pembuluh iliaka di tepi panggul menuju UVJ.",
        mechanism: "Dinding tiga lapis (urotelium, muskularis longitudinal dan sirkular, adventisia) menghantarkan gelombang peristaltik miogenik. Lintasan intramural miring menyediakan katup anti-refluks fisiologis pasif.",
        health: "Kolik ureter kanan bermanifestasi dengan nyeri tajam mendadak yang menjalar ke selangkangan kanan, sering kali menyerupai apendisitis akut. Obstruksi berkepanjangan memicu hidroureter dan hidronefrosis."
      },
      [
        { question: "Why does right-sided ureteral colic frequently present as a diagnostic challenge in acute abdominal emergencies?", options: ["Its right lower quadrant radiation can closely mimic acute appendicitis", "It causes immediate left lung collapse", "It mimics intracranial hemorrhage", "It prevents all salivary secretion"], answerIndex: 0, explanation: "Right ureteral obstruction referred pain along the T11-L2 dermatomes into the right lower quadrant frequently resembles acute appendicitis." },
        { question: "What epithelial cell type lines the entire luminal mucosal surface of the ureter?", options: ["Transitional epithelium (Urothelium)", "Simple squamous epithelium", "Ciliated pseudostratified columnar epithelium", "Keratinized stratified squamous epithelium"], answerIndex: 0, explanation: "Transitional epithelium (urothelium) lines the urinary tract, capable of stretching while providing an impermeable barrier against toxic urine solutes." },
        { question: "At what vertebral level does the ureter typically originate from the renal pelvis (ureteropelvic junction)?", options: ["Vertebral level L2", "Vertebral level C7", "Vertebral level T4", "Vertebral level S4"], answerIndex: 0, explanation: "The ureteropelvic junction (UPJ) is situated at approximately the L2 vertebral level near the renal hilum." }
      ],
      [
        { question: "Mengapa kolik ureter kanan sering kali menjadi tantangan diagnostik dalam kegawatdaruratan abdomen akut?", options: ["Penjalaran nyerinya ke perut kanan bawah sangat menyerupai gejala usus buntu (apendisitis akut)", "Menyebabkan kolaps paru kiri seketika", "Menyerupai perdarahan intrakranial", "Menghentikan semua sekresi air liur"], answerIndex: 0, explanation: "Nyeri alih obstruksi ureter kanan di dermatom T11-L2 ke perut kanan bawah menyerupai tanda klinis apendisitis akut." },
        { question: "Jenis epitel apakah yang melapisi seluruh permukaan mukosa luminal ureter?", options: ["Epitel transisional (Urotelium)", "Epitel skuamosa selapis", "Epitel kolumnar bersilia bertingkat", "Epitel pipih berlapis berkeratin"], answerIndex: 0, explanation: "Epitel transisional (urotelium) melapisi saluran kemih, mampu meregang sekaligus menjadi barier kedap terhadap racun urine." },
        { question: "Pada tingkat vertebra manakah ureter biasanya bermula dari pelvis ginjal (taut ureteropelvis)?", options: ["Tingkat vertebra L2", "Tingkat vertebra C7", "Tingkat vertebra T4", "Tingkat vertebra S4"], answerIndex: 0, explanation: "Taut ureteropelvis (UPJ) terletak kira-kira setinggi vertebra L2 di dekat hilus ginjal." }
      ],
      ["right_kidney", "urinary_bladder"]
    ),

    // 8. CERVICAL VERTEBRA C3
    "Cervical Vertebra C3": lesson("skeletal", "skull_spine", { EN: "Cervical Vertebra C3", ID: "Vertebra Servikal C3" }, "💀🧣",
      {
        overview: "Cervical vertebra C3 is a small, agile neck bone in the upper-middle cervical spine. It supports head movement, protects the cervical spinal cord, and contributes nerve fibers that control your breathing diaphragm.",
        position: "Located in the upper neck directly beneath the Axis (C2), corresponding in front to the level of the hyoid bone in the throat.",
        mechanism: "Features a light, broad vertebral body, transverse foramina on each side that channel the ascending vertebral arteries, and small facet joints allowing multi-directional neck flexion and rotation.",
        health: "High cervical neck trauma involving C3 can jeopardize the phrenic nerve ('C3, C4, C5 keep the diaphragm alive'), threatening breathing. Degenerative bone spurs (uncovertebral arthrosis) can pinch cervical nerve roots."
      },
      {
        overview: "Cervical vertebra C3 is the first typical subaxial cervical vertebra, characterized by a small transverse-oval vertebral body, uncinate processes, bilateral foramina transversaria, and a short bifid spinous process.",
        position: "Situated in the upper subaxial cervical spine between C2 (axis) and C4, anteriorly corresponding to the level of the hyoid bone and the bifurcation of the common carotid artery.",
        mechanism: "Articulates via superior and inferior articular facets oriented at 45 degrees in the coronal plane permitting flexion, extension, and lateral bending. Transverse foramina transmit the ascending vertebral artery and vertebral venous plexus. Intervertebral foramina transmit the C3 and C4 spinal nerve roots.",
        health: "Contributes roots to the motor phrenic nerve. Uncovertebral arthrosis (joints of Luschka) and disc herniations at C3-C4 can compress the C4 nerve root or compromise local spinal cord space, producing neck pain and upper extremity radiculopathy."
      },
      {
        overview: "Vertebra servikal C3 adalah ruas tulang leher kecil yang berada di bagian atas leher. Tulang ini menopang gerakan kepala, melindungi sumsum tulang belakang, dan menyumbang serabut saraf penggerak diafragma pernapasan.",
        position: "Terletak di leher bagian atas tepat di bawah ruas Aksis (C2), sejajar di bagian depan dengan tulang hioid (tulang pangkal lidah) di tenggorokan.",
        mechanism: "Memiliki korpus tulang yang pipih dan lebar, lubang transversus di kedua sisi yang dilalui arteri vertebralis menuju otak, serta sendi faset yang memungkinkan gerakan fleksi dan rotasi leher.",
        health: "Cedera leher bagian atas pada C3 dapat membahayakan saraf frenikus pengatur napas ('C3, C4, C5 menjaga diafragma tetap hidup'). Pengapuran tulang (osteofit) dapat menjepit saraf leher."
      },
      {
        overview: "Vertebra servikal C3 adalah vertebra servikal subaksial tipikal pertama, ditandai dengan korpus kecil oval melintang, prosesus unsinatus, foramina transversaria bilateral, dan prosesus spinosus bifida pendek.",
        position: "Berada di kolom servikal subaksial antara C2 (aksis) dan C4, sejajar di anterior dengan tulang hioid dan percabangan arteri karotis komunis.",
        mechanism: "Berartikulasi melalui faset artikular superior dan inferior bersudut 45 derajat pada bidang koronal yang memfasilitasi gerakan fleksi, ekstensi, dan fleksi lateral. Foramina transversaria mentransmisikan arteri vertebralis dan pleksus vena. Foramen intervertebralis dilalui akar saraf C3 dan C4.",
        health: "Menyumbang serabut saraf motorik ke saraf frenikus diafragma. Artrosis unkovertebral (sendi Luschka) pada C3-C4 dapat mengompresi akar saraf C4 dan memicu nyeri leher serta radikulopati lengan atas."
      },
      [
        { question: "Which major blood vessel ascends through the transverse foramina of cervical vertebra C3?", options: ["Vertebral artery", "Internal carotid artery", "External jugular vein", "Subclavian artery"], answerIndex: 0, explanation: "The vertebral artery ascends through the transverse foramina of C6 up to C1 to supply posterior cerebral circulation." },
        { question: "C3 contributes motor root fibers to which vital nerve controlling the respiratory diaphragm?", options: ["Phrenic nerve", "Vagus nerve", "Sciatic nerve", "Accessory nerve"], answerIndex: 0, explanation: "The phrenic nerve is formed by cervical roots C3, C4, and C5 ('C3-4-5 keep the diaphragm alive')." },
        { question: "What characteristic feature of typical subaxial cervical spinous processes (like C3) distinguishes them anatomically?", options: ["Bifid (forked) spinous process", "Mammillary processes", "Costal demifacets", "Long non-bifid downward spike"], answerIndex: 0, explanation: "Typical cervical vertebrae (C3–C6) have short, bifid spinous processes for deep nuchal muscle attachments." }
      ],
      [
        { question: "Pembuluh darah utama manakah yang berjalan naik melalui foramina transversaria pada vertebra servikal C3?", options: ["Arteri vertebralis", "Arteri karotis interna", "Vena jugularis eksterna", "Arteri subklavia"], answerIndex: 0, explanation: "Arteri vertebralis naik melewati lubang transversus vertebra servikal C6 hingga C1 untuk memasok sirkulasi otak posterior." },
        { question: "Vertebra C3 menyumbangkan serabut akar motorik ke saraf vital manakah yang mengendalikan diafragma pernapasan?", options: ["Saraf frenikus", "Saraf vagus", "Saraf skiatik", "Saraf aksesorius"], answerIndex: 0, explanation: "Saraf frenikus dibentuk oleh cabang servikal C3, C4, dan C5 untuk menggerakkan diafragma." },
        { question: "Ciri khas anatomis apakah pada prosesus spinosus vertebra servikal tipikal (seperti C3) yang membedakannya?", options: ["Prosesus spinosus bifida (bercabang dua)", "Prosesus mamilaris", "Faset kosta", "Taji tunggal panjang ke bawah"], answerIndex: 0, explanation: "Vertebra servikal tipikal (C3–C6) memiliki ujung prosesus spinosus bifida bercabang dua untuk pelekatan otot leher dalam." }
      ],
      ["c4_vertebra", "c2_axis", "c1_atlas"]
    ),

    // 9. CERVICAL VERTEBRA C4
    "Cervical Vertebra C4": lesson("skeletal", "skull_spine", { EN: "Cervical Vertebra C4", ID: "Vertebra Servikal C4" }, "💀🧣",
      {
        overview: "Cervical vertebra C4 sits right at the center of your neck curve. It acts as a pivotal mechanical fulcrum for neck flexibility and provides the main nerve supply to your diaphragm for breathing.",
        position: "Located in the mid-cervical spine, aligning in front with the upper border of the thyroid cartilage (Adam's apple).",
        mechanism: "Supports vertical head weight, allows smooth multi-directional neck rotation and tilting, and provides a protected bony canal for the cervical spinal cord.",
        health: "Spinal cord injuries at or above C4 lead to loss of independent breathing due to diaphragmatic paralysis, requiring ventilator support. C3-C4 disc bulges cause neck, shoulder, and trapezius pain."
      },
      {
        overview: "Cervical vertebra C4 is a typical mid-cervical vertebra occupying the vertex of normal cervical lordosis, possessing an oval body, uncinate processes, transverse foramina, and contributing the primary root to the phrenic nerve.",
        position: "Positioned at the midpoint of the subaxial cervical spine between C3 and C5, aligning anteriorly with the superior thyroid notch of the laryngeal skeleton.",
        mechanism: "Provides a biomechanical pivot in the cervical lordotic arc. Articular facet joints guide coupled lateral flexion and rotation. Transverse foramina convey the vertebral artery. Transmits the C4 and C5 spinal nerve roots via intervertebral foramina.",
        health: "C4 is the principal contributor to the phrenic motor nerve (C3, C4, C5). High cervical spinal cord trauma at C4 compromises diaphragmatic motor drive. Spondylosis at C3-C4 or C4-C5 causes shoulder paresthesia and scapular pain."
      },
      {
        overview: "Vertebra servikal C4 berada tepat di tengah lengkungan leher Anda. Bertindak sebagai titik tumpu utama kelenturan leher dan menyediakan pasokan saraf utama ke diafragma untuk bernapas.",
        position: "Terletak di pertengahan leher, sejajar di bagian depan dengan tepi atas tulang rawan tiroid (jakun).",
        mechanism: "Menopang berat kepala vertikal, memungkinkan gerakan memutar dan memiringkan leher secara mulus, serta menyediakan saluran pelindung bagi sumsum tulang belakang.",
        health: "Cedera sumsum tulang belakang setinggi C4 dapat melumpuhkan otot diafragma dan menghentikan pernapasan mandiri. Tonjolan bantalan sendi (hernia diskus) pada C3-C4 memicu nyeri bahu dan leher."
      },
      {
        overview: "Vertebra servikal C4 adalah vertebra servikal tengah tipikal yang menempati puncak kelengkungan lordosis servikal normal, memiliki korpus oval, prosesus unsinatus, dan menyumbang akar saraf utama ke saraf frenikus.",
        position: "Terletak di titik tengah kolom servikal subaksial antara C3 dan C5, sejajar di anterior dengan takik tiroid superior laring.",
        mechanism: "Menyediakan titik tumpu biomekanik pada lengkung lordosis servikal. Sendi faset artikular memandu gerakan fleksi lateral dan rotasi. Foramina transversaria mentransmisikan arteri vertebralis. Foramen intervertebralis mentransmisikan akar saraf C4 dan C5.",
        health: "C4 adalah penyumbang utama saraf motorik frenikus. Trauma sumsum tulang belakang servikal tinggi setinggi C4 melumpuhkan diafragma. Spondilosis pada C3-C4 memicu parestesia bahu dan nyeri skapula."
      },
      [
        { question: "What is the vital functional significance of spinal nerve roots emerging at cervical level C4?", options: ["Primary motor contribution to the phrenic nerve controlling breathing", "Sensory supply to the foot", "Motor control of the urinary bladder", "Direct innervation of heart valves"], answerIndex: 0, explanation: "The C4 spinal root provides the largest motor contribution to the phrenic nerve driving diaphragmatic contraction." },
        { question: "Anteriorly, cervical vertebra C4 corresponds to which landmark of the anterior neck?", options: ["Superior border of thyroid cartilage (laryngeal notch)", "Sternal notch", "Umbilicus", "Xiphoid process"], answerIndex: 0, explanation: "C4 is clinically located at the level of the upper thyroid cartilage border in the anterior neck." },
        { question: "What curvature is normally present in the cervical spine centered around C4-C5?", options: ["Lordosis (anterior convex curvature)", "Kyphosis", "Scoliosis", "Straight flat alignment"], answerIndex: 0, explanation: "The normal human cervical spine exhibits a secondary lordotic curve (anterior convexity) to balance the head." }
      ],
      [
        { question: "Apa signifikansi fungsional vital dari akar saraf spinal yang keluar setinggi servikal C4?", options: ["Kontribusi motorik utama ke saraf frenikus pengatur pernapasan diafragma", "Pasokan sensorik ke telapak kaki", "Kontrol motorik kandung kemih", "Inervasi langsung katup jantung"], answerIndex: 0, explanation: "Akar saraf C4 memberikan kontribusi motorik terbesar pada saraf frenikus yang menggerakkan diafragma." },
        { question: "Di bagian depan, vertebra servikal C4 sejajar dengan penanda anatomis leher manakah?", options: ["Tepi atas tulang rawan tiroid (jakun)", "Takik sternum", "Pusar (umbilikus)", "Prosesus xifoideus"], answerIndex: 0, explanation: "C4 secara klinis terletak sejajar dengan takik superior kartilago tiroid di leher depan." },
        { question: "Kurvatura normal apakah yang terdapat pada tulang belakang leher yang berpusat di sekitar C4-C5?", options: ["Lordosis (kelengkungan cembung ke arah depan)", "Kifosis", "Skoliosis", "Lurus kaku tanpa kelengkungan"], answerIndex: 0, explanation: "Tulang belakang leher manusia yang sehat memiliki kurvatura sekunder lordosis (cembung ke depan) untuk menyeimbangkan kepala." }
      ],
      ["c3_vertebra", "c5_vertebra", "c6_vertebra"]
    ),

    // 10. CERVICAL VERTEBRA C5
    "Cervical Vertebra C5": lesson("skeletal", "skull_spine", { EN: "Cervical Vertebra C5", ID: "Vertebra Servikal C5" }, "💀🧣",
      {
        overview: "Cervical vertebra C5 is a lower-neck vertebra that bears heavy mechanical loads and protects spinal nerves powering your shoulder muscles (deltoid) and elbow flexors (biceps).",
        position: "Situated in the lower cervical spine directly below C4, aligning anteriorly near the cricoid cartilage of the airway.",
        mechanism: "Has a thicker vertebral body than upper neck bones to absorb downward force, with transverse foramina carrying vertebral arteries and large intervertebral spaces for nerve roots.",
        health: "C4-C5 disc herniations are very common, causing C5 radiculopathy: weakness when lifting the arm out to the side (deltoid weakness), elbow flexion weakness (biceps), and a diminished biceps reflex."
      },
      {
        overview: "Cervical vertebra C5 is a lower subaxial cervical vertebra characterized by a broader, load-bearing vertebral body, well-developed uncinate processes, and transmission of the C5 spinal root contributing to the upper trunk of the brachial plexus.",
        position: "Positioned between C4 and C6 in the lower cervical column, corresponding anteriorly to the level of the cricoid cartilage and the C5-C6 intervertebral disc.",
        mechanism: "Endures increasing compressive and rotational forces from the head. Foramina transversaria house the ascending vertebral artery and sympathetic plexuses. Intervertebral foramina transmit the C5 nerve root providing motor innervation to the deltoid, supraspinatus, and biceps brachii.",
        health: "C4-C5 and C5-C6 disc herniations are the most frequent sites of cervical radiculopathy. C5 nerve root compression produces weakness in shoulder abduction (deltoid) and elbow flexion (biceps), diminished biceps deep tendon reflex, and sensory loss over the lateral shoulder badge area."
      },
      {
        overview: "Vertebra servikal C5 adalah ruas tulang leher bagian bawah yang menahan beban mekanik berat serta melindungi saraf spinal penggerak otot bahu (deltoid) dan otot lengan atas (biseps).",
        position: "Terletak di leher bagian bawah tepat di bawah C4, sejajar di bagian depan di dekat tulang rawan krikoid saluran napas.",
        mechanism: "Memiliki korpus tulang yang lebih tebal untuk menyerap tekanan kepala, lubang transversus pembawa arteri vertebralis, serta celah sendi lebar untuk akar saraf lengan.",
        health: "Bantalan sendi C4-C5 sangat sering mengalami jepitan (hernia nukleus pulposus), memicu radikulopati C5: kelemahan saat mengangkat bahu ke samping (otot deltoid), kelemahan menekuk siku, dan penurunan refleks biseps."
      },
      {
        overview: "Vertebra servikal C5 adalah vertebra servikal subaksial bawah dengan korpus penopang beban yang lebih lebar, prosesus unsinatus yang berkembang baik, dan jalur akar saraf C5 pembentuk trunkus superior pleksus brakialis.",
        position: "Berada di antara C4 dan C6 pada kolom servikal bawah, sejajar di anterior dengan kartilago krikoid laring.",
        mechanism: "Menahan gaya kompresi dan rotasi kepala yang meningkat. Foramina transversaria memuat arteri vertebralis. Foramen intervertebralis mentransmisikan akar saraf C5 yang menginervasi motorik otot deltoid, supraspinatus, dan biseps braki.",
        health: "Herniasi diskus C4-C5 dan C5-C6 merupakan lokasi radikulopati servikal paling umum. Kompresi akar saraf C5 memicu kelemahan abduksi bahu (deltoid), kelemahan fleksi siku (biseps), penurunan refleks biseps, dan mati rasa di bahu lateral."
      },
      [
        { question: "Which major muscle group experiences motor weakness when the C5 spinal nerve root is compressed by a disc herniation?", options: ["Deltoid (shoulder abduction) and Biceps brachii (elbow flexion)", "Gastrocnemius (plantarflexion)", "Quadriceps femoris (knee extension)", "Rectus abdominis"], answerIndex: 0, explanation: "The C5 nerve root primarily innervates the deltoid and biceps brachii muscles; its compression impairs shoulder abduction and elbow flexion." },
        { question: "Which deep tendon reflex is classically evaluated to test the integrity of the C5-C6 spinal reflex arc?", options: ["Biceps tendon reflex", "Patellar tendon reflex", "Achilles tendon reflex", "Plantar reflex"], answerIndex: 0, explanation: "Tapping the biceps tendon tests the deep tendon reflex arc mediated primarily by the C5 and C6 nerve roots." },
        { question: "The sensory dermatome corresponding to spinal nerve root C5 covers which anatomical region?", options: ["Lateral aspect of the shoulder and upper arm ('regimental badge area')", "Umbilicus", "Great toe dorsum", "Posterior calf"], answerIndex: 0, explanation: "The C5 dermatome supplies sensation to the outer shoulder and upper lateral arm." }
      ],
      [
        { question: "Kelompok otot utama manakah yang mengalami kelemahan motorik ketika akar saraf spinal C5 terjepit oleh hernia diskus?", options: ["Deltoid (abduksi bahu) dan Biseps braki (fleksi siku)", "Gastroknemius (plantarfleksi)", "Kuadriseps femoris (ekstensi lutut)", "Rektus abdominis"], answerIndex: 0, explanation: "Akar saraf C5 menginervasi otot deltoid dan biseps; jepitannya melemahkan kemampuan mengangkat lengan ke samping dan menekuk siku." },
        { question: "Refleks tendon dalam manakah yang dievaluasi secara klasik untuk menguji integritas lengkung refleks spinal C5-C6?", options: ["Refleks tendon biseps", "Refleks patela", "Refleks tendon Achilles", "Refleks Babinski"], answerIndex: 0, explanation: "Mengetuk tendon biseps menguji lengkung refleks tendon dalam yang dimediasi oleh akar saraf C5 dan C6." },
        { question: "Dermatom sensorik yang sesuai dengan akar saraf spinal C5 mencakup wilayah anatomi mana?", options: ["Sisi lateral bahu dan lengan atas luar", "Area pusar (umbilikus)", "Punggung ibu jari kaki", "Betis belakang"], answerIndex: 0, explanation: "Dermatom C5 menyuplai sensasi rabaan ke area bahu luar dan lengan atas lateral." }
      ],
      ["c4_vertebra", "c6_vertebra", "c7_vertebra"]
    ),

    // 11. CERVICAL VERTEBRA C6
    "Cervical Vertebra C6": lesson("skeletal", "skull_spine", { EN: "Cervical Vertebra C6", ID: "Vertebra Servikal C6" }, "💀🧣",
      {
        overview: "Cervical vertebra C6 features a prominent anatomical landmark called the carotid tubercle. It is the lowest neck bone through which the vertebral artery enters to travel up to the brain.",
        position: "Situated in the lower neck directly above C7, corresponding anteriorly to the level of the cricoid cartilage and first tracheal ring.",
        mechanism: "Has a prominent anterior projection on its transverse process (Chassaignac's tubercle) where the common carotid artery can be manually pressed. Transmits nerves controlling wrist extension and thumb sensation.",
        health: "C5-C6 disc herniation compresses the C6 nerve root, causing weakness in wrist extension, loss of the brachioradialis reflex, and numbness radiating down the arm into the thumb and index finger."
      },
      {
        overview: "Cervical vertebra C6 is distinguished by a large, palpable anterior transverse tubercle known as the **carotid tubercle (Chassaignac's tubercle)** and is the lowest vertebra through which the vertebral artery typically enters the foramina transversaria.",
        position: "Located in the inferior subaxial cervical spine between C5 and C7, corresponding anteriorly to the lower border of the cricoid cartilage (C6 level), where the larynx transitions to the trachea and pharynx transitions to the esophagus.",
        mechanism: "The carotid tubercle acts as an anterior bony anvil against which the common carotid artery can be compressed to control hemorrhage. Houses the C6 spinal nerve (part of the brachial plexus supplying wrist extensors and the radial forearm).",
        health: "C6 is a vital surgical landmark for stellate ganglion blockade and anterior cervical discectomy (ACDF). C5-C6 herniation produces C6 radiculopathy characterized by pain radiating to the thumb, weakness of extensor carpi radialis, and diminished brachioradialis reflex."
      },
      {
        overview: "Vertebra servikal C6 memiliki tonjolan penanda penting yang disebut tuberkel karotid. Ruas ini merupakan tulang leher terbawah tempat arteri vertebralis masuk untuk naik menuju otak.",
        position: "Terletak di leher bawah tepat di atas C7, sejajar di bagian depan dengan batas bawah tulang rawan krikoid dan cincin trakea pertama.",
        mechanism: "Memiliki tonjolan anterior pada prosesus transversus (tuberkel Chassaignac) tempat arteri karotis dapat ditekan secara manual untuk menahan pendarahan. Mengalirkan saraf penggerak pergelangan tangan dan sensasi ibu jari.",
        health: "Jepitan saraf pada C5-C6 memicu radikulopati C6: kelemahan saat mengangkat pergelangan tangan ke atas, hilangnya refleks brakioradialis, dan mati rasa yang menjalar hingga ke ibu jari."
      },
      {
        overview: "Vertebra servikal C6 dibedakan oleh tuberkel transversus anterior yang menonjol dan dapat diraba, dikenal sebagai **tuberkel karotid (tuberkel Chassaignac)**, dan merupakan vertebra terbawah tempat arteri vertebralis memasuki foramina transversaria.",
        position: "Berada di kolom servikal subaksial inferior antara C5 dan C7, sejajar di anterior dengan batas bawah kartilago krikoid (setinggi C6), titik transisi laring ke trakea dan faring ke esofagus.",
        mechanism: "Tuberkel karotid bertindak sebagai landasan tulang tempat arteri karotis komunis dapat ditekan untuk hemostasis darurat. Mentransmisikan saraf spinal C6 yang memasok otot ekstensor pergelangan tangan.",
        health: "C6 adalah penanda bedah penting untuk blok ganglion stelata dan operasi fusi servikal anterior (ACDF). Herniasi diskus C5-C6 memicu radikulopati C6 dengan nyeri menjalar ke ibu jari tangan, kelemahan ekstensor karpi radialis, dan penurunan refleks brakioradialis."
      },
      [
        { question: "What is the prominent anterior bony landmark on the transverse process of cervical vertebra C6 called?", options: ["Carotid tubercle (Chassaignac's tubercle)", "Dens", "Vertebra prominens", "Crista galli"], answerIndex: 0, explanation: "Chassaignac's carotid tubercle on C6 is a prominent anterior projection where the common carotid artery can be palpated and compressed." },
        { question: "At which cervical vertebra does the ascending vertebral artery typically first enter the foramina transversaria?", options: ["Cervical vertebra C6", "Cervical vertebra C7", "Cervical vertebra C1", "Cervical vertebra C3"], answerIndex: 0, explanation: "The vertebral artery typically enters the transverse foramen at C6, bypassing C7, and ascends through C6–C1." },
        { question: "A herniated disc compressing the C6 spinal nerve root characteristically produces sensory loss (numbness) in which digit?", options: ["Thumb (radial side of hand)", "Little finger (5th digit)", "Middle finger only", "Toes"], answerIndex: 0, explanation: "The C6 dermatome covers the lateral forearm, thumb, and index finger." }
      ],
      [
        { question: "Tonjolan tulang anterior manakah pada prosesus transversus vertebra servikal C6 yang dapat diraba untuk menekan arteri karotis?", options: ["Tuberkel karotid (tuberkel Chassaignac)", "Dens (prosesus odontoid)", "Vertebra prominens", "Krista gali"], answerIndex: 0, explanation: "Tuberkel karotid Chassaignac pada C6 adalah tonjolan anterior tempat arteri karotis komunis dapat diraba dan ditekan." },
        { question: "Pada vertebra servikal manakah arteri vertebralis yang naik umumnya pertama kali memasuki lubang foramina transversaria?", options: ["Vertebra servikal C6", "Vertebra servikal C7", "Vertebra servikal C1", "Vertebra servikal C3"], answerIndex: 0, explanation: "Arteri vertebralis umumnya mulai masuk ke foramen transversum setinggi C6, melewati C7, lalu naik hingga C1." },
        { question: "Hernia diskus yang menjepit akar saraf spinal C6 secara khas memicu hilangnya sensasi (mati rasa) pada jari mana?", options: ["Ibu jari tangan (sisi radial tangan)", "Jari kelingking (jari ke-5)", "Jari tengah saja", "Jari kaki"], answerIndex: 0, explanation: "Dermatom C6 mencakup lengan bawah lateral, ibu jari tangan, dan jari telunjuk." }
      ],
      ["c5_vertebra", "c7_vertebra", "thoracic_spine_ribs"]
    ),

    // 12. CERVICAL VERTEBRA C7
    "Cervical Vertebra C7 (Vertebra Prominens)": lesson("skeletal", "skull_spine", { EN: "Cervical Vertebra C7 (Vertebra Prominens)", ID: "Vertebra Servikal C7 (Vertebra Prominens)" }, "💀🧣",
      {
        overview: "Cervical vertebra C7 (the vertebra prominens) is the transition bone connecting your flexible neck to your ribcage. It has a long, prominent bump at the back of the neck that you can easily feel with your fingers.",
        position: "Located at the very base of the neck where it meets the upper back, immediately above the first thoracic vertebra (T1).",
        mechanism: "Has a long, non-forked spinous process that acts as a major lever arm and anchor for large back and neck muscles (like the trapezius and ligamentum nuchae).",
        health: "Used by doctors as a reliable physical landmark to count vertebrae. C6-C7 disc herniations pinch the C7 nerve root, causing weakness in the triceps muscle (difficulty pushing) and numbness in the middle finger."
      },
      {
        overview: "Cervical vertebra C7, designated the **vertebra prominens**, is the transitional cervicothoracic vertebra possessing a distinctive, elongated, non-bifid spinous process that projects horizontally, forming a prominent surface landmark.",
        position: "Situated at the cervicothoracic junction (base of the neck), articulating superiorly with C6 and inferiorly with T1.",
        mechanism: "Serves as the primary cranial attachment point for the ligamentum nuchae, trapezius, and rhomboid minor muscles. Its transverse foramina transmit the vertebral vein and accessory deep cervical vessels, but usually NOT the vertebral artery. Transmits the C7 spinal nerve (innervating triceps brachii, wrist flexors, and finger extensors).",
        health: "A fundamental surface landmark for clinical examination and spinal palpation. C6-C7 herniation produces C7 radiculopathy: weakness in elbow extension (triceps), diminished triceps jerk reflex, and middle finger paresthesia. Congenital elongation of its costal element forms a 'cervical rib', compressing the brachial plexus and subclavian artery (Thoracic Outlet Syndrome)."
      },
      {
        overview: "Vertebra servikal C7 (vertebra prominens) adalah tulang transisi yang menghubungkan leher lentur dengan rongga dada. Memiliki tonjolan tulang panjang di pangkal belakang leher yang sangat mudah diraba dengan jari.",
        position: "Terletak di dasar leher tempat bertemunya leher dengan punggung atas, tepat di atas vertebra torakal pertama (T1).",
        mechanism: "Memiliki prosesus spinosus panjang yang tidak bercabang yang bertindak sebagai tuas pengungkit dan tempat melekatnya otot leher dan punggung besar (seperti trapezius dan ligamentum nukhe).",
        health: "Digunakan oleh dokter sebagai penanda fisik untuk menghitung ruas tulang belakang. Jepitan saraf C6-C7 memicu kelemahan otot triseps (susah meluruskan siku) dan mati rasa di jari tengah."
      },
      {
        overview: "Vertebra servikal C7, yang dinamakan **vertebra prominens**, adalah vertebra transisi servikotorakal yang memiliki prosesus spinosus horizontal panjang tidak bercabang (non-bifida) yang membentuk tonjolan permukaan yang jelas.",
        position: "Terletak di perbatasan servikotorakal (pangkal leher), berartikulasi di superior dengan C6 dan inferior dengan T1.",
        mechanism: "Menjadi titik perlekatan kranial utama bagi ligamentum nukhe, otot trapezius, dan rhomboideus minor. Foramina transversaria dilalui vena vertebralis, tetapi umumnya BUKAN arteri vertebralis. Mentransmisikan saraf C7 (menginervasi triseps braki).",
        health: "Penanda palpasi permukaan fundamental dalam pemeriksaan klinis. Herniasi C6-C7 memicu radikulopati C7: kelemahan ekstensi siku (triseps), hilangnya refleks tendon triseps, dan kesemutan pada jari tengah. Rusuk servikal (cervical rib) anomali pada C7 dapat menekan pleksus brakialis (Thoracic Outlet Syndrome)."
      },
      [
        { question: "Why is cervical vertebra C7 clinically designated as the 'vertebra prominens'?", options: ["It possesses a long, horizontal, non-bifid spinous process easily palpable at the base of the neck", "It has the largest vertebral body in the spine", "It contains two spinal cords", "It directly articulates with the skull base"], answerIndex: 0, explanation: "The long, non-bifid spinous process of C7 forms the most prominent palpable bony landmark at the posterior base of the neck." },
        { question: "Which muscle's strength and deep tendon reflex are primarily impaired by a C7 nerve root compression?", options: ["Triceps brachii (elbow extension)", "Gastrocnemius", "Deltoid", "Tibialis anterior"], answerIndex: 0, explanation: "The C7 spinal nerve root primarily supplies motor innervation to the triceps brachii muscle and its reflex arc." },
        { question: "What anomalous structure arising from C7 can cause neurovascular compression in Thoracic Outlet Syndrome?", options: ["Cervical rib", "Odontoid fracture", "Lumbar spondylolysis", "Spina bifida"], answerIndex: 0, explanation: "A congenital cervical rib arising from C7 can compress the subclavian artery and lower trunk of the brachial plexus." }
      ],
      [
        { question: "Mengapa vertebra servikal C7 secara klinis disebut sebagai 'vertebra prominens'?", options: ["Memiliki prosesus spinosus panjang horizontal tidak bercabang yang mudah diraba di pangkal belakang leher", "Memiliki korpus tulang terbesar di tulang belakang", "Memuat dua sumsum tulang belakang", "Berartikulasi langsung dengan dasar tengkorak"], answerIndex: 0, explanation: "Prosesus spinosus C7 yang panjang dan menonjol membentuk penanda palpasi tulang yang paling mudah diraba di dasar leher." },
        { question: "Kekuatan otot dan refleks tendon manakah yang terutama terganggu oleh jepitan akar saraf C7?", options: ["Triseps braki (ekstensi siku)", "Gastroknemius", "Deltoid", "Tibialis anterior"], answerIndex: 0, explanation: "Akar saraf spinal C7 menginervasi motorik utama otot triseps braki dan lengkung refleks tendon triseps." },
        { question: "Struktur anomali apakah yang dapat tumbuh dari C7 dan menyebabkan kompresi neurovaskular pada Sindrom Outlet Toraks (TOS)?", options: ["Rusuk servikal (cervical rib)", "Fraktur odontoid", "Spondilolisis lumbal", "Spina bifida"], answerIndex: 0, explanation: "Rusuk servikal kongenital dari C7 dapat menjepit arteri subklavia dan trunkus inferior pleksus brakialis." }
      ],
      ["c6_vertebra", "thoracic_spine_ribs"]
    ),

    // 13. LUMBAR VERTEBRA L1
    "Lumbar Vertebra L1": lesson("skeletal", "skull_spine", { EN: "Lumbar Vertebra L1", ID: "Vertebra Lumbal L1" }, "🦴🛡️",
      {
        overview: "Lumbar vertebra L1 is the top bone of your lower back. It marks the transition from your ribcage to your flexible lumbar spine and houses the delicate end of your spinal cord.",
        position: "Located at the upper waist level (transpyloric plane), immediately below the last rib-bearing thoracic vertebra (T12).",
        mechanism: "Possesses a sturdy, kidney-shaped body that bears substantial upper body weight while protecting the conus medullaris (the tip of the spinal cord) and the start of the cauda equina nerve roots.",
        health: "The T12-L1 thoracolumbar junction is the single most common site for spinal compression fractures from falls or osteoporosis. Lumbar punctures are never done at L1 to avoid puncturing the spinal cord."
      },
      {
        overview: "Lumbar vertebra L1 is the uppermost lumbar vertebra situated at the critical thoracolumbar junction, featuring a robust kidney-shaped vertebral body, sturdy pedicles, and marking the anatomical termination of the adult spinal cord.",
        position: "Situated at the transpyloric plane (L1 level) between T12 and L2. The vertebral canal at L1 houses the **conus medullaris** (terminating at L1–L2) and the dural sac containing the cauda equina.",
        mechanism: "Absorbs transitioning torsional and shear forces between the rigid rib-stabilized thoracic spine and the mobile lumbar lordosis. Transmits the L1 spinal nerve (contributing to iliohypogastric and ilioinguinal nerves).",
        health: "The thoracolumbar junction (T12–L1) is the most frequent site of traumatic spinal burst and wedge compression fractures. Spinal needle puncture is strictly contraindicated at L1 due to the risk of direct conus medullaris injury."
      },
      {
        overview: "Vertebra lumbal L1 adalah ruas teratas dari tulang pinggang Anda. Menandai batas peralihan dari rongga dada ke tulang belakang pinggang yang lentur, serta melindungi ujung sumsum tulang belakang.",
        position: "Terletak di pinggang bagian atas (setinggi bidang transpolorik), tepat di bawah ruas tulang belakang torakal terakhir yang beriga (T12).",
        mechanism: "Memiliki korpus tulang berbentuk ginjal yang kokoh untuk menopang beban tubuh bagian atas serta melindungi konus medularis (ujung sumsum tulang belakang) dan serabut saraf kauda ekuina.",
        health: "Perbatasan T12-L1 merupakan lokasi paling sering terjadinya patah tulang kompresi akibat jatuh atau osteoporosis. Pengambilan cairan otak (lumbal pungsi) tidak boleh dilakukan di L1 agar tidak menusuk sumsum saraf."
      },
      {
        overview: "Vertebra lumbal L1 adalah vertebra lumbal paling atas di perbatasan torakolumbal, memiliki korpus tebal berbentuk ginjal, dan menandai batas anatomis berakhirnya sumsum tulang belakang dewasa.",
        position: "Terletak setinggi bidang transpilorik (L1) antara T12 dan L2. Kanalis vertebralis di L1 memuat **konus medularis** (berakhir di diskus L1–L2) dan kantung dura berisi kauda ekuina.",
        mechanism: "Menyerap gaya torsi dan beban geser peralihan antara kurvatura torakal kaku dan lordosis lumbal bergerak. Foramen intervertebralis mentransmisikan saraf spinal L1 (saraf iliohipogastrikus dan ilioinguinalis).",
        health: "Perbatasan torakolumbal (T12–L1) adalah lokasi paling rentan terhadap fraktur kompresi baji dan fraktur ledakan (burst fracture). Tindakan pungsi lumbal dikontraindikasikan setinggi L1 karena risiko menusuk konus medularis."
      },
      [
        { question: "What vital neural structure typically terminates within the vertebral canal at the L1-L2 vertebral level in adults?", options: ["Conus medullaris (termination of the spinal cord)", "Brachial plexus", "Optic chiasm", "Sciatic nerve origin"], answerIndex: 0, explanation: "In adults, the solid spinal cord tapers and ends at the conus medullaris at the L1-L2 level, below which only the cauda equina descends." },
        { question: "Why is the thoracolumbar junction (T12-L1) uniquely prone to traumatic spinal compression fractures?", options: ["It represents the mechanical transition from the rigid rib-stabilized thoracic cage to the flexible lumbar spine", "It lacks blood supply", "It has no bone mineral density", "It has no surrounding ligaments"], answerIndex: 0, explanation: "The transition from the rigid, rib-supported thoracic spine to the mobile lumbar spine concentrates mechanical stress at T12-L1." },
        { question: "Which peripheral nerve branches arise from the L1 spinal nerve root to supply the lower abdominal wall and groin?", options: ["Iliohypogastric and ilioinguinal nerves", "Radial and ulnar nerves", "Axillary and musculocutaneous nerves", "Vagus and glossopharyngeal nerves"], answerIndex: 0, explanation: "The L1 anterior ramus forms the iliohypogastric and ilioinguinal nerves supplying the groin and hypogastric skin." }
      ],
      [
        { question: "Struktur saraf vital apakah yang umumnya berakhir di dalam kanalis vertebralis setinggi vertebra L1-L2 pada orang dewasa?", options: ["Konus medularis (ujung terminal sumsum tulang belakang)", "Pleksus brakialis", "Kiasma optikum", "Pangkal saraf skiatik"], answerIndex: 0, explanation: "Pada orang dewasa, sumsum tulang belakang berakhir dan meruncing pada konus medularis setinggi L1-L2, lalu berlanjut sebagai kauda ekuina." },
        { question: "Mengapa perbatasan torakolumbal (T12-L1) sangat rentan mengalami patah tulang kompresi?", options: ["Merupakan titik transisi mekanis dari rongga dada yang kaku terikat rusuk ke tulang pinggang yang lentur bergerak", "Tidak memiliki aliran darah", "Tidak memiliki massa mineral tulang", "Tidak memiliki ligamen"], answerIndex: 0, explanation: "Peralihan dari sangkar dada yang kaku ke lordosis lumbal yang bergerak bebas memusatkan konsentrasi beban pada perbatasan T12-L1." },
        { question: "Cabang saraf tepi manakah yang berasal dari akar saraf spinal L1 untuk menyuplai dinding perut bawah dan selangkangan?", options: ["Saraf iliohipogastrikus dan ilioinguinalis", "Saraf radialis dan ulnaris", "Saraf aksilaris dan muskulokutaneus", "Saraf vagus dan glosofaringeus"], answerIndex: 0, explanation: "Ramus anterior L1 membentuk saraf iliohipogastrikus dan ilioinguinalis yang menginervasi kulit perut bawah dan selangkangan." }
      ],
      ["l2_vertebra", "thoracic_spine_ribs"]
    ),

    // 14. LUMBAR VERTEBRA L2
    "Lumbar Vertebra L2": lesson("skeletal", "skull_spine", { EN: "Lumbar Vertebra L2", ID: "Vertebra Lumbal L2" }, "🦴🛡️",
      {
        overview: "Lumbar vertebra L2 is an upper lumbar bone supporting substantial body weight. It protects the loose nerve roots of the cauda equina and lies at the level where the main kidney arteries branch off the aorta.",
        position: "Situated in the upper loin/lumbar spine, directly between L1 above and L3 below.",
        mechanism: "Features broad, flat articular facets that permit forward bending (flexion) and backward extension while limiting excessive twisting that could damage spinal discs.",
        health: "Upper lumbar disc herniations at L1-L2 or L2-L3 compress the L2 nerve root, causing pain and numbness in the front of the thigh and weakness in hip flexion (lifting the knee)."
      },
      {
        overview: "Lumbar vertebra L2 is a major load-bearing lumbar vertebra situated below the termination of the spinal cord, housing the upper roots of the cauda equina within the lumbar cistern.",
        position: "Located in the upper lumbar spine between L1 and L3, corresponding anteriorly to the origin of the renal arteries from the abdominal aorta and the cisterna chyli.",
        mechanism: "Its sagittal-oriented superior and inferior articular facets lock to prevent significant axial rotation while accommodating sagittal flexion and extension. Transmits the L2 spinal nerve contributing to the lumbar plexus (femoral and obturator nerves).",
        health: "L2 root compression (from high lumbar disc herniation) produces anterior thigh sensory deficits and weakness of the iliopsoas (hip flexion) and pectineus muscles. Susceptible to osteoporotic wedge fractures."
      },
      {
        overview: "Vertebra lumbal L2 adalah ruas tulang pinggang atas yang menopang beban tubuh yang besar. Tulang ini melindungi serabut saraf kauda ekuina dan berada sejajar dengan percabangan arteri ginjal dari aorta.",
        position: "Terletak di pinggang bagian atas, tepat di antara ruas L1 di atasnya dan L3 di bawahnya.",
        mechanism: "Memiliki sendi faset yang dirancang untuk memfasilitasi gerakan membungkuk dan menegakkan badan, sekaligus membatasi gerakan memutar berlebih yang dapat merusak bantalan sendi.",
        health: "Hernia bantalan sendi di L1-L2 atau L2-L3 dapat menjepit akar saraf L2, menyebabkan nyeri dan mati rasa di paha depan serta kelemahan saat mengangkat paha (fleksi panggul)."
      },
      {
        overview: "Vertebra lumbal L2 adalah vertebra penopang beban utama yang terletak di bawah ujung sumsum tulang belakang, menampung serabut kauda ekuina di dalam sisterna lumbalis.",
        position: "Berada di kolom lumbal atas antara L1 dan L3, sejajar di anterior dengan percabangan arteri renalis dari aorta abdominalis dan sisterna kili.",
        mechanism: "Faset artikular berorientasi sagital membatasi rotasi aksial yang berlebihan sambil memfasilitasi fleksi dan ekstensi sagital. Foramen intervertebralis mentransmisikan saraf spinal L2 (pembentuk saraf femoralis dan obturatorius).",
        health: "Kompresi akar saraf L2 memicu defisit sensorik pada paha anterior dan kelemahan otot iliopsoas (fleksi panggul). Rentan mengalami fraktur kompresi baji akibat osteoporosis."
      },
      [
        { question: "Which major abdominal vascular branches typically arise from the aorta at the level of lumbar vertebra L2?", options: ["Renal arteries supplying the kidneys", "Coronary arteries", "Carotid bifurcation", "Subclavian arteries"], answerIndex: 0, explanation: "The left and right renal arteries arise from the lateral aspects of the abdominal aorta at the L1-L2 vertebral level." },
        { question: "What neural structure occupies the vertebral canal at the level of lumbar vertebra L2?", options: ["Cauda equina immersed in cerebrospinal fluid (lumbar cistern)", "Solid thoracic spinal cord only", "Medulla oblongata", "Brachial plexus"], answerIndex: 0, explanation: "Below L1-L2, the vertebral canal contains the cauda equina ('horse's tail' nerve roots) within the subarachnoid lumbar cistern." },
        { question: "Compression of the L2 spinal nerve root primarily causes motor weakness in which movement?", options: ["Hip flexion (iliopsoas)", "Great toe dorsiflexion", "Ankle plantarflexion", "Elbow extension"], answerIndex: 0, explanation: "The L2 nerve root innervates the iliopsoas muscle, responsible for flexing the hip joint." }
      ],
      [
        { question: "Cabang pembuluh darah perut utama manakah yang umumnya keluar dari aorta setinggi vertebra lumbal L2?", options: ["Arteri renalis yang menyuplai ginjal", "Arteri koroner", "Percabangan arteri karotis", "Arteri subklavia"], answerIndex: 0, explanation: "Arteri renalis kiri dan kanan keluar dari aorta abdominalis setinggi vertebra L1-L2." },
        { question: "Struktur saraf apakah yang menempati kanalis vertebralis setinggi vertebra lumbal L2?", options: ["Kauda ekuina di dalam cairan serebrospinal (sisterna lumbalis)", "Sumsum tulang belakang torakal padat", "Medula oblongata", "Pleksus brakialis"], answerIndex: 0, explanation: "Di bawah L1-L2, kanalis vertebralis memuat kauda ekuina (kumpulan serabut saraf akar lumbosakral) di dalam sisterna lumbalis." },
        { question: "Jepitan pada akar saraf spinal L2 terutama menyebabkan kelemahan motorik pada gerakan apa?", options: ["Fleksi panggul/mengangkat paha (otot iliopsoas)", "Dorsofleksi ibu jari kaki", "Plantarfleksi pergelangan kaki", "Ekstensi siku"], answerIndex: 0, explanation: "Akar saraf L2 menginervasi otot iliopsoas yang bertugas melakukan gerakan fleksi sendi panggul." }
      ],
      ["l1_vertebra", "l3_vertebra", "l4_vertebra"]
    ),

    // 15. LUMBAR VERTEBRA L3
    "Lumbar Vertebra L3": lesson("skeletal", "skull_spine", { EN: "Lumbar Vertebra L3", ID: "Vertebra Lumbal L3" }, "🦴🛡️",
      {
        overview: "Lumbar vertebra L3 is the central mechanical fulcrum of your lower back. It sits right at the apex of your lower back curve, enduring high bending stress while providing a safe access point for spinal taps.",
        position: "Located in the middle of your lower back, roughly level with the navel (umbilicus) in front.",
        mechanism: "Supports upper body weight while acting as the pivot for bending forward and backward. Surrounds the lumbar fluid pool containing free-floating nerve roots.",
        health: "The L3-L4 space is the standard safe landmark for lumbar punctures (spinal taps) and epidural anesthesia. L3 nerve root pinching causes front-of-thigh pain and weakness in straightening the knee (quadriceps)."
      },
      {
        overview: "Lumbar vertebra L3 occupies the apex of the lumbar lordosis, acting as the primary biomechanical bending fulcrum of the lumbar vertebral column and bounding the preferred lumbar puncture space.",
        position: "Situated at the midpoint of the lumbar spine between L2 and L4, corresponding anteriorly to the umbilical level and origin of the inferior mesenteric artery (IMA).",
        mechanism: "Endures high dynamic bending moments during spinal flexion and extension. Houses the cauda equina in the expanded subarachnoid space (lumbar cistern). Transmits the L3 spinal nerve contributing to the femoral and obturator nerves.",
        health: "The L3-L4 interspace is the preferred clinical target for lumbar puncture (spinal tap) and spinal/epidural anesthesia because it lies safely below the spinal cord. L3 radiculopathy produces quadriceps weakness, knee buckling, and diminished patellar tendon reflex."
      },
      {
        overview: "Vertebra lumbal L3 adalah titik tumpu mekanik utama di bagian tengah pinggang Anda. Berada tepat di puncak lengkungan pinggang, menahan beban lentur yang tinggi, dan menjadi lokasi aman untuk pengambilan cairan sumsum tulang belakang.",
        position: "Terletak di pertengahan pinggang belakang, kira-kira sejajar dengan pusar (umbilikus) di bagian depan.",
        mechanism: "Menopang berat tubuh atas sekaligus menjadi poros saat membungkuk dan menegakkan tubuh. Mengelilingi kantung cairan serebrospinal yang memuat serabut saraf kauda ekuina.",
        health: "Celah sendi L3-L4 adalah lokasi standar untuk tindakan pungsi lumbal (spinal tap) dan anestesi epidural. Jepitan saraf L3 memicu nyeri paha depan dan kelemahan meluruskan lutut (otot kuadriseps)."
      },
      {
        overview: "Vertebra lumbal L3 menempati puncak kurvatura lordosis lumbalis, bertindak sebagai titik tumpu biomekanik utama dari kolom vertebra lumbalis dan membatasi ruang pungsi lumbal pilihan.",
        position: "Berada di titik tengah tulang pinggang antara L2 dan L4, sejajar di anterior dengan tingkat umbilikus dan percabangan arteri mesenterika inferior (IMA).",
        mechanism: "Menahan momen lentur dinamis tinggi selama fleksi dan ekstensi. Menampung kauda ekuina di dalam sisterna lumbalis. Mentransmisikan saraf spinal L3 yang membentuk saraf femoralis.",
        health: "Celah intervertebra L3-L4 adalah target klinis utama untuk pungsi lumbal dan anestesi spinal karena berada aman di bawah ujung konus medularis. Radikulopati L3 memicu kelemahan otot kuadriseps dan penurunan refleks patela."
      },
      [
        { question: "Why is the L3-L4 intervertebral space classically chosen for performing lumbar punctures (spinal taps)?", options: ["It lies safely below the conus medullaris in the fluid-filled lumbar cistern containing mobile nerve roots", "It is the only place without bone", "It contains no spinal fluid", "It penetrates directly into the brain ventricles"], answerIndex: 0, explanation: "The adult spinal cord ends at L1-L2, making the L3-L4 and L4-L5 spaces safe to sample CSF without puncturing the solid spinal cord." },
        { question: "Compression of the L3 spinal nerve root impairs which primary lower limb muscle group?", options: ["Quadriceps femoris (knee extension)", "Biceps brachii", "Trapezius", "Deltoid"], answerIndex: 0, explanation: "The L3 nerve root contributes heavily to the femoral nerve innervating the quadriceps femoris knee extensor muscles." },
        { question: "Which deep tendon reflex arc is tested to assess the L3 and L4 spinal nerve roots?", options: ["Patellar tendon (knee-jerk) reflex", "Biceps reflex", "Achilles reflex", "Triceps reflex"], answerIndex: 0, explanation: "The patellar tendon reflex tests the L3-L4 spinal reflex arc via the femoral nerve." }
      ],
      [
        { question: "Mengapa celah intervertebra L3-L4 secara klasik dipilih untuk melakukan tindakan pungsi lumbal (spinal tap)?", options: ["Terletak aman di bawah konus medularis pada sisterna lumbalis yang berisi cairan dan serabut saraf fleksibel", "Merupakan satu-satunya tempat tanpa tulang", "Tidak memiliki cairan serebrospinal", "Menembus langsung ke ventrikel otak"], answerIndex: 0, explanation: "Sumsum tulang belakang dewasa berakhir di L1-L2, sehingga celah L3-L4 aman untuk mengambil cairan serebrospinal tanpa menusuk sumsum tulang belakang padat." },
        { question: "Jepitan pada akar saraf spinal L3 mengganggu fungsi kelompok otot tungkai bawah manakah?", options: ["Kuadriseps femoris (ekstensi/meluruskan lutut)", "Biseps braki", "Trapezius", "Deltoid"], answerIndex: 0, explanation: "Akar saraf L3 memberikan kontribusi besar pada saraf femoralis yang menginervasi otot kuadriseps pelurus sendi lutut." },
        { question: "Refleks tendon dalam manakah yang diuji untuk menilai integritas akar saraf spinal L3 dan L4?", options: ["Refleks tendon patela (knee-jerk)", "Refleks biseps", "Refleks tendon Achilles", "Refleks triseps"], answerIndex: 0, explanation: "Refleks tendon patela menguji lengkung refleks saraf L3-L4 melalui saraf femoralis." }
      ],
      ["l2_vertebra", "l4_vertebra", "l5_vertebra"]
    ),

    // 16. LUMBAR VERTEBRA L4
    "Lumbar Vertebra L4": lesson("skeletal", "skull_spine", { EN: "Lumbar Vertebra L4", ID: "Vertebra Lumbal L4" }, "🦴🛡️",
      {
        overview: "Lumbar vertebra L4 is a heavy, robust lower-back bone that sits level with your hip bones. It endures tremendous body weight and is involved in the most common lower back disc herniations.",
        position: "Located in the lower back, aligning with the top rim of your hip bones (iliac crests) and the split of the main abdominal aorta into leg arteries.",
        mechanism: "Built with massive, kidney-shaped bone to transfer weight from your upper body down to your pelvis, anchoring deep core back muscles.",
        health: "The L4-L5 disc is the #1 most common site in the body for disc herniation and slip (spondylolisthesis). L4 nerve pinching causes 'foot drop' (difficulty lifting the foot upward) and shin numbness."
      },
      {
        overview: "Lumbar vertebra L4 is a massive lower lumbar vertebra positioned at the supracristal plane (Tuffier's line), enduring high axial compressive and shear loads at the lower lumbar spine.",
        position: "Situated between L3 and L5, aligning with the horizontal line connecting the highest points of the iliac crests (L4 spinous process level) and the bifurcation of the abdominal aorta into common iliac arteries.",
        mechanism: "Features large pedicles and a thick laminae designed for load-bearing. Articulates with L5 via facet joints. Transmits the L4 spinal nerve contributing to the lumbar plexus and lumbosacral trunk (innervating tibialis anterior).",
        health: "The L4-L5 intervertebral disc is the most frequent site of degenerative disc disease, lumbar herniation, and degenerative spondylolisthesis. L4 radiculopathy causes weakness in ankle dorsiflexion (tibialis anterior / foot drop), diminished patellar reflex, and numbness over the medial leg and foot."
      },
      {
        overview: "Vertebra lumbal L4 adalah ruas tulang pinggang bawah yang sangat kokoh dan tebal, sejajar dengan tulang pinggul Anda. Menahan beban tubuh yang sangat besar dan paling sering terlibat dalam masalah saraf terjepit (hernia diskus).",
        position: "Terletak di pinggang bagian bawah, sejajar dengan tepi atas tulang panggul (krista iliaka) dan percabangan pembuluh darah aorta ke kedua kaki.",
        mechanism: "Dibangun dengan korpus tulang besar untuk menyalurkan beban dari tubuh atas ke panggul, serta menjadi tempat tertambatnya otot-otot inti punggung.",
        health: "Bantalan sendi L4-L5 adalah lokasi nomor satu paling sering mengalami saraf terjepit (HNP) dan pergeseran tulang pinggang (spondilolistesis). Jepitan saraf L4 menyebabkan 'foot drop' (sulit mengangkat ujung kaki ke atas) dan mati rasa di tulang kering."
      },
      {
        overview: "Vertebra lumbal L4 adalah vertebra lumbal bawah masif yang berada setinggi bidang suprakristal (garis Tuffier), menahan beban kompresi aksial dan gaya geser tinggi pada tulang belakang bawah.",
        position: "Berada di antara L3 dan L5, sejajar dengan garis horizontal yang menghubungkan titik tertinggi krista iliaka (setinggi prosesus spinosus L4) dan bifurkasio aorta abdominalis.",
        mechanism: "Memiliki pedikel besar dan lamina tebal yang dirancang untuk menopang beban berat. Mentransmisikan saraf spinal L4 yang menginervasi otot tibialis anterior.",
        health: "Diskus intervertebralis L4-L5 adalah lokasi paling umum dari penyakit degeneratif diskus, herniasi lumbal, dan spondilolistesis degeneratif. Radikulopati L4 menyebabkan kelemahan dorsofleksi pergelangan kaki (foot drop), penurunan refleks patela, dan mati rasa pada tungkai medial."
      },
      [
        { question: "The horizontal line connecting the highest points of both iliac crests (Tuffier's line) clinically identifies which lumbar landmark?", options: ["L4 spinous process / L4-L5 interspace", "C1 atlas", "T12 rib level", "Sacral hiatus"], answerIndex: 0, explanation: "The supracristal plane (Tuffier's line) crosses the spine at the L4 spinous process or L4-L5 interspace." },
        { question: "Compression of the L4 spinal nerve root characteristically produces motor weakness in which muscle, leading to 'foot drop'?", options: ["Tibialis anterior (ankle dorsiflexion)", "Triceps brachii", "Gluteus maximus", "Pectoralis major"], answerIndex: 0, explanation: "The L4 nerve root innervates the tibialis anterior muscle; its weakness causes difficulty lifting the foot upward (foot drop)." },
        { question: "What major cardiovascular event occurs anterior to the L4 vertebral body?", options: ["Bifurcation of the abdominal aorta into common iliac arteries", "Formation of the superior vena cava", "Origin of coronary arteries", "Pulmonary artery branching"], answerIndex: 0, explanation: "The abdominal aorta bifurcates into the left and right common iliac arteries at approximately the L4 vertebral level." }
      ],
      [
        { question: "Garis horizontal yang menghubungkan puncak kedua krista iliaka panggul (garis Tuffier) secara klinis mengidentifikasi penanda tulang mana?", options: ["Prosesus spinosus L4 / celah L4-L5", "Atlas C1", "Tingkat rusuk T12", "Hiatus sakralis"], answerIndex: 0, explanation: "Bidang suprakristal (garis Tuffier) melintasi tulang belakang setinggi prosesus spinosus L4 atau celah L4-L5." },
        { question: "Jepitan pada akar saraf spinal L4 secara khas memicu kelemahan motorik pada otot apa yang menyebabkan 'foot drop'?", options: ["Tibialis anterior (dorsofleksi pergelangan kaki)", "Triseps braki", "Gluteus maksimus", "Pektoralis mayor"], answerIndex: 0, explanation: "Akar saraf L4 menginervasi otot tibialis anterior; kelemahannya membuat pasien kesulitan mengangkat telapak kaki ke atas." },
        { question: "Peristiwa kardiovaskular utama apakah yang terjadi di depan korpus vertebra L4?", options: ["Percabangan (bifurkasio) aorta abdominalis menjadi arteri iliaka komunis", "Pembentukan vena kava superior", "Pangkal arteri koroner", "Percabangan arteri pulmonal"], answerIndex: 0, explanation: "Aorta abdominalis bercabang menjadi arteri iliaka komunis kiri dan kanan kira-kira setinggi vertebra L4." }
      ],
      ["l3_vertebra", "l5_vertebra", "pelvis"]
    ),

    // 17. LUMBAR VERTEBRA L5
    "Lumbar Vertebra L5": lesson("skeletal", "skull_spine", { EN: "Lumbar Vertebra L5", ID: "Vertebra Lumbal L5" }, "🦴🛡️",
      {
        overview: "Lumbar vertebra L5 is the largest and strongest vertebra in your entire spine. It forms the base of your lower back, anchoring directly to your sacrum and pelvic girdle to support your whole upper body.",
        position: "Located at the very bottom of the lumbar spine, forming the lumbosacral junction (L5-S1) right above your tailbone/sacrum.",
        mechanism: "Has a massive wedge-shaped body that is taller in front than in back to create the lumbosacral angle (~30-40 degrees), stabilized by heavy iliolumbar ligaments attached to the pelvis.",
        health: "Prone to stress fractures (spondylolysis) and slipping forward off the sacrum (spondylolisthesis). L5 nerve root compression causes sciatica, weakness lifting the big toe, and numbness across the top of the foot."
      },
      {
        overview: "Lumbar vertebra L5 is the largest, heaviest vertebra in the vertebral column, characterized by an anteriorly taller wedge-shaped body, massive conical transverse processes, and strong iliolumbar ligamentous attachments.",
        position: "Located at the lumbosacral junction articulating inferiorly with the S1 sacral base, forming the lumbosacral angle (promontory).",
        mechanism: "Transmits 100% of upper body axial load to the sacral base and pelvic ring. Resists significant anterior shear forces via coronal-oriented inferior articular facets and bilateral iliolumbar ligaments anchored to the iliac crests. Transmits the L5 spinal nerve (lumbosacral trunk).",
        health: "Highly vulnerable to **spondylolysis** (stress fracture of the pars interarticularis) and **isthmic spondylolisthesis** (anterior slippage of L5 on S1). L5 radiculopathy causes extensor hallucis longus weakness (inability to dorsiflex great toe), gluteus medius weakness (Trendelenburg sign), and dorsal foot numbness."
      },
      {
        overview: "Vertebra lumbal L5 adalah ruas tulang belakang terbesar dan terkuat di seluruh tubuh Anda. Membentuk dasar pinggang yang tertambat langsung ke tulang kelangkang (sakrum) dan panggul untuk menopang seluruh tubuh atas.",
        position: "Terletak di bagian paling bawah pinggang, membentuk persambungan lumbosakral (L5-S1) tepat di atas tulang sakrum.",
        mechanism: "Memiliki korpus tulang berbentuk baji tebal yang lebih tinggi di depan daripada di belakang untuk membentuk sudut lumbosakral, diperkuat oleh ligamen iliolumbal kokoh ke panggul.",
        health: "Rentan mengalami retak stres (spondilolisis) dan pergeseran maju di atas sakrum (spondilolistesis). Jepitan saraf L5 memicu skiatika, kelemahan mengangkat jempol kaki, dan mati rasa di punggung kaki."
      },
      {
        overview: "Vertebra lumbal L5 adalah vertebra terbesar dan terberat pada kolom vertebral, ditandai dengan korpus berbentuk baji yang lebih tinggi di anterior, prosesus transversus konikal masif, dan pelekatan ligamen iliolumbal yang kuat.",
        position: "Berada di taut lumbosakral, berartikulasi di inferior dengan basis sakrum S1 untuk membentuk sudut lumbosakral (promontorium sakral).",
        mechanism: "Mentransmisikan seluruh beban aksial tubuh bagian atas ke gelang panggul. Menahan gaya geser anterior melalui faset artikular inferior dan ligamen iliolumbal bilateral. Mentransmisikan saraf spinal L5 (trunkus lumbosakralis).",
        health: "Sangat rentan terhadap **spondilolisis** (fraktur stres pada pars interartikularis) dan **spondilolistesis istmik** (pergeseran L5 ke depan di atas S1). Radikulopati L5 menyebabkan kelemahan ekstensor halusis longus (sulit mengangkat jempol kaki), kelemahan gluteus medius, dan mati rasa di punggung kaki."
      },
      [
        { question: "What stress fracture condition affecting the pars interarticularis of L5 can lead to anterior slippage over S1?", options: ["Spondylolysis (which can progress to Spondylolisthesis)", "Osteomyelitis", "Scoliosis", "Kyphosis"], answerIndex: 0, explanation: "Spondylolysis is a bony defect or stress fracture of the pars interarticularis; bilateral defects allow L5 to slide forward on S1 (spondylolisthesis)." },
        { question: "Compression of the L5 spinal nerve root typically impairs the motor function of which specific muscle?", options: ["Extensor hallucis longus (great toe dorsiflexion)", "Biceps brachii", "Diaphragm", "Orbicularis oculi"], answerIndex: 0, explanation: "The L5 nerve root innervates the extensor hallucis longus; its weakness impairs dorsiflexion of the great toe." },
        { question: "How is the L5 vertebral body anatomically shaped to accommodate the lumbosacral angle?", options: ["Wedge-shaped (taller anteriorly than posteriorly)", "Perfect cube", "Concave on all surfaces", "Cylindrical with no variation"], answerIndex: 0, explanation: "The L5 vertebral body is noticeably taller anteriorly than posteriorly, contributing to the natural lumbosacral lordotic angle (~30-40 degrees)." }
      ],
      [
        { question: "Kondisi retak stres tulang apakah pada pars interartikularis L5 yang dapat menyebabkan pergeseran maju tulang di atas S1?", options: ["Spondilolisis (yang dapat berkembang menjadi Spondilolistesis)", "Osteomielitis", "Skoliosis", "Kifosis"], answerIndex: 0, explanation: "Spondilolisis adalah defek atau fraktur stres pada pars interartikularis; defek bilateral memungkinkan L5 bergeser maju di atas S1 (spondilolistesis)." },
        { question: "Jepitan pada akar saraf spinal L5 secara khas mengganggu fungsi motorik otot spesifik manakah?", options: ["Ekstensor halusis longus (dorsofleksi/mengangkat jempol kaki)", "Biseps braki", "Diafragma", "Orbikularis okuli"], answerIndex: 0, explanation: "Akar saraf L5 menginervasi otot ekstensor halusis longus; kelemahannya membuat pasien tidak mampu mengangkat ibu jari kaki ke atas." },
        { question: "Bagaimanakah bentuk anatomis korpus vertebra L5 untuk menyesuaikan sudut lumbosakral pinggang-panggul?", options: ["Berbentuk baji (lebih tebal/tinggi di sisi depan dibandingkan sisi belakang)", "Kubus sempurna", "Cekung di semua sisi", "Silinder pipih seragam"], answerIndex: 0, explanation: "Korpus L5 lebih tinggi di anterior daripada di posterior untuk membentuk sudut kelengkungan lumbosakral alami (~30-40 derajat)." }
      ],
      ["l4_vertebra", "sacrum_coccyx", "pelvis"]
    ),

    // 18. TIBIA (RIGHT)
    "Tibia (Right)": lesson("skeletal", "limbs_pelvis", { EN: "Tibia (Right)", ID: "Tibia / Tulang Kering (Kanan)" }, "🦴🦵",
      {
        overview: "The right tibia (shin bone) is the large, strong bone on the inner side of your right lower leg. It is the second longest bone in the body and bears almost all of your body weight when standing, walking, and running.",
        position: "Located on the medial (inner) side of the right lower leg, running parallel to the smaller fibula from the knee down to the ankle.",
        mechanism: "Articulates with the femur at the knee joint and with the talus bone at the ankle. Features the prominent tibial tuberosity in front where your powerful thigh muscles attach to straighten your knee.",
        health: "Shin splints (pain along the shin from running), stress fractures, and Osgood-Schlatter disease (knee bump pain in active adolescents) affect the tibia. Because it sits right under the skin with little soft tissue, tibial fractures are often open fractures."
      },
      {
        overview: "The right tibia is the primary weight-bearing medial long bone of the leg, transmitting ~90% of axial compressive forces from the femoral condyles to the talus.",
        position: "Medial aspect of the right leg, articulating proximally with the femoral condyles and fibular head, and distally with the talus (talocrural joint) and distal fibula (tibiofibular syndesmosis).",
        mechanism: "Proximal tibial plateau features medial/lateral condyles separated by the intercondylar eminence (cruciate ligament and meniscal attachments). The anterior border forms the subcutaneous tibial crest; the tibial tuberosity anchors the patellar ligament; the distal end extends medially as the medial malleolus forming the ankle mortise.",
        health: "Tibial plateau fractures (Schatzker classification) result from high-energy axial loading. Osgood-Schlatter disease is a traction apophysitis of the tibial tuberosity. Open tibial diaphyseal fractures carry high nonunion and infection risk due to scarce anteromedial soft-tissue coverage."
      },
      {
        overview: "Tibia kanan (tulang kering) adalah tulang besar dan kokoh di sisi dalam tungkai bawah kanan Anda. Merupakan tulang terpanjang kedua di tubuh dan menopang hampir seluruh berat badan saat berdiri, berjalan, dan berlari.",
        position: "Terletak di sisi medial (dalam) tungkai bawah kanan, berdampingan dengan tulang betis (fibula) dari lutut hingga pergelangan kaki.",
        mechanism: "Berartikulasi dengan tulang paha (femur) pada sendi lutut dan tulang talus pada pergelangan kaki. Memiliki tonjolan tuberositas tibia di depan tempat melekatnya otot paha untuk meluruskan lutut.",
        health: "Shin splints (nyeri tulang kering akibat lari), retak stres, dan penyakit Osgood-Schlatter pada remaja aktif menyerang tibia. Karena terletak persis di bawah kulit dengan sedikit bantalan otot, patah tulang tibia sering kali berupa fraktur terbuka."
      },
      {
        overview: "Tibia kanan adalah tulang panjang medial penopang beban utama tungkai bawah, mentransmisikan sekitar 90% gaya tekan aksial dari kondilus femur ke tulang talus.",
        position: "Sisi medial tungkai kanan, berartikulasi di proksimal dengan kondilus femur dan kaput fibula, serta di distal dengan talus (sendi talokrural) dan fibula distal (sindesmosis tibiofibular).",
        mechanism: "Plateau tibia proksimal memuat kondilus medial/lateral yang dipisahkan oleh eminensia interkondilaris (tempat melekatnya ligamen krusiatum ACL/PCL dan meniskus). Tuberositas tibia menambatkan ligamen patela; ujung distal membentuk maleolus medialis (mata kaki dalam).",
        health: "Fraktur plateau tibia terjadi akibat benturan aksial energi tinggi. Penyakit Osgood-Schlatter adalah apofisitis traksi pada tuberositas tibia. Fraktur diafisis tibia terbuka berisiko tinggi infeksi karena minimnya jaringan lunak anteromedial."
      },
      [
        { question: "What proportion of total body weight is transmitted across the lower leg by the tibia compared to the fibula?", options: ["Approximately 85-90% by the tibia", "Only 10%", "Exactly 50% split equally", "0% (the fibula bears all weight)"], answerIndex: 0, explanation: "The tibia is the main load-bearing pillar of the lower leg, transmitting approximately 85-90% of body weight, while the fibula carries ~10-15%." },
        { question: "What prominent anterior bony landmark on the proximal tibia serves as the insertion site for the patellar ligament?", options: ["Tibial tuberosity", "Medial malleolus", "Intercondylar eminence", "Lesser trochanter"], answerIndex: 0, explanation: "The patellar ligament (continuation of the quadriceps tendon) inserts directly onto the tibial tuberosity." },
        { question: "Which distal medial projection of the tibia forms the prominent inner bump of the ankle joint?", options: ["Medial malleolus", "Lateral malleolus", "Tibial plateau", "Anterior crest"], answerIndex: 0, explanation: "The medial malleolus is the medial distal expansion of the tibia stabilizing the talocrural ankle mortise." }
      ],
      [
        { question: "Berapa proporsi total berat badan yang disalurkan melalui tungkai bawah oleh tulang tibia dibandingkan fibula?", options: ["Sekitar 85-90% oleh tibia", "Hanya 10%", "Tepat 50% terbagi rata", "0% (semua ditopang fibula)"], answerIndex: 0, explanation: "Tibia adalah pilar penopang beban utama tungkai bawah yang menyalurkan 85-90% beban tubuh, sedangkan fibula hanya menopang 10-15%." },
        { question: "Tonjolan tulang anterior manakah pada tibia proksimal yang menjadi lokasi perlekatan ligamen patela?", options: ["Tuberositas tibia", "Maleolus medialis", "Eminensia interkondilaris", "Trokanter minor"], answerIndex: 0, explanation: "Ligamen patela (kelanjutan tendon otot kuadriseps paha) berinsersi langsung pada tuberositas tibia." },
        { question: "Tonjolan distal medial tulang tibia manakah yang membentuk tonjolan mata kaki bagian dalam?", options: ["Maleolus medialis", "Maleolus lateralis", "Plateau tibia", "Krista anterior"], answerIndex: 0, explanation: "Maleolus medialis adalah tonjolan distal tibia di sisi dalam yang mengunci sendi pergelangan kaki (talus)." }
      ],
      ["femur", "fibula", "patella"]
    ),

    // 19. RADIUS (RIGHT)
    "Radius (Right)": lesson("skeletal", "limbs_pelvis", { EN: "Radius (Right)", ID: "Radius / Tulang Pengumpil (Kanan)" }, "🦴💪",
      {
        overview: "The right radius is the forearm bone located on the thumb side of your right arm. It is uniquely designed to rotate around the ulna, allowing you to turn your palm up (supination) and down (pronation).",
        position: "Situated on the lateral (outer/thumb) side of the right forearm, running from the outer elbow down to the base of the wrist.",
        mechanism: "Has a round, disc-shaped head at the elbow that pivots smoothly inside a ring-like ligament, while its wide distal end forms the main joint surface for your wrist and hand.",
        health: "Falling onto an outstretched hand commonly fractures the distal radius (Colles' fracture), creating a 'dinner-fork' wrist deformity. In young children, sudden pulling on the arm can slip the radial head out of its ligament ('nursemaid's elbow')."
      },
      {
        overview: "The right radius is the lateral long bone of the forearm, specialized for forearm pronation-supination kinematics and transmitting axial load from the hand/wrist to the humerus via the interosseous membrane.",
        position: "Lateral aspect of the right forearm parallel to the medial ulna, articulating proximally with the humeral capitulum (humeroradial joint) and radial notch of the ulna (proximal radioulnar joint), and distally with the scaphoid, lunate, and ulnar head.",
        mechanism: "Cylindrical radial head rotates within the annular ligament of the proximal radioulnar joint. Radial tuberosity anchors the biceps brachii tendon (powerful supinator/flexor). Shaft has a sharp interosseous border. Distal styloid process and articular carpal facets (radiocarpal joint) bear 80% of wrist axial load.",
        health: "Colles' fracture is an extra-articular distal radial metaphyseal fracture with dorsal displacement resulting from a fall on an outstretched hand (FOOSH). Radial head subluxation ('nursemaid's elbow') involves displacement beneath the annular ligament in young children."
      },
      {
        overview: "Radius kanan (tulang pengumpil) adalah tulang lengan bawah di sisi ibu jari tangan kanan Anda. Dirancang secara unik untuk berputar mengitari tulang hasta (ulna), memungkinkan Anda membolak-balikkan telapak tangan (menengadah dan menelungkup).",
        position: "Terletak di sisi lateral (luar/searah ibu jari) lengan bawah kanan, membentang dari siku luar hingga pergelangan tangan.",
        mechanism: "Memiliki kepala tulang bundar berbentuk cakram di siku yang berputar di dalam ligamen anular, sementara ujung bawahnya yang lebar membentuk persendian utama pergelangan tangan.",
        health: "Jatuh bertumpu pada telapak tangan sering mematahkan ujung bawah tulang radius (fraktur Colles), menimbulkan bentuk pergelangan menyerupai garpu makan. Pada balita, tarikan lengan mendadak dapat menggeser kepala radius ('nursemaid elbow')."
      },
      {
        overview: "Radius kanan adalah tulang panjang lateral lengan bawah yang terspesialisasi untuk kinematika pronasi-supinasi dan mentransmisikan beban aksial dari tangan ke humerus melalui membran interosea.",
        position: "Sisi lateral lengan bawah kanan sejajar dengan ulna medial, berartikulasi di proksimal dengan kapitulum humerus dan incisura radialis ulna, serta di distal dengan tulang skafoid, lunatum, dan kaput ulna.",
        mechanism: "Kaput radius silindris berputar di dalam ligamen anular sendi radioulnar proksimal. Tuberositas radius menambatkan tendon biseps braki (supinator kuat). Prosesus stiloideus radius dan faset karpal di distal menopang 80% beban aksial pergelangan tangan.",
        health: "Fraktur Colles adalah fraktur metafisis distal radius dengan pergeseran ke arah dorsal akibat jatuh bertumpu pada tangan (FOOSH). Subluksasi kaput radius (nursemaid elbow) terjadi ketika kaput radius tergelincir dari ligamen anular pada anak kecil."
      },
      [
        { question: "Which primary kinematic movement of the hand and forearm is enabled by the rotation of the radial head around the ulna?", options: ["Pronation and Supination (turning palm face down / face up)", "Knee extension", "Ankle inversion", "Spinal lateral flexion"], answerIndex: 0, explanation: "The pivoting of the radial head within the annular ligament allows the radius to cross over the ulna during pronation and uncross during supination." },
        { question: "What classic wrist fracture featuring dorsal displacement ('dinner-fork deformity') commonly occurs at the distal radius after a fall on an outstretched hand?", options: ["Colles' fracture", "Jones fracture", "Boxer's fracture", "Pott's fracture"], answerIndex: 0, explanation: "Colles' fracture is a common distal radius fracture with dorsal and radial displacement resulting from a fall onto an outstretched hand (FOOSH)." },
        { question: "Which major arm muscle tendon inserts onto the radial tuberosity to act as a powerful forearm supinator and elbow flexor?", options: ["Biceps brachii", "Triceps brachii", "Deltoid", "Pectoralis major"], answerIndex: 0, explanation: "The tendon of the biceps brachii muscle inserts directly onto the radial tuberosity, making it a potent supinator and flexor of the forearm." }
      ],
      [
        { question: "Gerakan kinematik utama tangan dan lengan bawah apakah yang dimungkinkan oleh perputaran kaput radius mengitari tulang ulna?", options: ["Pronasi dan Supinasi (menelungkupkan dan menengadahkan telapak tangan)", "Ekstensi lutut", "Inversi pergelangan kaki", "Fleksi lateral tulang belakang"], answerIndex: 0, explanation: "Putaran kaput radius di dalam ligamen anular memungkinkan radius menyilang di atas ulna saat pronasi dan kembali sejajar saat supinasi." },
        { question: "Fraktur pergelangan tangan klasik dengan pergeseran ke dorsal ('dinner-fork deformity') apakah yang sering terjadi pada radius distal akibat jatuh bertumpu pada telapak tangan?", options: ["Fraktur Colles", "Fraktur Jones", "Fraktur Boxer", "Fraktur Pott"], answerIndex: 0, explanation: "Fraktur Colles adalah patah tulang radius distal dengan pergeseran fragmen ke arah belakang (dorsal) akibat jatuh bertumpu pada tangan (FOOSH)." },
        { question: "Tendon otot lengan utama manakah yang berinsersi pada tuberositas radius dan bertindak sebagai supinator kuat serta fleksor siku?", options: ["Biseps braki", "Triseps braki", "Deltoid", "Pektoralis mayor"], answerIndex: 0, explanation: "Tendon otot biseps braki berinsersi langsung pada tuberositas radius, menjadikannya pemutar supinasi dan penekuk siku yang sangat kuat." }
      ],
      ["ulna", "humerus"]
    ),

    // 20. CLAVICLE (RIGHT)
    "Clavicle (Right)": lesson("skeletal", "limbs_pelvis", { EN: "Clavicle (Right)", ID: "Klavikula / Tulang Selangka (Kanan)" }, "🦴🛡️",
      {
        overview: "The right clavicle (collarbone) is an S-shaped horizontal bone on your upper chest. It acts as a rigid strut holding your shoulder out away from your chest, giving your arm maximum freedom to move and reach in all directions.",
        position: "Located horizontally across the top front of the right chest, connecting your breastbone (sternum) in the middle to your shoulder blade (scapula) on the outside.",
        mechanism: "Transmits impacts and forces from the upper limb to the center of your skeleton, anchors chest and neck muscles, and shields vital blood vessels and nerves traveling down into your arm.",
        health: "The clavicle is one of the most commonly broken bones in the body (~5% of all fractures), typically snapping in the middle from a direct blow to the shoulder or a fall onto an outstretched hand."
      },
      {
        overview: "The right clavicle is an S-shaped horizontal long bone that forms the anterior strut of the pectoral girdle, maintaining the glenohumeral joint laterally away from the thorax to optimize upper extremity range of motion.",
        position: "Extends horizontally across the superior thoracic inlet, articulating medially with the sternal manubrium (sternoclavicular joint) and laterally with the scapular acromion (acromioclavicular joint).",
        mechanism: "Functions as a mechanical brace transferring kinetic energy from the upper extremity to the axial skeleton. Serves as origin/insertion for pectoralis major, deltoid, trapezius, and sternocleidomastoid muscles. Shields the underlying subclavian vessels and brachial plexus in the cervicoaxillary canal.",
        health: "Clavicle fractures account for ~5% of all adult fractures, with 80% occurring at the middle third junction (the transition between medial and lateral curvatures). Acromioclavicular (AC) joint separation ('shoulder separation') results from tears of acromioclavicular and coracoclavicular ligaments."
      },
      {
        overview: "Klavikula kanan (tulang selangka) adalah tulang horizontal berbentuk huruf S di dada atas Anda. Bertindak sebagai penyangga kokoh yang menahan sendi bahu tetap lebar dari dada, memberi lengan kebebasan bergerak maksimal ke segala arah.",
        position: "Terletak mendatar di dada depan atas sebelah kanan, menghubungkan tulang dada (sternum) di tengah dengan tulang belikat (skapula) di bahu luar.",
        mechanism: "Menyalurkan gaya dan benturan dari lengan ke kerangka tubuh pusat, menjadi tempat melekatnya otot dada dan leher, serta melindungi pembuluh darah dan saraf penting yang menuju lengan.",
        health: "Tulang selangka adalah salah satu tulang yang paling sering patah di tubuh (~5% dari seluruh fraktur), umumnya patah di sepertiga tengah akibat benturan langsung pada bahu atau jatuh bertumpu pada tangan."
      },
      {
        overview: "Klavikula kanan adalah tulang panjang horizontal berbentuk huruf S yang membentuk penyangga anterior gelang bahu, menjaga sendi glenohumeral tetap lateral dari toraks untuk mengoptimalkan rentang gerak ekstremitas atas.",
        position: "Membentang horizontal di atas apertura torakis superior, berartikulasi di medial dengan manubrium sterni (sendi sternoklavikular) dan di lateral dengan akromion skapula (sendi akromioklavikular).",
        mechanism: "Berfungsi sebagai penopang mekanis yang menyalurkan energi kinetik dari lengan ke kerangka aksial. Menjadi tempat perlekatan otot pektoralis mayor, deltoid, trapezius, dan sternokleidomastoid. Melindungi pembuluh subklavia dan pleksus brakialis di kanalis servikoaksilaris.",
        health: "Fraktur klavikula mencakup ~5% dari semua fraktur dewasa, dengan 80% terjadi pada sepertiga tengah. Separasi sendi akromioklavikular (AC separation / bahu terpisah) disebabkan oleh robekan ligamen akromioklavikular dan korakoklavikular."
      },
      [
        { question: "What is the primary biomechanical role of the clavicle in the human pectoral girdle?", options: ["Acting as a rigid horizontal strut that holds the shoulder joint laterally away from the thorax", "Bearing 100% of vertical body weight", "Pumping lymphatic fluid", "Filtering blood cells"], answerIndex: 0, explanation: "The clavicle acts as a mechanical strut that props the scapula and shoulder joint laterally, maximizing the arm's range of motion." },
        { question: "At which anatomical region do approximately 80% of all clavicle fractures occur?", options: ["Middle third junction (junction of medial two-thirds and lateral third)", "Distal acromial tip only", "Sternal articular cartilage only", "No fractures occur in the clavicle"], answerIndex: 0, explanation: "The transition zone between the medial convex and lateral concave curvatures (the middle third) is the thinnest and weakest point of the bone." },
        { question: "Which major neurovascular bundle passes directly beneath the middle portion of the clavicle?", options: ["Brachial plexus and subclavian artery/vein", "Sciatic nerve and femoral artery", "Carotid artery and jugular vein", "Cranial nerves IX and X"], answerIndex: 0, explanation: "The subclavian vessels and the divisions of the brachial plexus pass through the cervicoaxillary canal directly underneath the clavicle." }
      ],
      [
        { question: "Apa peran biomekanis utama dari tulang selangka (klavikula) pada gelang bahu manusia?", options: ["Bertindak sebagai penyangga horizontal kaku yang menahan sendi bahu tetap berada di lateral menjauhi dada", "Menopang 100% berat tubuh vertikal", "Memompa cairan getah bening", "Menyaring sel darah"], answerIndex: 0, explanation: "Klavikula bertindak sebagai penyangga mekanis yang menahan skapula dan sendi bahu di sisi luar, memaksimalkan rentang gerak bebas lengan." },
        { question: "Pada wilayah anatomis manakah sekitar 80% dari seluruh patah tulang selangka (fraktur klavikula) terjadi?", options: ["Sepertiga tengah (pertemuan antara dua pertiga medial dan sepertiga lateral)", "Ujung akromial distal saja", "Kartilago sternal saja", "Tidak pernah terjadi patah tulang"], answerIndex: 0, explanation: "Zona transisi antara kelengkungan medial cembung dan lateral cekung (sepertiga tengah) adalah titik tertipis dan paling rentan patah." },
        { question: "Berkas neurovaskular utama manakah yang melintas persis di bawah bagian tengah tulang selangka?", options: ["Pleksus brakialis dan arteri/vena subklavia", "Saraf skiatik dan arteri femoralis", "Arteri karotis dan vena jugularis", "Saraf kranial IX dan X"], answerIndex: 0, explanation: "Pembuluh darah subklavia dan cabang pleksus brakialis melintas melalui kanalis servikoaksilaris tepat di bawah tulang selangka." }
      ],
      ["scapula", "sternum", "humerus"]
    ),

    // 21. TRICEPS BRACHII
    "Triceps Brachii": lesson("muscular", "muscles_group", { EN: "Triceps Brachii", ID: "Otot Triseps (Triceps Brachii)" }, "💪⚡",
      {
        overview: "The triceps brachii is the powerful three-headed muscle that covers the entire back of your upper arm. It is the primary muscle responsible for straightening your elbow (pushing things away).",
        position: "Located on the back (posterior compartment) of the upper arm, running from the shoulder and upper humerus down to the tip of your elbow.",
        mechanism: "All three muscle heads converge into a single tough tendon that pulls on the bony point of your elbow (olecranon), acting as a lever to extend your forearm.",
        health: "Injuries to the radial nerve (like from a mid-shaft arm fracture or arm compression) can paralyze the triceps and wrist extensors ('wrist drop'). The triceps tendon reflex is tapped by doctors to test nerve function (C7)."
      },
      {
        overview: "The triceps brachii is a large, three-headed fusiform muscle occupying the entire posterior (extensor) compartment of the arm (brachium), functioning as the primary extensor of the forearm at the elbow joint.",
        position: "Extends longitudinally along the dorsal aspect of the humerus, originating from three distinct sites: (1) **Long head** from the infraglenoid tubercle of the scapula, (2) **Lateral head** from the posterior humerus superior to the radial groove, and (3) **Medial head** from the posterior humerus inferior to the radial groove. Inserts onto the posterior superior surface of the **olecranon process of the ulna**.",
        mechanism: "The medial head acts as the continuous workhorse for elbow extension, while the lateral and long heads recruit for high-force resistance. Because the long head crosses the glenohumeral joint, it also assists in shoulder extension and adduction. Completely innervated by the **radial nerve** (C6, C7, C8).",
        health: "Radial nerve palsy (from humeral spiral groove fractures or compression / 'Saturday night palsy') compromises triceps and wrist extensor function. Triceps tendon avulsion occurs from forceful eccentric loading. The triceps deep tendon reflex assesses the C7 and C8 reflex arc."
      },
      {
        overview: "Triseps braki adalah otot berkepala tiga yang menutupi seluruh bagian belakang lengan atas Anda. Otot ini merupakan penggerak utama untuk meluruskan siku (mendorong beban menjauh).",
        position: "Terletak di bagian belakang lengan atas, membentang dari sendi bahu dan tulang humerus atas turun ke ujung siku.",
        mechanism: "Ketiga kepala otot menyatu menjadi satu tendon kuat yang menarik tonjolan tulang siku (olekranon), bertindak sebagai tuas pengungkit untuk meluruskan lengan bawah.",
        health: "Cedera pada saraf radialis (misalnya akibat patah tulang lengan atas atau jepitan saraf) dapat melumpuhkan otot triseps dan ekstensor pergelangan tangan ('wrist drop'). Refleks tendon triseps diuji dokter untuk menilai saraf C7."
      },
      {
        overview: "Triseps braki adalah otot fusiformis berkepala tiga yang menempati seluruh kompartemen posterior (ekstensor) lengan atas (brakium), bertindak sebagai ekstensor utama lengan bawah pada sendi siku.",
        position: "Membentang di dorsal humerus, berorigo dari 3 tempat: (1) **Kaput longum** dari tuberkel infraglenoid skapula, (2) **Kaput laterale** dari posterior humerus di atas sulkus radialis, dan (3) **Kaput mediale** dari posterior humerus di bawah sulkus radialis. Berinsersi pada permukaan superior posterior **prosesus olekranon ulna**.",
        mechanism: "Kaput mediale adalah penggerak aktif utama untuk semua ekstensi siku, sementara kaput laterale dan longum direkrut saat melawan beban berat. Karena kaput longum melintasi sendi bahu, ia juga membantu ekstensi dan adduksi bahu. Diinervasi secara eksklusif oleh **saraf radialis** (C6, C7, C8).",
        health: "Kelumpuhan saraf radialis (akibat fraktur spiral humerus atau neuropraksia kompresif) melumpuhkan otot triseps dan ekstensor pergelangan tangan (wrist drop). Refleks tendon dalam triseps mengevaluasi lengkung saraf C7 dan C8."
      },
      [
        { question: "Onto which bony landmark of the ulna do all three heads of the triceps brachii insert via their common tendon?", options: ["Olecranon process of the ulna", "Coronoid process", "Radial tuberosity", "Medial epicondyle"], answerIndex: 0, explanation: "The common triceps tendon inserts broadly onto the posterior superior aspect of the olecranon process of the ulna." },
        { question: "Which major peripheral nerve provides exclusive motor innervation to all three heads of the triceps brachii?", options: ["Radial nerve (C6, C7, C8)", "Musculocutaneous nerve", "Median nerve", "Axillary nerve"], answerIndex: 0, explanation: "The radial nerve innervates all muscles of the posterior compartment of the arm and forearm, including the triceps." },
        { question: "Which head of the triceps brachii crosses two joints (glenohumeral and elbow) and assists in shoulder extension and adduction?", options: ["Long head (Caput longum)", "Lateral head", "Medial head", "Anconeus"], answerIndex: 0, explanation: "The long head of the triceps originates from the infraglenoid tubercle of the scapula, crossing both the shoulder and elbow joints." }
      ],
      [
        { question: "Pada tonjolan tulang ulna manakah ketiga kepala otot triseps braki berinsersi melalui tendon bersamanya?", options: ["Prosesus olekranon ulna (ujung siku)", "Prosesus koronoid", "Tuberositas radius", "Epikondilus medialis"], answerIndex: 0, explanation: "Tendon bersama otot triseps berinsersi kuat pada permukaan superior prosesus olekranon tulang hasta (ulna)." },
        { question: "Saraf tepi utama manakah yang memberikan inervasi motorik eksklusif ke ketiga kepala otot triseps braki?", options: ["Saraf radialis (C6, C7, C8)", "Saraf muskulokutaneus", "Saraf medianus", "Saraf aksilaris"], answerIndex: 0, explanation: "Saraf radialis menginervasi seluruh otot di kompartemen posterior lengan atas dan lengan bawah, termasuk triseps." },
        { question: "Kepala otot triseps braki manakah yang melintasi dua sendi (sendi bahu dan siku) serta membantu ekstensi dan adduksi bahu?", options: ["Kaput longum (kepala panjang)", "Kaput laterale", "Kaput mediale", "Otot ankoneus"], answerIndex: 0, explanation: "Kaput longum berorigo dari tuberkel infraglenoid skapula, sehingga melintasi sendi bahu sekaligus sendi siku." }
      ],
      ["biceps", "deltoid", "humerus", "ulna"]
    ),

    // 22. EXTRAOCULAR MUSCLES
    "Extraocular Muscles": lesson("vision", "eye", { EN: "Extraocular Muscles", ID: "Otot Ekstraokular" }, "👁️🎯",
      {
        overview: "The extraocular muscles are a team of six tiny, high-precision muscles in each eye socket that steer your eyeball up, down, left, right, and diagonally, allowing your eyes to track objects smoothly and work together in perfect 3D vision.",
        position: "Located inside the bony eye socket (orbit), attached around the outside of the eyeball (sclera).",
        mechanism: "Consists of 4 straight muscles (Superior, Inferior, Medial, and Lateral Rectus) and 2 angled muscles (Superior and Inferior Oblique). The superior oblique loops through a tiny cartilage pulley (the trochlea) like a string through a pulley.",
        health: "Muscle imbalances cause crossed eyes (strabismus) and double vision (diplopia). Damage to the cranial nerves controlling these muscles (Cranial Nerves III, IV, or VI) paralyzes specific eye movements."
      },
      {
        overview: "The extraocular muscles comprise six striated extrinsic ocular muscles (four recti: superior, inferior, medial, lateral; two obliques: superior, inferior) and the levator palpebrae superioris within each orbit, controlling precise three-dimensional rotational ocular kinematics.",
        position: "Situated within the orbital cavity. The four rectus muscles originate from the common tendinous ring (annulus of Zinn) at the orbital apex and insert onto the anterior sclera (spiral of Tillaux). The superior oblique passes through the fibrocartilaginous **trochlea** at the superomedial orbital rim; the inferior oblique arises from the anteromedial orbital floor.",
        mechanism: "Kinematics & Cranial Innervation (**LR6 SO4 R3**):\n• **Lateral Rectus**: Abduction (CN VI - Abducens)\n• **Superior Oblique**: Incyclotorsion (intorsion) and depression in adduction (CN IV - Trochlear)\n• **Medial Rectus**: Adduction (CN III - Oculomotor)\n• **Superior Rectus**: Elevation, intorsion, adduction (CN III)\n• **Inferior Rectus**: Depression, extorsion, adduction (CN III)\n• **Inferior Oblique**: Excyclotorsion (extorsion), elevation in adduction (CN III)",
        health: "Strabismus leads to amblyopia in children. Oculomotor nerve (CN III) palsy presents with a 'down and out' globe position, ptosis, and mydriasis. Trochlear nerve (CN IV) palsy causes vertical/torsional diplopia with compensatory head tilt. Abducens nerve (CN VI) palsy causes horizontal diplopia on ipsilateral lateral gaze. Thyroid eye disease (Graves' ophthalmopathy) causes autoimmune lymphocytic infiltration and enlargement of extraocular muscle bellies."
      },
      {
        overview: "Otot ekstraokular adalah tim yang terdiri dari enam otot kecil berpresisi tinggi di setiap rongga mata yang menggerakkan bola mata ke atas, bawah, kiri, kanan, dan memutar, memungkinkan mata melacak objek dan bekerja sama dalam penglihatan 3D yang fokus.",
        position: "Terletak di dalam rongga tulang mata (orbita), melekat di sekeliling dinding luar bola mata (sklera).",
        mechanism: "Terdiri dari 4 otot lurus (Rektus Superior, Inferior, Medial, Lateral) dan 2 otot miring (Obliquus Superior dan Inferior). Otot obliquus superior melewati cincin katrol tulang rawan kecil (troklea) seperti tali pada katrol mekanik.",
        health: "Ketidakseimbangan otot memicu mata juling (strabismus) dan penglihatan ganda (diplopia). Kerusakan pada saraf kranial pengendali (Saraf III, IV, atau VI) melumpuhkan gerakan mata ke arah tertentu."
      },
      {
        overview: "Otot ekstraokular terdiri dari enam otot lurik ekstrinsik okular (empat otot rektus: superior, inferior, medial, lateral; dua otot obliquus: superior, inferior) dan levator palpebrae superioris yang mengendalikan kinematika rotasi bola mata 3D secara presisi.",
        position: "Berada di dalam rongga orbita. Keempat otot rektus berorigo dari anulus tendineus komunis (anulus Zinn) di apeks orbita dan berinsersi pada sklera anterior. Obliquus superior melewati katrol fibrokartilago **troklea**; obliquus inferior berorigo dari dasar orbita anteromedial.",
        mechanism: "Kinematika & Inervasi Saraf Kranial (**LR6 SO4 R3**):\n• **Rektus Lateralis**: Abduksi mata ke lateral (N. VI - Abdusen)\n• **Obliquus Superior**: Intorsi dan depresi saat adduksi (N. IV - Troklearis)\n• **Rektus Medialis**: Adduksi mata ke medial (N. III - Okulomotorius)\n• **Rektus Superior**: Elevasi mata ke atas (N. III)\n• **Rektus Inferior**: Depresi mata ke bawah (N. III)\n• **Obliquus Inferior**: Ekstorsi dan elevasi saat adduksi (N. III)",
        health: "Strabismus memicu ambliopia pada anak-anak. Kelumpuhan N. III menimbulkan posisi bola mata 'down and out', ptosis, dan pupil melebar. Kelumpuhan N. IV memicu diplopia vertikal yang dikompensasi dengan memiringkan kepala. Kelumpuhan N. VI memicu diplopia horizontal saat melihat ke samping. Penyakit Graves memicu inflamasi dan penebalan otot ekstraokular (eksoftalmos)."
      },
      [
        { question: "Which cranial nerve innervates the Lateral Rectus extraocular muscle responsible for abducting the eye laterally?", options: ["Abducens nerve (CN VI)", "Trochlear nerve (CN IV)", "Oculomotor nerve (CN III)", "Optic nerve (CN II)"], answerIndex: 0, explanation: "According to the classic mnemonic 'LR6 SO4 R3', the Lateral Rectus is innervated by CN VI (Abducens)." },
        { question: "Through which specialized fibrocartilaginous pulley at the superomedial orbital rim does the Superior Oblique muscle tendon pass?", options: ["Trochlea", "Annulus of Zinn", "Spiral of Tillaux", "Pterygoid canal"], answerIndex: 0, explanation: "The superior oblique tendon travels through the trochlea pulley to redirect its vector of pull posterosuperolaterally across the globe." },
        { question: "What classic clinical presentation indicates a complete third cranial nerve (Oculomotor nerve, CN III) palsy?", options: ["'Down and out' eye position, severe upper eyelid ptosis, and a dilated unreactive pupil", "Total bilateral blindness with normal eye movements", "Loss of taste on anterior tongue", "Horner syndrome with miosis and anhidrosis"], answerIndex: 0, explanation: "Because only CN IV (Superior Oblique) and CN VI (Lateral Rectus) remain functional, the affected eye rests in a deviated 'down and out' position with ptosis and mydriasis." }
      ],
      [
        { question: "Saraf kranial manakah yang menginervasi otot Rektus Lateralis yang bertugas menggerakkan bola mata ke arah luar (abduksi)?", options: ["Saraf abdusen (N. VI)", "Saraf troklearis (N. IV)", "Saraf okulomotorius (N. III)", "Saraf optik (N. II)"], answerIndex: 0, explanation: "Berdasarkan mnemonik klasik 'LR6 SO4 R3', otot Rektus Lateralis diinervasi oleh Nervus Kranial VI (Abdusen)." },
        { question: "Melalui katrol fibrokartilago khusus apakah di sudut superomedial orbita tendon otot Obliquus Superior melintas?", options: ["Troklea", "Anulus Zinn", "Spiral Tillaux", "Kanalis pterigoid"], answerIndex: 0, explanation: "Tendon otot obliquus superior melintasi katrol troklea untuk membelokkan arah tarikan otot ke posterior dan lateral bola mata." },
        { question: "Gambaran klinis klasik apakah yang mengindikasikan kelumpuhan total saraf kranial ketiga (Nervus Okulomotorius, N. III)?", options: ["Posisi bola mata 'down and out' (mengarah ke bawah dan luar), ptosis kelopak mata berat, dan pupil melebar (midriasis)", "Kebutaan bilateral total dengan gerakan mata normal", "Hilangnya pengecapan pada lidah", "Sindrom Horner dengan pupil mengecil"], answerIndex: 0, explanation: "Karena hanya N. IV (Obliquus Superior) dan N. VI (Rektus Lateralis) yang berfungsi, bola mata tertarik ke posisi 'down and out' disertai kelopak mata menutup dan pupil melebar." }
      ],
      ["sclera", "cornea", "optic_nerve", "iris"]
    )
  };

  // ─── ALIAS & CANONICAL REGISTRATIONS ──────────────────────────────────────
  // Vision aliases
  extensions["cornea"] = extensions["Cornea"];
  extensions["iris"] = extensions["Iris"];
  extensions["lens"] = extensions["Lens"];
  extensions["retina"] = extensions["Retina"];
  extensions["sclera"] = extensions["Sclera"];
  extensions["optic_nerve"] = extensions["Optic Nerve"];
  extensions["pupil"] = extensions["Pupil"];
  extensions["choroid"] = extensions["Choroid"];
  extensions["macula"] = extensions["Macula & Fovea"];
  extensions["vitreous_body"] = extensions["Vitreous Body"];
  extensions["ciliary_body"] = extensions["Ciliary Body"];
  extensions["extraocular_muscles"] = extensions["Extraocular Muscles"];
  extensions["extraocular muscles"] = extensions["Extraocular Muscles"];
  extensions["extraocular muscle"] = extensions["Extraocular Muscles"];

  // Nervous system aliases
  extensions["cerebrum"] = extensions["Cerebrum"];
  extensions["thalamus"] = extensions["Thalamus"];
  extensions["thalamus.l"] = extensions["Thalamus"];
  extensions["thalamus.r"] = extensions["Thalamus"];
  extensions["thalamusl"] = extensions["Thalamus"];
  extensions["thalamusr"] = extensions["Thalamus"];
  extensions["hypothalamus"] = extensions["Hypothalamus (Left)"];
  extensions["hypothalamus (left)"] = extensions["Hypothalamus (Left)"];
  extensions["hypothalamus (right)"] = extensions["Hypothalamus (Right)"];
  extensions["hypothalamus left"] = extensions["Hypothalamus (Left)"];
  extensions["hypothalamus right"] = extensions["Hypothalamus (Right)"];
  extensions["hypothalamusl"] = extensions["Hypothalamus (Left)"];
  extensions["hypothalamusr"] = extensions["Hypothalamus (Right)"];
  extensions["hypothalamus.l"] = extensions["Hypothalamus (Left)"];
  extensions["hypothalamus.r"] = extensions["Hypothalamus (Right)"];
  extensions["hippothalamus"] = extensions["Hypothalamus (Left)"];
  extensions["hippothalamusl"] = extensions["Hypothalamus (Left)"];
  extensions["hippothalamusr"] = extensions["Hypothalamus (Right)"];
  extensions["hippothalamus.l"] = extensions["Hypothalamus (Left)"];
  extensions["hippothalamus.r"] = extensions["Hypothalamus (Right)"];
  extensions["hippothalamus left"] = extensions["Hypothalamus (Left)"];
  extensions["hippothalamus right"] = extensions["Hypothalamus (Right)"];
  extensions["hippocampus"] = extensions["Hippocampus (Left)"];
  extensions["hippocampus (left)"] = extensions["Hippocampus (Left)"];
  extensions["hippocampus (right)"] = extensions["Hippocampus (Right)"];
  extensions["hippocampus left"] = extensions["Hippocampus (Left)"];
  extensions["hippocampus right"] = extensions["Hippocampus (Right)"];
  extensions["left hippocampus"] = extensions["Hippocampus (Left)"];
  extensions["right hippocampus"] = extensions["Hippocampus (Right)"];
  extensions["hippocampus.l"] = extensions["Hippocampus (Left)"];
  extensions["hippocampus.r"] = extensions["Hippocampus (Right)"];
  extensions["hippocampusl"] = extensions["Hippocampus (Left)"];
  extensions["hippocampusr"] = extensions["Hippocampus (Right)"];
  extensions["hippocampusl001"] = extensions["Hippocampus (Left)"];
  extensions["hippocampusr001"] = extensions["Hippocampus (Right)"];
  extensions["optic_chiasm"] = extensions["Optic Chiasm"];
  extensions["cerebellum"] = extensions["Cerebellum"];
  extensions["brainstem"] = extensions["Brainstem (Medulla & Pons)"];
  extensions["cerebral_cortex"] = extensions["Cerebral Cortex"];
  extensions["cervical_spinal_cord"] = extensions["Cervical Spinal Cord"];
  extensions["thoracic_spinal_cord"] = extensions["Thoracic Spinal Cord"];
  extensions["lumbar_spinal_cord"] = extensions["Lumbar Spinal Cord"];
  extensions["dorsal_root_ganglion"] = extensions["Dorsal Root Ganglion"];
  extensions["sciatic_nerve"] = extensions["Sciatic Nerve"];
  extensions["spinal_cord"] = extensions["Cervical Spinal Cord"];

  // Cardiovascular aliases
  extensions["left_ventricle"] = extensions["Left Ventricle"];
  extensions["right_ventricle"] = extensions["Right Ventricle"];
  extensions["left_atrium"] = extensions["Left Atrium"];
  extensions["right_atrium"] = extensions["Right Atrium"];
  extensions["aorta"] = extensions["Aorta"];
  extensions["coronary_arteries"] = extensions["Coronary Arteries"];
  extensions["mitral_valve"] = extensions["Mitral Valve"];
  extensions["pericardium"] = extensions["Pericardium"];
  extensions["tricuspid_valve"] = extensions["Tricuspid Valve"];
  extensions["ascending_aorta"] = extensions["Ascending Aorta"];
  extensions["carotid_artery"] = extensions["Carotid Artery"];
  extensions["jugular_vein"] = extensions["Jugular Vein"];
  extensions["subclavian_artery"] = extensions["Subclavian Artery"];
  extensions["vena_cava"] = extensions["Vena Cava Superior & Inferior"];
  extensions["superior_vena_cava"] = extensions["Vena Cava Superior & Inferior"];
  extensions["inferior_vena_cava"] = extensions["Vena Cava Superior & Inferior"];

  // Respiratory aliases
  extensions["left_lung"] = extensions["Left Lung (2 Lobes)"];
  extensions["right_lung"] = extensions["Right Lung (3 Lobes)"];
  extensions["trachea"] = extensions["Trachea"];
  extensions["primary_bronchi"] = extensions["Primary Bronchi"];
  extensions["bronchi"] = extensions["Primary Bronchi"];
  extensions["alveoli"] = extensions["Alveolar Sacs"];
  extensions["alveolar_sacs"] = extensions["Alveolar Sacs"];
  extensions["diaphragm"] = extensions["Respiratory Diaphragm"];
  extensions["respiratory_diaphragm"] = extensions["Respiratory Diaphragm"];

  // Digestive aliases
  extensions["stomach"] = extensions["Stomach"];
  extensions["liver"] = extensions["Liver (Hepatic Lobes)"];
  extensions["gallbladder"] = extensions["Gallbladder"];
  extensions["pancreas"] = extensions["Pancreas"];
  extensions["small_intestine"] = extensions["Small Intestine (Duodenum/Jejunum/Ileum)"];
  extensions["duodenum"] = extensions["Duodenum"];
  extensions["duodenum001"] = extensions["Duodenum"];
  extensions["duodenum.001"] = extensions["Duodenum"];
  extensions["duodenum101"] = extensions["Duodenum"];
  extensions["large_intestine"] = extensions["Large Intestine (Colon)"];
  extensions["colon"] = extensions["Large Intestine (Colon)"];
  extensions["esophagus"] = extensions["Esophagus"];

  // Urinary aliases (Strict Left vs Right Separation)
  extensions["kidney"] = extensions["Left Kidney"];
  extensions["left_kidney"] = extensions["Left Kidney"];
  extensions["right_kidney"] = extensions["Right Kidney"];
  extensions["kidney.l"] = extensions["Left Kidney"];
  extensions["kidney.r"] = extensions["Right Kidney"];
  extensions["kidney.l.001"] = extensions["Left Kidney"];
  extensions["kidney.r.001"] = extensions["Right Kidney"];
  extensions["renal_cortex_medulla"] = extensions["Renal Cortex & Medulla"] || extensions["Left Kidney"];
  extensions["renal_cortex"] = extensions["Renal Cortex & Medulla"] || extensions["Left Kidney"];
  extensions["renal_medulla"] = extensions["Renal Cortex & Medulla"] || extensions["Left Kidney"];
  extensions["ureter"] = extensions["Ureter (Left)"];
  extensions["Ureter Right"] = extensions["Ureter (Right)"];
  extensions["Ureter Left"] = extensions["Ureter (Left)"];
  extensions["ureter right"] = extensions["Ureter (Right)"];
  extensions["ureter left"] = extensions["Ureter (Left)"];
  extensions["Right Ureter"] = extensions["Ureter (Right)"];
  extensions["Left Ureter"] = extensions["Ureter (Left)"];
  extensions["Ureter Kanan"] = extensions["Ureter (Right)"];
  extensions["Ureter Kiri"] = extensions["Ureter (Left)"];
  extensions["left ureter"] = extensions["Ureter (Left)"];
  extensions["right ureter"] = extensions["Ureter (Right)"];
  extensions["ureter (left)"] = extensions["Ureter (Left)"];
  extensions["ureter (right)"] = extensions["Ureter (Right)"];
  extensions["ureter.l"] = extensions["Ureter (Left)"];
  extensions["ureter.r"] = extensions["Ureter (Right)"];
  extensions["ureterl"] = extensions["Ureter (Left)"];
  extensions["ureterr"] = extensions["Ureter (Right)"];
  extensions["ureterl001"] = extensions["Ureter (Left)"];
  extensions["ureterr001"] = extensions["Ureter (Right)"];
  extensions["ureter.l.001"] = extensions["Ureter (Left)"];
  extensions["ureter.r.001"] = extensions["Ureter (Right)"];
  extensions["urinary_bladder"] = extensions["Urinary Bladder"];
  extensions["bladder"] = extensions["Urinary Bladder"];
  extensions["urethra"] = extensions["Urethra"] || extensions["Urinary Bladder"];

  // Skeletal aliases
  extensions["femur"] = extensions["Femur"];
  extensions["femur.r"] = extensions["Femur"];
  extensions["femur.l"] = extensions["Femur"];
  extensions["pelvis"] = extensions["Pelvis (Ilium, Ischium, Pubis)"];
  extensions["cranium"] = extensions["Cranium (Frontal/Parietal/Temporal)"];
  extensions["mandible"] = extensions["Mandible"];
  extensions["c1_atlas"] = extensions["Atlas (C1)"];
  extensions["atlas (c1)"] = extensions["Atlas (C1)"];
  extensions["atlas"] = extensions["Atlas (C1)"];
  extensions["c2_axis"] = extensions["Axis (C2)"];
  extensions["axis (c2)"] = extensions["Axis (C2)"];
  extensions["axis"] = extensions["Axis (C2)"];
  extensions["cervical_vertebrae"] = extensions["Cervical Vertebrae (C1-C7)"] || extensions["Atlas (C1)"];
  extensions["c3_vertebra"] = extensions["Cervical Vertebra C3"];
  extensions["cervical vertebra (c3)"] = extensions["Cervical Vertebra C3"];
  extensions["cervical vertebrae (c3)"] = extensions["Cervical Vertebra C3"];
  extensions["c3"] = extensions["Cervical Vertebra C3"];
  extensions["c3 vertebra"] = extensions["Cervical Vertebra C3"];
  extensions["c4_vertebra"] = extensions["Cervical Vertebra C4"];
  extensions["cervical vertebra (c4)"] = extensions["Cervical Vertebra C4"];
  extensions["cervical vertebrae (c4)"] = extensions["Cervical Vertebra C4"];
  extensions["c4"] = extensions["Cervical Vertebra C4"];
  extensions["c4 vertebra"] = extensions["Cervical Vertebra C4"];
  extensions["c5_vertebra"] = extensions["Cervical Vertebra C5"];
  extensions["cervical vertebra (c5)"] = extensions["Cervical Vertebra C5"];
  extensions["cervical vertebrae (c5)"] = extensions["Cervical Vertebra C5"];
  extensions["c5"] = extensions["Cervical Vertebra C5"];
  extensions["c5 vertebra"] = extensions["Cervical Vertebra C5"];
  extensions["c6_vertebra"] = extensions["Cervical Vertebra C6"];
  extensions["cervical vertebra (c6)"] = extensions["Cervical Vertebra C6"];
  extensions["cervical vertebrae (c6)"] = extensions["Cervical Vertebra C6"];
  extensions["c6"] = extensions["Cervical Vertebra C6"];
  extensions["c6 vertebra"] = extensions["Cervical Vertebra C6"];
  extensions["c7_vertebra"] = extensions["Cervical Vertebra C7 (Vertebra Prominens)"];
  extensions["cervical vertebra (c7)"] = extensions["Cervical Vertebra C7 (Vertebra Prominens)"];
  extensions["cervical vertebrae (c7)"] = extensions["Cervical Vertebra C7 (Vertebra Prominens)"];
  extensions["c7"] = extensions["Cervical Vertebra C7 (Vertebra Prominens)"];
  extensions["c7 vertebra"] = extensions["Cervical Vertebra C7 (Vertebra Prominens)"];
  extensions["vertebra prominens"] = extensions["Cervical Vertebra C7 (Vertebra Prominens)"];

  extensions["thoracic_spine_ribs"] = extensions["Thoracic Spine & Ribs"];
  extensions["thoracic_spine"] = extensions["Thoracic Spine & Ribs"];
  extensions["ribs"] = extensions["Thoracic Spine & Ribs"];
  extensions["rib"] = extensions["Thoracic Spine & Ribs"];
  extensions["rib_1st"] = extensions["Thoracic Spine & Ribs"];
  extensions["rib_4th"] = extensions["Thoracic Spine & Ribs"];
  extensions["lumbar_spine"] = extensions["Lumbar Spine"];
  extensions["l1_vertebra"] = extensions["Lumbar Vertebra L1"];
  extensions["lumbar vertebra (l1)"] = extensions["Lumbar Vertebra L1"];
  extensions["lumbar vertebrae (l1)"] = extensions["Lumbar Vertebra L1"];
  extensions["l1"] = extensions["Lumbar Vertebra L1"];
  extensions["l1 vertebra"] = extensions["Lumbar Vertebra L1"];
  extensions["l2_vertebra"] = extensions["Lumbar Vertebra L2"];
  extensions["lumbar vertebra (l2)"] = extensions["Lumbar Vertebra L2"];
  extensions["lumbar vertebrae (l2)"] = extensions["Lumbar Vertebra L2"];
  extensions["l2"] = extensions["Lumbar Vertebra L2"];
  extensions["l2 vertebra"] = extensions["Lumbar Vertebra L2"];
  extensions["l3_vertebra"] = extensions["Lumbar Vertebra L3"];
  extensions["lumbar vertebra (l3)"] = extensions["Lumbar Vertebra L3"];
  extensions["lumbar vertebrae (l3)"] = extensions["Lumbar Vertebra L3"];
  extensions["l3"] = extensions["Lumbar Vertebra L3"];
  extensions["l3 vertebra"] = extensions["Lumbar Vertebra L3"];
  extensions["l4_vertebra"] = extensions["Lumbar Vertebra L4"];
  extensions["lumbar vertebra (l4)"] = extensions["Lumbar Vertebra L4"];
  extensions["lumbar vertebrae (l4)"] = extensions["Lumbar Vertebra L4"];
  extensions["l4"] = extensions["Lumbar Vertebra L4"];
  extensions["l4 vertebra"] = extensions["Lumbar Vertebra L4"];
  extensions["l5_vertebra"] = extensions["Lumbar Vertebra L5"];
  extensions["lumbar vertebra (l5)"] = extensions["Lumbar Vertebra L5"];
  extensions["lumbar vertebrae (l5)"] = extensions["Lumbar Vertebra L5"];
  extensions["l5"] = extensions["Lumbar Vertebra L5"];
  extensions["l5 vertebra"] = extensions["Lumbar Vertebra L5"];

  extensions["sacrum_coccyx"] = extensions["Sacrum & Coccyx"];
  extensions["sacrum"] = extensions["Sacrum & Coccyx"];
  extensions["coccyx"] = extensions["Sacrum & Coccyx"];
  extensions["tibia_fibula"] = extensions["Tibia (Right)"];
  extensions["tibia"] = extensions["Tibia (Right)"];
  extensions["tibia (right)"] = extensions["Tibia (Right)"];
  extensions["tibia right"] = extensions["Tibia (Right)"];
  extensions["tibia.r"] = extensions["Tibia (Right)"];
  extensions["tibia.l"] = extensions["Tibia (Right)"];
  extensions["tibiar"] = extensions["Tibia (Right)"];
  extensions["tibial"] = extensions["Tibia (Right)"];
  extensions["fibula"] = extensions["Tibia (Right)"];
  extensions["humerus"] = extensions["Humerus"];
  extensions["humerus.r"] = extensions["Humerus"];
  extensions["humerus.l"] = extensions["Humerus"];
  extensions["radius_ulna"] = extensions["Radius (Right)"];
  extensions["radius"] = extensions["Radius (Right)"];
  extensions["radius (right)"] = extensions["Radius (Right)"];
  extensions["radius right"] = extensions["Radius (Right)"];
  extensions["radius.r"] = extensions["Radius (Right)"];
  extensions["radius.l"] = extensions["Radius (Right)"];
  extensions["radiusr"] = extensions["Radius (Right)"];
  extensions["radiusl"] = extensions["Radius (Right)"];
  extensions["ulna"] = extensions["Radius (Right)"];
  extensions["clavicle_scapula"] = extensions["Clavicle (Right)"];
  extensions["clavicle"] = extensions["Clavicle (Right)"];
  extensions["clavicle (right)"] = extensions["Clavicle (Right)"];
  extensions["clavicle (right) (right)"] = extensions["Clavicle (Right)"];
  extensions["clavicle right"] = extensions["Clavicle (Right)"];
  extensions["clavicle.r"] = extensions["Clavicle (Right)"];
  extensions["clavicler"] = extensions["Clavicle (Right)"];
  extensions["claviclel"] = extensions["Clavicle (Right)"];
  extensions["scapula"] = extensions["Clavicle (Right)"];

  // Muscular aliases
  extensions["biceps"] = extensions["Biceps Brachii"];
  extensions["biceps brachii"] = extensions["Biceps Brachii"];
  extensions["biceps.r"] = extensions["Biceps Brachii"];
  extensions["bicepsr"] = extensions["Biceps Brachii"];
  extensions["triceps"] = extensions["Triceps Brachii"];
  extensions["triceps brachii"] = extensions["Triceps Brachii"];
  extensions["triceps.r"] = extensions["Triceps Brachii"];
  extensions["tricepsr"] = extensions["Triceps Brachii"];
  extensions["tricepsl"] = extensions["Triceps Brachii"];
  extensions["pectoralis_major"] = extensions["Pectoralis Major"];
  extensions["pectoralis major"] = extensions["Pectoralis Major"];
  extensions["pectoralis major.r"] = extensions["Pectoralis Major"];
  extensions["pectoralis major muscler"] = extensions["Pectoralis Major"];
  extensions["sternocostal head of pectoralis major muscle.r"] = extensions["Pectoralis Major"];
  extensions["deltoid"] = extensions["Deltoid Muscle"];
  extensions["deltoid muscle"] = extensions["Deltoid Muscle"];
  extensions["deltoid muscle.r"] = extensions["Deltoid Muscle"];
  extensions["deltoid muscler"] = extensions["Deltoid Muscle"];
  extensions["thoracoacromial artery deltoid br.r"] = extensions["Deltoid Muscle"];
  extensions["quadriceps"] = extensions["Quadriceps Femoris"];
  extensions["quadriceps femoris"] = extensions["Quadriceps Femoris"];
  extensions["quadriceps femoris.r"] = extensions["Quadriceps Femoris"];
  extensions["rectus femoris.r"] = extensions["Quadriceps Femoris"];
  extensions["vastus lateralis.r"] = extensions["Quadriceps Femoris"];
  extensions["rectus_abdominis"] = extensions["Rectus Abdominis"];
  extensions["trapezius_latissimus"] = extensions["Trapezius"];
  extensions["trapezius"] = extensions["Trapezius"];
  extensions["trapezius muscle.r"] = extensions["Trapezius"];
  extensions["trapezius muscler"] = extensions["Trapezius"];
  extensions["ascending part of trapezius muscle.r"] = extensions["Trapezius"];
  extensions["latissimus_dorsi"] = extensions["Latissimus Dorsi"];
  extensions["latissimus"] = extensions["Latissimus Dorsi"];
  extensions["latissimus dorsi.r"] = extensions["Latissimus Dorsi"];

  // Skin aliases
  extensions["epidermis"] = extensions["Stratum Corneum & Epidermis"];
  extensions["stratum corneum & epidermis"] = extensions["Stratum Corneum & Epidermis"];
  extensions["skin_zsphere_4"] = extensions["Stratum Corneum & Epidermis"];
  extensions["dermis"] = extensions["Dermal Layer & Collagen"];
  extensions["dermal layer & collagen"] = extensions["Dermal Layer & Collagen"];
  extensions["extract1"] = extensions["Dermal Layer & Collagen"];
  extensions["extract3_1"] = extensions["Dermal Layer & Collagen"];
  extensions["hypodermis"] = extensions["Subcutaneous Hypodermis & Adipose Tissue"];
  extensions["subcutaneous hypodermis & adipose tissue"] = extensions["Subcutaneous Hypodermis & Adipose Tissue"];
  extensions["big"] = extensions["Subcutaneous Hypodermis & Adipose Tissue"];

  if (window.INSIDE_YOU_DATA && typeof window.INSIDE_YOU_DATA.extendStructureDetails === "function") {
    window.INSIDE_YOU_DATA.extendStructureDetails(extensions);
  }
})();
