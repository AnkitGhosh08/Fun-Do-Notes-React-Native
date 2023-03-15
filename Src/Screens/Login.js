import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import SocialButton from '../Components/SocialButton';
import {AuthContext} from '../Navigations/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';
import Facebook from '../Components/Facebook';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  MARGINTOP,
  PADDING,
  WIDTH,
} from '../Utility/Theme';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const {login, googleLogin, facebookLogin} = useContext(AuthContext);

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
      <TouchableOpacity>
        <Text style={styles.text}>Fun DO Notes</Text>
      </TouchableOpacity>

      <View style={styles.inputView}>
        <Ionicons
          name="person-outline"
          size={25}
          color="white"
          style={styles.icon}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <Text style={{color: 'red'}}>{error.user}</Text>

      <View style={styles.inputView}>
        <Ionicons
          name="lock-closed-outline"
          size={25}
          color="white"
          style={styles.icon}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={isPasswordSecure}
          autoCorrect={false}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          onPress={() => {
            isPasswordSecure
              ? setIsPasswordSecure(false)
              : setIsPasswordSecure(true);
          }}>
          <Ionicons
            name={isPasswordSecure ? 'eye-off-outline' : 'eye-outline'}
            size={25}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textFailed}>{error.password}</Text>

      <TouchableOpacity
        style={styles.forgot_button}
        onPress={() => navigation.navigate('ForgetPassword')}>
        <Text>Forgot Password ?</Text>
      </TouchableOpacity>

      <LinearGradient
        colors={['#74ddf7', '#4058f5', '#b940f5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.7, 0.9]}
        style={styles.loginBtn}>
        <TouchableOpacity onPress={onSignIn}>
          <Text style={styles.bottonText}>LOGIN</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.scfcbttn}>
        <SocialButton
          buttonTitle="Sign In with Google"
          onPress={() => googleLogin()}
        />
        <Facebook
          onPress={() =>
            facebookLogin().then(() => console.log('Signed in with Facebook!'))
          }
        />
      </View>
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
    // marginBottom: MARGINBOTTON.BOTTOM,
    width: WIDTH.IMAGE_WIDHT,
    height: HIGHT.IMAGE_HIGHT,
  },
  inputView: {
    backgroundColor: COLOR.TEXTINPUT_BACKGROUND,
    //borderRadius: BORDERRADIUS.TOPBAR_RADIUS,
    width: WIDTH.TEXTINPUT,
    height: HIGHT.INPUTTEXT,
    marginBottom: MARGINBOTTON.LOGIN_TEXT,
    flexDirection: FLEXDIRECTION.DIRECTION,
    borderRadius: 15,
  },
  TextInput: {
    height: HIGHT.BUTTON,
    flex: FLEX.FLEX,
    padding: PADDING.LOGIN_TEXT,
    // marginLeft: MARGINLIFT.LEFT,
    //borderBottomWidth: 1,
    alignSelf: 'center',
  },
  forgot_button: {
    height: HIGHT.FORGETBUTTON,
    marginBottom: HIGHT.FORGETBUTTON,
    fontSize: HIGHT.FORGETBUTTON,
    marginLeft: 170,
  },
  loginBtn: {
    width: WIDTH.LOGINBUTTON,
    borderRadius: BORDERRADIUS.BUTTON_RADIUS,
    height: HIGHT.BUTTON,
    alignItems: ALIGNITEMS.ITEM,
    justifyContent: JUSTIFYCONTENT.CENTER,
    marginTop: MARGINTOP.FULL,
    //backgroundColor: COLOR.BUTTON_BACKGROUND,
  },
  signupButton: {
    fontSize: FONTSIZE.SIGNUPBUTTON,
    marginTop: MARGINTOP.TOP,
  },
  textFailed: {
    color: COLOR.RED,
    marginTop: 5,
  },
  bottonText: {
    color: COLOR.APP_BACKGROUND,
  },
  // linearGradient: {
  //   height: '4%',
  //   width: '50%',
  //   // paddingLeft: 15,
  //   //paddingRight: 15,
  //   borderRadius: 25,
  // },
  icon: {
    margin: 8,
  },
  scfcbttn: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
