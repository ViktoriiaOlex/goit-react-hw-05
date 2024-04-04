import css from './MovieList.module.css';

import MoviesListItem from '../MovieListItem/MovieListItem';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul className={css.listMovie}>
      {Array.isArray(moviesList) &&
        moviesList.length > 0 &&
        moviesList.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <MoviesListItem item={item} />
              <Link
                state={location}
                to={`/movies/${item.id}`}
                className={css.link}
              >
                Details⏩
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;