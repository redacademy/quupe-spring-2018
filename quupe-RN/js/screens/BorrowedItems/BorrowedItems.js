import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import styles from './styles';

const BorrowedItems = props => {
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
                <Text style={styles.headerTitle}>Borrowed Items</Text>
            </View>
            <Text style={styles.borrowingWrapper}>Currently borrowing</Text>
            {props.borrowing.map((item, index) => (
                <TouchableOpacity
                    key={item.item[0].id}
                    style={styles.itemPanel}
                >
                    <Image
                        key={item.item[0].image}
                        style={styles.image}
                        source={{ uri: item.item[0].image }}
                    />
                    <View style={styles.itemPanelText}>
                        <Text key={index} style={styles.itemPanelTitle}>
                            {item.item[0].title}
                        </Text>
                        <Text key={item.item[0].price}>
                            Total fee: $
                            {item.item[0].price *
                                moment(item.endDate)
                                    .subtract(item.startDate)
                                    .format('d')}
                        </Text>
                        <Text style={styles.borrowingFrom}>
                            Borrowing from: {'\n'}
                            {moment(item.startDate).format('MMMM Do')} to{' '}
                            {moment(item.endDate).format('MMMM do')}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
            <Text style={styles.borrowedHeader}>Borrowed</Text>
            {props.borrowed.map((item, index) => (
                <TouchableOpacity
                    key={item.item[0].id}
                    style={styles.itemPanel}
                >
                    <Image
                        key={item.item[0].image}
                        style={styles.image}
                        source={{ uri: item.item[0].image }}
                    />
                    <View style={styles.itemPanelText}>
                        <Text key={index} style={styles.itemPanelTitle}>
                            {item.item[0].title}
                        </Text>
                        <Text key={item.item[0].price}>
                            Total fee: $
                            {item.item[0].price *
                                moment(item.endDate)
                                    .subtract(item.startDate)
                                    .format('d')}
                        </Text>
                        <Text style={styles.borrowingFrom}>
                            Borrowed from: {'\n'}
                            {moment(item.startDate).format('MMMM Do')} to{' '}
                            {moment(item.endDate).format('MMMM do')}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

BorrowedItems.propTypes = {
    nav: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired,
    borrowing: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired,
    borrowed: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired
};

export default BorrowedItems;
