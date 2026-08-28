import headshot from "../assets/headshot.jpg";

export const profile = {
  name: "Yogesh Modi",
  fullName: "Yogesh Shivkumar Modi",
  role: "AI/ML Systems Architect & Engineer",
  tagline: "Turning ambiguous problems into systems that ship.",
  subRole: "Senior Software Engineer, AI/ML — Mindfire Solutions",
  location: "Ahmedabad, Gujarat, India",
  experience: "3+ yrs",
  email: "skmodiyogesh@gmail.com",
  github: "https://github.com/YogeshModi-04",
  githubHandle: "YogeshModi-04",
  linkedin: "https://www.linkedin.com/in/yogesh-shivkumar-modi/",
  initials: "YM",
  photoUrl: headshot,
};

export const heroMeta = [
  { label: "Based in", value: "Ahmedabad, IN" },
  { label: "Experience", value: "3+ years, production" },
  { label: "Focus", value: "Architect · Build · Scale · Deliver" },
];

export const about = {
  statement:
    "I architect, build, scale and deliver AI/ML systems that ship — not demos. Three years of production experience spanning agentic and generative AI, computer vision and applied ML, taken from architecture through QA to enterprise deployment.",
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
    bullets: [
      {
        lead: "Technical Leadership",
        detail:
          "Led the full project lifecycle as technical lead — problem discovery, system design, QA, production rollout and client-facing demos — owning timelines, stakeholder communication and cross-functional delivery.",
      },
      {
        lead: "Agentic Architecture",
        detail:
          "Architected a production multi-agent, generative-AI platform spanning autonomous workflows, task planning, tool integration and LLM-driven decision systems, on a distributed async backend (modular monolith + microservices, asyncio) built for concurrent, non-blocking, high-throughput agent execution.",
      },
      {
        lead: "Scale",
        detail:
          "Orchestrated 5+ specialized agents — sales analytics, documentation Q&A, product catalog search, vendor performance — with RAG pipelines on Qdrant covering 46+ business APIs and 10,000+ product specifications.",
      },
      {
        lead: "Observability & Prompting",
        detail:
          "Instrumented the agent graph with admin-gated LangSmith tracing to monitor execution flow, debug routing decisions and evaluate output quality, and optimized prompt strategies to raise LLM query-routing accuracy and response quality.",
      },
      {
        lead: "Security & Auditability",
        detail:
          "Implemented role-based authentication and permission management across the multi-agent backend, enforcing access restrictions and auditability of agent actions and data flows.",
      },
      {
        lead: "Delivery Infrastructure",
        detail:
          "Built FastAPI/REST agent services and automation workflows, ran CI/CD with Dockerized deployments across AWS and GCP integrating Qdrant, FAISS, Pinecone and Weaviate, and shipped an Angular front-end — cutting deployment time 80% via supervisord orchestration.",
      },
    ],
    tags: ["A2A Protocol", "LangGraph", "LangSmith", "FastAPI", "Docker"],
  },
  {
    period: "Jan 2025 – Mar 2025",
    role: "Machine Learning Engineer",
    org: "Cimcon Infotech Pvt Ltd",
    bullets: [
      {
        lead: "Model Training",
        detail:
          "Trained and optimized ML models on financial data and improved an internal Python package for sequential data processing.",
      },
      {
        lead: "Pipelines & Deployment",
        detail:
          "Built automated preprocessing pipelines and FastAPI model-serving applications, deployed via Docker and validated with Streamlit.",
      },
    ],
    tags: ["Python", "FastAPI", "Docker", "Streamlit"],
  },
  {
    period: "Feb 2023 – Dec 2024",
    role: "AI Engineer",
    org: "Sunbots Innovations LLP",
    bullets: [
      {
        lead: "Model Development",
        detail:
          "Took computer-vision models from prototype to production across product features and client projects; built automated image-labeling pipelines and data-filtering techniques that cut manual annotation effort and improved model performance.",
      },
      {
        lead: "Deployment & Integration",
        detail:
          "Engineered data pipelines for Ultralytics and Super-Gradients model variants, partnered with Android teams on on-device ML deployment, and used Docker for scalable development.",
      },
      {
        lead: "Flagship Builds",
        detail:
          "Shipped SMARTON (currency-detection accuracy 55%→79%, document detection 80%→94%, a LangChain/RAG document-QA app, quantized on-device models) and a theft-detection system (LSTM→pretrained MMAction2, activity-detection accuracy 30%→65%, FastAPI alerting on Jetson Nano via Docker).",
      },
    ],
    tags: ["Computer Vision", "Ultralytics", "MMAction2", "TFLite", "Docker"],
  },
  {
    period: "Oct 2022 – Feb 2023",
    role: "Data Science Intern",
    org: "Zummit Infolabs",
    bullets: [
      {
        lead: "Training & Implementation",
        detail:
          "Completed intensive ML and Data Science training (supervised/unsupervised learning, preprocessing, feature engineering, model evaluation) and applied Python, NumPy, Pandas and Scikit-learn to real-world datasets using Git-based, reproducible ML workflows.",
      },
    ],
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
    org: "Coursera",
    issued: "May 2023",
    credentialId: "FAP4NXVVA4LR",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/FAP4NXVVA4LR",
  },
  {
    name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    org: "Coursera",
    issued: "May 2023",
    credentialId: "669GDLEED4WF",
    url: "https://www.coursera.org/account/accomplishments/certificate/669GDLEED4WF",
  },
  {
    name: "Advanced Learning Algorithms",
    org: "Coursera",
    issued: "Mar 2023",
    credentialId: "L8ZVGLEWHGC7",
    url: "https://www.coursera.org/account/accomplishments/certificate/L8ZVGLEWHGC7",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    org: "Coursera",
    issued: "Apr 2023",
    credentialId: "Q2DLYDSTBBMF",
    url: "https://www.coursera.org/account/accomplishments/certificate/Q2DLYDSTBBMF",
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
    category: "Languages & Databases",
    items: ["Python", "SQL", "MongoDB", "PostgreSQL", "SQLite", "Vector Databases"],
  },
  {
    category: "Agentic & LLM",
    items: [
      "LangChain",
      "LangGraph",
      "A2A Protocol",
      "MCP",
      "RAG",
      "Prompt Engineering",
      "Fine-Tuning (BERT, LLaMA)",
      "Multi-Agent Orchestration",
      "Tool Calling",
      "LLM Query Routing",
    ],
  },
  {
    category: "LLM Evaluation & Observability",
    items: [
      "LangSmith (Tracing, Monitoring, Debugging)",
      "LLM / NLP Model Evaluation",
      "Prompt & Retrieval Optimization",
    ],
  },
  {
    category: "Backend & Architecture",
    items: [
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "asyncio",
      "Asynchronous & Event-Driven Design",
      "Distributed Systems",
      "Microservices",
      "Modular Monolith",
      "Role-Based Auth & Security",
    ],
  },
  {
    category: "Frontend & Interfaces",
    items: ["Angular", "TypeScript", "REST / WebSocket API Integration", "Streamlit"],
  },
  {
    category: "AI / ML Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "HuggingFace Transformers",
      "PEFT / LoRA",
      "Ultralytics",
      "Mediapipe",
      "TFOD",
      "Super-Gradients",
      "TFLite",
      "ONNX",
      "TensorRT",
    ],
  },
  {
    category: "Vector Databases",
    items: ["Qdrant", "FAISS", "Pinecone", "Weaviate", "MongoDB Atlas Vector Search"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (SageMaker, S3, EC2)", "GCP", "Docker", "CI/CD Pipelines", "Git", "Linux"],
  },
  {
    category: "Expertise",
    items: [
      "Generative AI",
      "Agentic Systems",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Software Architecture & Design",
      "Hyperparameter Tuning",
      "Model Quantization",
      "Stakeholder Communication",
    ],
  },
];

export const affiliates = [
  {
    name: "XWCare",
    by: "Xwits Developers Pvt. Ltd.",
    byLink: "https://www.xwits.dev/",
    tagline: "The AI clinic operating system — live for clinics, polyclinics and small hospitals.",
    description:
      "One screen runs the whole clinic day: front desk, EMR encounters, e-prescriptions, GST billing, WhatsApp follow-ups, telemedicine, inventory and revenue ops. An AI layer drafts notes, prescriptions, follow-ups and replenishment — but never acts alone; a doctor signs every clinical action. Built ABDM/DPDPA-first for India, with HIPAA and GDPR profiles for clinics abroad.",
    highlights: [
      "AI drafts, humans approve — 0 autonomous clinical actions",
      "Encounter-to-GST-invoice in one step",
      "828 automated API tests across 56 suites",
      "Audit log + kill switch on every automation",
    ],
    link: "https://www.xwits.dev/products/xwcare",
    demoLink: "https://calendly.com/xwits/30min",
  },
];

export const faqs = [
  {
    q: "Who is Yogesh Modi?",
    a: "A Senior Software Engineer (AI/ML) at Mindfire Solutions, based in Ahmedabad, India, with 3+ years of production experience architecting, building, scaling and delivering AI/ML systems for enterprise clients — agentic AI, generative AI, computer vision and applied ML.",
  },
  {
    q: "What does Yogesh build?",
    a: "Production-grade AI/ML systems end-to-end, architected through deployment — multi-agent orchestration with LangGraph and the A2A protocol, retrieval-augmented generation, generative fine-tuning, and applied computer-vision/NLP models. Agentic and generative AI are a focus, not the whole scope.",
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
    a: "Yes, on two fronts. For teams hiring: I'm open to senior AI/ML Systems Architect & Engineer roles across agentic AI, generative AI, computer vision and applied ML — backed by 3+ years shipping production systems and, over the last two years, leading stakeholder communication and guiding small cross-functional teams across web, backend, Android and AI. For clients: I take on select contracting and consulting engagements end-to-end — architecture, delivery, and coordinating the people around it — when you need a single owner who can both build the system and manage the collaboration and stakeholders around it.",
  },
  {
    q: "How can I contact Yogesh?",
    a: "Email skmodiyogesh@gmail.com, use the contact form below, connect on LinkedIn, or check out his work on GitHub (YogeshModi-04).",
  },
];

export const contact = {
  headline: "Let's build something that ships.",
  sub:
    "Open to AI/ML Systems Architect & Engineer roles — agentic AI, generative AI, computer vision and applied ML — plus select contracting and client engagements across the same range.",
};
