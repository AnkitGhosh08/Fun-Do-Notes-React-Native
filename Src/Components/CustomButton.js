import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';


const CustomButton = ({ buttonTitle, buttonOnClick }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.button}>{buttonTitle}</Text>
            <TouchableOpacity onPress={buttonOnClick}>
            </TouchableOpacity>
        </View>
    );
};
export default CustomButton;

const styles = StyleSheet.create({
    button: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#a507e3',
        borderColor: 'white',
    }
})
