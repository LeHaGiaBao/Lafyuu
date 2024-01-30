import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const CategoryListItem = [
    {
        id: 1,
        image: require('../../../../../assets/Category/shirt.png'),
        title: 'Man Shirt',
    },
    {
        id: 2,
        image: require('../../../../../assets/Category/dress.png'),
        title: 'Dress',
    },
    {
        id: 3,
        image: require('../../../../../assets/Category/manbag.png'),
        title: 'Man Work Equipment',
    },
    {
        id: 4,
        image: require('../../../../../assets/Category/womanbag.png'),
        title: 'Woman Bag',
    },
    {
        id: 5,
        image: require('../../../../../assets/Category/manshoes.png'),
        title: 'Man Shoes',
    },
    {
        id: 6,
        image: require('../../../../../assets/Category/womanshoes.png'),
        title: 'High Heels',
    },
]

function CategoryList() {
    return (
        <>
            <ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
                {
                    CategoryListItem.map(({ id, image, title }) => {
                        return <CategoryItem key={id} image={image} title={title} />
                    })
                }
            </ScrollView>
        </>
    );
}

const CategoryItem = ({ image, title }: any) => {
    return (
        <>
            <View style={styles.categoryContainer}>
                <View style={styles.categoryItem}>
                    <Image source={image} style={styles.imageItem} />
                </View>
                <Text style={styles.categoryText}>{title}</Text>
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
    categoryContainer: {
        marginRight: 12,
        display: 'flex',
        flexDirection: 'column',
    },
    categoryItem: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderColor: '#EBF0FF',
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
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#9098B1',
    }
})

export default CategoryList;