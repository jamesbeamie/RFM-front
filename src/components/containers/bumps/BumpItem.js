/* eslint-disable react/prop-types */
import React from 'react';
import '../../../assets/styles/blogItem.css';
const styles = {
	paddingLeft: '0',
	paddingRight: '0',
  };

const BumpItem = (props) => (
	<div key={props.blogId} className="col-md-4 col-xl-3 furem" style={styles}>
			<img className="img-fluid picha" src={props.image_path} alt="bumpImage"/>
	</div>
);

export default BumpItem;
