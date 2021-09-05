import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Main from './Main';
import SideMenu from './sidemenu/SideMenu';

const Drawer = createDrawerNavigator();

export default function MainNav() {
  return (
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false, drawerStyle : {width : 220}, swipeEnabled : false}}
        drawerContent ={props => <SideMenu {...props}/>}>
        <Drawer.Screen name="Main" component={Main}/>
      </Drawer.Navigator>
  );
}

