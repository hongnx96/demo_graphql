const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')


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

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({})
})

const app = express()
//server.applyMiddleware({ app })

const PORT = 3000

app.listen(PORT, () => console.log(`Server ready at http://localhost:3000`))

