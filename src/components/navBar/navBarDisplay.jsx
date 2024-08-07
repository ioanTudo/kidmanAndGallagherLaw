import { Link } from "react-router-dom";
import style from "./navBar.module.css";

export const NavbarComponentDisplay = ({ content, path, id }) => {
  return (
    <li className={style.navLi} key={id}>
      <Link to={path}>{content}</Link>
    </li>
  );
};
