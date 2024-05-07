import React, {memo, useState} from 'react';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '@constants';
import {StyleSheet, TextInput} from 'react-native';
import {InputProps} from '@types';

function DefaultInput(props: InputProps) {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
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

    return (
        <TextInput
            placeholder={props.placeholder}
            autoCapitalize="none"
            value={value}
            onChangeText={e => setValue(e)}
            style={[
                styles.inputContainer,
                borderStyles,
                {fontFamily: value !== '' ? FontFamily.FontBold : FontFamily.FontRegular},
            ]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        />
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
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
        borderColor: PrimaryColor.BlueColor,
    },
    errorBorder: {
        borderColor: PrimaryColor.RedColor,
    },
});

export default memo(DefaultInput);
