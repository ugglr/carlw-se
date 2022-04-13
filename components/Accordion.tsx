import { useState } from "react";
import styles from "./Accordion.module.scss";

export type AccordionProps = {
  title: string;
  paragraph: string;
};

const Accordion = ({ title, paragraph }: AccordionProps) => {
  const [showparagraph, setShowparagraph] = useState(false);
  return (
    <div className={styles.accordion}>
      <div
        className={styles.titleContainer}
        onClick={() => setShowparagraph(!showparagraph)}
      >
        <div className={styles.directionIndicator}>{`${
          showparagraph ? "X" : ">"
        }`}</div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {showparagraph && <p>{paragraph}</p>}
    </div>
  );
};

export default Accordion;
