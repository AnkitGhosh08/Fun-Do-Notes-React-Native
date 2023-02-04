import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../Navigations/AuthProvider';
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
} from '../Utility.js/Theme';

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
          placeholderTextColor="#003f5c"
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="confirm password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => register(name, email, password)}>
        <Text style={styles.Button}>Register</Text>
      </TouchableOpacity>
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
    borderRadius: BORDERRADIUS.TOPBAR_RADIUS,
    width: WIDTH.TEXTINPUT,
    height: HIGHT.INPUTTEXT,
    marginBottom: MARGINBOTTON.BOTTOM,
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
    marginTop: MARGINTOP.FULL,
    backgroundColor: COLOR.BUTTON_BACKGROUND,
  },
  Button: {
    color: COLOR.APP_BACKGROUND,
  },
});
