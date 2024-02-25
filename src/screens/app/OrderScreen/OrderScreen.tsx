
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import OrderHeader from '../../../containers/app/OrderScreen/OrderHeader';
import OrderList from '../../../containers/app/OrderScreen/OrderList';

function OrderScreen({ navigation }: any) {
    return (
        <View style={styles.orderScreen}>
            <View style={styles.orderHeader}>
                <OrderHeader title="Order" navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <OrderList navigation={navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    orderScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 60,
    },
    orderHeader: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderBottomColor: '#EBF0FF',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
    },
    scrollView: {
        width: '100%',
        marginHorizontal: 20,
    },
})

export default OrderScreen;