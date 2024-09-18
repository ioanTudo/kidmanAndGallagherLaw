import { PracticeAreasContainersData } from "../../../datas/contentData";
import { PracticeAreasDisplay } from "./practiceAreasDisplay";
import { PracticeAreasTopContentContainer } from "./practiceAreasTopContentContainer";

import style from "./practiceAreasContainer.module.css";

export const PracticeAreasContainer = () => {
  return (
    <div className={style.practiceAreasContainer}>
      <PracticeAreasTopContentContainer />
      {PracticeAreasContainersData.map((data) => (
        <PracticeAreasDisplay
          content={data.content}
          bgImg={data.bgImg}
          key={data.id}
          heading={data.heading}
          selectiveImg={data.selectiveImg}
        />
      ))}
      <button> all practice areas</button>
    </div>
  );
};
