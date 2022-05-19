import splashScreen from "../public/images/brewtime-app/splash-screen.png";
import homeScreen from "../public/images/brewtime-app/home-screen.png";
import beansScreen from "../public/images/brewtime-app/beans-screen.png";

const brewtimeContent = {
  organisationName: "Brewtime.",
  websiteUrl: "https://brewtime.app",
  appstoreUrl:
    "https://apps.apple.com/us/app/brewtime-track-your-coffee/id1617402319",
  shortDescription:
    "I've built a coffee brewing tracking app, available now on the app store.",
  tags: [
    "TypeScript",
    "React",
    "React Native",
    "Nest.js",
    "GraphQL",
    "MongoDB",
    "Heroku",
  ],
  app: {
    splashScreen,
    images: [splashScreen, homeScreen, beansScreen],
  },
  longDescription:
    "Brewtime is a side project I started a while back. It's a coffee brew tracking app for weird coffee people.",
};

export default brewtimeContent;
