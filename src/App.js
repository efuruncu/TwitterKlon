
import React,{Component} from 'react';
import {  StyleSheet, View,  Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginform';

  export default class App extends Component{
    componentDidMount(){
      const firebaseConfig = {
        apiKey: "AIzaSyCumITmVE-XLN6_QJ9JMOOmxSIyxRJ_4G8",
        authDomain: "twitterklon-53391.firebaseapp.com",
        databaseURL: "https://twitterklon-53391.firebaseio.com",
        projectId: "twitterklon-53391",
        storageBucket: "twitterklon-53391.appspot.com",
        messagingSenderId: "188076555183",
        appId: "1:188076555183:web:58fcbbe746143bef978d5a"
      };
      firebase.initializeApp(firebaseConfig);
    }
    render(){
      return(
        <Provider store={createStore(reducers)}>
          <View>
            <LoginForm/>
            </View>
        </Provider>
      )
    }
  }
