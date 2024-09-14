import style from "./caseContainer.module.css";
import blueBackgroundImg from "../../../images/background-images/backgroundImgBlue.png";

export const CasesContainerDisplay = ({
  caseLogo,
  amountWon,
  id,
  caseReason,
}) => {
  return (
    <div style={{ backgroundImage: `url(${blueBackgroundImg})` }}>
      <div className={style.gridWrapper} key={id}>
        <img src={caseLogo} alt="" />
        <p>settlement</p>
        <h1 className={style.amountHeader}>{amountWon}</h1>
        <h2>{caseReason}</h2>
      </div>
    </div>
  );
};
