import style from "./trustIcons.module.css";

export const TrustIconsContainerDisplay = ({ id, trustLogo, altText }) => {
  return (
    <div className={style.logoContainer} key={id}>
      <img className={style.trustLogo} src={trustLogo} alt={altText} />
    </div>
  );
};
