const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Mutation {
        createAuthor(name: String, age: Int): Author
    }
`