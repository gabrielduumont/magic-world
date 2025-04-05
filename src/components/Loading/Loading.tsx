type LoadingProps = {
  message?: string;
};

export const Loading = ({ message }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
      <div className="mt-4 text-yellow-500 text-lg font-serif animate-pulse">
        <span className="text-2xl font-bold">⚡</span> {message || 'Loading...'}{' '}
        <span className="text-2xl font-bold">⚡</span>
      </div>
    </div>
  );
};
