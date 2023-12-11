import { UserAction, UserData } from './reducers/userReducer';
import * as actionTypes from './actionTypes';

export function setToken(token: string) {
  const action: UserAction = {
    type: actionTypes.SET_TOKEN,
    payload: token,
  };

  return action;
}

export function setUser(user: UserData) {
  const action: UserAction = {
    type: actionTypes.SET_USER,
    payload: user,
  };

  return action;
}
