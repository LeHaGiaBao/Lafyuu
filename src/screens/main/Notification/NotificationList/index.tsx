import React, {memo, useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  LFIcon,
  LFNavigation,
  LFNavigationItemProps,
  LFNotification,
} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {NOTIFICATION_LIST_ITEM} from '@database';
import translate from '@translations/i18n';

function NotificationList() {
  const headerRightNode = useMemo(() => {
    return (
      <View style={styles.rightNode}>
        <TouchableOpacity>
          <LFIcon.Icon icon="search" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <LFIcon.Icon icon="more" size={24} />
        </TouchableOpacity>
      </View>
    );
  }, []);

  const renderItem = useCallback(({item}: {item: LFNavigationItemProps}) => {
    const {route, name, icon, numOfNotification} = item;

    return (
      <LFNavigation.NavigationItem
        route={route}
        name={name}
        icon={icon}
        rightNode={<LFNotification.Mark number={numOfNotification} />}
      />
    );
  }, []);

  return (
    <FlatList
      data={NOTIFICATION_LIST_ITEM}
      renderItem={renderItem}
      style={styles.notificationContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:notification')}
            rightNode={headerRightNode}
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
  rightNode: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
});

export default memo(NotificationList);
