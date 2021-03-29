import { GET_VIDEOS, GET_VIDEO, DELETE_VIDEO, ADD_VIDEO } from '../type';

const initialState = {
  videos: null,
  video: null,
};

export default function languageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: payload,
      };
    case GET_VIDEO:
      return {
        ...state,
        video: payload,
      };
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, payload],
      };
    case DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter((video) => video._id !== payload._id),
      };
    default:
      return state;
  }
}
