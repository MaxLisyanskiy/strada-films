import { useState } from 'react';
import { Box, Typography, Slider } from '@mui/material';
import { FILTERS_SLIDER_MARKS } from '../../shared/filters-mocks';

export const FilterReleaseYear = () => {
  const [value, setValue] = useState<number[]>([1960, 2000]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box>
      <Typography sx={{ m: 2 }}>Год релиза:</Typography>
      <Box sx={{ m: '24px 16px 0' }}>
        <Slider
          min={1920}
          max={2023}
          getAriaLabel={() => 'Years range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={FILTERS_SLIDER_MARKS}
        />
      </Box>
    </Box>
  );
};
