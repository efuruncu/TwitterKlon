import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Input,MyButton} from './common';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged,loginUser} from '../actions';

class LoginForm extends Component{

    onButtonClicked(){
        const{email,password}=this.props;
        this.props.loginUser(email,password);
    }

    onEmailChanged(text){
        this.props.emailChanged(text);
    }
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }
    render(){
        const {error,loading}=this.props;
        const errorMsg =error ? (
        <Text style={styles.errorStyle}>{error}</Text>
        ):
        null;

        return(
            <View style={{padding:30}}> 
                <View>
                    <Input text='E-mail' inputPlaceHolder='Enter E-mail'
                    onChangeText={this.onEmailChanged.bind(this)}
                    value={this.props.email}
                    />
                </View>
                <View>
                    <Input text='Password' inputPlaceHolder='Enter Password'
                    onChangeText={this.onPasswordChanged.bind(this)}
                    inputSecureTextEntry
                    value={this.props.password}
                    />
                </View>
                   {errorMsg}
                <MyButton
                spinner={loading}
                title='Login'
                onPress={this.onButtonClicked.bind(this)}
                color='#E87B79'/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
buttonWrapper:{
    marginTop:20,
    height:49,
    borderRadius:10,
    backgroundColor:'white',
    justifyContent:'center',
    fontSize:18

},
errorStyle:{
    fontSize:20,
    color:'red',
    padding:5,
    alignSelf:"center"
}
});
const mapStateToProps = state => {
    const {email ,password,loading,error} = state.auth;
    return{
        email ,password,loading,error
        
    }
}
export default connect(mapStateToProps,
    {emailChanged,passwordChanged,loginUser})(LoginForm);
