import { StatusBar } from 'expo-status-bar';
import React, { useState, useLayoutEffect } from 'react';
import { Button, Input } from 'react-native-elements';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';

const register = () => {};

export default function registerScreen({ navigation }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [imgUrl, setImgUrl] = useState('');

	useLayoutEffect(() => {
		navigation.SetOptions = {
			headerBackTitle: 'Back to login',
		};
		return () => {};
	}, [navigation]);

	return (
		<KeyboardAvoidingView style={styles.conatiner} behavior='padding'>
			<StatusBar type='Light' />

			<Text h3 style={{ marginBottom: 50, fontSize: 30 }}>
				Create a signal account
			</Text>
			<View style={styles.inputContainer}>
				<Input
					type='text'
					placeholder='Full name'
					autoFocus
					value={name}
					onChange={(text) => setName(text)}
				/>
				<Input
					type='email'
					placeholder='Enter Email'
					value={email}
					onChange={(text) => setEmail(text)}
				/>
				<Input
					type='password'
					placeholder='Enter password'
					value={password}
					secureTextEntry
					onChange={(pw) => setPassword(pw)}
				/>
				<Input
					type='text'
					placeholder='Profile picture Url (optional)'
					value={imgUrl}
					onChange={(text) => setImgUrl(text)}
					onSubmit={register}
				/>
			</View>
			<Button raised title='Register' onPress={register} />
			<View style={{ height: 100 }}></View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: 'white',
	},
	inputContainer: {
		width: 300,
	},
});
