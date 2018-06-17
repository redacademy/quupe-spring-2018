import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import SignUp from './SignUp';

const signUpMutation = gql`
  mutation signupUser(
    $email: String!
    $password: String!
  ) {
    signupUser(
      email: $email
      password: $password
    ) {
      id
      token
    }
  }
`;

const updateUserMutation = gql`
  mutation updateUser(
    $id: ID!
    $fullname: String!
  ) {
    updateUser(
      id: $id
      fullname: $fullname
    ) {
      id
    }
  }
`;

class SignUpContainer extends Component {

  render() {
    return (
      <Mutation
        mutation={signUpMutation}
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

export default SignUpContainer;
