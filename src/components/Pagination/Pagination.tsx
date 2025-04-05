import { useCallback } from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const getActiveClass = (disabled: boolean) => {
  return disabled
    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 cursor-not-allowed'
    : 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-slate-900 shadow-lg cursor-pointer';
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;
      onPageChange(page);
    },
    [totalPages],
  );

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={`px-4 py-2 rounded-l ${getActiveClass(currentPage <= 1)}`}
      >
        Previous
      </button>
      <span className="px-4 text-gold-700">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={`px-4 py-2 rounded-r ${getActiveClass(currentPage >= totalPages)}`}
      >
        Next
      </button>
    </div>
  );
};
