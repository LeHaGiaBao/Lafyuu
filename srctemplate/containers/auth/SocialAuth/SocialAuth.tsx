import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { socialIcon } from '../../../assets';
import { NeutralColor } from '../../../constants/colors';
import { FontFamily, FontSize } from '../../../constants/fonts';

function SocialAuth() {
    return (
        <View style={styles.social}>
            <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                <Image
                    source={socialIcon.googleIcon}
                    style={styles.iconStyle}
                />
                <Text style={styles.socialText}>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                <Image
                    source={socialIcon.facebookIcon}
                    style={styles.iconStyle}
                />
                <Text style={styles.socialText}>Login with Facebook</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    social: {
        marginTop: 16,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    socialButton: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 57,
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: NeutralColor.LightColor,
    },
    socialText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.GreyColor,
        width: '100%',
        textAlign: 'center',
    },
    iconStyle: {
        height: 24,
        width: 24,
        marginLeft: 16,
    },
})

export default SocialAuth;