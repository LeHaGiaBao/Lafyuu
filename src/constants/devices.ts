import {
  Appearance,
  AppState,
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native';

export default class Devices {
  static IS_IOS = Platform.OS === 'ios';
  static IS_ANDROID = Platform.OS === 'android';

  static lightMode = Appearance.getColorScheme() === 'light';
  static darkMode = Appearance.getColorScheme() === 'dark';

  static active = AppState.currentState === 'active';
  static background = AppState.currentState === 'background';
  static inActive = AppState.currentState === 'inactive';

  static width = Dimensions.get('window').width;
  static height = Dimensions.get('window').height;

  static ratio = PixelRatio.get();
}
