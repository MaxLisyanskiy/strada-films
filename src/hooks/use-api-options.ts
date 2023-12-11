import useUserSelectors from '../store/selectors/userSelectors';

interface IUseApiOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

export function useApiOptions(): IUseApiOptions {
  const { token } = useUserSelectors();

  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
}
