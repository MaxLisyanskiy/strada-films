import { useState } from 'react';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FILTERS_SORT_BY } from '../../shared/filters-mocks';

export const FilterSelect = () => {
  const [selectValue, setSelectValue] = useState<string>(FILTERS_SORT_BY[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 2 }}>
      <InputLabel id="select-label">Сортировать по:</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectValue}
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
