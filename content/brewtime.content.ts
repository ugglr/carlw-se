import splashScreen from "../public/images/brewtime-app/splash-screen.png";
import homeScreen from "../public/images/brewtime-app/home-screen.png";
import beansScreen from "../public/images/brewtime-app/beans-screen.png";

const brewtimeContent = {
  organisationName: "Brewtime.",
  websiteUrl: "https://brewtime.app",
  shortDescription:
    "Real estate startup. I work on all parts of the stack, web, app, backend and other services.",
  tags: [
    "Fullstack",
    "TypeScript",
    "React",
    "React Native",
    "Express.js",
    "Nest.js",
    "GraphQL",
    "Postgresql",
    "MongoDB",
  ],
  app: {
    splashScreen,
    images: [splashScreen, homeScreen, beansScreen],
  },
};

export default brewtimeContent;
