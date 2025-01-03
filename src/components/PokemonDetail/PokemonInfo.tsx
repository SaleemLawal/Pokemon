import { useState } from "react";
import styles from "./PokemonInfo.module.scss";
import AboutComponent from "./AboutComponent";
import BaseStatsComponent from "./BaseStatsComponent";
import EvolutionComponent from "./EvolutionComponent";

const PokemonInfo = ({
  stats,
  height,
  weight,
  abilities,
  types,
}: {
  types: { slot: number; type: { name: string; url: string } }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
}) => {
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
        {activeTab === "about" && (
          <AboutComponent
            types={types}
            height={height}
            weight={weight}
            abilities={abilities}
          />
        )}
        {activeTab === "base-stats" && (
          <BaseStatsComponent stats={stats} type={types[0].type.name} />
        )}
        {activeTab === "evolution" && <EvolutionComponent />}
      </div>
    </div>
  );
};

export default PokemonInfo;
