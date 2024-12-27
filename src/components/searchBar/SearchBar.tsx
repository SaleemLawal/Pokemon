import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e?.target.value);
  };

  return (
    <div className="search">
      <div className={styles.search__input_container}>
        <div className={styles.search__icon_container}></div>
        <input
          type="text"
          className={styles.search__input}
          placeholder="Pokemon name, number or type"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className={`${styles["search__search--btn"]} btn btn--yellow `}>
          Search
        </button>
      </div>
    </div>
  );
}
