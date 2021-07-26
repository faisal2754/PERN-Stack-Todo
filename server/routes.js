const pool = require('./db')
const router = require('express').Router()

// Create todo
router.post('', async (req, res) => {
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
router.get('', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo')
    res.json(allTodos.rows)
  } catch (err) {
    console.log(err)
  }
})

// Get a todo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
    res.json(todo.rows)
  } catch (err) {
    console.log(err)
  }
})

// Update a todo
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

module.exports = router
