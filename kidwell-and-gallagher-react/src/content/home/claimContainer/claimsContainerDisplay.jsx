import style from "./claimsContainer.module.css";

export const ClaimsContainerDisplay = ({ header, content, id }) => {
  return (
    <div className={style.claimContent} key={id}>
      <h2 className={style.claimHeader}>{header}</h2>
      <p className={style.claimP}>{content}</p>
    </div>
  );
};
