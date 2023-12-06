import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FILTERS_SORT_BY } from '../../shared/filters-mocks';
import { useMoviesContext } from '../../hooks/use-context';

export const FilterSelect = () => {
  const { state, onChangeSortBy } = useMoviesContext();

  const handleChange = (event: SelectChangeEvent) => {
    onChangeSortBy(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 2 }}>
      <InputLabel id="select-label">Сортировать по:</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={state.sortBy}
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
