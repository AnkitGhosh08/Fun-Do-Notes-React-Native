import React from 'react';
import {View, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import {FLEX} from '../Utility/Theme';

const ReferenceSite = () => {
  console.log(ReferenceSite, '222222');
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://www.bridgelabz.com/'}} />
    </View>
  );
};

export default ReferenceSite;
const styles = StyleSheet.create({
  container: {
    flex: FLEX.FLEX,
  },
});
