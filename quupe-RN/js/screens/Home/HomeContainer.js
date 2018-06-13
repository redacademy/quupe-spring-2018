import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Text } from 'react-native';

const ItemQuery = gql`
    {
        allItems {
            title
        }
    }
`;

export class ItemContainer extends Component {
    render() {
        return (
            <Query query={ItemQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <p>It is loading </p>;
                    if (error) return <Text>Error</Text>;
                    return <Text> {data.allItems.title}</Text>;
                }}
            </Query>
        );
    }
}
