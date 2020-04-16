import React from 'react';
import {View,StyleSheet,Button} from 'react-native';
import {Spinner} from './spinner';

const MyButton =({spinner,title,onPress,color})=>{
    const content = spinner ? (
        <Spinner/>
    ):(
        <Button color={color} title={title}
             onPress={onPress}
                    />
    )
return(
    <View style={styles.buttonWrapper}>
        {content}
    </View>
)
}

const styles=StyleSheet.create({
    buttonWrapper:{
        marginTop:20,
        height:49,
        borderRadius:10,
        backgroundColor:'white',
        justifyContent:'center',
        fontSize:18
    
    }
});

export {MyButton}