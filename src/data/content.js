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
    "I'm a Senior AI/ML Engineer at Mindfire Solutions. I take AI systems from a rough, real-world problem all the way to production — running for actual businesses, not sitting in a notebook.",
    "My core is agentic and generative AI: multi-agent orchestration and retrieval-augmented generation (RAG), built on LangGraph and the A2A protocol, with retrieval across vector databases like Qdrant, FAISS, Pinecone and Weaviate.",
    "I engineer the backend that holds it together — distributed, asynchronous FastAPI services in modular-monolith and microservices patterns — so many AI agents can run at once, quickly and reliably.",
    "I work across the wider ML space too: fine-tuning language models such as BERT and LLaMA with LoRA/PEFT, and shipping computer-vision models to production — usually under real hardware and cost limits, not ideal lab conditions.",
    "I run all of this on both AWS and GCP with Docker and CI/CD, so the cloud is a project decision, not a limitation. And I stay close to the business side — owning timelines and turning technical trade-offs into outcomes stakeholders can act on.",
  ],
  facts: [
    { label: "Role", value: "Senior SWE, AI/ML" },
    { label: "Company", value: "Mindfire Solutions" },
    { label: "Location", value: "Ahmedabad, Gujarat, India" },
    { label: "Experience", value: "5 years overall" },
  ],
};

export const practices = {
  engineering: {
    title: "How I Engineer",
    items: [
      {
        heading: "I own it from start to finish",
        detail:
          "I run the whole thing — from the first rough problem through design, testing, launch and the client demo — including timelines and keeping everyone in the loop. What I deliver is real software running in production for real companies, not a demo that falls apart after the pitch.",
      },
      {
        heading: "I shape the system to fit the job",
        detail:
          "I design each system around the job in front of it, rather than forcing the job into a template. On a live AI platform I built, that meant shaping it so many AI assistants could work at the same time — fast, and without tripping over each other.",
      },
      {
        heading: "I decide with evidence, not opinion",
        detail:
          "When I improve something, I can show the numbers. On one product I raised accuracy from 55% to 79% and from 80% to 94%; on another, from 30% to 65%. If a change doesn't measurably help, it doesn't ship.",
      },
      {
        heading: "I handle the deep technical plumbing",
        detail:
          "I'm comfortable in the unglamorous layer that makes software fast and reliable. I cut one system's setup-and-launch time by 80%, and got AI models running directly on phones and small edge devices — not just big servers.",
      },
      {
        heading: "I build in visibility, not guesswork",
        detail:
          "I don't launch and hope. I build in the ability to see exactly how the AI is behaving, catch problems early and check its quality — with a simple switch for admins to control running costs and protect sensitive data. Behaviour is measured, not assumed.",
      },
    ],
  },
  client: {
    title: "How I Work With Clients",
    items: [
      {
        heading: "I turn a rough idea into a working system",
        detail:
          "You don't need a polished spec to start. I take a messy, real-world problem — even dense, non-technical material — and turn it into something that works. On my flagship build, that meant pulling together 46+ business systems and 10,000+ product specs so staff could get answers just by asking in plain language.",
      },
      {
        heading: "I build it so your team can actually use it",
        detail:
          "The tools I ship are made for real people, not engineers. On that same platform, non-technical staff create and monitor their own AI assistants from a simple screen — no code, and no need to understand the machinery underneath.",
      },
      {
        heading: "I fit the solution to your real constraints",
        detail:
          "I scope to what your business, budget and rules actually require — not the most expensive option on paper. That includes giving your admins a simple on/off control over running costs and how sensitive data is handled.",
      },
      {
        heading: "I talk in outcomes, not jargon",
        detail:
          "I frame every trade-off in terms that matter to you — time, cost and risk — instead of technical metrics. You always know what a decision means for your business, not just for the code.",
      },
      {
        heading: "One point of contact, start to finish",
        detail:
          "From the first conversation to after go-live, you work with one person who owns the whole thing — no handoffs, no gaps for you to manage. And it ships: I've cut a platform's deployment time by 80% to get clients live faster.",
      },
    ],
  },
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
    a: "A Senior Software Engineer (AI/ML) at Mindfire Solutions, based in Ahmedabad, India, with 5 years of overall experience architecting, building, scaling and delivering AI/ML systems for enterprise clients — agentic AI, generative AI, computer vision and applied ML.",
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
