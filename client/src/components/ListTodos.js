import { useMutation, useQuery } from '@apollo/client'
import EditTodo from './EditTodo'
import { GET_TODOS, DELETE_TODO } from '../graphql/queries'

const ListTodos = () => {
  const getTodos = useQuery(GET_TODOS)
  const [deleteTodoM] = useMutation(DELETE_TODO)

  // OnDelete
  const deleteTodo = async (id) => {
    try {
      await deleteTodoM({
        variables: { id: Number(id) },
        refetchQueries: [{ query: GET_TODOS }]
      })
    } catch (err) {
      console.log(err)
    }
  }

  if (getTodos.loading) return <h2 className="mt-5 text-center">Loading</h2>
  if (getTodos.error) return <h2 className="mt-5 text-center">Error</h2>

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
          {getTodos.data.todos.map((todo) => {
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
