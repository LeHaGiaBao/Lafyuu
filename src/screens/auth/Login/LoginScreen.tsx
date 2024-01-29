import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function LoginScreen({ navigation }: any): React.JSX.Element {
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    return (
        <View style={styles.loginScreen}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/Icon/iconWhite.png')}
                    style={{
                        height: 32,
                        width: 32,
                    }}
                />
            </View>
            <Text style={styles.welcomeText}>Welcome to Lafyuu</Text>
            <Text style={styles.welcomeSubText}>Sign in to continue</Text>
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
            <View style={styles.divide}>
                <View style={styles.divideLine}></View>
                <Text style={styles.divideText}>OR</Text>
                <View style={styles.divideLine}></View>
            </View>
            <View style={styles.social}>
                <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                    <Image
                        source={require('../../../../assets/Icon/icons8-google-480.png')}
                        style={styles.GoogleIcon}
                    />
                    <Text style={styles.socialText}>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialFacebookButton} onPress={() => { }}>
                    <FontAwesome name='facebook' size={24} style={styles.facebookIcon} />
                    <Text style={styles.socialText}>Login with facebook</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPassword} onPress={() => { }}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={styles.register}>
                Don’t have a account?
                {' '}
                <Text
                    style={styles.registerText}
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    Register
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    logoContainer: {
        backgroundColor: '#40BFFF',
        height: 72,
        width: 72,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    welcomeText: {
        marginTop: 16,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#223263',
    },
    welcomeSubText: {
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
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
    divide: {
        marginTop: 21,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    divideLine: {
        marginTop: 10,
        width: 150,
        height: 1,
        backgroundColor: '#EBF0FF'
    },
    divideText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#9098B1',
        marginLeft: 28,
        marginRight: 28,
    },
    social: {
        marginTop: 16,
        width: '100%',
    },
    socialButton: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: '#EBF0FF',
    },
    socialText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#9098B1',
        width: '100%',
        textAlign: 'center',
    },
    GoogleIcon: {
        height: 24,
        width: 24,
        marginLeft: 16,
    },
    socialFacebookButton: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: '#EBF0FF',
    },
    facebookIcon: {
        height: 24,
        width: 24,
        marginLeft: 16,
        color: '#4092FF'
    },
    forgotPassword: {
        marginTop: 16,
    },
    forgotPasswordText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#40BFFF',
        textAlign: 'center',
    },
    register: {
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
        textAlign: 'center',
    },
    registerText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#40BFFF',
        textAlign: 'center',
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

export default LoginScreen;