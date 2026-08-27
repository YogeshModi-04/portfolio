export const profile = {
  name: "Yogesh Modi",
  fullName: "Yogesh Shivkumar Modi",
  role: "Agentic Systems Architect & Engineer",
  tagline: "Turning ambiguous problems into systems that ship.",
  subRole: "Senior Software Engineer, AI/ML — Mindfire Solutions",
  location: "Ahmedabad, Gujarat, India",
  experience: "3+ yrs",
  email: "skmodiyogesh@gmail.com",
  github: "https://github.com/YogeshModi-04",
  githubHandle: "YogeshModi-04",
  status: "Open to Agentic Systems / FDE roles",
  initials: "YM",
  // Drop a photo file in /public (e.g. public/headshot.jpg) and set the path
  // here (e.g. "/headshot.jpg") to replace the initials placeholder in the hero.
  photoUrl: "",
};

export const heroMeta = [
  { label: "Based in", value: "Ahmedabad, IN" },
  { label: "Experience", value: "3+ years, production" },
  { label: "Focus", value: "Multi-agent systems · RAG · LLM infra" },
  { label: "Status", value: "Open to roles & client work" },
];

export const about = {
  statement:
    "I build agentic systems that ship — not demos. Three years of production experience taking multi-agent platforms from architecture through QA to enterprise deployment.",
  bio:
    "I'm a Senior Software Engineer at Mindfire Solutions, working at the intersection of multi-agent orchestration, retrieval-augmented generation, and applied NLP/CV. My day-to-day spans LangGraph and the A2A protocol for agent coordination, RAG pipelines across Qdrant, FAISS, Pinecone and Weaviate, and fine-tuning work on BERT, LLaMA and GPT-2 with LoRA/PEFT — usually against real infrastructure constraints like GPU memory limits and CPU-only OCR requirements, not clean notebooks. I've deployed and run this kind of work on both GCP and AWS, so cloud choice is a project decision, not a dependency.",
  facts: [
    { label: "Role", value: "Senior SWE, AI/ML" },
    { label: "Company", value: "Mindfire Solutions" },
    { label: "Location", value: "Ahmedabad, Gujarat, India" },
    { label: "Experience", value: "3+ years production" },
  ],
};

export const practices = {
  engineering: {
    title: "How I Engineer",
    items: [
      {
        heading: "Own it end-to-end",
        detail:
          "Design, build, QA and deploy — I don't hand off after the prototype. Production-grade agentic platforms shipped for enterprise clients, not proofs of concept.",
      },
      {
        heading: "Iterate on architecture, not just code",
        detail:
          "The civil-engineering PDF pipeline went through multiple architecture passes (PyMuPDF + Gemini Vision, page-classification heuristics via OpenCV edge density) before settling — I treat the pipeline shape itself as a variable to test.",
      },
      {
        heading: "Benchmark before committing",
        detail:
          "Ran a structured PaddleOCR vs. Docling vs. Unstructured.io comparison for CPU-only OCR before recommending PaddleOCR for production and Docling for RAG ingestion — decisions backed by evaluation, not preference.",
      },
      {
        heading: "Debug at the infrastructure layer",
        detail:
          "Comfortable below the framework line — resolved CUDA token-ID overflow and position-embedding errors during GPT-2 LoRA fine-tuning, and tuned training runs across L4 and P100 GPUs.",
      },
      {
        heading: "Instrument what I ship",
        detail:
          "Working toward RAGAS/DeepEval evaluation coverage and LangSmith observability with admin-controlled tracing, so agent behavior is measurable, not anecdotal.",
      },
    ],
  },
  client: {
    title: "How I Work With Clients",
    items: [
      {
        heading: "Translate ambiguous domain specs into systems",
        detail:
          "Built a two-pass Gemini summarization architecture for civil-engineering specification documents — turning dense, non-technical client material into a usable knowledge pipeline.",
      },
      {
        heading: "Scope for the constraint that matters",
        detail:
          "Picked CPU-only OCR backends and admin-gated observability specifically because that's what the client's infrastructure and governance actually required — not the highest-spec option on paper.",
      },
      {
        heading: "Communicate in the client's terms",
        detail:
          "Actively closing the customer-facing communication gap for Forward Deployment Engineer–style work: framing technical trade-offs in terms of business outcomes, not just model metrics.",
      },
      {
        heading: "Propose, don't just execute",
        detail:
          "Built a freelance proposal strategy positioning multi-agent platform experience directly against client problems — comfortable owning the pitch, not only the delivery.",
      },
      {
        heading: "Stay reachable through delivery",
        detail:
          "End-to-end ownership means being the same point of contact from architecture review to post-deployment QA — no handoff gaps for the client to manage.",
      },
    ],
  },
};

export const experience = [
  {
    period: "May 2025 – Present",
    role: "Senior Software Engineer, AI/ML",
    org: "Mindfire Solutions",
    summary:
      "Technical lead on a production multi-agent platform for an enterprise client — owning system design, QA and rollout, plus timelines and stakeholder communication end-to-end. Architected multi-agent orchestration on the A2A protocol, engineered an async distributed backend (modular monolith + microservices) for concurrent agent execution, and instrumented the full agent graph with LangSmith tracing. Cut deployment time 80% with Docker/supervisord.",
    tags: ["A2A Protocol", "LangGraph", "LangSmith", "FastAPI", "Docker"],
  },
  {
    period: "Jan 2025 – Mar 2025",
    role: "Machine Learning Engineer",
    org: "Cimcon Infotech Pvt Ltd",
    summary:
      "Trained and optimized ML models on financial data, improving an internal Python package for sequential data processing. Built automated preprocessing pipelines and FastAPI model-serving applications, deployed via Docker and validated with Streamlit.",
    tags: ["Python", "FastAPI", "Docker", "Streamlit"],
  },
  {
    period: "Feb 2023 – Dec 2024",
    role: "AI Engineer",
    org: "Sunbots Innovations LLP",
    summary:
      "Took computer-vision products from prototype to production. On SMARTON, lifted currency-detection accuracy 55%→79% and document detection 80%→94%, plus shipped a LangChain/RAG document-QA app. On a theft-detection system, moved LSTM to pretrained MMAction2 models to raise activity-detection accuracy 30%→65%, deploying alerts via FastAPI on Jetson Nano.",
    tags: ["Computer Vision", "Ultralytics", "MMAction2", "TFLite", "Docker"],
  },
  {
    period: "Oct 2022 – Feb 2023",
    role: "Data Science Intern",
    org: "Zummit Infolabs",
    summary:
      "Completed intensive training in supervised/unsupervised ML, preprocessing and feature engineering, then applied Python, NumPy, Pandas and Scikit-learn to real-world datasets using reproducible, Git-based workflows.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Silver Oak University (GTU)",
  period: "2019 – 2023",
  detail: "CGPA 7.95 / 10",
};

export const certifications = [
  {
    name: "Machine Learning Specialization",
    org: "DeepLearning.AI / Coursera",
    detail:
      "Supervised ML, Advanced Learning Algorithms, Unsupervised Learning, Recommenders & Reinforcement Learning",
  },
];

export const projects = [
  {
    id: "01",
    title: "SMARTON — AI Smart Glasses",
    tagline: "Accessibility platform for the visually impaired",
    description:
      "Contributed AI/ML engineering to SMARTON, an AI-powered smart-glasses platform that gives blind and visually impaired users an audio-first, hands-free way to understand their surroundings — camera-driven scene understanding delivered through a lightweight wearable rather than a phone.",
    stack: ["Computer Vision", "Embedded AI", "Audio Interfaces", "Accessibility"],
    link: "https://www.getsmartonai.com/glasses",
    linkLabel: "View product",
  },
  {
    id: "02",
    title: "Agentic Shopping Assistant",
    tagline: "LangGraph + XGBoost recommendations",
    description:
      "A shopping chatbot system built on LangGraph with XGBoost-based product recommendations, SQLite persistence, streaming responses and modular Python packaging — architected as a real service, not a script.",
    stack: ["LangGraph", "XGBoost", "SQLite", "Python"],
  },
  {
    id: "03",
    title: "Engineering-Spec Extraction Pipeline",
    tagline: "PyMuPDF + Gemini Vision, CPU-first OCR",
    description:
      "A PDF extraction pipeline for civil-engineering specification documents. Classifies text vs. diagram pages via OpenCV edge-density and connected-component analysis, routes diagrams to RapidOCR, and uses LangExtract for structured material-data extraction.",
    stack: ["PyMuPDF", "Gemini Vision", "OpenCV", "RapidOCR", "LangExtract"],
  },
  {
    id: "04",
    title: "Two-Pass Spec Summarizer",
    tagline: "Gemini-based document intelligence",
    description:
      "A Gemini-powered summarizer for civil-engineering specs using a two-pass architecture — per-document intermediate summaries rolled up into a single unified output for fast client review.",
    stack: ["Gemini", "Python", "Document AI"],
  },
  {
    id: "05",
    title: "GPT-2 LoRA Fine-Tune for Summarization",
    tagline: "CNN/DailyMail, LoRA/PEFT",
    description:
      "Fine-tuned GPT-2 with LoRA on CNN/DailyMail summarization, debugging CUDA token-ID overflow and position-embedding limits along the way. Training optimized across L4 and P100 GPUs, with WandB logging for ROUGE, BLEU and BERTScore.",
    stack: ["GPT-2", "LoRA/PEFT", "CUDA", "WandB"],
  },
  {
    id: "06",
    title: "Implicit-Feedback Recommender",
    tagline: "RecBole + DeepFM",
    description:
      "A recommendation system built on RecBole using implicit feedback signals and a DeepFM model — evaluated for ranking quality against real interaction data rather than synthetic benchmarks.",
    stack: ["RecBole", "DeepFM", "Python"],
  },
  {
    id: "07",
    title: "Natural-Language SQL Agent",
    tagline: "LangChain over PostgreSQL",
    description:
      "A LangChain SQL agent over a PostgreSQL student database, using JsonOutputParser for reliable structured output — translating plain-language questions into safe, correct queries.",
    stack: ["LangChain", "PostgreSQL", "JsonOutputParser"],
  },
];

export const skills = [
  {
    category: "Agent Orchestration",
    items: ["LangGraph", "A2A Protocol", "Multi-Agent Systems"],
  },
  {
    category: "Retrieval & RAG",
    items: ["Qdrant", "FAISS", "Pinecone", "Weaviate", "LangExtract"],
  },
  {
    category: "LLM Platforms",
    items: ["Gemini", "OpenAI", "LangChain", "LangSmith"],
  },
  {
    category: "ML / Fine-Tuning",
    items: ["BERT", "LLaMA", "GPT-2", "LoRA / PEFT", "MMAction2 / MViT"],
  },
  {
    category: "Object Detection",
    items: ["YOLO Series", "EfficientDet"],
  },
  {
    category: "Vision & OCR",
    items: ["OpenCV", "RapidOCR", "PaddleOCR", "Docling"],
  },
  {
    category: "Cloud Platforms",
    items: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)"],
  },
  {
    category: "Infra & Delivery",
    items: ["FastAPI", "Docker", "PostgreSQL", "MongoDB Atlas", "SQLite"],
  },
];

export const affiliates = [
  {
    name: "XWCare",
    by: "Xwits Developers Pvt. Ltd.",
    tagline: "Clinic operating system for Indian healthcare providers",
    description:
      "An integrated practice-management platform — scheduling, EMR, e-prescriptions, GST-compliant billing and telemedicine — with an AI layer that drafts and proposes but never acts without human approval. Built to ABDM and DPDPA compliance by default.",
    link: "https://www.xwits.dev/products/xwcare",
    linkLabel: "Visit XWCare",
  },
];

export const faqs = [
  {
    q: "Who is Yogesh Modi?",
    a: "A Senior Software Engineer (AI/ML) at Mindfire Solutions, based in Ahmedabad, India, with 3+ years of production experience building multi-agent systems, RAG pipelines and LLM infrastructure for enterprise clients.",
  },
  {
    q: "What does Yogesh build?",
    a: "Production-grade agentic platforms end-to-end — multi-agent orchestration with LangGraph and the A2A protocol, retrieval-augmented generation systems, and applied computer-vision/NLP models — from architecture through QA to deployment.",
  },
  {
    q: "What is SMARTON?",
    a: "An AI-powered smart-glasses platform that gives blind and visually impaired users an audio-first, hands-free way to understand their surroundings. Yogesh contributed AI/ML engineering to it. See the Case Studies section above.",
  },
  {
    q: "What is XWCare?",
    a: "A clinic operating system for Indian healthcare providers, built by Xwits Developers. Yogesh is affiliated with XWCare — see the Affiliated Products section for details.",
  },
  {
    q: "Where is Yogesh based?",
    a: "Ahmedabad, Gujarat, India — open to remote and relocation-friendly roles.",
  },
  {
    q: "Is Yogesh open to new opportunities?",
    a: "Yes — actively open to Agentic Systems Engineer and Forward Deployment Engineer roles, plus select contracting work on multi-agent platforms.",
  },
  {
    q: "How can I contact Yogesh?",
    a: "Email skmodiyogesh@gmail.com, use the contact form below, or check out his work on GitHub (YogeshModi-04).",
  },
];

export const contact = {
  headline: "Let's build something that ships.",
  sub:
    "Open to Agentic Systems Engineer and Forward Deployment Engineer roles, and select contracting work on multi-agent platforms.",
};
