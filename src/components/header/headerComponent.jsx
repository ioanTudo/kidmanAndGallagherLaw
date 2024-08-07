import { NavbarComponent } from "../navBar/navBar";
import { LogoNav } from "./logo";
import style from "./header.module.css";
import { BurgerMenu } from "../burgerMenu/burgerMenu";
import { PhoneSection } from "./phone";
import { useRef } from "react";

export const HeaderComponent = () => {
  const navRef = useRef(null);
  return (
    <header className={style.header}>
      <LogoNav />
      <NavbarComponent navRef={navRef} />
      <PhoneSection />
      <BurgerMenu navRef={navRef} />
    </header>
  );
};
