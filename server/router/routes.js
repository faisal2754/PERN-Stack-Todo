const { PrismaClient } = require('@prisma/client')
const router = require('express').Router()

const prisma = new PrismaClient()

// Create todo
router.post('', async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await prisma.todo.create({
      data: { description }
    })
    res.json(newTodo)
  } catch (err) {
    console.log(err.message)
  }
})

// Get all todos
router.get('', async (req, res) => {
  try {
    const allTodos = await prisma.todo.findMany()
    res.json(allTodos)
  } catch (err) {
    console.log(err)
  }
})

// Get a todo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await prisma.todo.findUnique({
      where: {
        todo_id: Number(id)
      }
    })
    res.json(todo)
  } catch (err) {
    console.log(err)
  }
})

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const updateTodo = await prisma.todo.update({
      where: {
        todo_id: Number(id)
      },
      data: { description }
    })
    res.json(updateTodo)
  } catch (err) {
    console.log(err)
  }
})

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await prisma.todo.delete({
      where: {
        todo_id: Number(id)
      }
    })
    res.json(deleteTodo)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
