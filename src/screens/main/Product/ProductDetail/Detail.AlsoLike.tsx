import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LFProductCard, LFProductCardProps, LFText} from '@components';
import {NeutralColor} from '@constants';
import {PRODUCT_DETAIL_ALSO_LIKE} from '@database';
import translate from '@translations/i18n';

function DetailAlsoLike() {
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
          {translate('resources:you_might_also_like')}
        </LFText.Text>
      </View>

      <FlatList
        horizontal
        data={PRODUCT_DETAIL_ALSO_LIKE}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  productList: {
    paddingHorizontal: 16,
    display: 'flex',
    gap: 16,
  },
});

export default memo(DetailAlsoLike);
