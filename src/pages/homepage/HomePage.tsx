import Header from "../../components/header/Header";
import styles from "./homepage.module.scss";
import filterLogo from "../../assets/images/octicon_filter-16.svg";
import React, { useState } from "react";

export default function homepage() {
  const [sortOrder, setSortOrder] = useState("Lowest Number First");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.homepage}>
      <Header />
      <main>
        <div className={styles.homepage__sort_container}>
          <div className={styles.homepage__sort}>
            <select defaultValue={sortOrder} onChange={handleSortChange}>
              <option value="Lowest Number First">Lowest Number First</option>
              <option value="Highest Number First">Highest Number First</option>
              <option value="Alphabetically (A-Z)">Alphabetically (A-Z)</option>
              <option value="Alphabetically (Z-A)">Alphabetically (Z-A)</option>
            </select>
          </div>
          <button className={`${styles.homepage__filter} btn `}>
            <img src={filterLogo} alt="Filter Logo" />
            Filters
          </button>
        </div>
      </main>
    </div>
  );
}
