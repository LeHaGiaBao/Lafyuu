import React, {memo, useCallback, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFRating, LFReview, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import {PRODUCT_DETAIL_REVIEW} from '@database';
import translate from '@translations/i18n';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';

function DetailReview() {
  const numOfReview = useRef(5);
  const nav = useLFNavigation();

  const goToAllReview = useCallback(() => {
    nav.navigate(Routes.reviewList, {numOfReview: numOfReview.current});
  }, [nav]);

  return (
    <>
      <View style={styles.header}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {translate('resources:review_product')}
        </LFText.Text>

        <TouchableOpacity onPress={goToAllReview}>
          <LFText.Text typo="H4" color={PrimaryColor.BlueColor}>
            {translate('resources:see_more')}
          </LFText.Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reviewStar}>
        <LFRating.Star rating={4} ratingType="Medium" />
        <LFText.Text typo="CaptionNormalBold" color={NeutralColor.GreyColor}>
          4.5{' '}
          <LFText.Text
            typo="CaptionNormalRegular"
            color={NeutralColor.GreyColor}>
            {`(${numOfReview.current} ${translate('resources:review')})`}
          </LFText.Text>
        </LFText.Text>
      </View>
      <LFReview.ReviewItem {...PRODUCT_DETAIL_REVIEW} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewStar: {
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default memo(DetailReview);
