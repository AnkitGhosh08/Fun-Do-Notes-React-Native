import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
//import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import ForgetPassword from '../Screens/ForgetPassword';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AddNotes from '../Screens/AddNotes';

const Stack = createStackNavigator();

function AuthStack() {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '461280288125-367aeeh3k5egl57e7gle1s9dbvfohjcs.apps.googleusercontent.com',
        });
    })
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'login'} component={Login} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
            <Stack.Screen name={'ForgetPassword'} component={ForgetPassword} /> 
            
        </Stack.Navigator>
    );
}
export default AuthStack;