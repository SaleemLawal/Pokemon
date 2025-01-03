// import React from 'react'
import styles from "./PokemonDetail.module.scss";
import PokemonHeader from "./PokemonHeader";
import PokemonInfo from "./PokemonInfo";

const PokemonDetail = () => {
  return (
    <div className={`${styles["pokemon--detail"]} fire--background`}>
      <PokemonHeader />
      <PokemonInfo />
    </div>
  );
};

export default PokemonDetail;
