import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFNotificationMarkProps, LFText} from '@components';
import {BackgroundColor, PrimaryColor} from '@constants';

const LFMark = (props: LFNotificationMarkProps) => {
  const {number} = props;

  return (
    <>
      {number !== undefined ? (
        <View style={markStyles.mark}>
          <LFText.Text
            typo="CaptionNormalBold"
            color={BackgroundColor.WhiteColor}>
            {number}
          </LFText.Text>
        </View>
      ) : (
        <View style={markStyles.smallMark} />
      )}
    </>
  );
};

const markStyles = StyleSheet.create({
  mark: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: PrimaryColor.RedColor,
  },
  smallMark: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: PrimaryColor.RedColor,
  },
});

export default memo(LFMark);
