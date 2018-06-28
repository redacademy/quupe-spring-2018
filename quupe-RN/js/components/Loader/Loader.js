import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { assetColors } from '../../assets/styles';

import styles from './styles';

class Loader extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator color={assetColors.darkBlue} size="large" />
      </View>
    );
  }
}

export default Loader;
