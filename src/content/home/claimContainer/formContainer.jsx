import { FormClaimsData } from "../../../datas/contentData";
import { FormClaimDisplay } from "./formClaimDisplay";
import style from "./claimsContainer.module.css";

export const FontContainer = () => {
  return (
    <>
      {FormClaimsData.map((data) => (
        <FormClaimDisplay
          fontIcon={data.fontIcon}
          holder={data.holder}
          key={data.id}
        />
      ))}
    </>
  );
};
