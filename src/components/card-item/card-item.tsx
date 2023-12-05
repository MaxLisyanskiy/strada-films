import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IMG_PATH } from '../../shared/constants';
import { IMovieItem } from '../../services/api-films/api-films.types';

// icons
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

interface CardItemProps {
  itemData: IMovieItem;
  favorites: IMovieItem[];
  onToggleFavorite: (id: number, type: 'add' | 'delete') => void;
}

export const CardItem = ({
  itemData,
  favorites,
  onToggleFavorite,
}: CardItemProps) => {
  const navigate = useNavigate();

  const isInFavorite =
    favorites.filter((item: IMovieItem) => item.id === itemData.id).length > 0;

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
        {isInFavorite ? (
          <IconButton
            edge="end"
            aria-label="rating"
            color="warning"
            onClick={() => onToggleFavorite(itemData.id, 'delete')}
          >
            <StarOutlinedIcon fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            edge="end"
            aria-label="rating"
            onClick={() => onToggleFavorite(itemData.id, 'add')}
          >
            <StarBorderSharpIcon fontSize="small" />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};
