const cors = require('cors')
const express = require('express')
const router = require('../router/routes')

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/todos', router)

// const main = async () => {
//   const newTodo = await prisma.todo.create({
//     data: {
//       description: 'Learn Prisma'
//     }
//   })
//   console.log('New todo added: ', newTodo)

//   const allTodos = await prisma.todo.findMany()
//   console.log('All todos: ', allTodos)
// }

// main()
//   .catch((e) => console.log(e))
//   .finally(async () => await prisma.$disconnect())

app.listen(5000, () => {
  console.log('server started on port 5000')
})
