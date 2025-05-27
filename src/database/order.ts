import images from '@assets/images';
import translate from '@translations/i18n';

export const MY_ORDER_LIST = [
  {
    id: '0',
    orderCode: 'LQNSU346JK',
    date: 'August 1, 2017',
    status: 'Shipping',
    numberOfItems: 2,
    totalPrice: 299.43,
  },
  {
    id: '1',
    orderCode: 'SDG1345KJD',
    date: 'August 1, 2017',
    status: 'Shipping',
    numberOfItems: 1,
    totalPrice: 299.43,
  },
];

export const ORDER_DETAIL_PRODUCT_LIST = [
  {
    id: '0',
    image: images.flash1,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: 299.43,
    isFavorite: true,
    numOfProduct: 1,
    type: 'Order' as const,
  },
  {
    id: '1',
    image: images.flash3,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: 299.43,
    isFavorite: false,
    numOfProduct: 1,
    type: 'Order' as const,
  },
];

export const MY_ORDER_PROCESS_STEPS = [
  {
    id: '0',
    label: translate('resources:order_process_status:packing'),
    completed: true,
  },
  {
    id: '1',
    label: translate('resources:order_process_status:shipping'),
    completed: true,
  },
  {
    id: '2',
    label: translate('resources:order_process_status:arriving'),
    completed: true,
  },
  {
    id: '3',
    label: translate('resources:order_process_status:success'),
    completed: false,
  },
];
