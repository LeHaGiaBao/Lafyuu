import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

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
            <ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
                {
                    FlashSaleItem.map(({ id, image, title, price, discount, saleOff }) => {
                        return <FlashSaleItemContainer key={id} title={title} image={image} price={price} discount={discount} saleOff={saleOff} />
                    })
                }
            </ScrollView>
        </>
    );
}

const FlashSaleItemContainer = ({ image, title, price, discount, saleOff }: any) => {
    return (
        <>
            <View style={styles.flashSaleContainer}>
                <Image source={image} style={styles.flashSaleImage} />
                <Text style={styles.flashSaleTitle}>{title}</Text>
                <Text style={styles.flashSalePrice}>${price}</Text>
                <View style={styles.discount}>
                    <Text style={styles.discountText}>${discount}</Text>
                    <Text style={styles.saleOffText}>${saleOff}% Off</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        width: '100%',
        marginHorizontal: 20,
    },
    flashSaleContainer: {
        marginRight: 16,
        display: 'flex',
        flexDirection: 'column',
        width: 145,
        height: 240,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5,
        padding: 16,
    },
    flashSaleImage: {
        width: 109,
        height: 109,
    },
    flashSaleTitle: {
        marginTop: 8,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#223263',
    },
    flashSalePrice: {
        marginTop: 8,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#40BFFF',
    },
    discount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 8,
    },
    discountText: {
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#9098B1',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    saleOffText: {
        marginTop: 8,
        fontFamily: 'Poppins-Bold',
        fontSize: 10,
        color: '#FB7181',
    }
})

export default FlashSale;