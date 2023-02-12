import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {useSelector, useDispatch} from 'react-redux';

import {
  ALIGNITEMS,
  BORDERRADIUS,
  BORDERWIDTH,
  COLOR,
  FLEXDIRECTION,
  FONTSIZE,
  HIGHT,
  JUSTIFYCONTENT,
  MARGINLIFT,
  MARGINRIGHT,
  PADDING,
  WIDTH,
  MARGINTOP,
  ALIGNSELF,
} from '../Utility/Theme';
import stringsOfLanguages from '../Utility/Localization';

const Settings = ({navigation}) => {
  const localization = useSelector(state => state.localization);
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.container}>
        <Text>
          {localization
            ? stringsOfLanguages?._props.en.settings
            : stringsOfLanguages?._props.Hindi.settings}
        </Text>
      </View>
      <View style={styles.loginBtn}>
        <TouchableOpacity onPress={() => dispatch({type: 'LOCALIZATION'})}>
          <Text style={styles.bottonText}>
            {localization
              ? stringsOfLanguages?._props.en.language_change
              : stringsOfLanguages?._props.Hindi.language_change}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ReferenceSite');
          }}>
          <Text style={styles.bottonText}>
            {localization
              ? stringsOfLanguages._props.en.Bridgelabz
              : stringsOfLanguages._props.Hindi.Bridgelabz}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Charts');
          }}>
          <Text style={styles.bottonText}>
            {localization
              ? stringsOfLanguages._props.en.Charts
              : stringsOfLanguages._props.Hindi.Charts}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  loginBtn: {
    width: WIDTH.LOGINBUTTON,
    borderRadius: BORDERRADIUS.BUTTON_RADIUS,
    height: HIGHT.BUTTON,
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
    marginTop: MARGINTOP.TOP,
    backgroundColor: COLOR.BUTTON_BACKGROUND,
    alignSelf: ALIGNSELF.CENTER,
  },
  bottonText: {
    color: COLOR.APP_BACKGROUND,
    justifyContent: JUSTIFYCONTENT.CENTER,
  },
  container: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    height: HIGHT.INPUTTEXT,
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    width: WIDTH.FULL,
    borderRadius: BORDERRADIUS.TOPBAR_RADIUS,
    justifyContent: JUSTIFYCONTENT.CENTER,
    padding: PADDING.TEXTINPUT,
    marginTop: 5,
  },
});
