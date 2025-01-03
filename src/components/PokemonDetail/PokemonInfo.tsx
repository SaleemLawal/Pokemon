import { useState } from "react";
import styles from "./PokemonInfo.module.scss";
import AboutComponent from "./AboutComponent";
import BaseStatsComponent from "./BaseStatsComponent";
import EvolutionComponent from "./EvolutionComponent";

const PokemonInfo = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className={styles["pokemon--info"]}>
      <ul className={styles["pokemon--info__list"]}>
        <li
          className={`${styles["pokemon--info__item"]} ${
            activeTab === "about" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </li>
        <li
          className={`${styles["pokemon--info__item"]} ${
            activeTab === "base-stats" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("base-stats")}
        >
          Base Stats
        </li>
        <li
          className={`${styles["pokemon--info__item"]} ${
            activeTab === "evolution" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("evolution")}
        >
          Evolution
        </li>
      </ul>

      <div>
        {activeTab === "about" && <AboutComponent />}
        {activeTab === "base-stats" && <BaseStatsComponent />}
        {activeTab === "evolution" && <EvolutionComponent />}
      </div>
    </div>
  );
};

export default PokemonInfo;
