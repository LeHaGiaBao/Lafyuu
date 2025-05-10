import React, {memo, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFButton, LFIcon, LFNavigation} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {useLFNavigationParams} from '@hooks';
import translate from '@translations/i18n';
import DetailBanner from './Detail.Banner';
import DetailName from './Detail.Name';
import DetailSize from './Detail.Size';
import DetailColor from './Detail.Color';
import DetailSpecification from './Detail.Specification';
import DetailAlsoLike from './Detail.AlsoLike';

function ProductDetail() {
  const params =
    (useLFNavigationParams() as {
      name?: string;
    }) || {};
  const name = params?.name ?? '';

  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);

  const headerRightNode = useMemo(() => {
    return (
      <View style={styles.rightNode}>
        <TouchableOpacity>
          <LFIcon.Icon icon="search" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <LFIcon.Icon icon="more" size={24} />
        </TouchableOpacity>
      </View>
    );
  }, []);

  return (
    <ScrollView
      style={styles.productDetailContainer}
      showsVerticalScrollIndicator={false}>
      <LFNavigation.HeaderCanGoBack name={name} rightNode={headerRightNode} />
      <DetailBanner />
      <DetailName name={name} />
      <DetailSize selectedSize={size} onSizeChange={setSize} />
      <DetailColor selectedColor={color} onColorChange={setColor} />
      <DetailSpecification />
      <DetailAlsoLike />
      <View style={styles.buttonContainer}>
        <LFButton.Button
          title={translate('resources:add_to_cart')}
          type="Primary"
          size="Large"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productDetailContainer: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  rightNode: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  buttonContainer: {
    margin: 16,
    marginBottom: Devices.bottomButton + 16,
  },
});

export default memo(ProductDetail);
