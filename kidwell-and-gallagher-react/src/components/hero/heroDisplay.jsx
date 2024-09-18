import { NavData } from "../../datas/contentData";
import style from "./hero.module.css";
import { useEffect, useState } from "react";

export const HeroDisplay = ({
  imgSrc,
  header,
  subHeader,
  beforeDesign,
  displayBtn,
}) => {
  const [headerClass, setHeaderClass] = useState("");

  const changeColorAndSize = NavData.find(
    (navItem) => navItem.id === 1 || 2 || 3 || 4 || 5 || 6
  );
  const isPageActive = changeColorAndSize ? style.changeColorAndSize : false;

  useEffect(() => {
    setHeaderClass(
      beforeDesign
        ? style.heroHeading
        : `${style.heroHeadingSize} ${style.withoutBefore}`
    );
  }, [beforeDesign]);

  return (
    <div className={style.hero} style={{ backgroundImage: `url(${imgSrc})` }}>
      <div
        className={` ${
          isPageActive ? style.changeColorAndSize : style.heroContentContainer
        }`}
      >
        <h1 className={headerClass}>{header}</h1>
        <h2
          className={`${style.heroSubHeading} ${
            subHeader ? false : style.displayNone
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
