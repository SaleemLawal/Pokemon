import React, { useState } from "react";
import styles from "./header.module.scss";

import Logo from "../../assets/images/Pokedex-logo.svg";

export default function header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e?.target.value);
  };

  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.header__logo} />

      <div className={styles.header__input_container}>
        <div className={styles.header__icon_container}></div>
        <input
          type="text"
          className={styles.header__input}
          placeholder="Pokemon name, number or type"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className={`${styles.header__search} btn btn--yellow `}>
          Search
        </button>
      </div>
    </div>
  );
}
