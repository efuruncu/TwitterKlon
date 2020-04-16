import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Input,MyButton} from './common';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';

class LoginForm extends Component{
    state ={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onButtonClicked(){
        const{email,password}=this.props;
        this.setState({
            error:'',
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))    
            .catch(this.onLoginFailed.bind(this))
        });
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false  
        })
    }
    onLoginFailed(){
        this.setState({
        error:'Authentication failed.',
        loading:false
        })
    }
    onEmailChanged(text){
        this.props.emailChanged(text);
    }
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }
    render(){
        const {error,loading}=this.state;
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
    const {email ,password} = state.auth;
    return{
        email:email,
        password:password
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged})(LoginForm);
