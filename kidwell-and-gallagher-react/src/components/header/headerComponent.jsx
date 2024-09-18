import { useState } from "react";
import { NavbarComponent } from "../navBar/navBar";
import { LogoNav } from "./logo";
import style from "./header.module.css";
import { BurgerMenu } from "../burgerMenu/burgerMenu";
import { PhoneSection } from "./phone";

export const HeaderComponent = ({ onPageSelect }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
    document.body.style.overflow = isNavVisible ? "visible" : "hidden";
  };

  return (
    <header className={style.header}>
      <LogoNav />
      <NavbarComponent
        isNavVisible={isNavVisible}
        onPageSelect={onPageSelect}
      />
      <PhoneSection />
      <BurgerMenu isNavVisible={isNavVisible} toggleNav={toggleNav} />
    </header>
  );
};
