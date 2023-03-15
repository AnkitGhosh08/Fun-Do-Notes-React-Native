import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ALIGNITEMS,
  BORDERRADIUS,
  BORDERWIDTH,
  COLOR,
  FLEXDIRECTION,
  HIGHT,
  JUSTIFYCONTENT,
  MARGINLIFT,
  MARGINTOP,
  PADDING,
  WIDTH,
} from '../Utility/Theme';

const BottomBar = ({navigation}) => {
  const HandelAddNote = () => {
    navigation.navigate('AddNotes');
  };

  return (
    <View style={styles.container}>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'checkbox-marked'} size={30} color="#7586f0" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'brush'} size={30} color="#7586f0" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'microphone-outline'} size={30} color="#7586f0" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'image-outline'} size={30} color="#7586f0" />
        </TouchableOpacity>
      </View>
      <View style={styles.plusIcon}>
        <TouchableOpacity
          onPress={() => {
            HandelAddNote();
          }}>
          <Icons name={'plus'} size={50} color="#7586f0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    flexDirection: FLEXDIRECTION.DIRECTION,
    width: WIDTH.FULL,
    height: HIGHT.BUTTON,
    paddingHorizontal: PADDING.PLUS_ICON,
  },
  IconView: {
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
    padding: PADDING.ICON_VIEW,
    marginLeft: MARGINLIFT.DRAWER_LEFT,
  },
  plusIcon: {
    width: WIDTH.PLUS_ICON,
    height: HIGHT.PLUS_ICON,
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    marginLeft: MARGINLIFT.PLUS_ICON,
    borderRadius: BORDERRADIUS.PLUS_ICON,
    borderWidth: BORDERWIDTH.PLUS_ICON,
    borderColor: COLOR.APP_BACKGROUND,
    marginTop: MARGINTOP.PLUS_ICON,
    alignItems: ALIGNITEMS.ITEM,
  },
});
