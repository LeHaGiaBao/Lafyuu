import images from '@assets/images';
import {BannerItem} from '@components';

export const BANNER_DATA: BannerItem[] = [
  {
    id: '1',
    title: 'Super Flash Sale',
    subtitle: '50% Off',
    image: images.banner,
    endTime: new Date(
      Date.now() + 8 * 60 * 60 * 1000 + 34 * 60 * 1000 + 52 * 1000,
    ), // 8h 34m 52s from now
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Summer Collection',
    image: images.banner,
    endTime: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12h from now
  },
  {
    id: '3',
    title: 'Limited Offer',
    subtitle: 'Buy 1 Get 1 Free',
    image: images.banner,
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h from now
  },
  {
    id: '4',
    title: 'Exclusive Deal',
    subtitle: 'Free Shipping',
    image: images.banner,
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48h from now
  },
  {
    id: '5',
    title: 'Weekend Special',
    subtitle: '30% Off',
    image: images.banner,
    endTime: new Date(Date.now() + 72 * 60 * 60 * 1000), // 72h from now
  },
];

export const CATEGORY_DATA = [
  {
    id: 0,
    name: 'Man Shirt',
    icon: 'shirt-b',
  },
  {
    id: 1,
    name: 'Dress',
    icon: 'dress-b',
  },
  {
    id: 2,
    name: 'Man Work Equipment',
    icon: 'bag-b',
  },
  {
    id: 3,
    name: 'Woman Bag',
    icon: 'woman-bag-b',
  },
  {
    id: 4,
    name: 'Man Shoes',
    icon: 'man-shoes-b',
  },
  {
    id: 5,
    name: 'High Heels',
    icon: 'woman-shoes-b',
  },
];
