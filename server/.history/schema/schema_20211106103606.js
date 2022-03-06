const { gql } = require('apollo-server-express')

const typeDefs = gql`
    

    type Author {
        id: ID!
        name: String
        age: Int
       
    }
    
   

    type Mutation {
        createAuthor(name: String, age: Int): Author
    }
`

module.exports = typeDefs