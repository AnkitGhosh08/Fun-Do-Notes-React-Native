import React from 'react';
import {View, Text, StyleSheet, Button, CheckBox} from 'react-native';
import {FLEX, JUSTIFYCONTENT} from '../Utility/Theme';

const Formula = () => {
  <View>
    <Text style={styles.Container}>Formula screen </Text>
  </View>;
};
export default Formula;
const styles = StyleSheet.create({
  Container: {
    flex: FLEX,
    justifyContent: JUSTIFYCONTENT.CENTER,
    // padding: PADDING.BS_BACKGROUND,
    // marginTop: MARGINTOP.BS_BACKGROUND,
  },
});
