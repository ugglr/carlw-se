import Image from "next/image";
import norbanCompanyContent from "../content/companies/norban";
import Accordion, { AccordionProps } from "./Accordion";
import styles from "./ProjectCard.module.scss";
import Tag from "./Tag";

type ProjectCardProps = {
  title: string;
  tags: string[];
  accordions?: AccordionProps[];
  thumbnailSrc: string;
};
const ProjectCard = ({
  title,
  tags,
  accordions,
  thumbnailSrc,
}: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tagContainer}>
          {tags?.length > 0 &&
            tags.map((tag) => <Tag key={tag} {...{ tag }} />)}
        </div>
        {accordions &&
          accordions?.length > 0 &&
          accordions.map(({ title, paragraph }) => (
            <Accordion key={title} {...{ title, paragraph }} />
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
