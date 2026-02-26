export const GenderEnum = {
  MALE: "Male",
  FEMALE: "Female",
  OTHER: "Other",
  UNKNOWN: "Unknown",
} as const;

export type GenderEnumType = (typeof GenderEnum)[keyof typeof GenderEnum];
