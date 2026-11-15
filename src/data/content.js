export const profile = {
  name: 'Asi Jain',
  role: 'Full-Stack Developer · AI Enthusiast',
  tagline: 'I build things that live on the internet — and models that learn from it.',
  intro:
    "CS undergraduate at JK Lakshmipat University, Visiting Scholar at IIT Kanpur, and MERN-stack developer who loves solving real problems through code. I've shipped live platforms spanning B2B commerce, AI-powered research tooling and personal finance — weaving in WebSockets, Redis and LLM APIs where they create the most impact.",
  email: 'asi82005.j@gmail.com',
  phone: '+91-6264620983',
  github: 'https://github.com/Asijain019',
  linkedin: 'https://www.linkedin.com/in/asi-jain019',
  location: 'Jaipur, India',
  resumePdf: '/resume/Asi_Jain_Resume.pdf',
  resumeDocx: '/resume/Asi_Jain_Resume.docx',
}

export const roles = [
  'Full-Stack Developer',
  'AI / ML Builder',
  'MERN Stack Engineer',
  'LLM Tinkerer',
  'Problem Solver',
]

export const experience = [
  {
    company: 'Spring Street',
    role: 'Software Development Engineer Intern',
    period: 'Jul 2026 — Aug 2026',
    location: 'Mumbai (Remote)',
    stack: ['React', 'Connect-RPC', 'Go', 'PostgreSQL', 'SQL'],
    summary:
      'Rebuilt the internal admin dashboard used by engineering and leadership, tracing every metric from React through Connect-RPC and Go to its PostgreSQL query.',
    highlights: [
      {
        metric: '7',
        label: 'dashboard pages rebuilt',
        text: 'Rebuilt the internal admin dashboard (7 pages) used by engineering and leadership, tracing every metric from React through Connect-RPC and Go to its PostgreSQL query.',
      },
      {
        metric: '39',
        label: 'SQL fixes shipped',
        text: 'Audited ~120 reporting defects and shipped 39 backend SQL query fixes, reconciling 5 headline figures with the customer app.',
      },
      {
        metric: '$26,875',
        label: 'funding surfaced',
        text: 'Replaced stale snapshot reads with live quote-based valuation and fixed funding currency handling, surfacing $26,875 of funding reported as zero.',
      },
      {
        metric: '$0',
        label: 'silent bug caught',
        text: 'Caught a silently failing write in live order sizing that sent $0 of a $1,000 order to a 64%-weight stock; established an end-to-end database, API and UI verification standard.',
      },
    ],
  },
]

export const featuredProjects = [
  {
    id: 'efficientgpt',
    title: 'EfficientGPT',
    subtitle: 'GQA + SwiGLU in a small GPT — pre-trained from scratch',
    year: '2025',
    category: 'AI Research',
    accent: '#8b5cf6',
    github: 'https://github.com/Asijain019/EfficientGPT',
    live: null,
    stack: ['PyTorch', 'Python', 'tiktoken', 'Colab T4', 'Matplotlib'],
    description:
      'A 50M-parameter GPT-style language model built and trained from scratch to test two architecture changes that make Transformers cheaper to run: Grouped-Query Attention and SwiGLU feed-forward layers.',
    highlights: [
      'Trained 4 model configs (MHA/GQA × GELU/SwiGLU) on 50M tokens each with identical data, seed and settings',
      'The GQA + SwiGLU hybrid cut perplexity ~5% (14.00 → 13.28) vs the baseline with 5% fewer parameters',
      'GQA shrank the KV cache exactly 4× at every batch size and context length tested',
      'Full training pipeline: streaming data prep, fp16 training with auto-resume, benchmark + plotting scripts',
    ],
  },
  {
    id: 'eventsphere',
    title: 'EventSphere',
    subtitle: 'Discover. Experience. Connect.',
    year: '2025',
    category: 'Full-Stack Platform',
    accent: '#22d3ee',
    github: 'https://github.com/Asijain019/eventsphere',
    live: 'https://eventsphere-rosy-nine.vercel.app/',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Vitest', 'Docker'],
    description:
      'A city-wide and campus event platform where students discover events, register individually or as teams, volunteer, find collaborators, and connect with other attendees.',
    highlights: [
      'Three-tier modular monolith: Next.js presentation, domain modules + API handlers, PostgreSQL persistence',
      'Server-enforced capacity checks, waitlists and registration status',
      'Organizer tools: event management, volunteers, announcements and check-in',
      'Communities, connection requests and messaging after acceptance — with CI on GitHub Actions',
    ],
  },
  {
    id: 'cortexgate',
    title: 'CortexGate',
    subtitle: 'AI gateway & cost-optimization platform for LLM apps',
    year: '2026',
    category: 'AI Infrastructure',
    accent: '#f472b6',
    github: 'https://github.com/Asijain019/CortexGate',
    live: null,
    stack: ['Node.js', 'Express', 'Groq', 'Gemini', 'MongoDB', 'Embeddings'],
    description:
      'A self-hosted gateway that sits between an application and multiple LLM providers. One OpenAI-compatible endpoint with semantic caching, provider failover and cost tracking applied to every request.',
    highlights: [
      'Semantic cache: Gemini embeddings + cosine similarity, with a model-check verifying borderline matches',
      'Groq → Gemini failover with circuit breaker, model fallback on 429/503 and live .env reload',
      'Measured the cache threshold (0.92) instead of assuming it — paraphrases hit 8/8 with 0 wrong hits',
      'Live dashboard with cache metrics, request history, estimated costs and failover log',
    ],
  },
  {
    id: 'researchlens',
    title: 'ResearchLens',
    subtitle: 'AI-assisted research paper discovery & analysis',
    year: '2025',
    category: 'AI Product',
    accent: '#a3e635',
    github: 'https://github.com/Asijain019/researchlens',
    live: 'https://researchlens-cyan.vercel.app/',
    stack: ['Node.js', 'Express', 'Groq LLM', 'OpenAlex', 'Vanilla JS', 'Vercel', 'Render'],
    description:
      'Search academic papers by topic and instantly get structured AI insights — problem, methodology, contributions, results and limitations — without jumping between Google Scholar, arXiv and PubMed.',
    highlights: [
      'Parallel search across arXiv, Semantic Scholar, CrossRef, PubMed and CORE, deduplicated and citation-ranked',
      '3-tier AI fallback: Groq → local Ollama (Phi-3) → rule-based extraction — never fails outright',
      'OpenAlex enrichment fills in real citation counts; weighted ranking by citations, recency and abstract quality',
      '10-minute in-memory caching + client-side pagination to dodge API rate limits',
    ],
  },
  {
    id: 'expensetracker',
    title: 'Expense Tracker',
    subtitle: 'Glassmorphism personal finance dashboard',
    year: '2025',
    category: 'Full-Stack App',
    accent: '#fbbf24',
    github: 'https://github.com/Asijain019/ExpenseTracker_App',
    live: 'https://expensetracker-app-a45t.onrender.com',
    stack: ['React 18', 'Vite', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'Tailwind'],
    description:
      'A production-grade personal finance dashboard with real-time analytics, category tracking and calendar-synced expense entry — wrapped in a premium glassmorphism UI.',
    highlights: [
      'Full-stack TypeScript monorepo (pnpm workspaces) with end-to-end type-safety via Zod',
      'PostgreSQL schema for multi-user session auth, category tagging and date-filtered queries',
      'Real-time stat cards: total spend, monthly trends, top categories',
      'Fully responsive across mobile, tablet and desktop',
    ],
  },
  {
    id: 'deepposecoach',
    title: 'Deep Pose Coach',
    subtitle: 'Real-time yoga pose detection — MediaPipe + SVM',
    year: '2025',
    category: 'Computer Vision',
    accent: '#22d3ee',
    github: 'https://github.com/Asijain019/Deep_Pose_Coach',
    live: null,
    stack: ['Python', 'MediaPipe', 'OpenCV', 'Scikit-learn', 'NumPy'],
    description:
      'A real-time yoga pose classification system that converts each human pose into a structured 146-dimensional geometric feature vector instead of training on raw images — lightweight, interpretable and CPU-friendly.',
    highlights: [
      '33 MediaPipe landmarks → 132 raw features + 9 joint angles + 5 foot-geometry features, body-centred normalised',
      'StandardScaler + SVM (RBF) pipeline — needs far less data than CNN alternatives',
      'Real-time inference (<30 ms/frame) on CPU across 10+ yoga poses',
      'Fully reproducible: dataset encoding, training and live webcam detection scripts',
    ],
  },
]

export const moreProjects = [
  {
    title: 'KiranaConnect',
    description:
      'Hyperlocal B2B wholesale platform for the kirana ecosystem — dual-role JWT auth, Redis-cached catalogue (<2 ms hits), Socket.io batch-timer countdowns and idempotent 6-hour order batching.',
    stack: ['React', 'Node.js', 'MongoDB Atlas', 'Redis', 'Socket.io'],
    github: 'https://github.com/GauravJangid2004/KiranaConnect',
    accent: '#f472b6',
  },
  {
    title: 'Software Bug Prediction',
    description:
      'Defect prediction on real Java projects (Eclipse JDT, Lucene, Mylyn, Equinox). Lasso feature selection + 8 classifiers reached 85% accuracy — 12% over baseline heuristics.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    github: 'https://github.com/Asijain019/Software_Bug_Prediction',
    accent: '#8b5cf6',
  },
  {
    title: 'ATM AI Voice Assistant',
    description:
      'Multilingual (English + Hindi) voice interface for ATMs with fuzzy command matching, ambient-noise adjustment and secure masked PIN entry — 6 full banking operations.',
    stack: ['Python', 'SpeechRecognition', 'gTTS', 'NLP'],
    github: 'https://github.com/Asijain019/ATM-AI-Voice-Assistant',
    accent: '#a3e635',
  },
]

export const skills = [
  {
    group: 'Languages',
    accent: '#8b5cf6',
    items: ['C++', 'C', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'VHDL'],
  },
  {
    group: 'AI / ML',
    accent: '#f472b6',
    items: ['PyTorch', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'NumPy', 'Pandas', 'NLP', 'Groq API', 'LLM APIs'],
  },
  {
    group: 'Full-Stack',
    accent: '#22d3ee',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Socket.io', 'Drizzle ORM', 'Tailwind CSS'],
  },
  {
    group: 'Tools & Platforms',
    accent: '#a3e635',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Vercel', 'Render', 'Kaggle'],
  },
]

export const education = [
  {
    period: '2023 — 2027',
    title: 'B.Tech, Computer Science & Engineering',
    place: 'JK Lakshmipat University, Jaipur',
    detail: 'CPI 8.3/10 · Top 15 merit holders in batch',
  },
  {
    period: 'Jul — Nov 2024',
    title: 'CSE Visiting Scholar',
    place: 'Indian Institute of Technology, Kanpur',
    detail: 'Selected through a merit-based institute-wide process; pursued 3rd semester at IIT Kanpur',
  },
  {
    period: '2023',
    title: 'Class XII (CBSE) — 80.2%',
    place: 'Silver Bells Convent School, Bhopal',
    detail: '',
  },
  {
    period: '2021',
    title: 'Class X (CBSE) — 94.6%',
    place: "St. Xavier's Sr. Sec. School",
    detail: '',
  },
]

export const achievements = [
  'CSE Visiting Scholar at IIT Kanpur (Jul–Nov 2024), selected through a merit-based institute-wide process',
  'Ranked in top 15 merit holders in batch; active in competitive programming contests',
  'Volunteer, SABRANG Cultural Fest — coordinated logistics across 3+ major events',
]

export const certifications = [
  {
    name: 'Programming Fundamentals',
    issuer: 'Coursera',
    year: '2023',
    link: 'https://www.coursera.org/share/797d3c4bbce594c1376eb6913ca1a3b2',
  },
  {
    name: 'Programming in C',
    issuer: 'Coursera',
    year: '2023',
    link: 'https://coursera.org/share/ba4c3cdde93ed01674eecebaff5c1ee1',
  },
  {
    name: 'Python for Everybody',
    issuer: 'Coursera',
    year: '2023',
    link: 'https://coursera.org/share/811f587fb1f018ca684b0def07b02057',
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    year: '2024',
    link: 'https://coursera.org/share/d47fd9846537299cb48576df3e70f451',
  },
  {
    name: 'Red Hat RH124',
    issuer: 'Red Hat · Credly',
    year: '2024',
    link: 'https://www.credly.com/badges/cfd6ba88-0054-4ec9-aebe-914a271c497e/public_url',
  },
  {
    name: 'DBMS Part-1',
    issuer: 'Certificate',
    year: '2025',
    link: 'https://drive.google.com/file/d/11wTMZqXyZer3hYbMUXEZWsstO4MP2Xne/view?usp=sharing',
  },
  {
    name: 'DBMS Part-2',
    issuer: 'Certificate',
    year: '2025',
    link: 'https://drive.google.com/file/d/1LblT51JC8FlmI3zR37qFRempVfoNj34q/view?usp=sharing',
  },
]

export const courses = [
  'Computer Networks',
  'Database Management Systems',
  'Operating Systems',
  'Machine Learning',
  'Deep Learning',
  'Blockchain Technology',
  'Computer Organization & Architecture',
  'Full-Stack Development',
  'Data Structures & Algorithms',
]
