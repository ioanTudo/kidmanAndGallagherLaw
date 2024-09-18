import { BlogPostData } from "../../../datas/contentData";
import { BlogPostContainerDisplay } from "./blogPostContainerDisplay";
import style from "./blogPostContainer.module.css";

export const BlogPostContainer = () => {
  return (
    <div className={style.blogPostContainer}>
      {BlogPostData.map((data) => (
        <BlogPostContainerDisplay
          key={data.id}
          day={data.day}
          yearAndMonth={data.yearAndMonth}
          content={data.content}
          bgImg={data.bgImg}
          heading={data.heading}
        />
      ))}
      <div className={style.buttonContainer}>
        <button>view all blog posts</button>
      </div>
    </div>
  );
};
