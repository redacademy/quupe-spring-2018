import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import PropTypes from 'prop-types';

import styles from './styles';

const Map = ({ latitude, longitude }) => (
    <View style={styles.mapContainer}>
        {latitude &&
            longitude && (
            <MapView
                style={styles.map}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                <Marker
                    coordinate={{
                        latitude,
                        longitude
                    }}
                    title="Your Location"
                    description="Your Location"
                />
            </MapView>
        )}
    </View>
);

Map.defaultProps = {
    latitude: 0,
    longitude: 0
};

Map.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number
};

export default Map;
