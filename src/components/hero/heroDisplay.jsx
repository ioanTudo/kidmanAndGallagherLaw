import style from "./hero.module.css";
import "../../datas/contentData";
import { useEffect, useRef } from "react";

export const HeroDisplay = ({
  imgSrc,
  id,
  header,
  subHeader,
  beforeDesign,
  displayBtn,
}) => {
  const headerRef = useRef("");
  const btnRef = useRef("");
  useEffect(() => {
    if (beforeDesign === true) {
      headerRef.current.classList.add(style.heroHeading);
    } else if (beforeDesign === false) {
      headerRef.current.classList.remove(style.heroHeading);
      headerRef.current.classList.add(style.withoutBefore);
    }
  }, [beforeDesign]);

  useEffect(() => {
    if (displayBtn === true) {
      btnRef.current.style.display = "display";
    } else if (displayBtn === false) {
      btnRef.current.style.display = "none";
    }
  }, [displayBtn]);

  return (
    <div
      className={style.hero}
      key={id}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={style.heroContentContainer}>
        <h1 ref={headerRef}>{header}</h1>
        <h2 className={style.heroSubHeading}>{subHeader}</h2>
        <button ref={btnRef} className={style.contactUsBtn}>
          contact us now
        </button>
      </div>
    </div>
  );
};
