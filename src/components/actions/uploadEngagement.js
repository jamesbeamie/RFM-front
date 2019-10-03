import { UPLOAD_ENGAGEMENT_SUCCESS, UPLOAD_ENGAGEMENT_FAILED } from './types';
import urlPath from '../common/axiosConfig';
import { toast } from 'react-toastify';

const uploadEngagementAction = (engagementData) => (dispatch) => {
	return urlPath
		.request({
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			url: '/engagements/',
			data: {
				image_path: engagementData.image,
				title: engagementData.title.toLowerCase()
			}
		})
		.then((engagementdata) =>
			dispatch({
				type: UPLOAD_ENGAGEMENT_SUCCESS,
				payload: engagementdata
			}),
			toast.success('image uploaded')
		)
		.catch((err) =>
			dispatch({
				type: UPLOAD_ENGAGEMENT_FAILED,
				payload: err
			})
		);
};
export default uploadEngagementAction;
