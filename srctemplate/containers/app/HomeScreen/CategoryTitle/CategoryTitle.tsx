import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontFamily, FontSize } from '../../../../constants/fonts';
import { NeutralColor, PrimaryColor } from '../../../../constants/colors';

function CategoryTitle({ title, subTitle, navigation, screen }: any) {
    return (
        <View style={styles.category}>
            <Text style={styles.title}>{title}</Text>
            <Text
                style={styles.seeAll}
                onPress={() => navigation.navigate(`${screen}`)}
            >
                {subTitle}
            </Text>
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
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.DarkColor,
    },
    seeAll: {
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: PrimaryColor.BlueColor,
    }
})

export default CategoryTitle;