import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFAddressItemProps, LFButton, LFIcon, LFText} from '@components';
import {NeutralColor, PrimaryColor} from '@constants';
import translate from '@translations/i18n';

const LFAddressItem = (props: LFAddressItemProps) => {
  const {name, address, phone, canChoose = false, isChoose, ...rest} = props;
  const [isChoosen, setIsChoosen] = useState(isChoose);

  const handleChoose = useCallback(() => {
    if (canChoose) {
      setIsChoosen(prev => !prev);
    }
  }, [canChoose]);

  return (
    <TouchableOpacity
      style={[
        addressItemStyles.container,
        {
          borderColor: isChoosen
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
            onPress={() => {}}
            title={translate('resources:edit')}
            type="Primary"
            size="Large"
          />
        </View>

        <TouchableOpacity>
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
    margin: 16,
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
