import { getAllCharacters } from '@project/services/api/characters/get-all';
import { BaseTabContent } from './BaseTabContent';

export const Characters = () => {
  return <BaseTabContent dataFetcher={getAllCharacters} />;
};
