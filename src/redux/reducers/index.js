import { combineReducers } from 'redux';
import video from './videoReducer';
import speaker from './speakerReducer';
import topic from './topicReducer';

export default combineReducers({ video, speaker, topic });
