const cors = require('cors')
const pool = require('./db')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

// ROUTES //

// Create todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    )
    res.json(newTodo.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo')
    res.json(allTodos.rows)
  } catch (err) {
    console.log(err)
  }
})

// Get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
    res.json(todo.rows)
  } catch (err) {
    console.log(err)
  }
})

// Update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const updateTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
      [description, id]
    )
    res.json(updateTodo.rows)
  } catch (err) {
    console.log(err)
  }
})

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await pool.query(
      'DELETE FROM todo WHERE todo_id = $1 RETURNING *',
      [id]
    )
    res.json(deleteTodo.rows)
  } catch (err) {
    console.log(err)
  }
})

app.listen(5000, () => {
  console.log('server started on port 5000')
})
