import { createContext, Dispatch, useReducer } from 'react';
import { FILTERS_SORT_BY } from '../shared/filters-mocks';

export type ProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

export type MoviesContextType = {
  movies: MoviesState;
  dispatch: Dispatch<MoviesAction>;
};

export enum MoviesActionKind {
  SORT_BY = 'SORT',
  SET_PAGE = 'SET_PAGE',
}

interface MoviesAction {
  type: MoviesActionKind;
  payload: string;
}

interface MoviesState {
  sortBy: string;
  page: string;
}

export const MoviesContext = createContext<MoviesContextType | null>(null);

const MoviesProvider = ({ children }: ProviderProps) => {
  const [movies, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <MoviesContext.Provider value={{ movies, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};

function moviesReducer(movies: MoviesState, action: MoviesAction) {
  switch (action.type) {
    case MoviesActionKind.SORT_BY: {
      return {
        ...movies,
        sortBy: action.payload,
      };
    }
    case MoviesActionKind.SET_PAGE: {
      return {
        ...movies,
        page: action.payload,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = {
  sortBy: FILTERS_SORT_BY[0],
  page: '1',
};

export default MoviesProvider;
