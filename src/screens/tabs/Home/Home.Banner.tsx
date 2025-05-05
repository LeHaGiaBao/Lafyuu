import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import {BackgroundColor, Devices, NeutralColor, PrimaryColor} from '@constants';
import {BannerItem, LFCountDown, LFText} from '@components';
import {BANNER_DATA} from '@database';

const TIME = 5000;

function HomeBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const keyExtractor = useCallback((item: BannerItem) => item.id, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (currentIndex < BANNER_DATA.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: currentIndex + 1,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      }
    }, TIME);

    return () => clearInterval(scrollInterval);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = useCallback(({item}: {item: BannerItem}) => {
    return (
      <View style={styles.bannerItem}>
        <Image source={item.image} style={styles.bannerImage} />

        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <LFText.Text typo="H2" color={BackgroundColor.WhiteColor}>
              {item.title}
            </LFText.Text>
            <LFText.Text typo="H3" color={BackgroundColor.WhiteColor}>
              {item.subtitle}
            </LFText.Text>
          </View>
          <View style={styles.countdown}>
            <LFCountDown.Time endTime={item.endTime} />
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={BANNER_DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        style={styles.bannerList}
      />
      <View style={styles.pagination}>
        {BANNER_DATA.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor:
                  index === currentIndex
                    ? PrimaryColor.BlueColor
                    : NeutralColor.LightColor,
              },
            ]}
            onPress={() => {
              flatListRef.current?.scrollToIndex({
                index,
                animated: true,
              });
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
    position: 'relative',
  },
  bannerList: {
    borderRadius: 5,
  },
  bannerItem: {
    position: 'relative',
    height: 220,
    width: Devices.width,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
    padding: 20,
  },
  textContainer: {
    marginTop: 20,
  },
  countdown: {
    marginBottom: 20,
  },
  pagination: {
    marginVertical: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
  },
});

export default memo(HomeBanner);
