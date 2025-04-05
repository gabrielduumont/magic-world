import { Axios } from 'axios';

export const BASE_API_CONFIG = {
  baseURL: 'https://hp-api.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
} as const;

export const API = new Axios(BASE_API_CONFIG);
