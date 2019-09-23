import { SIGNIN_SUCCESS, SIGNIN_FAILED } from '../../components/actions/types';

const signUpState = {
	loginUser: {}
};

const signInReducer = (state = signUpState, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:
			// eslint-disable-next-line no-case-declarations
			const token = action.payload.data.user.token;
			localStorage.setItem('token', `${token}`);
			return {
				...state,
				loginUser: action.payload
			};
		case SIGNIN_FAILED:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default signInReducer;
