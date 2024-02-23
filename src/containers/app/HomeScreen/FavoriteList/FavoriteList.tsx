import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
        title: 'FS - Nike Air Max 270 React...',
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

function FavoriteList() {
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={FlashSaleItem}
                    renderItem={FlashSaleItemContainer}
                    keyExtractor={(item) => item.key.toString()}
                    numColumns={2}
                />
            </View>
        </>
    );
}

const FlashSaleItemContainer = ({ item }: any) => {
    return (
        <>
            <View style={styles.flashSaleContainer}>
                <Image source={item.image} style={styles.flashSaleImage} />
                <Text style={styles.flashSaleTitle}>{item.title}</Text>
                <View style={styles.listStar}>
                    <FontAwesome name='star' style={styles.vote} />
                    <FontAwesome name='star' style={styles.vote} />
                    <FontAwesome name='star' style={styles.vote} />
                    <FontAwesome name='star' style={styles.vote} />
                    <FontAwesome name='star' style={styles.unVote} />
                </View>
                <Text style={styles.flashSalePrice}>${item.price}</Text>
                <View style={styles.discount}>
                    <View style={styles.discountContent}>
                        <Text style={styles.discountText}>${item.discount}</Text>
                        <Text style={styles.saleOffText}>${item.saleOff}% Off</Text>
                    </View>
                    <MaterialCommunityIcons name="delete-outline" size={24} style={styles.deleteIcon} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        marginLeft: 8,
        marginRight: 8,
    },
    flashSaleContainer: {
        flex: 1,
        width: '100%',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 16,
        height: 282,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5,
        padding: 16,
    },
    flashSaleImage: {
        width: '100%',
        height: 140,
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
        justifyContent: 'space-between',
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
    },
    listStar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 4,
        marginTop: 5,
    },
    vote: {
        height: 12,
        width: 12,
        color: '#FFC833',
    },
    unVote: {
        height: 12,
        width: 12,
        color: '#EBF0FF',
    },
    discountContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 8,
    },
    deleteIcon: {
        width: 25,
        height: 25,
        color: '#9098B1',
    }
})

export default FavoriteList;