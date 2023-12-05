import { useEffect, useState } from 'react';
import { useApiOptions } from './use-api-options';

export const useApi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown>(null);

  const options = useApiOptions();

  useEffect(() => {
    fetchData();
  }, []); //eslint-disable-line

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const request = await fetch(url, options);
      const res: T = await request.json();
      setData(res);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        throw new Error(error.message);
      }
    }

    setIsLoading(false);
  };

  const callApi = () => {
    fetchData();
  };

  return { data, isLoading, error, callApi };
};
