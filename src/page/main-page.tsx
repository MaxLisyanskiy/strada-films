import { CardList } from '../components/card-list/card-list';
import { Filters } from '../components/filters/filters';
import { useGetMovies } from '../services/api-films/api-films';

export const MainPage = () => {
  const { movies, moviesLoading } = useGetMovies();

  return (
    <>
      <Filters />
      <CardList data={movies} isLoading={moviesLoading} />
    </>
  );
};
