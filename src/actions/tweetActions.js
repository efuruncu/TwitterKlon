export const TWEET_CHANGED='tweet_changed';
export const SEND_TWEET ='send_tweet';

export const changeTweet = (tweet) =>{
    return{
        type:TWEET_CHANGED,
        payload:tweet
    }
}

export const sendTweet =(tweet) =>{
     //todo
     
}