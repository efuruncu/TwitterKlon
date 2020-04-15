/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {  StyleSheet, View,  Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

  export default class App extends Component{
    render(){
      return(
        <Provider store={createStore(reducers)}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Selam!!'..</Text>
            </View>
        </Provider>
      );
    }
  }
