import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext, UserContextType } from '../context/user-context';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { token, onSetToken } = useContext(UserContext) as UserContextType;

  if (!token.current) {
    const lsToken = localStorage.getItem('tmdb-fr5-token');

    if (lsToken && lsToken.trim() !== '') {
      onSetToken(lsToken);
    } else {
      return <Navigate to="/strada-films/auth" replace={true} />;
    }
  }

  return children;
};
