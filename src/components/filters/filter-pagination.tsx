import { Box, Pagination } from '@mui/material';
import { useMoviesContext } from '../../hooks/use-context';

export const FilterPagination = () => {
  const { state, onChangePage } = useMoviesContext();

  const handleChange = (_e: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  return (
    <Box sx={{ m: '24px 6px', display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={state.pageTotal}
        page={state.page}
        color="primary"
        onChange={handleChange}
      />
    </Box>
  );
};
