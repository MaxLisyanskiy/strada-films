import { Box, IconButton, Paper, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { UserContext, UserContextType } from '../../context/user-context';
import { getMovieList } from '../../services/api';
import { IGenre } from '../../services/api.types';

import { FilterSelect } from './filter-select';
import { FilterReleaseYear } from './filter-release-year';
import { FilterGenres } from './filter-genres';
import { FilterPagination } from './filter-pagination';

// icons
import CloseIcon from '@mui/icons-material/Close';

import classes from './filters.module.scss';

export const Filters = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [reset, setReset] = useState<number>(0);

  const { user } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    getMovieList(user.token).then(({ genres }) => {
      setGenres(genres ?? []);
    });
  }, []); // eslint-disable-line

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
          <FilterSelect />
          <FilterReleaseYear />
          {genres.length > 0 && <FilterGenres genres={genres} />}
        </Box>
      </Box>
      <FilterPagination key={reset} />
    </Paper>
  );
};
