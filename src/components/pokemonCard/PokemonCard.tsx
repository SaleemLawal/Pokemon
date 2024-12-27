import { useEffect, useState } from "react";
import { PokemonDetail, PokemonProps } from "../../utils/types";
import axios from "axios";
import styles from "./pokemonCard.module.scss";
import "../../styles/_typography.scss";

export default function PokemonCard({ url }: PokemonProps) {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
    null
  );
  
  useEffect(() => {
    const loadPokemonData = async () => {
      try {
        const response = await axios.get(url);
        const {
          id = 0,
          name,
          types,
          sprites: {
            other: {
              "official-artwork": { front_default: img },
            },
          },
        } = response.data;
        setPokemonDetail({ id, name, types, img });
      } catch (error) {
        console.log(error);
      }
    };
    loadPokemonData();
  }, [url]);

  if (!pokemonDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`${styles["pokemon"]} ${pokemonDetail.types[0].type.name}--background`}
    >
      <img
        src={pokemonDetail.img}
        alt={pokemonDetail.name}
        className={styles.pokemon__img}
      />
      <h1 className={`${styles["pokemon__header"]} heading-s`}>
        {pokemonDetail.name}
      </h1>
      <h2 className={`${styles["pokemon__id"]} subtext`}>
        #00{pokemonDetail.id}
      </h2>
      <ul className={styles.pokemon__list}>
        {pokemonDetail.types.map((typeInfo) => (
          <li
            key={typeInfo.slot}
            className={`${styles["pokemon__item"]} ${typeInfo.type.name} subtext-2`}
          >
            {typeInfo.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
