import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Navigations/AuthProvider';
import {fetchingLabel} from '../Services/LableServices';
import {useSelector, useDispatch} from 'react-redux';
import stringsOfLanguages from '../Utility/Localization';
import {
  ALIGNCONTENT,
  ALIGNITEMS,
  COLOR,
  FLEX,
  FLEXDIRECTION,
  FONTSIZE,
  MARGINLIFT,
  MARGINTOP,
} from '../Utility/Theme';

const CustomDrawer = ({props, navigation}) => {
  const newLabel = useSelector(state => state.newLabel);
  const localization = useSelector(state => state.localization);
  const dispatch = useDispatch();

  const {user} = useContext(AuthContext);

  const getData = async () => {
    const output = await fetchingLabel(user.uid);
    dispatch({type: 'LABELDATA', payload: output});
  };

  return (
    <DrawerContentScrollView {...props} nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            {localization
              ? stringsOfLanguages?._props.en.FunDoNotes
              : stringsOfLanguages?._props.Hindi.FunDoNotes}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.notesIcon}
          onPress={() => navigation.navigate('Notes')}>
          <Icons name={'lightbulb-outline'} size={30} color="#a507e3" />
          <Text style={{fontSize: 20, color: 'black', marginLeft: 10}}>
            {localization
              ? stringsOfLanguages?._props.en.Notes
              : stringsOfLanguages?._props.Hindi.Notes}
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
            {localization
              ? stringsOfLanguages?._props.en.Reminders
              : stringsOfLanguages?._props.Hindi.Reminders}
          </Text>
        </TouchableOpacity>

        <View style={{borderColor: '#a507e3', backgroundColor: '#e3d8f0'}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginLeft: 10, color: 'black', fontSize: 16}}>
              {localization
                ? stringsOfLanguages?._props.en.Labels
                : stringsOfLanguages?._props.Hindi.Labels}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateNewLabel')}>
              <Text style={{marginLeft: 150, fontSize: 16, color: 'black'}}>
                {localization
                  ? stringsOfLanguages?._props.en.Edit
                  : stringsOfLanguages?._props.Hindi.Edit}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            {newLabel?.map(item => (
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
                {localization
                  ? stringsOfLanguages?._props.en.Create_new_label
                  : stringsOfLanguages?._props.Hindi.Create_new_label}
              </Text>
            </TouchableOpacity>
          </View>
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
            {localization
              ? stringsOfLanguages?._props.en.Archive
              : stringsOfLanguages?._props.Hindi.Archive}
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
            {localization
              ? stringsOfLanguages?._props.en.Delete
              : stringsOfLanguages?._props.Hindi.Delete}
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
            {localization
              ? stringsOfLanguages?._props.en.settings
              : stringsOfLanguages?._props.Hindi.settings}
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: FLEX.FLEX,
    marginTop: MARGINTOP.TOP,
    alignContent: ALIGNITEMS.ITEM,
  },
  notesIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNITEMS.ITEM,
  },
  reminderIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  labelIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  archiveIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  settingIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  text: {
    fontSize: FONTSIZE.DRAWER_TEXT,
    marginLeft: MARGINLIFT.DRAWER_LEFT,
    color: COLOR.BLACK,
  },
  icon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
  },
});
