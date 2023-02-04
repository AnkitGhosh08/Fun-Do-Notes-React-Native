import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ALIGNITEMS,
  COLOR,
  FLEXDIRECTION,
  JUSTIFYCONTENT,
  WIDTH,
} from '../Utility.js/Theme';

const BottomBar = ({navigation}) => {
  const HandelAddNote = () => {
    navigation.navigate('AddNotes');
  };

  return (
    <View style={styles.container}>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'checkbox-marked'} size={30} color="#a507e3" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'brush'} size={30} color="#a507e3" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'microphone-outline'} size={30} color="#a507e3" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'image-outline'} size={30} color="#a507e3" />
        </TouchableOpacity>
      </View>
      <View style={styles.plusIcon}>
        <TouchableOpacity
          onPress={() => {
            HandelAddNote();
          }}>
          <Icons name={'plus'} size={50} color="#a507e3" />
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
    height: 50,
    paddingHorizontal: 10,
  },
  IconView: {
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
    padding: 8,
    marginLeft: 10,
  },
  plusIcon: {
    width: 70,
    height: 70,
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    marginLeft: 60,
    borderRadius: 20,
    borderWidth: 8,
    borderColor: COLOR.APP_BACKGROUND,
    marginTop: -40,
    alignItems: ALIGNITEMS.ITEM,
  },
});
