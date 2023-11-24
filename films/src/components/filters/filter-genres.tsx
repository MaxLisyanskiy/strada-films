import { Autocomplete, Checkbox, TextField } from '@mui/material';
import { IGenre } from '../../services/api.types';

// icons
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const FilterGenres = ({ genres }: { genres: IGenre[] }) => {
  return (
    <Autocomplete
      sx={{ m: 2 }}
      multiple
      limitTags={10}
      id="multiple-limit-tags"
      options={genres}
      getOptionLabel={(option) => option.name}
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField {...params} variant="standard" label="Жанры" />
      )}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
    />
  );
};
