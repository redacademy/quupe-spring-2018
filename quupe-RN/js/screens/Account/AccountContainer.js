import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { queryToken } from '../../config/models';
import Account from './Account';

const AccountQuery = gql`
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
            }
            borrow {
                id
                title
            }
            rooms {
                id
            }
            messages {
                id
            }
        }
    }
`;

class AccountContainer extends Component {
    render() {
        const currentUser = Array.from(queryToken())[0].id;
        return (
            <Query query={AccountQuery} variables={{ id: currentUser }}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading</Text>;
                    if (error) return <Text>Error</Text>;
                    const userData = data.User;
                    return (
                        <Account
                            userData={userData}
                            nav={this.props.navigation}
                        />
                    );
                }}
            </Query>
        );
    }
}

export default connect(state => ({
    token: state.Token
}))(AccountContainer);
