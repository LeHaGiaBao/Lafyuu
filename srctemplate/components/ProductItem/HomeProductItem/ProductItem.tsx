import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { starIcon } from '../../../assets';
import { NeutralColor, PrimaryColor } from '../../../constants/colors';
import { FontFamily, FontSize } from '../../../constants/fonts';

type ProductItemProps = {
    image: any,
    title: string,
    price: string,
    discount: string,
    saleOff: string,
}

function ProductItem(items: ProductItemProps) {
    return (
        <View style={styles.productItemContainer}>
            <Image source={items.image} style={styles.productItemImage} />
            <Text style={styles.productItemTitle}>{items.title}</Text>
            <View style={styles.listStar}>
                <Image source={starIcon.yellowStarIcon} style={styles.vote} />
                <Image source={starIcon.yellowStarIcon} style={styles.vote} />
                <Image source={starIcon.yellowStarIcon} style={styles.vote} />
                <Image source={starIcon.yellowStarIcon} style={styles.vote} />
                <Image source={starIcon.grayStarIcon} style={styles.unVote} />
            </View>
            <Text style={styles.productItemPrice}>${items.price}</Text>
            <View style={styles.discount}>
                <Text style={styles.discountText}>${items.discount}</Text>
                <Text style={styles.saleOffText}>${items.saleOff}% Off</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productItemContainer: {
        flex: 1,
        width: '100%',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 16,
        height: 282,
        borderWidth: 1,
        borderColor: NeutralColor.LightColor,
        borderRadius: 5,
        padding: 16,
    },
    productItemImage: {
        width: '100%',
        height: 140,
    },
    productItemTitle: {
        marginTop: 8,
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.DarkColor,
    },
    productItemPrice: {
        marginTop: 8,
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: PrimaryColor.BlueColor,
    },
    discount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 8,
    },
    discountText: {
        marginTop: 8,
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize10,
        color: NeutralColor.GreyColor,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    saleOffText: {
        marginTop: 8,
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize10,
        color: PrimaryColor.RedColor,
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
    },
    unVote: {
        height: 12,
        width: 12,
    }
})

export default ProductItem;