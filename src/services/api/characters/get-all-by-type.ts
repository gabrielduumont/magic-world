import { Character, CharacterType } from '@project/types/Character';
import { ApiService } from '../api-service';
import { CHARACTERS_ROUTES_BUILDER } from './__constants';
import { tryParseJson } from '@project/utils/tryParseJson';

export const getAllCharactersByType = async (
  type: CharacterType,
): Promise<Character[]> => {
  const service = new ApiService();

  const requestUrl = CHARACTERS_ROUTES_BUILDER.ALL_BY_TYPE(type);
  const response = await service.get<string>(requestUrl);

  if (!response) {
    return [];
  }

  const parsedResponse = tryParseJson<Character[]>(response);
  if (!parsedResponse) {
    return [];
  }

  return parsedResponse;
};
