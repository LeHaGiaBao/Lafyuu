import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CategoryTitle({ title, subTitle }: any) {
    return (
        <View style={styles.category}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.seeAll}>{subTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    category: {
        marginTop: 24,
        marginLeft: 16,
        marginRight: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#223263',
    },
    seeAll: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#40BFFF',
    }
})

export default CategoryTitle;