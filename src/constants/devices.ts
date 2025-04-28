import {
  Appearance,
  AppState,
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default class Devices {
  static IS_IOS = Platform.OS === 'ios';
  static IS_ANDROID = Platform.OS === 'android';
  static IS_IPHONE_HAS_NOTCH = DeviceInfo.hasNotch();

  static lightMode = Appearance.getColorScheme() === 'light';
  static darkMode = Appearance.getColorScheme() === 'dark';

  static active = AppState.currentState === 'active';
  static background = AppState.currentState === 'background';
  static inActive = AppState.currentState === 'inactive';

  static width = Dimensions.get('window').width;
  static height = Dimensions.get('window').height;

  static ratio = PixelRatio.get();

  static headerTop = this.IS_IPHONE_HAS_NOTCH ? 77 : 35;

  static bottomButton = this.IS_IPHONE_HAS_NOTCH ? 35 : 10;
}
