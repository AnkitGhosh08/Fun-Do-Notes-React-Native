import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer ';
import Notes from '../Screens/Notes';
import Reminders from '../Screens/Reminders';
import Settings from '../Screens/settings';
import CreateNewLabel from '../Screens/CreateNewLabel';
import Archive from '../Screens/Archive';
// import Delete from '../Screens/Delete';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'Notes'} component={Home} />
      <Drawer.Screen name={'Reminders'} component={Reminders} />
      <Drawer.Screen name={'CreateNewLabel'} component={CreateNewLabel} />
      <Drawer.Screen name={'Archive'} component={Archive} />
      {/* <Drawer.Screen name={'Delete'} component={Delete} /> */}
      <Drawer.Screen name={'Settings'} component={Settings} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
