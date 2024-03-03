import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ManListItem } from '../../../../data/CategoryListItem';
import CategoryListItem from '../../../../components/CategoryListItem';

function ManFashionList() {
    const firstRowItems = ManListItem.slice(0, 4);
    const secondRowItems = ManListItem.slice(4);

    return (
        <View style={styles.listContainer}>
            <View style={styles.row1}>
                {firstRowItems.map(({ id, image, title }) => (
                    <CategoryListItem key={id} image={image} title={title} />
                ))}
            </View>
            <View style={styles.row2}>
                {secondRowItems.map(({ id, image, title }) => (
                    <CategoryListItem key={id} image={image} title={title} />
                ))}
            </View>
        </View>
    );
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
})

export default ManFashionList;
