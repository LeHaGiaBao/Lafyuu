import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  generateNotificationIcon,
  LFIcon,
  LFNotificationItemProps,
  LFText,
} from '@components';
import {NeutralColor} from '@constants';

const LFNotificationItem = (props: LFNotificationItemProps) => {
  const {type, title, content, time, image, ...rest} = props;

  const {icon, leftWidth, rightWidth} = generateNotificationIcon(type);

  return (
    <View style={notificationItemStyles.container} {...rest}>
      <View style={[notificationItemStyles.leftNode, {width: leftWidth}]}>
        {icon ? (
          <LFIcon.Icon icon={icon} size={24} />
        ) : image ? (
          <Image
            source={typeof image === 'string' ? {uri: image} : image}
            style={notificationItemStyles.image}
          />
        ) : undefined}
      </View>
      <View style={[notificationItemStyles.rightNode, {width: rightWidth}]}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor} numberOfLines={3}>
          {title}
        </LFText.Text>
        <LFText.Text
          typo="BodyNormalRegular"
          color={NeutralColor.GreyColor}
          numberOfLines={5}>
          {content}
        </LFText.Text>
        <LFText.Text
          typo="CaptionNormalRegular"
          color={NeutralColor.DarkColor}
          numberOfLines={5}>
          {time}
        </LFText.Text>
      </View>
    </View>
  );
};

const notificationItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 16,
    padding: 16,
  },
  leftNode: {
    display: 'flex',
  },
  rightNode: {
    display: 'flex',
    gap: 8,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5,
    backgroundColor: NeutralColor.LightColor,
  },
});

export default memo(LFNotificationItem);
