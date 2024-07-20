import React, {memo, useState} from 'react';
import {BackgroundColor, NeutralColor} from '@/constants';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';

function ButtonNumber() {
  const [number, setNumber] = useState(1);

  const minus = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const plus = () => {
    setNumber(number + 1);
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.iconContainer} onPress={minus}>
        <Icon icon={'minus'} size={16} />
      </TouchableOpacity>
      <View style={styles.numberContainer}>
        <Typography
          text={number}
          fontFamily="Regular"
          color="Dark"
          type="Caption"
          size="Small"
        />
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={plus}>
        <Icon icon={'plus-i'} size={16} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    borderColor: NeutralColor.LightColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  iconContainer: {
    backgroundColor: BackgroundColor.WhiteColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  numberContainer: {
    width: 40,
    backgroundColor: NeutralColor.LightColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(ButtonNumber);
