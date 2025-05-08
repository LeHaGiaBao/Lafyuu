import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFProductCard, LFProductCardProps, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import {FLASH_SALE} from '@database';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

function HomeFlashsale() {
  const nav = useLFNavigation();

  const goToFlashsale = useCallback(() => {
    nav.navigate(Routes.flashsale);
  }, [nav]);

  const keyExtractor = useCallback(
    (item: LFProductCardProps) => item.id.toString(),
    [],
  );

  const renderItem = useCallback(({item}: {item: LFProductCardProps}) => {
    const {id, image, name, price, discountPrice, percentage} = item;

    return (
      <LFProductCard.SmallCard
        id={id}
        image={image}
        name={name}
        price={price}
        discountPrice={discountPrice}
        percentage={percentage}
      />
    );
  }, []);

  return (
    <>
      <View style={styles.header}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {translate('resources:flash_sale')}
        </LFText.Text>

        <LFText.Text
          typo="H4"
          color={PrimaryColor.BlueColor}
          onPress={goToFlashsale}>
          {translate('resources:see_more')}
        </LFText.Text>
      </View>

      <FlatList
        horizontal
        data={FLASH_SALE}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryList: {
    marginBottom: 16,
    paddingHorizontal: 16,
    display: 'flex',
    gap: 16,
  },
});

export default memo(HomeFlashsale);
