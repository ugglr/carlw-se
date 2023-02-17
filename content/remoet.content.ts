import splashScreen from "../public/images/norban-app/splash-screen.png";
import homeScreen from "../public/images/norban-app/home-screen.png";
import profileScreen from "../public/images/norban-app/profile-screen.png";

const remoetContent = {
  organisationName: "remoet.dev",
  websiteUrl: "https://remoet.dev",
  shortDescription:
    "Helping engineers find a new remote job by providing them the resources they need.",
  longDescription:
    "The conventional job board is dead, it's far superior to reach out directly and show initiative. Remoet features lists of remote companies, freelancing platforms and more, so that engineers can focus on applying instead of searching. ",
  tags: [
    "TypeScript",
    "React",
    "Next.js",
    "Nest.js",
    "GraphQL",
    "MongoDB",
    "Heroku",
  ],
  app: {
    splashScreen,
    images: [splashScreen, homeScreen, profileScreen],
  },
};

export default remoetContent;
