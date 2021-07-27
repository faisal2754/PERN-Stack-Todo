import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { UPDATE_TODO } from '../graphql/queries'

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)
  const [updateTodo] = useMutation(UPDATE_TODO)

  const updateDescription = async (e) => {
    e.preventDefault()
    try {
      await updateTodo({ variables: { id: Number(todo.todo_id), description } })
      window.location = '/'
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
            </div>

            <div className="modal-body">
              <input
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={updateDescription}>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTodo
