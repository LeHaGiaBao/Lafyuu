import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeSaleItem from '../../../../components/ProductItem/HomeSaleItem';

const MegaSaleItem = [
    {
        id: 1,
        image: require('../../../../../assets/FlashSale/product1.png'),
        title: 'MS - Nike Air Max 270 React...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
    {
        id: 2,
        image: require('../../../../../assets/FlashSale/product2.png'),
        title: 'MS - Nike Air Max 270 React...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
    {
        id: 3,
        image: require('../../../../../assets/FlashSale/product3.png'),
        title: 'MS - Nike Air Max 270 React...',
        price: '299,43',
        discount: '534,33',
        saleOff: '24',
    },
]

function MegaSale() {
    return (
        <FlatList
            style={styles.scrollView}
            data={MegaSaleItem}
            renderItem={({ item }) => <HomeSaleItem key={item.id} image={item.image} title={item.title} price={item.price} discount={item.price} saleOff={item.saleOff} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        width: '100%',
        marginHorizontal: 20,
    },
})

export default MegaSale;