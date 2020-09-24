import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register/index';

const Drawer = createDrawerNavigator();
    
function DrawerNavigation() {
    return(
    <Drawer.Navigator initialRouteName='Landing'>
            <Drawer.Screen name='Landing' component={Landing} />
            <Drawer.Screen name='Login' component={Login} />
            <Drawer.Screen name='Register' component={Register} />
    </Drawer.Navigator>
);
};

export default DrawerNavigation;
