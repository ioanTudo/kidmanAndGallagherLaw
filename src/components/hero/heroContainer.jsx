import { HeroImgData } from "../../datas/contentData";
import { HeroDisplay } from "./heroDisplay";

export const HeroContainer = ({ selectedPageId }) => {
  const selectedHeroImage = HeroImgData.find(
    (img) => img.id === selectedPageId
  );

  return (
    <>
      <HeroDisplay
        imgSrc={selectedHeroImage.imgSrc}
        header={selectedHeroImage.header}
        subHeader={selectedHeroImage.subHeader}
        beforeDesign={selectedHeroImage.beforeDesign}
        displayBtn={selectedHeroImage.displayBtn}
      />
    </>
  );
};
