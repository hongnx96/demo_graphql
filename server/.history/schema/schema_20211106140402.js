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
        
    }
    
    type Query {
		authors: [Author]
		author(id: ID!): Author
	}

    type Mutation {
        createAuthor(name: String, age: Int): Author
        createBook(name: String, genre: String, authorId: ID!): Book
    }
`

module.exports = typeDefs