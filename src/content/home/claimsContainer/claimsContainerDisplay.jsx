import style from "./claimsContainer.module.css";

export const ClaimsContainerDisplay = ({ header, content, id }) => {
  return (
    <div className={style} key={id}>
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
};
