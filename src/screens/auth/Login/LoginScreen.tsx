import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import LogoContainer from '../../../components/LogoContainer';
import AuthTitle from '../../../components/AuthTitle';
import LoginForm from '../../../containers/auth/LoginForm';
import SocialAuth from '../../../containers/auth/SocialAuth';

function LoginScreen({ navigation }: any): React.JSX.Element {
    return (
        <View style={styles.loginScreen}>
            <LogoContainer />
            <AuthTitle title="Welcome to Lafyuu" subTitle="Sign in to continue" />
            <LoginForm navigation={navigation} />
            <View style={styles.divide}>
                <View style={styles.divideLine}></View>
                <Text style={styles.divideText}>OR</Text>
                <View style={styles.divideLine}></View>
            </View>
            <SocialAuth />
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
})

export default LoginScreen;