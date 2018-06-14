import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjidp1w9z1cn30149s8454eyu'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;
