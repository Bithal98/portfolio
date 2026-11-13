export const projectsData = [
  {
    id: "district-news-agent",
    title: "District News Intelligence & Verification Agent",
    shortTitle: "District News Intelligence",
    category: "Agentic AI",
    badge: "Multi-Agent System",
    featured: true,
    rank: 1,
    tagline: "Autonomous multi-agent news collection, cross-referencing against official state portals, and bilingual publishing.",
    shortDescription: "An autonomous multi-agent pipeline coordinating news harvesting, deduplication, official government portal verification, and dual-language publishing (Odia & English).",
    fullDescription: "District News Intelligence is an agentic AI architecture designed to tackle local misinformation. Built using LangGraph, it coordinates multiple specialized AI agents: one continuously monitors district RSS feeds and public forums, another clusters and deduplicates related breaking stories, a third cross-checks claims against official government gazettes and portals, and a final agent publishes bilingual verified bulletins.",
    problem: "Regional journalism in smaller districts suffers from viral misinformation, lack of rapid fact-checking resources, and delayed confirmation against official administrative releases.",
    solution: "A state-machine multi-agent system built on LangGraph that autonomously scrapes, extracts assertions, queries authoritative state repositories, assigns credibility scores, and synthesizes balanced Odia and English summaries.",
    architecture: [
      { step: "01", name: "Ingestion Worker", desc: "Automated crawlers monitoring regional portals and RSS feeds" },
      { step: "02", name: "Semantic Deduplication", desc: "ChromaDB vector embedding clustering of duplicate incidents" },
      { step: "03", name: "Fact-Check StateGraph", desc: "Autonomous agent cross-referencing official government databases" },
      { step: "04", name: "Reliability Scorer", desc: "Heuristic and LLM-assisted verification confidence metrics" },
      { step: "05", name: "Bilingual Dispatcher", desc: "Automated Odia and English news generation with source citations" }
    ],
    techStack: ["LangGraph", "Python", "FastAPI", "ChromaDB", "LLaMA 3", "Streamlit", "BeautifulSoup"],
    metrics: [
      { label: "Fact Accuracy", value: "88%+" },
      { label: "Verification Time", value: "< 4.2s" },
      { label: "Languages", value: "Odia & English" },
      { label: "Coverage", value: "10+ Districts" }
    ],
    keyFeatures: [
      "Deterministic LangGraph StateGraph state-machine workflow",
      "Automated verification against official government press portals",
      "Vector-based semantic incident clustering with ChromaDB",
      "Human-in-the-loop review dashboard before final publishing",
      "Bilingual synthesis with regional dialect sensitivity"
    ],
    githubUrl: "https://github.com/Bithal98/news-ai-agent",
    demoUrl: "https://github.com/Bithal98/news-ai-agent",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Bot",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "odia-llm",
    title: "OdiaLLM — Transformer from Scratch & Purana RAG",
    shortTitle: "OdiaLLM Transformer",
    category: "Generative AI & LLMs",
    badge: "Trained From Scratch",
    featured: true,
    rank: 2,
    tagline: "90M-parameter Odia-English translation Transformer trained from ground up on 500K sentence pairs, integrated with Purana RAG.",
    shortDescription: "A ground-up implementation of the Transformer architecture in PyTorch trained on 500,000 Odia-English sentence pairs, paired with an ancient Odia scripture RAG system.",
    fullDescription: "OdiaLLM represents a deep technical dive into low-resource NLP. Rather than wrapping commercial APIs, the complete Transformer architecture was implemented from first principles in PyTorch — including multi-head self-attention, positional encoding, custom BPE tokenization for Indic scripts, and scaled dot-product attention. The model was trained on 500K curated Odia-English sentence pairs and paired with a specialized RAG engine for ancient Odia literature.",
    problem: "Low-resource Indic languages like Odia are severely underrepresented in commercial LLMs, suffering from broken tokenizers, excessive token inflation, and total absence of historical and cultural domain depth.",
    solution: "Engineered a custom Byte-Pair Encoding (BPE) tokenizer optimized for Odia characters, trained a 90M parameter encoder-decoder Transformer from scratch, and built a contextual RAG pipeline indexing classical Odia epics and Puranas.",
    architecture: [
      { step: "01", name: "Custom BPE Tokenizer", desc: "32,000 vocabulary size trained specifically on Odia Unicode" },
      { step: "02", name: "PyTorch Architecture", desc: "6-layer encoder, 6-layer decoder with 8 attention heads" },
      { step: "03", name: "Training Loop", desc: "AdamW, cosine learning rate decay, label smoothing, FP16 CUDA" },
      { step: "04", name: "Purana Vector Store", desc: "Chunked and embedded historical epics stored in ChromaDB" },
      { step: "05", name: "Hybrid Inference", desc: "Beam search decoding integrated with contextual scripture retrieval" }
    ],
    techStack: ["PyTorch", "Python", "Transformers", "CUDA", "ChromaDB", "HuggingFace", "Streamlit"],
    metrics: [
      { label: "Model Parameters", value: "90M" },
      { label: "Dataset Size", value: "500K Pairs" },
      { label: "Vocab Size", value: "32,000" },
      { label: "BLEU Score", value: "26.4" }
    ],
    keyFeatures: [
      "Complete Transformer encoder-decoder coded from mathematical principles",
      "Custom BPE tokenizer eliminating Indic script token explosion",
      "Trained with PyTorch CUDA optimization and mixed-precision arithmetic",
      "Purana RAG module for querying historical Odia theological texts",
      "Interactive Streamlit translation and literary analysis interface"
    ],
    githubUrl: "https://github.com/Bithal98/OdiaLLM",
    demoUrl: "https://github.com/Bithal98/OdiaLLM",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Cpu",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "credit-risk-scorecard",
    title: "Credit Risk Scorecard & Reject Inference Engine",
    shortTitle: "Credit Risk Scorecard",
    category: "Machine Learning",
    badge: "FinTech & Production ML",
    featured: true,
    rank: 3,
    tagline: "Regulatory credit risk scorecard development with Weight of Evidence (WoE) and Reject Inference modeling.",
    shortDescription: "An enterprise credit risk modeling system implementing Probability of Default (PD) scorecards, monotonic WoE binning, and Reject Inference techniques to correct applicant selection bias.",
    fullDescription: "Built with the rigor demanded by institutional risk standards. This project models loan default probabilities using Weight of Evidence (WoE) and Information Value (IV) variable filtering, scales scores into standard credit points (base score 600, 20 PDO), and applies Reject Inference (Parceling & Bivariate Logistic Augmentation) to infer the repayment tendencies of applicants who were historically turned away.",
    problem: "Financial institutions suffer from sample selection bias because repayment records only exist for approved customers. Models trained solely on accepted loans underestimate delinquency risk in marginal applicant pools.",
    solution: "Engineered a robust econometric and statistical modeling pipeline utilizing monotonic WoE transformation, VIF collinearity screening, score scaling, and dual-method Reject Inference to adjust model coefficients for unbiased credit risk assessment.",
    architecture: [
      { step: "01", name: "Data Cleansing & EDA", desc: "Outlier imputation and financial missing value treatment" },
      { step: "02", name: "WoE / IV Transformation", desc: "Monotonic binning with IV > 0.02 predictive threshold" },
      { step: "03", name: "Logistic Modeling", desc: "Scorecard calibration with 20 Points to Double the Odds" },
      { step: "04", name: "Reject Inference", desc: "Parceling & Bivariate Logistic augmentation on rejected cases" },
      { step: "05", name: "Validation & Governance", desc: "AUC-ROC, Kolmogorov-Smirnov (KS), and PSI drift tracking" }
    ],
    techStack: ["Python", "Scikit-Learn", "LightGBM", "Statsmodels", "Pandas", "NumPy", "Matplotlib"],
    metrics: [
      { label: "AUC-ROC", value: "0.83" },
      { label: "KS Statistic", value: "0.79" },
      { label: "PSI Drift", value: "< 0.08" },
      { label: "Score Scaling", value: "20 PDO" }
    ],
    keyFeatures: [
      "Rigorous monotonic binning ensuring intuitive financial risk trends",
      "Full Reject Inference pipeline overcoming sample selection bias",
      "Industry standard scorecard scaling formula with target odds at anchor points",
      "Automated Population Stability Index (PSI) drift monitoring",
      "Compliant documentation framework adhering to Basel risk principles"
    ],
    githubUrl: "https://github.com/Bithal98/credit-risk-analysis",
    demoUrl: "https://github.com/Bithal98/credit-risk-analysis",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "TrendingUp",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "auto-eda-agent",
    title: "AutoEDA Agentic AI — Autonomous Data Scientist",
    shortTitle: "AutoEDA Agentic AI",
    category: "Agentic AI",
    badge: "Autonomous Data Science",
    featured: true,
    rank: 4,
    tagline: "Autonomous multi-agent system executing exploratory analysis, smart imputation, conversational data chat, and AutoML.",
    shortDescription: "An autonomous agentic assistant that ingests arbitrary tabular datasets, automatically identifies distributions and anomalies, executes smart cleaning, and answers complex data questions in natural language.",
    fullDescription: "AutoEDA Agent transforms tedious manual data exploration into an automated conversational experience. Utilizing LangGraph, the agent inspects column statistics, detects skewness and multi-collinearity, autonomously generates interactive Plotly visualizations, runs preliminary AutoML benchmark comparisons, and provides an executive data intelligence report.",
    problem: "Data scientists and business analysts lose dozens of hours per project performing repetitive boilerplate exploratory analysis, cleaning data, and creating baseline diagnostic plots.",
    solution: "A reactive multi-agent system that autonomously profiles datasets, writes and executes Python sandbox code for custom queries, and generates instant executive takeaways without writing a single line of code.",
    architecture: [
      { step: "01", name: "Dataset Ingestion", desc: "Schema profiling, missingness detection, and type inference" },
      { step: "02", name: "Statistical Analyst", desc: "Automated distribution checks, correlation matrix, and anomaly flags" },
      { step: "03", name: "Code Sandbox Agent", desc: "Dynamic Python generation for user natural language questions" },
      { step: "04", name: "AutoML Benchmarker", desc: "Rapid baseline training with Random Forest and XGBoost" },
      { step: "05", name: "Executive Reporter", desc: "Comprehensive PDF/HTML report generation with embedded plots" }
    ],
    techStack: ["LangGraph", "Python", "Pandas", "Plotly", "Streamlit", "LLaMA 3", "Groq API"],
    metrics: [
      { label: "Automation", value: "100% Zero-Code" },
      { label: "Query Speed", value: "< 2.8s" },
      { label: "AutoML Models", value: "5 Baselines" },
      { label: "Supported Formats", value: "CSV, Excel, Parquet" }
    ],
    keyFeatures: [
      "Natural language conversational querying over raw tabular files",
      "Dynamic Plotly chart synthesis based on statistical relevance",
      "Automated skewness correction and missing value imputation recommendations",
      "Integrated AutoML leaderboard comparing classification & regression models",
      "Interactive Streamlit frontend with instantaneous data previews"
    ],
    githubUrl: "https://github.com/Bithal98/autoeda-agentic-ai",
    demoUrl: "https://github.com/Bithal98/autoeda-agentic-ai",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "BarChart3",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "ai-interview-prep",
    title: "AI-Powered Adaptive Interview Preparation System",
    shortTitle: "AI Interview Coach",
    category: "Generative AI & LLMs",
    badge: "Voice & Speech Evaluation",
    featured: true,
    rank: 5,
    tagline: "Adaptive technical interview coaching with LLaMA 3 question synthesis and Whisper speech evaluation.",
    shortDescription: "A full-stack mock interview platform parsing resumes and job specs, conducting domain-specific technical interviews, transcribing speech with Whisper, and grading candidate answers.",
    fullDescription: "This system replicates a real technical interview. It extracts competencies from candidate resumes and job descriptions using LangChain, generates contextual technical questions with LLaMA 3, captures the candidate's spoken responses, transcribes them in real-time using OpenAI Whisper, and generates an exhaustive evaluation report with rubric-based scoring.",
    problem: "Students and software engineers struggle with preparing for specialized technical interviews without access to experienced mentors who can provide unbiased, structured feedback.",
    solution: "An intelligent multimodal interview coach combining resume parsing, dynamic question branching, high-fidelity speech-to-text, and semantic rubric scoring.",
    architecture: [
      { step: "01", name: "Resume & JD Ingestion", desc: "LangChain text chunking and vector index creation" },
      { step: "02", name: "Adaptive Questioner", desc: "LLaMA 3 synthesizes targeted, role-specific technical prompts" },
      { step: "03", name: "Voice Recorder", desc: "Browser-based microphone capture of verbal answers" },
      { step: "04", name: "Whisper Transcription", desc: "Automatic speech recognition converting audio to text" },
      { step: "05", name: "Rubric Grading Engine", desc: "Evaluates clarity, depth, correctness, and areas of growth" }
    ],
    techStack: ["LangChain", "LLaMA 3", "Whisper", "Streamlit", "Python", "ChromaDB", "Groq"],
    metrics: [
      { label: "Speech Accuracy", value: "95%+" },
      { label: "Feedback Time", value: "< 2.5s" },
      { label: "Evaluation Axes", value: "4 Criteria" },
      { label: "Input Modes", value: "Audio & Text" }
    ],
    keyFeatures: [
      "Job-description-grounded adaptive questioning",
      "Real-time speech-to-text powered by OpenAI Whisper",
      "Semantic similarity scoring against optimal benchmark answers",
      "Constructive feedback highlighting technical strengths and omissions",
      "Session history tracking performance across mock iterations"
    ],
    githubUrl: "https://github.com/Bithal98/ai-interview-prep",
    demoUrl: "https://github.com/Bithal98/ai-interview-prep",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Mic",
    color: "from-rose-500 to-pink-600"
  },
  {
    id: "anpr-yolov9",
    title: "Automatic Number Plate Recognition (ANPR) System",
    shortTitle: "ANPR YOLOv9",
    category: "Computer Vision",
    badge: "Edge Vision & YOLOv9",
    featured: true,
    rank: 6,
    tagline: "Real-time dual-stage vehicle and license plate localization using YOLOv9 with EasyOCR character recognition.",
    shortDescription: "A high-performance computer vision pipeline utilizing YOLOv9 for vehicle and plate localization coupled with adaptive filtering and EasyOCR for text extraction.",
    fullDescription: "Engineered for real-world automated toll, parking, and traffic surveillance applications. The system leverages state-of-the-art YOLOv9 for high-accuracy bounding box detection under adverse conditions (glare, rain, nighttime), crops and rectifies plate regions with OpenCV perspective transformation, and extracts alphanumerics via EasyOCR with temporal smoothing.",
    problem: "Standard OCR models fail on license plates in the wild due to rapid motion blur, varying perspective angles, dirt, and erratic ambient lighting.",
    solution: "A dual-stage deep learning pipeline: YOLOv9 localizes vehicle and license plate coordinates with high confidence, followed by OpenCV adaptive thresholding and bilateral filtering prior to OCR recognition.",
    architecture: [
      { step: "01", name: "Video Ingestion", desc: "RTSP stream and MP4 video feed frame processing" },
      { step: "02", name: "YOLOv9 Localization", desc: "Dual class detection: vehicle and license plate bounding boxes" },
      { step: "03", name: "Preprocessing", desc: "Perspective correction, bilateral filtering, and Otsu binarization" },
      { step: "04", name: "EasyOCR Engine", desc: "Character sequence recognition with regex syntax validation" },
      { step: "05", name: "Data Persistence", desc: "Timestamped logging to SQLite with plate crop snapshot" }
    ],
    techStack: ["YOLOv9", "OpenCV", "EasyOCR", "PyTorch", "Python", "SQLite", "Streamlit"],
    metrics: [
      { label: "Plate Accuracy", value: "94.8%" },
      { label: "Processing Speed", value: "32 FPS" },
      { label: "Inference Engine", value: "YOLOv9" },
      { label: "Edge Optimized", value: "CUDA / CPU" }
    ],
    keyFeatures: [
      "State-of-the-art YOLOv9 backbone fine-tuned for license plates",
      "Adaptive contrast enhancement robust to nighttime headlights and glare",
      "Perspective rectification correcting skewed angle captures",
      "Regular expression syntax validation ensuring standard plate formats",
      "Real-time video feed streaming dashboard built with Streamlit"
    ],
    githubUrl: "https://github.com/Bithal98/automatic-number-plate-recognition",
    demoUrl: "https://github.com/Bithal98/automatic-number-plate-recognition",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Scan",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "salescom-agentic",
    title: "SalesCom — Autonomous B2B Lead Intelligence Engine",
    shortTitle: "SalesCom Lead Engine",
    category: "Agentic AI",
    badge: "Enterprise Multi-Agent",
    featured: false,
    rank: 7,
    tagline: "Enterprise agentic lead generation system orchestrating multi-agent LLM workflows built at StratLytics.",
    shortDescription: "An autonomous multi-agent platform designed to automate B2B prospect discovery, company tech-stack analysis, decision-maker discovery, and personalized outreach.",
    fullDescription: "Developed during engineering work at StratLytics Consulting, SalesCom automates the top-of-funnel sales pipeline. It coordinates autonomous agents that scrape target company footprints, evaluate alignment with specific Ideal Customer Profiles (ICPs), extract decision-maker email addresses, and draft personalized multi-touch outreach emails grounded in recent company news.",
    problem: "Sales representatives spend upwards of 15 hours every week manually researching target accounts, verifying executive contacts, and writing cold emails that suffer from low conversion.",
    solution: "A multi-agent LangGraph architecture that autonomous research agents run concurrently, scoring leads by buying intent and crafting personalized email sequences.",
    architecture: [
      { step: "01", name: "Account Discovery", desc: "Automated search queries discovering domain companies" },
      { step: "02", name: "Enrichment Agent", desc: "Scrapes company websites, tech stacks, and press announcements" },
      { step: "03", name: "ICP Scoring Node", desc: "Calculates fit percentage against configured buyer criteria" },
      { step: "04", name: "Contact Discovery", desc: "Identifies VPs and Directors with email pattern validation" },
      { step: "05", name: "Outreach Copywriter", desc: "Drafts hyper-relevant value propositions based on recent triggers" }
    ],
    techStack: ["LangGraph", "Python", "FastAPI", "SQLite", "LLaMA 3", "BeautifulSoup", "Docker"],
    metrics: [
      { label: "Token Savings", value: "45%" },
      { label: "Qualification Speed", value: "3.2x Faster" },
      { label: "System Uptime", value: "99.2%" },
      { label: "Orchestrator", value: "LangGraph" }
    ],
    keyFeatures: [
      "Multi-agent coordination using LangGraph state graphs",
      "Dynamic Ideal Customer Profile (ICP) weighted scoring engine",
      "Intelligent Redis/SQLite caching reducing redundant LLM calls by 45%",
      "Contextual trigger-based email drafting (funding, new hires, tech migration)",
      "Strict data sanitization and rate-limiting compliant with web scrapers"
    ],
    githubUrl: "https://github.com/Bithal98",
    demoUrl: "https://github.com/Bithal98",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Briefcase",
    color: "from-sky-500 to-blue-700"
  },
  {
    id: "digital-pandit",
    title: "Digital Pandit — Cultural Knowledge & Rituals RAG",
    shortTitle: "Digital Pandit",
    category: "Generative AI & LLMs",
    badge: "Domain-Specific RAG",
    featured: false,
    rank: 8,
    tagline: "Context-aware conversational RAG system navigating Vedic scriptures, rituals, and cultural questions.",
    shortDescription: "An authoritative spiritual and cultural question-answering assistant indexing verified translations of classical texts with exact scripture citations.",
    fullDescription: "Digital Pandit bridges ancient wisdom and modern AI. It uses dense vector retrieval and LangChain to index canonical texts (Vedas, Upanishads, Puranas), allowing users to ask questions regarding rituals, philosophy, and auspicious timings while eliminating synthetic hallucinations.",
    problem: "Spiritual literature is vast, intricate, and often distorted on open internet forums, leading to confusion regarding authentic ceremonial practices.",
    solution: "A grounded Retrieval-Augmented Generation (RAG) assistant combining semantic vector search with strict citation guardrails.",
    architecture: [
      { step: "01", name: "Corpus Ingestion", desc: "Digitized sacred texts split into thematic context chunks" },
      { step: "02", name: "Vector Index", desc: "Embeddings stored in ChromaDB for high-dimensional similarity" },
      { step: "03", name: "Query Processing", desc: "Intent classification and theological entity recognition" },
      { step: "04", name: "Strict RAG Prompting", desc: "LLM synthesis restricted exclusively to verified context" },
      { step: "05", name: "Citation Rendering", desc: "Provides book, chapter, and verse references alongside answers" }
    ],
    techStack: ["LangChain", "ChromaDB", "Python", "Streamlit", "HuggingFace Embeddings", "Groq LLaMA 3"],
    metrics: [
      { label: "Hallucination Rate", value: "~0%" },
      { label: "Citation Match", value: "Exact Verses" },
      { label: "Languages", value: "English & Hindi" },
      { label: "Latency", value: "< 1.8s" }
    ],
    keyFeatures: [
      "Rigorous context-grounding preventing theological hallucinations",
      "Direct chapter and verse citations for every claim made",
      "Bilingual query understanding supporting Indic spiritual terms",
      "Interactive Streamlit interface with suggested spiritual inquiry prompts"
    ],
    githubUrl: "https://github.com/Bithal98/digital-pandit",
    demoUrl: "https://github.com/Bithal98/digital-pandit",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "BookOpen",
    color: "from-amber-500 to-yellow-600"
  },
  {
    id: "multi-disease-prediction",
    title: "Multi-Disease Predictive Healthcare Diagnostic",
    shortTitle: "Multi-Disease Predictor",
    category: "Machine Learning",
    badge: "Healthcare & Ensemble ML",
    featured: false,
    rank: 9,
    tagline: "Clinical diagnostic ensemble predicting diabetes, heart disease, and Parkinson's conditions.",
    shortDescription: "A clinical diagnostic application leveraging calibrated Support Vector Machines, Random Forests, and XGBoost to predict multiple chronic health conditions.",
    fullDescription: "A consolidated machine learning diagnostic tool designed for early disease screening. It features specialized predictive models for Diabetes (Pima dataset), Heart Disease (Cleveland dataset), and Parkinson's Disease (biomedical voice measurements), offering probability scores and risk factors.",
    problem: "Clinics in rural or semi-urban regions often lack specialized equipment and specialists for immediate preliminary screening of multiple chronic conditions.",
    solution: "A unified, accessible machine learning portal that evaluates standard patient lab values and outputs immediate diagnostic risk probabilities.",
    architecture: [
      { step: "01", name: "Patient Vitals Input", desc: "Biomarker data entry through clinical form inputs" },
      { step: "02", name: "Feature Scaling", desc: "StandardScaler normalization calibrated to training data" },
      { step: "03", name: "Model Dispatcher", desc: "Routes data to condition-specific trained classifiers" },
      { step: "04", name: "Probability Calibration", desc: "Platt scaling ensuring calibrated percentage risks" },
      { step: "05", name: "Risk Assessment Report", desc: "Visual probability gauges and lifestyle recommendation flags" }
    ],
    techStack: ["Scikit-Learn", "Python", "XGBoost", "Streamlit", "Pandas", "NumPy"],
    metrics: [
      { label: "Accuracy", value: "92.4%" },
      { label: "Conditions", value: "3 Diseases" },
      { label: "Inference Time", value: "< 100ms" },
      { label: "Algorithms", value: "SVM & XGBoost" }
    ],
    keyFeatures: [
      "Trained on benchmark clinical datasets with high sensitivity to minimize false negatives",
      "Interactive sliders and numeric inputs designed for clinical usability",
      "Immediate visual probability breakdowns indicating risk thresholds",
      "Completely offline-capable for resource-constrained rural clinics"
    ],
    githubUrl: "https://github.com/Bithal98/multi-disease-prediction",
    demoUrl: "https://github.com/Bithal98/multi-disease-prediction",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Activity",
    color: "from-emerald-500 to-teal-700"
  },
  {
    id: "ai-doctor",
    title: "AI-Doctor — Multimodal Clinical Assistant",
    shortTitle: "AI-Doctor Multimodal",
    category: "Generative AI & LLMs",
    badge: "Multimodal Vision AI",
    featured: false,
    rank: 10,
    tagline: "Multimodal medical assistant analyzing symptom descriptions alongside uploaded medical reports and diagnostic scans.",
    shortDescription: "A vision-language clinical assistant parsing patient lab reports, X-rays, and symptom logs to provide preliminary diagnostic explanations and questions to ask doctors.",
    fullDescription: "AI-Doctor utilizes multimodal vision-language models to demystify complex medical documents. Patients upload blood test PDFs or imaging scans, and the assistant extracts lab values, flags abnormal ranges, explains terminology in layman's terms, and provides structured guidance.",
    problem: "Patients frequently experience high anxiety when reading confusing medical lab reports before their appointment, often turning to unverified web searches.",
    solution: "A multimodal AI pipeline that accurately reads diagnostic text and visual scans, translating findings into calm, factual, and medically safeguarded explanations.",
    architecture: [
      { step: "01", name: "Multimodal Upload", desc: "Receives blood panels, prescription slips, or scan images" },
      { step: "02", name: "Vision Feature Extraction", desc: "Optical character and visual anomaly detection" },
      { step: "03", name: "Medical Knowledge Grounding", desc: "Verifies test parameters against normal reference ranges" },
      { step: "04", name: "Safety Guardrail Check", desc: "Applies clinical disclaimers and eliminates reckless advice" },
      { step: "05", name: "Patient Summary Output", desc: "Produces structured summary with suggested doctor questions" }
    ],
    techStack: ["Python", "Streamlit", "Gemini / LLaMA 3 Vision", "Pillow", "LangChain"],
    metrics: [
      { label: "Input Types", value: "Image & Text" },
      { label: "Guardrail Compliance", value: "100%" },
      { label: "Parsing Accuracy", value: "96%" },
      { label: "Response Time", value: "< 3.0s" }
    ],
    keyFeatures: [
      "Multimodal document reading for both scanned paperwork and digital PDFs",
      "Automatic reference range comparison highlighting out-of-spec vitals",
      "Empathetic tone with prominent disclaimers emphasizing professional consultation",
      "Preparation of targeted inquiry checklists for patients to discuss with doctors"
    ],
    githubUrl: "https://github.com/Bithal98/ai-doctor",
    demoUrl: "https://github.com/Bithal98/ai-doctor",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "ShieldAlert",
    color: "from-teal-500 to-cyan-600"
  },
  {
    id: "virtual-mouse",
    title: "VirtualMouse — AI Hand Gesture Computer Controller",
    shortTitle: "VirtualMouse Vision",
    category: "Computer Vision",
    badge: "Edge Vision & MediaPipe",
    featured: false,
    rank: 11,
    tagline: "Touchless human-computer interface tracking 21 3D hand landmarks in real-time to control cursor navigation and gestures.",
    shortDescription: "A real-time edge computer vision application utilizing MediaPipe and OpenCV to map hand gestures into mouse movements, clicks, and scroll events.",
    fullDescription: "VirtualMouse turns any basic webcam into a touchless controller. Using MediaPipe's 21 3D hand landmark model, it calculates fingertip distances, detects pinch gestures for left and right clicking, and implements exponential smoothing to eliminate micro-jitter during cursor navigation.",
    problem: "Physical mice and touchscreens carry high contamination risks in sterile surgical environments and present physical hurdles for people with specific motor limitations.",
    solution: "A lightweight, zero-latency touchless interface running smoothly on standard CPUs at 60 FPS without requiring specialized depth cameras.",
    architecture: [
      { step: "01", name: "Webcam Frame Read", desc: "Processes 640x480 video feed via OpenCV" },
      { step: "02", name: "Landmark Extraction", desc: "MediaPipe Hands detects 21 3D coordinates in real-time" },
      { step: "03", name: "Gesture Classifier", desc: "Measures Euclidean distance between thumb, index, and middle finger" },
      { step: "04", name: "Coordinate Interpolation", desc: "Applies exponential moving average to eliminate jitter" },
      { step: "05", name: "OS Event Dispatcher", desc: "PyAutoGUI triggers OS-level cursor movement and click events" }
    ],
    techStack: ["OpenCV", "MediaPipe", "PyAutoGUI", "Python", "NumPy"],
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Latency", value: "< 15ms" },
      { label: "Landmarks", value: "21 Points" },
      { label: "Hardware", value: "Standard Webcam" }
    ],
    keyFeatures: [
      "Operates entirely on CPU without requiring dedicated GPU hardware",
      "Exponential moving average damping creating butter-smooth cursor motion",
      "Pinch gesture detection for left click, right click, double click, and drag",
      "On-screen visual feedback rendering hand tracking skeleton"
    ],
    githubUrl: "https://github.com/Bithal98/virtual-mouse",
    demoUrl: "https://github.com/Bithal98/virtual-mouse",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Hand",
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "pdf-catalog-extractor",
    title: "AI-Based PDF Catalog Product Data Extractor",
    shortTitle: "Catalog Extractor",
    category: "Document AI",
    badge: "Document Intelligence",
    featured: false,
    rank: 12,
    tagline: "Layout-aware parsing system converting dense ceramic and tile PDF product catalogs into structured tabular datasets.",
    shortDescription: "A specialized document AI pipeline extracting complex product catalogs, technical specifications, and size matrices from ceramic catalogs into structured CSV/JSON.",
    fullDescription: "Built for industrial manufacturers and distributors, this application solves the challenge of extracting structured product catalogs from visually dense, multi-column PDFs. It combines layout analysis with LLM schema alignment to accurately extract product codes, dimensions, finishes, and carton packing details.",
    problem: "Industrial manufacturers publish product catalogs in non-standard PDF formats. Standard text extractors scramble table headers, causing hours of manual data entry.",
    solution: "A hybrid spatial bounding-box analyzer paired with LLaMA 3 schema validation that parses irregular multi-column product pages into neat, exportable spreadsheets.",
    architecture: [
      { step: "01", name: "Document Splitting", desc: "PyMuPDF extracts vector text and bounding box locations" },
      { step: "02", name: "Layout Reconstruction", desc: "Clusters text spans by horizontal and vertical alignment" },
      { step: "03", name: "Schema Normalization", desc: "LLaMA 3 maps varied column names to standard schema" },
      { step: "04", name: "Data Validation", desc: "Regex checks for product dimensions, codes, and carton counts" },
      { step: "05", name: "Export Engine", desc: "Instant download as structured Excel, CSV, or JSON" }
    ],
    techStack: ["Python", "Streamlit", "PyMuPDF", "LLaMA 3", "Pandas", "Groq"],
    metrics: [
      { label: "Extraction Rate", value: "98% Accuracy" },
      { label: "Page Speed", value: "< 0.9s / Page" },
      { label: "Catalog Size", value: "50+ Pages" },
      { label: "Output", value: "CSV, Excel, JSON" }
    ],
    keyFeatures: [
      "Spatial clustering handling multi-column irregular layouts",
      "Automated extraction of ceramic tile sizes (e.g. 600x600, 300x450)",
      "Interactive data preview table with in-place cell editing",
      "One-click export directly to Excel or PostgreSQL-ready CSV"
    ],
    githubUrl: "https://github.com/Bithal98/AI-based-Catalog-Data-Extractor",
    demoUrl: "https://github.com/Bithal98/AI-based-Catalog-Data-Extractor",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "FileSpreadsheet",
    color: "from-cyan-600 to-blue-700"
  },
  {
    id: "automated-book-publication",
    title: "Automated Book Publication Workflow Agent",
    shortTitle: "Book Publication Agent",
    category: "Agentic AI",
    badge: "Agentic Publishing",
    featured: false,
    rank: 13,
    tagline: "Autonomous multi-agent workflow converting raw draft manuscripts into formatted, proofread EPUB/PDF publications.",
    shortDescription: "A multi-agent editorial pipeline automating manuscript proofreading, chapterization, table of contents generation, and EPUB compilation.",
    fullDescription: "Publishing a complete book demands dozens of tedious formatting passes. This LangGraph system coordinates an Editorial Agent (grammar & tone consistency), an Indexing Agent (chapter hierarchies & TOC), a Typesetting Agent (Markdown to semantic HTML), and a Compilation Agent that builds ready-to-publish EPUB digital books.",
    problem: "Independent writers and small publishers spend substantial time and money re-formatting raw manuscripts to satisfy strict ebook validation standards.",
    solution: "An agentic pipeline executing automated multi-pass editorial reviews and formatting compliance checks.",
    architecture: [
      { step: "01", name: "Draft Ingestion", desc: "Parses raw Markdown, TXT, or DOCX manuscript chapters" },
      { step: "02", name: "Editorial Agent", desc: "Proofreads syntax and ensures consistent narrative tone" },
      { step: "03", name: "Structure Agent", desc: "Generates semantic headings and builds nested Table of Contents" },
      { step: "04", name: "CSS Typesetting", desc: "Applies clean typography rules for e-readers" },
      { step: "05", name: "EPUB Compiler", desc: "Packages assets, metadata, and chapters into valid EPUB files" }
    ],
    techStack: ["LangGraph", "Python", "Markdown-it", "EbookLib", "LLaMA 3"],
    metrics: [
      { label: "Workflow Speed", value: "10x Faster" },
      { label: "Standard", value: "EPUB3 Validated" },
      { label: "Orchestration", value: "LangGraph" },
      { label: "Formats", value: "EPUB & PDF" }
    ],
    keyFeatures: [
      "Full multi-agent editorial review ensuring narrative consistency",
      "Automated nested Table of Contents creation",
      "Standard EPUB3 compliance compatible with Kindle, Apple Books, and Kobo",
      "Interactive Streamlit control room with chapter-by-chapter approval"
    ],
    githubUrl: "https://github.com/Bithal98",
    demoUrl: "https://github.com/Bithal98",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "FileText",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "text-to-sql-app",
    title: "End-to-End Natural Language Text-to-SQL LLM App",
    shortTitle: "Text-to-SQL LLM",
    category: "Generative AI & LLMs",
    badge: "Database AI",
    featured: false,
    rank: 14,
    tagline: "Natural conversational SQL query synthesis and execution with security guardrails and automated chart rendering.",
    shortDescription: "A conversational database interface translating everyday English questions into validated SQL, executing read queries against SQLite/PostgreSQL, and visualizing answers.",
    fullDescription: "Designed to democratize database access. Users ask questions like 'Show top 5 customers by revenue this quarter', and the engine introspects the schema, writes optimized SQL queries using Groq LLaMA 3, validates safety (blocks DROP/DELETE/ALTER), executes the query, and visualizes the results as interactive charts.",
    problem: "Business stakeholders constantly rely on busy data engineering teams to write routine SQL queries, creating analytical bottlenecks.",
    solution: "An intelligent text-to-SQL layer equipped with schema introspection, few-shot prompt tuning, syntax validation, and immediate visualization.",
    architecture: [
      { step: "01", name: "Schema Extraction", desc: "Reads table names, primary keys, and column datatypes" },
      { step: "02", name: "Prompt Construction", desc: "Injects database schema and schema constraints into LLaMA 3" },
      { step: "03", name: "SQL Generation", desc: "Synthesizes optimized ANSI SQL queries via Groq LLaMA 3" },
      { step: "04", name: "Security Guardrails", desc: "Validates read-only execution, preventing data modification" },
      { step: "05", name: "Chart Rendering", desc: "Executes query and renders dynamic Plotly visualizations" }
    ],
    techStack: ["LangChain", "Groq LLaMA 3", "SQLite", "Streamlit", "Python", "Plotly"],
    metrics: [
      { label: "First-Pass SQL", value: "91% Valid" },
      { label: "Query Speed", value: "< 950ms" },
      { label: "Security", value: "Read-Only Enforced" },
      { label: "Visualization", value: "Auto Plotly Charts" }
    ],
    keyFeatures: [
      "Instant schema introspection across multi-table relational databases",
      "Strict query sanitization blocking destructive DDL/DML operations",
      "Dynamic chart recommendations based on returned dataset shapes",
      "Natural language explanatory summaries accompanying raw table output"
    ],
    githubUrl: "https://github.com/Bithal98/Natural-Language-to-SQL-Tool",
    demoUrl: "https://github.com/Bithal98/Natural-Language-to-SQL-Tool",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "Database",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "multi-pdf-qa",
    title: "Multi-PDF Document Question Answering (RAG)",
    shortTitle: "Multi-PDF RAG",
    category: "Generative AI & LLMs",
    badge: "Document RAG",
    featured: false,
    rank: 15,
    tagline: "High-capacity RAG engine supporting cross-document semantic search and synthesis across thousands of PDF pages.",
    shortDescription: "A scalable document Q&A platform utilizing FAISS vector indexing, HuggingFace embeddings, and conversational memory to answer questions across multi-volume PDF files.",
    fullDescription: "Built for researchers and analysts dealing with large PDF volumes. The system chunks multi-page dossiers with recursive token splitting, generates dense vector representations, stores them in FAISS, and uses Maximal Marginal Relevance (MMR) retrieval to synthesize cited answers.",
    problem: "Finding interrelated answers buried across hundreds of pages of research papers, legal contracts, or technical manuals is inefficient with basic keyword search.",
    solution: "A high-performance RAG pipeline supporting concurrent multi-file uploads, semantic vector search, conversational context history, and page citations.",
    architecture: [
      { step: "01", name: "Multi-PDF Upload", desc: "Concurrent PDF text extraction using PyPDF" },
      { step: "02", name: "Recursive Chunking", desc: "500-token chunks with 50-token overlap preserving context" },
      { step: "03", name: "Vector Indexing", desc: "FAISS vector database storing dense embeddings" },
      { step: "04", name: "MMR Retrieval", desc: "Maximal Marginal Relevance balances relevance and diversity" },
      { step: "05", name: "Conversational QA", desc: "Synthesizes answers with conversational chat history memory" }
    ],
    techStack: ["LangChain", "FAISS", "HuggingFace Embeddings", "PyPDF", "Streamlit", "Python"],
    metrics: [
      { label: "Search Latency", value: "< 1.5s" },
      { label: "Vector Search", value: "FAISS Indexed" },
      { label: "Memory", value: "Multi-Turn Chat" },
      { label: "Citations", value: "Exact Page References" }
    ],
    keyFeatures: [
      "Concurrent multi-PDF upload and indexing capability",
      "Maximal Marginal Relevance (MMR) retrieval preventing redundant context",
      "Persistent conversational memory tracking follow-up clarifications",
      "Transparent source citations linking answers back to original page numbers"
    ],
    githubUrl: "https://github.com/Bithal98/Multi-PDF-Question-Answering",
    demoUrl: "https://github.com/Bithal98/Multi-PDF-Question-Answering",
    videoUrl: "https://www.linkedin.com/in/bithal-kumar-sahoo",
    icon: "FileCheck",
    color: "from-cyan-500 to-indigo-600"
  }
];

export const projectCategories = [
  "All Projects",
  "Agentic AI",
  "Generative AI & LLMs",
  "Machine Learning",
  "Computer Vision",
  "Document AI"
];
