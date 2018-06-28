import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    getBorrowedTransactions,
    getLentTransactions
} from '../../redux/modules/TransactionHistoryToggle';

import styles from './styles';

const TransactionHistory = props => {

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
                <Text style={styles.headerTitle}>Transaction History</Text>
            </View>
            <View style={styles.pageContent}>
                <View style={styles.money}>
                    <View style={styles.spentEarned}>
                        <Text>Money Spent </Text>

                        <Text>{props.moneySpent}</Text>
                    </View>
                    <View style={styles.spentEarned}>
                        <Text>Money Earned </Text>
                        <Text>{props.moneyEarned}</Text>
                    </View>
                </View>
                <View style={styles.borrowLendButtons}>
                    <TouchableOpacity
                        onPress={() =>
                            props.dispatch(getBorrowedTransactions())
                        }
                        style={
                            props.borrowedItems
                                ? styles.borrowed
                                : styles.greyBorrowed
                        }
                    >
                        <Text style={styles.buttonText}>Borrowed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.dispatch(getLentTransactions())}
                        style={props.lentItems ? styles.lent : styles.greyLent}
                    >
                        <Text style={styles.buttonText}>Lent</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text
                        style={
                            props.borrowedItems
                                ? styles.lentItemsTitle
                                : styles.hidden
                        }
                    >
                        You Borrowed {props.borrowedItemsData.length} Items!
                    </Text>
                    {props.borrowedItemsData.map((item, index) => (
                        <TouchableOpacity
                            style={
                                props.borrowedItems
                                    ? styles.itemPanel
                                    : styles.hidden
                            }
                            key={item.item[0].id}
                            onPress={() =>
                                props.nav.navigate('Item', {
                                    itemData: item
                                })
                            }
                        >
                            <Image
                                key={item.item[0].title}
                                style={styles.borrowLentImages}
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
                                    {moment(item.startDate).format('MMMM Do')}
                                    to {moment(item.endDate).format('MMMM Do')}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <View>
                    <Text
                        style={
                            props.lentItems
                                ? styles.lentItemsTitle
                                : styles.hidden
                        }
                    >
                        You Lent {props.lentItemsData.length} Items!
                    </Text>
                    {props.lentItemsData.map((item, index) => (
                        <TouchableOpacity
                            style={
                                props.lentItems
                                    ? styles.itemPanel
                                    : styles.hidden
                            }
                            key={item.id}
                            onPress={() =>
                                props.nav.navigate('Item', {
                                    itemData: item
                                })
                            }
                        >
                            <Image
                                key={item.title}
                                style={styles.borrowLentImages}
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
                                    {moment(item.startDate).format('MMMM Do')}{' '}
                                    to {moment(item.endDate).format('MMMM Do')}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                )
            </View>
        </ScrollView>
    );
};

TransactionHistory.propTypes = {
    nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    moneyEarned: PropTypes.number.isRequired,
    moneySpent: PropTypes.number.isRequired,
    borrowedItemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    lentItemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(state => ({
    borrowedItems: state.TransactionHistory.borrowed,
    lentItems: state.TransactionHistory.lent
}))(TransactionHistory);
