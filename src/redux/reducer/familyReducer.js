import { UPLOAD_FAMILY_SUCCESS, UPLOAD_FAMILY_FAILED } from '../../components/actions/types';

const familyState = {
	newFamily: {}
};

const familyReducer = (state = familyState, action) => {
	switch (action.type) {
		case UPLOAD_FAMILY_SUCCESS:
			return {
				...state,
				newFamily: action.payload
			};
		case UPLOAD_FAMILY_FAILED:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default familyReducer;
