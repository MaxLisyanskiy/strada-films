import { useContext } from 'react';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FILTERS_SORT_BY } from '../../shared/filters-mocks';
import {
  MoviesActionKind,
  MoviesContext,
  MoviesContextType,
} from '../../context/movies-context';

export const FilterSelect = () => {
  const { movies, dispatch } = useContext(MoviesContext) as MoviesContextType;

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({
      type: MoviesActionKind.SORT_BY,
      payload: event.target.value,
    });
  };

  return (
    <FormControl variant="standard" sx={{ m: 2 }}>
      <InputLabel id="select-label">Сортировать по:</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={movies.sortBy}
        onChange={handleChange}
        label="Сортировать по:"
      >
        {FILTERS_SORT_BY.map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
