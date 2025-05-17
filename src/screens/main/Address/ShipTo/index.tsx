import React, {memo, useCallback, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  LFAddress,
  LFAddressItemProps,
  LFButton,
  LFIcon,
  LFNavigation,
} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {MY_ADDRESS_LIST} from '@database';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';

function ShipTo() {
  const nav = useLFNavigation();
  const [choosedAddress, setChoosedAddress] = useState(null);

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const keyExtractor = useCallback(
    (item: LFAddressItemProps) => item.id.toString(),
    [],
  );

  const handleChooseAddress = useCallback((id: any) => {
    setChoosedAddress(id);
  }, []);

  const renderItem = useCallback(
    ({item}: {item: LFAddressItemProps}) => {
      const {id, name, address, phone, ...rest} = item;

      const isChoose = choosedAddress === id;

      return (
        <View style={styles.item}>
          <LFAddress.AddressItem
            id={id}
            name={name}
            address={address}
            phone={phone}
            isChoose={isChoose}
            onPress={() => handleChooseAddress(id)}
            {...rest}
          />
        </View>
      );
    },
    [choosedAddress, handleChooseAddress],
  );

  return (
    <View style={styles.shipToContainer}>
      <FlatList
        data={MY_ADDRESS_LIST}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
        ListHeaderComponent={
          <>
            <LFNavigation.HeaderCanGoBack
              name={translate('navigation:ship_to')}
              rightNode={
                <TouchableOpacity>
                  <LFIcon.Icon icon="plus" size={24} />
                </TouchableOpacity>
              }
            />
          </>
        }
      />
      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSave}
          title={translate('resources:next')}
          type="Primary"
          size="Large"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shipToContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  containerList: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  item: {
    marginTop: 16,
  },
  form: {
    display: 'flex',
    padding: 16,
    gap: 12,
  },
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: Devices.bottomButton,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
});

export default memo(ShipTo);
