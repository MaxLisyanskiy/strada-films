import { Box, Pagination } from '@mui/material';
import { useContext } from 'react';
import {
  MoviesActionKind,
  MoviesContext,
  MoviesContextType,
} from '../../context/movies-context';

export const FilterPagination = () => {
  const { movies, dispatch } = useContext(MoviesContext) as MoviesContextType;

  const handleChange = (_e: React.ChangeEvent<unknown>, value: number) => {
    dispatch({
      type: MoviesActionKind.SET_PAGE,
      payload: value.toString(),
    });
  };

  return (
    <Box sx={{ m: '24px 6px', display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={10}
        page={+movies.page}
        color="primary"
        onChange={handleChange}
      />
    </Box>
  );
};
