export const personalInfo = {
  name: "Jahnavi Manchipalli",
  shortName: "Janu.",
  title: "Software Engineer & Builder",
  headline: "Hi, I'm Janu.",
  tagline: "I like turning ideas into things people can actually use.",
  supportingText: "Computer Science student exploring the intersection of AI, full-stack development and product building.",
  personalNote: "Currently curious about where I'll end up as an SDE.",
  careerGoal: "Become an SDE at a strong product company and eventually become the kind of engineer who can take an idea from zero to a product people actually use.",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "SRM University-AP, Amaravati, India",
    period: "August 2023 – May 2027",
    cgpa: "8.75 / 10.0"
  },
  socials: {
    github: "https://github.com/janu-19",
    githubAlt: "https://github.com/janu-19",
    linkedin: "https://linkedin.com/in/jahnavimanchipalli",
    leetcode: "https://leetcode.com/u/Jahnavi_Manchipalli",
    email: "manchipallijahnavi@gmail.com",
    phone: "+91-8309180465"
  }
};

export const currentlyData = {
  building: "Personal portfolio / new product ideas",
  learning: "AI + Full-stack development",
  exploring: "Cloud",
  funLearning: "Spanish",
  reading: "Fiction",
  mood: "Curious",
  careerFocus: "Becoming a better SDE"
};

export const projectsData = [
  {
    id: "tripnest",
    number: "01",
    name: "TripNest",
    subtitle: "Full-Stack Booking Platform",
    featured: true,
    accentColor: "from-amber-500/20 to-orange-500/10",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.io", "Stripe", "Cloudinary"],
    description: "A full-stack booking platform built around authentication, property management, reservations and real-time communication.",
    highlights: [
      "Engineered server-side logic for authentication, property management and reservations.",
      "Integrated Stripe webhooks with MongoDB transactions for collision-free booking workflows.",
      "Reduced response latency by approximately 85% using Redis caching, custom eviction strategies, MongoDB indexing and Mongoose .lean() projections.",
      "Built synchronized real-time communication modules using Socket.io."
    ],
    metric: "315ms → 48ms",
    metricLabel: "~85% faster response time",
    links: {
      live: "https://tripnest-77bf.onrender.com",
      github: "https://github.com/janu-19/TripNest"
    },
    image: "/images/tripnest.jpg"
  },
  {
    id: "trustguard",
    number: "02",
    name: "TrustGuard AI",
    subtitle: "Real-Time Fraud Intelligence Platform",
    featured: true,
    accentColor: "from-emerald-500/20 to-teal-500/10",
    tags: ["React.js", "FastAPI", "WebSockets", "XGBoost", "Redis", "PostgreSQL", "Gemini API"],
    description: "A real-time fraud intelligence platform that combines machine learning, behavioral scoring and live transaction telemetry to assess financial risk.",
    highlights: [
      "Built a FastAPI + WebSocket architecture for streaming transactions and live trust-score updates.",
      "Trained and deployed an XGBoost fraud detection model.",
      "Achieved 98.3% ROC-AUC and 93.5% F1-score on the evaluation setup.",
      "Built a behavioral scoring engine using transaction history and device usage.",
      "Integrated Gemini API workflows to provide transaction-level fraud reasoning.",
      "Added administrative tooling for model retraining, fraud scenario injection and cache management."
    ],
    metric: "98.3% ROC-AUC | 93.5% F1",
    metricLabel: "ML Fraud Scoring Engine",
    links: {
      github: "https://github.com/janu-19/TrustGuardAI"
    },
    image: "/images/trustguard.jpg"
  },
  {
    id: "aigym",
    number: "03",
    name: "AI Gym Trainer",
    subtitle: "Real-Time Fitness Analysis System",
    featured: true,
    accentColor: "from-blue-500/20 to-indigo-500/10",
    tags: ["Streamlit", "MediaPipe", "OpenCV", "WebRTC", "SQLite", "Grok API"],
    description: "A real-time fitness analysis system that uses computer vision to track movement, analyze posture and provide live workout feedback.",
    highlights: [
      "Integrated WebRTC for low-latency video streaming.",
      "Used MediaPipe pose landmarks and OpenCV for posture analysis and repetition tracking.",
      "Built continuous visual feedback.",
      "Added adaptive voice coaching powered by the Grok API.",
      "Implemented user authentication and workout history using SQLite."
    ],
    metric: "60 FPS Vision",
    metricLabel: "WebRTC Pose Landmark Tracking",
    links: {
      live: "https://ai-realtime-gym-coachh.streamlit.app/",
      github: "https://github.com/janu-19/ai-realtime-gym-coach"
    },
    image: "/images/aigym.jpg"
  },
  {
    id: "outfitiq",
    number: "04",
    name: "OutfitIQ",
    subtitle: "AI Fashion Recommendation Platform",
    featured: false,
    accentColor: "from-rose-500/20 to-pink-500/10",
    tags: ["React.js", "FastAPI", "Python", "Cloudinary", "Render"],
    description: "An AI-powered fashion recommendation platform that combines clothing analysis with contextual recommendations.",
    highlights: [
      "Built outfit recommendation logic using color and texture analysis.",
      "Optimized image-processing API workflows.",
      "Implemented asynchronous data fetching.",
      "Added secure guest mode.",
      "Ensured uploaded images are stored in Cloudinary only for authenticated users."
    ],
    metric: "Color & Texture Engine",
    metricLabel: "Contextual Style Match",
    links: {
      live: "https://outfit-weather-frontend.onrender.com/",
      github: "https://github.com/janu-19/outfit-weather-frontend"
    },
    image: "/images/outfitiq.jpg"
  },
  {
    id: "trademate",
    number: "05",
    name: "TradeMate",
    subtitle: "Trading Dashboard & Portfolio Manager",
    featured: false,
    accentColor: "from-cyan-500/20 to-sky-500/10",
    tags: ["React.js", "Node.js", "REST APIs", "JWT", "Chart.js"],
    description: "A trading dashboard designed for real-time portfolio management, stock tracking and financial visualization.",
    highlights: [
      "Built a React-based trading dashboard.",
      "Implemented JWT authentication.",
      "Created reusable financial charts and data visualization components.",
      "Resolved state synchronization issues across complex dashboard views.",
      "Designed the interface for precise portfolio tracking."
    ],
    metric: "Real-Time Telemetry",
    metricLabel: "Sync Chart.js Dashboards",
    links: {
      live: "https://trademate-frontend.onrender.com",
      github: "https://github.com/janu-19/TradeMate"
    },
    image: "/images/trademate.jpg"
  },
  {
    id: "reachinbox",
    number: "06",
    name: "ReachInbox",
    subtitle: "High-Throughput Async Email Dispatch Engine",
    featured: false,
    accentColor: "from-purple-500/20 to-violet-500/10",
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "MySQL", "Redis", "BullMQ"],
    description: "A resilient asynchronous email dispatch engine designed around queues, scheduling, rate limiting and reliable job processing.",
    highlights: [
      "Built multi-account SMTP routing.",
      "Implemented Redis Sorted Sets and BullMQ background workers.",
      "Added delay scheduling with reliable processing across server restarts.",
      "Built an atomic sliding-window rate limiter in Redis.",
      "Added idempotency safeguards using database constraints and job-locking mechanisms."
    ],
    metric: "BullMQ & Redis",
    metricLabel: "Atomic Sliding Window Rate Limiting",
    links: {
      live: "https://reachinbox-frontend-6ckk.onrender.com/login",
      github: "https://github.com/janu-19/ReachInbox"
    },
    image: "/images/reachinbox.jpg"
  }
];

export const finishThingsData = {
  title: "Ideas are easy. Finishing them is the fun part.",
  intro: "I like coming up with ideas, but what matters to me is taking them far enough to become real.",
  examples: [
    {
      title: "Macramazing",
      badge: "Idea → pitch → Top 10 finalist → real products → real stall",
      description: "Took a handcrafted small business concept through an entrepreneurship bootcamp, pitched to investors, crafted products by hand, and set up an actual physical stall."
    },
    {
      title: "TripNest",
      badge: "Idea → first serious resume-level project → complete full-stack application",
      description: "Built a production-grade full-stack platform complete with Stripe webhooks, Redis caching optimization (315ms → 48ms), and real-time Socket.io communication."
    },
    {
      title: "DSA & Problem Solving",
      badge: "Started as something difficult → kept practicing → now 500+ coding problems solved",
      description: "Turned algorithmic problem solving from an intimidating hurdle into a daily discipline on LeetCode with 500+ questions conquered."
    }
  ]
};

export const macramazingStory = {
  title: "Built with my hands, too.",
  subtitle: "Macramazing",
  story: "Macramazing started as a handcrafted macramé small-business idea focused on creating products by hand while creating an opportunity for women to participate and earn through their craft.",
  bootcamp: "Participated in an entrepreneurship bootcamp with ~50 participants, reached the Top 10, and pitched in front of judges and investors. Most importantly, I didn't stop at the pitch — I created the products and set up a stall to sell them.",
  steps: [
    { number: "01", label: "Idea", desc: "Handcrafted macramé & women empowerment" },
    { number: "02", label: "Pitch", desc: "Presented business model to judges & investors" },
    { number: "03", label: "Top 10", desc: "Selected among top 10 from 50+ bootcamp teams" },
    { number: "04", label: "Build", desc: "Crafted physical products with intricate designs" },
    { number: "05", label: "Stall", desc: "Launched live sales stall to connect with real buyers" }
  ]
};

export const hackathonStory = {
  title: "Another idea I took seriously.",
  achievement: "Top 6 teams out of 500+ participants",
  context: "Microsoft Student Community Hackathon",
  project: "Emergency Safety Routing System",
  description: "A safety-focused routing system that uses live inputs such as reported crime, street-light availability and population information to determine whether a route is relatively safer.",
  architecture: [
    { label: "Problem", desc: "Unsafe urban navigation at night" },
    { label: "Data", desc: "Crime data, streetlight map, population density" },
    { label: "Routing", desc: "Weighted graph algorithm assessing safety factors" },
    { label: "Safer Path", desc: "Optimal, crime-averse route suggestion" }
  ]
};

export const experienceData = [
  {
    title: "Frontend Developer Intern",
    company: "Purple Technologies",
    period: "June 2025 – July 2025",
    bullets: [
      "Created reusable React components for an AI prompt navigation platform.",
      "Designed responsive interfaces supporting multiple user workflows and screen sizes.",
      "Collaborated with a development team to integrate frontend modules with backend APIs.",
      "Improved application loading performance by 30% using lazy loading and code splitting."
    ],
    reflection: "My first experience building software in a professional environment taught me how different real product development feels from building alone."
  }
];

export const skillsCategorized = [
  {
    category: "Build",
    items: ["JavaScript", "React", "Node.js", "Express", "FastAPI", "REST APIs"]
  },
  {
    category: "Data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"]
  },
  {
    category: "AI",
    items: ["Python", "XGBoost", "OpenCV", "MediaPipe", "LLM APIs"]
  },
  {
    category: "Systems",
    items: ["WebSockets", "WebRTC", "BullMQ", "Authentication", "Caching"]
  },
  {
    category: "Foundations",
    items: ["Data Structures & Algorithms", "OOP", "DBMS"]
  },
  {
    category: "Exploring",
    items: ["Cloud", "AWS", "System Design"]
  }
];

export const labExperiments = [
  {
    title: "AI for Everyday Life",
    description: "Building an AI-powered assistant that solves micro-friction problems I experience myself in daily workflows.",
    status: "Exploring",
    statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
  },
  {
    title: "Weather × Outfit",
    description: "Inspired by OutfitIQ: intelligent clothing recommendation combining hyper-local weather conditions, wardrobe items, and personal taste.",
    status: "Building",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
  },
  {
    title: "Personal AI Companion",
    description: "An AI tool designed around practical everyday assistance, context preservation, and personal task organization.",
    status: "Thinking",
    statusColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
  },
  {
    title: "Cloud Infrastructure Experiments",
    description: "Hands-on micro-projects exploring AWS deployment patterns, serverless triggers, and cloud optimization.",
    status: "Shipped",
    statusColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
  }
];

export const beyondCodeData = [
  { title: "Crafts 🧶", desc: "Macramé and handmade projects." },
  { title: "Spanish 🇪🇸", desc: "Currently learning Spanish." },
  { title: "Reading 📖", desc: "Fiction is one of her favorite ways to disconnect." },
  { title: "Exploring ✈️", desc: "Europe is high on the travel list." },
  { title: "Dog Time 🐶", desc: "Playing with her dog is an instant mood reset." },
  { title: "Comfort Mode 🍿", desc: "Netflix + snacks." },
  { title: "Style 👗", desc: "Likes wearing clothes she genuinely loves." },
  { title: "Quiet Moments 🌿", desc: "Calm walks and spending time alone." }
];

export const currentlyWidgets = {
  reading: "Fiction",
  watching: "The Summer I Turned Pretty / Bridgerton",
  listening: "Ali Abdaal / study music",
  learning: "Spanish",
  moodReset: "Time with my dog"
};

export const achievementsData = [
  { count: "500+", label: "LeetCode Problems Conquered" },
  { count: "Top 10", label: "Entrepreneurship Bootcamp — Macramazing" },
  { count: "Top 6 / 500+", label: "Microsoft Student Community Hackathon" },
  { count: "8.75 / 10", label: "Current B.Tech CGPA (SRM AP)" }
];
