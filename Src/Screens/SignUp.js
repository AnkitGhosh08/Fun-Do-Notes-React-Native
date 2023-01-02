import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { AuthContext } from '../Navigations/AuthProvider';

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
        <TextInput style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setName(text)} />
      </View>

      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          value = {email}
          onChangeText={(text) => setEmail(text)} />
      </View>

      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value = {password}
          onChangeText={(text) => setPassword(text)} />
      </View>

      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
          placeholder="confirm password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />
      </View>

      <TouchableOpacity style={styles.loginBtn}
        onPress={() => register(name, email, password)}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 40,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#2e0640',
  },
  inputView: {
    backgroundColor: '#c781e3',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#a507e3',
  },
})
