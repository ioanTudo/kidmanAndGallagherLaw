import { Link } from "react-router-dom";
import { NavData } from "../../datas/contentData";
import style from "./footerContainer.module.css";

export const FooterNavDisplay = () => {
  return (
    <div className={style.footerNavContentGrid}>
      {NavData.map((data) => (
        <Link
          className={style[data.gridPositionClass]}
          to={data.path}
          key={data.id}
        >
          {data.content}
        </Link>
      ))}
    </div>
  );
};
