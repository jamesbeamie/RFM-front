import { UPLOAD_ENGAGEMENT_SUCCESS, UPLOAD_ENGAGEMENT_FAILED } from '../../components/actions/types';

const engagementState = {
	newEngagement: {}
};

const engagementReducer = (state = engagementState, action) => {
	switch (action.type) {
		case UPLOAD_ENGAGEMENT_SUCCESS:
			return {
				...state,
				newEngagement: action.payload
			};
		case UPLOAD_ENGAGEMENT_FAILED:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default engagementReducer;
