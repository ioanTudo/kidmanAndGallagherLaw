import { useState } from "react";
import { HeaderComponent } from "../components/header/headerComponent";
import { HeroContainer } from "../components/hero/heroContainer";

export const TemplatePage = () => {
  const [selectedPageId, setSelectedPageId] = useState(0);

  return (
    <>
      <HeaderComponent onPageSelect={setSelectedPageId} />
      <HeroContainer selectedPageId={selectedPageId} />
    </>
  );
};
