import { useState } from "react";
import { HeaderComponent } from "../components/header/headerComponent";
import { HeroContainer } from "../components/hero/heroContainer";
import { FooterContainer } from "../components/footer/footerContainer";

export const TemplatePage = ({ children }) => {
  const [selectedPageId, setSelectedPageId] = useState(0);

  return (
    <>
      <HeaderComponent onPageSelect={setSelectedPageId} />
      <HeroContainer selectedPageId={selectedPageId} />
      {children}
      <FooterContainer />
    </>
  );
};
