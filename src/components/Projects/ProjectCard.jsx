import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {
  return (
    <div className={styles.cards}>
      <div class={styles.card}>
        <div class={styles.img}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.img}
          />
        </div>
        <span>{title}</span>
        <p class={styles.info}>{description}</p>
        <div class={styles.share}></div>
        <div className={styles.buttons}>
          <a href={demo}>Demo</a>
          <a href={source}>Source</a>
        </div>
      </div>
    </div>
  );
};
