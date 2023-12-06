import { useUserContext } from './use-context';

interface IUseApiOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

export function useApiOptions(): IUseApiOptions {
  const { token } = useUserContext();

  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token.current}`,
    },
  };
}
