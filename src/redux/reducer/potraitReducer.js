import { UPLOAD_POTRAIT_SUCCESS, UPLOAD_POTRAIT_FAILED } from '../../components/actions/types';

const bumpState = {
	newPotrait: {}
};

const potraitReducer = (state = bumpState, action) => {
	switch (action.type) {
		case UPLOAD_POTRAIT_SUCCESS:
			return {
				...state,
				newPotrait: action.payload
			};
		case UPLOAD_POTRAIT_FAILED:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default potraitReducer;
