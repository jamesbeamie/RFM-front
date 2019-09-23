/* eslint-disable react/prop-types */
import React from 'react';
import BlogItem from './BlogItem';
import '../../../assets/styles/blogList.css';

const BlogList = (props) => {
	const fetchedBlogs = props.blogs.map((blog) => {
		return (
			<BlogItem
				key={blog.id}
				blogId={blog.id}
				title={blog.title}
				body={blog.body}
				slug={blog.slug}
				description={blog.description}
				tag={blog.tag}
				image_path={blog.image_path}
				created_at={blog.created_at}
				updated_at={blog.updated_at}
				specificBlog={props.blogDetails}
			/>
		);
	});
	return <div className="row">{fetchedBlogs}</div>;
};

export default BlogList;
