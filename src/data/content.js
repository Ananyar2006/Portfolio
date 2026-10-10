export const portfolioData = {
  personal: {
    name: "Ananya R",
    tagline: "Building machine learning systems from model to software",
    shortBio: "B.Tech Computer Science student at RV University | NLP · Speech AI · Multimodal Deep Learning",
    heroButtons: {
      projects: "#projects",
      resume: "./assets/Ananya_R_Resume.pdf",
      contact: "#contact"
    },
    socials: {
      github: "https://github.com/Ananyar2006",
      linkedin: "https://www.linkedin.com/in/ananya-r-b9751a2a2/",
      email: "ananyachar16@gmail.com"
    }
  },

  about: {
    title: "About Me",
    text: "Motivated B.Tech Computer Science student at RV University with hands-on experience in NLP, speech AI and multimodal deep learning. Built a speech emotion recognition system (76.31% accuracy) and a multilingual abuse detection API (82% accuracy), and applied explainable AI to Alzheimer's detection (92.5% accuracy). Eager to build practical ML software.",
    highlights: [
      { label: "Speech Emotion Recognition", value: "76.31% Accuracy" },
      { label: "Multilingual Abuse Detection API", value: "82% Accuracy" },
      { label: "Early Alzheimer's Detection", value: "92.5% Acc (0.96 AUC)" },
      { label: "RV University CGPA", value: "8.82 / 10" }
    ]
  },

  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "C", "SQL"]
    },
    {
      category: "AI / ML & Deep Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "Speech Emotion Recognition",
        "Affective Computing",
        "Computer Vision",
        "Feature Extraction",
        "Fine-tuning",
        "Hyperparameter Tuning",
        "Explainable AI (XAI)",
        "SHAP"
      ]
    },
    {
      category: "Models & Architectures",
      items: [
        "Transformer",
        "BERT",
        "RoBERTa",
        "XLM-RoBERTa",
        "Wav2Vec2",
        "WavLM",
        "CNN",
        "RNN",
        "LSTM"
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Librosa",
        "Flask",
        "NumPy",
        "Pandas",
        "Matplotlib"
      ]
    },
    {
      category: "Tools & Concepts",
      items: [
        "Git",
        "GitHub",
        "Google Colab",
        "VS Code",
        "Data Structures & Algorithms",
        "DBMS"
      ]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript"]
    }
  ],

  experience: [
    {
      id: "dhee-centre-ai-intern",
      title: "Summer Intern – Agriculture AI",
      organization: "Dhee Centre for AI and Data Science, RV University",
      location: "Bengaluru, India",
      duration: "Jun 2025 – Jul 2025",
      tags: [
        "Feature Extraction",
        "Python",
        "Hyperparameter Tuning",
        "Deep Learning",
        "Machine Learning"
      ],
      description: "Built a Corn Leaf Disease Detection system using ML and deep learning to classify leaf images into Healthy, Rust, Blight, and Gray Leaf Spot, reaching 93% (PRF+SVM) and 93.2% (custom 4-layer CNN) accuracy. Extracted HSV, HOG, LBP, GLCM, Colour Histogram, and ORB features for Random Forest, SVM, KNN, Decision Tree, and PRF+SVM models; compared a custom CNN with VGG16, MobileNetV2, EfficientNet, InceptionV3, and ResNet152 using data augmentation, hyperparameter tuning, and accuracy/precision/recall/F1 evaluation."
    }
  ],

  projects: [
    {
      id: "emotion-trend-analysis",
      title: "Emotion Trend Analysis in Conversations Using Multimodal Audio and Text Data",
      year: "2026",
      shortDescription: "4-class speech emotion recognition (angry, happy, sad, neutral) on IEMOCAP by fusing audio and text features.",
      problem: "Conversational audio often carries subtle emotional cues that single-modality models miss or misclassify due to overlapping acoustic features and textual ambiguity.",
      approach: "Engineered a multimodal deep learning system on the IEMOCAP dataset for 4-class speech emotion recognition (angry, happy, sad, neutral), fusing audio and text features using a Wav2Vec2 + RoBERTa-CNN + Cross-Attention fusion architecture. Benchmarked 3 unimodal and 8 multimodal model combinations (WavLM, DistilBERT, BERT-BiLSTM, CNN+BiLSTM); resolved class imbalance via class-weighted loss and excited-happy label merging.",
      results: "Achieved 76.31% accuracy with a Wav2Vec2 + RoBERTa-CNN + Cross-Attention fusion architecture.",
      tech: [
        "Python",
        "PyTorch",
        "Wav2Vec2",
        "WavLM",
        "RoBERTa",
        "BERT",
        "Cross-Attention",
        "IEMOCAP",
        "Librosa",
        "Matplotlib",
        "SciPy"
      ],
      githubUrl: "",
      demoUrl: "",
      imageUrl: ""
    },
    {
      id: "multilingual-abuse-detection",
      title: "Multilingual Abuse Detection in English–Indian Code-Mixed Languages",
      year: "2026",
      shortDescription: "Multimodal hate speech and abuse detection for Tamil–English, Hindi–English, Kannada–English, and Malayalam–English code-mixed inputs via text and real-time speech.",
      problem: "Code-mixed Indian languages present significant challenges in moderation platforms due to script mixing, non-standard spelling, and regional speech nuances.",
      approach: "Engineered a multimodal hate speech and abuse detection system for Tamil–English, Hindi–English, Kannada–English, and Malayalam–English code-mixed inputs via text and real-time speech. Fine-tuned XLM-RoBERTa on the Dravidian Code-Mix 2020 and Hindi–English hate speech datasets using class-weighted binary cross-entropy loss. Integrated Sarvam AI Saarika v2.5 speech-to-text for real-time audio transcription through a Flask REST API backend.",
      results: "Achieved 82% accuracy on Tamil–English code-mixed data with real-time Flask REST API audio transcription.",
      tech: [
        "Python",
        "XLM-RoBERTa",
        "HuggingFace Transformers",
        "Flask",
        "REST API",
        "Sarvam AI STT"
      ],
      githubUrl: "",
      demoUrl: "",
      imageUrl: ""
    },
    {
      id: "alzheimers-detection-xai",
      title: "Early Alzheimer's Detection using Multimodal Deep Learning and XAI",
      year: "2025",
      shortDescription: "Multimodal Bi-LSTM framework fusing text transcripts and MFCC audio features to classify Control vs Dementia on 200 speech samples.",
      problem: "Early clinical detection of Alzheimer's requires combining linguistic and acoustic cues while offering transparent model predictions so clinicians can interpret specific breakdown patterns.",
      approach: "Built a multimodal Bi-LSTM fusing text transcripts and MFCC audio features to classify Control vs Dementia on 200 speech samples, achieving 92.5% accuracy and 0.96 AUC, outperforming classical ML baselines (SVM-RBF, 78.79%) and prior multimodal studies (85.3–88.7%). Applied SHAP, LIME, Bag-of-Words, and MFCC-spectrogram explainability to surface word- and acoustic-level cues (filler words, pauses, pitch variation), improving clinical interpretability.",
      results: "Achieved 92.5% accuracy and 0.96 AUC on 200 speech samples, outperforming classical ML baseline (78.79%).",
      tech: [
        "Python",
        "PyTorch",
        "Bi-LSTM",
        "MFCC",
        "SpecAugment",
        "TF-IDF",
        "Scikit-learn",
        "SHAP",
        "LIME"
      ],
      githubUrl: "",
      demoUrl: "",
      imageUrl: ""
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "RV University, Bangalore, India",
      year: "Expected 2027",
      grade: "CGPA: 8.82",
      description: "Focused on Natural Language Processing, Speech AI, Multimodal Deep Learning, Data Structures, Algorithms, DBMS, and Software Engineering."
    },
    {
      degree: "Pre-University Course (PCMB)",
      institution: "Government Pre-University College, Amrutha, Shivamogga, India",
      year: "2023",
      grade: "90.52%",
      description: "Physics, Chemistry, Mathematics, and Biology with academic distinction."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Government High School Humchadakatte, Shivamogga, India",
      year: "2021",
      grade: "86.72%",
      description: "Foundational secondary education with strong excellence in mathematics and science."
    }
  ],

  certificationsAndAchievements: {
    certifications: [
      {
        title: "NPTEL Certifications (Elite + Silver): Affective Computing",
        issuer: "NPTEL",
        url: ""
      },
      {
        title: "NPTEL Certifications (Elite + Silver): Introduction to Graph Theory",
        issuer: "NPTEL",
        url: ""
      }
    ],
    achievements: [
      {
        title: "Finalist, Image AI-thon – Prompt Engineering Challenge",
        event: "Spring Fiesta, IIIT Surat",
        year: "2026",
        description: "Selected as finalist in prompt engineering & generative visual AI challenge."
      }
    ]
  },

  languages: [
    { name: "English", proficiency: "Professional" },
    { name: "Kannada", proficiency: "Native" }
  ],

  contact: {
    title: "Get In Touch",
    subtitle: "Interested in collaboration, research, or engineering roles in NLP, Speech AI, or ML Engineering? Feel free to reach out!",
    email: "ananyachar16@gmail.com",
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ID_HERE"
  },

  seo: {
    title: "Ananya R | B.Tech CS Student",
    description: "Personal portfolio of Ananya R, B.Tech CS student at RV University specializing in NLP, Speech AI, and Multimodal Deep Learning.",
    domain: "https://ananyar2006.github.io",
    ogImage: "/og-image.png"
  }
};
