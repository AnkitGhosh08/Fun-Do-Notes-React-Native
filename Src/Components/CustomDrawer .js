import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = ({props, navigation}) => {
  return (
    <DrawerContentScrollView {...props} nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            Fun-DO Notes
          </Text>
        </View>

        <TouchableOpacity
          style={styles.notesIcon}
          onPress={() => navigation.navigate('Notes')}>
          <Icons name={'lightbulb-outline'} size={30} color="#a507e3" />
          <Text style={{fontSize: 20, color: 'black', marginLeft: 10}}>
            Notes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.reminderIcon}
          onPress={() => navigation.navigate('Reminders')}>
          <Icons name={'bell-outline'} size={30} color="#a507e3" />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              textAlign: 'center',
              marginLeft: 10,
            }}>
            Reminders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labelIcon}
          onPress={() => navigation.navigate('CreateNewLabel')}>
          <Icons name={'label-outline'} size={30} color="#a507e3" />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              textAlign: 'center',
              marginLeft: 10,
            }}>
            Create new label
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.archiveIcon}
          onPress={() => navigation.navigate('Archive')}>
          <Icons
            name={'archive-arrow-down-outline'}
            size={30}
            color="#a507e3"
          />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 10,
              textAlign: 'center',
            }}>
            Archive
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.archiveIcon}
          onPress={() => navigation.navigate('Archive')}>
          <Icons name={'delete'} size={30} color="#a507e3" />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 10,
              textAlign: 'center',
            }}>
            Delete
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingIcon}
          onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={30} color={'#a507e3'} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 10,
              textAlign: 'center',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignContent: 'center',
  },
  notesIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    alignContent: 'center',
  },
  reminderIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    alignContent: 'center',
  },
  labelIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    alignContent: 'center',
  },
  archiveIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    alignContent: 'center',
  },
  settingIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    alignContent: 'center',
  },
});
