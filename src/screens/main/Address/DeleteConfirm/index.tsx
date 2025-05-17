import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFButton, LFIcon, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';

function DeleteConfirm() {
  const nav = useLFNavigation();

  const confirmDelete = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const cancelDelete = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.deleteConfirmContainer}>
      <LFIcon.Icon icon="alert" size={150} />

      <LFText.Text typo="H2" color={NeutralColor.DarkColor}>
        {translate('resources:confirmation')}
      </LFText.Text>

      <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
        {translate('resources:confirm_description')}
      </LFText.Text>

      <LFButton.Button
        onPress={confirmDelete}
        title={translate('resources:delete')}
        type="Primary"
        size="Large"
      />

      <LFButton.Button
        onPress={cancelDelete}
        title={translate('resources:cancel')}
        type="Secondary"
        size="Large"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteConfirmContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor.WhiteColor,
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default memo(DeleteConfirm);
