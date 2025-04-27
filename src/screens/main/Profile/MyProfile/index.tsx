import React, {memo, useCallback, useMemo, useRef} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '@assets/images';
import {LFIcon, LFNavigation, LFNavigationItemProps, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';
import {MY_PROFILE_ITEM} from '@database';
import {useLFNavigation} from '@hooks';
import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

function MyProfile() {
  const nav = useLFNavigation();
  const firstName = useRef('Maximus');
  const lastName = useRef('Gold');
  const userName = useRef('@derlaxy');

  const keyExtractor = useCallback(
    (item: LFNavigationItemProps) => item.route,
    [],
  );

  const goToMyName = useCallback(() => {
    nav.navigate(Routes.myName, {
      firstName: firstName.current,
      lastName: lastName.current,
    });
  }, [nav]);

  const renderName = useMemo(() => {
    return (
      <TouchableOpacity style={styles.nameContainer} onPress={goToMyName}>
        <Image source={images.profile} style={styles.image} />
        <View>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {firstName.current + ' ' + lastName.current}
          </LFText.Text>
          <LFText.Text typo="BodyNormalRegular" color={NeutralColor.GreyColor}>
            {userName.current}
          </LFText.Text>
        </View>
      </TouchableOpacity>
    );
  }, [goToMyName]);

  const renderItem = useCallback(({item}: {item: LFNavigationItemProps}) => {
    const {route, name, icon, rightContent, ...rest} = item;

    return (
      <LFNavigation.NavigationItem
        route={route}
        name={name}
        icon={icon}
        rightNode={
          <TouchableOpacity style={styles.rightNode}>
            <LFText.Text typo="FormNormal" color={NeutralColor.GreyColor}>
              {rightContent}
            </LFText.Text>
            <LFIcon.Icon icon="Right" size={24} />
          </TouchableOpacity>
        }
        {...rest}
      />
    );
  }, []);

  return (
    <FlatList
      data={MY_PROFILE_ITEM}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.myProfileContainer}
      ListHeaderComponent={
        <>
          <LFNavigation.HeaderCanGoBack
            name={translate('navigation:account_list:profile')}
          />
          {renderName}
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  myProfileContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: 77,
  },
  rightNode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 100,
    backgroundColor: NeutralColor.LightColor,
  },
});

export default memo(MyProfile);
