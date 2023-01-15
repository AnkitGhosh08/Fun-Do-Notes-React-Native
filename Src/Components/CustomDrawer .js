import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Navigations/AuthProvider';
import {fetchingLabel} from '../Services/LableServices';
import {useSelector, useDispatch} from 'react-redux';

const CustomDrawer = ({props, navigation}) => {
  const dispatch = useDispatch();
  const newLabel = useSelector(state => state.newLabel);

  const {user} = useContext(AuthContext);

  const getData = async () => {
    const output = await fetchingLabel(user.uid);
    dispatch({type: 'LABELDATA', payload: output});
  };
  //console.log(newLabel, '555555');

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getData();
  //   });
  //   return unsubscribe;
  // }, []);

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

        <View style={{borderColor: '#a507e3', backgroundColor: '#e3d8f0'}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginLeft: 10, color: 'black', fontSize: 16}}>
              Labels
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateNewLabel')}>
              <Text style={{marginLeft: 150, fontSize: 16, color: 'black'}}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          {newLabel.map(item => (
            <TouchableOpacity key={item.labelId}>
              <View style={styles.icon}>
                <Icons name={'label-outline'} size={25} color="#a507e3" />
                <Text style={styles.text}> {item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.labelIcon}
            onPress={() => navigation.navigate('CreateNewLabel')}>
            <Icons name={'plus'} size={30} color="#a507e3" />
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
        </View>

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
    marginLeft: 20,
    alignContent: 'center',
  },
  reminderIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    alignContent: 'center',
  },
  labelIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    alignContent: 'center',
  },
  archiveIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    alignContent: 'center',
  },
  settingIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    alignContent: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  icon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
});
