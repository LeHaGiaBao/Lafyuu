import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthInput from '../../../components/Input/AuthInput';
import ButtonBlue from '../../../components/Button/ButtonBlue';
import { FontFamily, FontSize } from '../../../constants/fonts';
import { PrimaryColor } from '../../../constants/colors';

function RegisterForm({ navigation }: any) {
    const [authError, setAuthError] = useState(false)

    return (
        <View style={styles.registerForm}>
            <View style={styles.inputForm}>
                <AuthInput
                    placeholder='Full name'
                    icon='profile'
                    error={authError}
                    security={false}
                />
                {authError && <Text style={styles.wrongText}>Oops! Your Name Is Not Correct</Text>}
                <AuthInput
                    placeholder='Your email'
                    icon='email'
                    error={authError}
                    security={false}
                />
                {authError && <Text style={styles.wrongText}>Oops! Your email Is Not Correct</Text>}
                <AuthInput
                    placeholder='Password'
                    icon='password'
                    error={authError}
                    security={true}
                />
                {authError && <Text style={styles.wrongText}>Oops! Your password Is Not Correct</Text>}
                <AuthInput
                    placeholder='Password Again'
                    icon='password'
                    error={authError}
                    security={true}
                />
                {authError && <Text style={styles.wrongText}>Oops! Your password Is Not Correct</Text>}
            </View>
            <ButtonBlue title='Sign Up' onPress={() => navigation.navigate('AppScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    registerForm: {
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

export default RegisterForm;