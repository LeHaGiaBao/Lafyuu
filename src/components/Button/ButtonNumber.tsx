import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFButtonNumberProps, LFIcon, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';

const LFButtonNumber = (props: LFButtonNumberProps) => {
  const {number = 1} = props;
  const [nums, setNums] = useState(number);

  const minus = useCallback(() => {
    if (nums > 1) {
      setNums(nums - 1);
    }
  }, [nums]);

  const plus = useCallback(() => {
    setNums(nums + 1);
  }, [nums]);

  return (
    <View style={buttonStyles.button}>
      <TouchableOpacity style={buttonStyles.iconContainer} onPress={minus}>
        <LFIcon.Icon icon={'minus'} size={16} />
      </TouchableOpacity>
      <View style={buttonStyles.numberContainer}>
        <LFText.Text typo="CaptionLargeRegular" color={NeutralColor.DarkColor}>
          {nums}
        </LFText.Text>
      </View>
      <TouchableOpacity style={buttonStyles.iconContainer} onPress={plus}>
        <LFIcon.Icon icon={'plus-i'} size={16} />
      </TouchableOpacity>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
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

export default memo(LFButtonNumber);
