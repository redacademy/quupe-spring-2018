import React from 'react';
import { View, Text } from 'react-native';

import { SearchBar } from 'react-native-elements';

import styles from './styles';

// TODO: Change for React-Native-Elements to Algolia when all hooked up
const Filter = () => {
  return (
    <View style={styles.filterWrapper}>
      <Text style={styles.title}>What do you want to borrow today?</Text>
      <SearchBar
        inputStyle={styles.searchText}
        containerStyle={styles.searchContainer}
        placeholder="Search for an item"
      />
      <SearchBar
        inputStyle={styles.searchText}
        containerStyle={styles.searchContainer}
        icon={{ type: 'font-awesome', name: 'map-marker' }}
        placeholder="Where are you now?"
      />
    </View>
  );
};

export default Filter;
