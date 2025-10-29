"use client";

import React, { useState } from "react";
import styles from "./Main.module.css";
import Topbar from "../Topbar/Topbar";
import Filters from "../Filter/Filters";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

export default function Main() {
  const [showFilter, setShowFilter] = useState(true);
  const toggleFilter = () => setShowFilter((prev) => !prev);

  return (
    <>
      <div className={styles.mainWrapper}>
        <Topbar
          initialCount={3425}
          showFilter={showFilter}
          toggleFilter={toggleFilter}
        />
        <div className={styles.hr} />
        <div className={styles.content}>
          {showFilter && (
            <aside
              className={`${styles.leftSection} ${
                showFilter ? styles.visible : ""
              }`}
              id="filters"
            >
              <Filters />
            </aside>
          )}

          <section
            className={`${styles.rightSection} ${
              showFilter ? styles.gridThree : styles.gridFour
            }`}
          >
            <Products columns={showFilter ? 3 : 4} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
