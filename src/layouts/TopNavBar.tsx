import {Icon, Typography} from '@/components';
import {NeutralColor} from '@/constants';
import {useNavigator} from '@/hooks/core';
import {Routes} from '@/routes/routes';
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface TopNavBarProps {
  title: string;
  showSearchIcon: boolean;
}

function TopNavBar(props: TopNavBarProps) {
  const nav = useNavigator();

  const goBack = () => {
    nav.goBack();
  };

  const goToSearch = () => {
    nav.navigate(Routes.exploreScreen);
  };

  return (
    <View style={styles.navContainer}>
      <View style={styles.navContent}>
        <TouchableOpacity onPress={goBack}>
          <Icon icon={'left'} size={24} color={NeutralColor.GreyColor} />
        </TouchableOpacity>
        <Typography
          text={props.title}
          type="Heading"
          size="H4"
          color="Dark"
          fontFamily="Bold"
        />
      </View>
      {props.showSearchIcon && (
        <TouchableOpacity onPress={goToSearch}>
          <Icon icon={'search'} size={24} color={NeutralColor.GreyColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    marginTop: 70,
    borderBottomWidth: 1,
    borderBottomColor: NeutralColor.LightColor,
    paddingHorizontal: 16,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default memo(TopNavBar);
