/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from '@/@types/styles';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@/constants';
import Typography from '../Typography/Typography';
import Icon from '../Icon/Icon';

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: props.size === 'Large' ? '100%' : 'auto',
          backgroundColor:
            props.type === 'Primary'
              ? PrimaryColor.BlueColor
              : BackgroundColor.WhiteColor,
          shadowColor:
            props.type === 'Primary'
              ? PrimaryColor.BlueColor
              : BackgroundColor.WhiteColor,
          borderColor:
            props.type === 'Secondary'
              ? NeutralColor.LightColor
              : BackgroundColor.WhiteColor,
          borderWidth: props.type === 'Secondary' ? 1 : 0,
          display: 'flex',
          flexDirection: props.icon ? 'row' : 'column',
          justifyContent: props.icon ? 'space-between' : 'center',
          alignItems: 'center',
        },
      ]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      {props.icon ? (
        <>
          <Icon icon={`${props.icon}`} size={24} />
          <View style={styles.typo}>
            <Typography
              text={props.title}
              size="H5"
              type="Text"
              fontFamily="Bold"
              color={props.type === 'Primary' ? 'White' : 'Grey'}
            />
          </View>
        </>
      ) : (
        <Typography
          text={props.title}
          size="H5"
          type="Text"
          fontFamily="Bold"
          color={props.type === 'Primary' ? 'White' : 'Grey'}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 57,
    borderRadius: 5,
    padding: 16,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.24,
    shadowRadius: 30 * 0.24,
    elevation: 5,
  },
  typo: {
    alignItems: 'center',
    width: '100%',
  },
});

export default memo(Button);
