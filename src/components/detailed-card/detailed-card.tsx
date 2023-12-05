import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  IDetailedCredits,
  IDetailedMovie,
} from '../../services/api-detailed/api-detailed.types';
import { IMG_PATH } from '../../shared/constants';
import { useNavigate } from 'react-router-dom';
import { IMovieItem } from '../../services/api-films/api-films.types';

// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

interface DetailedCardProps {
  details: IDetailedMovie;
  credits: IDetailedCredits | null;
  favorites: IMovieItem[];
  detailsLoading?: boolean;
  creditsLoading?: boolean;
}

export const DetailedCard = (props: DetailedCardProps) => {
  const { details, credits, favorites } = props;
  const navigate = useNavigate();

  const isInFavorite =
    favorites.filter((item: IMovieItem) => item.id === details.id).length > 0;

  return (
    <Box
      component="section"
      sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}
    >
      <img src={IMG_PATH + details.poster_path} alt={details.title} />
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ marginRight: '10px' }}>
            {details.title} ({details.release_date.slice(0, 4)})
          </Typography>
          {isInFavorite ? (
            <StarOutlinedIcon fontSize="small" color="warning" />
          ) : (
            <StarBorderSharpIcon fontSize="small" />
          )}
        </Box>
        <IconButton
          size="large"
          sx={{ margin: '22px 0' }}
          onClick={() => navigate('/strada-films')}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ margin: '10px 0' }}>
          {credits &&
            credits.cast.slice(0, 4).map((actor) => (
              <Typography variant="h6" component="p" key={actor.id}>
                {actor.original_name}
              </Typography>
            ))}
        </Box>

        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" component="h2">
            Описание
          </Typography>
          <Typography component="p">{details.overview}</Typography>
        </Box>

        <Box sx={{ marginTop: '80px' }}>
          <Typography variant="h4" component="h2">
            Детали
          </Typography>
          {details.production_countries.length > 0 && (
            <Box sx={{ display: 'flex' }}>
              <Typography component="p" sx={{ width: '200px' }}>
                Страна
              </Typography>
              <Typography component="p">
                {details.production_countries[0].name}
              </Typography>
            </Box>
          )}
          <Box sx={{ display: 'flex' }}>
            <Typography component="p" sx={{ width: '200px' }}>
              Год
            </Typography>
            <Typography component="p">
              {details.release_date.slice(0, 4)}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography component="p" sx={{ width: '200px' }}>
              Жанр
            </Typography>
            <Typography component="p">{details.genres[0].name}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
