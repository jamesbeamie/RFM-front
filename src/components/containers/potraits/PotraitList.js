/* eslint-disable react/prop-types */
import React from "react";
import PotraitItem from "./PotraitItem";
import "../../../assets/styles/blogList.css";

const PotraitList = props => {
  // can also use () then call this.props
  const eraseFunction = props.deletePtrait;
  const fetchedPotraits = props.potraits.map(protrait => {
    console.log("potrait-slug", protrait.slug);
    return (
      <PotraitItem
        key={protrait.id}
        protraitId={protrait.id}
        slug={protrait.slug}
        image_path={protrait.image_path}
        deletePotrait={eraseFunction}
      />
    );
  });
  return <div className='row'>{fetchedPotraits}</div>;
};

export default PotraitList;
