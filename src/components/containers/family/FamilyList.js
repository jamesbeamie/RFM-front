/* eslint-disable react/prop-types */
import React from 'react';
import FamilyItem from './FamilyItem';
import '../../../assets/styles/blogList.css';

const FamilyList = (props) => {
	// can also use () then call this.props
	const fetchedEngagements = props.families.map((blog) => {
		return <FamilyItem key={blog.id} blogId={blog.id} image_path={blog.image_path} />;
	});
	return <div className="row">{fetchedEngagements}</div>;
};

export default FamilyList;
