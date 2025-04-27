import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFLine, LFText} from '@components';
import {NeutralColor} from '@constants';
import {LFNavigationProps} from '../types';

const LFHeader = (props: LFNavigationProps) => {
  const {name} = props;

  return (
    <>
      <View style={styles.navContainer}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {name}
        </LFText.Text>
      </View>
      <LFLine.Line />
    </>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
});

export default memo(LFHeader);
