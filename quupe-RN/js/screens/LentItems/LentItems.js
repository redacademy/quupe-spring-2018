import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import styles from './styles';

const LentItems = props => {
    return (
        <ScrollView contentContainerStyle={styles.itemsContainer}>
            <View style={styles.header}>
                <Icon
                    name="md-arrow-back"
                    size={30}
                    style={styles.backButton}
                    color="black"
                    onPress={() => props.nav.pop()}
                />
                <Text style={styles.headerTitle}>Lent Items</Text>
            </View>
            <Text style={styles.borrowingWrapper}>Currently lending</Text>
            {props.activeLentItems ? (
                props.activeLentItems.map((item, index) => (
                    <TouchableOpacity key={item.id} style={styles.itemPanel}>
                        <Image
                            key={item.image}
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <View style={styles.itemPanelText}>
                            <Text key={index} style={styles.itemPanelTitle}>
                                {item.title}
                            </Text>
                            <Text key={item.price}>
                                Total fee: $
                                {item.price *
                                    moment(item.endDate)
                                        .subtract(item.startDate)
                                        .format('d')}
                            </Text>
                            <Text style={styles.borrowingFrom}>
                                Borrowing from: {'\n'}
                                {moment(item.startDate).format(
                                    'MMMM Do'
                                )} to {moment(item.endDate).format('MMMM do')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))
            ) : (
                <Text>No items currently lending</Text>
            )}
            <Text style={styles.borrowedHeader}>Lent</Text>
            {props.expiredLentItems ? (
                props.expiredLentItems.map((item, index) => (
                    <TouchableOpacity key={item.id} style={styles.itemPanel}>
                        <Image
                            key={item.image}
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <View style={styles.itemPanelText}>
                            <Text key={index} style={styles.itemPanelTitle}>
                                {item.title}
                            </Text>
                            <Text key={item.price}>
                                Total fee: $
                                {item.price *
                                    moment(item.endDate)
                                        .subtract(item.startDate)
                                        .format('d')}
                            </Text>
                            <Text style={styles.borrowingFrom}>
                                Borrowed from: {'\n'}
                                {moment(item.startDate).format(
                                    'MMMM Do'
                                )} to {moment(item.endDate).format('MMMM do')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))
            ) : (
                <Text>No lending history</Text>
            )}
        </ScrollView>
    );
};

LentItems.propTypes = {
    nav: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired,
    activeLentItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired,
    expiredLentItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired
};
export default LentItems;
