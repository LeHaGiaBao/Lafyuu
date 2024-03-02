import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import HomeSaleItem from '../../../../components/ProductItem/HomeSaleItem';

const FlashSaleItem = [
    {
        id: 1,
        image: require('../../../../../assets/FlashSale/shoes.png'),
        title: 'FS - Nike Air Max 270 React...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
    {
        id: 2,
        image: require('../../../../../assets/FlashSale/bag.png'),
        title: 'FS - QUILTED MAXI CROS...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
    {
        id: 3,
        image: require('../../../../../assets/FlashSale/nike.png'),
        title: 'FS - Nike Air Max 270 React...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
]

function FlashSale() {
    return (
        <>
            <FlatList
                style={styles.scrollView}
                data={FlashSaleItem}
                renderItem={({ item }) => <HomeSaleItem key={item.id} image={item.image} title={item.title} price={item.price} discount={item.price} saleOff={item.saleOff} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        display: 'flex',
        gap: 16,
    },

})

export default FlashSale;