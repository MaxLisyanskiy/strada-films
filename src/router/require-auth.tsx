import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import { setToken, setUser } from '../store/actionCreators';
import useUserSelectors from '../store/selectors/userSelectors';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch: Dispatch = useDispatch();

  const { token, user } = useUserSelectors();

  if (token.trim() === '' || !user) {
    const lsToken = localStorage.getItem('tmdb-fr5-token');
    const lsUser = localStorage.getItem('tmdb-fr5-user')
      ? JSON.parse(localStorage.getItem('tmdb-fr5-user') || '')
      : '';

    const isHaveStorageToken = lsToken && lsToken.trim() !== '';
    const isHaveStorageUser = lsUser;

    if (isHaveStorageToken && isHaveStorageUser) {
      dispatch(setToken(lsToken));
      dispatch(setUser(lsUser));
    } else {
      return <Navigate to="/strada-films/auth" replace={true} />;
    }
  }

  return children;
};
