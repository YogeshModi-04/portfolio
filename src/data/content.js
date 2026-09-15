import headshot from "../assets/headshot.png";

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
  calendly: "https://calendly.com/skmodiyogesh/30min",
  initials: "YM",
  photoUrl: headshot,
};

export const heroMeta = [
  { label: "Based in", value: "Ahmedabad, IN" },
  { label: "Experience", value: "5 years overall" },
  { label: "Focus", value: "Architect · Build · Scale · Deliver" },
];

export const about = {
  statement:
    "I architect, build, scale and deliver AI/ML systems that ship — not demos. Five years of experience overall — spanning agentic and generative AI, computer vision and applied ML — taken from architecture through QA to enterprise deployment.",
  bio: [
    "Hi — I'm Yogesh Modi, an AI/ML architect and consultant. I take AI from a rough, real-world problem all the way to production for an actual business — owned end to end, and never left as a demo that falls apart after the pitch.",
    "My path started during my B.Tech in Information Technology and clicked with my first real build in an internship — machine learning and deep learning combined for image segmentation and prediction. I went pro as an AI Engineer at Sunbots Innovations LLP, shipping optimized models across the company's products and client projects, mentoring junior engineers, and working directly with clients to understand what they actually needed.",
    "I focus on outcomes I can point to: computer-vision models running on-device in assistive smart-glasses used by thousands, a model's real-world accuracy more than doubled, and a platform's deployment time cut by around 80%. My rule is simple — if a change doesn't measurably help, it doesn't ship.",
    "Today my core is agentic and generative AI — multi-agent orchestration and RAG on LangGraph and the A2A protocol — backed by distributed FastAPI services, model fine-tuning (BERT, LLaMA, LoRA/PEFT), and computer vision shipped under real hardware limits, across AWS and GCP. Bring me a messy, half-formed problem and I'll turn it into a system you can trust — as the single person accountable for it, from the first call to long after go-live.",
  ],
  facts: [
    { label: "Role", value: "Senior SWE, AI/ML" },
    { label: "Company", value: "Mindfire Solutions" },
    { label: "Location", value: "Ahmedabad, Gujarat, India" },
    { label: "Experience", value: "5 years overall" },
  ],
};

export const practices = {
  title: "How I work",
  items: [
    {
      heading: "I start with your problem, not a template",
      detail:
        "You don't need a polished spec to begin. I take a messy, real-world problem — even dense, non-technical material — and architect a solution around what your business actually needs, instead of forcing it into an off-the-shelf tool. On my flagship build that meant pulling 46+ business systems and 10,000+ product specs into one place, so staff could get answers just by asking in plain language.",
    },
    {
      heading: "I build it so your team can actually use it",
      detail:
        "The tools I ship are made for real people, not engineers. On that same platform, non-technical staff create and monitor their own AI assistants from a simple screen — no code, and no need to understand the machinery underneath.",
    },
    {
      heading: "I fit the solution to your real constraints",
      detail:
        "I scope to what your business, budget and rules actually require — not the most expensive option on paper. That includes giving your admins simple control over running costs and how sensitive data is handled.",
    },
    {
      heading: "I decide with evidence, and can prove it",
      detail:
        "When I improve something, I can show you the numbers. I've raised model accuracy from 55% to 79%, more than doubled another from 30% to 65%, and cut a platform's deployment time by 80%. If a change doesn't measurably help, it doesn't ship.",
    },
    {
      heading: "One owner, from first call to long after go-live",
      detail:
        "You work with one person who owns the whole thing — architecture, delivery, testing and the demo — and who frames every trade-off in time, cost and risk, not jargon. No handoffs, no gaps for you to manage: just a system that ships and keeps running.",
    },
  ],
};

export const caseStudies = [
  {
    title: "Enterprise Multi-Agent AI Platform",
    problem:
      "The client's teams were buried under data scattered across 46+ business systems and 10,000+ product specs — sales analytics, documentation, product catalog and vendor performance all lived in separate places, with no fast way to get answers.",
    approach:
      "I architected a production multi-agent platform on the A2A protocol — 5+ specialized agents with plain-language query routing (LangGraph + Gemini), running concurrently on a distributed async backend, over RAG pipelines on a Qdrant knowledge base. I added admin-gated tracing to control cost and data sensitivity, and role-based access for auditability.",
    impact:
      "Non-technical staff now get answers by asking in plain language across 46+ systems and 10,000+ specs — and create and monitor their own agents with no code. Containerized delivery cut deployment time by 80%.",
    tags: ["Python", "A2A Protocol", "LangGraph", "RAG", "Qdrant", "FastAPI", "Angular", "Docker"],
  },
  {
    title: "SMARTON — On-Device Vision Accuracy",
    problem:
      "SMARTON's currency and document detection wasn't accurate enough to trust in the field, and had to run on constrained mobile hardware rather than a server.",
    approach:
      "I optimized the training datasets and tuned hyperparameters, quantized the models to run on-device with the Android team, and built a LangChain/RAG document-QA layer for production-grade retrieval.",
    impact:
      "Currency-detection accuracy rose 55% → 79% and document detection 80% → 94%, running quantized on mobile.",
    tags: ["Python", "TensorFlow", "TFLite", "Computer Vision", "Deep Learning", "Model Fine-Tuning", "Quantization", "LangChain", "RAG"],
  },
  {
    title: "Theft Detection — Activity Recognition",
    problem:
      "An LSTM-based activity-detection model was too inaccurate (30%) to be useful for real-time theft alerting on edge hardware.",
    approach:
      "I rebuilt the training pipeline around pretrained MMAction2 video-classification models and engineered a data pipeline supporting all Ultralytics detector variants, deploying a FastAPI alerting service on a Jetson Nano via Docker.",
    impact:
      "Activity-detection accuracy more than doubled, 30% → 65%, running as a live alerting service on edge hardware.",
    tags: ["Python", "PyTorch", "MMAction2", "Ultralytics", "Computer Vision", "Deep Learning", "Model Fine-Tuning", "FastAPI", "Jetson Nano", "Docker"],
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
    a: "An AI/ML architect and consultant based in Ahmedabad, India, with 5 years of overall experience architecting, building, scaling and delivering AI/ML systems for businesses and enterprise clients — agentic AI, generative AI, computer vision and applied ML.",
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
    a: "Yes, on two fronts. For teams hiring: I'm open to senior AI/ML Systems Architect & Engineer roles across agentic AI, generative AI, computer vision and applied ML — backed by 5 years of overall experience and, over the last two years, leading stakeholder communication and guiding small cross-functional teams across web, backend, Android and AI. For clients: I take on select contracting and consulting engagements end-to-end — architecture, delivery, and coordinating the people around it — when you need a single owner who can both build the system and manage the collaboration and stakeholders around it.",
  },
  {
    q: "How can I contact Yogesh?",
    a: "Email skmodiyogesh@gmail.com, book a 30-minute call from the Contact section below, connect on LinkedIn, or check out his work on GitHub (YogeshModi-04).",
  },
];

export const testimonials = [
  {
    quote:
      "Yogesh worked with us on our theft-detection system, and his instinct for research and optimization set him apart — he dug into the problem properly rather than settling for the first thing that worked, and pushed the model well past where it started. Clear communication, real ownership, and a genuine pleasure to collaborate with. I'd happily work with him again.",
    name: "Deep Parmar",
    title: "Founder & Director",
    company: "Xwits Developers",
    companyUrl: "https://www.xwits.dev/",
    link: "https://www.linkedin.com/in/deep56parmar/",
  },
  {
    quote:
      "Yogesh was central to the AI behind SMARTON, our assistive smart-glasses platform now serving 17,000+ blind and visually impaired users. He took state-of-the-art computer-vision and deep-learning models from research all the way to running on-device, and worked closely with our Android team to integrate them into the product. Sharp, dependable, and genuinely great to build with.",
    name: "Ravi Jadav",
    title: "Chief Product Officer & Co-Founder",
    company: "Sunbots Innovations",
    companyUrl: "https://www.sunbots.in/",
    link: "https://www.linkedin.com/in/theravijadav/",
  },
  {
    quote:
      "Yogesh and I architected and delivered a real-time voice-onboarding flow for a dating app, integrating Gemini Live over a NestJS backend. He's strong where it counts — we planned the architecture together and he shipped his side cleanly. We both knew the stack well, so we moved fast, and he's genuinely easy to collaborate with on an open-ended problem.",
    name: "Jay Bhavsar",
    title: "Co-Founder & Technology Architect",
    company: "Infinite Castle",
    companyUrl: "https://infinitecastle.dev/",
    link: "https://www.linkedin.com/in/jaybhavsar2010/",
  },
];

export const contact = {
  headline: "Let's build something that ships.",
  sub:
    "Open to AI/ML Systems Architect & Engineer roles — agentic AI, generative AI, computer vision and applied ML — plus select contracting and client engagements across the same range.",
};
