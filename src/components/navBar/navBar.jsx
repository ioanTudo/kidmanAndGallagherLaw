import { NavData } from "../../datas/contentData.js";
import { NavbarComponentDisplay } from "./navBarDisplay.jsx";
import style from "./navBar.module.css";

export const NavbarComponent = ({ navRef }) => {
  return (
    <nav className={style.nav} ref={navRef}>
      <ul className={style.navUl}>
        {NavData.map((item) => (
          <NavbarComponentDisplay
            content={item.content}
            path={item.path}
            id={item.path}
          />
        ))}
      </ul>
    </nav>
  );
};
