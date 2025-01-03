import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import styles from "./homepage.module.scss";
import filterLogo from "../../assets/images/octicon_filter-16.svg";
import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../../services/pokemonService";
import { checkMark, pokemonInfoProps, PokemonProps } from "../../utils/types";
import { sortPokemon } from "../../utils/helpers";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import { POKEMON_TYPES } from "../../utils/constants";
import PokemonDetail from "@/components/PokemonDetail/PokemonDetail";

export default function HomePage({
  showFilter,
  toggleShowFilter,
}: {
  showFilter: boolean;
  toggleShowFilter: () => void;
}) {
  const [sortOrder, setSortOrder] = useState<string>("asc-num");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [originalData, setOriginalData] = useState<PokemonProps[]>([]);
  const [data, setData] = useState<PokemonProps[]>([]);
  const [filterSelected, setFilterSelected] = useState<string[]>([]);
  const [checkedStates, setCheckedStates] = useState<checkMark>(
    POKEMON_TYPES.reduce((acc, type) => {
      acc[type] = false;
      return acc;
    }, {} as checkMark)
  );
  const [showDetail, setShowDetail] = useState<{
    show: boolean;
    id: number | null;
  }>({
    show: false,
    id: null,
  });
  const [pokemonInfo, setPokemonInfo] = useState<pokemonInfoProps>({
    types: [],
    stats: [],
    height: 0,
    weight: 0,
    abilities: [],
    id: 0,
    name: "",
    img: "",
  });

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm === "") {
      extractTypeMatch();
      return;
    }
    // gets the pokemon that match by name / id
    const filtered = data.filter((pokemon) => {
      const isNameMatch = pokemon.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const isIdMatch =
        Number(searchTerm) > 0 && pokemon.url?.includes(`/${searchTerm}/`);
      const isTypeMatch = pokemon.types?.some((item) =>
        item.type.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return isNameMatch || isIdMatch || isTypeMatch;
    });
    setData(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonList = await fetchPokemon();
        const detailedData = await Promise.all(
          pokemonList.map(async (item: PokemonProps) => {
            if (!item.url) {
              return;
            }
            const response = await axios.get(item.url);
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
            return { id, name, types, img };
          })
        );
        const sortedPokemonList = sortPokemon(detailedData, sortOrder);
        setOriginalData(sortedPokemonList);
        setData(sortedPokemonList);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [sortOrder]);

  useEffect(() => {
    const sortedData = sortPokemon(data, sortOrder);
    setData(sortedData);
  }, [sortOrder]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${showDetail.id}`
        );

        const {
          types,
          stats,
          height,
          weight,
          abilities,
          id,
          name,
          sprites: {
            other: {
              "official-artwork": { front_default: img },
            },
          },
        } = response.data;
        setPokemonInfo({
          types,
          stats,
          height,
          weight,
          abilities,
          id,
          name,
          img,
        });
      } catch (error) {
        console.log("Error from", error);
      }
    };
    if (showDetail.id) fetch();
  }, [showDetail.id]);

  // Homepage.tsx
  // Pass this to Filter, use it as an action when apply is clicked
  // perform the filtering action in here, but that logic is in Pokemon Card and depends on calls made in Pokemon Card component
  const extractTypeMatch = () => {
    if (filterSelected.length === 0) {
      console.log("No filters selected, resetting data");
      setData(originalData);
    } else {
      const filtered = originalData.filter((pokemon) => {
        const isTypeMatch = pokemon.types?.some((item) =>
          filterSelected.some(
            (x) => x.toLowerCase() === item.type.name.toLowerCase()
          )
        );
        return isTypeMatch;
      });
      setData(filtered);
    }
  };
  const handleFilterApply = (): void => {
    extractTypeMatch();
    toggleShowFilter();
  };

  const resetFilterSelect = (): void => {
    setCheckedStates(
      POKEMON_TYPES.reduce((acc, type) => {
        acc[type] = false;
        return acc;
      }, {} as checkMark)
    );
    setFilterSelected([]);
    setData(originalData);
    toggleShowFilter();
  };

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
          <button
            className={`${styles.homepage__filter} btn `}
            onClick={toggleShowFilter}
          >
            {filterSelected.length == 0 && (
              <img src={filterLogo} alt="Filter Logo" />
            )}
            {filterSelected.length > 0 && (
              <small>{filterSelected.length}</small>
            )}
            Filters
          </button>
        </div>

        <div className={styles.pokemons}>
          {data ? (
            data.map((pokemon: PokemonProps) => {
              return (
                <PokemonCard
                  key={pokemon.name}
                  id={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  image={pokemon.img}
                  searchTerm={searchTerm}
                  setShowDetail={setShowDetail}
                  showDetail={showDetail.show}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {showFilter && (
          <>
            <div className={`overlay`} onClick={toggleShowFilter}></div>
            <Filter
              toggleShowFilter={toggleShowFilter}
              setFilterSelected={setFilterSelected}
              handleFilterApply={handleFilterApply}
              resetFilterSelect={resetFilterSelect}
              checkedStates={checkedStates}
              setCheckedStates={setCheckedStates}
            />
          </>
        )}

        {showDetail.show && (
          <>
            <div
              className={`overlay`}
              onClick={() => {
                setShowDetail({ show: false, id: null });
              }}
            ></div>
            <PokemonDetail
              setShowDetail={setShowDetail}
              pokemonInfo={pokemonInfo}
            />
          </>
        )}
      </main>
    </div>
  );
}
