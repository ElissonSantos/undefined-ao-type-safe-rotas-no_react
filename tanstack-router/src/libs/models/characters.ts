import type { GenderEnumType } from "../enums/gender.enum";
import type { RaceEnumType } from "../enums/race.enum";

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface CharactersInput {
  page: number;
  limit: number;
  name?: string;
  gender?: GenderEnumType;
  race?: RaceEnumType;
}

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: RaceEnumType;
  gender: GenderEnumType;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: Date | null;
}

export interface CharactersResponse {
  items: Character[];
  meta: Meta;
  links: Links;
}
