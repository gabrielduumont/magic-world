const BASE_URI = '/spells' as const;

export const SPELLS_ROUTES_BUILDER = {
  ALL: () => `${BASE_URI}` as const,
};
