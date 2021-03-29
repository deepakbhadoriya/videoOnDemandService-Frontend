import { GET_SPEAKERS, GET_SPEAKER, ADD_SPEAKER, DELETE_SPEAKER } from '../type';

const initialState = {
  speakers: null,
  speaker: null,
};

export default function languageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SPEAKERS:
      return {
        ...state,
        speakers: payload,
      };
    case GET_SPEAKER:
      return {
        ...state,
        speaker: payload,
      };
    case ADD_SPEAKER:
      return {
        ...state,
        speakers: [...state.speakers, payload],
      };
    case DELETE_SPEAKER:
      return {
        ...state,
        speakers: state.speakers.filter((speaker) => speaker._id !== payload._id),
      };
    default:
      return state;
  }
}
