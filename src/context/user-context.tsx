import { createContext, Dispatch, useReducer } from 'react';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRiMTU1MzlhYzViNTlmZGJiYjJjOWRlMDFkMjFjNiIsInN1YiI6IjY1NTMzOTRkZDRmZTA0MDBhYzM1NWNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WFUJv3XmCEbwag746HvfV19LWIlBfuw18vDMhxI0T5w';

export type ProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

export type UserContextType = {
  user: UserState;
  dispatch: Dispatch<UserAction>;
};

enum UserActionKind {
  ADD = 'ADD',
}

interface UserAction {
  type: UserActionKind;
  payload: string;
}

interface UserState {
  token: string;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: ProviderProps) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

function userReducer(user: UserState, action: UserAction) {
  switch (action.type) {
    case UserActionKind.ADD: {
      return {
        ...user,
        token: action.payload,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = {
  token: API_KEY,
};

export default UserProvider;
