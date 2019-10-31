/* eslint-disable react/prop-types */
import React from "react";
import "../../../assets/styles/blogItem.css";
const styles = {
  paddingLeft: "0",
  paddingRight: "0"
};

const BlogItem = props => (
  <div
    key={props.blogId}
    className='col-sm-4 col-md-4 col-lg-3 col-xl-3 home_list-item furem'
    style={styles}
  >
    <button
      className='blog-button'
      onClick={props.specificBlog.bind(this, props.slug)}
    >
      <img className='img-fluid' src={props.image_path} alt='blogImage' />
    </button>
  </div>
);

export default BlogItem;
