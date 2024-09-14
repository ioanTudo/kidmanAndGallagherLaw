import style from "./footerContainer.module.css";

import { FooterContainerDisplay } from "./footerDisplay.jsx";

export const FooterContainer = () => {
  return (
    <div className={style.footerContainer}>
      <FooterContainerDisplay />
    </div>
  );
};
