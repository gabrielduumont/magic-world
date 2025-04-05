export const tryParseJson = <T>(jsonString?: string | null) => {
  try {
    if (!jsonString) return null;

    return JSON.parse(jsonString) as T;
  } catch {
    return null;
  }
};
