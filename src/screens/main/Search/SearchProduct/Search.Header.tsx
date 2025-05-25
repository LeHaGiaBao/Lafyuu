import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFForm, LFIcon, LFLine} from '@components';
import translate from '@translations/i18n';

interface SearchHeaderProps {
  text: string;
  setText: any;
}

function Header(props: SearchHeaderProps) {
  const {text, setText} = props;

  return (
    <>
      <View style={styles.navContainer}>
        <View style={styles.searchInput}>
          <LFForm.SearchInput
            isActive
            value={text}
            onChangeText={setText}
            placeholder={translate('resources:search_product')}
          />
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <LFIcon.Icon icon={'mic'} size={24} />
        </TouchableOpacity>
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
    width: '85%',
  },
  iconContainer: {
    width: '15%',
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
