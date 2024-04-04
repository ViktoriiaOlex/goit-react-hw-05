import css from './ReviewsItem.module.css';
const ReviewsItem = ({ item: { author, content, updated_at } }) => {
  const date = new Date(updated_at);
  const month = date.getMonth() + 1;
  return (
    <div>
      <div className={css.titleDateContainer}>
        <h3 className={css.title}>{author}</h3>
        <p>{`${date.getDate().toString().padStart(2, '0')}-${month
          .toString()
          .padStart(2, '0')}-${date.getFullYear()} ${date
          .getHours()
          .toString()
          .padStart(2, '0')}:${date
          .getMinutes()
          .toString()
          .padStart(2, '0')}`}</p>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default ReviewsItem;