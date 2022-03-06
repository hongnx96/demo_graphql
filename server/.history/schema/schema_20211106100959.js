const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }

    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }
    

    
    type Mutation {
        createAuthor(name: String, age: Int): Author
    }
`

module.exports = typeDefs