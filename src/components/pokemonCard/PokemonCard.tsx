import { PokemonProps } from "../../utils/types";
import styles from "./pokemonCard.module.scss";
import "../../styles/_typography.scss";

export default function PokemonCard({
  id,
  name,
  types,
  image,
  searchTerm,
  setShowDetail,
}: PokemonProps) {
  const matchesSearch =
    searchTerm === "" ||
    searchTerm == null ||
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    types?.some((pokemon) =>
      pokemon.type.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    id === Number(searchTerm);

  if (!matchesSearch) {
    return null;
  }

  const handleShowModal = () => {
    setShowDetail({ show: true, id: id});
  };

  return (
    <div
      className={`${styles["pokemon"]} ${
        types ? types[0].type.name : ""
      }--background`}
      onClick={handleShowModal}
    >
      <img src={image} alt={name} className={styles.pokemon__img} />
      <h1 className={`${styles["pokemon__header"]} heading-s`}>{name}</h1>
      <h2 className={`${styles["pokemon__id"]} subtext`}>#{id}</h2>
      <ul className={styles.pokemon__list}>
        {types?.map((typeInfo) => (
          <li
            key={typeInfo.slot}
            className={`${styles["pokemon__item"]} ${typeInfo.type.name} subtext-2`}
          >
            {typeInfo.type.name[0].toUpperCase() +
              typeInfo.type.name.substring(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
