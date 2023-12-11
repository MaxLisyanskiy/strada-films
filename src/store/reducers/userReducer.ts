import * as actionTypes from '../actionTypes';

export interface UserData {
  id: number;
  username: string;
}

export type UserState = {
  token: string;
  user: UserData | null;
};

export type UserAction = {
  type: string;
  payload: string | UserData;
};

export type DispatchType = (args: UserAction) => UserAction;

const initialState: UserState = {
  token: '',
  user: null,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
