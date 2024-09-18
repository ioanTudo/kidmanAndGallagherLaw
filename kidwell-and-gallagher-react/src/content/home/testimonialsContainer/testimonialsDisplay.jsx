import style from "./testimonialsContainer.module.css";

export const TestimonialsDisplay = ({ content, id, user, stars, isActive }) => {
  const starsRating = Array(stars)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className="fa fa-star"
        style={{ color: "#cfb787" }}
      ></span>
    ));

  return (
    <div
      className={`${style.testimonialContentContainer} ${
        isActive ? style.active : ""
      }`}
      key={id}
    >
      <div className={style.testimonialsContentPosition}>
        <span>{starsRating}</span>
        <p>{content}</p>
        <h2>{user}</h2>
      </div>
    </div>
  );
};
