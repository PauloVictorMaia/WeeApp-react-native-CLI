import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ToExperiment from '../pages/ToExperiment'

const {Screen, Navigator} = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Navigator  initialRouteName="Landing" screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />
                <Screen name='Login' component={Login} />
                <Screen name='Register' component={Register} />
                <Screen name='ToExperiment' component={ToExperiment} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;