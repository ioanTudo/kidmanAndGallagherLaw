import style from "./communityInvolvement.module.css";

export const CommunityInvolvementDisplay = ({ imgSrcUrl, id }) => {
  return (
    <div className={style.communityInvolvementContent}>
      <img key={id} src={imgSrcUrl} alt="" />
    </div>
  );
};
