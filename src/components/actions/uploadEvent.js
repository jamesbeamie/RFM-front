import { UPLOAD_EVENT_SUCCESS, UPLOAD_EVENT_FAILED } from "./types";
import urlPath from "../common/axiosConfig";
import { toast } from "react-toastify";

const uploadEventAction = eventData => dispatch => {
  return urlPath
    .request({
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      url: "/events/",
      data: {
        image_path: eventData.image,
        title: eventData.title.toLowerCase()
      }
    })
    .then(
      blogdata =>
        dispatch({
          type: UPLOAD_EVENT_SUCCESS,
          payload: blogdata
        }),
      toast.success("image uploaded")
    )
    .catch(err =>
      dispatch({
        type: UPLOAD_EVENT_FAILED,
        error: err
      })
    );
};
export default uploadEventAction;
