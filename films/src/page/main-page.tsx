import { CardList } from '../components/card-list/card-list';
import { Filters } from '../components/filters/filters';
import { Layout } from '../components/layout';
import { useGetMovies } from '../services/api-films/api-films';

export const MainPage = () => {
  const { movies, moviesLoading } = useGetMovies();

  return (
    <Layout title={'Фильмы'}>
      <Filters />
      <CardList data={movies} isLoading={moviesLoading} />
    </Layout>
  );
};
