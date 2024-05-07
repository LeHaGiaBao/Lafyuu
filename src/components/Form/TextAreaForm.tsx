import React, {memo, useState} from 'react';
import {TextAreaFormProps} from '@types';
import {StyleSheet, TextInput} from 'react-native';
import {FontFamily, FontSize, NeutralColor, PrimaryColor} from '@constants';

function TextAreaForm(props: TextAreaFormProps) {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    let borderStyles;

    switch (focus) {
        case true:
            borderStyles = styles.focusBorder;
            break;
        case false:
            borderStyles = styles.defaultBorder;
            break;
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
            multiline
        />
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        fontSize: FontSize.FontSize12,
        color: NeutralColor.GreyColor,
        width: '100%',
        height: 160,
        paddingTop: 16,
        padding: 16,
        borderWidth: 1,
        borderRadius: 5,
    },
    defaultBorder: {
        borderColor: NeutralColor.LightColor,
    },
    focusBorder: {
        borderColor: PrimaryColor.BlueColor,
    },
});

export default memo(TextAreaForm);
