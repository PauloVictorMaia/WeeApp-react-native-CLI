import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToExperiment from '../pages/ToExperiment';
import Landing from '../pages/Landing';
import Login from '../pages/Login';

const Tab = createBottomTabNavigator();

function TabsNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Experiment' component={ToExperiment}/>
            <Tab.Screen name='Landing' component={Landing}/>
            <Tab.Screen name='Login' component={Login} />
        </Tab.Navigator>
    );
};

export default TabsNavigation;