import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LogoContainer from '../../../components/LogoContainer';
import AuthTitle from '../../../components/AuthTitle';
import LoginForm from '../../../containers/auth/LoginForm';
import SocialAuth from '../../../containers/auth/SocialAuth';
import { NeutralColor, PrimaryColor } from '../../../constants/colors';
import { FontFamily, FontSize } from '../../../constants/fonts';

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
        backgroundColor: NeutralColor.LightColor,
    },
    divideText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.GreyColor,
        marginLeft: 28,
        marginRight: 28,
    },
    forgotPassword: {
        marginTop: 16,
    },
    forgotPasswordText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: PrimaryColor.BlueColor,
        textAlign: 'center',
    },
    register: {
        marginTop: 8,
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
        textAlign: 'center',
    },
    registerText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: PrimaryColor.BlueColor,
        textAlign: 'center',
    },
})

export default LoginScreen;