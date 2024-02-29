import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontFamily, FontSize } from '../../constants/fonts';
import { NeutralColor } from '../../constants/colors';

function AuthTitle({ title, subTitle }: any) {
    return (
        <View style={styles.authContainer}>
            <Text style={styles.welcomeText}>{title}</Text>
            <Text style={styles.welcomeSubText}>{subTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    authContainer: {
        alignItems: 'center',
    },
    welcomeText: {
        marginTop: 16,
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize16,
        color: NeutralColor.DarkColor,
    },
    welcomeSubText: {
        marginTop: 8,
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
})

export default AuthTitle;