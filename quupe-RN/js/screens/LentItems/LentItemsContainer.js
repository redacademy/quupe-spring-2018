import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { queryToken } from '../../config/models';
import LentItems from './LentItems';

const allItemsQuery = gql`
    query {
        allItems {
            title
            owner {
                id
            }
            allBorrowers {
                id
                endDate
            }
        }
    }
`;

const startOfToday = moment()
    .startOf('day')
    .format();

class LentItemsContainer extends Component {
    render() {
        const currentUser = Array.from(queryToken())[0].id;

        return (
            <Query query={allItemsQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading</Text>;
                    if (error) return <Text>Error</Text>;
                    const itemsData = data.allItems;
                    const userLentItems = itemsData.filter(item => {
                        return (
                            item.owner.id === currentUser &&
                            item.allBorrowers[0]
                        );
                    });

                    const userActiveLentItems = userLentItems.filter(item => {
                        return (
                            moment(
                                item.allBorrowers[0].endDate,
                                'MM/DD/YYYY',
                                true
                            ).format() > startOfToday
                        );
                    });

                    const userExpiredLentItems = userLentItems.filter(item => {
                        return (
                            moment(
                                item.allBorrowers[0].endDate,
                                'MM/DD/YYYY',
                                true
                            ).format() <= startOfToday
                        );
                    });
                    console.log('USER LENT ITEMS', userLentItems);
                    console.log('USER ACTIVE LENT ITEMS', userActiveLentItems);
                    console.log(
                        'USER EXPIRED LENT ITEMS',
                        userExpiredLentItems
                    );
                    return (
                        <LentItems
                            activeLentItems={userActiveLentItems}
                            expiredLentItems={userExpiredLentItems}
                            nav={this.props.navigation}
                        />
                    );
                }}
            </Query>
        );
    }
}
LentItemsContainer.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired
};

export default LentItemsContainer;
