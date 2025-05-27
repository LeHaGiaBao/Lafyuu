import images from '@assets/images';

export const CART_PRODUCT_LIST = [
  {
    id: '0',
    image: images.flash1,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: 299.43,
    isFavorite: true,
    numOfProduct: 1,
    type: 'Cart' as const,
  },
  {
    id: '1',
    image: images.flash3,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: 299.43,
    isFavorite: false,
    numOfProduct: 1,
    type: 'Cart' as const,
  },
];
