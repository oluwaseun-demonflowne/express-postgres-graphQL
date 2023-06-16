const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Student {
    name: String
    class: String
    state: String
    nationality: String
  }

  input NewStudent {
    name: String
    class:String
    state:String
    nationality: String
  }

  type Query {
    getAllStudents: [Student]
  }

  type Mutation {
    createNewStudent(newStudent: NewStudent): Student!
  }

`

module.exports = typeDefs;