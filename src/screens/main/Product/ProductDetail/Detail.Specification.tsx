import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFText} from '@components';
import {NeutralColor} from '@constants';
import translate from '@translations/i18n';

function DetailSpecification() {
  return (
    <>
      <View style={styles.header}>
        <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
          {translate('resources:specification')}
        </LFText.Text>
      </View>

      <View style={styles.list}>
        <View style={styles.item}>
          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.DarkColor}>
            {translate('resources:shown')}
          </LFText.Text>

          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
            Laser Blue/Anthracite/Watermelon/White
          </LFText.Text>
        </View>

        <View style={styles.item}>
          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.DarkColor}>
            {translate('resources:style')}
          </LFText.Text>

          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
            CD0113-400
          </LFText.Text>
        </View>
      </View>

      <View style={styles.description}>
        <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
          The Nike Air Max 270 React ENG combines a full-length React foam
          midsole with a 270 Max Air unit for unrivaled comfort and a striking
          visual experience.
        </LFText.Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    marginHorizontal: 16,
    display: 'flex',
  },
  list: {
    marginTop: 12,
    marginHorizontal: 16,
    display: 'flex',
    gap: 8,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginHorizontal: 16,
    marginTop: 12,
  },
});

export default memo(DetailSpecification);
