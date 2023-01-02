import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({ buttonTitle, onPress }) => {

    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>

            <View style={styles.icon}>
                <FontAwesome name={'google'} style={styles.icon} size={22} color={'white'} />
            </View>

            <View style={styles.btnTxt}>
                <Text>{buttonTitle}</Text>
            </View>

        </TouchableOpacity>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        borderRadius: 25,
        width: '80%',
        height: 50,
        padding: 10,
        flexDirection: 'row',
        marginTop: 40,
        backgroundColor: 'rgba(199, 36, 36,0.5)',
    },
    icon: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});