import Image, { StaticImageData } from "next/image";

import styles from "./EducationCard.module.scss";

export type Education = {
  logo: StaticImageData;
  title: string;
  subtitle: string;
  school: string;
  dateText: string;
};
const EducationCard: React.FC<Education> = ({
  logo,
  title,
  subtitle,
  school,
  dateText,
}) => (
  <div className={styles.card}>
    <div className={styles.logoContainer}>
      <Image className={styles.logo} alt={`${school} logo`} src={logo} />
    </div>
    <div className={styles.textContainer}>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <div className={styles.bottomContainer}>
        <h4 className={styles.label}>{school}</h4>
        <h4 className={styles.dateText}>{dateText}</h4>
      </div>
    </div>
  </div>
);

export default EducationCard;
