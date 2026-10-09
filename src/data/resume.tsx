import { Icons } from "@/components/icons";
import { HomeIcon, BookOpenIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  name: "Manav Panchal",
  initials: "MP",
  url: "https://dub.sh/IsNfI4r",
  location: "Ahmedabad, India",
  locationLink: "https://www.google.com/maps/place/Ahmedabad/",
  description:
    "Full Stack Software Engineer building AI agents, developer tools, and backend systems. Interested in distributed systems and making software reliable at scale.",
  summary:
    "I'm a Computer Engineering graduate from Silver Oak University in Ahmedabad. I enjoy building products end-to-end, but I'm especially interested in what happens behind the UI: orchestration, backend architecture, reliability, and deployment. I've worked on consent-management systems and fintech products, and lately I've been building [Lovable-v0](https://github.com/Manav2209/lovable-v0), a prompt-to-app coding agent with isolated Kubernetes sandboxes, and [AI Interviewer](https://github.com/Manav2209/ai-interviewer), a repository-aware voice interviewer. I like learning by building real systems, finding their failure modes, and improving them. You can explore more of my [work here](https://dub.sh/IsNfI4r).",
  avatarUrl: "https://github.com/Manav2209.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: BookOpenIcon, label: "Writing" },
  ],
  contact: {
    // Add your preferred public contact details before publishing.
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Manav2209",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Manav__Panchal",
        icon: Icons.x,
        navbar: true,
      },
      Portfolio: {
        name: "Proof of Work",
        url: "https://dub.sh/IsNfI4r",
        icon: Icons.globe,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Freelance",
      href: "https://github.com/Manav2209",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "",
      start: "Aug 2026",
      end: "Present",
      description:
        "Working independently on client projects, building web applications and software solutions across the frontend and backend.",
    },
    {
      company: "100xDevs",
      href: "https://100xdevs.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "", // Add a verified logo to /public if available.
      start: "Jan 2026",
      end: "Jul 2026",
      description:
        "Worked as a Software Engineer at 100xDevs, contributing to software development and engineering projects. Specific technical responsibilities can be added once confirmed.",
    },
    {
      company: "Twigg",
      href: "https://github.com/Manav2209/twigg",
      badges: [],
      location: "India",
      title: "Software Engineer / Intern",
      logoUrl: "", // Add a Twigg logo in /public if available.
      start: "Aug 2025",
      end: "Nov 2025",
      description:
        "Worked on a wealth-management MVP and responsive marketing website using Next.js, Node.js, Prisma, and PostgreSQL. Built onboarding and waitlist flows, integrated Account Aggregator consent journeys, and worked on financial data retrieval and transaction categorization workflows.",
    },
    {
      company: "Clear Consent",
      href: "#",
      badges: [],
      location: "India",
      title: "Full Stack Developer Intern",
      logoUrl: "", // Add the company logo if available.
      start: "Dec 2024",
      end: "Apr 2025",
      description:
        "Built features for a consent-management platform focused on India's DPDP Act using Next.js, NestJS, PostgreSQL, and Prisma. Worked on role-based access control, OTP authentication, Google sign-in, consent workflows, audit logs, preference management, and webhooks.",
    },
  ],
  education: [
    {
      school: "Silver Oak University",
      href: "https://silveroakuni.ac.in/",
      degree: "B.Tech in Computer Engineering",
      logoUrl: "", // Add a university logo if available.
      start: "", // Add enrollment year if you want it displayed.
      end: "", // Add graduation year if you want it displayed.
    },
  ],
  projects: [
    {
      title: "Lovable-v0",
      href: "https://github.com/Manav2209/lovable-v0",
      dates: "2026",
      active: true,
      description:
        "A prompt-to-app builder that turns natural-language requests into editable React applications with live previews. Built an agent orchestration flow, Kubernetes-isolated project sandboxes, Redis-based messaging, code generation and execution tools, and an evaluation harness for agent reliability.",
      technologies: ["TypeScript", "React", "Vite", "Node.js", "Redis", "Kubernetes", "Docker", "PostgreSQL", "LangGraph", "Langfuse", "shadcn/ui"],
      links: [
        { type: "Source", href: "https://github.com/Manav2209/lovable-v0", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Interviewer",
      href: "https://github.com/Manav2209/ai-interviewer",
      dates: "2026",
      active: true,
      description:
        "A repository-aware voice interviewing system that generates technical questions from a candidate's GitHub projects. Features a durable interview orchestrator, live speech pipeline, interruption handling, reconnect recovery, source-grounded code references, and post-interview evaluation.",
      technologies: ["TypeScript", "Next.js", "Node.js", "Hono", "PostgreSQL", "Prisma", "LiveKit", "Deepgram", "WebSockets", "AI"],
      links: [
        { type: "Source", href: "https://github.com/Manav2209/ai-interviewer", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ryde",
      href: "https://github.com/Manav2209/ryde",
      dates: "2025",
      active: false,
      description:
        "A full-stack ride-sharing mobile app built with Expo and React Native. Includes authentication with Clerk, ride booking flows, Google Maps integration, and PostgreSQL-backed data management.",
      technologies: ["React Native", "Expo", "TypeScript", "Clerk", "Google Maps", "PostgreSQL", "Prisma", "NativeWind"],
      links: [
        { type: "Source", href: "https://github.com/Manav2209/ryde", icon: <Icons.github className="size-3" /> },
        { type: "Demo", href: "https://drive.google.com/file/d/1z2UAYjR0nytKmzES5BmKeieWR4sJ4ihv/view?usp=drive_link", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Predix",
      href: "https://github.com/Manav2209/golang-predix",
      dates: "2025–2026",
      active: false,
      description:
        "A Go-based prediction-market backend exploring real-time updates, concurrency, event-driven design, and low-latency messaging using WebSockets, Redis, and PostgreSQL.",
      technologies: ["Go", "Redis", "WebSockets", "PostgreSQL"],
      links: [
        { type: "Source", href: "https://github.com/Manav2209/golang-predix", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Exness Clone",
      href: "https://github.com/Manav2209/exness",
      dates: "2025–2026",
      active: false,
      description:
        "A real-time trading platform inspired by Exness, built around low-latency market data streaming. Integrated Binance price feeds, WebSocket-based candlestick and order-book updates, Redis pub/sub, batched database writes, and historical OHLCV APIs using PostgreSQL and TimescaleDB.",
      technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "WebSockets", "Redis", "PostgreSQL", "TimescaleDB", "Docker", "Turborepo"],
      links: [
        { type: "Source", href: "https://github.com/Manav2209/exness", icon: <Icons.github className="size-3" /> },
        { type: "Demo", href: "https://drive.google.com/file/d/1TCOLTwsV2FcAa7A5B0qpGSJNd5SnpB-c/view?usp=drive_link", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    }
  ],
} as const;
