import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {InputProps} from '@/@types/styles';
import Typography from '../Typography/Typography';
import {
  FontFamily,
  FontSize,
  LineHeight,
  NeutralColor,
  PrimaryColor,
} from '@/constants';

function CuponInput(props: InputProps) {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  let borderColor = NeutralColor.LightColor;

  if (focus) {
    borderColor = PrimaryColor.BlueColor;
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          value={value}
          onChangeText={value => setValue(value)}
          style={[
            styles.placeholderText,
            {
              fontFamily:
                value === '' ? FontFamily.FontRegular : FontFamily.FontBold,
              borderColor: borderColor,
            },
          ]}
          placeholder={props.placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={props.type === 'Password' ?? true}
        />
        <TouchableOpacity style={styles.button}>
          <Typography
            text="Apply"
            size="H5"
            type="Text"
            fontFamily="Bold"
            color="White"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.error}>
        <Typography
          text="Oops! Your Email Is Not Correct"
          fontFamily="Bold"
          size="Large"
          type="Caption"
          color="Red"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
  },
  placeholderText: {
    padding: 16,
    borderWidth: 1,
    width: '75%',
    fontSize: FontSize.FontSize12,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight180,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  button: {
    width: '25%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColor.BlueColor,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  error: {
    marginTop: 8,
  },
});

export default CuponInput;
