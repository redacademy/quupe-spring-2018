import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import styles from './styles';

class FBLoginButton extends Component {
    constructor() {
        super();
        this.state = {
            isCancelled: false,
            error: false
        };
    }

    render() {
        return (
            <View style={styles.loginButton}>
                <LoginButton
                    readPermissions={['email']}
                    onLoginFinished={(error, result) => {
                        if (error) {
                            this.setState({ error: true });
                        } else if (result.isCancelled) {
                            this.setState({ isCancelled: true });
                        } else {
                            AccessToken.getCurrentAccessToken().then(data => {
                                const { accessToken, userID } = data;
                                this.props.saveAuthToken(accessToken, userID);
                            });
                        }
                    }}
                />
                {this.state.isCancelled && <Text>Login was cancelled.</Text>}
                {this.state.error && (
                    <Text>There was an error logging in.</Text>
                )}
            </View>
        );
    }
}

FBLoginButton.propTypes = {
    saveAuthToken: PropTypes.func.isRequired
};

export default FBLoginButton;
