// import React from 'react'
import styles from "./PokemonDetail.module.scss";
import PokemonHeader from "./PokemonHeader";
import PokemonInfo from "./PokemonInfo";

const PokemonDetail = ({
  setShowDetail,
}: {
  setShowDetail: React.Dispatch<
    React.SetStateAction<{ show: boolean; id: number | null }>
  >;
}) => {
  return (
    <div className={`${styles["pokemon--detail"]} fire--background`}>
      <PokemonHeader setShowDetail={setShowDetail} />
      <PokemonInfo />
    </div>
  );
};

export default PokemonDetail;
