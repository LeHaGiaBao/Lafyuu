import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  LFNavigation,
  LFNotificationItemProps,
  LFNotification,
} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {NOTIFICATION_FEED_ITEM} from '@database';
import translate from '@translations/i18n';

function NotificationFeed() {
  const renderItem = useCallback(({item}: {item: LFNotificationItemProps}) => {
    const {type, title, content, time, image} = item;

    return (
      <LFNotification.NotificationItem
        type={type}
        title={title}
        content={content}
        time={time}
        image={image}
      />
    );
  }, []);

  return (
    <FlatList
      data={NOTIFICATION_FEED_ITEM}
      renderItem={renderItem}
      style={styles.notificationContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:notification_list:feed')}
          />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(NotificationFeed);
