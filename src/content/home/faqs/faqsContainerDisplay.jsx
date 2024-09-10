import { useRef, useState } from "react";
import style from "./faqsContainer.module.css";

export const FaqsContainerDisplay = ({ id, content, question }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const pRef = useRef(null);

  const expandArea = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={style.faqsContent}
      style={{ border: isExpanded ? "1px solid #cfb787 " : 0 }}
    >
      <div onClick={expandArea} className={style.faqQuestionContainer}>
        <h4 key={id}>{question}</h4>
        <i
          className={"fas fa-angle-down"}
          style={{
            fontSize: "26px",
            transition: "transform 0.5s ease, color 0.5s ease",
            transform: isExpanded ? "rotate(0deg)" : "rotate(180deg)",
            color: isExpanded ? "#cfb787" : "#000",
          }}
        ></i>
      </div>
      <p
        ref={pRef}
        key={id}
        style={{
          display: isExpanded ? "block" : "none",
        }}
      >
        {content}
      </p>
    </div>
  );
};
