import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Text } from 'react-native';
import MessagingRoom from './MessagingRoom';

const RoomsData = gql`
    query {
        allUsers(filter: { id: "cjig7uv0128pj0122agzcjwb0" }) {
            fullname
            rooms {
                id
            }
        }
    }
`;
export class MessagingRoomContainer extends Component {
    render() {
        const { navigation } = this.props;
        const messages = navigation.getParam('messages', 'NO-ID');
        return (
            <Query query={RoomsData}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return <Text>It is loading</Text>;
                    }
                    if (error) return <Text>Error getting items</Text>;
                    return (
                        <MessagingRoom
                            roomData={data}
                            navigation={navigation}
                            messages={messages}
                        />
                    );
                }}
            </Query>
        );
    }
}

export default withNavigation(MessagingRoomContainer);
