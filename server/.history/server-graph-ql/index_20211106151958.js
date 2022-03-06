const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const typeDefs = require('./../schema/schema')
const resolvers = require('./../resolver/resolver')
const mongoDataMethods = require('./../data/db')

let apolloServer = null
const server = async () => {
    const app = express()
    
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

module.exports = {
    server,
    apolloServer
}