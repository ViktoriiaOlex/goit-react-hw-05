import css from './CastItem.module.css';

const CastItem = ({ item: { profile_path, name, character } }) => {
  const defaultImg =
    'https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_1280.jpg';

  return (
    <>
      <div className={css.imgContainer}>
        <img
          className={css.image}
          src={
            profile_path
              ? `http://image.tmdb.org/t/p/w185/${profile_path}`
              : defaultImg
          }
          width={150}
          alt={`${name}`}
        />
      </div>
      <div className={css.container}>
        <h3 className={css.title}>{name}</h3>
        <p className={css.text}>
          <span className={css.span}>Character:</span> {character}
        </p>
      </div>
    </>
  );
};

export default CastItem;