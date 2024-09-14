import { FaqsData } from "../../../datas/contentData";
import style from "./faqsContainer.module.css";
import { FaqsContainerDisplay } from "./faqsContainerDisplay";

export const FaqsContainer = () => {
  return (
    <div className={style.faqsContainer}>
      <div className={style.faqsTextContainer}>
        <h2>frequently asked questions</h2>
        <p>
          When you schedule your free consultation with a personal injury lawyer
          in Reno, Nevada, you should come prepared with specific questions for
          us to adress
        </p>
      </div>
      <div className={style.faqsPosition}>
        {FaqsData.map((data) => (
          <FaqsContainerDisplay
            key={data.id}
            content={data.content}
            question={data.question}
          />
        ))}
      </div>
      <div className={style.faqImg}></div>
      <div className={style.faqBottomTextContainer}>
        <h2 style={{ textTransform: "toUpperCase(0)" }}>
          have a different question?
        </h2>
        <button>ask our attorneys</button>
      </div>
    </div>
  );
};
