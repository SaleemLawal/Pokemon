
const sortPokemon = (pokemonList: { name: string; url: string }[], order: string) => {
    return pokemonList.sort((a, b) => {
      const idA = parseInt(a.url.split("/").filter(Boolean).pop() || "0", 10);
      const idB = parseInt(b.url.split("/").filter(Boolean).pop() || "0", 10);
  
      if (order === "asc-num") {
        return idA - idB;
      } else if (order === "desc-num") {
        return idB - idA;
      } else if (order === "asc-alpha"){
        return a.name.localeCompare(b.name);
      }else {
        return b.name.localeCompare(a.name);
      }
    });
  };
  
export {sortPokemon}