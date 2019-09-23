import { UPLOAD_CHILDREN_SUCCESS, UPLOAD_CHILDREN_FAILED } from '../../components/actions/types';

const bumpState = {
	newChild: {}
};

const childrenReducer = (state = bumpState, action) => {
	switch (action.type) {
		case UPLOAD_CHILDREN_SUCCESS:
			return {
				...state,
				newChild: action.payload
			};
		case UPLOAD_CHILDREN_FAILED:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default childrenReducer;
