/* eslint-disable react/prop-types */
import React from 'react';
import ChildrenItem from './ChildrenItem';
import '../../../assets/styles/blogList.css';

const ChildrenList = (props) => {
	// can also use () then call this.props
	const fetchedChildren = props.childrens.map((blog) => {
		return <ChildrenItem key={blog.id} blogId={blog.id} image_path={blog.image_path} />;
	});
	return <div className="row">{fetchedChildren}</div>;
};

export default ChildrenList;
