type Stat = {
  baseStat: number;
  effort: number;
  name: string;
};

export type PhysicalAttributes = {
  height: number;
  weight: number;
  types: string[];
  appearance: string;
};

export type Abilities = {
  name: string;
  url: string;
  slot: number;
  isHidden: boolean;
};

export type Pokemon = {
  id: number;
  name: string;
  description: string | null;
  stats: Stat[];
  physicalAttributes: PhysicalAttributes;
  abilities: Abilities[];
};

export type PokemonEntry = {
  id: number;
  name: string;
  avatar: string | null;
};

export type GetAllResponse = {
  count: number;
  pokemon: PokemonEntry[];
};


