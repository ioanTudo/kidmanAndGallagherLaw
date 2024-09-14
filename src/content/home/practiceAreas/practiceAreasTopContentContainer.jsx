import { PracticeAreasContentTopData } from "../../../datas/contentData";
import { PracticeAreasTopContentDisplay } from "./practiceAreasTopContentDisplay";

export const PracticeAreasTopContentContainer = () => {
  return (
    <>
      {PracticeAreasContentTopData.map((data) => (
        <PracticeAreasTopContentDisplay
          heading={data.heading}
          key={data.id}
          content={data.content}
          sele
        />
      ))}
    </>
  );
};
