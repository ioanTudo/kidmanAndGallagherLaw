import { Link } from "react-router-dom";
import style from "./header.module.css";

export const LogoNav = () => {
  return (
    <Link to={"/"}>
      <div className={style.logo}></div>
    </Link>
  );
};
