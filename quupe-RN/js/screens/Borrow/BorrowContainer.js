import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { GOOGLE_API_KEY } from 'react-native-dotenv';

import {
    getCurrentLocationName,
    getLatitude,
    getLongitude,
    getError
} from '../../redux/modules/Location';
import Borrow from './Borrow';

class BorrowContainer extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${
                    position.coords.latitude
                },${position.coords.longitude}&key=${GOOGLE_API_KEY}`)
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
            <Borrow
                latitude={this.props.latitude}
                longitude={this.props.longitude}
                navigation={this.props.navigation}
                ItemFilter={this.props.ItemFilter}
            />
        );
    }
}

BorrowContainer.defaultProps = {
    latitude: 0,
    longitude: 0,
    ItemFilter: ''
};

BorrowContainer.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    ItemFilter: PropTypes.string
};

export default connect(state => ({
    latitude: state.Location.latitude,
    longitude: state.Location.longitude,
    ItemFilter: state.ItemFilter.input
}))(BorrowContainer);
