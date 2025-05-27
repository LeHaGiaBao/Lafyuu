import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LFCategoryItemProps, LFIcon, LFText} from '@components';
import {NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';

const LFCategoryItem = (props: LFCategoryItemProps) => {
  const {name, icon} = props;
  const nav = useLFNavigation();

  const handleNavigateCategory = useCallback(() => {
    nav.navigate(Routes.appScreen, {
      categoryName: name,
    });
  }, [nav, name]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateCategory}>
      <View style={styles.item}>
        <LFIcon.Icon icon={icon} size={24} />
      </View>
      <LFText.Text
        typo="CaptionNormalRegular"
        color={NeutralColor.GreyColor}
        numberOfLines={2}
        textAlign="center">
        {name}
      </LFText.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    width: 70,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
    borderRadius: 100,
    width: 70,
    height: 70,
  },
});

export default memo(LFCategoryItem);
