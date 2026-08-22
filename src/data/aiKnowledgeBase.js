import { personalInfo, projectsData, macramazingStory, hackathonStory, experienceData, skillsCategorized, currentlyData } from './portfolioData';

export function getAIAnswer(query) {
  const q = query.toLowerCase().trim();

  if (!q) {
    return "Hi there! I'm Janu's AI assistant. Ask me anything about her projects, experience, technical stack, or background!";
  }

  // Strongest / Top Project
  if (q.includes("strongest") || q.includes("best project") || q.includes("top project") || q.includes("main project")) {
    return `Janu's flagship project is **TripNest**, a production-grade full-stack booking platform built with Node.js, Express, MongoDB, Redis, Socket.io, and Stripe. She engineered server-side logic, integrated Stripe webhooks with MongoDB transactions, and slashed latency by ~85% (315ms → 48ms) using Redis caching and lean projections.\n\nHer top AI/ML project is **TrustGuard AI**, a real-time fraud intelligence system featuring XGBoost (98.3% ROC-AUC) and live WebSocket telemetry.`;
  }

  // TripNest
  if (q.includes("tripnest")) {
    const p = projectsData.find(pr => pr.id === "tripnest");
    return `**TripNest** (${p.subtitle}):\n${p.description}\n\n**Tech Stack:** ${p.tags.join(" · ")}\n\n**Key Highlights:**\n• ${p.highlights.join("\n• ")}\n\n**Performance:** Performance boost from 315ms → 48ms (~85% faster response time).\n\nLive Demo: ${p.links.live} | GitHub: ${p.links.github}`;
  }

  // TrustGuard AI
  if (q.includes("trustguard") || q.includes("fraud")) {
    const p = projectsData.find(pr => pr.id === "trustguard");
    return `**TrustGuard AI** (${p.subtitle}):\n${p.description}\n\n**Tech Stack:** ${p.tags.join(" · ")}\n\n**Key Highlights:**\n• ${p.highlights.join("\n• ")}\n\nMetrics: 98.3% ROC-AUC & 93.5% F1-score.\n\nGitHub: ${p.links.github}`;
  }

  // AI Gym Trainer
  if (q.includes("gym") || q.includes("fitness") || q.includes("pose")) {
    const p = projectsData.find(pr => pr.id === "aigym");
    return `**AI Gym Trainer** (${p.subtitle}):\n${p.description}\n\n**Tech Stack:** ${p.tags.join(" · ")}\n\n**Highlights:**\n• ${p.highlights.join("\n• ")}\n\nLive Demo: ${p.links.live} | GitHub: ${p.links.github}`;
  }

  // OutfitIQ
  if (q.includes("outfit") || q.includes("fashion")) {
    const p = projectsData.find(pr => pr.id === "outfitiq");
    return `**OutfitIQ** (${p.subtitle}):\n${p.description}\n\n**Tech Stack:** ${p.tags.join(" · ")}\n\n**Highlights:**\n• ${p.highlights.join("\n• ")}\n\nLive Demo: ${p.links.live} | GitHub: ${p.links.github}`;
  }

  // TradeMate
  if (q.includes("trade") || q.includes("trademate") || q.includes("stock")) {
    const p = projectsData.find(pr => pr.id === "trademate");
    return `**TradeMate** (${p.subtitle}):\n${p.description}\n\n**Tech Stack:** ${p.tags.join(" · ")}\n\n**Highlights:**\n• ${p.highlights.join("\n• ")}\n\nLive Demo: ${p.links.live} | GitHub: ${p.links.github}`;
  }

  // ReachInbox
  if (q.includes("reachinbox") || q.includes("email") || q.includes("bullmq")) {
    const p = projectsData.find(pr => pr.id === "reachinbox");
    return `**ReachInbox** (${p.subtitle}):\n${p.description}\n\n**Tech Stack:** ${p.tags.join(" · ")}\n\n**Highlights:**\n• ${p.highlights.join("\n• ")}\n\nLive Demo: ${p.links.live} | GitHub: ${p.links.github}`;
  }

  // AI Projects
  if (q.includes("ai project") || q.includes("machine learning") || q.includes("ai")) {
    return `Janu has built several AI-powered projects:\n\n1. **TrustGuard AI**: Real-time fraud detection using XGBoost (98.3% ROC-AUC), WebSockets, and Gemini API for fraud reasoning.\n2. **AI Gym Trainer**: Pose tracking and posture feedback using MediaPipe, OpenCV, WebRTC, and Grok API voice coaching.\n3. **OutfitIQ**: Fashion recommendation platform using color and texture visual analysis.\n4. **The Lab Experiments**: AI for everyday life & Personal AI companion.`;
  }

  // Technologies / Skills
  if (q.includes("tech") || q.includes("skill") || q.includes("stack") || q.includes("languages") || q.includes("tools")) {
    const catText = skillsCategorized.map(sc => `**${sc.category}**: ${sc.items.join(" · ")}`).join("\n");
    return `Here is Janu's technical toolkit categorized by what she does with it:\n\n${catText}\n\nShe has also solved **500+ problems** on LeetCode focusing on Data Structures & Algorithms.`;
  }

  // Currently learning / exploring
  if (q.includes("learning") || q.includes("exploring") || q.includes("currently")) {
    return `Currently, Janu is actively:\n\n• **Building:** ${currentlyData.building}\n• **Learning:** ${currentlyData.learning}\n• **Exploring:** ${currentlyData.exploring}\n• **Learning for fun:** ${currentlyData.funLearning} (Spanish!)\n• **Reading:** ${currentlyData.reading} fiction\n• **Career Focus:** ${currentlyData.careerFocus}`;
  }

  // Career Goal / SDE Ambition
  if (q.includes("goal") || q.includes("ambition") || q.includes("developer") || q.includes("sde") || q.includes("future") || q.includes("want to become")) {
    return `Janu's career ambition:\n\n"${personalInfo.careerGoal}"\n\nShe is passionate about turning ideas into complete, finished products that people can actually use.`;
  }

  // Macramazing
  if (q.includes("macramazing") || q.includes("craft") || q.includes("business") || q.includes("bootcamp")) {
    return `**Macramazing Story:**\n${macramazingStory.story}\n\nJanu participated in an entrepreneurship bootcamp with ~50 teams, reached the **Top 10**, pitched to judges/investors, and actually hand-crafted products and set up a physical sales stall!\n\nJourney: Idea → Pitch → Top 10 → Build → Stall.`;
  }

  // Hackathon
  if (q.includes("hackathon") || q.includes("microsoft") || q.includes("safety")) {
    return `**Microsoft Student Community Hackathon:**\nJanu's team placed in the **Top 6 out of 500+ participants** with their **Emergency Safety Routing System**, which routes users safely using live crime reports, street lighting, and population density data.`;
  }

  // Experience / Internship
  if (q.includes("experience") || q.includes("internship") || q.includes("purple") || q.includes("job") || q.includes("work")) {
    const exp = experienceData[0];
    return `**${exp.title}** at **${exp.company}** (${exp.period}):\n\n• ${exp.bullets.join("\n• ")}\n\nReflection: "${exp.reflection}"`;
  }

  // Education / College / CGPA
  if (q.includes("education") || q.includes("college") || q.includes("srm") || q.includes("cgpa") || q.includes("degree") || q.includes("gpa")) {
    const ed = personalInfo.education;
    return `**${ed.degree}**\n**${ed.institution}**\nPeriod: ${ed.period}\nCGPA: **${ed.cgpa}**`;
  }

  // Contact
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("linkedin") || q.includes("phone")) {
    return `You can reach out to Janu via:\n\n• **Email:** [${personalInfo.socials.email}](mailto:${personalInfo.socials.email})\n• **LinkedIn:** [linkedin.com/in/jahnavimanchipalli](${personalInfo.socials.linkedin})\n• **GitHub:** [github.com/janu-19](${personalInfo.socials.github})\n• **LeetCode:** [leetcode.com/u/Jahnavi_Manchipalli](${personalInfo.socials.leetcode})\n• **Phone:** ${personalInfo.socials.phone}`;
  }

  // General fallback
  return `Janu is a B.Tech CSE student at SRM University-AP (CGPA 8.75) who loves building software people can actually use. Her major projects include TripNest, TrustGuard AI, and AI Gym Trainer. You can email her at ${personalInfo.socials.email} or ask me specific questions about her projects, skills, internship, or Macramazing initiative!`;
}
