import { useEffect, useState } from "react";
import { HeroDisplay } from "./heroDisplay";
import { HeroImgData } from "../../datas/contentData";

export const HeroContainer = ({ selectedPageId }) => {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    console.log(`Selected page ID in HeroContainer: ${selectedPageId}`);
    const selectedHeroImage =
      HeroImgData.find((img) => img.id === selectedPageId) || null;
    console.log(`Selected Hero Image:`, selectedHeroImage);
    setHeroImage(selectedHeroImage);
  }, [selectedPageId]);

  const isHomePage = selectedPageId === 0;
  const contactPageActive = selectedPageId === 6;
  const isLoading = selectedPageId === null || selectedPageId === undefined;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!heroImage) {
    return <p>Image not found for this page</p>;
  }

  return (
    <HeroDisplay
      imgSrc={heroImage.imgSrc}
      header={heroImage.header}
      subHeader={heroImage.subHeader}
      beforeDesign={heroImage.beforeDesign}
      displayBtn={heroImage.displayBtn}
      isPageActive={isHomePage}
      isContactPageActive={contactPageActive}
    />
  );
};
