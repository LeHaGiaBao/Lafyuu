import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopNavigation from '../../../../layouts/TopNavigation';
import ManFashionList from '../../../../containers/app/ExploreScreen/ManFashionList';
import WomanFashionList from '../../../../containers/app/ExploreScreen/WomanFashionList';
import { BackgroundColor, NeutralColor } from '../../../../constants/colors';
import { FontFamily, FontSize } from '../../../../constants/fonts';

function ExploreScreen({ navigation }: any) {
    return (
        <View style={styles.exploreScreen}>
            <View style={styles.homeHeader}>
                <TopNavigation navigation={navigation} />
            </View>
            <Text style={styles.exploreTitle}>Man Fashion</Text>
            <View style={styles.listContainer}>
                <ManFashionList />
            </View>
            <Text style={styles.exploreTitle}>Woman Fashion</Text>
            <View style={styles.listContainer}>
                <WomanFashionList />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    exploreScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 60,
        marginLeft: 16,
        marginRight: 16,
    },
    homeHeader: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderBottomColor: NeutralColor.LightColor,
        borderTopColor: BackgroundColor.WhiteColor,
        borderLeftColor: BackgroundColor.WhiteColor,
        borderRightColor: BackgroundColor.WhiteColor,
        borderWidth: 1,
    },
    exploreTitle: {
        marginTop: 24,
        marginBottom: 12,
        fontFamily: FontFamily.FontBold,
        fontSize: FontSize.FontSize14,
        color: NeutralColor.DarkColor
    },
    listContainer: {
        height: 265,
    }
})

export default ExploreScreen;