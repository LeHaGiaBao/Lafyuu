import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ItemRender = [
    {
        id: 1,
        code: 'LQNSU346JK',
        day: 'August 1, 2017',
        status: 'Shipping',
        item: '2',
        price: '299,43',
    },
    {
        id: 2,
        code: 'SDG1345KJD',
        day: 'August 1, 2017',
        status: 'Shipping',
        item: '2',
        price: '299,43',
    }
]

function OrderList({ navigation }: any) {
    return (
        <View style={styles.orderContainer}>
            {
                ItemRender.map(({ id, code, day, status, item, price }) => {
                    return <OrderItem key={id} code={code} day={day} status={status} item={item} price={price} />
                })
            }
        </View>
    );
}

const OrderItem = ({ code, day, status, item, price }: any) => {
    return (
        <View style={styles.orderItem}>
            <Text style={styles.orderCode}>{code}</Text>
            <Text style={styles.orderDay}>Order at Lafyuu : {day}</Text>
            <View style={styles.line} />
            <View style={styles.orderInformation}>
                <Text style={styles.inforTitle}>Order Status</Text>
                <Text style={styles.inforText}>{status}</Text>
            </View>
            <View style={styles.orderInformation}>
                <Text style={styles.inforTitle}>Items</Text>
                <Text style={styles.inforText}>{item} Items purchased</Text>
            </View>
            <View style={styles.orderInformation}>
                <Text style={styles.inforTitle}>Price</Text>
                <Text style={styles.inforPrice}>${price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderContainer: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    orderItem: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EBF0FF',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 12,
    },
    orderCode: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#223263',
    },
    orderDay: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
    line: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EBF0FF',
        borderStyle: 'dashed',
    },
    orderInformation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inforTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
    inforText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#223263',
    },
    inforPrice: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#40BFFF',
    }
})

export default OrderList;