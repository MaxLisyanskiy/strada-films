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
import { useNavigate } from 'react-router-dom';
import { IMG_PATH } from '../../shared/constants';
import { IMovieItem } from '../../services/api-films/api-films.types';

export const CardItem = ({ itemData }: { itemData: IMovieItem }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/strada-films/${itemData.id}`)}>
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
          <Typography
            variant="h6"
            sx={{
              height: '70px',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
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
