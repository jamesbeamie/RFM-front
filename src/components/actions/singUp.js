import { SIGNUP_SUCSESS, SIGNUP_FAILED } from './types';
import urlPath from '../common/axiosConfig';

const signUpAction = (signUpData) => (dispatch) => {
	return urlPath
		.request({
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			url: '/users/',
			data: {
				user: {
					username: signUpData.username,
					email: signUpData.email,
					password: signUpData.password
				}
			}
		})
		.then((userdata) =>
			dispatch({
				type: SIGNUP_SUCSESS,
				payload: userdata
			})
		)
		.catch((err) =>
			dispatch({
				type: SIGNUP_FAILED,
				payload: err
			})
		);
};
export default signUpAction;
