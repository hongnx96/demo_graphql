const { gql } = require('apollo-server-express')

const typeDefs = gql`
    

    type Author {
        id: ID!
        name: String
        age: Int
       
    }
    
    type Query {
		books: [Book]
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}

    type Mutation {
        createAuthor(name: String, age: Int): Author
    }
`

module.exports = typeDefs