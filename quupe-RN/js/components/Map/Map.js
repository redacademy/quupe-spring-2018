import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const Map = ({ location }) => {
  console.log(location.latitude);
  console.log(location.longitude);
  return (
    <View style={styles.mapContainer}>
      {location.latitude &&
        location.longitude && (
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: .3,
              longitudeDelta: .3
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude
              }}
              title={'Your Location'}
            />
          </MapView>
        )}
    </View>
  );
};

export default Map;
