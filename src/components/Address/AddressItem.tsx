import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFAddressItemProps, LFButton, LFIcon, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

const LFAddressItem = (props: LFAddressItemProps) => {
  const {name, address, phone, isChoose, onPress, ...rest} = props;
  const nav = useLFNavigation();

  const handleEdit = useCallback(() => {
    nav.navigate(Routes.editAddress);
  }, [nav]);

  const handleDelete = useCallback(() => {
    nav.navigate(Routes.deleteConfirm);
  }, [nav]);

  const handleChoose = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  return (
    <TouchableOpacity
      style={[
        addressItemStyles.container,
        {
          borderColor: isChoose
            ? PrimaryColor.BlueColor
            : NeutralColor.LightColor,
        },
      ]}
      onPress={handleChoose}
      {...rest}>
      <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
        {name}
      </LFText.Text>

      <LFText.Text
        typo="BodyNormalRegular"
        color={NeutralColor.GreyColor}
        numberOfLines={2}>
        {address}
      </LFText.Text>

      <LFText.Text
        typo="BodyNormalRegular"
        color={NeutralColor.GreyColor}
        numberOfLines={1}>
        {phone}
      </LFText.Text>

      <View style={addressItemStyles.buttonContainer}>
        <View style={addressItemStyles.editButton}>
          <LFButton.Button
            onPress={handleEdit}
            title={translate('resources:edit')}
            type="Primary"
            size="Large"
          />
        </View>

        <TouchableOpacity onPress={handleDelete}>
          <LFIcon.Icon icon="trash" size={24} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const addressItemStyles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  editButton: {
    width: '25%',
  },
});

export default memo(LFAddressItem);
