//Import a library to help create a component
import React from 'react';
import { View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Header headerText={'Albums - Yo'} />
            <AlbumList />
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#FFF'
    },
    viewStyle: {
        backgroundColor: '#333',
        flex: 1
    }
};

//render it to the device
AppRegistry.registerComponent('albums', () => App);