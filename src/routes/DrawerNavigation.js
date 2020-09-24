import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/Login';
import Register from '../pages/Register/index';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();
    
function DrawerNavigation() {
    return(
    <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Login' component={Login} />
            <Drawer.Screen name='Register' component={Register} />
    </Drawer.Navigator>
);
};

export default DrawerNavigation;
