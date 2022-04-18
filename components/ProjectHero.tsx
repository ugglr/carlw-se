import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import styles from "./ProjectHero.module.scss";

import appstoreBadge from "../public/svgs/appStoreBadge.svg";
import playstoreBadge from "../public/svgs/playStoreBadge.svg";

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
  <div className={styles.projectHero}>
    <div className={styles.leftContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <a href={websiteUrl} target="_blank" rel="noreferrer">
        <Button {...{ title: "Website", variant: "primary" }} />
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
        <div key={`${i}`} className={styles.appImageContainer}>
          <Image src={img} alt={title} />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectHero;
