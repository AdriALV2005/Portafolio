import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} >
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lupe</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor
          labore magni laudantium totam voluptatibus! Autem voluptatibus
          doloremque pariatur praesentium ut eos ad molestias quod, dolorem,
          repudiandae ullam. Saepe, iste!
        </p>
 

        <button class={styles.btn}>
  <div class={styles.original}>Contact me!</div>
  <div class={styles.letters}>
    
    <span>T</span>
    <span>H</span>
    <span>A</span>
    <span>N</span>
    <span>K</span>
    <span>S</span>
  </div>
</button>






      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
