import { getAllCharactersByType } from '@project/services/api/characters/get-all-by-type';
import { CHARACTER_TYPES } from '@project/types/Character';
import { BaseTabContent } from './BaseTabContent';

export const Staff = () => {
  return (
    <BaseTabContent
      dataFetcher={() => getAllCharactersByType(CHARACTER_TYPES.STAFF)}
    />
  );
};
