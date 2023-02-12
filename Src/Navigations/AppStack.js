import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import AddNotes from '../Screens/AddNotes';
import SearchBar from '../Screens/SearchBar';
import AddLabel from '../Screens/AddLabels';
import ReferenceSite from '../Components/ReferenceSite';
import Charts from '../Screens/Charts';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'DrawerNavigation'} component={DrawerNavigation} />
      <Stack.Screen name={'AddNotes'} component={AddNotes} />
      <Stack.Screen name={'SearchBar'} component={SearchBar} />
      <Stack.Screen name={'AddLabels'} component={AddLabel} />
      <Stack.Screen name={'ReferenceSite'} component={ReferenceSite} />
      <Stack.Screen name={'Charts'} component={Charts} />
    </Stack.Navigator>
  );
};

export default AppStack;
