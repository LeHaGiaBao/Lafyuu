import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NeutralColor, PrimaryColor } from '../../../constants/colors';
import { FontFamily, FontSize } from '../../../constants/fonts';

type SaleItemProps = {
    image: any,
    title: string,
    price: string,
    discount: string,
    saleOff: string,
}

function HomeSaleItem(items: SaleItemProps) {
    return (
        <View style={styles.saleContainer}>
            <Image source={items.image} style={styles.saleImage} />
            <Text style={styles.saleTitle}>{items.title}</Text>
            <Text style={styles.salePrice}>${items.price}</Text>
            <View style={styles.discount}>
                <Text style={styles.discountText}>${items.discount}</Text>
                <Text style={styles.saleOffText}>${items.saleOff}% Off</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    saleContainer: {
        marginRight: 16,
        display: 'flex',
        flexDirection: 'column',
        width: 145,
        height: 240,
        borderWidth: 1,
        borderColor: NeutralColor.LightColor,
        borderRadius: 5,
        padding: 16,
    },
    saleImage: {
        width: 109,
        height: 109,
    },
    saleTitle: {
        marginTop: 8,
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize12,
        color: NeutralColor.DarkColor,
    },
    salePrice: {
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
    }
})

export default HomeSaleItem;