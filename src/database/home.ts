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
    id: '0',
    name: 'Man Shirt',
    icon: 'shirt-b',
  },
  {
    id: '1',
    name: 'Dress',
    icon: 'dress-b',
  },
  {
    id: '2',
    name: 'Man Work Equipment',
    icon: 'bag-b',
  },
  {
    id: '3',
    name: 'Woman Bag',
    icon: 'woman-bag-b',
  },
  {
    id: '4',
    name: 'Man Shoes',
    icon: 'man-shoes-b',
  },
  {
    id: '5',
    name: 'High Heels',
    icon: 'woman-shoes-b',
  },
];

export const FLASH_SALE = [
  {
    id: '0',
    image: images.flash1,
    name: 'FS - Nike Air Max 270 React...',
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '1',
    image: images.flash2,
    name: 'FS - QUILTED MAXI CROS...',
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '2',
    image: images.flash3,
    name: 'FS - Nike Air Max 270 React...',
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
];

export const MEGA_SALE = [
  {
    id: '0',
    image: images.mega1,
    name: 'MS - Nike Air Max 270 React...',
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '1',
    image: images.mega2,
    name: 'MS - Nike Air Max 270 React...',
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '2',
    image: images.mega3,
    name: 'MS - Nike Air Max 270 React...',
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
];

export const HOME_DATA = [
  {
    id: '0',
    image: images.home1,
    name: 'Nike Air Max 270 React ENG',
    rating: 5,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '1',
    image: images.home2,
    name: 'Nike Air Max 270 React ENG',
    rating: 5,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '2',
    image: images.home3,
    name: 'Nike Air Max 270 React ENG',
    rating: 4,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '3',
    image: images.home4,
    name: 'Nike Air Max 270 React ENG',
    rating: 4,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '4',
    image: images.home1,
    name: 'Nike Air Max 270 React ENG',
    rating: 5,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '5',
    image: images.home2,
    name: 'Nike Air Max 270 React ENG',
    rating: 5,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '6',
    image: images.home3,
    name: 'Nike Air Max 270 React ENG',
    rating: 4,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
  {
    id: '7',
    image: images.home4,
    name: 'Nike Air Max 270 React ENG',
    rating: 4,
    price: 299.43,
    discountPrice: 534.33,
    percentage: 24,
  },
];
