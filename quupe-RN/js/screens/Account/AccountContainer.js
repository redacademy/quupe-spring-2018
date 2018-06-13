import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Account from './Account';

class AccountContainer extends Component {
  render() {
    return (
      <View>
        <Account />
        <Text>Account Container</Text>
      </View>
    );
  }
}

export default AccountContainer;
