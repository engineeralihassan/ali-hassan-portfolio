import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  // Angular — text mark (no mono SVG available).
  angular: {
    title: "Angular",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Ng</span>,
  },
  // SCSS — text mark.
  scss: {
    title: "SCSS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Scss</span>,
  },
  // Bootstrap — text mark.
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Bs</span>,
  },
  // Angular Material — text mark.
  material: {
    title: "Angular Material",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Mat</span>,
  },
  // .NET — text mark.
  dotnet: {
    title: ".NET",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">.NET</span>,
  },
  // RxJS — text mark.
  rxjs: {
    title: "RxJS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Rx</span>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">H5</span>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">CSS</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "vstellar",
    category: "QA Automation Tool",
    title: "Vstellar Website",
    src: "/assets/vstellar-app-project.png",
    screenshots: [""],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://vstellar.io",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A QA automation and testing platform helping teams ship quality software faster.
          </TypographyP>
          <TypographyP className="font-mono ">
            Vstellar is a comprehensive QA automation tool that streamlines testing workflows
            for development teams. Built with modern web technologies, it provides an intuitive
            interface for managing test cases, running automated test suites, and generating
            detailed reports — enabling teams to catch bugs early and maintain high code quality
            across complex applications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Automated test execution with parallel running capabilities, visual regression
            testing, CI/CD pipeline integration, real-time test monitoring dashboards,
            and comprehensive reporting with actionable insights for development teams.
          </p>

          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built on Next.js with a modern React frontend, featuring server-side rendering
            for optimal performance and SEO. The platform handles complex test orchestration,
            result aggregation, and team collaboration features with a focus on developer
            experience and reliability.
          </p>
        </div>
      );
    },
  },
  {
    id: "troxis",
    category: "Marketing Agency Website",
    title: "Troxis",
    src: "/assets/troxis-website-project.png",
    screenshots: [""],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.sanity,
      ],
    },
    live: "https://troxis.co/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A high-performance marketing agency website built with Next.js for superior SEO and CMS-driven content.
          </TypographyP>
          <TypographyP className="font-mono ">
            Troxis is a modern marketing agency website built entirely in Next.js to leverage
            server-side rendering for optimal search engine visibility. All website content,
            including SEO settings (meta titles, descriptions, Open Graph tags), is managed
            through a headless CMS — giving the admin team full control over every page without
            touching code.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">CMS-Driven Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Every piece of content on the website — from hero sections and service descriptions
            to blog posts, team bios, and testimonials — is pulled dynamically from the CMS.
            This allows the marketing team to update copy, swap images, and publish new pages
            without developer involvement, keeping the site fresh and up-to-date.
          </p>

          <TypographyH3 className="my-4 mt-8">SEO &amp; Performance</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js SSR and static generation for blazing-fast page loads and
            excellent Core Web Vitals scores. SEO metadata, structured data, sitemaps, and
            Open Graph images are all configurable from the CMS admin panel, ensuring
            maximum discoverability across search engines and social platforms.
          </p>

          <TypographyH3 className="my-4 mt-8">Design &amp; Animations</TypographyH3>
          <p className="font-mono mb-2">
            Smooth scroll animations and page transitions powered by Framer Motion, responsive
            layouts with Tailwind CSS, and a polished, professional design that reflects the
            agency&apos;s brand identity across all devices.
          </p>
        </div>
      );
    },
  },
  {
    id: "geico",
    category: "Insurance Management Platform",
    title: "GEICO",
    src: "/assets/geico-project.png",
    screenshots: [""],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.scss,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.angular,
        PROJECT_SKILLS.material,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://www.geico.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A large-scale insurance management platform serving millions of customers and policyholders.
          </TypographyP>
          <TypographyP className="font-mono ">
            Worked as a Full Stack Software Engineer on GEICO&apos;s large-scale insurance platforms,
            contributing to customer-facing and administrative applications using Angular and Node.js.
            Delivered secure, scalable, and high-performance solutions supporting millions of users
            across policy management, payments, and account workflows.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Policy Management System</TypographyH3>
          <p className="font-mono mb-2">
            Developed and maintained insurance policy management systems, customer dashboards,
            and administrative portals. Built features for policy management, premium payments,
            policy status tracking, driver and vehicle management, and customer account workflows
            — all at enterprise scale with strict security and compliance requirements.
          </p>

          <TypographyH3 className="my-4 mt-8">Full Stack Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Implemented scalable frontend solutions with Angular, RxJS, and Angular Material,
            improving user experience, application performance, and maintainability across
            multiple platforms. Designed and integrated RESTful APIs and backend services using
            Node.js, Express, and PostgreSQL to support business-critical insurance processes
            and data management.
          </p>

          <TypographyH3 className="my-4 mt-8">Team &amp; Process</TypographyH3>
          <p className="font-mono mb-2">
            Collaborated with cross-functional teams in an Agile environment to deliver
            high-quality software solutions. Focused on system design, performance optimization,
            Docker-based containerization, and Redis caching to ensure reliability at scale
            for millions of customers and internal users.
          </p>
        </div>
      );
    },
  },
  {
    id: "workforce",
    category: "Enterprise Workforce Platform",
    title: "Workforce Management System",
    src: "/assets/work-force-managment-project.png",
    screenshots: [""],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.scss,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.angular,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.material,
        PROJECT_SKILLS.rxjs,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A large-scale enterprise workforce management platform with comprehensive HR modules.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built as an Angular Front-End Developer at Vertex Infotech Solutions, this enterprise-grade
            workforce management and FinTech platform serves organizations with a full suite of HR
            and operational modules. Developed responsive, scalable, and user-friendly web applications
            while collaborating with cross-functional teams to deliver business-critical features.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Core Modules</TypographyH3>
          <p className="font-mono mb-2">
            Developed and maintained key modules including Employee Profile, Timesheets,
            Expense Management, Ticketing System, Onboarding, Leave Management, Tax Management,
            and Employee Self-Service portals. Each module features complex business logic,
            role-based access control, and real-time data synchronization.
          </p>

          <TypographyH3 className="my-4 mt-8">Multi-Role Dashboards</TypographyH3>
          <p className="font-mono mb-2">
            Built dedicated dashboards for multiple user roles — employees, consultants, vendors,
            and administrators — each with tailored views, permissions, and workflows. Implemented
            comprehensive settings management, theme customization, and authentication flows
            with secure session handling.
          </p>

          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <p className="font-mono mb-2">
            Built reusable Angular components, services, and dynamic forms using Angular Material
            and Bootstrap to improve application scalability, maintainability, and development
            efficiency. Integrated frontend applications with RESTful APIs ensuring secure data
            handling, real-time updates, and seamless communication with backend systems.
          </p>
        </div>
      );
    },
  },
  {
    id: "fulcronix",
    category: "Marketing Agency Website",
    title: "Fulcronix",
    src: "/assets/fulcronix.png",
    screenshots: [""],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.sanity,
      ],
    },
    live: "https://fulcronix.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A modern marketing agency website with CMS-driven content and optimized SEO.
          </TypographyP>
          <TypographyP className="font-mono ">
            Fulcronix is a sleek marketing agency website built with Next.js for server-side
            rendering and superior search engine optimization. All content on the site — from
            service pages and case studies to blog posts and team information — is managed
            through a headless CMS, giving the admin team complete control without code changes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">CMS Content Management</TypographyH3>
          <p className="font-mono mb-2">
            The entire website content is dynamically managed from the CMS — hero sections,
            services, portfolio items, testimonials, and blog articles. The admin can update
            any page content, reorder sections, and publish changes instantly without requiring
            a developer or redeployment.
          </p>

          <TypographyH3 className="my-4 mt-8">SEO &amp; Performance</TypographyH3>
          <p className="font-mono mb-2">
            Leverages Next.js static generation and server-side rendering for fast page loads
            and excellent search engine rankings. All SEO settings — meta tags, Open Graph data,
            canonical URLs, and structured data — are configurable directly from the CMS,
            ensuring the marketing team can optimize discoverability without technical help.
          </p>

          <TypographyH3 className="my-4 mt-8">Design &amp; UX</TypographyH3>
          <p className="font-mono mb-2">
            Clean, professional design with smooth animations powered by Framer Motion,
            fully responsive layouts built with Tailwind CSS, and an intuitive user experience
            that showcases the agency&apos;s work and services effectively across all devices.
          </p>
        </div>
      );
    },
  },
  {
    id: "intervu",
    category: "AI Interview Platform",
    title: "Intervu.ai",
    src: "/assets/intervu.ai-project.png",
    screenshots: [""],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.scss,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.angular,
        PROJECT_SKILLS.material,
        PROJECT_SKILLS.rxjs,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://intervu.ai/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A large-scale AI-powered interview platform with fraud detection, video streaming, and multi-role access.
          </TypographyP>
          <TypographyP className="font-mono ">
            Intervu.ai is a comprehensive interview platform that leverages AI to conduct and
            evaluate technical interviews at scale. Worked as a remote resource contributing to
            a team-built application featuring real-time video streaming, AI-driven question
            generation, fraud detection through eye movement tracking and video quality analysis,
            and multi-language support.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">AI &amp; Fraud Detection</TypographyH3>
          <p className="font-mono mb-2">
            Advanced fraud detection capabilities including eye movement tracking to detect
            off-screen reading, video quality monitoring to flag suspicious behavior, and
            AI-powered answer evaluation. The system supports multiple languages for questions
            and responses, making it accessible for global hiring processes.
          </p>

          <TypographyH3 className="my-4 mt-8">Multi-Role Platform</TypographyH3>
          <p className="font-mono mb-2">
            Supports multiple user roles — candidates, interviewers, recruiters, organization
            admins, and super admins — each with dedicated dashboards and workflows. Features
            include interview scheduling, candidate data import/export, interview sharing across
            team members, and detailed analytics dashboards for hiring insights.
          </p>

          <TypographyH3 className="my-4 mt-8">Video &amp; Real-time Features</TypographyH3>
          <p className="font-mono mb-2">
            Real-time video streaming with recording capabilities, live interview monitoring,
            candidate assessment tools, and collaborative features allowing multiple stakeholders
            to review and evaluate interviews. The platform handles high-concurrency video
            sessions with reliable streaming infrastructure.
          </p>
        </div>
      );
    },
  },
];
export default projects;
