import { ArrowLeft } from "lucide-react";
import styles from "./PokemonHeader.module.scss";

const PokemonHeader = ({
  setShowDetail,
  id,
  name,
  types,
  img,
}: {
  setShowDetail: React.Dispatch<
    React.SetStateAction<{ show: boolean; id: number | null }>
  >;
  id: number;
  name: string;
  types: { slot: number; type: { name: string; url: string } }[];
  img: string;
}) => {
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
          <p className="heading-s">#{id}</p>
          <h1 className="heading-l">{name}</h1>
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
