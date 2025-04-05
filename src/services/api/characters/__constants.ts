import { CHARACTER_TYPES, CharacterType } from '@project/types/Character';
import { House } from '@project/types/House';

const BASE_URI = '/characters' as const;
const BASE_DETAILS_URI = '/character' as const;

const getProperTypeUrl = (type: CharacterType) => {
  if (type === CHARACTER_TYPES.STUDENT) {
    return `${CHARACTER_TYPES.STUDENT}s` as const;
  }

  return type;
};

export const CHARACTERS_ROUTES_BUILDER = {
  ALL: () => `${BASE_URI}` as const,
  BY_ID: (id: string) => `${BASE_DETAILS_URI}/${id}` as const,
  STUDENTS: () => `${BASE_URI}/${CHARACTER_TYPES.STUDENT}` as const,
  STAFF: () => `${BASE_URI}/${CHARACTER_TYPES.STAFF}` as const,
  ALL_BY_HOUSE: (house: House) => `${BASE_URI}/house/${house}` as const,
  ALL_BY_TYPE: (type: CharacterType) =>
    `${BASE_URI}/${getProperTypeUrl(type)}` as const,
};
