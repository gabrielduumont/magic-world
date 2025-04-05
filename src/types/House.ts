export const HOUSES = {
  Gryffindor: "Gryffindor",
  Slytherin: "Slytherin",
  Ravenclaw: "Ravenclaw",
  Hufflepuff: "Hufflepuff",
} as const;

export type House = typeof HOUSES[keyof typeof HOUSES];