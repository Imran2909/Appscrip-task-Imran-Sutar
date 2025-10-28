import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ count = 8 }) => {
  return (
    <div className={styles.loaderGrid}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.loaderCard}>
          <div className={styles.loaderImage}></div>
          <div className={styles.loaderText}></div>
          <div className={styles.loaderSubText}></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
