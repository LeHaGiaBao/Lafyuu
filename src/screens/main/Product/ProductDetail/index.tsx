import React, {memo, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFIcon, LFNavigation} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {useLFNavigationParams} from '@hooks';
import DetailBanner from './Detail.Banner';
import DetailName from './Detail.Name';
import DetailSize from './Detail.Size';
import DetailColor from './Detail.Color';

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
});

export default memo(ProductDetail);
