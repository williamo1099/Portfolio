import { useCallback, useState } from "react";

interface APIState<T> {
  data: T;
  loading: boolean;
  error: Error | null;
}

export default function useAPI<T>() {
  const [state, setState] = useState<APIState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const request = useCallback(async (serviceFn: () => Promise<T>) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const result = await serviceFn();
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An error occurred");
      setState({ data: null, loading: false, error });
      throw error;
    }
  }, []);

  return { ...state, request };
}
