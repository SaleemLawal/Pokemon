import { ArrowLeft } from "lucide-react";
import styles from "./PokemonHeader.module.scss";

const PokemonHeader = ({
  setShowDetail,
}: {
  setShowDetail: React.Dispatch<
    React.SetStateAction<{ show: boolean; id: number | null }>
  >;
}) => {
  const img =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png";
  const types = [
    {
      slot: 5,
      type: { name: "fire" },
    },
  ];
  return (
    <div className={styles["pokemon--header--container"]}>
      <ArrowLeft
        className={`${styles["pokemon--header__arrow"]}`}
        onClick={() => setShowDetail({ show: false, id: null })}
      />
      <div className={`${styles["pokemon--header"]}`}>
        <img
          src={img}
          alt="Charmeleon Photo"
          className={`${styles["pokemon--header__img"]}`}
        />

        <div className="pokemon--header__bio">
          <p className="heading-s">#5</p>
          <h1 className="heading-l">Charmaleon</h1>
          <ul className={`${styles["pokemon--header__list"]}`}>
            {types?.map((typeInfo) => (
              <li
                key={typeInfo.slot}
                className={`${styles["pokemon--header__item"]} ${typeInfo.type.name} subtext-2`}
              >
                {typeInfo.type.name[0].toUpperCase() +
                  typeInfo.type.name.substring(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonHeader;
