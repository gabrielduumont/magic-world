import { useContext } from 'react';
import { FavoriteHouseContext } from './context';

export const useFavoriteHouseContext = () => {
  const context = useContext(FavoriteHouseContext);
  if (!context) {
    throw new Error(
      'useFavoriteHouseContext must be used within a FavoriteHouseProvider',
    );
  }
  return [context.states, context.modifiers] as const;
};
