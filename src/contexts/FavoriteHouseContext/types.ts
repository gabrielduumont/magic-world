import { FavoriteHouse } from '@project/hooks/useFavoriteHouse';
import { House } from '@project/types/House';

export type FavoriteHouseContextStates = {
  favoriteHouse: FavoriteHouse;
};
export type FavoriteHouseContextModifiers = {
  changeFavoriteHouse: (favoriteHouse: House) => void;
};

export type FavoriteHouseContextType = {
  states: FavoriteHouseContextStates;
  modifiers: FavoriteHouseContextModifiers;
};
