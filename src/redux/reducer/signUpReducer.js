import { SIGNUP_SUCSESS, SIGNUP_FAILED } from '../../components/actions/types';

const signUpState = {
	newUser: {}
};

const signUpReducer = (state = signUpState, action) => {
	switch (action.type) {
		case SIGNUP_SUCSESS:
			return {
				...state,
				newUser: action.payload
			};
		case SIGNUP_FAILED:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default signUpReducer;
