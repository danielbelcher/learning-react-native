import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardItem, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

    state = { loggedIn: null,};

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCozZ5TCeGbvOYOisDau9LgSoQGOxCFr5k',
			authDomain: 'auth-2204c.firebaseapp.com',
			databaseURL: 'https://auth-2204c.firebaseio.com',
			projectId: 'auth-2204c',
			storageBucket: 'auth-2204c.appspot.com',
			messagingSenderId: '54876149570'
        });
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            }
            else {
                this.setState({loggedIn: false});
            }
        });
    }
    
    renderContent() {
        switch(this.state.loggedIn){
            case true:
                return(<CardItem>
                    <Button onPress={() => firebase.auth().signOut()}>
                    Log Out, yo
                </Button>
                </CardItem>);
            case false:
                return(<LoginForm/>);
            default:
                return(<View style = {{flex:1}}><CardItem><Spinner/></CardItem></View>);
        }
    }

    // renderContent() {


    //     if(this.state.loggedIn){
    //         return(
    //             <CardItem>
    //                 <Button>
    //                 Log Out, yo
    //             </Button>
    //             </CardItem>
    //         );
    //     }

    //     return();
    // };

	render() {
		return(
			<View style = {{flex:1}}>
				<Header headerText = "Auth Yo"/>
				{this.renderContent()}
			</View>
		);
	}
}

export default App;