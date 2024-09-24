import { ClaimsContainerData } from "../../../datas/contentData";

import style from "./claimsContainer.module.css";
import { ClaimsContainerDisplay } from "./claimsContainerDisplay";
import { FormClaimDisplay } from "./formClaimDisplay";

export const ClaimsContainer = () => {
  return (
    <div className={style.gridWrapper}>
      <div className={style.infoContent}>
        <h2 className={style.infoHeader}>
          Personal Injury Law Firm In Reno, NV
        </h2>
        <p className={style.infoP}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          modi quibusdam accusamus veritatis doloremque asperiores recusandae
          pariatur est itaque, harum saepe repudiandae inventore nesciunt
          voluptates ea commodi nam beatae ipsum.
        </p>
      </div>
      {ClaimsContainerData.map((data) => (
        <ClaimsContainerDisplay
          key={data.id}
          content={data.content}
          header={data.header}
        />
      ))}
      <button className={style.claimsButton}>our firm</button>
      <div className={style.claimsForm}>
        <div className={style.formBanner}></div>
        <div className={style.formContent}>
          <h1>Get A Free Case Evaluation</h1>
          <p>
            If you or a loved one has been seriously injured, please fill out
            the form below for your free consultation or call us at
          </p>
        </div>
        <div className={style.formContainer}>
          <FormClaimDisplay />
        </div>
      </div>
    </div>
  );
};
