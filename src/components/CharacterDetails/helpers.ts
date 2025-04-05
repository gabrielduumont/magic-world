export const getInfoOrDefault = (
  info: string | number | null | undefined,
  defaultText: string = 'Unknown info',
) => {
  if (typeof info === 'number') return info.toString();
  if (!info) return defaultText;
  return info;
};
