import { Link } from "react-router-dom";
import copyrightLogo from "../../images/logos/elitelogoBottom.png";

export const CopyrightContainer = () => {
  return (
    <>
      <div>
        <p>
          Copyright © 2023 Kidwell & Gallagher LTD {""} – {""} All Rights
          Reserved.
        </p>
        <Link href="">Privacy Policy</Link>-
        <Link href="">Terms and Conditions</Link>
      </div>
      <div>
        <img src={copyrightLogo} alt="" />
      </div>
    </>
  );
};
