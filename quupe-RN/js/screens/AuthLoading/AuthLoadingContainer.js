import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class AuthLoadingContainer extends Component {
    componentDidMount() {
        const { token } = this.props;
        const userToken = Array.from(token)[0];
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    render() {
        return <ActivityIndicator style={styles.loading} />;
    }
}

export default connect(state => ({
    token: state.Token.token
}))(AuthLoadingContainer);
