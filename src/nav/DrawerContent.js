import React from 'react';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image,
    Modal,
    Linking,
} from 'react-native';

const CustomDrawerContent = ({ props }) => {
    return (
        <DrawerContentScrollView {...props}>
            <Text style={{ textAlign: 'center', fontFamily: 'PoppinsBold' }}>
                Menus
                .....
            </Text>
        </DrawerContentScrollView>
    )
}
export default CustomDrawerContent;