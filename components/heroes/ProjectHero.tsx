import Image, { StaticImageData } from "next/image";
import Button from "../Button";
import styles from "./ProjectHero.module.scss";

import appstoreBadge from "../../public/svgs/appStoreBadge.svg";
import playstoreBadge from "../../public/svgs/playStoreBadge.svg";
import { motion, Variants } from "framer-motion";

const containerAnimationVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const titleAnimationVariant: Variants = {
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { x: -200, opacity: 0 },
};
const imageAnimationVariant: Variants = {
  visible: { y: 0, x: 0, opacity: 1, transition: { duration: 1.2 } },
  hidden: { y: -200, x: -20, opacity: 0 },
};

type ProjectHeroProps = {
  title: string;
  description: string;
  websiteUrl: string;
  appstoreUrl?: string;
  playstoreUrl?: string;
  images: StaticImageData[];
};

const badgeHeight = 60;
const badgeWidth = 202;

const ProjectHero = ({
  title,
  images,
  description,
  websiteUrl,
  appstoreUrl,
  playstoreUrl,
}: ProjectHeroProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerAnimationVariant}
    className={styles.projectHero}
  >
    <div className={styles.leftContainer}>
      <motion.h1 variants={titleAnimationVariant} className={styles.title}>
        {title}
      </motion.h1>
      <motion.p variants={titleAnimationVariant} className={styles.description}>
        {description}
      </motion.p>
      <a href={websiteUrl} target="_blank" rel="noreferrer">
        <Button {...{ title: "Website", variant: "black" }} />
      </a>
      <div className={styles.badgeContainer}>
        {appstoreUrl && (
          <a
            href={appstoreUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.leftBadgeWrapper}
          >
            <Image
              alt="app store badge"
              src={appstoreBadge}
              width={badgeWidth}
              height={badgeHeight}
            />
          </a>
        )}
        {playstoreUrl && (
          <a href={playstoreUrl} target="_blank" rel="noreferrer">
            <Image
              alt="app store badge"
              src={playstoreBadge}
              width={badgeWidth}
              height={badgeHeight}
            />
          </a>
        )}
      </div>
    </div>
    <div className={styles.imageRow}>
      {images.map((img: StaticImageData, i: Number) => (
        <motion.div
          variants={imageAnimationVariant}
          key={`${i}`}
          className={styles.appImageContainer}
        >
          <Image src={img} alt={title} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ProjectHero;
