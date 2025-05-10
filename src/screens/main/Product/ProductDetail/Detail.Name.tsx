import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFIcon, LFRating, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import {formatCurrencyUSD} from '@utils';

interface DetailNameProps {
  name: string;
}

function DetailName(props: DetailNameProps) {
  const {name} = props;

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.leftNode}>
          <LFText.Text
            typo="H3"
            color={NeutralColor.DarkColor}
            numberOfLines={2}>
            {name}
          </LFText.Text>
        </View>
        <TouchableOpacity style={styles.rightNode}>
          <LFIcon.Icon icon={'love'} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.ratingContainer}>
        <LFRating.Star rating={4} ratingType="Medium" />
      </View>

      <LFText.Text typo="H3" color={PrimaryColor.BlueColor} numberOfLines={2}>
        {formatCurrencyUSD(299.43)}
      </LFText.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 16,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftNode: {
    flex: 0.85,
    alignItems: 'flex-start',
  },
  rightNode: {
    flex: 0.15,
    alignItems: 'flex-end',
  },
  ratingContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
});

export default memo(DetailName);
