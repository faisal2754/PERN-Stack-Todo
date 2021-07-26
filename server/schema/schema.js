const { PrismaClient } = require('@prisma/client')
const { gql } = require('apollo-server-express')

const prisma = new PrismaClient()

const typeDefs = gql`
  type Todo {
    todo_id: ID!
    description: String!
  }

  type Query {
    bruh: String
    todos: [Todo]
    todo(id: Int!): Todo
  }
`
const resolvers = {
  Query: {
    bruh: () => 'lmao',
    todos: async () => {
      const allTodos = await prisma.todo.findMany()
      return allTodos
    },
    todo: async (_, { id }) => {
      const todo = await prisma.todo.findUnique({
        where: {
          todo_id: id
        }
      })
      return todo
    }
  }
}

module.exports = { typeDefs, resolvers }
