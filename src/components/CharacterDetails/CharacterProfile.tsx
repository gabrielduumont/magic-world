import { Character } from '@project/types/Character';
import { QuestionMarkIcon } from '../Icons/QuestionMarkIcon';
import { CharacterInfoDetailsItem } from './CharacterInfoDetailsItem';
import { useFavoriteHouseContext } from '@project/contexts/FavoriteHouseContext/useContext';
import { useMemo } from 'react';

type CharacterProfileProps = {
  character: Character;
};

export const CharacterProfile = ({ character }: CharacterProfileProps) => {
  const [{ favoriteHouse }] = useFavoriteHouseContext();
  const isFavoriteHouse = useMemo(
    () =>
      !!favoriteHouse && !!character.house && character.house === favoriteHouse,
    [character.house, favoriteHouse],
  );
  const alsoKnownAs = useMemo(
    () => character.alternate_names?.join(', ') ?? '',
    [character.alternate_names],
  );
  return (
    <div className="flex flex-col md:flex-row items-center">
      {character.image ? (
        <img
          src={character.image}
          alt={character.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-700"
        />
      ) : (
        <div className="w-40 h-40 flex items-center">
          <QuestionMarkIcon size={260} />
        </div>
      )}
      <div className="mt-4 md:mt-0 md:ml-6">
        <h1
          className="text-4xl sm:text-7xl mb-6 font-bold project-text-hightlight"
          title={character.name}
        >
          {character.name}
        </h1>
        <p className="text-gray-300 italic" title={character.name}>
          {alsoKnownAs}
        </p>
        <div className="mt-2 flex flex-wrap gap-4 items-center">
          <CharacterInfoDetailsItem label="House" value={character.house} />
          {isFavoriteHouse && (
            <span className="text-sm font-medium">
              (this is your's favorite house)
            </span>
          )}
        </div>
        <div className="mt-2">
          <CharacterInfoDetailsItem label="Actor" value={character.actor} />
        </div>
      </div>
    </div>
  );
};
