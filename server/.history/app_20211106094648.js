const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/graphQL', {
            useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
        })
    } catch (error) {
        console.log(error);
    }
}

connectDB()

//const server = new ApolloServer()

const app = express()
//server.applyMiddleware({ app })

const PORT = 3000

app.listen(PORT, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`))

