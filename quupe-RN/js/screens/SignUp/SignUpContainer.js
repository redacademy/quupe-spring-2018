import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SignUp from './SignUp';
import { createUserToken } from '../../redux/modules/Token';
import FBLoginButton from '../../components/FBLoginButton';

const signUpMutation = gql`
    mutation signupUser(
        $email: String!
        $password: String!
        $fullname: String!
    ) {
        signupUser(email: $email, password: $password, fullname: $fullname) {
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
            <View>
                <Mutation
                    mutation={signUpMutation}
                    onCompleted={data =>
                        this.saveAuthToken(
                            data.signupUser.token,
                            data.signupUser.id
                        )
                    }
                >
                    {(signupUser, { data, loading, error }) => (
                        <SignUp
                            signupUser={signupUser}
                            data={data}
                            loading={loading}
                            error={error}
                        />
                    )}
                </Mutation>
                <FBLoginButton saveAuthToken={this.saveAuthToken.bind(this)} />
            </View>
        );
    }
}

SignUpContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default connect()(SignUpContainer);
