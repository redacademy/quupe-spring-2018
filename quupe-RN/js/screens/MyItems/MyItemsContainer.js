import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MyItems from './MyItems';

export class MyItemsContainer extends Component {
    render() {
        console.log(this.props.navigation.state.params.userItems);
        return <MyItems />;
    }
}

export default MyItemsContainer;
