/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ButtonCheckProps} from '@/@types/styles';
import {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Typography from '../Typography/Typography';
import {BackgroundColor, NeutralColor} from '@/constants';
import Icon from '../Icon/Icon';

function ButtonCheck(props: ButtonCheckProps) {
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isCheck
            ? 'rgba(64, 191, 255, 0.1)'
            : BackgroundColor.WhiteColor,
          borderColor: isCheck
            ? BackgroundColor.WhiteColor
            : NeutralColor.LightColor,
          borderWidth: isCheck ? 0 : 1,
          display: 'flex',
          flexDirection: props.icon ? 'row' : 'column',
          justifyContent: props.icon ? 'space-between' : 'center',
          alignItems: 'center',
          gap: 8,
        },
      ]}
      onPress={handleCheck}>
      {props.icon ? (
        <>
          <Icon icon={`${props.icon}`} size={16} />
          <Typography
            text={props.title}
            size="Large"
            type="Caption"
            fontFamily={isCheck ? 'Bold' : 'Regular'}
            color={isCheck ? 'Blue' : 'Grey'}
          />
        </>
      ) : (
        <Typography
          text={props.title}
          size="Large"
          type="Caption"
          fontFamily={isCheck ? 'Bold' : 'Regular'}
          color={isCheck ? 'Blue' : 'Grey'}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 50,
    padding: 16,
    borderRadius: 5,
  },
});

export default memo(ButtonCheck);
