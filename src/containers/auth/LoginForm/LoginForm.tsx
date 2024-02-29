import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import ButtonBlue from '../../../components/Button/ButtonBlue';

function LoginForm({ navigation }: any) {
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    return (
        <>
            <View style={styles.loginForm}>
                <View>
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
                </View>
                <ButtonBlue title='Sign In' onPress={() => navigation.navigate('AppScreen')} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    loginForm: {
        marginTop: 28,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
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