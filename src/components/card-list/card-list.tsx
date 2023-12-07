import { Alert, CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useMoviesContext } from '../../hooks/use-context';
import {
  useGetFavoritesList,
  useGetToggleFavorite,
} from '../../services/api-favorites/api-favorites';
import { CardItem } from '../card-item/card-item';

export const CardList = () => {
  const { state, onGetMovies } = useMoviesContext();
  const { favorites, callApi, onToggleFavorite } = useGetFavoritesList();
  const { onFetchData } = useGetToggleFavorite();

  const handleToggleFavorite = async (id: number, type: 'add' | 'delete') => {
    if (type === 'delete') {
      const newFavorites = favorites.filter((item) => item.id !== id);
      onToggleFavorite(newFavorites);
    } else {
      const movie = state.movies.find((item) => item.id === id);
      const newFavorites = movie ? [...favorites, movie] : favorites;
      onToggleFavorite(newFavorites);
    }

    const result = await onFetchData(id, type);

    if (result) callApi();
  };

  useEffect(() => {
    onGetMovies();
  }, []); // eslint-disable-line

  if (state.error) {
    return (
      <Alert severity="error" sx={{ width: '100%', height: 'fit-content' }}>
        Something went wrong
      </Alert>
    );
  }

  if (state.isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {!state.movies && <p>Opps... Movies list is empty</p>}
      {state.movies && (
        <Grid
          container
          spacing={2}
          sx={{
            paddingBottom: '20px',
          }}
        >
          {state.movies.map((item) => (
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
