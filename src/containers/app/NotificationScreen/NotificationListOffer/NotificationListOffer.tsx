import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import NotificationOfferItem from '../../../../components/Notification/NotificationOfferItem';

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
        <FlatList
            style={styles.listContainer}
            data={NotificationListItem}
            renderItem={({ item }) => <NotificationOfferItem key={item.id} content={item.content} title={item.title} time={item.time} />}
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

export default NotificationListOffer;