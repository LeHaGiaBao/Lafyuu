import React, {memo, useCallback, useState} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {LFIcon, LFNavigationItemProps, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';

const LFNavigationItem = (props: LFNavigationItemProps) => {
  const {
    route,
    navigationParam,
    name,
    icon = '',
    rightNode,
    onPress,
    onPressIn,
    onPressOut,
    isGoBack = false,
    ...rest
  } = props;
  const nav = useLFNavigation();
  const [backgroundColor, setBackgroundColor] = useState(
    BackgroundColor.WhiteColor,
  );

  const handleOnPress = useCallback(
    (event: GestureResponderEvent) => {
      if (isGoBack) {
        nav.goBack();
      } else {
        nav.navigate(route, navigationParam);
      }
      onPress?.(event);
    },
    [isGoBack, nav, navigationParam, onPress, route],
  );

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      setBackgroundColor(NeutralColor.LightColor);
      onPressIn?.(event);
    },
    [onPressIn],
  );

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      setBackgroundColor(BackgroundColor.WhiteColor);
      onPressOut?.(event);
    },
    [onPressOut],
  );

  return (
    <TouchableOpacity
      style={[itemStyles.navContainer, {backgroundColor: backgroundColor}]}
      onPress={e => handleOnPress(e)}
      onPressIn={e => handlePressIn(e)}
      onPressOut={e => handlePressOut(e)}
      {...rest}>
      <View style={itemStyles.leftNode}>
        <LFIcon.Icon icon={icon} size={24} />
        <LFText.Text typo="H6" color={NeutralColor.DarkColor}>
          {name}
        </LFText.Text>
      </View>
      {rightNode ? rightNode : undefined}
    </TouchableOpacity>
  );
};

const itemStyles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  leftNode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

export default memo(LFNavigationItem);
