import { Grid } from '@mui/material';
import { CardItem } from '../card-item/card-item';

export const CardList = () => {
  return (
    <Grid container spacing={2} sx={{ height: 'fit-content' }}>
      {[1, 2, 3, 4, 5, 6, 7].map((item: number) => (
        <Grid item xs={12} sm={12} md={6} lg={3} key={item}>
          <CardItem />
        </Grid>
      ))}
    </Grid>
  );
};
