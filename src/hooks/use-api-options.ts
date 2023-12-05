import { useContext } from 'react';
import { UserContext, UserContextType } from '../context/user-context';

interface IUseApiOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

export function useApiOptions(): IUseApiOptions {
  const { token } = useContext(UserContext) as UserContextType;

  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token.current}`,
    },
  };
}
