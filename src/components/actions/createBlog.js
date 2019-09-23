import { CREATE_BLOGS_SUCCESS, CREATE_BLOGS_FAILED } from './types';
import urlPath from '../common/axiosConfig';

const createBlogAction = (blogData) => (dispatch) => {
	return urlPath
		.request({
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			url: '/blog/',
			data: {
				image_path: blogData.image,
				title: blogData.title,
				tag: blogData.tag.toLowerCase(),
				description: blogData.description,
				body: blogData.body
			}
		})
		.then((blogdata) =>
			dispatch({
				type: CREATE_BLOGS_SUCCESS,
				payload: blogdata
			})
		)
		.catch((err) =>
			dispatch({
				type: CREATE_BLOGS_FAILED,
				payload: err
			})
		);
};
export default createBlogAction;
