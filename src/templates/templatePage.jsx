import { useState } from "react";
import { HeaderComponent } from "../components/header/headerComponent";
import { HeroContainer } from "../components/hero/heroContainer";
import { FooterContainer } from "../components/footer/footerContainer";

export const TemplatePage = ({ children }) => {
  const [selectedPageId, setSelectedPageId] = useState(0);

  const handlePageSelect = (id) => {
    console.log(`New page ID set: ${id}`);
    setSelectedPageId(id);
  };

  console.log(`Current selectedPageId: ${selectedPageId}`);

  return (
    <>
      <HeaderComponent onPageSelect={handlePageSelect} />
      <HeroContainer selectedPageId={selectedPageId} />
      {children}
      <FooterContainer />
    </>
  );
};
