import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from '@assets/images';
import {LFText} from '@components';
import {BackgroundColor, Devices} from '@constants';

function HomeRecommend() {
  return (
    <View style={styles.container}>
      <Image source={images.recommend} style={styles.bannerImage} />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <LFText.Text
            typo="H2"
            color={BackgroundColor.WhiteColor}
            numberOfLines={2}>
            Recomended Product
          </LFText.Text>
          <LFText.Text
            typo="BodyNormalRegular"
            color={BackgroundColor.WhiteColor}>
            We recommend the best for you
          </LFText.Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 200,
    width: Devices.width - 32,
    marginHorizontal: 16,
    marginBottom: 16,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
  },
});

export default memo(HomeRecommend);
