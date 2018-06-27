import React, { Component } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import CategoryItems from './CategoryItems';

import styles from './styles';

const categoryQuery = gql`
    query allItems($category: String!) {
        allItems(filter: { category: $category }) {
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

class CategoryItemsContainer extends Component {
    render() {
        const { category } = this.props.navigation.state.params;
        return (
            <Query query={categoryQuery} variables={{ category }}>
                {({ data, loading, error }) => {
                    if (loading) return <ActivityIndicator />;
                    if (error) return <Text>Error</Text>;
                    return (
                        <ScrollView>
                            <View style={styles.itemContainer}>
                                {data.allItems.map((item, index) => (
                                    <CategoryItems
                                        item={item}
                                        key={index}
                                        nav={this.props.navigation}
                                    />
                                ))}
                            </View>
                        </ScrollView>
                    );
                }}
            </Query>
        );
    }
}

CategoryItemsContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default CategoryItemsContainer;
