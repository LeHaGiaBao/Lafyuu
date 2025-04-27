import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFIcon, LFLine, LFText} from '@components';
import {NeutralColor} from '@constants';
import {LFNavigationBackProps} from '../types';
import {useLFNavigation} from '@hooks/core';

const LFHeaderCanGoBack = (props: LFNavigationBackProps) => {
  const {name, rightNode} = props;
  const nav = useLFNavigation();

  const handleGoBack = useCallback(() => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
  }, [nav]);

  return (
    <>
      <View style={styles.navContainer}>
        <View style={styles.leftNode}>
          <TouchableOpacity onPress={handleGoBack}>
            <LFIcon.Icon icon={'left'} size={24} />
          </TouchableOpacity>
          <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
            {name}
          </LFText.Text>
        </View>
        {rightNode ? rightNode : undefined}
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
  leftNode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

export default memo(LFHeaderCanGoBack);
