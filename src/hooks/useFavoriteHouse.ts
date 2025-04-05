import { House } from '@project/types/House';
import {
  getFromLocalStorage,
  LOCAL_STORAGE_KEYS,
  saveToLocalStorage,
} from '@project/utils/localStorage';
import { useCallback } from 'react';

export type FavoriteHouse = House | '';

export const useFavoriteHouse = () => {
  const updateFavorite = useCallback((updatedFavorite: FavoriteHouse) => {
    saveToLocalStorage(LOCAL_STORAGE_KEYS.FAVORITE_HOUSE, updatedFavorite);
  }, []);

  const getFavoriteHouse = useCallback(() => {
    const favorite = getFromLocalStorage<FavoriteHouse>(
      LOCAL_STORAGE_KEYS.FAVORITE_HOUSE,
    );
    if (!favorite) return '';
    return favorite;
  }, []);

  const fetchFavoriteHouse = useCallback(() => {
    return getFavoriteHouse();
  }, []);

  const toggleFavoriteHouse = useCallback((newFavorite: FavoriteHouse) => {
    const favorite = getFavoriteHouse();
    if (favorite === newFavorite) {
      updateFavorite('');
      fetchFavoriteHouse();
      return;
    }

    updateFavorite(newFavorite);
    fetchFavoriteHouse();
  }, []);

  return {
    fetchFavoriteHouse,
    toggleFavoriteHouse,
  } as const;
};
