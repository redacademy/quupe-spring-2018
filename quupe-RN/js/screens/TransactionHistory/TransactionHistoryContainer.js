import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import gql from 'graphql-tag';
import { Text, ActivityIndicator } from 'react-native';
import TransactionHistory from './TransactionHistory';

const allItemsQuery = gql`
    query User($id: ID!) {
        User(id: $id) {
            id
            fullname
            profileimage
            bio
            items {
                id
                title
                price
                priceOneWeek
                priceOneMonth
                category
                condition
                description
                image
                longitude
                latitude
                owner {
                    fullname
                    id
                    profileimage
                }
                allBorrowers {
                    id
                }
            }
            allBorrowed {
                startDate
                endDate
                item {
                    id
                    title
                    image
                    price
                }
            }
        }
    }
`;

class TransactionHistoryContainer extends Component {
    render() {
        const currentUser =
            Array.from(this.props.token.token)[0] &&
            Array.from(this.props.token.token)[0].id;

        return (
            <Query query={allItemsQuery} variables={{ id: currentUser }}>
                {({ loading, error, data }) => {
                    if (loading) return <ActivityIndicator />;
                    if (error) return <Text>Error</Text>;

                    const borrowedItemsData = data.User.allBorrowed;
       
                    const lentItemsData = data.User.items.filter(item => item.allBorrowers[0]);

                    const totalMoneyEarned = [];
                    lentItemsData.map(item => {
                        totalMoneyEarned.push(parseInt(item.price));
                    });
                    const moneyEarned = totalMoneyEarned.reduce((a, b) => a + b);

                    const totalMoneySpent = [];
                    borrowedItemsData.map(item => {
                        totalMoneySpent.push(parseInt(item.item[0].price));
                    });
                    const moneySpent = totalMoneySpent.reduce((a, b) => a + b);

                    return (
                        <TransactionHistory
                            lentItemsData={lentItemsData}
                            borrowedItemsData={borrowedItemsData}
                            moneySpent={moneySpent}
                            moneyEarned={moneyEarned}
                            nav={this.props.navigation}
                        />
                    );
                }}
            </Query>
        );
    }
}
TransactionHistoryContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default connect(state => ({
    token: state.Token
}))(TransactionHistoryContainer);
