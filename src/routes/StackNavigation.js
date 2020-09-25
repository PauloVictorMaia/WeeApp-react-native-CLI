import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Options from '../pages/Options';
import Login from '../pages/Login';
import Register from '../pages/Register';

const {Screen, Navigator} = createStackNavigator();

export const GoToOptions = () => {
    return(
            <Navigator  initialRouteName="Options" screenOptions={{ headerShown: false }}> 
               <Screen name='Options' component={Options} />
            </Navigator>
        
    )
};

export const FazerLogin = () => {
    return(
            <Navigator  initialRouteName="Login" screenOptions={{ headerShown: false }}> 
               <Screen name='Login' component={Login} />
               <Screen name='Register' component={Register} />
            </Navigator>
        
    )
};

