import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SocialButton from '../Components/SocialButton';
import {AuthContext} from '../Navigations/AuthProvider';
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
  MARGINBOTTON,
  MARGINLIFT,
  MARGINTOP,
  PADDING,
  WIDTH,
} from '../Utility.js/Theme';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login, googleLogin} = useContext(AuthContext);

  const Validation = () => {
    let regxEmail = /^[A-Za-z0-9+_.-]+@(.+)$/;
    let regxPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    const value = {};
    let valid = true;
    if (email === '' || !regxEmail.test(email)) {
      value.user = 'Please Enter valid email.';
      valid = false;
    }
    if (email.length < 9 && email.length > 1) {
      (value.user = 'please enter valid email'), (valid = false);
    }

    if (password === '' || !regxPassword.test(password)) {
      value.password = 'Please Enter valid password';
      valid = false;
    }
    if (password.length < 9 && password.length > 1) {
      (value.password = 'please enter valid password'), (valid = false);
    }
    setError(value);
    return valid;
  };

  const onSignIn = () => {
    if (Validation()) {
      console.log('SignIn successfully');
      login(email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.dribbble.com/users/1224589/screenshots/16105004/app-icon-book.jpg',
        }}
      />

      <Text style={styles.text}>Fun-Do-Notes</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <Text style={{color: 'red'}}>{error.user}</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <Text style={styles.textFailed}>{error.password}</Text>

      <TouchableOpacity
        style={styles.forgot_button}
        onPress={() => navigation.navigate('ForgetPassword')}>
        <Text>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onSignIn}>
        <Text style={styles.bottonText}>LOGIN</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign In with Google"
        onPress={() => googleLogin()}
      />

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text> Don't have an account? Create here </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
  },
  image: {
    marginBottom: MARGINBOTTON.BOTTOM,
    width: WIDTH.IMAGE_WIDHT,
    height: HIGHT.IMAGE_HIGHT,
  },
  inputView: {
    backgroundColor: COLOR.TEXTINPUT_BACKGROUND,
    borderRadius: BORDERRADIUS.TOPBAR_RADIUS,
    width: WIDTH.TEXTINPUT,
    height: HIGHT.INPUTTEXT,
    marginBottom: MARGINBOTTON.LOGIN_TEXT,
    flexDirection: FLEXDIRECTION.DIRECTION,
  },
  TextInput: {
    height: HIGHT.BUTTON,
    flex: FLEX.FLEX,
    padding: PADDING.LOGIN_TEXT,
    marginLeft: MARGINLIFT.LEFT,
  },
  forgot_button: {
    height: HIGHT.FORGETBUTTON,
    marginBottom: HIGHT.FORGETBUTTON,
    fontSize: HIGHT.FORGETBUTTON,
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
  signupButton: {
    fontSize: FONTSIZE.SIGNUPBUTTON,
    marginTop: MARGINTOP.FULL,
  },
  textFailed: {
    color: COLOR.RED,
  },
  bottonText: {
    color: COLOR.APP_BACKGROUND,
  },
});
