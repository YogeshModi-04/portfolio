// Served from public/images/ rather than imported. Importing would inline each
// file into the single-file build (assetsInlineLimit is effectively unlimited),
// so every visual shipped before first paint. As plain URLs the browser fetches
// them on demand and loading="lazy" actually takes effect.
// Paths are relative so a built dist/ folder works opened directly, not just at
// a domain root.
const headshot = "./images/headshot.jpg";
const shoppingAssistantDiagram = "./images/agentic-shopping-assistant.svg";
const specSummarizerDiagram = "./images/two-pass-spec-summarizer.svg";
const sqlAgentDiagram = "./images/natural-language-sql-agent.svg";
const smartonGlasses = "./images/smarton-glasses.png";
const multiAgentPlatformDiagram = "./images/enterprise-multi-agent-platform.svg";
const smartonVisionDiagram = "./images/smarton-vision-accuracy.svg";
const theftDetectionDiagram = "./images/theft-detection-activity.svg";

export const profile = {
  name: "Yogesh Modi",
  fullName: "Yogesh Shivkumar Modi",
  role: "AI/ML Systems Architect & Engineer",
  tagline: "Turning ambiguous problems into systems that ship.",
  location: "Ahmedabad, Gujarat, India",
  email: "skmodiyogesh@gmail.com",
  github: "https://github.com/YogeshModi-04",
  githubHandle: "YogeshModi-04",
  linkedin: "https://www.linkedin.com/in/yogesh-shivkumar-modi/",
  calendly: "https://calendly.com/skmodiyogesh/30min",
  initials: "YM",
  photoUrl: headshot,
};

export const about = {
  statement:
    "I architect, build, scale and deliver AI/ML systems that ship — not demos. Five years of experience overall — spanning agentic and generative AI, computer vision and applied ML — taken from architecture through QA to enterprise deployment.",
  bio: [
    "Hi — I'm Yogesh Modi, an AI/ML architect and consultant. I take AI from a rough, real-world problem all the way to production for an actual business — owned end to end, and never left as a demo that falls apart after the pitch.",
    "My path started during my B.Tech in Information Technology and clicked with my first real build in an internship — machine learning and deep learning combined for image segmentation and prediction. I went pro as an AI Engineer at Sunbots Innovations LLP, shipping optimized models across the company's products and client projects, mentoring junior engineers, and working directly with clients to understand what they actually needed.",
    "I focus on outcomes I can point to: computer-vision models running on-device in assistive smart-glasses used by thousands, a model's real-world accuracy more than doubled, and a platform's deployment time cut by around 80%. My rule is simple — if a change doesn't measurably help, it doesn't ship.",
    "Today my core is agentic and generative AI — multi-agent orchestration and RAG on LangGraph and the A2A protocol — backed by distributed FastAPI services, model fine-tuning (BERT, LLaMA, LoRA/PEFT), and computer vision shipped under real hardware limits, across AWS and GCP. Bring me a messy, half-formed problem and I'll turn it into a system you can trust — as the single person accountable for it, from the first call to long after go-live.",
  ],
};

export const practices = {
  title: "How I work",
  items: [
    {
      heading: "You don't need a plan to start",
      detail:
        "Bring me the messy version. I work out what your business actually needs, then build around that instead of a ready-made tool that half fits. On my biggest build that meant merging 46 systems into one place, so staff could get answers just by asking.",
    },
    {
      heading: "Built for your team, not for engineers",
      detail:
        "Your staff shouldn't need training to use what I build. On that same system, non-technical people set up and ran their own AI assistants from one simple screen. No code involved.",
    },
    {
      heading: "It fits your budget and your rules",
      detail:
        "I build what your business actually needs, not the most expensive option on paper. Your admins keep simple control over running costs and how sensitive data is handled.",
    },
    {
      heading: "I show you the numbers",
      detail:
        "Every change has to prove it helps. I've lifted one system's accuracy from 55% to 79%, doubled another from 30% to 65%, and cut a platform's launch time by 80%. If it doesn't move a number, it doesn't ship.",
    },
    {
      heading: "One person, start to finish",
      detail:
        "You deal with me, not a chain of handoffs. I design it, build it, test it, and stay involved long after launch. Every trade-off explained in time, cost and risk — never jargon.",
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
    image: multiAgentPlatformDiagram,
    imageAlt:
      "Architecture diagram: an access tier of plain-language queries, a no-code agent studio and an RBAC gate feeds a LangGraph and Gemini intent router over an A2A bus, which dispatches concurrently to five specialised agents for analytics, catalog and specs, documentation, vendor intelligence and compliance; these run on a distributed async backend with admin-gated tracing and audit trails, retrieving from a Qdrant vector knowledge base indexing 46+ sources and 10,000+ product specs. Results: 80% deployment reduction, zero-code self-service agents, 100% audit traceability.",
    imageWidth: 1200,
    imageHeight: 800,
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
    image: smartonVisionDiagram,
    imageAlt:
      "Three-column diagram: the bottleneck column lists offline-only operation, untrusted baselines at 55% currency and 80% document accuracy, and mobile RAM, thermal and battery limits; the architecture column shows dataset tuning and curation, FP32 to INT8 quantization for Android NPU/NNAPI execution, and a LangChain RAG document-QA layer; the metrics column shows currency detection rising 55% to 79% and document detection 80% to 94%, running quantized on mobile.",
    imageWidth: 1100,
    imageHeight: 680,
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
    image: theftDetectionDiagram,
    imageAlt:
      "Before-and-after diagram: the legacy column shows single-frame sampling into a vanilla LSTM losing spatial context, capped at 30% accuracy; the re-engineered pipeline runs Ultralytics detectors for object localisation and spatial crops into an MMAction2 spatio-temporal video classifier, then a FastAPI alert dispatch service, all deployed as a containerised daemon on a Jetson Nano, delivering 65% accuracy.",
    imageWidth: 1000,
    imageHeight: 620,
  },
];

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
    image: smartonGlasses,
    imageAlt:
      "The SMARTON smart glasses: a matte black wayfarer-style frame with a forward-facing camera beside the left hinge, sensor openings along the brow bar, and thickened temple arms housing the battery and bone-conduction audio.",
    imageWidth: 800,
    imageHeight: 800,
    imageKind: "photo",
  },
  {
    id: "02",
    title: "Agentic Shopping Assistant",
    tagline: "LangGraph + XGBoost recommendations",
    description:
      "A shopping chatbot system built on LangGraph with XGBoost-based product recommendations, SQLite persistence, streaming responses and modular Python packaging — architected as a real service, not a script.",
    stack: ["LangGraph", "XGBoost", "SQLite", "Python"],
    image: shoppingAssistantDiagram,
    imageAlt:
      "Architecture diagram: a client streaming layer feeds a LangGraph runtime whose supervisor node routes to a context gatherer, which sends features to an XGBoost ranker; ranked items return to a synthesis node that streams tokens back to the client, with graph state checkpointed to SQLite.",
    imageWidth: 960,
    imageHeight: 620,
  },
  {
    id: "03",
    title: "Two-Pass Spec Summarizer",
    tagline: "Gemini-based document intelligence",
    description:
      "A Gemini-powered summarizer for civil-engineering specs using a two-pass architecture — per-document intermediate summaries rolled up into a single unified output for fast client review.",
    stack: ["Gemini", "Python", "Document AI"],
    image: specSummarizerDiagram,
    imageAlt:
      "Architecture diagram: raw civil engineering specification documents feed a first pass where separate Gemini extractors summarize each document into structured intermediate JSON; those summaries fan into a second-pass roll-up synthesizer that cross-checks them and emits a single unified summary for client review.",
    imageWidth: 1100,
    imageHeight: 680,
  },
  {
    id: "04",
    title: "Natural-Language SQL Agent",
    tagline: "LangChain over PostgreSQL",
    description:
      "A LangChain SQL agent over a PostgreSQL student database, using JsonOutputParser for reliable structured output — translating plain-language questions into safe, correct queries.",
    stack: ["LangChain", "PostgreSQL", "JsonOutputParser"],
    image: sqlAgentDiagram,
    imageAlt:
      "Architecture diagram: a plain-language question enters a LangChain agent, which combines the student database schema, the postgresql dialect and dynamic few-shot examples into a prompt; an LLM synthesizer translates the intent into SQL behind an anti-injection guard, JsonOutputParser validates the structured output, and the resulting read-only query runs against the PostgreSQL students database to return a formatted dataset.",
    imageWidth: 1000,
    imageHeight: 580,
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
