import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFLine, LFNavigationProps, LFText} from '@components';
import {NeutralColor} from '@constants';

const LFHeader = (props: LFNavigationProps) => {
  const {name} = props;

  return (
    <>
      <View style={headerStyles.navContainer}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {name}
        </LFText.Text>
      </View>
      <LFLine.Line />
    </>
  );
};

const headerStyles = StyleSheet.create({
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
