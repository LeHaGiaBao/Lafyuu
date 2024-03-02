import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ProductItem from '../../../../components/ProductItem/HomeProductItem/ProductItem';

const FlashSaleItem = [
    {
        key: 1,
        image: require('../../../../../assets/FlashSale/shoes.png'),
        title: 'FS - Nike Air Max 270 React...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
    {
        key: 2,
        image: require('../../../../../assets/FlashSale/bag.png'),
        title: 'FS - QUILTED MAXI CROS...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
    {
        key: 3,
        image: require('../../../../../assets/FlashSale/nike.png'),
        title: 'FS - QUILTED MAXI CROS...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
    {
        key: 4,
        image: require('../../../../../assets/FlashSale/product7.png'),
        title: 'FS - QUILTED MAXI CROS...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
]

function ProductList() {
    return (
        <FlatList
            style={styles.container}
            data={FlashSaleItem}
            renderItem={({ item }) => <ProductItem key={item.key} image={item.image} title={item.title} price={item.price} discount={item.price} saleOff={item.saleOff} />}
            keyExtractor={(item) => item.key.toString()}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        marginLeft: 8,
        marginRight: 8,
    },
})

export default ProductList;