import type { GenderEnumType } from "../enums/gender.enum";
import type { RaceEnumType } from "../enums/race.enum";

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: Date | null;
}

export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: Date | null;
}

export interface CharacterResponse {
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
  originPlanet: Planet;
  transformations: Transformation[];
}
