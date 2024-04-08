import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import * as Screen from '../../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Signup">
      <Stack.Screen name="Welcome" component={Screen.WelcomeScreen} />
      <Stack.Screen name="Login" component={Screen.LoginScreen} />
      <Stack.Screen name="Signup" component={Screen.SignupScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
