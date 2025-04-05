import {
  FavoriteHouse,
  useFavoriteHouse,
} from '@project/hooks/useFavoriteHouse';
import { FavoriteHouseContext } from './context';
import {
  FavoriteHouseContextModifiers,
  FavoriteHouseContextStates,
  FavoriteHouseContextType,
} from './types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { House } from '@project/types/House';

export const FavoriteHouseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteHouse, setFavoriteHouse] = useState<FavoriteHouse>('');
  const { fetchFavoriteHouse, toggleFavoriteHouse } = useFavoriteHouse();

  const changeFavoriteHouse = useCallback((house: House) => {
    toggleFavoriteHouse(house);
    setFavoriteHouse((prev) => (prev === house ? '' : house));
  }, []);

  const states: FavoriteHouseContextStates = useMemo(
    () => ({ favoriteHouse }),
    [favoriteHouse],
  );

  const modifiers: FavoriteHouseContextModifiers = useMemo(
    () => ({ changeFavoriteHouse }),
    [changeFavoriteHouse],
  );

  const contextValue: FavoriteHouseContextType = useMemo(
    () => ({ states, modifiers }),
    [states, modifiers],
  );

  useEffect(() => {
    setFavoriteHouse(fetchFavoriteHouse());
  }, []);

  return (
    <FavoriteHouseContext.Provider value={contextValue}>
      {children}
    </FavoriteHouseContext.Provider>
  );
};
