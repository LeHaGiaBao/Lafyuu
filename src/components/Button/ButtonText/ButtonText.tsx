import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PrimaryColor } from '../../../constants/colors';
import { FontFamily, FontSize } from '../../../constants/fonts';

interface ButtonProps {
    title: string,
    onPress?: () => void,
    onLongPress?: () => void,
}

function ButtonText({ title, onPress, onLongPress }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={styles.titleButton}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        borderRadius: 5,
        padding: 16,
        backgroundColor: `${PrimaryColor.BlueColor}33`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleButton: {
        width: '100%',
        fontFamily: FontFamily.FontBold,
        color: PrimaryColor.BlueColor,
        fontSize: FontSize.FontSize10,
    }
})

export default ButtonText;