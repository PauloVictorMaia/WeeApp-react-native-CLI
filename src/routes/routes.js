import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabsNavigation from './Tabsnavigation';
import Preload from '../pages/preload';

const {Screen, Navigator} = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Navigator  initialRouteName="Preload" screenOptions={{ headerShown: false }}> 
                <Screen name='Preload' component={Preload} />
                <Screen name='TabsNavigation' component={TabsNavigation} />
            </Navigator>
        </NavigationContainer>
    )
};

export default Routes;