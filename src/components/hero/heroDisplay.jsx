import { useEffect, useRef } from "react";
import style from "./hero.module.css";

export const HeroDisplay = ({
  imgSrc,
  header,
  subHeader,
  beforeDesign,
  displayBtn,
}) => {
  const headerRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (beforeDesign) {
      headerRef.current.classList.add(style.heroHeading);
    } else {
      headerRef.current.classList.remove(style.heroHeading);
      headerRef.current.classList.add(style.withoutBefore);
    }
  }, [beforeDesign]);

  useEffect(() => {
    btnRef.current.style.display = displayBtn ? "block" : "none";
  }, [displayBtn]);

  return (
    <div className={style.hero} style={{ backgroundImage: `url(${imgSrc})` }}>
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
