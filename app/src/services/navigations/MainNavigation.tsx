import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigation';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;
