import React, { Component } from 'react';
import { View } from 'react-native';
import Bio from './Bio';

export class BioContainer extends Component {
    render() {
        return (
            <View>
                <Bio />
            </View>
        );
    }
}

export default BioContainer;
