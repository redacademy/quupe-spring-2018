import React, { Component } from 'react';
import { View } from 'react-native';

import Borrow from './Borrow';

// Maps is thanks to https://medium.com/@princessjanf/react-native-maps-with-direction-from-current-location-ab1a371732c2
class BorrowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }
  render() {
    return (
      <View>
        <Borrow location={this.state} />
      </View>
    );
  }
}

export default BorrowContainer;
