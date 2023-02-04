import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {
  ALIGNITEMS,
  COLOR,
  HIGHT,
  JUSTIFYCONTENT,
  WIDTH,
} from '../Utility.js/Theme';

const CustomButton = ({buttonTitle, buttonOnClick}) => {
  return (
    <View style={styles.button}>
      <Text style={styles.button}>{buttonTitle}</Text>
      <TouchableOpacity onPress={buttonOnClick}></TouchableOpacity>
    </View>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: WIDTH.LOGINBUTTON,
    borderRadius: 25,
    height: HIGHT.BUTTON,
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
    marginTop: 40,
    backgroundColor: COLOR.BUTTON_BACKGROUND,
    borderColor: COLOR.APP_BACKGROUND,
  },
});
