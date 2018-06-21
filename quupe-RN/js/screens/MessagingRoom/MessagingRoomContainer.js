import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Text, Button, View, TouchableOpacity, Image } from 'react-native';
import MessagingRoom from './MessagingRoom';

export class MessagingRoomContainer extends Component {
    // willFocus = this.props.navigation.addListener('willFocus', payload => {
    //     console.log('force');
    //     this.forceUpdate();
    // });
    render() {
        const { navigation } = this.props;
        const rooms = navigation.getParam('rooms', 'NO-ROOM');
        const currentUser = navigation.getParam('currentUser', 'NO-USER');
        const refetch = navigation.getParam('refetch', 'NO-USER');
        return (
            <View>
                <MessagingRoom
                    roomData={rooms}
                    navigation={navigation}
                    currentUser={currentUser}
                    refetch={refetch}
                />
            </View>
        );
    }
}

export default MessagingRoomContainer;
