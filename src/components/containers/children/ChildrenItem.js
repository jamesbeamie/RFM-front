/* eslint-disable react/prop-types */
import React from "react";
import "../../../assets/styles/blogItem.css";
const styles = {
  paddingLeft: "0",
  paddingRight: "0"
};
const userToken = localStorage.getItem("token");
const ChildrenItem = props => (
  <div
    key={props.blogId}
    className='col-sm-4 col-md-4 col-lg-3 col-xl-3 furem'
    style={styles}
  >
    <img className='img-fluid picha' src={props.image_path} alt='childImage' />
    {userToken && (
      <button
        className='baton'
        onClick={props.eraseChild.bind(this, props.slug)}
      >
        delete
      </button>
    )}
  </div>
);

export default ChildrenItem;
