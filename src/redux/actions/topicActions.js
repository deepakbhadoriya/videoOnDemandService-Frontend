import axios from 'axios';

import baseUrl from '../../config/baseUrl';
import { GET_TOPICS, GET_TOPIC, ADD_TOPIC, UPDATE_TOPIC, DELETE_TOPIC } from '../type';

const getTopics = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/topic`);
    dispatch({ type: GET_TOPICS, payload: res.data });
  } catch (error) {}
};

const getTopic = (topicId) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/topic/${topicId}`);
    dispatch({ type: GET_TOPIC, payload: res.data });
  } catch (error) {}
};

const addTopic = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/topic`, data);
    dispatch({ type: ADD_TOPIC, payload: res.data });
  } catch (error) {}
};

const updateTopic = (data, topicId) => async (dispatch) => {
  try {
    const res = await axios.put(`${baseUrl}/topic/${topicId}`, data);
    dispatch({ type: UPDATE_TOPIC, payload: res.data });
  } catch (error) {}
};

const deleteTopic = (topicId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${baseUrl}/topic/${topicId}`);
    dispatch({ type: DELETE_TOPIC, payload: res.data });
  } catch (error) {}
};

const productAction = { getTopics, getTopic, addTopic, updateTopic, deleteTopic };

export default productAction;
