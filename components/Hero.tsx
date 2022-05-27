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

type HeroProps = { title: string; smallTitle?: boolean };

const Hero = ({ title, smallTitle }: HeroProps) => (
  <div className={styles.hero}>
    <div className={styles.lottieContainer}>
      <Lottie {...{ options: scrollingPurpleCloudOptions }} />
    </div>
    <div className={styles.heroContent}>
      <h1
        className={[styles.heroTitle, smallTitle && styles.smallTitle].join(
          " "
        )}
      >
        {title}
      </h1>
    </div>
  </div>
);

export default Hero;
