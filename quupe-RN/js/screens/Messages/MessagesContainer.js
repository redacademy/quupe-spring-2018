import React, { Component } from 'react';
import { Text, View } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Messages from './Messages';

export class MessagesContainer extends Component {
    render() {
        const { navigation } = this.props;
        const room = navigation.getParam('room', 'NO-SPEAKER');
        const MessagesData = gql`
            query {
                Room(id: "${room.id}") {
                    id
                    messages {
                        text
                      sentBy{
                        fullname
                      }
                    }
                    people {
                        fullname
                        id
                    }
                }
            }
        `;
        return (
            <Query query={MessagesData} pollInterval={200}>
                {({
                    loading, error, data, startPolling, stopPolling
                }) => {
                    if (loading) {
                        return <Text>It is loading</Text>;
                    }
                    if (error) return <Text>Error getting items</Text>;
                    return <Messages messageData={data} />;
                }}
            </Query>
        );
    }
}

export default MessagesContainer;
