import { TestimonialsData } from "../../../datas/contentData";
import { TestimonialsDisplay } from "./testimonialsDisplay";

import style from "./testimonialsContainer.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const TestimonialContainer = () => {
  const feedbackContainerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateActiveTestimonial = () => {
    feedbackContainerRefs.current.forEach((item, index) => {
      if (item) {
        item.classList.toggle(style.active, index === currentIndex);
      }
    });
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialsData.length) % TestimonialsData.length
    );
  };

  useEffect(() => {
    updateActiveTestimonial();
  }, [currentIndex]);
  return (
    <div className={style.testimonialContainer}>
      <div className={style.testimonialIntroductionContent}>
        <h1>client testimonials</h1>
        <p>We have multiple Five Star Reviews from happy clients on Google.</p>
      </div>
      {TestimonialsData.map((data, id) => (
        <TestimonialsDisplay
          ref={(el) => (feedbackContainerRefs.current[id] = el)}
          stars={data.stars}
          content={data.content}
          key={id}
          user={data.user}
        />
      ))}
      <div className={style.buttonsContainer}>
        <div className={style.buttonsPositionContainer}>
          <button onClick={prevTestimonial}>
            <i className="fas fa-angle-left" style={{ fontSize: "30px" }}></i>
          </button>
          <button onClick={nextTestimonial}>
            <i className="fas fa-angle-right" style={{ fontSize: "30px" }}></i>
          </button>
        </div>
      </div>
      <div className={style.testimonialLinkContainer}>
        <Link to={"/testimonials"}>
          <button>all testimonials</button>
        </Link>
      </div>
    </div>
  );
};
