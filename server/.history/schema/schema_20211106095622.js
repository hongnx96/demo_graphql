const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
}
`