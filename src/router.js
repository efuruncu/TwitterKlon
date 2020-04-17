import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import LoginForm from './components/loginform';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import UpdateTweet from './components/updateTweet';

const RouterComp = ()=>{
    return(
        <Router titleStyle={{color:'#E87B79'}}>
            <Scene key='root' hideNavBar={true}>
                <Scene key='auth'>
                    <Scene key='login'
                        component={LoginForm}
                        title='Login'
                        hideNavBar={true}
                        initial/>
                </Scene>
                <Scene key='main' >
                    <Scene key='tweets'
                    component={Tweets}
                    title='Tweets'
                    initial>
                    </Scene>
                    <Scene key='newTweet'
                    component={NewTweet}
                    title='New Tweet'
                    >
                    </Scene>
                    <Scene key='updateTweet'
                    component={UpdateTweet}
                    title='Update / Delete Tweet'
                    >
                    </Scene>

                </Scene>
            </Scene>
        </Router>
    )
}
export default RouterComp;