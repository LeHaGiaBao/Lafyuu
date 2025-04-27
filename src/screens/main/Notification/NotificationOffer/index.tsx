import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  LFNavigation,
  LFNotificationItemProps,
  LFNotification,
} from '@components';
import {BackgroundColor} from '@constants';
import {NOTIFICATION_OFFER_ITEM} from '@database';
import translate from '@translations/i18n';

function NotificationOffer() {
  const renderItem = useCallback(({item}: {item: LFNotificationItemProps}) => {
    const {type, title, content, time} = item;

    return (
      <LFNotification.NotificationItem
        type={type}
        title={title}
        content={content}
        time={time}
      />
    );
  }, []);

  return (
    <FlatList
      data={NOTIFICATION_OFFER_ITEM}
      renderItem={renderItem}
      style={styles.notificationContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:notification_list:offer')}
          />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    paddingTop: 77,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(NotificationOffer);
