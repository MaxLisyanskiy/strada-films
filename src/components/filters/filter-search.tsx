import { useId, useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useMoviesContext } from '../../hooks/use-context';

// icons
import SearchIcon from '@mui/icons-material/Search';

export const FilterSearch = () => {
  const id = useId();
  const [query, setQuery] = useState<string>('');

  const { onSearchMovies } = useMoviesContext();

  const handleClickShowPassword = () => {
    onSearchMovies(query);
  };

  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor={id}>Название фильма</InputLabel>
      <OutlinedInput
        id={id}
        label="Название фильма"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
