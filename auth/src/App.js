import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCozZ5TCeGbvOYOisDau9LgSoQGOxCFr5k",
            authDomain: "auth-2204c.firebaseapp.com",
            databaseURL: "https://auth-2204c.firebaseio.com",
            projectId: "auth-2204c",
            storageBucket: "auth-2204c.appspot.com",
            messagingSenderId: "54876149570"
          });
    }

    render() {
        return(
            <View>
                <Header headerText = "Auth Yo"/>
                <LoginForm></LoginForm>
            </View>
        );
    }
}

export default App;