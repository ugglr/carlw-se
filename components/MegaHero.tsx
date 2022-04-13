import styles from "./MegaHero.module.scss";

type HeroProps = {
  miniTitle: string;
  megaLine1: string;
  megaLine2: string;
  description: string;
  subtitle: string;
  miniBottom: string;
};

const HomeHero = ({
  miniTitle,
  megaLine1,
  megaLine2,
  description,
  subtitle,
  miniBottom,
}: HeroProps) => (
  <div className={styles.hero}>
    <h2>{miniTitle}</h2>
    <h1 className={styles.heroTitle}>{megaLine1}</h1>
    <h1 className={styles.heroTitle}>{megaLine2}</h1>
    <h2>{description}</h2>
    <p className={styles.locationText}>{subtitle}</p>
    <h1>{miniBottom}</h1>
  </div>
);

export default HomeHero;
