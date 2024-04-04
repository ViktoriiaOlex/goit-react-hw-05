import { useEffect, useState } from 'react';

import css from './MoviesPage.module.css';

import MoviesList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
// import message from '../../components/services/message';
import Loader from '../../components/Loader/Loader';
import { requestMovieByQuery } from '../../services/Api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //const [searchQuery, setsearchQuery] = useState(null);
  const [searchMovies, setSearchMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchQuery = searchParams.get('query');

  const onSetSearchQuery = searchTerm => {
    setSearchMovies([]);
    //setsearchQuery(query);
    setSearchParams({ query: searchTerm });
  };

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }

    const fetchmovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await requestMovieByQuery(searchQuery);
        setSearchMovies(data);

        if (data.length === 0) {
        //   message();
          return;
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchmovies();
  }, [searchQuery]);

  return (
    <div className={css.movieContainer}>
      {error && <ErrorMessage />}
      <SearchBar searchQuery={searchQuery} onSearch={onSetSearchQuery} />
      {loading && <Loader />}
      <MoviesList moviesList={searchMovies} />
    </div>
  );
};

export default MoviesPage;