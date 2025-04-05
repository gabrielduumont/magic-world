import { useFavoriteHouseContext } from '@project/contexts/FavoriteHouseContext/useContext';
import { HOUSES } from '@project/types/House';
import { HouseButton } from './HouseButton';

const HOUSES_OPTIONS = [
  HOUSES.Gryffindor,
  HOUSES.Hufflepuff,
  HOUSES.Ravenclaw,
  HOUSES.Slytherin,
];

export const HouseList = () => {
  const [{ favoriteHouse }, { changeFavoriteHouse }] =
    useFavoriteHouseContext();
  return (
    <div className="w-full justify-center flex flex-wrap items-center gap-2">
      {HOUSES_OPTIONS.map((house) => (
        <div key={`house-list-${house}`}>
          <HouseButton
            house={house}
            isFavorite={favoriteHouse === house}
            onClick={() => changeFavoriteHouse(house)}
          />
        </div>
      ))}
    </div>
  );
};
