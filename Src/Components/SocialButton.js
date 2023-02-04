import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  ALIGNITEMS,
  COLOR,
  FLEXDIRECTION,
  FONTWEIGHT,
  JUSTIFYCONTENT,
  WIDTH,
} from '../Utility.js/Theme';

const SocialButton = ({buttonTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.icon}>
        <FontAwesome
          name={'google'}
          style={styles.icon}
          size={22}
          color={'white'}
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
    marginTop: 10,
    borderRadius: 25,
    width: WIDTH.LOGINBUTTON,
    height: 50,
    padding: 10,
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: 40,
    backgroundColor: COLOR.SOCIAL_BUTTON,
  },
  icon: {
    width: 30,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: JUSTIFYCONTENT.CENTER,
  },
  btnTxt: {
    flex: 1,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: FONTWEIGHT.WEIGHT,
  },
  text: {
    color: COLOR.APP_BACKGROUND,
  },
});
