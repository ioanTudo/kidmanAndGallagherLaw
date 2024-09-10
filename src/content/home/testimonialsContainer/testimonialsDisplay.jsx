import style from "./testimonialsContainer.module.css";
import { forwardRef } from "react";

export const TestimonialsDisplay = forwardRef(
  ({ content, id, user, stars }, ref) => {
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
      <div ref={ref} className={style.testimonialContentContainer} key={id}>
        <div className={style.testimonialsContentPosition}>
          <span>{starsRating}</span>
          <p>{content}</p>
          <h2>{user}</h2>
        </div>
      </div>
    );
  }
);
