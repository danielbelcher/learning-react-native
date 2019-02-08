//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
           <Text style={textStyle}>{props.headerText}</Text>
        </View> 
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    viewStyle: {
        backgroundColor: '#999999',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 10,
        position: 'relative'
    }
};


//make the component available to other parts of the app
export {Header};