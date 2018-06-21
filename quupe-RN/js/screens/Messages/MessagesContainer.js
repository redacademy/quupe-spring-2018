import React, { Component } from 'react';
import { Text, View } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import Messages from './Messages';

export class MessagesContainer extends Component {
    render() {
        const { navigation } = this.props;
        const room = navigation.getParam('room', 'NO-SPEAKER');
        const currentUser = navigation.getParam('currentUser', 'NO-USER');
        return (
            <Messages
                messageData={room}
                navigation={navigation}
                currentUser={currentUser}
            />
        );
    }
}

export default withNavigation(MessagesContainer);
