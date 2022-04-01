import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Menu,filter} from '../assets/images/index';

const AppBar=(props)=>{
    const navigation =useNavigation();
    return(
        <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.5, y: 2 }}
        colors={['#9c0420', '#602dd4']}
        style={
            {
                height: 100,
                borderBottomLeftRadius: 27,
                borderBottomRightRadius: 27,
            
        }}>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingVertical:20,
                paddingHorizontal:20
            }}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                    <Image source={Menu} 
                    style={{
                        // tintColor: '#fff',
                        resizeMode: 'stretch',
                        width: 38,
                        height: 24,
                    }}/>
                    
                </TouchableOpacity>
                    <Text style={{
                        color:'#fff',
                        fontSize:19,
                        fontWeight:'bold'
                    }}>
                        {props.screenName}
                    </Text>
                    <TouchableOpacity>
                    <Image source={filter} 
                    style={{
                        tintColor: '#fff',
                        resizeMode: 'stretch',
                        width: 28,
                        height: 24,
                    }}/>
                    
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      height:10,
      width:100
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

export default AppBar;