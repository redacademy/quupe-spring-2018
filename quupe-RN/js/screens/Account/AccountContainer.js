import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Account from './Account';
import styles from './styles';

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
