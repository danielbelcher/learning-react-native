import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList'

const App = () => {
    return(
        <Provider store={createStore(reducers)}>
        <View style = {styles.viewStyles}>
            <Header headerText = 'Redux Practice Yo'/>
            <LibraryList/>
        </View>
        </Provider>
    );
};

const styles = {
    viewStyles: {
        backgroundColor: '#666',
        flux: 1
    } 
};

export default App;