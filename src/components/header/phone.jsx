import { Link } from "react-router-dom";
import phoneImg from "../../images/logos/phoneImg.png";
import style from "./header.module.css";

export const PhoneSection = () => {
  return (
    <Link to={"tel:0000000"}>
      <img className={style.phoneLogo} src={phoneImg} alt="phone logo" />
    </Link>
  );
};
