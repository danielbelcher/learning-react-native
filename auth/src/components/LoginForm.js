import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardItem, Input, Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({loading: false, email: '', password: '', error: ''});
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({loading: false, email: '', password: '', error: ''});
            })
            .catch(() => {
                this.setState({error: 'Authentication Failed.', loading: false, user: '', password: ''});
            });
        });
    }

    renderButton() {
        if(this.state.loading){
            return(<Spinner size = 'small' />);
        }
        else{
            return(<Button onPress = {this.onButtonPress.bind(this)}>
                Log In, yo
            </Button>);
        }
    }

    render() {
        return(
            <Card>
                <CardItem>
                    <Input
                    label = {'Username:'}
                    value = {this.state.email}
                    onChangeText = {email => this.setState({ email: email})}
                    placeholder = {'xxxnoscopexxx@gmail.com'}
                    />
                </CardItem>
                <CardItem>
                    <Input
                    placeholder = "password"
                    value = {this.state.password}
                    onChangeText = {password => this.setState({password: password})}
                    label = {'Password:'}
                    boolSecure
                    />
                </CardItem>

                {this.state.error != '' &&
                (<Text style= {styles.errorTextStyle}>
                    {this.state.error}
                </Text>)
                }

                <CardItem>
                    {
                        (this.state.loading && (
                            <Spinner />//size = 'small' />
                        )) || (
                            <Button onPress = {this.onButtonPress.bind(this)}>
                                 Log In, yo
                            </Button>
                        )
                    }
                    
                </CardItem>
            </Card>
        );
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;