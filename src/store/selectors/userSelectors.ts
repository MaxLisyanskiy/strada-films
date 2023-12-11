import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { UserData } from '../reducers/userReducer';

export default function useUserSelectors() {
  const token = useSelector(
    (state: RootState) => state.userReducer.token,
  ) as string;
  const user = useSelector(
    (state: RootState) => state.userReducer.user,
  ) as UserData | null;

  return { token, user };
}
