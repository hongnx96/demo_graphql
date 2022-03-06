const { ApolloServer } = require('apollo-server-express')
const 


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