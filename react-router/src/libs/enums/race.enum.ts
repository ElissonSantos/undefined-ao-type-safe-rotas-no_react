export const RaceEnum = {
  SAIYAN: "Saiyan",
  NAMEKIAN: "Namekian",
  HUMAN: "Human",
  MAJIN: "Majin",
  FRIEZA_RACE: "Frieza Race",
  JIREN_RACE: "Jiren Race",
  ANDROID: "Android",
  GOD: "God",
  ANGEL: "Angel",
  EVIL: "Evil",
  UNKNOWN: "Unknown",
  NUCLEICO_BENIGNO: "Nucleico benigno",
  NUCLEICO: "Nucleico",
} as const;

export type RaceEnumType = (typeof RaceEnum)[keyof typeof RaceEnum];
