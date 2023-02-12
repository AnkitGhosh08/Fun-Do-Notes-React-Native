import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  ALIGNITEMS,
  BORDERRADIUS,
  COLOR,
  FLEX,
  FLEXDIRECTION,
  FONTSIZE,
  FONTWEIGHT,
  HIGHT,
  JUSTIFYCONTENT,
  MARGINTOP,
  PADDING,
  WIDTH,
} from '../Utility/Theme';

const SocialButton = ({buttonTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.icon}>
        <FontAwesome
          name={'google'}
          style={styles.icon}
          size={22}
          color={COLOR.APP_BACKGROUND}
        />
      </View>

      <View style={styles.btnTxt}>
        <Text style={styles.text}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: MARGINTOP.NOTE_CARD,
    borderRadius: BORDERRADIUS.BUTTON_RADIUS,
    width: WIDTH.LOGINBUTTON,
    height: HIGHT.BUTTON,
    padding: PADDING.TEXTINPUT,
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.FULL,
    backgroundColor: COLOR.SOCIAL_BUTTON,
  },
  icon: {
    width: WIDTH.ICON,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: JUSTIFYCONTENT.CENTER,
  },
  btnTxt: {
    flex: FLEX.FLEX,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
  },
  buttonText: {
    fontSize: FONTSIZE.DRAWER_TEXT,
    fontWeight: FONTWEIGHT.WEIGHT,
  },
  text: {
    color: COLOR.APP_BACKGROUND,
  },
});
