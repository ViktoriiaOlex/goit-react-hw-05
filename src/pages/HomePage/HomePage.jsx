import { useEffect, useState } from 'react';

import css from './HomePage.module.css';

import { requestTrendingMovies } from '../../services/Api';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await requestTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchmovies();
  }, []);

  return (
    <div className={css.content}>
      <h1 className={css.title}>Trending Today</h1>
      <div className={css.container}>
        {loading && <Loader />}
        {error && !trendingMovies && <ErrorMessage />}
        {Array.isArray(trendingMovies) && trendingMovies.length > 0 && (
          <MovieList moviesList={trendingMovies} />
        )}
      </div>
    </div>
  );
};

export default HomePage;