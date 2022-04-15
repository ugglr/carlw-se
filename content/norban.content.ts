import splashScreen from "../public/images/norban-app/splash-screen.png";
import homeScreen from "../public/images/norban-app/home-screen.png";
import profileScreen from "../public/images/norban-app/profile-screen.png";

const norbanContent = {
  organisationName: "Norban.",
  websiteUrl: "https://norban.se",
  appstoreUrl: "https://apps.apple.com/us/app/norban/id1469364245",
  playstoreUrl:
    "https://play.google.com/store/apps/details?id=se.norban.norbanapp",
  shortDescription:
    "Real estate startup. I work on all parts of the stack, web, app, backend and other services.",
  longDescription:
    "Startup trying to distrupt the real estate market in Sweden by offering a better realtor service with transparent and easy pricing.",
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
    images: [splashScreen, homeScreen, profileScreen],
  },
};

export default norbanContent;
