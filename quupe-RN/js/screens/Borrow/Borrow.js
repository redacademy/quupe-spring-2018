import React from 'react';
import { View } from 'react-native';

import Filter from '../../components/Filter';
import Map from '../../components/Map';
import styles from './styles';

const Borrow = ({ location }) => {
  return (
    <View style={styles.page}>
      <Filter />
      <Map location={location} />
    </View>
  );
};

export default Borrow;
