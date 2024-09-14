import { Link } from "react-router-dom";
import style from "./navBar.module.css";

export const NavbarComponentDisplay = ({ content, path, id, onPageSelect }) => {
  const handleClick = () => {
    if (onPageSelect) {
      onPageSelect(id);
      console.log("Clicked page ID:", id);
    }
  };

  return (
    <li className={style.navLi}>
      <Link onClick={handleClick} to={path}>
        {content}
      </Link>
    </li>
  );
};
