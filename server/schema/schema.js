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

  type Mutation {
    createTodo(description: String!): Todo
    updateTodo(id: Int!, description: String!): Todo
    deleteTodo(id: Int!): Todo
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
  },
  Mutation: {
    createTodo: async (_, { description }) => {
      const newTodo = await prisma.todo.create({
        data: { description }
      })
      return newTodo
    },
    updateTodo: async (_, { id, description }) => {
      const updateTodo = await prisma.todo.update({
        where: {
          todo_id: id
        },
        data: { description }
      })
      return updateTodo
    },
    deleteTodo: async (_, { id }) => {
      const deleteTodo = await prisma.todo.delete({
        where: {
          todo_id: id
        }
      })
      return deleteTodo
    }
  }
}

module.exports = { typeDefs, resolvers }
