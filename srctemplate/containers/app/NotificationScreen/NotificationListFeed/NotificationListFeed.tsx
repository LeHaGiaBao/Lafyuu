import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import NotificationFeedItem from '../../../../components/Notification/NotificationFeedItem';

const NotificationListItem = [
    {
        id: 1,
        image: require('../../../../../assets/FlashSale/shoes.png'),
        title: 'New Product',
        content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
        time: 'June 3, 2015 5:06 PM'
    },
    {
        id: 2,
        image: require('../../../../../assets/FlashSale/product5.png'),
        title: 'Best Product',
        content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
        time: 'April 30, 2014 1:01 PM'
    },
    {
        id: 3,
        image: require('../../../../../assets/FlashSale/nike.png'),
        title: 'New Product',
        content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
        time: 'June 3, 2015 5:06 PM'
    },
]

function NotificationListFeed({ navigation }: any) {
    return (
        <FlatList
            style={styles.listContainer}
            data={NotificationListItem}
            renderItem={({ item }) => <NotificationFeedItem key={item.id} image={item.image} content={item.content} title={item.title} time={item.time} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        width: '100%',
    },
})

export default NotificationListFeed;