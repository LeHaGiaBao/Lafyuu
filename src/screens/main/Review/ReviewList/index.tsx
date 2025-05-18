import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFButton, LFNavigation, LFReview, LFReviewItemProps} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {PRODUCT_DETAIL_REVIEW_LIST} from '@database';
import {useLFNavigation, useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';
import {Routes} from '@routes/routes';

function ReviewList() {
  const nav = useLFNavigation();
  const params =
    (useLFNavigationParams() as {
      numOfReview?: number;
    }) || {};

  const numOfReview = params?.numOfReview ?? 0;

  const goToWriteReview = useCallback(() => {
    nav.navigate(Routes.writeReview);
  }, [nav]);

  const keyExtractor = useCallback(
    (item: LFReviewItemProps) => item?.id?.toString(),
    [],
  );

  const renderItem = useCallback(({item}: {item: LFReviewItemProps}) => {
    return <LFReview.ReviewItem {...item} />;
  }, []);

  const renderSeperator = useCallback(() => {
    return <View style={styles.seperator} />;
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <LFNavigation.HeaderCanGoBack
        name={numOfReview + ' ' + translate('navigation:review')}
      />
    );
  }, [numOfReview]);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <>
      <FlatList
        data={PRODUCT_DETAIL_REVIEW_LIST}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.reviewContainer}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeperator}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={goToWriteReview}
          title={translate('resources:write_review')}
          type="Primary"
          size="Large"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  seperator: {
    marginVertical: 8,
  },
  footer: {
    height: Devices.bottomButton + 100,
  },
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: Devices.bottomButton,
  },
});

export default memo(ReviewList);
