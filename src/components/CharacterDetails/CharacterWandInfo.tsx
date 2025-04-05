import { Character } from '@project/types/Character';
import { CharacterInfoDetailsItem } from './CharacterInfoDetailsItem';

type CharacterWandInfoProps = {
  wand: Character['wand'];
};

export const CharacterWandInfo = ({ wand }: CharacterWandInfoProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium border-b border-gray-700 pb-2 truncate">
        Wand
      </h2>
      <div className="mt-2">
        <CharacterInfoDetailsItem label="Wood" value={wand.wood} />
      </div>
      <div className="mt-2">
        <CharacterInfoDetailsItem label="Core" value={wand.core} />
      </div>
      <div className="mt-2">
        <CharacterInfoDetailsItem
          label="Length"
          value={wand.length ? `${wand.length} inches` : undefined}
        />
      </div>
    </div>
  );
};
