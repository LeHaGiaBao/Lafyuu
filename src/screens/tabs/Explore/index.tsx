import React, {memo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {BackgroundColor, Devices} from '@constants';
import {
  MAN_FASHION_CATEGORY_LIST,
  WOMAN_FASHION_CATEGORY_LIST,
} from '@database';
import translate from '@translations/i18n';
import ExploreHeader from './Explore.Header';
import ExploreCategoryList from './Explore.CategoryList';

function ExploreScreen() {
  return (
    <ScrollView
      style={styles.exploreContainer}
      showsVerticalScrollIndicator={false}>
      <ExploreHeader />
      <ExploreCategoryList
        categoryName={translate('resources:man_fashion')}
        data={MAN_FASHION_CATEGORY_LIST}
      />
      <ExploreCategoryList
        categoryName={translate('resources:woman_fashion')}
        data={WOMAN_FASHION_CATEGORY_LIST}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exploreContainer: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
});

export default memo(ExploreScreen);
