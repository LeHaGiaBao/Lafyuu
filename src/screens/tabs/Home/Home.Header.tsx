import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {NeutralColor} from '@/constants';
import translate from '@/translation/i18n';
import {Icon, Input} from '@/components';

function Header() {
  return (
    <View style={styles.navContainer}>
      <View style={styles.searchInput}>
        <Input
          placeholder={translate('resources:search_product')}
          type="Search"
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon icon={'love'} size={24} />
        <View>
          <Icon icon={'notification'} size={24} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: NeutralColor.LightColor,
    paddingHorizontal: 16,
  },
  searchInput: {
    width: '75%',
  },
  iconContainer: {
    top: -7,
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 24,
  },
});

export default memo(Header);
