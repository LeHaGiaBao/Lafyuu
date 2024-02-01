import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

function RegisterForm({ navigation }: any) {
    const [fullNameFocus, setFullNameFocus] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [rePasswordFocus, setRePasswordFocus] = useState(false)

    return (
        <View style={styles.registerForm}>
            <View style={fullNameFocus ? styles.inputContainerFocus : styles.inputContainer}>
                <Feather name="user" size={24} style={fullNameFocus ? styles.iconStylesFocus : styles.iconStyles} />
                <TextInput
                    placeholder='Full name'
                    autoCapitalize="none"
                    style={styles.inputBox}
                    onFocus={() => setFullNameFocus(true)}
                    onBlur={() => setFullNameFocus(false)}
                />
            </View>
            {/* <Text style={styles.wrongText}> Oops! Your Email Is Not Correct </Text> */}
            <View style={emailFocus ? styles.inputPasswordFocus : styles.inputPassword}>
                <Feather name="mail" size={24} style={emailFocus ? styles.iconStylesFocus : styles.iconStyles} />
                <TextInput
                    placeholder='Your Email'
                    autoCapitalize="none"
                    style={styles.inputBox}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
            </View>
            <View style={passwordFocus ? styles.inputPasswordFocus : styles.inputPassword}>
                <Feather name="lock" size={24} style={passwordFocus ? styles.iconStylesFocus : styles.iconStyles} />
                <TextInput
                    secureTextEntry
                    placeholder='Password'
                    autoCapitalize="none"
                    style={styles.inputBox}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                />
            </View>
            <View style={rePasswordFocus ? styles.inputPasswordFocus : styles.inputPassword}>
                <Feather name="lock" size={24} style={rePasswordFocus ? styles.iconStylesFocus : styles.iconStyles} />
                <TextInput
                    secureTextEntry
                    placeholder='Password Again'
                    autoCapitalize="none"
                    style={styles.inputBox}
                    onFocus={() => setRePasswordFocus(true)}
                    onBlur={() => setRePasswordFocus(false)}
                />
            </View>
            {/* <Text style={styles.wrongText}> Oops! Your Password Is Not Correct </Text> */}
            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('AppScreen')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    registerForm: {
        marginTop: 28,
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EBF0FF',
    },
    inputContainerFocus: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#40BFFF',
    },
    iconStyles: {
        color: '#9098B1',
        marginRight: 10,
    },
    iconStylesFocus: {
        color: '#40BFFF',
        marginRight: 10,
    },
    inputBox: {
        paddingTop: 3,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#9098B1',
    },
    inputPassword: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 50,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EBF0FF',
    },
    inputPasswordFocus: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#40BFFF',
    },
    registerButton: {
        marginTop: 16,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#40BFFF',
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        shadowColor: 'rgba(64, 191, 255, 0.24)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 30,
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: 'white',
    },
    wrongText: {
        marginTop: 8,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#FB7181',
    },
    inputContainerEmailWrong: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FB7181',
    },
    inputContainerPasswordWrong: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 48,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FB7181',
    },
    iconStylesWrong: {
        color: '#FB7181',
        marginRight: 10,
    },
})

export default RegisterForm;