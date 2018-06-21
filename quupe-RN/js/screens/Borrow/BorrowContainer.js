import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import {
    getCurrentLocationName,
    getLatitude,
    getLongitude,
    getError
} from '../../redux/modules/Location';
import Borrow from './Borrow';

// Maps is thanks to https://medium.com/@princessjanf/react-native-maps-with-direction-from-current-location-ab1a371732c2
class BorrowContainer extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${
                    position.coords.latitude
                },${
                    position.coords.longitude
                }&key=AIzaSyC5l4jbFsh4kmmgzwC3Y5BOXmQJJaeZaQ8`)
                    .then(response => response.json())
                    .then(res =>
                        this.props.dispatch(getCurrentLocationName(res.results[0].formatted_address)));
            },
            error => this.props.dispatch(getError(error.messages))
        );
        navigator.geolocation.getCurrentPosition(
            position => {
                this.props.dispatch(getLatitude(position.coords.latitude));
                this.props.dispatch(getLongitude(position.coords.longitude));
            },
            error => this.props.dispatch(getError(error.messages)),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
        );
    }

    render() {
        return (
            <View>
                <Borrow
                    latitude={this.props.latitude}
                    longitude={this.props.longitude}
                />
            </View>
        );
    }
}

BorrowContainer.defaultProps = {
    latitude: 0,
    longitude: 0
};

BorrowContainer.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

export default connect(state => ({
    latitude: state.Location.latitude,
    longitude: state.Location.longitude
}))(BorrowContainer);
