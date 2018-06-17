import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import SignUp from './SignUp';

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

  render() {
    return (
      <Mutation
        mutation={signUpMutation}
      >
        {(signupUser, { data }) => (
          <SignUp
            signupUser={signupUser}
          />
        )}
      </Mutation>
    )
  }
}

export default SignUpContainer;
