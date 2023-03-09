import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradiant__text">Lorem Ipsum Eduta deruat</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="March 09, 2023"
            title="Lorem Ipusm rutrum augue"
          />
        </div>
        <div className="blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="March 09, 2023"
            title="Lorem Ipusm rutrum augue"
          />
          <Article
            imgUrl={blog03}
            date="March 09, 2023"
            title="Lorem Ipusm rutrum augue"
          />
          <Article
            imgUrl={blog04}
            date="March 09, 2023"
            title="Lorem Ipusm rutrum augue"
          />
          <Article
            imgUrl={blog05}
            date="March 09, 2023"
            title="Lorem Ipusm rutrum augue"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
