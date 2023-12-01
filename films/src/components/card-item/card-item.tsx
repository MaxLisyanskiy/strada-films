import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import { IMovieItem } from '../../services/api.types';
import { useNavigate } from 'react-router-dom';
import { IMG_PATH } from '../../shared/constants';

export const CardItem = ({ itemData }: { itemData: IMovieItem }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea
        onClick={() => navigate(`/strada-maraphon/films/${itemData.id}`)}
      >
        <CardMedia
          sx={{ height: 240 }}
          image={IMG_PATH + itemData.poster_path}
          title="card-item-mock"
        />
      </CardActionArea>

      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ height: '70px' }}>
            {itemData.title}
          </Typography>
          <Typography
            sx={{ fontSize: 16 }}
            color="text.secondary"
            component="span"
          >
            Рейтинг {Math.ceil(itemData.vote_average)}
          </Typography>
        </Box>
        <IconButton edge="end" aria-label="rating">
          <StarBorderSharpIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  );
};
