import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFForm, LFIcon, LFLine} from '@components';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

interface SearchHeaderProps {
  text: string;
  setText: any;
}

function Header(props: SearchHeaderProps) {
  const {text, setText} = props;
  const nav = useLFNavigation();

  const goToShortBy = useCallback(() => {
    nav.navigate(Routes.searchShortBy);
  }, [nav]);

  const goToFilter = useCallback(() => {
    nav.navigate(Routes.searchFilter);
  }, [nav]);

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
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={goToShortBy}>
            <LFIcon.Icon icon={'short-icon'} size={24} />
          </TouchableOpacity>

          <TouchableOpacity onPress={goToFilter}>
            <LFIcon.Icon icon={'filter'} size={24} />
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
