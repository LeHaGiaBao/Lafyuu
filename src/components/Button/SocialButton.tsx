import React, {memo, useCallback} from 'react';
import {SocialButtonProps} from '@types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '@constants';
import FacebookSvgIcon from '@assets/Social/Facebook.svg';
import GoogleSvgIcon from '@assets/Social/Google.svg';

function SocialButton(props: SocialButtonProps) {
    const renderIcon = useCallback((icon: string) => {
        if (icon === 'Facebook') {
            return <FacebookSvgIcon width={24} height={24} />;
        } else if (icon === 'Google') {
            return <GoogleSvgIcon width={24} height={24} />;
        }
    }, []);

    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.onPress}
            onLongPress={props.onLongPress}>
            {renderIcon(props.icon)}
            <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 57,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        padding: 16,
        borderColor: NeutralColor.LightColor,
        borderWidth: 1,
        shadowColor: PrimaryColor.BlueColor,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.24,
        shadowRadius: 30 * 0.24,
        elevation: 5,
    },
    buttonTextContainer: {
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.GreyColor,
    },
});

export default memo(SocialButton);
