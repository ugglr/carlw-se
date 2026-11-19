export const email = "carl.igelstrom@gmail.com";
export const legalName = "Igelström, Carl";

export const links = {
  remoet: "https://www.remoet.dev",
  remoetMcp: "https://www.remoet.dev/mcp",
  crabstack: "https://crabstack.dev",
  crabstackDocs: "https://crabstack.dev/docs",
  github: "https://github.com/ugglr",
  linkedin: "https://www.linkedin.com/in/igelstrom/",
};

export const mailto = (subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export type Shot = {
  src: string;
  alt: string;
  product: string;
  page: string;
};

// Screenshots of the live products, taken 2026-11-19 at 1440 x 900.
export const shots: Shot[] = [
  {
    src: "/images/remoet-home.jpg",
    alt: "Remoet's front page: every new tech job from the companies you want to work for, next to a feed of companies it just checked",
    product: "Remoet",
    page: "Front page",
  },
  {
    src: "/images/crabstack-home.jpg",
    alt: "CrabStack's front page: the full-stack template your AI agents can build on, $199 once",
    product: "CrabStack",
    page: "Front page",
  },
  {
    src: "/images/remoet-jobs.jpg",
    alt: "Remoet's job search, open tech roles straight from the source, with filters for location, remote policy and technology",
    product: "Remoet",
    page: "Jobs",
  },
  {
    src: "/images/remoet-market.jpg",
    alt: "Remoet's market page: 26,829 active roles across 1,258 companies, split by remote work policy",
    product: "Remoet",
    page: "Market data",
  },
  {
    src: "/images/crabstack-pricing.jpg",
    alt: "CrabStack pricing: one price, paid once, $199 personal and $349 team",
    product: "CrabStack",
    page: "Pricing",
  },
  {
    src: "/images/remoet-mcp.jpg",
    alt: "Remoet's MCP server page: a job search server your AI agent runs for you",
    product: "Remoet",
    page: "MCP server",
  },
];

export const jobs = [
  { name: "Norban", year: "2020" },
  { name: "Tiket.com", year: "2019" },
  { name: "Mutian Robotics", year: "2019" },
  { name: "Axis Communications", year: "2015" },
];

export const studies = [
  { name: "Lund University, MSc Electrical Engineering", year: "2015" },
  { name: "Zhejiang University, Mandarin", year: "2013" },
];
