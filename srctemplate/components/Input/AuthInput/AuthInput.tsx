import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { FontFamily, FontSize } from '../../../constants/fonts';
import { NeutralColor, PrimaryColor } from '../../../constants/colors';
import { lockIcon, mailIcon, userIcon } from '../../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface AuthInputProps {
    placeholder: string
    icon: string,
    error: boolean,
    security: boolean
}

function AuthInput({ placeholder, icon, error, security }: AuthInputProps) {
    const [securityState, setSecurityState] = useState(security)
    const [focus, setFocus] = useState(false)
    let borderStyles
    let iconName

    if (!error) {
        switch (focus) {
            case true:
                borderStyles = styles.focusBorder
                switch (icon) {
                    case 'email':
                        iconName = mailIcon.mailIconFocus
                        break
                    case 'password':
                        iconName = lockIcon.lockIconFocus
                        break
                    case 'profile':
                        iconName = userIcon.userIconFocus
                        break
                }
                break
            case false:
                borderStyles = styles.defaultBorder
                switch (icon) {
                    case 'email':
                        iconName = mailIcon.mailIcon
                        break
                    case 'password':
                        iconName = lockIcon.lockIcon
                        break
                    case 'profile':
                        iconName = userIcon.userIcon
                        break
                }
                break
        }
    } else {
        borderStyles = styles.errorBorder
        switch (icon) {
            case 'email':
                iconName = mailIcon.mailIconError
                break
            case 'password':
                iconName = lockIcon.lockIconError
                break
        }
    }

    return (
        <View style={[styles.inputContainer, borderStyles]}>
            <Image source={iconName} style={styles.iconStyle} />
            <TextInput
                placeholder={placeholder}
                autoCapitalize="none"
                style={styles.inputBox}
                secureTextEntry={securityState}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            {
                icon === 'password' && (
                    <MaterialCommunityIcons
                        name={securityState ? 'eye-outline' : `eye-off-outline`}
                        size={24}
                        style={styles.eyeIcon}
                        onPress={() => setSecurityState(!securityState)}
                    />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 5,
    },
    defaultBorder: {
        borderColor: NeutralColor.LightColor,
    },
    focusBorder: {
        borderColor: PrimaryColor.BlueColor
    },
    errorBorder: {
        borderColor: PrimaryColor.RedColor
    },
    iconStyle: {
        marginRight: 10,
    },
    inputBox: {
        marginLeft: 10,
        width: '82%',
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
    eyeIcon: {
        color: NeutralColor.GreyColor,
    }
})

export default AuthInput;