import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const NotificationListItem = [
    {
        id: 1,
        title: 'The Best Title',
        content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
        time: 'April 30, 2014 1:01 PM'
    },
    {
        id: 2,
        title: 'SUMMER OFFER 98% Cashback',
        content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
        time: 'April 30, 2014 1:01 PM'
    },
    {
        id: 3,
        title: 'Special Offer 25% OFF',
        content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
        time: 'April 30, 2014 1:01 PM'
    },
]

function NotificationListOffer({ navigation }: any) {
    return (
        <View style={styles.listContainer}>
            {
                NotificationListItem.map(({ id, title, content, time }) => {
                    return <ItemRender key={id} title={title} content={content} time={time} />
                })
            }
        </View>
    );
}

const ItemRender = ({ title, content, time }: any) => {
    return (
        <View style={styles.item}>
            <View style={styles.listItem}>
                <View style={styles.listContent}>
                    <AntDesign name='tago' size={24} style={styles.contentIcon} />
                    <Text style={styles.contentText}>{title}</Text>
                </View>
            </View>
            <Text style={styles.notificationContent}>{content}</Text>
            <Text style={styles.notificationTime}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 12,
        width: '100%',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
    },
    listContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentIcon: {
        marginRight: 16,
        height: 24,
        width: 24,
        color: '#40BFFF',
    },
    contentText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#223263',
    },
    notificationContent: {
        marginLeft: 40,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
    notificationTime: {
        marginTop: 8,
        marginLeft: 40,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#223263',
    }
})

export default NotificationListOffer;