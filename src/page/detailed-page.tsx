import { useParams } from 'react-router-dom';
import { DetailedCard } from '../components/detailed-card/detailed-card';
import {
  useGetMovieCredits,
  useGetMovieDetailes,
} from '../services/api-detailed/api-detailed';
import { useGetFavoritesList } from '../services/api-favorites/api-favorites';

export const DetailedPage = () => {
  const { id } = useParams();

  const { movieDetails, detailsLoading } = useGetMovieDetailes(id ?? '');
  const { movieCredits, creditsLoading } = useGetMovieCredits(id ?? '');
  const { favorites } = useGetFavoritesList();

  // TODO: title={`Фильмы ${movieDetails ? '- ' + movieDetails.title : ''}`
  return (
    <>
      {!id && <h1>Фильм не найден!</h1>}
      {id && movieDetails && (
        <DetailedCard
          details={movieDetails}
          credits={movieCredits}
          favorites={favorites}
          detailsLoading={detailsLoading}
          creditsLoading={creditsLoading}
        />
      )}
    </>
  );
};
