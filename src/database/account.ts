import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

export const GENDER = ['Male', 'Female', 'Other'];

export const ACCOUNT_LIST_ITEM = [
  {
    route: Routes.myProfile,
    name: translate('navigation:account_list:profile'),
    icon: 'user-b',
  },
  {
    route: Routes.myOrder,
    name: translate('navigation:account_list:order'),
    icon: 'bag-b',
  },
  {
    route: Routes.myAddress,
    name: translate('navigation:account_list:address'),
    icon: 'location-b',
  },
  {
    route: Routes.myPayment,
    name: translate('navigation:account_list:payment'),
    icon: 'card-b',
  },
];

export const MY_PROFILE_ITEM = [
  {
    route: Routes.myGender,
    name: translate('navigation:my_profile:gender'),
    icon: 'gender-b',
    rightContent: 'Male',
    navigationParam: 'Male',
  },
  {
    route: Routes.myBirthday,
    name: translate('navigation:my_profile:birthday'),
    icon: 'date-b',
    rightContent: '12-12-2000',
    navigationParam: '12-12-2000',
  },
  {
    route: Routes.myEmail,
    name: translate('navigation:my_profile:email'),
    icon: 'message-b',
    rightContent: 'Derlaxy@yahoo.com',
    navigationParam: 'Derlaxy@yahoo.com',
  },
  {
    route: Routes.myPhone,
    name: translate('navigation:my_profile:phone'),
    icon: 'phone-b',
    rightContent: '(307) 555-0133',
    navigationParam: '(307) 555-0133',
  },
  {
    route: Routes.myPassword,
    name: translate('navigation:my_profile:password'),
    icon: 'password-b',
    rightContent: '•••••••••••••••••',
    navigationParam: '•••••••••••••••••',
  },
];

export const MY_PAYMENT_ITEM = [
  {
    route: Routes.myCard,
    name: translate('navigation:my_payment:card'),
    icon: 'card-b',
  },
  {
    route: Routes.myPaypal,
    name: translate('navigation:my_payment:paypal'),
    icon: 'paypal',
  },
  {
    route: Routes.myBank,
    name: translate('navigation:my_payment:bank'),
    icon: 'bank-b',
  },
];
