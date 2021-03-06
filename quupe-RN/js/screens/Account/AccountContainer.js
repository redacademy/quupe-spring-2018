import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Account from './Account';
import { deleteUserToken } from '../../redux/modules/Token';

import Loader from '../../components/Loader';

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
        id
      }
      messages {
        id
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
          if (loading) return <Loader />;
          if (error) return <Text>Error</Text>;
          const userData = data.User;
          return (
            <Account
              userData={userData}
              nav={this.props.navigation}
              currentToken={currentToken}
              logOut={this.logOut.bind(this)}
            />
          );
        }}
      </Query>
    );
  }
}

AccountContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  ).isRequired
  // TODO TOKEN PROPTYPE FIX
};

export default connect(state => ({
  token: state.Token
}))(AccountContainer);
