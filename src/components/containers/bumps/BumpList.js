/* eslint-disable react/prop-types */
import React from "react";
import BumpItem from "./BumpItem";
import "../../../assets/styles/blogList.css";

const BumpList = props => {
  // can also use () then call this.props
  const eraseFunction = props.deleteBump;
  const fetchedBumps = props.bumps.map(bump => {
    return (
      <BumpItem
        key={bump.id}
        bumpId={bump.id}
        slug={bump.slug}
        image_path={bump.image_path}
        eraseBump={eraseFunction}
      />
    );
  });
  return <div className='row'>{fetchedBumps}</div>;
};

export default BumpList;
