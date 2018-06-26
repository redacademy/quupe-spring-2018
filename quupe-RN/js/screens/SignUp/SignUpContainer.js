import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import SignUp from './SignUp';
import { createUserToken } from '../../redux/modules/Token';
import FBLoginButton from '../../components/FBLoginButton';
import styles from './styles';

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
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/qp_blue_org.png')}
                    style={styles.headerImage}
                />
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
                            acceptedTerms={this.props.acceptedTerms}
                            dispatch={this.props.dispatch}
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
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    acceptedTerms: PropTypes.bool.isRequired
};

export default connect(state => ({
    acceptedTerms: state.Token.acceptedTerms
}))(SignUpContainer);
