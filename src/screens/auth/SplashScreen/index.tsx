import {Icon} from '@/components';
import {BackgroundColor, PrimaryColor} from '@/constants';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

function SplashScreen() {
  return (
    <View style={style.screen}>
      <View style={style.logoContainer}>
        <Icon icon={'icon-b'} size={32} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    backgroundColor: PrimaryColor.BlueColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    height: 72,
    width: 72,
    borderRadius: 16,
    backgroundColor: BackgroundColor.WhiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(SplashScreen);
