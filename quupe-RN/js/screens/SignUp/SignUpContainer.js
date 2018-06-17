import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import { createUserToken } from '../../redux/modules/Token';

const signUpMutation = gql`
  mutation signupUser(
    $email: String!
    $password: String!
    $fullname: String!
  ) {
    signupUser(
      email: $email
      password: $password
      fullname: $fullname
    ) {
      id
      token
    }
  }
`;

class SignUpContainer extends Component {
  saveAuthToken(token, id) {
    this.props.dispatch(createUserToken(token, id));
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Mutation
        mutation={signUpMutation}
        onCompleted={(data) => this.saveAuthToken(data.signupUser.token, data.signupUser.id)}
      >
        {(signupUser, { data, loading, error }) => (
          <SignUp
            signupUser={signupUser}
            data={data}
            loading={loading}
            error={error}
          />
        )}
      </Mutation >
    )
  }
}

export default connect()(SignUpContainer);
