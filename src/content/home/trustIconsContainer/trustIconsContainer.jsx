import { TrustIconsContainerDisplay } from "./trustIconsContainerDisplay";
import { TrustIconsContainerData } from "../../../datas/contentData";

import style from "./trustIcons.module.css";

export const TrustIconsContainer = () => {
  return (
    <div className={style.flexWrapper}>
      {TrustIconsContainerData.map((data) => (
        <TrustIconsContainerDisplay
          key={data.id}
          altText={data.altText}
          trustLogo={data.trustLogo}
        />
      ))}
    </div>
  );
};
