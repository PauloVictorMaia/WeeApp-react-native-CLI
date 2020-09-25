import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import TabBarCustom from '../components/TabBarCustom';

const Tab = createBottomTabNavigator();

function TabsNavigation() {
    return (
        
        <Tab.Navigator initialRouteName='Explore' tabBar={props=><TabBarCustom {...props} />}>
            <Tab.Screen name='Home' component={Home} options={{tabBarLabel:'Inicio'}} />
            <Tab.Screen name='Explore' component={Explore} options={{tabBarLabel:'Explorar'}} />
            <Tab.Screen name='Profile' component={Profile} options={{tabBarLabel:'Perfil'}} />
        </Tab.Navigator>
    );
};

export default TabsNavigation;