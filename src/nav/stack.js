import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../main/home';
import MyTabs from './tab';
import DrawerStackNavigator from './drawer';

const Stack = createNativeStackNavigator();

const MyStack=()=> {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={DrawerStackNavigator} />
    </Stack.Navigator>
  );
}

export default MyStack;