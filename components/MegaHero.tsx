import Lottie from "react-lottie";
import Button from "./Button";

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
  <div className={styles.hero}>
    <div className={styles.heroContent}>
      <h2 className={styles.miniTitle}>{miniTitle}</h2>
      <h1 className={styles.heroTitle}>{megaLine1}</h1>
      <h1 className={styles.heroTitle}>{megaLine2}</h1>
      <h2 className={styles.heroSubtitle}>{description}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.buttonContainer}>
        <a href={ctaButtonLink}>
          <Button {...{ title: ctaButtonLabel, variant: "primary" }} />
        </a>
      </div>
      <h1>{miniBottom}</h1>
    </div>

    <div className={styles.lottieContainer}>
      <Lottie {...{ options: scrollingPurpleCloudOptions }} />
    </div>
  </div>
);

export default HomeHero;
