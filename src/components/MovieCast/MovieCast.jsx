import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';
import { requestCastById } from '../services/api';
import { useParams } from 'react-router-dom';
import CastItem from '../CastItem/CastItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCastMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await requestCastById(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCastMovie();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && !cast && <ErrorMessage />}
      {Array.isArray(cast) && cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map(item => {
            return (
              <li className={css.item} key={item.id}>
                <CastItem item={item} />
              </li>
            );
          })}
        </ul>
      )}
      {Array.isArray(cast) && cast.length === 0 && (
        <p className={css.noReviewText}>We do not have cast for this movie.</p>
      )}
    </>
  );
};

export default MovieCast;