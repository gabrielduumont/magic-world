import { HOUSES } from '@project/types/House';

export const getHouseActiveColorClasses = (house: string, darkerBackground?: boolean) => {
  return `${getBackgroundColorClasses(house, darkerBackground)} ${getTextClasses(house)}`;
};

export const getBackgroundColorClasses = (house: string, darkerBackground?: boolean) => {
  const defaultBackgroundClass = 'bg-gradient-to-r from-gray-400 to-gray-300';
  if (!house) return defaultBackgroundClass;

  switch (house.toLowerCase()) {
    case HOUSES.Gryffindor.toLowerCase():
      if (darkerBackground) return 'bg-gradient-to-r from-red-700 to-red-600';
      return `bg-gradient-to-r from-red-600 to-red-500`;
    case HOUSES.Hufflepuff.toLowerCase():
      if (darkerBackground) return 'bg-gradient-to-r from-yellow-700 to-yellow-600';
      return `bg-gradient-to-r from-yellow-400 to-yellow-500`;
    case HOUSES.Ravenclaw.toLowerCase():
      if (darkerBackground) return 'bg-gradient-to-r from-blue-700 to-blue-600';
      return `bg-gradient-to-r from-blue-600 to-blue-500`;
    case HOUSES.Slytherin.toLowerCase():
      if (darkerBackground) return 'bg-gradient-to-r from-green-700 to-green-600';
      return `bg-gradient-to-r from-green-600 to-green-500`;
    default:
      return defaultBackgroundClass;
  }
};

export const getTextClasses = (house: string) => {
  const defaultTextClass = 'text-slate-900';
  const whiteTextClass = 'text-white';

  if (!house) return defaultTextClass;

  switch (house.toLowerCase()) {
    case HOUSES.Gryffindor.toLowerCase():
      return whiteTextClass;
    case HOUSES.Hufflepuff.toLowerCase():
      return defaultTextClass;
    case HOUSES.Ravenclaw.toLowerCase():
      return whiteTextClass;
    case HOUSES.Slytherin.toLowerCase():
      return defaultTextClass;
    default:
      return defaultTextClass;
  }
};
