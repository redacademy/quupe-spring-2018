import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Home from './Home';

class HomeContainer extends Component {
    render() {
        return (
            <View>
                <Home />
                <Text>Home Container</Text>
            </View>
        );
    }
}

export default HomeContainer;
