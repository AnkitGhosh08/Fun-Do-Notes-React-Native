import React from "react";
import {View, Text, Image} from 'react-native';

const SplashScreen = ({navigation}) => {

    setTimeout(() => navigation.navigate('Login'), 1000)

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
            <Image style={{width:100, height:100, }}
              source={{ uri: 'https://cdn.dribbble.com/users/1224589/screenshots/16105004/app-icon-book.jpg' }}/>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Fun-Do-Notes</Text>
        </View>
    )
}
export default SplashScreen;