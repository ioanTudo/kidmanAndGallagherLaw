import { AboutUsData } from "../../../datas/contentData";
import { AboutUsContainerDisplay } from "./aboutUsContainerDisplay";

import style from "./aboutUsContainer.module.css";

export const AboutUsContainer = () => {
  return (
    <div className={style.aboutUsContainer}>
      <div className={style.aboutUsTopContainerText}>
        <h1>reno’s top-rated personal injury </h1>
        <p>
          With over 45 years of combined personal injury law experience
          representing clients nationwide, our team is dedicated to help our
          clients and our community. We also have two bilingual staff members to
          accommodate your needs!
        </p>
      </div>
      {AboutUsData.map((data) => (
        <AboutUsContainerDisplay
          role={data.role}
          key={data.id}
          bgImgUrl={data.bgImgUrl}
          attorneyName={data.attorneyName}
        />
      ))}
    </div>
  );
};
