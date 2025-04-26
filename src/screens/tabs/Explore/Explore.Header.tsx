import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFForm, LFIcon, LFLine} from '@components';
import translate from '@translations/i18n';

function Header() {
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
          <LFIcon.Icon icon={'notification'} size={24} />
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
});

export default memo(Header);
