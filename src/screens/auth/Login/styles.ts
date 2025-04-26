import {StyleSheet} from 'react-native';
import {BackgroundColor, NeutralColor, PrimaryColor} from '@constants';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor.WhiteColor,
  },
  logoContainer: {
    height: 72,
    width: 72,
    borderRadius: 16,
    backgroundColor: PrimaryColor.BlueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    marginTop: 28,
    display: 'flex',
    gap: 8,
    marginHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  orContainer: {
    marginTop: 21,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 28,
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: NeutralColor.LightColor,
  },
  createAccount: {
    display: 'flex',
    flexDirection: 'row',
  },
});
