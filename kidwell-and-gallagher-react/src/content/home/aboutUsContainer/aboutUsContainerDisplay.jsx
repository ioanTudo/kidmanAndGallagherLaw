import style from "./aboutUsContainer.module.css";

export const AboutUsContainerDisplay = ({
  bgImgUrl,
  role,
  attorneyName,
  id,
}) => {
  return (
    <div
      className={style.aboutUsContent}
      style={{ backgroundImage: `url(${bgImgUrl})` }}
      key={id}
    >
      <div className={style.aboutUsTextContainer}>
        <h2>{attorneyName}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};
