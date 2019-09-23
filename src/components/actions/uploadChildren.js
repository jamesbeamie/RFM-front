import { UPLOAD_CHILDREN_SUCCESS, UPLOAD_CHILDREN_FAILED } from './types';
import urlPath from '../common/axiosConfig';

const uploadChildrenAction = (childData) => (dispatch) => {
	return urlPath
		.request({
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			url: '/children/',
			data: {
				image_path: childData.image,
				title: childData.title.toLowerCase()
			}
		})
		.then((blogdata) =>
			dispatch({
				type: UPLOAD_CHILDREN_SUCCESS,
				payload: blogdata
			})
		)
		.catch((err) =>
			dispatch({
				type: UPLOAD_CHILDREN_FAILED,
				payload: err
			})
		);
};
export default uploadChildrenAction;
