import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext, UserContextType } from '../context/user-context';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token, onSetToken, user, onSetUser } = useContext(
    UserContext,
  ) as UserContextType;

  if (!token.current || !user.current) {
    const lsToken = localStorage.getItem('tmdb-fr5-token');
    const lsUser = localStorage.getItem('tmdb-fr5-user')
      ? JSON.parse(localStorage.getItem('tmdb-fr5-user') || '')
      : '';

    if (lsToken && lsToken.trim() !== '') {
      onSetToken(lsToken);
    } else if (lsUser && lsUser.trim() !== '') {
      onSetUser(lsUser);
    } else {
      return <Navigate to="/strada-films/auth" replace={true} />;
    }
  }

  return children;
};
