import React, {memo, useCallback, useState} from 'react';
import {AuthInputProps} from '@types';
import {StyleSheet, TextInput, View} from 'react-native';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '@constants';
import i18n from '@translation';

import UserSvgIcon from '@assets/User/User.svg';
import UserFocusSvgIcon from '@assets/User/UserFocus.svg';
import EmailSvgIcon from '@assets/Email/Email.svg';
import EmailFocusSvgIcon from '@assets/Email/EmailFocus.svg';
import EmailErrorSvgIcon from '@assets/Email/EmailError.svg';
import PasswordSvgIcon from '@assets/Password/Password.svg';
import PasswordFocusSvgIcon from '@assets/Password/PasswordFocus.svg';
import PasswordErrorSvgIcon from '@assets/Password/PasswordError.svg';
import BodyText from '@components/Typography/BodyText';

function AuthInput(props: AuthInputProps) {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');
    let borderStyles;

    if (props.error) {
        borderStyles = styles.errorBorder;
    } else {
        switch (focus) {
            case true:
                borderStyles = styles.focusBorder;
                break;
            case false:
                borderStyles = styles.defaultBorder;
                break;
        }
    }

    const renderUserIcon = useCallback(() => {
        if (focus) {
            return <UserFocusSvgIcon width={24} height={24} />;
        } else {
            return <UserSvgIcon width={24} height={24} />;
        }
    }, [focus]);

    const renderAuthIcon = useCallback(() => {
        if (props.error === true) {
            switch (props.icon) {
                case 'Email':
                    return <EmailErrorSvgIcon width={24} height={24} />;
                case 'Password':
                    return <PasswordErrorSvgIcon width={24} height={24} />;
            }
        } else {
            if (focus) {
                switch (props.icon) {
                    case 'Email':
                        return <EmailFocusSvgIcon width={24} height={24} />;
                    case 'Password':
                        return <PasswordFocusSvgIcon width={24} height={24} />;
                }
            } else {
                switch (props.icon) {
                    case 'Email':
                        return <EmailSvgIcon width={24} height={24} />;
                    case 'Password':
                        return <PasswordSvgIcon width={24} height={24} />;
                }
            }
        }
    }, [focus, props.error, props.icon]);

    const renderErrorText = useCallback(() => {
        if (props.icon === 'Email') {
            return (
                <BodyText
                    text={i18n.t('email_warning_error')}
                    size="Normal"
                    family="Bold"
                    color="Red"
                />
            );
        } else if (props.icon === 'Password') {
            return (
                <BodyText
                    text={i18n.t('password_warning_error')}
                    size="Normal"
                    family="Bold"
                    color="Red"
                />
            );
        }
    }, [props.icon]);

    return (
        <View style={styles.authContainer}>
            <View style={[styles.inputContainer, borderStyles]}>
                {props.icon === 'User' ? renderUserIcon() : renderAuthIcon()}
                <TextInput
                    placeholder={props.placeholder}
                    autoCapitalize="none"
                    style={[
                        styles.inputBox,
                        {fontFamily: value !== '' ? FontFamily.FontBold : FontFamily.FontRegular},
                    ]}
                    secureTextEntry={props.security}
                    onChangeText={e => setValue(e)}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </View>
            {props.error && renderErrorText()}
        </View>
    );
}

const styles = StyleSheet.create({
    authContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
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
    inputBox: {
        marginLeft: 10,
        width: '82%',
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
    },
    defaultBorder: {
        borderColor: NeutralColor.LightColor,
    },
    focusBorder: {
        borderColor: PrimaryColor.BlueColor,
    },
    errorBorder: {
        borderColor: PrimaryColor.RedColor,
    },
});

export default memo(AuthInput);
