/* eslint-disable react/prop-types */
import React from "react";
import EngagementItem from "./EngagementItem";
import "../../../assets/styles/blogList.css";

const EngagementList = (props) => {
  // can also use () then call this.props
  const eraseFunction = props.deleteEngagement;
  const fetchedEngagements = props.engagements.map((engamnt) => {
    return (
      <EngagementItem
        key={engamnt.id}
        engamntId={engamnt.id}
        slug={engamnt.slug}
        eraseEngmnt={eraseFunction}
        image_path={engamnt.image_path}
      />
    );
  });
  return (
    <div className='row' id='header-space'>
      {fetchedEngagements}
    </div>
  );
};

export default EngagementList;
