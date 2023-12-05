import { CircularProgress, Grid } from '@mui/material';
import {
  useGetFavoritesList,
  useGetToggleFavorite,
} from '../../services/api-favorites/api-favorites';
import { useGetMovies } from '../../services/api-films/api-films';
import { CardItem } from '../card-item/card-item';

export const CardList = () => {
  const { movies, moviesLoading } = useGetMovies();
  const { favorites, callApi } = useGetFavoritesList();

  const { onFetchData } = useGetToggleFavorite();

  const handleToggleFavorite = async (id: number, type: 'add' | 'delete') => {
    const result = await onFetchData(id, type);

    if (result) callApi();
  };

  return (
    <>
      {moviesLoading && <CircularProgress />}
      {!moviesLoading && (
        <Grid
          container
          spacing={2}
          sx={{
            height: 'calc(100vh - 80px)',
            overflow: 'auto',
            paddingBottom: '20px',
          }}
        >
          {movies.map((item) => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={item.id}>
              <CardItem
                itemData={item}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
