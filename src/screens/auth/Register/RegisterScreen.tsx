import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoContainer from '../../../components/LogoContainer';
import AuthTitle from '../../../components/AuthTitle';
import RegisterForm from '../../../containers/auth/RegisterForm';

function RegisterScreen({ navigation }: any): React.JSX.Element {
    return (
        <View style={styles.registerScreen}>
            <LogoContainer />
            <AuthTitle title="Let’s Get Started" subTitle="Create an new account" />
            <RegisterForm navigation={navigation} />
            <Text style={styles.login}>
                have a account?
                {' '}
                <Text
                    style={styles.loginText}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    Sign In
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    registerScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    login: {
        marginTop: 24,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
        textAlign: 'center',
    },
    loginText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#40BFFF',
        textAlign: 'center',
    },
})

export default RegisterScreen;