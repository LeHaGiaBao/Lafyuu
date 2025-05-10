import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import {LFProductDetailBannerProps} from '@components';
import {Devices, NeutralColor, PrimaryColor} from '@constants';
import {PRODUCT_DETAIL_BANNER} from '@database';

const TIME = 5000;

function DetailBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const keyExtractor = useCallback(
    (item: LFProductDetailBannerProps) => item.id,
    [],
  );

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (currentIndex < PRODUCT_DETAIL_BANNER.length - 1) {
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

  const renderItem = useCallback(
    ({item}: {item: LFProductDetailBannerProps}) => {
      return (
        <View style={styles.bannerItem}>
          <Image source={item.image} style={styles.bannerImage} />
        </View>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={PRODUCT_DETAIL_BANNER}
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
        {PRODUCT_DETAIL_BANNER.map((_, index) => (
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
    position: 'relative',
  },
  bannerList: {
    borderRadius: 5,
  },
  bannerItem: {
    position: 'relative',
    height: 250,
    width: Devices.width,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    marginTop: 16,
    marginBottom: 12,
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

export default memo(DetailBanner);
