/* eslint-disable react/prop-types */
import React from 'react';
import '../../../assets/styles/blogItem.css';

const BlogItem = (props) => (
	<div key={props.blogId} className="col-md-4 home_list-item furem">
		<button className="" onClick={props.specificBlog.bind(this, props.slug)}>
			<img className="img-fluid" src={props.image_path} alt="blogImage"/>
		</button>
		<p className="tagi">tag:{props.tag}</p>
	</div>
);

export default BlogItem;
