import React from "react";

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonProps = {
  name: string;
  url?: string;
  searchTerm?: string;
  id: number;
  types?: PokemonType[];
  img?: string;
  image?: string;
  setShowDetail: React.Dispatch<
    React.SetStateAction<{ show: boolean; id: number | null }>
  >;
  showDetail?: boolean;
};

type PokemonDetail = {
  id: number;
  name: string;
  types: { slot: number; type: { name: string; url: string } }[];
  img: string;
};

type PokemonResult = {
  name: string;
  url: string;
};

type PokemonData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
};

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
};

type FilterProps = {
  toggleShowFilter: () => void;
  setFilterSelected: React.Dispatch<React.SetStateAction<string[]>>;
  handleFilterApply?: () => void;
  resetFilterSelect: () => void;
};

type CheckBoxProps = {
  label: string;
  handleFilterSelect: (filter: string, isChecked: boolean) => void;
  type: string;
  isChecked: boolean;
};

type checkMark = { [key: string]: boolean };

type pokemonInfoProps = {
  types: { slot: number; type: { name: string; url: string } }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
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
  id: number;
  name: string;
  img:string;
};

export type {
  PokemonProps,
  PokemonDetail,
  PokemonData,
  SearchBarProps,
  FilterProps,
  CheckBoxProps,
  checkMark,
  pokemonInfoProps
};
