import { tryParseJson } from './tryParseJson';

export const LOCAL_STORAGE_KEYS = {
  FAVORITE_CHARACTERS: 'FAVORITE_CHARACTERS',
  FAVORITE_HOUSE: 'FAVORITE_HOUSE',
} as const;

export type LocalStorageKeys =
  (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];

export const saveToLocalStorage = <T>(key: LocalStorageKeys, value: T) => {
  if (!window.localStorage) return;

  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: LocalStorageKeys) => {
  if (!window.localStorage) return;

  const value = window.localStorage.getItem(key);
  return tryParseJson<T>(value);
};
