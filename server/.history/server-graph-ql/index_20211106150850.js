const { ApolloServer } = require('apollo-server-express')
const ex
const typeDefs = require('./../schema/schema')
const resolvers = require('./../resolver/resolver')
const mongoDataMethods = require('./../data/db')

const server = async () => {
    let apolloServer = null;
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

module.exports = server