import { createContext, useRef } from 'react';

export type ProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

interface UserState {
  id: number;
  username: string;
}

export type UserContextType = {
  token: React.MutableRefObject<string>;
  onSetToken: (newToken: string) => void;
  user: React.MutableRefObject<UserState | null>;
  onSetUser: (newUser: UserState) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: ProviderProps) => {
  const token = useRef<string>('');
  const user = useRef<UserState | null>(null);

  const onSetToken = (newToken: string) => {
    token.current = newToken;
  };

  const onSetUser = (newUser: UserState) => {
    user.current = newUser;
  };

  const value = { token, onSetToken, user, onSetUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
