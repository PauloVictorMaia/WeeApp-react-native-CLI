import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Preload from '../pages/preload';
import TabsNavigation from './Tabsnavigation';
import {FazerLogin, GoToOptions}  from './StackNavigation';
import DrawerCustom from '../components/DrawerCustom';

const Drawer = createDrawerNavigator();
    
function DrawerNavigation() {
    return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Preload'  drawerPosition='right' drawerContent={DrawerCustom}>
            <Drawer.Screen name='TabsNavigation' component={TabsNavigation} options={{drawerLabel:'Home'}}/>
            <Drawer.Screen name='Login' component={FazerLogin} options={{drawerLabel:'Login'}} />
            <Drawer.Screen name='Opções' component={GoToOptions} options={{drawerLabel:'Opções'}} />
            <Drawer.Screen name='Preload' component={Preload} options={{drawerLabel:'Recarregar'}} />
    </Drawer.Navigator>
    </NavigationContainer>
);
};

export default DrawerNavigation;
