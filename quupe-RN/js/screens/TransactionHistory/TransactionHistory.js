import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    getBorrowedTransactions,
    getLentTransactions
} from '../../redux/modules/TransactionHistoryToggle';

import styles from './styles';

const TransactionHistory = props => (
    <ScrollView>
        <Icon
            name="md-arrow-back"
            size={30}
            style={styles.backButton}
            color="black"
            onPress={() => props.nav.pop()}
        />
        <View style={styles.pageContent}>
            <View style={styles.money}>
                <View style={styles.spentEarned}>
                    <Text>Money Spent: </Text>

                    <Text>{props.moneySpent}</Text>
                </View>
                <View style={styles.spentEarned}>
                    <Text>Money Earned: </Text>
                    <Text>{props.moneyEarned}</Text>
                </View>
            </View>
            <View style={styles.borrowLendButtons}>
                <TouchableOpacity
                    onPress={() => props.dispatch(getBorrowedTransactions())}
                >
                    <Text>Borrowed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.dispatch(getLentTransactions())}
                >
                    <Text>Lent</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>
                    You Borrowed
                    {props.borrowedItemsData.length} Items!
                </Text>
                {props.borrowedItemsData.map(item => (
                    <View style={styles.itemTile} key={item.item[0].id}>
                        <Image
                            key={item.item[0].title}
                            style={styles.borrowLentImages}
                            source={{ uri: item.item[0].image }}
                        />
                    </View>
                ))}
            </View>
            <View>
                <Text>You Lent {props.lentItemsData.length} Items!</Text>
                {props.lentItemsData.map(item => (
                    <View style={styles.itemTile} key={item.id}>
                        <Image
                            key={item.title}
                            style={styles.borrowLentImages}
                            source={{ uri: item.image }}
                        />
                    </View>
                ))}
            </View>
            )
        </View>
    </ScrollView>
);

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
