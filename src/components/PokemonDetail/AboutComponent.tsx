// import React from 'react'
import styles from "./AboutComponent.module.scss";

const AboutComponent = ({
  types,
  height,
  weight,
  abilities,
}: {
  types: { slot: number; type: { name: string; url: string } }[];
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
  const formattedTypes = types
    .map(
      (typeObj) =>
        typeObj.type.name[0].toUpperCase() + typeObj.type.name.slice(1)
    )
    .join(", ");

  const formattedAbilities = abilities
    .map(
      (abilityObj) =>
        abilityObj.ability.name[0].toUpperCase() +
        abilityObj.ability.name.slice(1)
    )
    .join(", ");
  return (
    <div className={styles.about}>
      <p>Species</p>
      <p>{formattedTypes}</p>

      <p>Height</p>
      <p>{height * 10}cm</p>

      <p>Weight</p>
      <p>{weight / 10}kg</p>

      <p>Abilities</p>
      <p>{formattedAbilities}</p>
    </div>
  );
};

export default AboutComponent;
