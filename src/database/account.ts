import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

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
