import React from "react";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <section className={styles.headingSection}>
      <p className={styles.headingTitle}>DISCOVER OUR PRODUCTS</p>
      <p className={styles.headingText}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
};

export default Heading;
