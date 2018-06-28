import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, Button, View, TouchableOpacity, Image } from 'react-native';
import MessagingRoom from './MessagingRoom';

export class MessagingRoomContainer extends Component {
    render() {
        const { navigation } = this.props;
        const rooms = navigation.getParam('rooms', 'NO-ROOM');
        const currentUser =
            Array.from(this.props.token.token)[0] &&
            Array.from(this.props.token.token)[0].id;
        return (
            <View>
                <MessagingRoom
                    roomData={rooms}
                    navigation={navigation}
                    currentUser={currentUser}
                    message={this.props.messagingData.message}
                    user={this.props.messagingData.user}
                    roomDataId={this.props.messagingData.room}
                />
            </View>
        );
    }
}

export default connect(state => ({
    messagingData: state.MessagingRoom,
    token: state.Token
}))(MessagingRoomContainer);

MessagingRoomContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};
