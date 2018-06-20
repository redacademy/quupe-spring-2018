import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Favorites from './Favorites';
import { findValuesRemovedFromEnums } from 'graphql/utilities/findBreakingChanges';

class FavoritesContainer extends Component {
    render() {
        return <Favorites />;
    }
}

export default FavoritesContainer;
