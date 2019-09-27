/* eslint-disable react/prop-types */
import React from 'react';
import '../../../assets/styles/blogItem.css';
const styles = {
	paddingLeft: '0',
	paddingRight: '0',
  };

const BlogItem = (props) => (
	<div key={props.blogId} className="col-md-4 home_list-item furem" style={styles}>
		<button className="blog-button" onClick={props.specificBlog.bind(this, props.slug)}>
			<img className="img-fluid" src={props.image_path} alt="blogImage"/>
		</button>
		<p className="tagi">tag:{props.tag}</p>
	</div>
);

export default BlogItem;
