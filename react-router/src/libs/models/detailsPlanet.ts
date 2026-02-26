import type { GenderEnumType } from "../enums/gender.enum";
import type { RaceEnumType } from "../enums/race.enum";

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

export interface PlanetResponse {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: Date | null;
  characters: Character[];
}
