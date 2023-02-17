import landingScreen from "../public/images/remoet-app/landing-screen.png";
import listScreen from "../public/images/remoet-app/list-screen.png";
import companyScreen from "../public/images/remoet-app/company-screen.png";

const remoetContent = {
  organisationName: "remoet.dev",
  websiteUrl: "https://remoet.dev",
  shortDescription:
    "Helping engineers find a new remote job by providing them with the resources they need.",
  longDescription:
    "The conventional job board is dead, it's far superior to reach out directly and show initiative. Remoet features lists of remote companies, freelancing platforms and more, so that engineers can focus on applying instead of searching. ",
  tags: [
    "TypeScript",
    "React",
    "Next.js",
    "NextAuth.js",
    "Nest.js",
    "GraphQL",
    "MongoDB",
    "Heroku",
  ],
  app: {
    landingScreen,
    images: [landingScreen, listScreen, companyScreen],
  },
};

export default remoetContent;
