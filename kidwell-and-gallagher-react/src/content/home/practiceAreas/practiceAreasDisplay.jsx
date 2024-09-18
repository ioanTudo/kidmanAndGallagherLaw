import { useState } from "react";
import style from "./practiceAreasContainer.module.css";
import { Link } from "react-router-dom";

export const PracticeAreasDisplay = ({ content, bgImg, selectiveImg }) => {
  return (
    <div
      className={style.practiceAreasSelectionDiv}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Link>
        <div className={style.selectiveContent}>
          <img src={selectiveImg} alt="" />

          <span>{content}</span>
        </div>
      </Link>
    </div>
  );
};
