import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Lend from './Lend';

class LendContainer extends Component {
  render() {
    return (
      <View>
        <Lend />
        <Text>LendContainer</Text>
      </View>
    );
  }
}

export default LendContainer;
