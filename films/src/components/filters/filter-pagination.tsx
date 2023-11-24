import { Box, Pagination } from '@mui/material';

export const FilterPagination = () => {
  return (
    <Box sx={{ m: '24px 6px', display: 'flex', justifyContent: 'center' }}>
      <Pagination count={5} color="primary" />
    </Box>
  );
};
