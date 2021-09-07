import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const signIn = () => {};

export default function loginScreen({ navigation }) {
	const [email, setEmail] = useState(' ');
	const [password, setPassword] = useState(' ');
	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<StatusBar style='light' />
			<Image
				source={{
					uri: 'http://assets.stickpng.com/thumbs/6002f8aa51c2ec00048c6c68.png',
				}}
				style={{ width: 200, height: 200 }}
			/>
			<View style={styles.inputContainer}>
				<Input
					type='email'
					placeholder='Enter Email'
					autoFocus
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type='password'
					placeholder='Enter password'
					secureTextEntry
					onChange={(e) => setPassword(e.target.value)}
				/>
				{console.log(email + ' ' + password)}
			</View>
			<Button containerStyle={styles.button} title='Login' onPress={signIn()} />
			<Button
				type='outline'
				containerStyle={styles.button}
				title='Register'
				onPress={() => navigation.navigate('Register')}
			/>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: 'white',
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 10,
	},
});
