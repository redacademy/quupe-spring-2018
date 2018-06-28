import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Filter from '../../components/Filter';
import Map from '../../components/Map';

import styles from './styles';

const Borrow = ({
    latitude, longitude, navigation, ItemFilter
}) => (
    <View style={styles.page}>
        <Filter />
        <View style={styles.mapWrapper}>
            <Map latitude={latitude} longitude={longitude} />
        </View>
        <View style={styles.btnWrapper}>
            {ItemFilter && latitude && longitude ? (
                <TouchableOpacity
                    style={styles.searchBtnClickable}
                    onPress={() =>
                        navigation.push('BorrowForm', {
                            latitude,
                            longitude
                        })
                    }
                >
                    <Text style={styles.searchBtnText}> Search </Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.searchBtn}>
                    <Text style={styles.searchBtnText}> Search </Text>
                </View>
            )}
        </View>
    </View>
);

Borrow.defaultProps = {
    latitude: 0,
    longitude: 0,
    ItemFilter: ''
};

Borrow.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    ItemFilter: PropTypes.string
};

export default connect(state => ({
    ItemFilter: state.ItemFilter.input
}))(Borrow);
