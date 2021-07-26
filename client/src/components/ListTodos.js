import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import EditTodo from './EditTodo'
import { GET_TODOS } from '../graphql/queries'

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  const { loading, error, data } = useQuery(GET_TODOS)

  // DELETE Request
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      })

      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  // GET Request
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const jsonData = await response.json()
      console.log(data)
      setTodos(jsonData)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTodos()
  }, [data])

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos
