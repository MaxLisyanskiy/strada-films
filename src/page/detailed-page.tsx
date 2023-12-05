import { useParams } from 'react-router-dom';
import { DetailedCard } from '../components/detailed-card/detailed-card';
import {
  useGetMovieCredits,
  useGetMovieDetailes,
} from '../services/api-detailed/api-detailed';

export const DetailedPage = () => {
  const { id } = useParams();

  const { movieDetails, detailsLoading } = useGetMovieDetailes(id ?? '');
  const { movieCredits, creditsLoading } = useGetMovieCredits(id ?? '');

  // TODO: title={`Фильмы ${movieDetails ? '- ' + movieDetails.title : ''}`
  return (
    <>
      {!id && <h1>Фильм не найден!</h1>}
      {id && movieDetails && (
        <DetailedCard
          details={movieDetails}
          credits={movieCredits}
          detailsLoading={detailsLoading}
          creditsLoading={creditsLoading}
        />
      )}
    </>
  );
};
