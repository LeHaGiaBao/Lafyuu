import {Routes} from '@routes/routes';
import translate from '@translations/i18n';

export const NOTIFICATION_LIST_ITEM = [
  {
    route: Routes.notificationOffer,
    name: translate('navigation:notification_list:offer'),
    icon: 'offer-b',
    numOfNotification: 2,
  },
  {
    route: Routes.notificationFeed,
    name: translate('navigation:notification_list:feed'),
    icon: 'list-b',
    numOfNotification: 3,
  },
  {
    route: Routes.notificationActivity,
    name: translate('navigation:notification_list:activity'),
    icon: 'notification-b',
    numOfNotification: 3,
  },
];
