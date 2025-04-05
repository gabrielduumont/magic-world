import { calculateTotalPages, paginateData } from '@project/utils/pagination';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const usePagination = <T>(data: T[], itemsPerPage: number) => {
  const dataSafeCopy = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }
    return data;
  }, [data]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(
    () => calculateTotalPages(dataSafeCopy, itemsPerPage),
    [dataSafeCopy, itemsPerPage],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > totalPages) return;
      setCurrentPage(newPage);
    },
    [totalPages],
  );

  const paginatedData = useMemo(
    () => paginateData(dataSafeCopy, itemsPerPage, currentPage),
    [dataSafeCopy, currentPage, itemsPerPage],
  );

  useEffect(() => {
    if (!paginatedData.length) {
      setCurrentPage(1);
    }
  }, [paginatedData]);

  return { paginatedData, currentPage, totalPages, handlePageChange } as const;
};
