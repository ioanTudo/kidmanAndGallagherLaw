import { NavData } from "../../datas/contentData.js";
import { NavbarComponentDisplay } from "./navBarDisplay.jsx";
import style from "./navBar.module.css";

export const NavbarComponent = ({ isNavVisible, onPageSelect }) => {
  return (
    <nav
      className={`${style.nav} ${
        isNavVisible ? style.navVisible : style.navHidden
      }`}
    >
      <ul className={style.navUl}>
        {NavData.map((item) => (
          <NavbarComponentDisplay
            key={item.id}
            content={item.content}
            path={item.path}
            id={item.id}
            onPageSelect={onPageSelect}
          />
        ))}
      </ul>
    </nav>
  );
};
