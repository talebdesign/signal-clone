import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import loginScreen from './screens/loginScreen';
import registerScreen from './screens/registerScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const loginScreenOptions = {
	title: 'Login',
};
const registerScreenOptions = {
	title: 'Register',
};

const globalScreenOptions = {
	headerStyle: { backgroundColor: 'blue' },
	headerTitleStyle: { color: 'white' },
	headerTintColor: 'white',
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={globalScreenOptions}>
				<Stack.Screen
					name='Login'
					options={loginScreenOptions}
					component={loginScreen}
				/>
				<Stack.Screen
					name='Register'
					options={registerScreenOptions}
					component={registerScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
