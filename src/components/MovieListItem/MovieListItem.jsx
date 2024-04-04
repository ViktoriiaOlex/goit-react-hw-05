import css from './MovieListItem.module.css';

const MoviesListItem = ({
  item: { popularity, release_date, poster_path, title },
}) => {
  const popularityMovie = popularity.toFixed(1);
  const fullYear = new Date(release_date).getFullYear();
  const defaultImg =
    'https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_1280.jpg';

  return (
    <div className={css.card}>
      <div className={css.imgContainer}>
        <img
          className={css.image}
          src={
            poster_path
              ? `http://image.tmdb.org/t/p/w300/${poster_path}`
              : defaultImg
          }
          width={300}
          alt={`${title}`}
        />
      </div>
      <div className={css.container}>
        <h2 className={css.title}>{title}</h2>
        {popularity && (
          <p>
            Popularity: <span className={css.span}>{popularityMovie}</span>
          </p>
        )}
        {release_date && (
          <p>
            Year: <span className={css.span}>{fullYear}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MoviesListItem;