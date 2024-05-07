import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BackgroundColor, PrimaryColor } from '../../../constants/colors';
import { FontFamily, FontSize } from '../../../constants/fonts';

interface ButtonProps {
    title: string,
    onPress?: () => void,
    onLongPress?: () => void,
}

function ButtonBlue({ title, onPress, onLongPress }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PrimaryColor.BlueColor,
        borderRadius: 5,
        padding: 16,
        shadowColor: PrimaryColor.BlueColor,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.24,
        shadowRadius: 30 * 0.24,
        elevation: 5,
    },
    buttonText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: BackgroundColor.WhiteColor,
    }
})

export default memo(ButtonBlue);