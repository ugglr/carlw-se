import Image from "next/image";
import Link from "next/link";
import Accordion, { AccordionProps } from "./Accordion";
import Button from "./Button";
import styles from "./ProjectCard.module.scss";
import Tag from "./Tag";

type ProjectCardProps = {
  title: string;
  tags: string[];
  description?: string;
  thumbnailSrc: string;
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
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.tagContainer}>
            {tags?.length > 0 &&
              tags.map((tag) => <Tag key={tag} {...{ tag }} />)}
          </div>
          <div className={styles.descriptionContainer}>
            {description && <p>{description}</p>}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt={thumbnailSrc}
            src={thumbnailSrc}
            height={350}
            width={162}
          />
        </div>
      </div>

      {websiteUrl && (
        <a href={websiteUrl} target="_blank" rel="noreferrer">
          <Button title="Website" />
        </a>
      )}
      {internalUrl && (
        <Link href={internalUrl} passHref>
          <Button title="See more" />
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
