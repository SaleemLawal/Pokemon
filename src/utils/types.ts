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
  id?: number;
  types?: PokemonType[];
  img?: string;
  image?: string;
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

export type {
  PokemonProps,
  PokemonDetail,
  PokemonData,
  SearchBarProps,
  FilterProps,
  CheckBoxProps,
  checkMark,
};
