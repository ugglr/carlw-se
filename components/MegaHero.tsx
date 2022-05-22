import Lottie from "react-lottie";
import Button from "./Button";
import { motion } from "framer-motion";

import styles from "./MegaHero.module.scss";
import scrollingPurpleClouds from "../public/lotties/scrolling-purple-clouds.json";

const scrollingPurpleCloudOptions = {
  loop: true,
  autoplay: true,
  animationData: scrollingPurpleClouds,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

type HeroProps = {
  miniTitle: string;
  megaLine1: string;
  megaLine2: string;
  description: string;
  subtitle?: string;
  miniBottom: string;
};
const containerAnimationVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const topTextAnimationVariant = {
  visible: { y: 0, transition: { duration: 1 } },
  hidden: { y: -200 },
};
const textAnimationVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: -100 },
};

const HomeHero = ({
  miniTitle,
  megaLine1,
  megaLine2,
  description,
  subtitle,
  miniBottom,
  ctaButtonLabel,
  ctaButtonLink,
}: HeroProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerAnimationVariant}
    className={styles.hero}
  >
    <div className={styles.heroContent}>
      <motion.h2
        className={styles.miniTitle}
        variants={topTextAnimationVariant}
      >
        {miniTitle}
      </motion.h2>
      <motion.h1 variants={textAnimationVariant} className={styles.heroTitle}>
        {megaLine1}
      </motion.h1>
      <motion.h1 className={styles.heroTitle} variants={textAnimationVariant}>
        {megaLine2}
      </motion.h1>
      <motion.h2
        className={styles.heroSubtitle}
        variants={textAnimationVariant}
      >
        {description}
      </motion.h2>
      {subtitle && (
        <motion.p className={styles.subtitle} variants={textAnimationVariant}>
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className={styles.buttonContainer}
        animate={{ opacity: [0, 1], x: [200, 0] }}
        transition={{ duration: 1 }}
      >
        <a href={ctaButtonLink}>
          <Button {...{ title: ctaButtonLabel, variant: "primary" }} />
        </a>
      </motion.div>
      <motion.h1
        animate={{
          y: [-4, 8],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
      >
        {miniBottom}
      </motion.h1>
    </div>

    <div className={styles.lottieContainer}>
      <Lottie {...{ options: scrollingPurpleCloudOptions }} />
    </div>
  </motion.div>
);

export default HomeHero;
