const cors = require('cors')
const express = require('express')
const router = require('../router/routes')

const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('../schema/schema')

const startApolloServer = async () => {
  // Same ApolloServer initialization as before
  const server = new ApolloServer({ typeDefs, resolvers })

  // Required logic for integrating with Express
  await server.start()
  const app = express()

  // app middleware & routes
  app.use(cors())
  app.use(express.json())
  app.use('/todos', router)

  // apply app as middleware for main server
  server.applyMiddleware({
    app,
    path: '/'
  })

  // Modified server startup
  await new Promise((resolve) => app.listen({ port: 5000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
}

startApolloServer().catch((e) => {
  console.log(e)
})
