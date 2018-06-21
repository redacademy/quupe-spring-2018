import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PropTypes from 'prop-types';

import { getLatitude, getLongitude } from '../../redux/modules/Location';

import styles from './styles';
import { assetColors } from '../../assets/styles';

// TODO: Change for React-Native-Elements to Algolia when all hooked up

const Filter = props => (
    <View style={styles.filterWrapper}>
        <Text style={styles.title}>What do you want to borrow today?</Text>
        <SearchBar
            inputStyle={styles.searchText}
            containerStyle={styles.searchContainer}
            placeholder="Search for an item"
        />

        <GooglePlacesAutocomplete
            placeholder={props.address}
            minLength={2}
            autoFocus={false}
            returnKeyType="default"
            fetchDetails
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true

                props.dispatch(getLatitude(details.geometry.location.lat));
                props.dispatch(getLongitude(details.geometry.location.lng));
            }}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyC5l4jbFsh4kmmgzwC3Y5BOXmQJJaeZaQ8',
                language: 'en', // language of the results
                types: 'address' // default: 'geocode'
            }}
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                lat: props.latitude,
                long: props.longitude
            }}
            styles={{
                textInputContainer: {
                    backgroundColor: assetColors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 2,
                    borderColor: assetColors.mediumGrey,
                    width: '95%',
                    height: 30,
                    paddingLeft: 10
                },
                textInput: {
                    paddingLeft: 0,
                    fontSize: 14,
                    height: 25,
                    color: assetColors.mediumGrey,
                    borderWidth: 0,
                    margin: 0,
                    marginBottom: 5
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                },

                listView: {
                    position: 'absolute',
                    marginTop: 35,
                    backgroundColor: assetColors.white,
                    width: '95%'
                }
            }}
            renderLeftButton={() => (
                <Ionicons
                    name="ios-pin-outline"
                    size={15}
                    color={assetColors.mediumGrey}
                />
            )}
        />
    </View>
);

Filter.defaultProps = {
    address: '',
    latitude: 0,
    longitude: 0
};

Filter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    address: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number
};

export default connect(state => ({
    address: state.Location.address,
    latitude: state.Location.latitude,
    longitude: state.Location.longitude
}))(Filter);
