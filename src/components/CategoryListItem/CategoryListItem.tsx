import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NeutralColor } from '../../constants/colors';
import { FontFamily, FontSize } from '../../constants/fonts';

type ItemProps = {
    image: any,
    title: string,
}

function CategoryListItem(items: ItemProps) {
    return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryItem}>
                <Image source={items.image} style={styles.imageItem} />
            </View>
            <Text style={styles.categoryText}>{items.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        marginRight: 12,
        display: 'flex',
        flexDirection: 'column',
    },
    categoryItem: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderColor: NeutralColor.LightColor,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageItem: {
        height: 25,
        width: 25,
    },
    categoryText: {
        width: 70,
        marginTop: 8,
        textAlign: 'center',
        fontFamily: FontFamily.FontRegular,
        fontSize: FontSize.FontSize10,
        color: NeutralColor.GreyColor,
    }
})

export default CategoryListItem;