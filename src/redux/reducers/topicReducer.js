import { GET_TOPICS, GET_TOPIC, ADD_TOPIC, DELETE_TOPIC } from '../type';

const initialState = {
  topics: null,
  topic: null,
};

export default function languageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TOPICS:
      return {
        ...state,
        topics: payload,
      };
    case GET_TOPIC:
      return {
        ...state,
        topic: payload,
      };
    case ADD_TOPIC:
      return {
        ...state,
        topics: [...state.topics, payload],
      };
    case DELETE_TOPIC:
      return {
        ...state,
        topics: state.topics.filter((topic) => topic._id !== payload._id),
      };
    default:
      return state;
  }
}
