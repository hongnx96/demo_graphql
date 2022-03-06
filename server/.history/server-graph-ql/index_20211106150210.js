
const server = () => {
    let apolloServer = null;
    async function startServerGraphQL() {
        apolloServer = new ApolloServer({
            typeDefs,
            resolvers,
            context: () => ({ mongoDataMethods })
        });
        await apolloServer.start();
        apolloServer.applyMiddleware({ app });
    }
}

module.exports = server