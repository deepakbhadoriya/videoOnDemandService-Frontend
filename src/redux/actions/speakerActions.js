import axios from 'axios';

import baseUrl from '../../config/baseUrl';
import { GET_SPEAKERS, GET_SPEAKER, ADD_SPEAKER, UPDATE_SPEAKER, DELETE_SPEAKER } from '../type';

const getSpeakers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/speaker`);
    dispatch({ type: GET_SPEAKERS, payload: res.data });
  } catch (error) {}
};

const getSpeaker = (speakerId) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/speaker/${speakerId}`);
    dispatch({ type: GET_SPEAKER, payload: res.data });
  } catch (error) {}
};

const addSpeaker = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/speaker`, data);
    dispatch({ type: ADD_SPEAKER, payload: res.data });
  } catch (error) {}
};

const updateSpeaker = (data, speakerId) => async (dispatch) => {
  try {
    const res = await axios.put(`${baseUrl}/speaker/${speakerId}`, data);
    dispatch({ type: UPDATE_SPEAKER, payload: res.data });
  } catch (error) {}
};

const deleteSpeaker = (speakerId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${baseUrl}/speaker/${speakerId}`);
    dispatch({ type: DELETE_SPEAKER, payload: res.data });
  } catch (error) {}
};

const productAction = { getSpeakers, getSpeaker, addSpeaker, updateSpeaker, deleteSpeaker };

export default productAction;
