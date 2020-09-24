import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/Login/index';
import Landing from '../pages/Landing/index';
import Register from '../pages/Register/index';

const drawer = createDrawerNavigator();

function DrawerNavigation() {

    <drawer.Navigator>
        <drawer.Screen name='Login' component={Login} />
        <drawer.Screen name='Landing' component={Landing} />
        <drawer.Screen name='Register' component={Register} />
    </drawer.Navigator>
};

export default DrawerNavigation;