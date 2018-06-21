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

const newDay = moment()
    .startOf('day')
    .format();

class LentItemsContainer extends Component {
    render() {
        const currentUser = Array.from(queryToken())[0].id;
        const userLentItems = [];
        const userActiveLentItems = [];
        const userExpiredLentItems = [];
        return (
            <Query query={allItemsQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading</Text>;
                    if (error) return <Text>Error</Text>;
                    const itemsData = data.allItems;
                    itemsData.map(item => {
                        if (
                            item.owner.id === currentUser &&
                            item.allBorrowers[0]
                        ) {
                            userLentItems.push(item);
                        }
                    });
                    userLentItems.map(item => {
                        if (
                            moment(
                                item.allBorrowers[0].endDate,
                                'MM/DD/YYYY',
                                true
                            ).format() > newDay
                        ) {
                            userActiveLentItems.push(item);
                        } else {
                            userExpiredLentItems.push(item);
                        }
                    });

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
