import { logger } from '@project/utils/logger';
import { ApiInterface } from './api-interface';
import { API } from './base-api-config';

export class ApiService implements ApiInterface {
  async get<T = unknown>(url: string): Promise<T | null> {
    try {
      const response = await API.get<T>(url);
      return response.data;
    } catch (error: unknown) {
      logger(`Error fetching data from ${url}: ${error}`, 'error');
      return null;
    }
  }
}
