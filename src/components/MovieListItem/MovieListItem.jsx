import css from './MovieListItem.module.css';

const MoviesListItem = ({
  item: { popularity, release_date, poster_path, title },
}) => {
  const popularityMovie = popularity.toFixed(1);
  const fullYear = new Date(release_date).getFullYear();
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

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