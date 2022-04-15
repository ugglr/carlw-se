import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "./Button";
import styles from "./ProjectCard.module.scss";
import Tag from "./Tag";

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
          <Link href={internalUrl} passHref>
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
