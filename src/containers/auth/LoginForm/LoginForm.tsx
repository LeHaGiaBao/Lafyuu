import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBlue from '../../../components/Button/ButtonBlue';
import AuthInput from '../../../components/Input/AuthInput';
import { FontFamily, FontSize } from '../../../constants/fonts';
import { PrimaryColor } from '../../../constants/colors';

function LoginForm({ navigation }: any) {
    const [authError, setAuthError] = useState(false)

    return (
        <>
            <View style={styles.loginForm}>
                <View style={styles.inputForm}>
                    <AuthInput
                        placeholder='Your email'
                        icon='email'
                        error={authError}
                        security={false}
                    />
                    {authError && <Text style={styles.wrongText}>Oops! Your Email Is Not Correct</Text>}
                    <AuthInput
                        placeholder='Password'
                        icon='password'
                        error={authError}
                        security={true}
                    />
                    {authError && <Text style={styles.wrongText}>Oops! Your Password Is Not Correct</Text>}
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
    inputForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    wrongText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: PrimaryColor.RedColor,
    },
})

export default LoginForm;