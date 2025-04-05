import { Character } from '@project/types/Character';
import { CharacterProfile } from './CharacterProfile';
import { CharacterInfo } from './CharacterInfo';
import { CharacterWandInfo } from './CharacterWandInfo';
import { getHouseActiveColorClasses } from '@project/utils/getHouseColor';

type CharacterDetailsProps = {
  character: Character;
};

export const CharacterDetails = ({ character }: CharacterDetailsProps) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 ${getHouseActiveColorClasses(
        character.house,
        true,
      )}`}
    >
      <CharacterProfile character={character} />
      <CharacterInfo character={character} />
      <CharacterWandInfo wand={character.wand} />
    </div>
  );
};
