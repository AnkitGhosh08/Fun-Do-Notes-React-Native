import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {AuthContext} from '../Navigations/AuthProvider';
import {
  ALIGNITEMS,
  COLOR,
  FONTWEIGHT,
  JUSTIFYCONTENT,
  WIDTH,
} from '../Utility.js/Theme';

const ForgetPassword = ({navigation}) => {
  const onSignIn = () => {
    navigation.navigate('');
  };
  const [email, setEmail] = useState('');
  const {forgetPassword} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forget your password ?</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/007/536/069/original/password-reset-icon-for-apps-vector.jpg',
        }}
      />
      <TextInput
        style={styles.textView}
        placeholder="Enter your email."
        placeholderTextColor="#003f5c"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TouchableOpacity
        style={styles.btton}
        onPress={() => forgetPassword(email)}>
        <Text>ForgetPassword</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
    backgroundColor: COLOR.APP_BACKGROUND,
  },
  textView: {
    backgroundColor: COLOR.TEXTINPUT_BACKGROUND,
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 2,
    paddingLeft: 20,
  },
  text: {
    marginBottom: 40,
    fontWeight: FONTWEIGHT.WEIGHT,
    fontSize: 30,
    color: '#2e0640',
  },
  btton: {
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
    width: WIDTH.LOGINBUTTON,
    borderRadius: 25,
    height: 50,
    marginTop: 40,
    backgroundColor: COLOR.BUTTON_BACKGROUND,
  },
  image: {
    marginBottom: 20,
    width: WIDTH.IMAGE_WIDHT,
    height: WIDTH.IMAGE_WIDHT,
  },
});
