import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import RootStackNavigator from './navigation/RootStackNavigator';
import client from './config/apolloClient';

export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <RootStackNavigator />
            </ApolloProvider>
        );
    }
}
