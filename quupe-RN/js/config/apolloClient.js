import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjidp1w9z1cn30149s8454eyu'
});

const wsLink = new WebSocketLink({
    uri: 'wss://subscriptions.graph.cool/v1/cjidp1w9z1cn30149s8454eyu',
    options: {
        reconnect: true
    }
});

const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink
);
const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

export default client;
