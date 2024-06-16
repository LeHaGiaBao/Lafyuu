import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../Icon/Icon';
import {BackgroundColor, NeutralColor} from '@/constants';

function ButtonAdd() {
  const handleAdd = () => {};

  return (
    <TouchableOpacity style={styles.button} onPress={handleAdd}>
      <Icon icon={'plus'} size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: BackgroundColor.WhiteColor,
    borderColor: NeutralColor.LightColor,
    borderWidth: 1,
  },
});

export default ButtonAdd;
