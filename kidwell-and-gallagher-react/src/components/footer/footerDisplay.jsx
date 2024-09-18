import { BottomFormContainer } from "./bottomFormContainer";
import footerLogo from "../../images/logos/KG Logo-01.png";

import style from "./footerContainer.module.css";
import { Link } from "react-router-dom";
import { SocialFooterData } from "../../datas/contentData";
import { SocialFooterContainerDisplay } from "./footerSocialContainerDisplay";
import { FooterNavDisplay } from "./footerNavDisplay";
import { CopyrightContainer } from "./copyrightContainer";

export const FooterContainerDisplay = () => {
  return (
    <div>
      <div className={style.mountainsBgImg}></div>
      <div className={style.formAndSocialContainer}>
        <BottomFormContainer />
        <div>
          <div className={style.phoneContactFooter}>
            <Link to={"/"}>
              <img className={style.footerLogo} src={footerLogo} alt="" />
            </Link>
            <Link to="tel: (775) 323-2667"> (775) 323-2667</Link>
          </div>
          <div className={style.footerSocialContainer}>
            <SocialFooterContainerDisplay />
          </div>
          <div className={style.drivingMapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.74714999638!2d26.13517488485786!3d44.41783402807828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fff8ca4dfb7f%3A0xf40be41f13e12af6!2sStrada%20R%C3%A2mnicu%20V%C3%A2lcea%208%2C%20Bucure%C8%99ti%20031807!5e0!3m2!1sro!2sro!4v1725644999477!5m2!1sro!2sro"
              width="fit-content"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={style.diretctionsTextBtnContainer}>
              <h3>strada ramnicu valcea 8, bucuresti, romania</h3>
              <button>get directions</button>
            </div>
            <div>
              <FooterNavDisplay />
            </div>
            <div className={style.copyrightContainer}>
              <CopyrightContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
