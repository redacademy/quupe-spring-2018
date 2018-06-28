import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import { distanceFormatter } from '../../lib';

const ItemThumbnail = ({
    itemData, latitude, longitude, navigation
}) => (
    <View style={{ alignItems: 'flex-start' }}>
        <TouchableOpacity
            style={styles.itemWrapper}
            onPress={() =>
                navigation.push('Item', {
                    itemData
                })
            }
        >
            <ImageBackground
                imageStyle={styles.imageStyle}
                style={styles.imageBackground}
                source={{ uri: itemData.image }}
            >
                <Text style={styles.thumbnailPrice}>${itemData.price}</Text>
            </ImageBackground>
        </TouchableOpacity>

        <Text>{itemData.title}</Text>

        <Text>
            {distanceFormatter(
                itemData.latitude,
                itemData.longitude,
                latitude,
                longitude
            )}{' '}
            km
        </Text>
    </View>
);

ItemThumbnail.defaultProps = {
    latitude: 0,
    longitude: 0
};

ItemThumbnail.propTypes = {
    itemData: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.number
    ])).isRequired,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default connect(state => ({
    latitude: state.Location.latitude,
    longitude: state.Location.longitude
}))(ItemThumbnail);
