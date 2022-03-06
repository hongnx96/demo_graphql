const express = require('express')
//const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors')


//const typeDefs = require('./schema/schema')
//const resolvers = require('./resolver/resolver')

//const mongoDataMethods = require('./data/db')

const {startServerGraphQL, } = require('./server-graph-ql/index')

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

const app = express()
app.use(cors())


startServerGraphQL();

// let apolloServer = null;
// async function startServerGraphQL() {
//     apolloServer = new ApolloServer({
//         typeDefs,
//         resolvers,
//         context: () => ({ mongoDataMethods })
//     });
//     await apolloServer.start();
//     apolloServer.applyMiddleware({ app });
// }
// startServerGraphQL();

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: () => ({ mongoDataMethods })
// })



//server.applyMiddleware({ app })

const PORT = 3000

app.listen(PORT, () => console.log(`Server ready at http://localhost:3000/graphql`))



