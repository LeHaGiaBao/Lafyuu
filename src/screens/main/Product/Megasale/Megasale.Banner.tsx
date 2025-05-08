import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from '@assets/images';
import {LFCountDown, LFText} from '@components';
import {BackgroundColor} from '@constants';

const TIME = new Date(Date.now() + 12 * 60 * 60 * 1000);

function FlashsaleBanner() {
  return (
    <View style={styles.bannerItem}>
      <Image source={images.banner} style={styles.bannerImage} />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <LFText.Text typo="H2" color={BackgroundColor.WhiteColor}>
            Super Mega Sale 50% Off
          </LFText.Text>
        </View>
        <View style={styles.countdown}>
          <LFCountDown.Time endTime={TIME} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerItem: {
    margin: 16,
    position: 'relative',
    height: 220,
    borderRadius: 5,
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
    padding: 20,
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 20,
  },
  countdown: {
    marginBottom: 20,
  },
});

export default memo(FlashsaleBanner);
