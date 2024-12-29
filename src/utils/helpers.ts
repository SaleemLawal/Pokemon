import { PokemonProps } from "./types";

const sortPokemon = (pokemonList: PokemonProps[], order: string) => {
  const sortedList = [...pokemonList];

  return sortedList.sort((a, b) => {
    if (!a.id || !b.id) {
      return 0;
    }

    if (order === "asc-num") {
      return a.id - b.id; 
    } else if (order === "desc-num") {
      return b.id - a.id; 
    } else if (order === "asc-alpha") {
      return a.name.localeCompare(b.name); 
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};


export { sortPokemon };
