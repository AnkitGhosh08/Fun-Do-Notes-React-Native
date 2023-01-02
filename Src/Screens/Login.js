import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from 'react-native';
import SocialButton from '../Components/SocialButton';
import { AuthContext } from '../Navigations/AuthProvider';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, googleLogin } = useContext(AuthContext);


    const Validation = () => {

        let regxEmail = /^[A-Za-z0-9+_.-]+@(.+)$/;
        let regxPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        const value = {};
        let valid = true;
        if (email === '' || !regxEmail.test(email)) {
            value.user = 'Please Enter valid email.'
            valid = false;
        }
        if (email.length < 9 && email.length > 1) {
            value.user = 'please enter valid email',
                valid = false;
        }

        if (password === "" || !regxPassword.test(password)) {
            value.password = "Please Enter valid password";
            valid = false;
        }
        if (password.length < 9 && password.length > 1) {
            value.password = 'please enter valid password',
                valid = false;
        }
        setError(value);
        return valid;
    }

    const onSignIn = () => {
        if (Validation()) {
            console.log("SignIn successfully");
            login(email, password);
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://cdn.dribbble.com/users/1224589/screenshots/16105004/app-icon-book.jpg' }} />

            <Text style={styles.text}>Fun-Do-Notes</Text>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Email." placeholderTextColor="#003f5c" onChangeText={(text) => setEmail(text)} value={email} />
            </View>
            <Text style={{ color: 'red' }}>{error.user}</Text>


            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Password." placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password} />
            </View>
            <Text style={{ color: 'red' }}>{error.password}</Text>

            <TouchableOpacity style={styles.forgot_button} onPress={() => navigation.navigate('ForgetPassword')}>
                <Text >Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}
                onPress={onSignIn}>
                <Text>LOGIN</Text>
            </TouchableOpacity>

            <SocialButton buttonTitle="Sign In with Google" onPress={() => googleLogin()} />

            <TouchableOpacity style={styles.signupButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text> Don't have an account? Create here </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

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
        Color: '#290438',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        marginBottom: 20,
        width: 250,
        height: 250
    },
    inputView: {
        backgroundColor: '#c781e3',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 2,
        flexDirection: 'row',

    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 5,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        Color: '#290438',
        fontSize: 30,
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
    signupButton: {
        fontSize: 70,
        fontWeight: '#290438',
        Color: '#290438',
        marginTop: 40,
    },
    textFailed: {
        alignSelf: 'flex-end',
        color: 'red',
    },
});

