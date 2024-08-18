import { CasesContainer } from "../../content/home/casesContainer/casesContainer";
import { TrustIconsContainer } from "../../content/home/trustIconsContainer/trustIconsContainer";
import { TemplatePage } from "../../templates/templatePage";
import { ClaimsContainer } from "../../content/home/claimsContainer/claimsContainer";

export const HomePage = () => {
  return (
    <>
      <TemplatePage />
      <CasesContainer />
      <TrustIconsContainer />
      <ClaimsContainer />
    </>
  );
};
