import { Character } from '@project/types/Character';
import { ApiService } from '../api-service';
import { CHARACTERS_ROUTES_BUILDER } from './__constants';
import { tryParseJson } from '@project/utils/tryParseJson';

export const getCharacterById = async (
  id: string,
): Promise<Character | null> => {
  const service = new ApiService();

  const requestUrl = CHARACTERS_ROUTES_BUILDER.BY_ID(id);
  const response = await service.get<string>(requestUrl);

  if (!response) {
    return null;
  }

  const parsedResponse = tryParseJson<Character[]>(response);
  if (!parsedResponse?.length) {
    return null;
  }

  return parsedResponse[0];
};
