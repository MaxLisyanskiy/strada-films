import { Box, IconButton, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useGetGenres } from '../../services/api-films/api-films';

import { FilterSelect } from './filter-select';
import { FilterReleaseYear } from './filter-release-year';
import { FilterGenres } from './filter-genres';
import { FilterPagination } from './filter-pagination';

// icons
import CloseIcon from '@mui/icons-material/Close';

import classes from './filters.module.scss';
import { FilterSearch } from './filter-search';

export const Filters = () => {
  const [reset, setReset] = useState<number>(0);

  const { genres } = useGetGenres();

  const handleResetFilters = () => {
    setReset((prev) => (prev += 1));
  };

  return (
    <Paper elevation={1} className={classes.filters}>
      <Box>
        <Box className="df-csb">
          <Typography variant="h6" component="h3" sx={{ m: 2 }}>
            Фильтры
          </Typography>
          <IconButton
            size="large"
            sx={{ m: '12px' }}
            onClick={handleResetFilters}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          key={reset}
          sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <FilterSearch />
          <FilterSelect />
          <FilterReleaseYear />
          {genres.length > 0 && <FilterGenres genres={genres} />}
        </Box>
      </Box>
      <FilterPagination key={reset} />
    </Paper>
  );
};
