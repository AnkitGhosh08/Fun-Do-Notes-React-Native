import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {
  ALIGNITEMS,
  BORDERRADIUS,
  COLOR,
  HIGHT,
  JUSTIFYCONTENT,
  MARGINTOP,
  WIDTH,
} from '../Utility/Theme';

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
    borderRadius: BORDERRADIUS.BUTTON_RADIUS,
    height: HIGHT.BUTTON,
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
    marginTop: MARGINTOP.FULL,
    backgroundColor: COLOR.BUTTON_BACKGROUND,
    borderColor: COLOR.APP_BACKGROUND,
  },
});
