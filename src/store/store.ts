import { createStore, Store } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { DispatchType, UserAction, UserState } from './reducers/userReducer';

export type AppStore = Store<UserState, UserAction>;

const store: AppStore & {
  dispatch: DispatchType;
} = createStore(rootReducer);

export default store;
