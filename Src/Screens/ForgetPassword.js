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
import LinearGradient from 'react-native-linear-gradient';
import {
  ALIGNITEMS,
  COLOR,
  FONTWEIGHT,
  JUSTIFYCONTENT,
  WIDTH,
} from '../Utility/Theme';

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
        placeholderTextColor="white"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <LinearGradient
        colors={['#74ddf7', '#4058f5', '#b940f5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.7, 0.9]}
        style={styles.btton}>
        <TouchableOpacity onPress={() => forgetPassword(email)}>
          <Text>ForgetPassword</Text>
        </TouchableOpacity>
      </LinearGradient>
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
    borderRadius: 10,
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
    borderRadius: 10,
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
