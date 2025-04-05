export const sortArrayByProp = <T>(array: T[], prop: keyof T): T[] => {
  return [...array].sort((a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  });
};
