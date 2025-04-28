import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFCardProps, LFIcon, LFText} from '@components';
import {BackgroundColor, PrimaryColor} from '@constants';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';
import {formatCardNumbers} from '@utils';

const LFCard = (props: LFCardProps) => {
  const {
    cardNumber,
    cardHolder,
    cardSave,
    backgroundColor = PrimaryColor.BlueColor,
    ...rest
  } = props;
  const nav = useLFNavigation();

  const handleEditCard = useCallback(() => {
    nav.navigate(Routes.editCard, {
      cardNumber: cardNumber,
      cardHolder: cardHolder,
      cardSave: cardSave,
      backgroundColor: backgroundColor,
    });
  }, [backgroundColor, cardNumber, cardHolder, cardSave, nav]);

  return (
    <TouchableOpacity
      style={[cardStyles.container, {backgroundColor: backgroundColor}]}
      onPress={handleEditCard}
      {...rest}>
      <View style={cardStyles.information}>
        <LFIcon.Icon icon="mastercard" size={24} />
        <LFText.Text typo="H2" color={BackgroundColor.WhiteColor}>
          {formatCardNumbers(cardNumber)}
        </LFText.Text>
        <View style={cardStyles.rowInfor}>
          <View style={cardStyles.rowItem}>
            <LFText.Text
              typo="CaptionNormalRegular"
              color={BackgroundColor.WhiteColor}>
              {translate('resources:card_holder')}
            </LFText.Text>

            <LFText.Text
              typo="CaptionNormalBold"
              color={BackgroundColor.WhiteColor}>
              {cardHolder}
            </LFText.Text>
          </View>

          <View style={cardStyles.rowItem}>
            <LFText.Text
              typo="CaptionNormalRegular"
              color={BackgroundColor.WhiteColor}>
              {translate('resources:card_save')}
            </LFText.Text>

            <LFText.Text
              typo="CaptionNormalBold"
              color={BackgroundColor.WhiteColor}>
              {cardSave}
            </LFText.Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 190,
    borderRadius: 5,
    padding: 32,
  },
  information: {
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
  },
  rowInfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 32,
  },
  rowItem: {
    display: 'flex',
    gap: 8,
  },
});

export default memo(LFCard);
