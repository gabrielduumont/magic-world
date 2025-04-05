import {
  getFromLocalStorage,
  LOCAL_STORAGE_KEYS,
  saveToLocalStorage,
} from '@project/utils/localStorage';
import { useCallback, useEffect, useState } from 'react';

export const useFavoriteCharacters = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<string[]>([]);

  const updateFavorites = useCallback((updatedFavorites: string[]) => {
    saveToLocalStorage(
      LOCAL_STORAGE_KEYS.FAVORITE_CHARACTERS,
      updatedFavorites,
    );
  }, []);

  const getFavoriteCharacters = useCallback(() => {
    const favorites = getFromLocalStorage<string[]>(
      LOCAL_STORAGE_KEYS.FAVORITE_CHARACTERS,
    );
    if (!favorites?.length) return [];
    return favorites;
  }, []);

  const fetchFavoriteCharacters = useCallback(() => {
    const favorites = getFavoriteCharacters();
    setFavoriteCharacters(favorites);
  }, []);

  const saveFavoriteCharacter = useCallback((characterId: string) => {
    const favorites = getFavoriteCharacters();
    if (favorites.includes(characterId)) return;

    const updatedFavorites = [...favorites, characterId];
    updateFavorites(updatedFavorites);
    fetchFavoriteCharacters();
  }, []);

  const removeFavoriteCharacter = useCallback((characterId: string) => {
    const favorites = getFavoriteCharacters();
    const updatedFavorites = favorites.filter(
      (id: string) => id !== characterId,
    );

    updateFavorites(updatedFavorites);
    fetchFavoriteCharacters();
  }, []);

  useEffect(() => {
    fetchFavoriteCharacters();
  }, []);

  return {
    favoriteCharacters,
    saveFavoriteCharacter,
    removeFavoriteCharacter,
  } as const;
};
