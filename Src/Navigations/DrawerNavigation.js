import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer ';
import Notes from '../Screens/Notes';
import Reminders from '../Screens/Reminders';
import Settings from '../Screens/settings';
import Label from '../Screens/Label';
import Archive from '../Screens/Archive';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer/>}
            screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={"Home"} component={Home} />
            <Drawer.Screen name={"Notes"} component={Notes} />
            <Drawer.Screen name={"Reminders"} component={Reminders} />
            <Drawer.Screen name={"Label"} component={Label} />
            <Drawer.Screen name={'Archive'} component={Archive} />
            <Drawer.Screen name={"settings"} component={Settings} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigation;