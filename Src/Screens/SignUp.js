import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../Navigations/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';
import {
  ALIGNITEMS,
  BORDERRADIUS,
  COLOR,
  FLEX,
  FONTSIZE,
  FONTWEIGHT,
  HIGHT,
  JUSTIFYCONTENT,
  MARGINBOTTON,
  MARGINLIFT,
  MARGINTOP,
  PADDING,
  WIDTH,
} from '../Utility/Theme';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="white"
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="confirm password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        />
      </View>
      <LinearGradient
        colors={['#74ddf7', '#4058f5', '#b940f5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.7, 0.9]}
        style={styles.loginBtn}>
        <TouchableOpacity onPress={() => register(name, email, password)}>
          <Text style={styles.Button}>Register</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: FLEX.FLEX,
    backgroundColor: COLOR.APP_BACKGROUND,
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
  },
  text: {
    marginBottom: MARGINBOTTON.FULL,
    fontWeight: FONTWEIGHT.WEIGHT,
    fontSize: FONTSIZE.TEXT,
    color: COLOR.SIGNUP,
  },
  inputView: {
    backgroundColor: COLOR.TEXTINPUT_BACKGROUND,
    // borderRadius: BORDERRADIUS.TOPBAR_RADIUS,
    width: WIDTH.TEXTINPUT,
    height: HIGHT.INPUTTEXT,
    marginBottom: MARGINBOTTON.BOTTOM,
    borderRadius: 15,
    marginTop: 15,
  },
  TextInput: {
    height: HIGHT.BUTTON,
    flex: FLEX.FLEX,
    padding: PADDING.TEXTINPUT,
    marginLeft: MARGINLIFT.LEFT,
  },
  loginBtn: {
    width: WIDTH.LOGINBUTTON,
    borderRadius: BORDERRADIUS.BUTTON_RADIUS,
    height: HIGHT.BUTTON,
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
    // marginTop: MARGINTOP.FULL,
    backgroundColor: COLOR.BUTTON_BACKGROUND,
    marginTop: 60,
  },
  Button: {
    color: COLOR.APP_BACKGROUND,
  },
});
