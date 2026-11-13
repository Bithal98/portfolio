export const profileData = {
  name: "Bithal Kumar Sahoo",
  shortName: "Bithal Sahoo",
  title: "AI/ML Engineer & Systems Builder",
  headline: "Building Intelligent AI Systems That Solve Real-World Problems.",
  tagline: "AI/ML Engineer specializing in Machine Learning, Generative AI, LLMs, Agentic AI, and Data Science. I bridge the gap between theoretical research and production-grade intelligent systems.",
  status: "Available for AI/ML Opportunities",
  location: "Bhubaneswar / Remote / Bangalore, India",
  email: "bithalkumar98@gmail.com",
  github: "https://github.com/Bithal98",
  linkedin: "https://www.linkedin.com/in/bithal-kumar-sahoo", // customizable
  resumeUrl: "#resume", // downloads or opens PDF preview

  stats: [
    { label: "Core Projects Built", value: "15+" },
    { label: "Transformer Trained", value: "90M Params" },
    { label: "Agentic Workflows", value: "Multi-Agent" },
    { label: "B.Tech CGPA (OUTR)", value: "8.5 / 10" },
  ],

  pillars: [
    {
      id: "agentic",
      title: "Agentic AI & Multi-Agent Systems",
      icon: "Bot",
      description: "Designing autonomous multi-agent graphs with LangGraph, state-machine transitions, tool binding, reflection loops, and verifiable deterministic execution.",
      skills: ["LangGraph", "Multi-Agent Workflows", "StateGraph", "Autonomous Agents", "Tool Calling", "ReAct"]
    },
    {
      id: "genai",
      title: "Generative AI & LLM Systems",
      icon: "Sparkles",
      description: "Developing production RAG architectures, custom Transformer models from scratch, vector database retrievers, prompt evaluation, and local LLM fine-tuning.",
      skills: ["Transformers from Scratch", "LangChain", "RAG Pipelines", "ChromaDB", "LLaMA 3", "Whisper"]
    },
    {
      id: "ml-risk",
      title: "Machine Learning & Credit Risk",
      icon: "TrendingUp",
      description: "Building production predictive models, regulatory credit risk scorecards, Weight of Evidence (WoE), Information Value (IV), and Reject Inference modeling.",
      skills: ["Credit Risk Scorecards", "Reject Inference", "Scikit-Learn", "LightGBM", "XGBoost", "WoE / IV"]
    },
    {
      id: "cv",
      title: "Computer Vision & Deep Learning",
      icon: "Scan",
      description: "Real-time object detection and visual inference systems using YOLOv9, OpenCV, custom PyTorch CNN architectures, and OCR text extraction pipelines.",
      skills: ["YOLOv9", "OpenCV", "EasyOCR", "PyTorch", "CNNs", "Gesture Tracking"]
    },
    {
      id: "engineering",
      title: "Data Engineering & Applied MLOps",
      icon: "Database",
      description: "Constructing robust end-to-end data pipelines, ETL workflows, API services with FastAPI, vector search indexing, Docker containerization, and Streamlit UIs.",
      skills: ["FastAPI", "PostgreSQL", "Docker", "Streamlit", "Vector Stores", "ETL Pipelines"]
    }
  ],

  experience: [
    {
      company: "StratLytics Consulting",
      role: "Analyst — Credit Risk Modeling",
      period: "May 2026 – Present",
      type: "Full-Time",
      location: "Bhubaneswar / Hybrid",
      summary: "Leading credit risk scorecard engineering, predictive default modeling, and data science workflows on financial credit portfolios.",
      responsibilities: [
        "Architecting regulatory-grade Credit Risk Scorecards (Probability of Default - PD) utilizing Weight of Evidence (WoE) transformation and Information Value (IV) variable filtering.",
        "Formulating Reject Inference modeling pipelines applying Parceling and Bivariate Logistic Augmentation to overcome sample selection bias on rejected loan applicants.",
        "Engineered automated feature selection protocols and multicollinearity diagnostics (Variance Inflation Factor VIF < 3.0).",
        "Conducted rigorous model validation, ROC-AUC calibration (achieving > 0.78 KS / Gini standards), and population stability index (PSI < 0.1) drift tracking.",
        "Maintaining strict institutional data governance, anonymization, and compliant documentation."
      ],
      technologies: ["Python", "Credit Risk Modeling", "Reject Inference", "WoE / IV", "Logistic Regression", "XGBoost", "Scikit-Learn", "SQL"]
    },
    {
      company: "StratLytics Consulting",
      role: "AI & Data Engineer Intern",
      period: "January 2026 – April 2026",
      type: "Internship",
      location: "Bhubaneswar / Remote",
      summary: "Pioneered SalesCom: an autonomous agentic B2B lead generation system orchestrating multi-agent LLM workflows.",
      responsibilities: [
        "Architected SalesCom utilizing LangGraph: choreographed autonomous company research agents, decision-maker discovery agents, and email verification nodes.",
        "Engineered intelligent Ideal Customer Profile (ICP) scoring mechanisms that dynamically prioritized high-intent inbound and outbound prospects.",
        "Synthesized LLM-driven hyper-personalized outreach draft generators conditioned on target company recent SEC filings, press releases, and tech stacks.",
        "Integrated multi-stage caching and rate-limiting middleware, curtailing recurring API token expenditures by 45%."
      ],
      technologies: ["LangGraph", "Multi-Agent AI", "LangChain", "FastAPI", "Python", "SQLite", "LLaMA 3", "Web Scraping"]
    }
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "Odisha University of Technology and Research (OUTR)",
    location: "Bhubaneswar, Odisha, India",
    duration: "2022 – 2026",
    cgpa: "8.5 / 10",
    highlights: [
      "Specialized in Artificial Intelligence, Deep Learning, and Distributed Data Systems.",
      "Active researcher in regional language NLP and Transformer architectures.",
      "Conducted foundational engineering experiments on low-resource Indic language models (OdiaLLM)."
    ]
  },

  skillsCategories: [
    {
      category: "Programming & Core",
      skills: [
        { name: "Python (Advanced)", level: 95 },
        { name: "SQL (PostgreSQL/SQLite)", level: 90 },
        { name: "Java", level: 75 },
        { name: "Bash / Linux", level: 80 }
      ]
    },
    {
      category: "Agentic AI & Orchestration",
      skills: [
        { name: "LangGraph (StateGraph / Multi-Agent)", level: 92 },
        { name: "Tool Calling & Function Binding", level: 90 },
        { name: "Autonomous Agent Architectures", level: 88 },
        { name: "Human-in-the-Loop Loops", level: 85 }
      ]
    },
    {
      category: "Generative AI & LLMs",
      skills: [
        { name: "Transformer Architectures from Scratch", level: 90 },
        { name: "RAG Systems (Retrieval-Augmented)", level: 94 },
        { name: "LangChain / LlamaIndex", level: 88 },
        { name: "ChromaDB / Vector Search", level: 88 },
        { name: "Whisper Speech-to-Text", level: 82 }
      ]
    },
    {
      category: "Machine Learning & Credit Risk",
      skills: [
        { name: "Credit Risk Scorecards & PD Modeling", level: 92 },
        { name: "Reject Inference (Parceling & Augmentation)", level: 90 },
        { name: "Scikit-Learn, LightGBM, XGBoost", level: 92 },
        { name: "WoE / IV Feature Engineering", level: 94 },
        { name: "Model Validation (AUC-ROC, KS, PSI)", level: 90 }
      ]
    },
    {
      category: "Computer Vision & Deep Learning",
      skills: [
        { name: "PyTorch & Tensor Operations", level: 88 },
        { name: "YOLOv9 & Object Detection", level: 86 },
        { name: "OpenCV & Image Processing", level: 85 },
        { name: "OCR & Document AI (EasyOCR)", level: 84 }
      ]
    },
    {
      category: "Data Engineering & Deployment",
      skills: [
        { name: "FastAPI & RESTful AI Microservices", level: 88 },
        { name: "Streamlit & Gradio Dashboards", level: 92 },
        { name: "Docker Containerization", level: 80 },
        { name: "ETL Pipelines & Automated Scraping", level: 86 }
      ]
    }
  ]
};
