import { createContext, useState } from 'react';
import { getMovies, searchMovies } from '../services/api-films/api-films';
import { IMovieItem } from '../services/api-films/api-films.types';
import { FILTERS_SORT_BY } from '../shared/filters-mocks';
import useUserSelectors from '../store/selectors/userSelectors';

export type ProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

export type MoviesContextType = {
  state: MoviesState;
  onGetMovies: () => void;
  onSearchMovies: (query: string) => void;
  onChangeSortBy: (sortBy: string) => void;
  onChangePage: (newPage: number) => void;
};

interface MoviesState {
  search: string;
  page: number;
  pageTotal: number;
  sortBy: string;
  movies: IMovieItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  search: '',
  page: 1,
  pageTotal: 100,
  sortBy: FILTERS_SORT_BY[0],
  movies: [],
  isLoading: false,
  error: null,
};

export const MoviesContext = createContext<MoviesContextType | null>(null);

const MoviesProvider = ({ children }: ProviderProps) => {
  const { token } = useUserSelectors();

  const [state, setState] = useState<MoviesState>(initialState);

  const onGetMovies = async () => {
    setState({ ...state, page: 1, isLoading: true });
    const result = await getMovies(state.page, state.sortBy, token);
    setState({
      ...state,
      pageTotal: result.total_pages,
      movies: result.results,
      isLoading: false,
    });
  };

  const onSearchMovies = async (query: string) => {
    setState({ ...state, page: 1, isLoading: true });
    const result = await searchMovies(query, state.page, token);
    setState({
      ...state,
      search: query,
      pageTotal: result.total_pages,
      movies: result.results,
      isLoading: false,
    });
  };

  const onChangeSortBy = async (sortBy: string) => {
    setState({
      ...state,
      isLoading: true,
    });
    const result = await getMovies(1, sortBy, token);
    setState({
      ...state,
      sortBy,
      search: '',
      page: 1,
      pageTotal: result.total_pages,
      movies: result.results,
      isLoading: false,
    });
  };

  const onChangePage = async (newPage: number) => {
    setState({
      ...state,
      isLoading: true,
    });

    const result =
      state.search.trim() === ''
        ? await getMovies(newPage, state.sortBy, token)
        : await searchMovies(state.search, newPage, token);
    setState({
      ...state,
      page: newPage,
      pageTotal: result.total_pages,
      movies: result.results,
      isLoading: false,
    });
  };

  const value = {
    state,
    onGetMovies,
    onSearchMovies,
    onChangeSortBy,
    onChangePage,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export default MoviesProvider;
