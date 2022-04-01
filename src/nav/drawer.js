import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './DrawerContent.js';
import MyTabs from './tab';

const Drawer = createDrawerNavigator();

export default function DrawerStackNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerStyle={{
                backgroundColor: '#fff',
                width: 320,
            }} drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={MyTabs} />
        </Drawer.Navigator>
    );
};