import css from './CastItem.module.css';

const CastItem = ({ item: { profile_path, name, character } }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

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