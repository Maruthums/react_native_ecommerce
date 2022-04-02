import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../main/home';
import MyTabs from './tab';
import DrawerStackNavigator from './drawer';
import Login from '../auth/Login';

const Stack = createNativeStackNavigator();

const MyStack=()=> {
  return (
    <Stack.Navigator 
    initialRouteName={'Login'}
    screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerStackNavigator} />
    </Stack.Navigator>
  );
}

export default MyStack;