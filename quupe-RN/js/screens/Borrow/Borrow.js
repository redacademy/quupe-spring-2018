import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

import Filter from '../../components/Filter';
import Map from '../../components/Map';
import styles from './styles';

const Borrow = ({ latitude, longitude }) => (
    <View style={styles.page}>
        <Filter />

        <Map latitude={latitude} longitude={longitude} />
    </View>
);

Borrow.defaultProps = {
    latitude: 0,
    longitude: 0
};

Borrow.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number
};

export default Borrow;
