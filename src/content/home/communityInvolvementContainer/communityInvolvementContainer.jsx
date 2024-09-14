import { CommunityInvolvementData } from "../../../datas/contentData";
import { CommunityInvolvementDisplay } from "./communityInvolvementContainerDisplay";

import style from "./communityInvolvement.module.css";

export const CommunityInvolvementContainer = () => {
  return (
    <div className={style.communityInvolvementContainer}>
      <div className={style.textContainer}>
        <h2>community involvement</h2>
        <p>
          Kidwell & Gallagher has over 45 years of combined experience
          representing clients across the country, but we have always held a
          special place in our hearts for the local communities that we work
          with most.
        </p>
        <button>community involvement</button>
      </div>
      <div className={style.imgContent}>
        {CommunityInvolvementData.map((data) => (
          <CommunityInvolvementDisplay
            key={data.id}
            imgSrcUrl={data.imgSrcUrl}
          />
        ))}
      </div>
    </div>
  );
};
