import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import BorrowForm from './BorrowForm';

import styles from './styles';

const itemApiCall = gql`
    query allItems($title_contains: String) {
        allItems(filter: { title_contains: $title_contains }) {
            id
            image
            title
            category
            description
            latitude
            longitude
            price
            priceOneWeek
            priceOneMonth
            owner {
                id
                profileimage
                fullname
            }
            year
            condition
        }
    }
`;

class BorrowFormContainer extends Component {
    render() {
        return (
            <Query
                query={itemApiCall}
                variables={{ title_contains: this.props.ItemFilter }}
            >
                {({ loading, error, data }) => {
                    if (loading) {
                        return (
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator />
                            </View>
                        );
                    }
                    if (error) return <Text>{error.message}</Text>;
                    return (
                        <BorrowForm
                            navigation={this.props.navigation}
                            itemData={data.allItems}
                        />
                    );
                }}
            </Query>
        );
    }
}

BorrowFormContainer.defaultProps = {
    ItemFilter: ''
};

BorrowFormContainer.propTypes = {
    ItemFilter: PropTypes.string,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default connect(state => ({
    ItemFilter: state.ItemFilter.input
}))(BorrowFormContainer);
