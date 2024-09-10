import { CasesContainer } from "./casesContainer/casesContainer.jsx";
import { TrustIconsContainer } from "./trustIconsContainer/trustIconsContainer.jsx";
import { ClaimsContainer } from "./claimContainer/claimsContainer.jsx";
import { PracticeAreasContainer } from "./practiceAreas/practiceAreasContainer.jsx";
import { TestimonialContainer } from "./testimonialsContainer/testimonialContainer.jsx";
import { AboutUsContainer } from "./aboutUsContainer/aboutUsContainer.jsx";
import { CommunityInvolvementContainer } from "./communityInvolvementContainer/communityInvolvementContainer.jsx";
import { FaqsContainer } from "./faqs/faqsContainer.jsx";
import { BlogPostContainer } from "./blogPostContainer/blogPostContainer.jsx";

export const HomePageContent = () => {
  return (
    <>
      <CasesContainer />
      <TrustIconsContainer />
      <ClaimsContainer />
      <PracticeAreasContainer />
      <TestimonialContainer />
      <AboutUsContainer />
      <CommunityInvolvementContainer />
      <FaqsContainer />
      <BlogPostContainer />
    </>
  );
};
