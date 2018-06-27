import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import Popular from './Popular';
import { formatPopularData } from '../../lib/functions';

import styles from './styles';

const popularItemsQuery = gql`
    {
        allItems {
            id
            image
            title
            category
            year
            condition
            description
            latitude
            longitude
            price
            priceOneWeek
            priceOneMonth
            allBorrowers {
                id
                endDate
                startDate
            }
            owner {
                fullname
                profileimage
                id
            }
        }
    }
`;

class PopularContainer extends Component {
    render() {
        return (
            <Query query={popularItemsQuery}>
                {({ data, loading, error }) => {
                    if (loading) return <Text>Loading</Text>;
                    if (error) return <Text>Error</Text>;
                    const formattedData = formatPopularData(data.allItems);
                    return (
                        <ScrollView style={{ flex: 1 }}>
                            <View style={styles.dimension}>
                                <Popular
                                    popularData={formattedData}
                                    nav={this.props.navigation}
                                />
                            </View>
                        </ScrollView>
                    );
                }}
            </Query>
        );
    }
}

PopularContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default PopularContainer;
