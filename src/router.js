import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import LoginForm from './components/loginform';
import Tweets from './components/tweets';

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

                </Scene>
            </Scene>
        </Router>
    )
}
export default RouterComp;