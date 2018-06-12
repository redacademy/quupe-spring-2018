import express from 'express';

import cors from 'cors';
import typeDefs from './api/schema';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import resolvers from './api/resolvers';
import mongoose from 'mongoose';
import { makeExecutableSchema } from 'graphql-tools';

const app = express();
const PORT = 3333;
app.use('*', cors());

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('were connection');
});

const Item = mongoose.model('Item', { title: String });

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, context: { Item } })
);

app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql'
    })
);

app.listen(PORT, err => {
    if (err) {
        console.log('Error starting Express...', err);
    } else {
        console.log(
            `Express GraphQL Server is running. Access GraphiQL: http://localhost:${PORT}/graphiql`
        );
    }
});
