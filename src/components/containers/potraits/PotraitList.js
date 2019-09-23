/* eslint-disable react/prop-types */
import React from 'react';
import PotraitItem from './PotraitItem';
import '../../../assets/styles/blogList.css';

const PotraitList = (props) => {
	// can also use () then call this.props
	const fetchedPotraits = props.potraits.map((blog) => {
		return <PotraitItem key={blog.id} blogId={blog.id} image_path={blog.image_path} />;
	});
	return <div className="row">{fetchedPotraits}</div>;
};

export default PotraitList;
