import { BottomFormContainer } from "../../components/footer/bottomFormContainer";
import { TestimonialContainer } from "../home/testimonialsContainer/testimonialContainer";

export const AboutContent = () => {
  return (
    <>
      <BottomFormContainer isAboutPage={true} />
      <TestimonialContainer isAboutPage={true} />
    </>
  );
};
