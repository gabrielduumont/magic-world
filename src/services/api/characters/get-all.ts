import { Character } from '@project/types/Character';
import { ApiService } from '../api-service';
import { CHARACTERS_ROUTES_BUILDER } from './__constants';
import { tryParseJson } from '@project/utils/tryParseJson';

export const getAllCharacters = async (): Promise<Character[]> => {
  const service = new ApiService();

  const requestUrl = CHARACTERS_ROUTES_BUILDER.ALL();
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
