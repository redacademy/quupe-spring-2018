import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import styles from './styles';

class TransactionHistory extends Component {
    constructor() {
        super();
        this.state = {
            borrowed: 1,
            lent: 0
        };
    }
    render() {
        const borrowed = this.state.borrowed;
        const lent = this.state.lent;

        return (
            <ScrollView>
                <Icon
                    name="md-arrow-back"
                    size={30}
                    style={styles.backButton}
                    color="black"
                    onPress={() => this.props.nav.pop()}
                />
                <View style={styles.pageContent}>
                    <View style={styles.money}>
                        <View style={styles.spentEarned}>
                            <Text>Money Spent: </Text>

                            <Text>{this.props.moneySpent}</Text>
                        </View>
                        <View style={styles.spentEarned}>
                            <Text>Money Earned: </Text>
                            <Text>{this.props.moneyEarned}</Text>
                        </View>
                    </View>
                    <View style={styles.borrowLendButtons}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ borrowed: 1, lent: 0 });
                            }}
                            style={borrowed ? styles.borrowed : styles.grey}
                        >
                            <Text>Borrowed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ borrowed: 0, lent: 1 });
                            }}
                            style={lent ? styles.borrowed : styles.grey}
                        >
                            <Text>Lent</Text>
                        </TouchableOpacity>
                    </View>
                    {borrowed ? (
                        <View>
                            <Text>
                                You Borrowed{' '}
                                {this.props.borrowedItemsData.length} Items!
                            </Text>
                            {this.props.borrowedItemsData.map(item => (
                                <View
                                    style={styles.itemTile}
                                    key={item.item[0].id}
                                >
                                    <Image
                                        key={item.item[0].title}
                                        style={styles.borrowLentImages}
                                        source={{ uri: item.item[0].image }}
                                    />
                                </View>
                            ))}
                        </View>
                    ) : (
                        <View>
                            <Text>
                                You Lent {this.props.lentItemsData.length}{' '}
                                Items!
                            </Text>
                            {this.props.lentItemsData.map(item => (
                                <View style={styles.itemTile} key={item.id}>
                                    <Image
                                        key={item.title}
                                        style={styles.borrowLentImages}
                                        source={{ uri: item.image }}
                                    />
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </ScrollView>
        );
    }
}
TransactionHistory.propTypes = {
    nav: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired,
    moneyEarned: PropTypes.number.isRequired,
    moneySpent: PropTypes.number.isRequired,
    borrowedItemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    lentItemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default TransactionHistory;
