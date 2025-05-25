import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFIcon, LFLine, LFNavigationBackProps, LFText} from '@components';
import {NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';

const LFHeaderCanGoBack = (props: LFNavigationBackProps) => {
  const {name, icon = 'left', rightNode} = props;
  const nav = useLFNavigation();

  const handleGoBack = useCallback(() => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
  }, [nav]);

  return (
    <>
      <View style={headerStyles.navContainer}>
        <View style={headerStyles.leftNode}>
          <TouchableOpacity onPress={handleGoBack}>
            <LFIcon.Icon icon={icon} size={24} />
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

const headerStyles = StyleSheet.create({
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
