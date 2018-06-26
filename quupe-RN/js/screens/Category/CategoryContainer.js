import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import Category from './Category';
import styles from './styles';

class CategoryContainer extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.dimension}>
          <Category />
        </View>
      </ScrollView>
    );
  }
}

export default CategoryContainer;
