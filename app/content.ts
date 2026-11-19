export const email = "carl.igelstrom@gmail.com";
export const legalName = "Igelström, Carl";

export const links = {
  github: "https://github.com/ugglr",
  linkedin: "https://www.linkedin.com/in/igelstrom/",
};

export const mailto = (subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

// Screenshots of the live sites, taken 2026-11-19 at 1440 x 860.
export const products = [
  {
    name: "Remoet",
    url: "https://www.remoet.dev",
    host: "remoet.dev",
    line: "Every new tech job from the companies you want to work for, straight from their own careers pages.",
    image: "/images/remoet-home.jpg",
    alt: "Remoet's front page: every new tech job from the companies you want to work for, next to a feed of companies it just checked",
  },
  {
    name: "CrabStack",
    url: "https://crabstack.dev",
    host: "crabstack.dev",
    line: "The full-stack template your AI agents can build on. $199 once, full source.",
    image: "/images/crabstack-home.jpg",
    alt: "CrabStack's front page: the full-stack template your AI agents can build on, $199 once",
  },
];
