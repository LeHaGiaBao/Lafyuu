import React, {memo} from 'react';
import {ButtonProps} from '@types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BackgroundColor, FontFamily, FontSize, PrimaryColor} from '@constants';

function DefaultButton(props: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.onPress}
            onLongPress={props.onLongPress}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 16,
        backgroundColor: PrimaryColor.BlueColor,
        shadowColor: PrimaryColor.BlueColor,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.24,
        shadowRadius: 30 * 0.24,
        elevation: 5,
    },
    buttonText: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: BackgroundColor.WhiteColor,
    },
});

export default memo(DefaultButton);
