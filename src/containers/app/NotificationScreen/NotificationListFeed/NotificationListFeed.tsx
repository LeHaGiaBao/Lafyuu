import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
        <View style={styles.listContainer}>
            {
                NotificationListItem.map(({ id, image, title, content, time }) => {
                    return <ItemRender key={id} image={image} title={title} content={content} time={time} />
                })
            }
        </View>
    );
}

const ItemRender = ({ image, title, content, time }: any) => {
    return (
        <View style={styles.item}>
            <View style={styles.listItem}>
                <View style={styles.listContent}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.contentStyle}>
                        <Text style={styles.contentText}>{title}</Text>
                        <Text style={styles.notificationContent}>{content}</Text>
                        <Text style={styles.notificationTime}>{time}</Text>
                    </View>
                </View>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        height: 120,
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
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 5,
        marginRight: 16,
        resizeMode: 'cover',
    },
    contentStyle: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    contentText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#223263',
    },
    notificationContent: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#9098B1',
    },
    notificationTime: {
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#223263',
    }
})

export default NotificationListFeed;