import { CircularProgress, Grid } from '@mui/material';
import { IMovieItem } from '../../services/api.types';
import { CardItem } from '../card-item/card-item';

interface CardListProps {
  data: IMovieItem[];
  isLoading: boolean;
}

export const CardList = ({ data, isLoading }: CardListProps) => {
  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Grid
          container
          spacing={2}
          sx={{
            height: 'calc(100vh - 80px)',
            overflow: 'auto',
            paddingBottom: '20px',
          }}
        >
          {data.map((item) => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={item.id}>
              <CardItem itemData={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
