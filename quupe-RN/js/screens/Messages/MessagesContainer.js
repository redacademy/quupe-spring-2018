import React, { Component } from 'react';
import { Text, View } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Messages from './Messages';
import {
    setMessage,
    setMessagingUser,
    setRoom
} from '../../redux/modules/MessagingRoom';

export class MessagesContainer extends Component {
    updateUser = user => {
        this.props.dispatch(setMessagingUser(user));
    };
    updateMessage = message => {
        this.props.dispatch(setMessage(message));
    };
    updateRoom = room => {
        this.props.dispatch(setRoom(room));
    };
    render() {
        const { navigation } = this.props;
        const room = navigation.getParam('room', 'NO-SPEAKER');
        const currentUser = navigation.getParam('currentUser', 'NO-USER');
        return (
            <Messages
                messageData={room}
                navigation={navigation}
                currentUser={currentUser}
                updateUser={this.updateUser.bind(this)}
                updateMessage={this.updateMessage.bind(this)}
                updateRoom={this.updateRoom.bind(this)}
            />
        );
    }
}

MessagesContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(state => ({
    messagingData: state.MessagingRoom
}))(MessagesContainer);
