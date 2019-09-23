import { CREATE_BLOGS_SUCCESS, CREATE_BLOGS_FAILED } from '../../components/actions/types';

const blogState = {
	blogs: [],
	newBlog: {}
};

const blogReducer = (state = blogState, action) => {
	switch (action.type) {
		case CREATE_BLOGS_SUCCESS:
			return {
				...state,
				newBlog: action.payload
			};
		case CREATE_BLOGS_FAILED:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default blogReducer;
