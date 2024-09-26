import style from "./hero.module.css";
import { useEffect, useState } from "react";

export const HeroDisplay = ({
  imgSrc,
  header,
  subHeader,
  beforeDesign,
  displayBtn,
  isPageActive,
  isContactPageActive,
}) => {
  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    setHeaderClass(
      beforeDesign
        ? style.heroHeading
        : `${style.heroHeadingSize} ${style.withoutBefore}`
    );
  }, [beforeDesign]);

  return (
    <div
      className={`${isPageActive ? style.hero : style.opacityGiven} ${
        isContactPageActive ? style.contactHero : ""
      }`}
      style={{
        backgroundImage: isContactPageActive ? "none" : `url(${imgSrc})`,
        backgroundColor: isContactPageActive ? "white" : "#073652",
      }}
    >
      <div
        className={`${
          isPageActive ? style.heroContentContainer : style.changeColorAndSize
        }`}
      >
        <h1
          style={{ color: isContactPageActive ? "black" : "" }}
          className={headerClass}
        >
          {header}
        </h1>
        <h2
          className={`${style.heroSubHeading} ${
            !subHeader ? style.displayNone : ""
          }`}
        >
          {subHeader}
        </h2>
        {displayBtn && (
          <button className={style.contactUsBtn}>Contact us now</button>
        )}
      </div>
    </div>
  );
};
