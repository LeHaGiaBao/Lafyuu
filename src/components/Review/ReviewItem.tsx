import React, {memo, useCallback} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {LFRating, LFReviewItemProps, LFText} from '@components';
import {NeutralColor} from '@constants';

const LFReviewItem = (props: LFReviewItemProps) => {
  const {imageProfile, name, rating, review, images, date} = props;

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: {item: any}) => {
    const {image} = item;

    return <Image source={image} style={reviewItemStyles.reviewImage} />;
  }, []);

  return (
    <View>
      <View style={reviewItemStyles.profileContainer}>
        <Image source={imageProfile} style={reviewItemStyles.image} />
        <View style={reviewItemStyles.rightNode}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {name}
          </LFText.Text>
          <LFRating.Star rating={rating} ratingType="Medium" />
        </View>
      </View>

      <View style={reviewItemStyles.reviewContainer}>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          {review}
        </LFText.Text>
      </View>

      {images && images.length > 0 && (
        <FlatList
          horizontal
          data={images}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={reviewItemStyles.imageList}
        />
      )}

      <View style={reviewItemStyles.date}>
        <LFText.Text typo="CaptionNormalRegular" color={NeutralColor.GreyColor}>
          {date}
        </LFText.Text>
      </View>
    </View>
  );
};

const reviewItemStyles = StyleSheet.create({
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

export default memo(LFReviewItem);
