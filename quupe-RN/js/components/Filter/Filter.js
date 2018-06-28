import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

import { GOOGLE_API_KEY } from 'react-native-dotenv';
import Autocomplete from 'react-native-autocomplete-input';

import {
    getCurrentLocationName,
    getLatitude,
    getLongitude
} from '../../redux/modules/Location';
import {
    getInputValue,
    showItemList,
    hideItemList
} from '../../redux/modules/ItemFilter';

import styles from './styles';
import { assetColors } from '../../assets/styles';

const itemFilter = gql`
    {
        allItems {
            id
            image
            title
            category
            description
            latitude
            longitude
            price
            priceOneWeek
            priceOneMonth
        }
    }
`;

const Filter = props => (
    <View style={styles.filterWrapper}>
        <Text style={styles.title}>What do you want to borrow today?</Text>

        <View style={styles.itemTextInputWrapper}>
            <Ionicons
                style={styles.ionicon}
                name="ios-search-outline"
                size={15}
                color={assetColors.mediumGrey}
            />

            <Query query={itemFilter}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading</Text>;
                    if (error) return <Text>{error.message}</Text>;
                    return (
                        <Autocomplete
                            autoCapitalize="none"
                            autoCorrect={false}
                            containerStyle={styles.itemTextInput}
                            inputContainerStyle={styles.inputContainerStyle}
                            data={
                                props.itemFilter && data.allItems.length !== 1
                                    ? data.allItems.filter(item =>
                                        item.title
                                            .toLowerCase()
                                            .trim()
                                            .includes(props.itemFilter
                                                .toLowerCase()
                                                .trim()))
                                    : []
                            }
                            defaultValue={props.itemFilter}
                            onChangeText={input => {
                                props.dispatch(getInputValue(input));
                                props.dispatch(showItemList());
                            }}
                            placeholder="Search for an item"
                            hideResults={props.itemFilterList}
                            renderItem={({ title }) => (
                                <TouchableOpacity
                                    style={styles.filteredItems}
                                    onPress={() => {
                                        props.dispatch(getInputValue(title));
                                        props.dispatch(hideItemList());
                                    }}
                                >
                                    <Text>{title}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    );
                }}
            </Query>
        </View>

        <GooglePlacesAutocomplete
            placeholder={props.address}
            minLength={2}
            autoFocus={false}
            returnKeyType="default"
            fetchDetails
            onPress={(data, details = null) => {
                props.dispatch(getLatitude(details.geometry.location.lat));
                props.dispatch(getLongitude(details.geometry.location.lng));

                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${
                    details.geometry.location.lat
                },${details.geometry.location.lng}&key=${GOOGLE_API_KEY}`)
                    .then(resp => resp.json())
                    .then(res =>
                        props.dispatch(getCurrentLocationName(res.results[0].formatted_address)));
            }}
            query={{
                key: GOOGLE_API_KEY,
                language: 'en', // language of the results
                types: 'address' // default: 'geocode'
            }}
            GoogleReverseGeocodingQuery={{
                lat: props.latitude,
                long: props.longitude
            }}
            styles={{
                textInputContainer: styles.textInputContainer,
                textInput: styles.textInput,
                predefinedPlacesDescription: styles.predefinedPlacesDescription,
                listView: styles.listView
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
    longitude: 0,
    itemFilter: ''
};

Filter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    address: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    itemFilter: PropTypes.string,
    itemFilterList: PropTypes.bool.isRequired
};

export default connect(state => ({
    address: state.Location.address,
    latitude: state.Location.latitude,
    longitude: state.Location.longitude,
    itemFilter: state.ItemFilter.input,
    itemFilterList: state.ItemFilter.itemList
}))(Filter);
