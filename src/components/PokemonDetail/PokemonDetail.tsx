import { useEffect, useState } from "react";
import styles from "./PokemonDetail.module.scss";
import PokemonHeader from "./PokemonHeader";
import PokemonInfo from "./PokemonInfo";
import { pokemonInfoProps } from "@/utils/types";

const PokemonDetail = ({
  setShowDetail,
  pokemonInfo,
}: {
  setShowDetail: React.Dispatch<
    React.SetStateAction<{ show: boolean; id: number | null }>
  >;
  pokemonInfo: pokemonInfoProps;
}) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timer);
  }, [pokemonInfo]);

  const { types, stats, height, weight, abilities, id, name, img } = pokemonInfo;

  return (
    <div
      className={`${styles["pokemon--detail"]} ${
        types[0] ? types[0].type?.name : ""
      }--background ${fade ? styles["fade-in"] : styles["fade-out"]}`}
    >
      <PokemonHeader
        setShowDetail={setShowDetail}
        id={id}
        name={name}
        types={types}
        img={img}
      />
      <PokemonInfo
        stats={stats}
        height={height}
        weight={weight}
        abilities={abilities}
        types={types}
      />
    </div>
  );
};

export default PokemonDetail;
