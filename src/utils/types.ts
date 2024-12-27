type PokemonProps = {
    name: string;
    url: string;
};

type PokemonDetail = {
    id: number;
    name: string;
    types: { slot: number; type: { name: string; url: string } }[];
    img: string;
}

type PokemonResult = {
    name: string;
    url: string;
}
  
type PokemonData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonResult[];
}

export type {PokemonProps, PokemonDetail, PokemonData}