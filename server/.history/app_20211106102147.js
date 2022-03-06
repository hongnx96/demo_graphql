const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors')


const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const mongoDataMethods = require('./data/db')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/graphQL', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
        })

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}

connectDB()

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: () => ({ mongoDataMethods })
// })

const app = express()
app.use(cors())
server.applyMiddleware({ app })

//const PORT = 4000

app.listen({ port: process.env.PORT || 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`))



