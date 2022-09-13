import Image, { StaticImageData } from "next/image";
import styles from "./ExperienceCard.module.scss";

type Props = {
  logo: StaticImageData;
  company: string;
  from: string;
  to: string;
  position: string;
};

const ExperienceCard: React.FC<Props> = ({
  logo,
  company,
  from,
  to,
  position,
}) => (
  <div className={styles.container}>
    <div className={styles.logoContainer}>
      <Image className={styles.logoImg} alt={`${company} logo`} src={logo} />
    </div>
    <div key={company} className={styles.card}>
      <div className={styles.topContainer}>
        <h3 className={styles.title}>{company}</h3>
        <div className={styles.dateContainer}>
          <p className={styles.dateText}>
            {from} - {to}
          </p>
        </div>
      </div>

      <p className={styles.positionText}>{position}</p>
    </div>
  </div>
);

export default ExperienceCard;
