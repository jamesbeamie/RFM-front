/* eslint-disable react/prop-types */
import React from "react";
import ChildrenItem from "./ChildrenItem";
import "../../../assets/styles/blogList.css";

const ChildrenList = props => {
  // can also use () then call this.props
  const eraseFunction = props.removeChild;
  const fetchedChildren = props.childrens.map(toto => {
    return (
      <ChildrenItem
        key={toto.id}
        totoId={toto.id}
        slug={toto.slug}
        eraseChild={eraseFunction}
        image_path={toto.image_path}
      />
    );
  });
  return <div className='row'>{fetchedChildren}</div>;
};

export default ChildrenList;
