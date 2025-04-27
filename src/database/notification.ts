import images from '@assets/images';
import {NotificationType} from '@components';
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

export const NOTIFICATION_OFFER_ITEM = [
  {
    type: 'Offer' as NotificationType,
    title: 'The Best Title',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    type: 'Offer' as NotificationType,
    title: 'SUMMER OFFER 98% Cashback',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    type: 'Offer' as NotificationType,
    title: 'Special Offer 25% OFF',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
];

export const NOTIFICATION_FEED_ITEM = [
  {
    type: 'Feed' as NotificationType,
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2015 5:06 PM',
    image: images.shoes1,
  },
  {
    type: 'Feed' as NotificationType,
    title: 'Best Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2015 5:06 PM',
    image: images.shoes2,
  },
  {
    type: 'Feed' as NotificationType,
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2015 5:06 PM',
    image: images.shoes3,
  },
];

export const NOTIFICATION_ACTIVITY_ITEM = [
  {
    type: 'Activity' as NotificationType,
    title: 'Transaction Nike Air Zoom Product',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    type: 'Activity' as NotificationType,
    title: 'Transaction Nike Air Zoom Pegasus 36 Miami',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    type: 'Activity' as NotificationType,
    title: 'Transaction Nike Air Max',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
];
