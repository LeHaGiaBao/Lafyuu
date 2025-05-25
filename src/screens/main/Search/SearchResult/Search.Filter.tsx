import React, {memo, useCallback, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFIcon, LFText} from '@components';
import translate from '@translations/i18n';
import {NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import {CATEGORY_LIST} from '@database';

interface SearchFilterProps {
  result: Array<any>;
}

function SearchFilter(props: SearchFilterProps) {
  const {result} = props;
  const categoryType = useRef(CATEGORY_LIST?.[5]?.name);
  const nav = useLFNavigation();

  const goToCategory = useCallback(() => {
    nav.navigate(Routes.categoryList);
  }, [nav]);

  return (
    <>
      <View style={styles.navContainer}>
        <LFText.Text typo="BodyNormalBold" color={NeutralColor.GreyColor}>
          {result?.length ?? 0} {translate('resources:result')}
        </LFText.Text>
        <TouchableOpacity style={styles.filterContainer} onPress={goToCategory}>
          <LFText.Text typo="BodyNormalBold" color={NeutralColor.DarkColor}>
            {categoryType.current}
          </LFText.Text>
          <LFIcon.Icon icon="down" size={24} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});

export default memo(SearchFilter);
