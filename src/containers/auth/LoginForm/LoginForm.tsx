import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function LoginForm({ navigation }: any) {
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    return (
        <>
            <View style={styles.loginForm}>
                <View style={emailFocus ? styles.inputContainerFocus : styles.inputContainer}>
                    <Feather name="mail" size={24} style={emailFocus ? styles.iconStylesFocus : styles.iconStyles} />
                    <TextInput
                        placeholder='Your email'
                        autoCapitalize="none"
                        style={styles.inputBox}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                </View>
                {/* <Text style={styles.wrongText}> Oops! Your Email Is Not Correct </Text> */}
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
                {/* <Text style={styles.wrongText}> Oops! Your Password Is Not Correct </Text> */}
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AppScreen')}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    loginForm: {
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
    loginButton: {
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

export default LoginForm;