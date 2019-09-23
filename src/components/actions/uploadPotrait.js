import { UPLOAD_POTRAIT_SUCCESS, UPLOAD_POTRAIT_FAILED } from './types';
import urlPath from '../common/axiosConfig';

const uploadPotraitAction = (engagementData) => (dispatch) => {
	return urlPath
		.request({
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			url: '/potraits/',
			data: {
				image_path: engagementData.image,
				title: engagementData.title.toLowerCase()
			}
		})
		.then((engagementdata) =>
			dispatch({
				type: UPLOAD_POTRAIT_SUCCESS,
				payload: engagementdata
			})
		)
		.catch((err) =>
			dispatch({
				type: UPLOAD_POTRAIT_FAILED,
				payload: err
			})
		);
};
export default uploadPotraitAction;
