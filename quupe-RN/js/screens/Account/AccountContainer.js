import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Account from './Account';
import { deleteUserToken } from '../../redux/modules/Token';

export const AccountQuery = gql`
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
            rooms {
                messages {
                    text
                    sentBy {
                        fullname
                        profileimage
                    }
                }
                id
                people {
                    fullname
                    profileimage
                }
            }
        }
    }
`;

class AccountContainer extends Component {
    logOut(token) {
        this.props.dispatch(deleteUserToken(token));
        this.props.navigation.navigate('AuthLoading');
    }
    render() {
        const currentUser =
            Array.from(this.props.token.token)[0] &&
            Array.from(this.props.token.token)[0].id;
        const currentToken =
            Array.from(this.props.token.token)[0] &&
            Array.from(this.props.token.token)[0].token;
        if (!currentUser) {
            return <Text>Not Logged in</Text>;
        }

        return (
            <Query query={AccountQuery} variables={{ id: currentUser }}>
                {({ loading, error, data }) => {
                    if (loading) return <ActivityIndicator />;
                    if (error) return <Text>Error</Text>;
                    const userData = data.User;
                    return (
                        <Account
                            userData={userData}
                            nav={this.props.navigation}
                            currentToken={currentToken}
                            logOut={this.logOut.bind(this)}
                            currentUser={currentUser}
                            refetch={refetch}
                        />
                    );
                }}
            </Query>
        );
    }
}

AccountContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
<<<<<<< HEAD
    // TODO TOKEN PROPTYPE FIX
=======
>>>>>>> added chat to profile page
};

export default connect(state => ({
    token: state.Token
}))(AccountContainer);
