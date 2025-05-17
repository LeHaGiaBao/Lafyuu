import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  generateRatingStarSize,
  LFIcon,
  LFRatingProps,
  LFText,
} from '@components';
import {NeutralColor} from '@constants';

const MAX_RATING = 5;

const LFStar = (props: LFRatingProps) => {
  const {rating = 0, ratingType, canChange, ...rest} = props;
  const [star, setStar] = useState(rating);

  const {size, gap} = generateRatingStarSize(ratingType);

  const handleRating = useCallback((index: number) => {
    setStar(index + 1);
  }, []);

  return (
    <View style={[starStyles.container, {gap: gap}]} {...rest}>
      {Array.from({length: MAX_RATING}, (_, index) =>
        canChange ? (
          <TouchableOpacity key={index} onPress={() => handleRating(index)}>
            <LFIcon.Icon icon={index < star ? 'star-b' : 'star'} size={size} />
          </TouchableOpacity>
        ) : (
          <View key={index}>
            <LFIcon.Icon icon={index < star ? 'star-b' : 'star'} size={size} />
          </View>
        ),
      )}
      <LFText.Text typo="H5" color={NeutralColor.GreyColor}>
        {rating + '/5'}
      </LFText.Text>
    </View>
  );
};

const starStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default memo(LFStar);
