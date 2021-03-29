import axios from 'axios';

import baseUrl from '../../config/baseUrl';
import { GET_VIDEOS, GET_VIDEO, ADD_VIDEO, UPDATE_VIDEO, DELETE_VIDEO } from '../type';

const getVideos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/video`);
    dispatch({ type: GET_VIDEOS, payload: res.data });
  } catch (error) {}
};

const getVideo = (videoId) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/video/${videoId}`);
    dispatch({ type: GET_VIDEO, payload: res.data });
  } catch (error) {}
};

const addVideo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/video`, data);
    dispatch({ type: ADD_VIDEO, payload: res.data });
  } catch (error) {}
};

const updateVideo = (data, videoId) => async (dispatch) => {
  try {
    const res = await axios.put(`${baseUrl}/video/${videoId}`, data);
    dispatch({ type: UPDATE_VIDEO, payload: res.data });
  } catch (error) {}
};

const deleteVideo = (videoId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${baseUrl}/video/${videoId}`);
    dispatch({ type: DELETE_VIDEO, payload: res.data });
  } catch (error) {}
};

const productAction = { getVideos, getVideo, addVideo, updateVideo, deleteVideo };

export default productAction;
