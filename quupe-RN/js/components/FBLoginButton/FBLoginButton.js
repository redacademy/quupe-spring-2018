import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import styles from './styles';

const FBLoginButton = props => (
    <View style={styles.loginButton}>
        <LoginButton
            readPermissions={['email']}
            onLoginFinished={(error, result) => {
                if (error) {
                    console.log(`Login failed with error: ${error.message}`);
                } else if (result.isCancelled) {
                    console.log('Login was cancelled');
                } else {
                    console.log('Login was successful with permissions: ');
                    AccessToken.getCurrentAccessToken().then(data => {
                        const { accessToken, userID } = data;
                        props.saveAuthToken(accessToken, userID);
                    });
                }
            }}
            onLogoutFinished={() => console.log('User logged out')}
        />
    </View>
);

FBLoginButton.propTypes = {
    saveAuthToken: PropTypes.func.isRequired
};

export default FBLoginButton;
