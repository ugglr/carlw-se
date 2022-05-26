import Lottie from "react-lottie";
import styles from "./Hero.module.scss";

import scrollingPurpleClouds from "../public/lotties/scrolling-purple-clouds.json";

const scrollingPurpleCloudOptions = {
  loop: true,
  autoplay: true,
  animationData: scrollingPurpleClouds,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

type HeroProps = { title: string };

const Hero = ({ title }: HeroProps) => (
  <div className={styles.hero}>
    <div className={styles.lottieContainer}>
      <Lottie {...{ options: scrollingPurpleCloudOptions }} />
    </div>
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>{title}</h1>
    </div>
  </div>
);

export default Hero;
