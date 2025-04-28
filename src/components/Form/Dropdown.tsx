import React, {memo, useCallback, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFDropdownProps, LFIcon, LFText} from '@components';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';

const LFDropdown = (props: LFDropdownProps) => {
  const {chooseData, dropdownData, ...rest} = props;
  const [selectedData, setSelectedData] = useState(chooseData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);

  const handleSelectData = useCallback((gender: any) => {
    setSelectedData(gender);
    setIsDropdownOpen(false);
  }, []);

  const keyExtractor = useCallback((item: any) => item, []);

  const renderDropdownItem = useCallback(
    ({item}: {item: any}) => {
      return (
        <TouchableOpacity
          style={[dropdownStyles.dropdownItem]}
          onPress={() => handleSelectData(item)}>
          <LFText.Text
            typo={selectedData === item ? 'FormFill' : 'FormNormal'}
            color={
              selectedData === item
                ? PrimaryColor.BlueColor
                : NeutralColor.GreyColor
            }>
            {item}
          </LFText.Text>
        </TouchableOpacity>
      );
    },
    [handleSelectData, selectedData],
  );

  return (
    <>
      <TouchableOpacity
        style={[
          dropdownStyles.dropdown,
          {
            borderColor: isDropdownOpen
              ? PrimaryColor.BlueColor
              : NeutralColor.LightColor,
          },
        ]}
        onPress={toggleDropdown}
        {...rest}>
        <LFText.Text typo="FormFill" color={NeutralColor.GreyColor}>
          {selectedData}
        </LFText.Text>
        <LFIcon.Icon icon="down" size={24} />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={dropdownStyles.dropdownContainer}>
          <FlatList
            data={dropdownData}
            renderItem={renderDropdownItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

const dropdownStyles = StyleSheet.create({
  dropdown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  dropdownContainer: {
    marginTop: 2,
    borderRadius: 5,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: NeutralColor.LightColor,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  dropdownItem: {
    padding: 16,
    paddingVertical: 12,
  },
});
export default memo(LFDropdown);
