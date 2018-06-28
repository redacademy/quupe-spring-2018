import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Lend from './Lend';

class LendContainer extends Component {
    render() {
        return <Lend navigation={this.props.navigation} />;
    }
}

LendContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default LendContainer;
