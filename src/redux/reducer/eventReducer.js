import {
  UPLOAD_EVENT_SUCCESS,
  UPLOAD_EVENT_FAILED
} from "../../components/actions/types";

const eventState = {
  newEvent: {}
};

const eventReducer = (state = eventState, action) => {
  switch (action.type) {
    case UPLOAD_EVENT_SUCCESS:
      return {
        ...state,
        newEvent: action.payload
      };
    case UPLOAD_EVENT_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default eventReducer;
