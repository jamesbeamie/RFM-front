/* eslint-disable react/prop-types */
import React from 'react';
import '../../../assets/styles/blogItem.css';
const styles = {
	paddingLeft: '0',
	paddingRight: '0'
};
const FamilyItem = (props) => (
	<div key={props.blogId} className="col-md-4 furem" style={styles}>
		<img className="img-fluid picha" src={props.image_path} />
	</div>
);

export default FamilyItem;
