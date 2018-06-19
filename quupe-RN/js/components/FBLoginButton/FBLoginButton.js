import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import styles from './styles';
import { loginIsCancelled, loginHasErrored } from '../../redux/modules/Token';

const FBLoginButton = props => (
    <View style={styles.loginButton}>
        <LoginButton
            readPermissions={['email']}
            onLoginFinished={(error, result) => {
                if (error) {
                    props.dispatch(loginHasErrored());
                } else if (result.isCancelled) {
                    props.dispatch(loginIsCancelled());
                } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        const { accessToken, userID } = data;
                        props.saveAuthToken(accessToken, userID);
                    });
                }
            }}
        />
        {props.isCancelled && <Text>Login was cancelled.</Text>}
        {props.error && <Text>There was an error logging in.</Text>}
    </View>
);

FBLoginButton.defaultProps = {
    isCancelled: false,
    error: false
};

FBLoginButton.propTypes = {
    saveAuthToken: PropTypes.func.isRequired,
    isCancelled: PropTypes.bool,
    error: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

export default connect(state => ({
    isCancelled: state.Token.isCancelled,
    isError: state.Token.isError
}))(FBLoginButton);
