import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import Welcome from './Welcome';
import styles from './styles';

class WelcomeContainer extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../assets/images/quupe-app-background.jpeg')}
                style={styles.backgroundImage}
            >
                <Welcome nav={this.props.navigation} />
            </ImageBackground>
        );
    }
}

export default WelcomeContainer;
