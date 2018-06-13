import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import SignIn from './SignIn';
import { createUserToken } from '../../redux/modules/Token';
import realm, { createToken } from '../../config/models';

import styles from './styles';

const signInMutation = gql`
  mutation authenticateUser(
    $email: String!
    $password: String!
  ) {
    authenticateUser(
      email: $email
      password: $password
    ) {
      id
      token
    }
  }
`;

class SignInContainer extends Component {
  realmToken(token, id) {
    this.props.dispatch(createUserToken(token, id));
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Mutation mutation={signInMutation} onCompleted={(data) => this.realmToken(data.authenticateUser.token, data.authenticateUser.id)}>
        {(authenticateUser, { data, loading, error }) => (
          <View>
            <SignIn
              authenticateUser={authenticateUser}
              handleSubmit={this.handleSubmit}
              userRef={this.username}
              passRef={this.password}
              handleSubmit={this.handleSubmit}
              data={data}
              loading={loading}
              error={error}
            />
            <Text style={styles.seperator}>OR</Text>
          </View>
        )}
      </Mutation>
    )
  }
}

export default connect()(SignInContainer);

