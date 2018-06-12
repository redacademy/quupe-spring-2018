import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Borrow from './Borrow';

class BorrowContainer extends Component {
  render() {
    return (
      <View>
        <Borrow />
        <Text>BorrowContainer</Text>
      </View>
    );
  }
}

export default BorrowContainer;
