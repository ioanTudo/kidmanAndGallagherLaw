import { useEffect, useState } from "react";
import { HeroDisplay } from "./heroDisplay";
import { HeroImgData } from "../../datas/contentData";

export const HeroContainer = ({ selectedPageId }) => {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    console.log(`Selected page ID in HeroContainer: ${selectedPageId}`);
    const selectedHeroImage =
      HeroImgData.find((img) => img.id === selectedPageId) || null; // fallback la null dacă nu găsește nicio imagine
    console.log(`Selected Hero Image:`, selectedHeroImage);
    setHeroImage(selectedHeroImage);
  }, [selectedPageId]);

  return heroImage ? (
    <HeroDisplay
      imgSrc={heroImage.imgSrc}
      header={heroImage.header}
      subHeader={heroImage.subHeader}
      beforeDesign={heroImage.beforeDesign}
      displayBtn={heroImage.displayBtn}
      isPageActive={heroImage.true}
    />
  ) : selectedPageId ? (
    <p>Image not found for this page</p>
  ) : (
    <p>Loading...</p>
  );
};
