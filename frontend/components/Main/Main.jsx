import React, { useState } from "react";
import styles from "./Main.module.css";
import Topbar from "./Topbar";
import Filters from "./Filters";
import Products from "./Products";

const Main = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => setShowFilter((s) => !s);

  return (
    <main className={styles.mainWrapper}>
      {/* Topbar (now separate component) */}
      <Topbar
        initialCount={3425}
        showFilter={showFilter}
        toggleFilter={toggleFilter}
      />

      <div className={styles.hr} />

      {/* Main content composed of Filters + Products */}
      <div className={styles.content}>
        <Filters visible={showFilter} />
        <Products items={8} />
      </div>
    </main>
  );
};

export default Main;
