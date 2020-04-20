import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import TweetFormReducer from './tweetFormReducer';


export default combineReducers({
  auth :AuthReducer,
  tweetForm:TweetFormReducer
});