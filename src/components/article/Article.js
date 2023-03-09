import React from "react";
import "./article.css";
const Article = ({ imgUrl, title, date }) => {
  return (
    <div className="blog-container_article">
      <div className="blog-container_article-image">
        <img src={imgUrl} alt="blog " />
      </div>
      <div className="blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
