import style from "./blogPostContainer.module.css";

export const BlogPostContainerDisplay = ({
  id,
  heading,
  content,
  day,
  yearAndMonth,
  bgImg,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={style.blogPostContentContainer}
      key={id}
    >
      <div className={style.blogPostTextContent}>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
      <div className={style.blogPostDateContainer}>
        <h1>{day}</h1>
        <span>{yearAndMonth}</span>
      </div>
    </div>
  );
};
