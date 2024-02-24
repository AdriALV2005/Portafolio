import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto quis odio numquam et quidem perspiciatis vel, necessitatibus corporis, harum id. Obcaecati molestias reiciendis unde eum minus, corrupti inventore minima.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto quis odio numquam et quidem perspiciatis vel, necessitatibus corporis, harum id. Obcaecati molestias reiciendis unde eum minus, corrupti inventore minima.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto quis odio numquam et quidem perspiciatis vel, necessitatibus corporis, harum id. Obcaecati molestias reiciendis unde eum minus, corrupti inventore minima.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
