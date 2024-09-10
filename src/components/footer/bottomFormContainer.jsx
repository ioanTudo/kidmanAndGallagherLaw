import style from "./footerContainer.module.css";

export const BottomFormContainer = () => {
  return (
    <div className={style.bottomFormContainer}>
      <div className={style.bottomFormTextContainer}>
        <h2>
          Fill out the form below to speak directly with an attorney to discuss
          your case free of charge or call{" "}
          <a href="tel:(775) 323-2667">(775) 323-2667</a>
        </h2>
      </div>

      <div className={style.formContentContainer}>
        <form action="">
          <input type="text" placeholder="full name" />
          <input type="text" placeholder="phone number" />
          <input type="text" placeholder="email adress" />
          <textarea name="" id="" placeholder="describe your case"></textarea>
        </form>
        <div className={style.formButtonContainer}>
          <button>submit</button>
        </div>
      </div>
    </div>
  );
};
