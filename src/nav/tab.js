import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../main/home';
import { Text, View, Image } from 'react-native';
import React from 'react';
import About from '../main/About';
import Help from '../main/Help';
import Reffer from '../main/Reffer';
import { home, user, wallet, cart, history } from '../assets/images/index';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
  }}
  tabBarOptions={{
      showLabel: false
  }}
  >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={home} style={{
                    tintColor: focused ? '#7a1c9b' : '#d3d2d2e3',
                    width: 23,
                    height: 23,
                    opacity: 1,
                    resizeMode: 'stretch',
                }} />
                <Text style={{
                    color: focused ? '#7a1c9b' : '#d3d2d2',
                    fontFamily: 'PoppinsLight',
                    fontSize: 12,
                    marginTop: 0,
                    textAlign: 'center'
                }}>Home</Text>
            </View>
        )
    }}/>
      <Tab.Screen name="About" component={About} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={wallet} style={{
                                tintColor: focused ? '#7a1c9b' : '#d3d2d2e3',
                                width: 23,
                                height: 23,
                                opacity: 1,
                                resizeMode: 'stretch',
                            }} />
                            <Text style={{
                                color: focused ? '#7a1c9b' : '#d3d2d2',
                                fontFamily: 'PoppinsLight',
                                fontSize: 13,
                                marginTop: 3,
                            }}>Wallet</Text>
                        </View>
                    )
                }}/>
      <Tab.Screen name="Help" component={Help} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <Image source={cart} style={{
                    tintColor: focused ? '#7a1c9b' : '#d3d2d2e3',
                    width: 23,
                    height: 23,
                    opacity: 1,
                    resizeMode: 'stretch',
                }} />
                <Text style={{
                    color: focused ? '#7a1c9b' : '#d3d2d2',
                    fontFamily: 'PoppinsLight',
                    fontSize: 12,
                    marginTop: 3,
                }}>Cart</Text>
            </View>
        )
    }} />
      <Tab.Screen name="Reffer" component={Reffer} 
      options={{
        tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={user} style={{
                    tintColor: focused ? '#7a1c9b' : '#d3d2d2e3',
                    width: 23,
                    height: 23,
                    opacity: 1,
                    resizeMode: 'stretch',
                }} />
                <Text style={{
                    color: focused ? '#7a1c9b' : '#d3d2d2',
                    fontFamily: 'PoppinsLight',
                    fontSize: 12,
                    marginTop: 3,
                }}>User</Text>
            </View>
        )
    }}/>
    </Tab.Navigator>
  );
}

export default MyTabs;