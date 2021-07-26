const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    bruh: String
  }
`
const resolvers = {
  Query: {
    bruh: () => 'lmao'
  }
}

module.exports = { typeDefs, resolvers }
