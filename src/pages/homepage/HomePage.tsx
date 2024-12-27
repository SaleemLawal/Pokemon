import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

import styles from "./homepage.module.scss";
import filterLogo from "../../assets/images/octicon_filter-16.svg";
import React, { useState, useEffect } from "react";
import { getData } from "../../services/pokemonService";
import { PokemonProps } from "../../utils/types";

export default function HomePage() {
  const [sortOrder, setSortOrder] = useState("Lowest Number First");
  const [data, setData] = useState<PokemonProps[]>([]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.homepage}>
      <Header />
      <main>
        <div className={styles.homepage__sort_container}>
          <div className={styles.homepage__sort}>
            <select defaultValue={sortOrder} onChange={handleSortChange}>
              <option value="Lowest Number First">Lowest Number First</option>
              <option value="Highest Number First">Highest Number First</option>
              <option value="Alphabetically (A-Z)">Alphabetically (A-Z)</option>
              <option value="Alphabetically (Z-A)">Alphabetically (Z-A)</option>
            </select>
          </div>
          <button className={`${styles.homepage__filter} btn `}>
            <img src={filterLogo} alt="Filter Logo" />
            Filters
          </button>
        </div>

        <div className={styles.pokemons}>
          {data ? (
            data.map((pokemon: PokemonProps) => {
              return (
                <PokemonCard
                  name={pokemon.name}
                  url={pokemon.url}
                  key={pokemon.name}
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
