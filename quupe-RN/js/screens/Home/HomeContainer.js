import React, { Component } from 'react';
import { View, Text } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Home from './Home';

const itemData = gql`
    query {
        allItems(filter: { category: "Games" }) {
            title
            originalPrice
            image
            condition
            year
            category
            price
            priceOneWeek
            priceOneMonth
            description
            latitude
            longitude
        }
    }
`;

class HomeContainer extends Component {
    render() {
        return (
            <View>
                <Query query={itemData}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return <Text>It is loading</Text>;
                        }
                        if (error) return <Text>Error getting items</Text>;
                        console.log('hello');
                        return (
                            <View>
                                <Home itemData={data.allItems} />
                            </View>
                        );
                    }}
                </Query>
            </View>
        );
    }
}

export default HomeContainer;
