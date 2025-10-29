import React, { useState, useRef, useEffect } from "react";
import styles from "./Topbar.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { FiCheck } from "react-icons/fi";

const SORT_OPTIONS = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const Topbar = ({ initialCount = 3425, showFilter, toggleFilter }) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [selected, setSelected] = useState(SORT_OPTIONS[0]);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (opt) => {
    setSelected(opt);
    setSortOpen(false);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.leftBlock}>
        <div className={styles.itemCount}>{initialCount} ITEMS</div>
        <button
          className={styles.filterToggle}
          onClick={toggleFilter}
          aria-expanded={showFilter}
          aria-controls="filters"
        >
          <span className={styles.chevIcon}>
            {showFilter ? <FaChevronLeft /> : <FaChevronRight />}
          </span>
          <span className={styles.toggleText}>
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </button>
      </div>

      <div className={styles.rightBlock}>
        <div className={styles.recommended} ref={menuRef}>
          <button
            className={styles.recommendedBtn}
            aria-haspopup="menu"
            aria-expanded={sortOpen}
            onClick={() => setSortOpen((s) => !s)}
          >
            <span className={styles.recommendedText}>{selected}</span>
            <GoChevronDown className={styles.downIcon} />
          </button>
          {sortOpen && (
            <div className={styles.sortDropdown}>
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  className={`${styles.sortItem} ${
                    selected === opt ? styles.sortItemSelected : ""
                  }`}
                  onClick={() => handleSelect(opt)}
                >
                  <span className={styles.checkWrap}>
                    {selected === opt ? <FiCheck /> : null}
                  </span>
                  <span className={styles.sortLabel}>{opt}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.mobileTopbar}>
        <button className={styles.mobileFilterBtn} onClick={toggleFilter}>
          FILTER
        </button>
        <div className={styles.divider}></div>
        <button
          className={styles.mobileRecommendedBtn}
          onClick={() => setSortOpen((s) => !s)}
        >
          <span className={styles.recommendedText}>RECOMMENDED</span>
          <GoChevronDown className={styles.downIcon} />
        </button>

        {sortOpen && (
          <div className={styles.sortDropdownMobile}>
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt}
                className={`${styles.sortItem} ${
                  selected === opt ? styles.sortItemSelected : ""
                }`}
                onClick={() => handleSelect(opt)}
              >
                <span className={styles.checkWrap}>
                  {selected === opt ? <FiCheck /> : null}
                </span>
                <span className={styles.sortLabel}>{opt}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
