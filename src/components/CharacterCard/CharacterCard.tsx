import { Character } from '@project/types/Character';
import {
  getHouseActiveColorClasses,
  getTextClasses,
} from '@project/utils/getHouseColor';
import { HeartIcon } from '../Icons/HeartIcon';
import { QuestionMarkIcon } from '../Icons/QuestionMarkIcon';

type CharacterCardProps = {
  character: Character;
  onCardClick?: (characterId: Character['id']) => void;
  isFavorite?: boolean;
  onFavoriteClick?: (characterId: Character['id']) => void;
};

export const CharacterCard = ({
  character,
  isFavorite,
  onCardClick,
  onFavoriteClick,
}: CharacterCardProps) => {
  return (
    <div
      className={`
        w-[200px] h-[120px] flex flex-col items-center justify-between p-4 rounded-lg hover:shadow-lg transition-all duration-300 
        ease-in-out ${getHouseActiveColorClasses(character.house)} shadow-lg
        hover:scale-105 cursor-default
      `}
      title={character.name}
    >
      <div
        className={`w-full flex gap-2 ${
          !character.image ? 'items-center justify-between' : 'items-center'
        }`}
      >
        {character.image ? (
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full max-w-[52px] max-h-[52px] rounded-full object-cover"
          />
        ) : (
          <div className="h-[52px] flex items-center">
            <QuestionMarkIcon size={60} />
          </div>
        )}
        <div className="w-[120px] truncate">
          <h2 className="text-sm font-medium truncate text-wrap">
            {character.name}
          </h2>
        </div>
        <div
          className="w-[30px] cursor-pointer"
          onClick={() => onFavoriteClick?.(character.id)}
        >
          <HeartIcon filled={isFavorite} />
        </div>
      </div>
      {onCardClick && (
        <div
          onClick={() => onCardClick(character.id)}
          className={`text-xs uppercase font-medium cursor-pointer ${getTextClasses(
            character.house,
          )}`}
        >
          View details
        </div>
      )}
    </div>
  );
};
