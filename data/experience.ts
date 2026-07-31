import type { TimelineItem } from "@/types/experience";

export const experience: TimelineItem[] = [
  {
    kind: "internship",
    role: "Software Engineering Intern",
    org: "Nimbus Cloud Labs",
    period: "May 2026 — Present",
    description:
      "Working on the developer experience team: building internal tooling and contributing to the Kubernetes-based platform that runs customer workloads.",
    highlights: [
      "Shipping an internal CLI that scaffolds services with batteries-included CI, monitoring, and rollout config.",
      "Cutting CI feedback time by caching build artifacts across pipelines.",
      "Writing runbooks for common incident paths and pairing them with dashboards.",
    ],
  },
  {
    kind: "achievement",
    role: "Winner — Cloud & AI Hackathon",
    org: "University Innovation Cell",
    period: "Mar 2026",
    description:
      "Led a team of four to build an agentic customer-support assistant grounded on internal docs; demoed a live deployment to judges within 36 hours.",
  },
  {
    kind: "certification",
    role: "Certified Kubernetes Administrator",
    org: "CNCF · The Linux Foundation",
    period: "Dec 2025",
    description:
      "Validated hands-on administration of clusters — workloads, networking, storage, and troubleshooting under time pressure.",
    url: "https://www.credly.com/",
  },
  {
    kind: "certification",
    role: "AWS Certified Solutions Architect — Associate",
    org: "Amazon Web Services",
    period: "Aug 2025",
    description:
      "Validated designing scalable, cost-effective, and reliable systems on AWS.",
    url: "https://www.credly.com/",
  },
  {
    kind: "internship",
    role: "Platform Engineering Intern",
    org: "DevSprint",
    period: "Jun 2025 — Aug 2025",
    description:
      "Owned small-to-medium projects on the platform team: provisioning environments and instrumenting release health.",
    highlights: [
      "Automating environment provisioning with Terraform, cutting spin-up time from days to minutes.",
      "Building a release-health dashboard that flags risky deployments before they ship.",
      "Reducing deploy feedback time by roughly 40% with faster, parallelized pipelines.",
    ],
  },
  {
    kind: "opensource",
    role: "Open Source Contributor",
    org: "GitHub — CNCF projects",
    period: "2025",
    description:
      "Contributing documentation, bug fixes, and small features to Kubernetes-adjacent tooling, and maintaining a couple of my own public projects.",
    highlights: [
      "Merged PRs improving Kubernetes documentation and a GitOps operator.",
      "Maintained Grain, my open-source e-ink dashboard, with a small but active user base.",
    ],
    url: "https://github.com/your-username",
  },
  {
    kind: "education",
    role: "B.Tech in Computer Science and Engineering",
    org: "University — expected graduation 2027",
    period: "2023 — 2027",
    description:
      "Focus on systems and applied ML. Teaching assistant for Data Structures; lead of the AI/Cloud student chapter.",
    highlights: [
      "Coursework in distributed systems, operating systems, networks, and machine learning.",
      "Teaching assistant — Data Structures: running labs, reviewing code, and holding office hours.",
      "Leading the AI/Cloud chapter — organizing workshops and hack nights.",
    ],
  },
];
