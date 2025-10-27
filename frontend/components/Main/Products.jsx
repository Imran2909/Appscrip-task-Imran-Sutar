import React from "react";
import styles from "./Main.module.css";

const Products = ({ items = 8 }) => {
  return (
    <section className={styles.products}>
      <div className={styles.productsGrid}>
        {Array.from({ length: items }).map((_, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.thumb} aria-hidden />
            <h3 className={styles.cardTitle}>Product {i + 1}</h3>
            <p className={styles.cardPrice}>$99</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
