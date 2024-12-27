import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

import styles from "./homepage.module.scss";
import filterLogo from "../../assets/images/octicon_filter-16.svg";
import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../../services/pokemonService";
import { PokemonProps } from "../../utils/types";
import { sortPokemon } from "../../utils/helpers";

export default function HomePage() {
  const [sortOrder, setSortOrder] = useState("asc-num");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pokemonDataSet, setPokemonDataSet] = useState<PokemonProps[]>([]);
  const [filteredData, setFilteredData] = useState<PokemonProps[]>([]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm === "") {
      setFilteredData(pokemonDataSet);
      return;
    }
    
    const filtered = pokemonDataSet.filter((pokemon) => {
      const isNameMatch = pokemon.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const isIdMatch =
        Number(searchTerm) > 0 && pokemon.url.includes(`/${searchTerm}/`);
      return isNameMatch || isIdMatch;
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonList = await fetchPokemon();
        const sortedPokemonList = sortPokemon(pokemonList, sortOrder);
        setPokemonDataSet(sortedPokemonList);
        setFilteredData(pokemonList);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [sortOrder]);

  return (
    <div className={styles.homepage}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <main>
        <div className={styles.homepage__sort_container}>
          <div className={styles.homepage__sort}>
            <select defaultValue={sortOrder} onChange={handleSortChange}>
              <option value="asc-num">Lowest Number First</option>
              <option value="desc-num">Highest Number First</option>
              <option value="asc-alpha">Alphabetically (A-Z)</option>
              <option value="desc-alpha">Alphabetically (Z-A)</option>
            </select>
          </div>
          <button className={`${styles.homepage__filter} btn `}>
            <img src={filterLogo} alt="Filter Logo" />
            Filters
          </button>
        </div>

        <div className={styles.pokemons}>
          {filteredData ? (
            filteredData.map((pokemon: PokemonProps) => {
              return (
                <PokemonCard
                  name={pokemon.name}
                  url={pokemon.url}
                  key={pokemon.name}
                  searchTerm={searchTerm}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </div>
  );
}
