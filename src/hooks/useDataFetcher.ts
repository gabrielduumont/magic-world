import { useCallback, useEffect, useMemo, useState } from "react";

export const useDataFetcher = <T>(fetchFn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDataFetch = useCallback(async () => {
    setError(null);
    const result = await fetchFn();
    setData(result);
  }, [fetchFn]);

  const handleFetchError = useCallback((err: unknown) => {
    if (err instanceof Error) {
      setError(err.message);
      return;
    }

    setError("An unknown error occurred");
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      await handleDataFetch();
    } catch (err) {
      handleFetchError(err);
    } finally {
      setLoading(false);
    }
  }, [handleDataFetch]);

  useEffect(() => {
    if (!fetchFn) {
      setError("No fetch function provided");
      return;
    }

    fetchData();
  }, []);

  const hookData = useMemo(() => {
    return {
      data,
      loading,
      error,
    } as const;
  }, [data, loading, error]);

  return hookData;
};
