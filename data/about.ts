import type { AboutConfig } from "@/types/about";
import { site } from "./site";

export const about: AboutConfig = {
  label: "About",
  heading: "From curiosity to craft.",
  story: [
    "I'm a fourth-year B.Tech Computer Science student at Graphic Era Deemed to be University, focused on agentic AI, cloud computing, Kubernetes, and DevOps.",
    "I learn hands-on: personal projects, data structures and algorithms, and machine learning and deep learning — always aiming for reliable, maintainable code.",
  ],
  note: "I'm still early enough in my career to be honest about how much I have to learn, and I'd rather build something small that works than something big that falls apart. The direction I'm moving in is toward reliable, maintainable systems at the intersection of AI and cloud.",
  principles: [
    "Understand the problem before reaching for a stack.",
    "Ship small things that work end to end.",
    "Read the docs, then the source.",
    "Prefer boring, reliable systems over clever ones.",
  ],
  now: {
    status: "B.Tech CSE · Graphic Era Deemed to be University · 7th semester",
    focus: site.focus,
    building: "Personal projects — indexed in the Projects section",
    learning: ["Deep learning", "Agentic AI patterns", "Kubernetes"],
  },
};
