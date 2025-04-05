export const isValidData = (data: unknown[]) => {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.length > 0;
};

export const isValidItemsPerPage = (itemsPerPage: number) => {
  if (typeof itemsPerPage !== 'number') {
    return false;
  }

  return itemsPerPage > 0;
};

export const calculateTotalPages = (data: unknown[], itemsPerPage: number) => {
  if (!isValidData(data) || !isValidItemsPerPage(itemsPerPage)) {
    return 0;
  }

  return Math.ceil(data.length / itemsPerPage);
};

export const paginateData = <T>(
  data: T[],
  itemsPerPage: number,
  currentPage: number,
) => {
  if (!isValidData(data) || !isValidItemsPerPage(itemsPerPage)) {
    return [];
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  return data.slice(startIndex, startIndex + itemsPerPage);
};
