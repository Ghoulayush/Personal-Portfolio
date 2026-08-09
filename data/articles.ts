import type { Article } from "@/types/article";

export const articles: Article[] = [
  {
    slug: "what-does-serverless-actually-mean",
    title: "What does \u201cserverless\u201d actually mean?",
    excerpt:
      "Lambda runs your code with no servers to manage \u2014 but \u201cserverless\u201d only clicks when you see it against the unmanaged-to-fully-managed spectrum AWS services actually live on.",
    date: "2026-04-25",
    readingMinutes: 2,
    tags: ["Serverless", "AWS", "Cloud"],
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "AWS Lambda is described in one line: a serverless compute service that runs code. You hand over a function, and AWS provisions whatever it needs to execute it \u2014 you never see the server it ran on. That description only makes sense once you understand what \u201cserverless\u201d really means, so let\u2019s back up.",
      },
      {
        type: "heading",
        text: "Serverless is a spectrum, not a switch",
      },
      {
        type: "paragraph",
        text: "Every AWS service sits somewhere on a spectrum of operational overhead \u2014 how much of the plumbing you own versus how much AWS handles. Three tiers cover almost everything.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Unmanaged. AWS takes care of the underlying physical infrastructure, but you\u2019re responsible for setting up, securing, and maintaining the operating system, network configurations, and applications on your instances. Classic EC2 lives here.",
          "Managed. AWS handles much of the operational overhead \u2014 patching, backups, failover \u2014 but you may still need to do some provisioning or configuration depending on the service. Think managed databases like RDS.",
          "Fully managed. The serverless end. There are no servers to provision or manage at all. The infrastructure is entirely AWS\u2019s problem, so you can focus on writing and deploying code.",
        ],
      },
      {
        type: "quote",
        text: "Serverless doesn\u2019t mean there are no servers. It means they stopped being your problem.",
      },
      {
        type: "heading",
        text: "Where Lambda fits",
      },
      {
        type: "paragraph",
        text: "Lambda sits at the fully managed end. Instead of a capacity plan, you ship a function and AWS scales it on demand, charging you only for the execution time you actually use. You never touch an instance, a kernel, or a patch window \u2014 you write a function and the platform takes care of the rest. When the goal is shipping logic with as little infrastructure thinking as possible, that\u2019s the tier you reach for.",
      },
    ],
  },
  {
    slug: "genai-101",
    title: "genAI 101 \u2014 a three-phase map from AI to ChatGPT",
    excerpt:
      "A short study-note map of the AI stack \u2014 artificial intelligence, machine learning, deep learning, and NLP \u2014 the first two phases of a three-phase path to large language models.",
    date: "2026-08-09",
    readingMinutes: 1,
    tags: ["AI", "Machine Learning", "Deep Learning", "NLP", "GenAI"],
    body: [
      {
        type: "heading",
        text: "The three-phase map",
      },
      {
        type: "list",
        items: [
          "Phase 1: AI, Machine Learning, Deep Learning",
          "Phase 2: NLP, genAI",
          "Phase 3: Large Language Models, ChatGPT",
        ],
      },
      {
        type: "heading",
        text: "Phase 1 \u2014 AI, machine learning, deep learning",
      },
      {
        type: "paragraph",
        text: "Artificial Intelligence (AI): a field of study that involves developing methods and techniques to solve problems.",
      },
      {
        type: "paragraph",
        text: "Machine Learning (ML): a field of study that involves creating trained models to solve problems.",
      },
      {
        type: "list",
        items: [
          "Trained Model: a method, algorithm or technology that is developed by analyzing patterns in data.",
        ],
      },
      {
        type: "paragraph",
        text: "Deep Learning (DL): a field of study that involves creating trained neural network models to solve problems.",
      },
      {
        type: "list",
        items: ["Neural Network: an interconnection of neurons."],
      },
      {
        type: "heading",
        text: "Phase 2 \u2014 NLP and generative AI",
      },
      {
        type: "paragraph",
        text: "Natural Language Processing (NLP): a field of study that involves creating methods and techniques to solve natural language problems.",
      },
    ],
  },
];
