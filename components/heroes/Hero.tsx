import Lottie from "react-lottie";
import { motion, Variants } from "framer-motion";

import styles from "./Hero.module.scss";
import scrollingPurpleClouds from "../../public/lotties/scrolling-purple-clouds.json";

const scrollingPurpleCloudOptions = {
  loop: true,
  autoplay: true,
  animationData: scrollingPurpleClouds,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const titleAnimationVariant: Variants = {
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { x: -200, opacity: 0 },
};

type HeroProps = { title: string; subtitle?: string; smallTitle?: boolean };

const Hero = ({ title, subtitle, smallTitle }: HeroProps) => (
  <motion.div initial="hidden" animate="visible" className={styles.hero}>
    <div className={styles.lottieContainer}>
      <Lottie {...{ options: scrollingPurpleCloudOptions }} />
    </div>
    <div className={styles.heroContent}>
      <motion.h1
        variants={titleAnimationVariant}
        className={[styles.heroTitle, smallTitle && styles.smallTitle].join(
          " "
        )}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.h3 variants={titleAnimationVariant}>{subtitle}</motion.h3>
      )}
    </div>
  </motion.div>
);

export default Hero;
