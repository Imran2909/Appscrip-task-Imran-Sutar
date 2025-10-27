import React, { useState } from "react";
import styles from "./Filters.module.css";
import { GoChevronDown } from "react-icons/go";

const FILTER_SECTIONS = [
  {
    id: "ideal-for",
    title: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
  },
  { id: "occasion", title: "OCCASION", options: ["All"] },
  { id: "work", title: "WORK", options: ["All"] },
  { id: "fabric", title: "FABRIC", options: ["All"] },
  { id: "segment", title: "SEGMENT", options: ["All"] },
  { id: "suitable-for", title: "SUITABLE FOR", options: ["All"] },
  { id: "raw-materials", title: "RAW MATERIALS", options: ["All"] },
  { id: "pattern", title: "PATTERN", options: ["All"] },
];

const Filters = ({ visible = false }) => {
  // which accordion section is open; null = none
  const [openId, setOpenId] = useState(null);
  // track selected options in minimal form
  const [selections, setSelections] = useState({});

  const toggleSection = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const toggleOption = (sectionId, option) => {
    setSelections((prev) => {
      const prevSet = new Set(prev[sectionId] || []);
      if (prevSet.has(option)) prevSet.delete(option);
      else prevSet.add(option);
      return { ...prev, [sectionId]: Array.from(prevSet) };
    });
  };

  const unselectAll = (sectionId) => {
    setSelections((prev) => ({ ...prev, [sectionId]: [] }));
  };

  const isChecked = (sectionId, option) => {
    return (selections[sectionId] || []).includes(option);
  };

  return (
    <aside
      id="filters"
      className={`${styles.container} ${visible ? styles.visible : ""}`}
      aria-hidden={!visible}
    >
      {/* Top checkbox */}
      <div className={styles.topCheckbox}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" aria-label="Customizable" />
          <span className={styles.checkboxText}>CUSTOMIZBLE</span>
        </label>
      </div>

      <div className={styles.separator} />

      {/* Accordion sections */}
      <div className={styles.sections}>
        {FILTER_SECTIONS.map((sec) => {
          const isOpen = openId === sec.id;
          return (
            <div key={sec.id} className={styles.section}>
              <button
                className={styles.sectionHeader}
                onClick={() => toggleSection(sec.id)}
                aria-expanded={isOpen}
                aria-controls={`${sec.id}-panel`}
                type="button"
              >
                <div className={styles.sectionTextGroup}>
                  <div className={styles.sectionTitle}>{sec.title}</div>
                  <div className={styles.sectionAllLabel}>
                    {selections[sec.id] && selections[sec.id].length > 0
                      ? selections[sec.id].join(", ")
                      : "All"}
                  </div>
                </div>
                <GoChevronDown
                  className={`${styles.chevron} ${
                    isOpen ? styles.chevronOpen : ""
                  }`}
                  aria-hidden
                />
              </button>

              {/* Divider line */}
              <div className={styles.sectionDivider} />

              {/* Panel (render options only when open to keep DOM small) */}
              {isOpen && (
                <div
                  id={`${sec.id}-panel`}
                  className={styles.panel}
                  role="region"
                  aria-labelledby={`${sec.id}-header`}
                >
                  <button
                    className={styles.unselect}
                    onClick={() => unselectAll(sec.id)}
                    type="button"
                  >
                    Unselect all
                  </button>

                  <div className={styles.options}>
                    {sec.options.map((opt) => (
                      <label key={opt} className={styles.optionLabel}>
                        <input
                          type="checkbox"
                          checked={isChecked(sec.id, opt)}
                          onChange={() => toggleOption(sec.id, opt)}
                        />
                        <span className={styles.optionText}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Filters;
