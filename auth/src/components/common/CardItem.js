import React from 'react';
import { View, Text } from 'react-native';

const CardItem = (props) => {
    return(
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#666',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#555',
        position: 'relative'
    }
};

export {CardItem};