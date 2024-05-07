import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CategoryHomeListItem } from '../../../../data/CategoryListItem';
import CategoryListItem from '../../../../components/CategoryListItem';

function CategoryList() {
    return (
        <FlatList
            style={styles.scrollView}
            data={CategoryHomeListItem}
            renderItem={({ item }) => <CategoryListItem key={item.id} image={item.image} title={item.title} />}
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
        display: 'flex',
        gap: 12,
    },
})

export default CategoryList;