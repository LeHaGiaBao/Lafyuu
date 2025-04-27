import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFForm, LFIcon, LFLine, LFNotification} from '@components';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

function Header() {
  const nav = useLFNavigation();

  const goToNotificationList = useCallback(() => {
    nav.navigate(Routes.notificationList);
  }, [nav]);

  return (
    <>
      <View style={styles.navContainer}>
        <View style={styles.searchInput}>
          <LFForm.SearchInput
            placeholder={translate('resources:search_product')}
            isActive={false}
          />
        </View>
        <View style={styles.iconContainer}>
          <LFIcon.Icon icon={'love'} size={24} />
          <TouchableOpacity onPress={goToNotificationList}>
            <View style={styles.dot}>
              <LFNotification.Mark />
            </View>
            <LFIcon.Icon icon={'notification'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <LFLine.Line />
    </>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  searchInput: {
    width: '75%',
  },
  iconContainer: {
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 24,
  },
  dot: {
    position: 'absolute',
    top: 1,
    right: 2,
    zIndex: 10,
  },
});

export default memo(Header);
