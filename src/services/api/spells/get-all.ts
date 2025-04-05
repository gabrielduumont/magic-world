import { Spell } from '@project/types/Spell';
import { ApiService } from '../api-service';
import { SPELLS_ROUTES_BUILDER } from './__constants';
import { tryParseJson } from '@project/utils/tryParseJson';

export const getAllSpells = async (): Promise<Spell[]> => {
  const service = new ApiService();

  const requestUrl = SPELLS_ROUTES_BUILDER.ALL();
  const response = await service.get<string>(requestUrl);

  if (!response) {
    return [];
  }

  const parsedResponse = tryParseJson<Spell[]>(response);
  if (!parsedResponse) {
    return [];
  }

  return parsedResponse;
};
