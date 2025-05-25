import React, {memo, useCallback, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LFButton, LFForm, LFNavigation, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {
  FILTER_BUYING_FORMAT_LIST,
  FILTER_CONDITION_LIST,
  FILTER_ITEM_LOCATION_LIST,
  FILTER_SHOW_ONLY_LIST,
} from '@database';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';

interface InputProps {
  min: string;
  max: string;
}

function SearchFilter() {
  const nav = useLFNavigation();
  const [selectedItems, setSelectedItems] = useState<{[key: string]: boolean}>(
    {},
  );

  const {control, handleSubmit} = useForm<InputProps>({
    mode: 'onChange',
  });

  const handleApply = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const toggleItem = useCallback((listType: string, id: number) => {
    const uniqueKey = `${listType}_${id}`;
    setSelectedItems(prev => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey],
    }));
  }, []);

  const renderFilterItems = useCallback(
    (items: any[], listType: string) => {
      return (
        <View style={styles.filterItemsContainer}>
          {items.map(item => {
            const uniqueKey = `${listType}_${item.id}`;

            return (
              <LFButton.ButtonCheck
                key={uniqueKey}
                id={item.id}
                title={item.text}
                icon={item.icon}
                isActive={selectedItems[uniqueKey]}
                onPress={() => toggleItem(listType, item.id)}
              />
            );
          })}
        </View>
      );
    },
    [selectedItems, toggleItem],
  );

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.filterContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <LFNavigation.HeaderCanGoBack
          name={translate('navigation:filter_search')}
          icon="x"
        />
        <View style={styles.form}>
          <View style={styles.formTitle}>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:price_range')}
            </LFText.Text>
          </View>

          <View style={styles.flexForm}>
            <View style={styles.flexFormItem}>
              <Controller
                control={control}
                name="min"
                render={({field: {onChange, value, onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    placeholder={translate('resources:min')}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>

            <View style={styles.flexFormItem}>
              <Controller
                control={control}
                name="max"
                render={({field: {onChange, value, onBlur}}) => (
                  <LFForm.Input
                    value={value}
                    type="Text"
                    placeholder={translate('resources:max')}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.formTitle}>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:condition')}
            </LFText.Text>
          </View>

          {renderFilterItems(FILTER_CONDITION_LIST, 'condition')}

          <View style={styles.formTitle}>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:buying_format')}
            </LFText.Text>
          </View>

          {renderFilterItems(FILTER_BUYING_FORMAT_LIST, 'buying_format')}

          <View style={styles.formTitle}>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:item_location')}
            </LFText.Text>
          </View>

          {renderFilterItems(FILTER_ITEM_LOCATION_LIST, 'item_location')}

          <View style={styles.formTitle}>
            <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
              {translate('resources:show_only')}
            </LFText.Text>
          </View>

          {renderFilterItems(FILTER_SHOW_ONLY_LIST, 'show_only')}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleApply)}
          title={translate('resources:apply')}
          type="Primary"
          size="Large"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  contentContainerStyle: {
    paddingBottom: 120,
  },
  form: {
    display: 'flex',
    gap: 12,
  },
  flexForm: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexFormItem: {
    flex: 0.5,
    paddingHorizontal: 16,
    gap: 12,
  },
  formTitle: {
    padding: 16,
  },
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: Devices.bottomButton,
  },
  filterItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
  },
});

export default memo(SearchFilter);
