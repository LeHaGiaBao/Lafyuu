import React, {memo, useCallback} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import images from '@assets/images';
import {LFRating, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import {PRODUCT_DETAIL_REVIEW_IMAGE} from '@database';
import translate from '@translations/i18n';

function DetailReview() {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: {item: any}) => {
    const {image} = item;

    return <Image source={image} style={styles.reviewImage} />;
  }, []);

  return (
    <>
      <View style={styles.header}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {translate('resources:review_product')}
        </LFText.Text>

        <LFText.Text typo="H4" color={PrimaryColor.BlueColor}>
          {translate('resources:see_more')}
        </LFText.Text>
      </View>

      <View style={styles.reviewStar}>
        <LFRating.Star rating={4} ratingType="Medium" />
        <LFText.Text typo="CaptionNormalBold" color={NeutralColor.GreyColor}>
          4.5{' '}
          <LFText.Text
            typo="CaptionNormalRegular"
            color={NeutralColor.GreyColor}>
            {`(5 ${translate('resources:review')})`}
          </LFText.Text>
        </LFText.Text>
      </View>

      <View style={styles.profileContainer}>
        <Image source={images.profile} style={styles.image} />
        <View style={styles.rightNode}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            James Lawson
          </LFText.Text>
          <LFRating.Star rating={4} ratingType="Medium" />
        </View>
      </View>

      <View style={styles.reviewContainer}>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          air max are always very comfortable fit, clean and just perfect in
          every way. just the box was too small and scrunched the sneakers up a
          little bit, not sure if the box was always this small but the 90s are
          and will always be one of my favorites.
        </LFText.Text>
      </View>

      <FlatList
        horizontal
        data={PRODUCT_DETAIL_REVIEW_IMAGE}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageList}
      />

      <View style={styles.date}>
        <LFText.Text typo="CaptionNormalRegular" color={NeutralColor.GreyColor}>
          December 10, 2016
        </LFText.Text>
      </View>
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
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: NeutralColor.LightColor,
  },
  rightNode: {
    display: 'flex',
    gap: 8,
  },
  reviewContainer: {
    paddingHorizontal: 16,
  },
  imageList: {
    marginTop: 16,
    paddingHorizontal: 16,
    display: 'flex',
    gap: 16,
  },
  reviewImage: {
    width: 72,
    height: 72,
    borderRadius: 8,
  },
  date: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

export default memo(DetailReview);
