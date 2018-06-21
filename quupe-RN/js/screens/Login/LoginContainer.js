import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import Login from './Login';
import styles from './styles';

class LoginContainer extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../assets/images/quupe-app-background.jpeg')}
                style={styles.backgroundImage}
            >
                <Login nav={this.props.navigation} />
            </ImageBackground>
        );
    }
}

export default LoginContainer;
