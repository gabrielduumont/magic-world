import { createContext } from 'react';
import {
  FavoriteHouseContextModifiers,
  FavoriteHouseContextStates,
  FavoriteHouseContextType,
} from './types';

const INITIAL_STATES: FavoriteHouseContextStates = {
  favoriteHouse: '',
};

const INITIAL_MODIFIERS: FavoriteHouseContextModifiers = {
  changeFavoriteHouse: () => {},
};

export const FavoriteHouseContext = createContext<FavoriteHouseContextType>({
  states: INITIAL_STATES,
  modifiers: INITIAL_MODIFIERS,
});
