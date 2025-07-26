// script.js

const allQuestions = {
  "Anatomy": [
    {
      question: "Which bone is a part of the axial skeleton?",
      options: ["Femur", "Scapula", "Sternum", "Clavicle"],
      answer: "Sternum",
      explanation: "Sternum is part of the axial skeleton."
    },
    {
      question: "Which muscle is innervated by the spinal accessory nerve?",
      options: ["Masseter", "Trapezius", "Deltoid", "Sternohyoid"],
      answer: "Trapezius",
      explanation: "Trapezius is supplied by the spinal accessory nerve (cranial nerve XI)."
    },
    {
      question: "Which of the following passes through the foramen magnum?",
      options: ["Facial nerve", "Spinal cord", "Vagus nerve", "Hypoglossal nerve"],
      answer: "Spinal cord",
      explanation: "The spinal cord passes through the foramen magnum."
    },
    {
      question: "The saphenous nerve is a branch of:",
      options: ["Femoral nerve", "Sciatic nerve", "Obturator nerve", "Tibial nerve"],
      answer: "Femoral nerve",
      explanation: "Saphenous nerve is a sensory branch of the femoral nerve."
    },
    {
      question: "Which muscle is pierced by the parotid duct?",
      options: ["Masseter", "Buccinator", "Temporalis", "Pterygoid"],
      answer: "Buccinator",
      explanation: "The parotid duct pierces the buccinator muscle."
    },
    {
      question: "The anatomical snuffbox is bounded laterally by:",
      options: ["Extensor carpi ulnaris", "Flexor carpi radialis", "Abductor pollicis longus", "Palmaris longus"],
      answer: "Abductor pollicis longus",
      explanation: "Abductor pollicis longus forms the lateral boundary."
    },
    {
      question: "The strongest ligament in the body is:",
      options: ["Iliofemoral ligament", "Pubofemoral ligament", "Ischiofemoral ligament", "Ligamentum teres"],
      answer: "Iliofemoral ligament",
      explanation: "Iliofemoral ligament prevents hyperextension and is the strongest."
    },
    {
      question: "Which of the following is a hinge joint?",
      options: ["Shoulder", "Hip", "Elbow", "Atlantoaxial"],
      answer: "Elbow",
      explanation: "Elbow is a hinge type of synovial joint."
    },
    {
      question: "Which artery supplies the visual cortex?",
      options: ["Middle cerebral artery", "Posterior cerebral artery", "Anterior cerebral artery", "Basilar artery"],
      answer: "Posterior cerebral artery",
      explanation: "Visual cortex is in the occipital lobe, supplied by PCA."
    },
    {
      question: "The sensory supply of the face is provided mainly by:",
      options: ["Facial nerve", "Trigeminal nerve", "Glossopharyngeal nerve", "Hypoglossal nerve"],
      answer: "Trigeminal nerve",
      explanation: "Trigeminal nerve (CN V) provides facial sensation."
    }
  ],

  "Physiology": [
  {
    question: "Resting membrane potential is mainly maintained by:",
    options: ["Calcium ions", "Sodium-potassium pump", "Chloride ions", "Magnesium pump"],
    answer: "Sodium-potassium pump",
    explanation: "The Na⁺/K⁺-ATPase pump maintains resting membrane potential."
  },
  {
    question: "Which hormone increases blood glucose levels?",
    options: ["Insulin", "Glucagon", "Calcitonin", "Aldosterone"],
    answer: "Glucagon",
    explanation: "Glucagon stimulates glycogenolysis and gluconeogenesis."
  },
  {
    question: "Cardiac output is the product of:",
    options: ["Heart rate and stroke volume", "Stroke volume and preload", "Afterload and heart rate", "Blood pressure and volume"],
    answer: "Heart rate and stroke volume",
    explanation: "Cardiac output = HR × Stroke Volume."
  },
  {
    question: "Surfactant in lungs is secreted by:",
    options: ["Type I pneumocytes", "Type II pneumocytes", "Alveolar macrophages", "Bronchiolar cells"],
    answer: "Type II pneumocytes",
    explanation: "Type II cells secrete surfactant which reduces surface tension."
  },
  {
    question: "Normal pH of blood is:",
    options: ["6.8", "7.0", "7.4", "8.0"],
    answer: "7.4",
    explanation: "Normal arterial blood pH is ~7.35-7.45."
  },
  {
    question: "Which organ has the highest blood flow per gram of tissue?",
    options: ["Liver", "Kidney", "Brain", "Heart"],
    answer: "Kidney",
    explanation: "Kidneys receive ~20-25% of cardiac output per gram."
  },
  {
    question: "Which vitamin is essential for vision?",
    options: ["Vitamin D", "Vitamin B12", "Vitamin A", "Vitamin C"],
    answer: "Vitamin A",
    explanation: "Vitamin A is required for rhodopsin synthesis in rods."
  },
  {
    question: "Which type of muscle shows the slowest contraction?",
    options: ["Cardiac", "Skeletal", "Smooth", "All same"],
    answer: "Smooth",
    explanation: "Smooth muscles contract slowly and sustain longer contractions."
  },
  {
    question: "Which is the pacemaker of the heart?",
    options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
    answer: "SA node",
    explanation: "SA node initiates electrical impulse and sets the rhythm."
  },
  {
    question: "Which gas has the highest diffusion capacity in lungs?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Carbon monoxide"],
    answer: "Carbon dioxide",
    explanation: "CO₂ diffuses 20x faster than O₂ due to higher solubility."
  }
],

"Biochemistry": [
  {
    question: "Which enzyme is deficient in Phenylketonuria?",
    options: ["Tyrosinase", "Phenylalanine hydroxylase", "Homogentisate oxidase", "DOPA decarboxylase"],
    answer: "Phenylalanine hydroxylase",
    explanation: "Phenylalanine hydroxylase converts phenylalanine to tyrosine."
  },
  {
    question: "Which vitamin is required for clotting factor synthesis?",
    options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin B6"],
    answer: "Vitamin K",
    explanation: "Vitamin K is necessary for γ-carboxylation of clotting factors."
  },
  {
    question: "Which is the storage form of glucose in the body?",
    options: ["Starch", "Cellulose", "Glycogen", "Sucrose"],
    answer: "Glycogen",
    explanation: "Glycogen is the storage polysaccharide in animals."
  },
  {
    question: "Which lipid is amphipathic?",
    options: ["Cholesterol", "Triacylglycerol", "Phospholipid", "Steroid"],
    answer: "Phospholipid",
    explanation: "Phospholipids have both hydrophilic and hydrophobic ends."
  },
  {
    question: "Which amino acid contains sulfur?",
    options: ["Leucine", "Methionine", "Lysine", "Proline"],
    answer: "Methionine",
    explanation: "Methionine and cysteine are sulfur-containing amino acids."
  },
  {
    question: "Ribose sugar is present in:",
    options: ["DNA", "RNA", "ATP", "Both RNA and ATP"],
    answer: "Both RNA and ATP",
    explanation: "Both contain ribose sugar; DNA contains deoxyribose."
  },
  {
    question: "Enzyme acting at high pH in digestion is:",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    answer: "Trypsin",
    explanation: "Trypsin works in alkaline environment in the intestine."
  },
  {
    question: "Which vitamin is an antioxidant?",
    options: ["Vitamin B1", "Vitamin C", "Vitamin K", "Vitamin D"],
    answer: "Vitamin C",
    explanation: "Vitamin C is a powerful water-soluble antioxidant."
  },
  {
    question: "Apoenzyme + Cofactor is called:",
    options: ["Holoenzyme", "Zymogen", "Isoenzyme", "Proenzyme"],
    answer: "Holoenzyme",
    explanation: "Holoenzyme is the active form of enzyme with cofactor."
  },
  {
    question: "Primary structure of protein is defined by:",
    options: ["Peptide bonds", "Hydrogen bonds", "Disulfide bonds", "Ionic bonds"],
    answer: "Peptide bonds",
    explanation: "Primary structure is the sequence of amino acids linked by peptide bonds."
  }
],

"Pathology": [
  {
    question: "Which cell is characteristic of Hodgkin lymphoma?",
    options: ["Reed-Sternberg cell", "Plasma cell", "Mast cell", "Kupffer cell"],
    answer: "Reed-Sternberg cell",
    explanation: "Reed-Sternberg cells are giant cells seen in Hodgkin lymphoma."
  },
  {
    question: "Which stain is used for amyloid?",
    options: ["PAS", "Congo red", "Giemsa", "Ziehl-Neelsen"],
    answer: "Congo red",
    explanation: "Amyloid stains apple green birefringence with Congo red under polarized light."
  },
  {
    question: "Fatty change is commonly seen in which organ?",
    options: ["Lung", "Liver", "Spleen", "Pancreas"],
    answer: "Liver",
    explanation: "Liver is the most common site for fatty change due to alcohol, obesity, etc."
  },
  {
    question: "Which type of necrosis is seen in tuberculosis?",
    options: ["Coagulative", "Liquefactive", "Caseous", "Fat"],
    answer: "Caseous",
    explanation: "Caseous necrosis is cheese-like and typical of TB."
  },
  {
    question: "Heart failure cells are seen in:",
    options: ["Liver", "Lung", "Kidney", "Spleen"],
    answer: "Lung",
    explanation: "These are hemosiderin-laden macrophages seen in lungs during left heart failure."
  },
  {
    question: "Which immunoglobulin is first produced in primary immune response?",
    options: ["IgG", "IgA", "IgM", "IgE"],
    answer: "IgM",
    explanation: "IgM is the first antibody to appear in response to infection."
  },
  {
    question: "Oncogenes cause cancer by promoting:",
    options: ["Apoptosis", "Cell differentiation", "Cell proliferation", "Senescence"],
    answer: "Cell proliferation",
    explanation: "Oncogenes lead to unregulated cell growth."
  },
  {
    question: "Which protein prevents apoptosis?",
    options: ["Bcl-2", "p53", "Caspase", "TNF-alpha"],
    answer: "Bcl-2",
    explanation: "Bcl-2 inhibits apoptosis and is overexpressed in some cancers."
  },
  {
    question: "Granuloma consists of:",
    options: ["Neutrophils", "Lymphocytes", "Epithelioid cells", "Basophils"],
    answer: "Epithelioid cells",
    explanation: "Granulomas are formed by modified macrophages (epithelioid cells)."
  },
  {
    question: "The most radiosensitive phase of cell cycle is:",
    options: ["G1", "S", "G2", "M"],
    answer: "M",
    explanation: "Cells are most sensitive to radiation during mitosis (M phase)."
  }
],

"Pharmacology": [
  {
    question: "Which drug is a non-selective beta blocker?",
    options: ["Atenolol", "Propranolol", "Metoprolol", "Bisoprolol"],
    answer: "Propranolol",
    explanation: "Propranolol blocks both β1 and β2 receptors."
  },
  {
    question: "Which antibiotic inhibits cell wall synthesis?",
    options: ["Tetracycline", "Penicillin", "Erythromycin", "Chloramphenicol"],
    answer: "Penicillin",
    explanation: "Penicillin inhibits bacterial cell wall synthesis by targeting peptidoglycan."
  },
  {
    question: "Which anti-TB drug causes red-orange urine?",
    options: ["Isoniazid", "Rifampicin", "Ethambutol", "Pyrazinamide"],
    answer: "Rifampicin",
    explanation: "Rifampicin imparts red-orange color to body fluids."
  },
  {
    question: "Which drug is contraindicated in pregnancy?",
    options: ["Paracetamol", "Tetracycline", "Amoxicillin", "Metronidazole"],
    answer: "Tetracycline",
    explanation: "Tetracyclines can cause teeth discoloration and bone deformities in fetus."
  },
  {
    question: "Which drug causes gingival hyperplasia?",
    options: ["Phenytoin", "Valproate", "Carbamazepine", "Phenobarbital"],
    answer: "Phenytoin",
    explanation: "Phenytoin is known to cause gum overgrowth in long-term use."
  },
  {
    question: "Which route of drug administration avoids first-pass metabolism?",
    options: ["Oral", "Sublingual", "Rectal", "Intramuscular"],
    answer: "Sublingual",
    explanation: "Sublingual administration bypasses the liver."
  },
  {
    question: "Which drug is an ACE inhibitor?",
    options: ["Losartan", "Captopril", "Amlodipine", "Propranolol"],
    answer: "Captopril",
    explanation: "Captopril inhibits angiotensin converting enzyme."
  },
  {
    question: "Which drug is used in anaphylactic shock?",
    options: ["Dopamine", "Epinephrine", "Atropine", "Hydrocortisone"],
    answer: "Epinephrine",
    explanation: "Epinephrine is life-saving in anaphylaxis due to bronchodilation and vasoconstriction."
  },
  {
    question: "Which of the following is a proton pump inhibitor?",
    options: ["Ranitidine", "Cimetidine", "Omeprazole", "Sucralfate"],
    answer: "Omeprazole",
    explanation: "Omeprazole irreversibly inhibits H⁺/K⁺ ATPase in gastric parietal cells."
  },
  {
    question: "Which drug causes dose-dependent hearing loss?",
    options: ["Amoxicillin", "Streptomycin", "Ciprofloxacin", "Erythromycin"],
    answer: "Streptomycin",
    explanation: "Streptomycin is ototoxic, especially at high doses or prolonged use."
  }
],

"Microbiology": [
  {
    question: "Gram-positive cocci in clusters indicate:",
    options: ["Streptococcus", "Neisseria", "Staphylococcus", "Enterococcus"],
    answer: "Staphylococcus",
    explanation: "Staphylococci appear as Gram-positive cocci in clusters under microscope."
  },
  {
    question: "Ziehl-Neelsen stain is used to identify:",
    options: ["E. coli", "Mycobacterium tuberculosis", "Streptococcus pneumoniae", "Salmonella"],
    answer: "Mycobacterium tuberculosis",
    explanation: "Ziehl-Neelsen is used to stain acid-fast bacilli like M. tuberculosis."
  },
  {
    question: "The vector for malaria is:",
    options: ["Aedes mosquito", "Anopheles mosquito", "Culex mosquito", "Sandfly"],
    answer: "Anopheles mosquito",
    explanation: "Female Anopheles mosquitoes transmit Plasmodium spp."
  },
  {
    question: "Which of the following is DNA virus?",
    options: ["HIV", "Influenza virus", "Herpes simplex virus", "Hepatitis C virus"],
    answer: "Herpes simplex virus",
    explanation: "Herpes viruses are large enveloped DNA viruses."
  },
  {
    question: "Which organism causes whooping cough?",
    options: ["Corynebacterium diphtheriae", "Bordetella pertussis", "Mycoplasma pneumoniae", "Haemophilus influenzae"],
    answer: "Bordetella pertussis",
    explanation: "B. pertussis is the causative agent of whooping cough."
  },
  {
    question: "Widal test is used for diagnosis of:",
    options: ["Typhoid", "Cholera", "TB", "HIV"],
    answer: "Typhoid",
    explanation: "Widal test detects agglutinating antibodies against Salmonella antigens."
  },
  {
    question: "Which immunoglobulin is found in secretions?",
    options: ["IgG", "IgM", "IgA", "IgE"],
    answer: "IgA",
    explanation: "IgA is predominant in mucosal secretions like saliva, tears, etc."
  },
  {
    question: "Which bacteria is anaerobic?",
    options: ["Clostridium tetani", "E. coli", "Pseudomonas", "Staphylococcus aureus"],
    answer: "Clostridium tetani",
    explanation: "Clostridium species are strict anaerobes."
  },
  {
    question: "Which organism causes syphilis?",
    options: ["Chlamydia trachomatis", "Treponema pallidum", "Neisseria gonorrhoeae", "Haemophilus ducreyi"],
    answer: "Treponema pallidum",
    explanation: "Syphilis is caused by the spirochete Treponema pallidum."
  },
  {
    question: "Mantoux test is used to detect:",
    options: ["Typhoid", "Malaria", "Tuberculosis", "Leprosy"],
    answer: "Tuberculosis",
    explanation: "Mantoux test checks for delayed hypersensitivity reaction to tuberculin."
  }
],

"Forensic Medicine": [
  {
    question: "The poisonous component in castor seeds is:",
    options: ["Ricin", "Abrin", "Curcin", "Nicotine"],
    answer: "Ricin",
    explanation: "Ricin is a toxic protein found in castor seeds."
  },
  {
    question: "Pugilistic attitude in a burnt body is due to:",
    options: ["Pain", "Asphyxia", "Heat stiffening", "Cadaveric spasm"],
    answer: "Heat stiffening",
    explanation: "Heat causes coagulation of muscles leading to pugilistic posture."
  },
  {
    question: "The ideal sample for DNA fingerprinting is:",
    options: ["Blood", "Hair root", "Saliva", "Nail"],
    answer: "Hair root",
    explanation: "Hair root contains nucleated cells suitable for DNA analysis."
  },
  {
    question: "Postmortem hypostasis is also called:",
    options: ["Rigor mortis", "Algor mortis", "Livor mortis", "Cadaveric spasm"],
    answer: "Livor mortis",
    explanation: "Livor mortis refers to purplish discoloration due to blood settling after death."
  },
  {
    question: "Which poison smells like bitter almonds?",
    options: ["Arsenic", "Cyanide", "Lead", "Mercury"],
    answer: "Cyanide",
    explanation: "Cyanide has a characteristic bitter almond odor."
  },
  {
    question: "Best method to estimate age in 14-18 years is:",
    options: ["Teeth eruption", "Epiphyseal fusion", "Skull suture closure", "Height"],
    answer: "Epiphyseal fusion",
    explanation: "Epiphyseal fusion is the most reliable age indicator in adolescents."
  },
  {
    question: "Lacerated wound is characterized by:",
    options: ["Clean edges", "Abraded margins", "Smooth surface", "Regular shape"],
    answer: "Abraded margins",
    explanation: "Lacerated wounds have irregular torn margins with surrounding abrasion."
  },
  {
    question: "Which test is used for blood detection at crime scenes?",
    options: ["Marsh test", "Kastle-Meyer test", "Harrison test", "Reinsch test"],
    answer: "Kastle-Meyer test",
    explanation: "Kastle-Meyer test detects blood using phenolphthalein and hydrogen peroxide."
  },
  {
    question: "McNaughten rule is related to:",
    options: ["Insanity", "Homicide", "Suicide", "Alcoholism"],
    answer: "Insanity",
    explanation: "McNaughten rule determines criminal responsibility in mental illness cases."
  },
  {
    question: "Magistrate inquest is mandatory in case of:",
    options: ["Accident", "Suicide", "Police custody death", "Natural death"],
    answer: "Police custody death",
    explanation: "Magistrate inquest is required for custodial and dowry deaths."
  }
],

"Community Medicine": [
  {
    question: "The first step in epidemiological investigation is:",
    options: ["Formulation of hypothesis", "Data collection", "Descriptive study", "Detection of epidemic"],
    answer: "Detection of epidemic",
    explanation: "Identifying the presence of an epidemic is the first step."
  },
  {
    question: "Incubation period is the interval between:",
    options: ["Exposure and recovery", "Exposure and symptoms", "Symptoms and diagnosis", "Infection and death"],
    answer: "Exposure and symptoms",
    explanation: "Incubation period is the time from exposure to onset of symptoms."
  },
  {
    question: "Which vaccine is given at birth?",
    options: ["BCG", "OPV", "Hepatitis B", "All of the above"],
    answer: "All of the above",
    explanation: "BCG, OPV (zero dose), and Hepatitis B (birth dose) are given at birth."
  },
  {
    question: "The vector for dengue fever is:",
    options: ["Anopheles", "Culex", "Aedes", "Sandfly"],
    answer: "Aedes",
    explanation: "Aedes mosquito transmits dengue virus."
  },
  {
    question: "Under-five mortality rate includes:",
    options: ["Neonatal deaths only", "Infant deaths only", "Deaths under age 5 years", "Maternal deaths"],
    answer: "Deaths under age 5 years",
    explanation: "U5MR includes all deaths from birth to 5 years."
  },
  {
    question: "Disease elimination means:",
    options: ["Reduction to zero globally", "Eradication in one country", "Reduction to zero in a defined area", "Control to a minimal level"],
    answer: "Reduction to zero in a defined area",
    explanation: "Elimination is absence of disease transmission in a region."
  },
  {
    question: "HDL is called:",
    options: ["Bad cholesterol", "Triglyceride", "Good cholesterol", "VLDL"],
    answer: "Good cholesterol",
    explanation: "HDL removes cholesterol from blood, hence called good cholesterol."
  },
  {
    question: "Best method for disposing biomedical waste is:",
    options: ["Burning in open air", "Burial", "Incineration", "Dumping in rivers"],
    answer: "Incineration",
    explanation: "Incineration safely destroys infectious biomedical waste."
  },
  {
    question: "Prevalence is calculated by:",
    options: ["New cases only", "Old cases only", "New + existing cases", "Deaths"],
    answer: "New + existing cases",
    explanation: "Prevalence includes all existing cases at a point in time."
  },
  {
    question: "Which is a live vaccine?",
    options: ["DPT", "Hepatitis B", "Oral polio vaccine", "Tetanus toxoid"],
    answer: "Oral polio vaccine",
    explanation: "OPV is a live attenuated vaccine."
  }
],

"Surgery": [
  {
    question: "Which is the most common type of hernia?",
    options: ["Femoral", "Inguinal", "Umbilical", "Incisional"],
    answer: "Inguinal",
    explanation: "Inguinal hernia is the most common abdominal hernia."
  },
  {
    question: "Glasgow Coma Scale (GCS) is used to assess:",
    options: ["Burns", "Wound healing", "Level of consciousness", "Pain"],
    answer: "Level of consciousness",
    explanation: "GCS measures consciousness based on eye, verbal, and motor responses."
  },
  {
    question: "The most common cause of appendicitis is:",
    options: ["Fecolith", "Tumor", "Worms", "Trauma"],
    answer: "Fecolith",
    explanation: "Fecolith obstructs the lumen of the appendix causing inflammation."
  },
  {
    question: "Foley's catheter is used for:",
    options: ["IV fluid", "Oxygen supply", "Urine drainage", "Feeding"],
    answer: "Urine drainage",
    explanation: "Foley’s catheter is used to drain urine from bladder."
  },
  {
    question: "The commonest site for breast cancer is:",
    options: ["Upper inner quadrant", "Upper outer quadrant", "Lower inner quadrant", "Lower outer quadrant"],
    answer: "Upper outer quadrant",
    explanation: "60% of breast cancers occur in the upper outer quadrant."
  },
  {
    question: "Suture used in bowel anastomosis is:",
    options: ["Silk", "Vicryl", "Catgut", "Nylon"],
    answer: "Vicryl",
    explanation: "Vicryl is absorbable and commonly used in bowel surgeries."
  },
  {
    question: "Which is a clean-contaminated surgery?",
    options: ["Appendectomy", "Hernia repair", "Colon resection", "Wound debridement"],
    answer: "Colon resection",
    explanation: "Surgeries involving GI tract without spillage are clean-contaminated."
  },
  {
    question: "The initial management of trauma follows:",
    options: ["GCS", "ABCDE", "MRI", "Surgery"],
    answer: "ABCDE",
    explanation: "ABCDE (Airway, Breathing, Circulation, Disability, Exposure) is trauma protocol."
  },
  {
    question: "Which condition requires chest tube insertion?",
    options: ["Pneumothorax", "Appendicitis", "Cholecystitis", "Hernia"],
    answer: "Pneumothorax",
    explanation: "Chest tube relieves air in pleural cavity in pneumothorax."
  },
  {
    question: "Best diagnostic tool for gallstones is:",
    options: ["X-ray", "CT scan", "Ultrasound", "MRI"],
    answer: "Ultrasound",
    explanation: "Ultrasound is first-line imaging for gallbladder stones."
  }
],

"Medicine": [
  {
    question: "The most common cause of myocardial infarction is:",
    options: ["Vasospasm", "Embolism", "Atherosclerosis", "Trauma"],
    answer: "Atherosclerosis",
    explanation: "Plaque buildup leads to blockage of coronary arteries causing MI."
  },
  {
    question: "Which drug is used in anaphylaxis?",
    options: ["Aspirin", "Epinephrine", "Atropine", "Amoxicillin"],
    answer: "Epinephrine",
    explanation: "Epinephrine is the drug of choice for anaphylactic reactions."
  },
  {
    question: "Kussmaul breathing is seen in:",
    options: ["COPD", "Metabolic alkalosis", "Diabetic ketoacidosis", "Asthma"],
    answer: "Diabetic ketoacidosis",
    explanation: "Kussmaul respiration is deep, labored breathing due to acidosis."
  },
  {
    question: "Which electrolyte imbalance causes Trousseau’s sign?",
    options: ["Hypokalemia", "Hypocalcemia", "Hypernatremia", "Hypermagnesemia"],
    answer: "Hypocalcemia",
    explanation: "Trousseau’s sign is a feature of low calcium levels."
  },
  {
    question: "Pulsus paradoxus is associated with:",
    options: ["Aortic stenosis", "Cardiac tamponade", "Hypertension", "MI"],
    answer: "Cardiac tamponade",
    explanation: "Pulsus paradoxus is a fall in BP during inspiration, seen in tamponade."
  },
  {
    question: "Which test confirms HIV infection?",
    options: ["ELISA", "CBC", "CRP", "Mantoux"],
    answer: "ELISA",
    explanation: "ELISA is the screening and confirmatory test for HIV antibodies."
  },
  {
    question: "A common cause of stroke is:",
    options: ["Tumor", "Infection", "Ischemia", "Trauma"],
    answer: "Ischemia",
    explanation: "Stroke is most commonly due to ischemia (clot blocking blood flow)."
  },
  {
    question: "Pitting edema is seen in:",
    options: ["Lymphedema", "Hypoproteinemia", "DVT", "Fracture"],
    answer: "Hypoproteinemia",
    explanation: "Low plasma proteins reduce oncotic pressure, causing pitting edema."
  },
  {
    question: "Bradycardia is defined as pulse rate less than:",
    options: ["50 bpm", "60 bpm", "70 bpm", "80 bpm"],
    answer: "60 bpm",
    explanation: "Bradycardia is heart rate < 60 beats per minute."
  },
  {
    question: "The classic triad of diabetes includes:",
    options: ["Weight gain, thirst, headache", "Polyuria, polydipsia, polyphagia", "Nausea, fatigue, fever", "Cough, fever, hemoptysis"],
    answer: "Polyuria, polydipsia, polyphagia",
    explanation: "These are the classic signs of uncontrolled diabetes mellitus."
  }
],
  
};

let currentQuestionIndex = 0;
let currentTopic = "";

function loadTopic() {
  const selector = document.getElementById("topic");
  currentTopic = selector.value;
  if (!currentTopic) return;

  currentQuestionIndex = 0;
  document.getElementById("topic-selector").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  document.getElementById("back-btn").style.display = "inline-block";
  showNextQuestion();
}

function showNextQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  const questions = allQuestions[currentTopic];
  if (currentQuestionIndex >= questions.length) {
    container.innerHTML = "<p>🎉 You have completed the quiz for " + currentTopic + "!</p>";
    document.getElementById("next-btn").style.display = "none";
    return;
  }

  const q = questions[currentQuestionIndex];
  const card = document.createElement("div");
  card.className = "question-card";

  const questionEl = document.createElement("h3");
  questionEl.textContent = `Q${currentQuestionIndex + 1}. ${q.question}`;
  card.appendChild(questionEl);

  q.options.forEach(option => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.textContent = option;
    opt.onclick = () => selectAnswer(opt, q.answer, q.explanation);
    card.appendChild(opt);
  });

  container.appendChild(card);
  currentQuestionIndex++;
}

function selectAnswer(element, correctAnswer, explanation) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => {
    opt.classList.remove("correct", "incorrect");
    if (opt.textContent === correctAnswer) {
      opt.classList.add("correct");
    } else if (opt === element) {
      opt.classList.add("incorrect");
    }
    opt.onclick = null;
  });

  const explanationEl = document.createElement("div");
  explanationEl.className = "explanation";
  explanationEl.textContent = `Explanation: ${explanation}`;
  document.querySelector(".question-card").appendChild(explanationEl);
}

function goBack() {
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("topic-selector").style.display = "block";
  document.getElementById("back-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "inline-block";
}
