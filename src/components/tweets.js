import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchTweet} from '../actions';

class Tweets extends Component{
    componentDidMount(){
        this.props.fetchTweet();
    }
    render(){
        return(
            <View>
                <Text>Tweet</Text>
                <Text>Tweet</Text>
                <Text>Tweet</Text>
                <Text>Tweet</Text>
                <Text>Tweet</Text>
                <Text>Tweet</Text>
            </View>
        )
    }
}

const mapStateToProps=state =>{
    return{

    }
}

export default connect(mapStateToProps,
    {
        fetchTweet
    })(Tweets);