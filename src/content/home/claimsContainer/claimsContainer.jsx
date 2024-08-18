import { ClaimsContainerData } from "../../../datas/contentData";
import { ClaimsContainerDisplay } from "./claimsContainerDisplay";
import style from "./claimsContainer.module.css";

export const ClaimsContainer = () => {
  return (
    <div className={style.gridWrapper}>
      <div className={style.infoContent}>
        <h1>Personal Injury Law Firm In Reno, NV</h1>
        <p>
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
    </div>
  );
};
