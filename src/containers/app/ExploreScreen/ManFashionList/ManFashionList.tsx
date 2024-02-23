import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ManFashionListItem = [
    {
        id: 1,
        image: require('../../../../../assets/Category/shirt.png'),
        title: 'Man Shirt',
    },
    {
        id: 2,
        image: require('../../../../../assets/Category/manbag.png'),
        title: 'Man Work Equipment',
    },
    {
        id: 3,
        image: require('../../../../../assets/Category/tshirt.png'),
        title: 'Man T-Shirt',
    },
    {
        id: 4,
        image: require('../../../../../assets/Category/manshoes.png'),
        title: 'Man T-Shirt',
    },
    {
        id: 5,
        image: require('../../../../../assets/Category/manpants.png'),
        title: 'Man Pants',
    },
    {
        id: 6,
        image: require('../../../../../assets/Category/manunderwear.png'),
        title: 'Man Underwear',
    },
]

function ManFashionList() {
    const firstRowItems = ManFashionListItem.slice(0, 4);
    const secondRowItems = ManFashionListItem.slice(4);

    return (
        <View style={styles.listContainer}>
            <View style={styles.row1}>
                {firstRowItems.map(({ id, image, title }) => (
                    <ItemRender key={id} image={image} title={title} />
                ))}
            </View>
            <View style={styles.row2}>
                {secondRowItems.map(({ id, image, title }) => (
                    <ItemRender key={id} image={image} title={title} />
                ))}
            </View>
        </View>
    );
}

const ItemRender = ({ image, title }: any) => {
    return (
        <View style={styles.itemRenderContainer}>
            <View style={styles.itemCircle}>
                <Image source={image} style={styles.imageItem} />
            </View>
            <Text style={styles.itemText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 12,
        width: '100%',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 21,
        marginBottom: 16,
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 21,
    },
    itemRenderContainer: {
        marginRight: 12,
        display: 'flex',
        flexDirection: 'column',
    },
    itemCircle: {
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
    itemText: {
        width: 70,
        marginTop: 8,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#9098B1',
    }
})

export default ManFashionList;
