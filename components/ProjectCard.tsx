import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "./Button";
import styles from "./ProjectCard.module.scss";
import Tag from "./Tag";
import { motion, Variants } from "framer-motion";

const tagContainerVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const tagVariant: Variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -100 },
};

type ProjectCardProps = {
  title: string;
  tags: string[];
  description?: string;
  thumbnailSrc: StaticImageData;
  websiteUrl: string;
  internalUrl: string;
};
const ProjectCard = ({
  title,
  tags,
  description,
  thumbnailSrc,
  websiteUrl,
  internalUrl,
}: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.topContainer}>
        <div className={styles.topLeftContainer}>
          <h3 className={styles.title}>{title}</h3>
          <motion.div
            className={styles.tagContainer}
            initial="hidden"
            animate="visible"
            variants={tagContainerVariant}
          >
            {tags?.length > 0 &&
              tags.map((tag) => (
                <motion.div key={tag} variants={tagVariant}>
                  <Tag {...{ tag }} />
                </motion.div>
              ))}
          </motion.div>
          <div className={styles.descriptionContainer}>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image alt={title} src={thumbnailSrc} />
        </div>
      </div>

      {websiteUrl && (
        <a href={websiteUrl} target="_blank" rel="noreferrer">
          <Button title="Website" />
        </a>
      )}
      {internalUrl && (
        <div className={styles.buttonWrapper}>
          <Link href={internalUrl} passHref scroll={false}>
            <a>
              <Button title="See more" variant="primary" />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
