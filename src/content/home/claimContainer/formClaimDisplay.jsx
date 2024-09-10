import style from "./claimsContainer.module.css";

export const FormClaimDisplay = () => {
  return (
    <div className={style.formInputContent}>
      <form action="">
        <div className={style.fullNameInput}>
          <input placeholder={"full name"} type="text" />
          <i className={"fa fa-user"} style={{ fontSize: "30px" }}></i>
        </div>

        <div className={style.phoneNumberInput}>
          <input placeholder={"phone number"} type="text" />
          <i className={"fa fa-phone"} style={{ fontSize: "30px" }}></i>
        </div>

        <div className={style.emailInput}>
          <input placeholder={"email adress"} type="text" />
          <i className={"fa fa-envelope"} style={{ fontSize: "30px" }}></i>
        </div>
        <textarea placeholder={"case details"} name="" id=""></textarea>
        <button className={style.formButton}>
          get free consultation
          <i
            className={"fas fa-long-arrow-alt-right"}
            style={{ fontSize: "30px" }}
          ></i>
        </button>
      </form>
    </div>
  );
};
