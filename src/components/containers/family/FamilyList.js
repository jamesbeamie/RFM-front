/* eslint-disable react/prop-types */
import React from "react";
import FamilyItem from "./FamilyItem";
import "../../../assets/styles/blogList.css";

const FamilyList = props => {
  // can also use () then call this.props
  const eraseFunction = props.deleteFam;
  const fetchedEngagements = props.families.map(familia => {
    return (
      <FamilyItem
        key={familia.id}
        familiaId={familia.id}
        slug={familia.slug}
        deleteFamilia={eraseFunction}
        image_path={familia.image_path}
      />
    );
  });
  return <div className='row'>{fetchedEngagements}</div>;
};

export default FamilyList;
