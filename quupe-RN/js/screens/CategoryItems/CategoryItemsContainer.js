import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import CategoryItems from './CategoryItems';

import styles from './styles';

class CategoryItemsContainer extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.dimension}>
          <CategoryItems />
        </View>
      </ScrollView>
    );
  }
}

export default CategoryItemsContainer;
