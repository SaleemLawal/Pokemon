import styles from "./filter.module.scss";
import close from "../../assets/images/Close.svg";
import emptyCheckBox from "../../assets/images/empty-checkbox.svg";
import { POKEMON_TYPES } from "../../utils/constants";
import { FilterProps } from "../../utils/types";
// import React from "react";

export default function Filter({ toggleShowFilter }: FilterProps) {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__header}>
        <h2 className="body-2">Filter</h2>
        <button onClick={toggleShowFilter}>
          <img src={close} alt="close" />
        </button>
      </div>
      <small className="subtext-2">Type</small>
      <div className={styles.filter__types}>
        {POKEMON_TYPES.map((type) => (
          <div key={type} className={styles.filter__types__item}>
            <img src={emptyCheckBox} alt="Empty check box" />
            <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          </div>
        ))}
      </div>

      <div className={styles.filter__buttons}>
        <button className={`${styles.filter__button} btn`}>
          Reset Filters
        </button>
        <button
          className={`${styles.filter__button} ${styles["filter__button--filter"]} btn`}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
