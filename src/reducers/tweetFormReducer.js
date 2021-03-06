import {TWEET_CHANGED,SEND_TWEET} from '../actions';

const INITIAL_STATE ={
   tweet:'' 
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case TWEET_CHANGED:
            return { ...state, tweet:action.payload}
        case SEND_TWEET:
            return { ...state,...INITIAL_STATE}
        default:
            return state;
    }
}