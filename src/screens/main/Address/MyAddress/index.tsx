import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  LFAddress,
  LFAddressItemProps,
  LFButton,
  LFNavigation,
} from '@components';
import {BackgroundColor, Devices} from '@constants';
import {MY_ADDRESS_LIST} from '@database';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';

function MyAddress() {
  const nav = useLFNavigation();

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const keyExtractor = useCallback(
    (item: LFAddressItemProps) => item.id.toString(),
    [],
  );

  const renderItem = useCallback(({item}: {item: LFAddressItemProps}) => {
    const {id, name, address, phone, canChoose, ...rest} = item;

    return (
      <LFAddress.AddressItem
        id={id}
        name={name}
        address={address}
        phone={phone}
        canChoose={canChoose}
        isChoose={false}
        {...rest}
      />
    );
  }, []);

  return (
    <View style={styles.myAddressContainer}>
      <FlatList
        data={MY_ADDRESS_LIST}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
        ListHeaderComponent={
          <>
            <LFNavigation.HeaderCanGoBack
              name={translate('navigation:address')}
            />
          </>
        }
      />
      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSave}
          title={translate('resources:add_address')}
          type="Primary"
          size="Large"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myAddressContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  containerList: {
    paddingTop: Devices.headerTop,
    backgroundColor: BackgroundColor.WhiteColor,
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

export default memo(MyAddress);
