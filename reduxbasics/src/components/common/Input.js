import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, boolSecure}) => {
	return(
		<View style = {styles.viewStyle}>
			<Text style = {styles.textStyle}>
				{label}
			</Text>
			<TextInput
				autoCorrect = {false}
				placeholder = {placeholder}
				value = {value}
				secureTextEntry = {boolSecure}
				onChangeText = {onChangeText}
				style= {styles.inputTextStyle}>
			</TextInput>
		</View>
	);
};

const styles = {
	textStyle: {
		flex: 1,
		fontSize: 18,
		paddingLeft: 20
	},
	inputTextStyle: {
		height: 40,
		width: 100,
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
		color: '#000'
	},
	viewStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export {Input};