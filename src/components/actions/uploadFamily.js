import { UPLOAD_FAMILY_SUCCESS, UPLOAD_FAMILY_FAILED } from './types';
import urlPath from '../common/axiosConfig';
import { toast } from 'react-toastify';

const uploadFamilyAction = (familyData) => (dispatch) => {
	return urlPath
		.request({
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			url: '/family/',
			data: {
				image_path: familyData.image,
				title: familyData.title.toLowerCase()
			}
		})
		.then((blogdata) =>
			dispatch({
				type: UPLOAD_FAMILY_SUCCESS,
				payload: blogdata
			}),
			toast.success('image uploaded')
		)
		.catch((err) =>
			dispatch({
				type: UPLOAD_FAMILY_FAILED,
				payload: err
			})
		);
};
export default uploadFamilyAction;
