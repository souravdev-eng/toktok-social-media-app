import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
