import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBlue from '../../../components/Button/ButtonBlue';
import AuthInput from '../../../components/Input/AuthInput';
import { FontFamily, FontSize } from '../../../constants/fonts';
import { PrimaryColor } from '../../../constants/colors';

function ForgotPasswordForm({ navigation }: any) {
    const [authError, setAuthError] = useState(false)

    return (
        <>
            <View style={styles.forgotPasswordForm}>
                <View style={styles.inputForm}>
                    <AuthInput
                        placeholder='Your email'
                        icon='email'
                        error={authError}
                        security={false}
                    />
                    {authError && <Text style={styles.wrongText}>Oops! Your Email Is Not Correct</Text>}
                </View>
                <ButtonBlue title='Recovery password' onPress={() => navigation.goBack()} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    forgotPasswordForm: {
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

export default ForgotPasswordForm;