import { NavData, TestimonialsData } from "../../../datas/contentData";
import { TestimonialsDisplay } from "./testimonialsDisplay";

import style from "./testimonialsContainer.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TestimonialContainer = ({ isAboutPage }) => {
  const aboutPage = NavData.find((navItem) => navItem.id === 1);
  const isAboutPageActive = aboutPage ? isAboutPage : false;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialsData.length) % TestimonialsData.length
    );
  };

  return (
    <div
      className={`${
        isAboutPageActive
          ? style.testimonialWithoutBg
          : style.testimonialContainer
      }`}
    >
      <div
        className={`${
          isAboutPageActive
            ? style.displayNoneContent
            : style.testimonialIntroductionContent
        }`}
      >
        <h1>client testimonials</h1>
        <p>We have multiple Five Star Reviews from happy clients on Google.</p>
      </div>
      {TestimonialsData.map((data, id) => (
        <TestimonialsDisplay
          isActive={id === currentIndex}
          stars={data.stars}
          content={data.content}
          key={id}
          user={data.user}
        />
      ))}
      <div
        className={`${
          isAboutPageActive
            ? style.btnContainerPosition
            : style.buttonsContainer
        }`}
      >
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
