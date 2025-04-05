import { Character } from '@project/types/Character';
import { CharacterInfoDetailsItem } from './CharacterInfoDetailsItem';

type CharacterInfoProps = {
  character: Character;
};

export const CharacterInfo = ({ character }: CharacterInfoProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium border-b border-gray-700 pb-2 truncate">
        Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <CharacterInfoDetailsItem label="Species" value={character.species} />
        <CharacterInfoDetailsItem label="Gender" value={character.gender} />
        <CharacterInfoDetailsItem
          label="Date of Birth"
          value={character.dateOfBirth}
        />
        <CharacterInfoDetailsItem
          label="Year of Birth"
          value={character.yearOfBirth}
        />
        <CharacterInfoDetailsItem label="Ancestry" value={character.ancestry} />
        <CharacterInfoDetailsItem
          label="Eye Colour"
          value={character.eyeColour}
        />
        <CharacterInfoDetailsItem
          label="Hair Colour"
          value={character.hairColour}
        />
        <CharacterInfoDetailsItem label="Patronus" value={character.patronus} />
        <CharacterInfoDetailsItem
          label="Wizard"
          value={character.wizard ? 'Yes' : 'No'}
        />
        <CharacterInfoDetailsItem
          label="Alive"
          value={character.alive ? 'Yes' : 'No'}
        />
      </div>
    </div>
  );
};
