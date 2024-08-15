import { CasesContainerData } from "../../../datas/contentData";
import { CasesContainerDisplay } from "./casesContainerDisplay";
import style from "./caseContainer.module.css";

export const CasesContainer = () => {
  return (
    <>
      {CasesContainerData.map((data) => (
        <CasesContainerDisplay
          key={data.id}
          caseLogo={data.caseLogo}
          amountWon={data.amountWon}
          caseReason={data.caseReason}
        />
      ))}
      <div className={style.viewResultsContainer}>
        <div className={style.viewResultsContainerContent}>
          <h2>view all results</h2>
        </div>
      </div>
    </>
  );
};
